#!/usr/bin/env node
/**
 * Informational ENTRY check for entries added by a pull request.
 *
 * This script is deliberately narrow and read-only:
 *
 *  - It reads added `- [name](url) - description` lines from a diff of
 *    README.md / README.zh-CN.md. Only `+` lines are considered.
 *  - It resolves the entry's GitHub repository to a published npm package by
 *    reading `<repo>/HEAD/package.json` from raw.githubusercontent.com, then
 *    requiring registry.npmjs.org to report that the package's repository
 *    points back at the same repository. A bare package name can be squatted,
 *    so the backlink is checked before anything is downloaded.
 *  - It downloads only the published tarball with
 *    `npm pack --ignore-scripts`, checks the tar member paths, unpacks it, and
 *    runs `dsh-standards@1.6.8` with
 *    `--scope entry --entry-claim static --no-exec`.
 *  - It never clones a source repository. Source trees often omit `lib/`
 *    (the release build adds it), which the ENTRY checker would report as a
 *    missing entry against C-1.2. The published tarball is the subject.
 *  - It never runs package code: `--ignore-scripts` covers npm, and
 *    `--no-exec` covers the checker. Nothing from the tarball is installed or
 *    imported.
 *  - It publishes no verdict. The summary carries the checker exit code,
 *    counts, and the checks that did not run. FLOW stays `not-run` and BOOST
 *    stays `not-measured` as fixed constants: this check collects neither a
 *    FLOW evidence file nor a BOOST/LEV evidence card.
 *  - Every path exits 0. An entry that cannot be resolved is reported as
 *    `not_run` with a reason; it is never omitted and never treated as clean.
 *    The workflow sets `continue-on-error: true` as a second layer.
 *
 * Usage:
 *   node scripts/check-entry.mjs --diff <file> [--checker <bin>]
 *     [--out-dir <dir>] [--summary <file>] [--max 3]
 *
 * The diff file is produced by:
 *   git diff --unified=0 <base-sha>...HEAD -- README.md README.zh-CN.md
 */
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

export const REGISTRY = 'https://registry.npmjs.org/'
export const CHECKER_PACKAGE = 'dsh-standards'
export const CHECKER_VERSION = '1.6.8'
export const CHECKER_NODE_MAJOR = 24
export const MAX_ENTRIES = 3
export const README_FILES = Object.freeze(['README.md', 'README.zh-CN.md'])
export const CHECKER_ARGS = Object.freeze(['--scope', 'entry', '--entry-claim', 'static', '--no-exec'])
export const SCHEMA = 'awesome-dsh-entry-check/1'

export const FLOW = Object.freeze({
  state: 'not-run',
  reason: 'no FLOW evidence is collected by this ENTRY-only check; dsh-levels needs a dsh-flow-evidence/2 file',
})
export const BOOST = Object.freeze({
  state: 'not-measured',
  reason: 'no BOOST/LEV evidence is supplied to this ENTRY-only check; dsh-levels does not run benchmarks',
})

const RAW_BASE = 'https://raw.githubusercontent.com/'
const USER_AGENT = 'awesome-deepseek-harness-entry-check'
const FETCH_TIMEOUT_MS = 20_000
const PACK_TIMEOUT_MS = 120_000
const EXTRACT_TIMEOUT_MS = 60_000
const CHECKER_TIMEOUT_MS = 120_000
const MAX_TARBALL_BYTES = 30 * 1024 * 1024
const MAX_TARBALL_ENTRIES = 5000

const firstLine = (value) => {
  const text = String(value ?? '').replace(/\s+/g, ' ').trim()
  return text.length > 400 ? `${text.slice(0, 397)}...` : text
}

const isInside = (root, target) => {
  const rel = path.relative(path.resolve(root), path.resolve(target))
  return rel !== '' && !rel.startsWith('..') && !path.isAbsolute(rel)
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

function githubTarget(owner, repo, ref = null, subdir = null) {
  if (!owner || !repo) return null
  if (!/^[A-Za-z0-9_.-]+$/.test(owner) || !/^[A-Za-z0-9_.-]+$/.test(repo)) return null
  if (owner === '.' || owner === '..' || repo === '.' || repo === '..') return null
  if (subdir !== null) {
    const segments = subdir.split('/')
    if (!subdir || segments.some((segment) => !segment || segment === '.' || segment === '..')) return null
  }
  return {
    owner,
    repo,
    ref,
    subdir,
    repoSlug: `${owner}/${repo}`.toLowerCase(),
  }
}

/**
 * Parse the GitHub repository (and optional ref/subdirectory) out of the URL
 * shapes entries use:
 *   https://github.com/owner/repo
 *   https://github.com/owner/repo/tree/main/packages/foo
 *   https://github.com/owner/repo/blob/main/packages/foo/package.json
 *   git+https://github.com/owner/repo.git
 *   git@github.com:owner/repo.git
 * Returns null for anything that is not a GitHub repository URL. Other hosts
 * are deliberately unsupported: the registry backlink is compared against a
 * GitHub owner/repo slug, and guessing at another host's identity would make
 * the anti-squatting check weaker.
 */
export function parseGithubRepoUrl(value) {
  if (typeof value !== 'string') return null
  let text = value.trim()
  if (!text) return null

  const scp = /^(?:ssh:\/\/)?git@github\.com[:/]([^/\s]+)\/([^/\s#?]+?)(?:\.git)?(?:[#?].*)?$/i.exec(text)
  if (scp) return githubTarget(scp[1], scp[2])

  text = text.replace(/^git\+/i, '')
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(text)) text = `https://${text}`
  let url
  try {
    url = new URL(text)
  } catch {
    return null
  }
  if (!/^(?:www\.)?github\.com$/i.test(url.hostname)) return null

  const parts = url.pathname.split('/').filter(Boolean).map(safeDecode)
  if (parts.length < 2) return null
  const repo = parts[1].replace(/\.git$/i, '')
  if (!parts[0] || !repo) return null

  let ref = null
  let subdir = null
  const kind = (parts[2] ?? '').toLowerCase()
  if (kind === 'tree' && parts.length >= 4) {
    ref = parts[3] || null
    subdir = parts.slice(4).join('/') || null
  } else if (kind === 'blob' && parts.length >= 4) {
    ref = parts[3] || null
    const file = parts.slice(4).join('/')
    const slash = file.lastIndexOf('/')
    subdir = slash > 0 ? file.slice(0, slash) : null
  }
  return githubTarget(parts[0], repo, ref, subdir)
}

/**
 * Normalize a repository value to `owner/repo` (lowercase). Accepts the
 * registry's string/object forms, `github:owner/repo`, git URLs, and bare
 * `owner/repo`. Returns null when there is no GitHub repository to compare.
 */
export function normalizeRepoSlug(value) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return normalizeRepoSlug(value.url ?? value.repository ?? null)
  }
  if (typeof value !== 'string') return null
  const text = value.trim()
  if (!text) return null

  const shorthand = /^github:([^/\s]+)\/([^/\s#?]+?)(?:\.git)?$/i.exec(text)
  if (shorthand) return `${shorthand[1]}/${shorthand[2]}`.toLowerCase()

  const parsed = parseGithubRepoUrl(text)
  if (parsed) return parsed.repoSlug

  const bare = /^([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+?)(?:\.git)?$/.exec(text)
  if (bare && !bare[1].includes('.')) return `${bare[1]}/${bare[2]}`.toLowerCase()
  return null
}

/**
 * Repository declared by the registry for the version being checked. The
 * version manifest wins over the packument's top-level field, which npm keeps
 * from the first publication and which can survive a repository rename. If a
 * version manifest declares a repository, a mismatching top-level value is not
 * used as a fallback: that would let a stale field defeat the check.
 */
export function registryRepositoryFor(meta, version = null) {
  const manifest = version && meta?.versions ? meta.versions[version] : null
  if (manifest && manifest.repository !== undefined && manifest.repository !== null && manifest.repository !== '') {
    return { slug: normalizeRepoSlug(manifest.repository), from: 'version' }
  }
  if (meta && meta.repository !== undefined && meta.repository !== null && meta.repository !== '') {
    return { slug: normalizeRepoSlug(meta.repository), from: 'package' }
  }
  return { slug: null, from: null }
}

/** Accept only when the registry's repository is exactly the entry's repo. */
export function registryRepositoryMatches(meta, target, version = null) {
  const expected = typeof target === 'string' ? normalizeRepoSlug(target) : target?.repoSlug ?? null
  if (!expected) return { ok: false, slug: null, from: null, reason: 'no GitHub repository to compare against' }
  const { slug, from } = registryRepositoryFor(meta, version)
  if (!slug) return { ok: false, slug: null, from, reason: 'registry metadata has no GitHub repository field' }
  if (slug !== expected) {
    return { ok: false, slug, from, reason: `registry repository ${slug} does not match ${expected}` }
  }
  return { ok: true, slug, from, reason: null }
}

export function latestVersion(meta) {
  const latest = meta?.['dist-tags']?.latest
  if (typeof latest === 'string' && latest && meta?.versions?.[latest]) return latest
  return null
}

export function isValidPackageName(name) {
  if (typeof name !== 'string' || !name || name.length > 214) return false
  return /^(?:@[a-z0-9][a-z0-9._~-]*\/)?[a-z0-9][a-z0-9._~-]*$/.test(name)
}

/** Parse one added README line; returns null for anything else. */
export function parseEntryLine(line) {
  const match = /^\s*-\s+\[([^\]]+)\]\(([^)\s]+)\)\s+[-\u2013\u2014]\s+(.+?)\s*$/.exec(String(line))
  if (!match) return null
  const url = match[2].trim().replace(/^<|>$/g, '')
  if (!/^https?:\/\//i.test(url)) return null
  return {
    name: match[1].trim(),
    url,
    description: match[3].trim(),
  }
}

function diffPath(header) {
  let value = String(header ?? '').trim().split('\t')[0]
  if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1)
  if (value.startsWith('b/')) value = value.slice(2)
  value = value.replaceAll('\\', '/').replace(/^\.\//, '')
  return value
}

/**
 * Extract added entry lines from a `git diff --unified=0` of the READMEs.
 * Only `+` lines inside hunks are read. A `+++` content line inside a hunk is
 * treated as content, not as a file header.
 */
export function parseAddedEntries(diffText) {
  const entries = []
  let file = null
  let inHunk = false

  for (const line of String(diffText ?? '').split(/\r?\n/)) {
    if (line.startsWith('diff --git ')) {
      file = null
      inHunk = false
      continue
    }
    if (!inHunk && line.startsWith('+++ ')) {
      file = diffPath(line.slice(4))
      if (!README_FILES.includes(file)) file = null
      continue
    }
    if (!inHunk && line.startsWith('@@')) {
      inHunk = true
      continue
    }
    if (!inHunk) continue
    if (!line.startsWith('+')) continue
    if (!file) continue
    const parsed = parseEntryLine(line.slice(1))
    if (parsed) entries.push({ ...parsed, file })
  }
  return entries
}

/** Deduplicate by repository/subdirectory, then cap at MAX_ENTRIES. */
export function selectEntries(entries, max = MAX_ENTRIES) {
  const seen = new Set()
  const unique = []
  for (const entry of entries ?? []) {
    const target = parseGithubRepoUrl(entry.url)
    const key = target ? `${target.repoSlug}#${target.subdir ?? ''}` : `url:${entry.url}`
    if (seen.has(key)) continue
    seen.add(key)
    unique.push(entry)
  }
  const limit = Math.max(1, Math.min(Number.isInteger(max) ? max : MAX_ENTRIES, MAX_ENTRIES))
  return {
    selected: unique.slice(0, limit),
    total: (entries ?? []).length,
    unique: unique.length,
    duplicates: Math.max(0, (entries ?? []).length - unique.length),
    skipped: Math.max(0, unique.length - limit),
    limit,
  }
}

function rawUrlFor(target, ref, packagePath) {
  const refPart = String(ref || 'HEAD').split('/').map(encodeURIComponent).join('/')
  const pathPart = packagePath.split('/').map(encodeURIComponent).join('/')
  return `${RAW_BASE}${encodeURIComponent(target.owner)}/${encodeURIComponent(target.repo)}/${refPart}/${pathPart}`
}

function registryUrl(name) {
  return `${REGISTRY}${name}`
}

async function request(url, fetchImpl, accept) {
  let lastError = null
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetchImpl(url, {
        headers: { accept, 'user-agent': USER_AGENT },
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      })
      if (response && response.status >= 500 && attempt === 0) {
        lastError = new Error(`HTTP ${response.status}`)
        await new Promise((resolve) => setTimeout(resolve, 250))
        continue
      }
      return response
    } catch (error) {
      lastError = error
      if (attempt === 0) await new Promise((resolve) => setTimeout(resolve, 250))
    }
  }
  throw lastError ?? new Error('request failed')
}

async function fetchText(url, fetchImpl) {
  let response
  try {
    response = await request(url, fetchImpl, 'text/plain, application/json')
  } catch (error) {
    throw new Error(`${url}: ${firstLine(error?.message ?? error)}`)
  }
  if (!response || !response.ok) throw new Error(`${url}: HTTP ${response?.status ?? 'no response'}`)
  try {
    return await response.text()
  } catch (error) {
    throw new Error(`${url}: could not read the body (${firstLine(error?.message ?? error)})`)
  }
}

async function fetchJson(url, fetchImpl) {
  let response
  try {
    response = await request(url, fetchImpl, 'application/json')
  } catch (error) {
    throw new Error(`${url}: ${firstLine(error?.message ?? error)}`)
  }
  if (!response || !response.ok) throw new Error(`${url}: HTTP ${response?.status ?? 'no response'}`)
  try {
    return await response.json()
  } catch (error) {
    throw new Error(`${url}: invalid JSON (${firstLine(error?.message ?? error)})`)
  }
}

/**
 * Resolve one entry to a published npm package. There is intentionally no
 * second source: if the repository cannot be resolved through its
 * `package.json` and a matching registry backlink, the entry is `not_run`.
 */
export async function resolveEntry(entry, { fetchImpl = globalThis.fetch } = {}) {
  const target = parseGithubRepoUrl(entry?.url)
  if (!target) return { ok: false, target: null, reason: 'url: not a parseable GitHub repository URL' }

  const ref = target.ref || 'HEAD'
  const packagePath = target.subdir ? `${target.subdir}/package.json` : 'package.json'
  let pkg
  try {
    pkg = JSON.parse(await fetchText(rawUrlFor(target, ref, packagePath), fetchImpl))
  } catch (error) {
    return { ok: false, target, reason: `url: ${firstLine(error?.message ?? error)}` }
  }
  const name = typeof pkg?.name === 'string' ? pkg.name.trim() : ''
  if (!name) return { ok: false, target, reason: `url: ${packagePath} declares no package name` }
  if (!isValidPackageName(name)) {
    return { ok: false, target, name, reason: `url: ${packagePath} declares an invalid npm package name` }
  }

  let meta
  try {
    meta = await fetchJson(registryUrl(name), fetchImpl)
  } catch (error) {
    return { ok: false, target, name, reason: `url: ${firstLine(error?.message ?? error)}` }
  }
  if (meta?.name && meta.name !== name) {
    return { ok: false, target, name, reason: `url: registry name ${firstLine(meta.name)} does not match ${name}` }
  }
  const version = latestVersion(meta)
  if (!version) return { ok: false, target, name, reason: 'url: registry has no dist-tags.latest version' }
  const backlink = registryRepositoryMatches(meta, target, version)
  if (!backlink.ok) return { ok: false, target, name, version, reason: `url: ${backlink.reason}` }

  return {
    ok: true,
    repo: target.repoSlug,
    name,
    version,
    subdir: target.subdir,
    ref,
    registryRepository: backlink.slug,
    registrySource: backlink.from,
  }
}

/**
 * Read the installed checker's own package.json. The workflow pins 1.6.8 and
 * asserts `--version`; this is the in-process guard for a local run or a
 * drifted install, so a report cannot say 1.6.8 while another checker ran.
 */
export function checkerVersionAt(checkerPath) {
  if (typeof checkerPath !== 'string' || !checkerPath) return null
  try {
    const pkg = JSON.parse(fs.readFileSync(path.resolve(path.dirname(checkerPath), '..', 'package.json'), 'utf8'))
    return pkg?.name === CHECKER_PACKAGE && typeof pkg.version === 'string' ? pkg.version : null
  } catch {
    return null
  }
}

export function inspectChecker(checkerPath) {
  if (!checkerPath) return { ok: false, path: null, version: null, reason: 'no checker path supplied' }
  const absolute = path.resolve(checkerPath)
  if (!fs.existsSync(absolute)) return { ok: false, path: absolute, version: null, reason: `checker not found at ${absolute}` }
  const nodeMajor = Number.parseInt(process.versions.node.split('.')[0], 10)
  if (!Number.isInteger(nodeMajor) || nodeMajor < CHECKER_NODE_MAJOR) {
    return { ok: false, path: absolute, version: null, reason: `Node ${CHECKER_NODE_MAJOR}+ is required by ${CHECKER_PACKAGE}@${CHECKER_VERSION}; running Node ${process.versions.node}` }
  }
  const version = checkerVersionAt(absolute)
  if (!version) return { ok: false, path: absolute, version: null, reason: `could not read ${CHECKER_PACKAGE}'s package.json at ${absolute}` }
  if (version !== CHECKER_VERSION) {
    return { ok: false, path: absolute, version, reason: `checker is ${CHECKER_PACKAGE}@${version}, not the pinned ${CHECKER_VERSION}` }
  }
  return { ok: true, path: absolute, version, reason: null }
}

function tarballEntries(tgz) {
  const list = spawnSync('tar', ['-tzf', tgz], {
    encoding: 'utf8',
    timeout: EXTRACT_TIMEOUT_MS,
    maxBuffer: 32 * 1024 * 1024,
  })
  if (list.error) throw new Error(`could not list ${path.basename(tgz)}: ${firstLine(list.error.message)}`)
  if (list.status !== 0) throw new Error(`could not list ${path.basename(tgz)}: ${firstLine(list.stderr)}`)
  return String(list.stdout ?? '').split(/\r?\n/).filter(Boolean)
}

function packAndUnpack(candidate, workRoot) {
  const packDir = path.join(workRoot, 'pack')
  const extractDir = path.join(workRoot, 'unpacked')
  fs.mkdirSync(packDir, { recursive: true })
  fs.mkdirSync(extractDir, { recursive: true })

  const spec = `${candidate.name}@${candidate.version}`
  // Run npm from the scratch pack directory, not the checkout: npm reads
  // `.npmrc` from its cwd, and a pull-request-supplied `.npmrc` must not be
  // able to redirect this fetch away from registry.npmjs.org.
  const packed = spawnSync(
    'npm',
    ['pack', '--ignore-scripts', '--registry', REGISTRY, '--pack-destination', packDir, '--', spec],
    {
      cwd: packDir,
      encoding: 'utf8',
      timeout: PACK_TIMEOUT_MS,
      maxBuffer: 16 * 1024 * 1024,
      env: {
        ...process.env,
        npm_config_registry: REGISTRY,
        npm_config_ignore_scripts: 'true',
        npm_config_update_notifier: 'false',
        npm_config_audit: 'false',
        npm_config_fund: 'false',
        NO_COLOR: '1',
      },
    },
  )
  if (packed.error) throw new Error(`npm pack ${spec} did not start: ${firstLine(packed.error.message)}`)
  if (packed.status !== 0) throw new Error(`npm pack ${spec} exited ${packed.status}: ${firstLine(packed.stderr)}`)

  const filename = String(packed.stdout ?? '').trim().split(/\r?\n/).filter(Boolean).pop() ?? ''
  if (!filename.endsWith('.tgz') || path.basename(filename) !== filename) {
    throw new Error(`npm pack ${spec} printed no safe tarball name`)
  }
  const tgz = path.resolve(packDir, filename)
  if (!isInside(packDir, tgz) || !fs.existsSync(tgz)) {
    throw new Error(`npm pack ${spec} said it wrote ${filename}, but the file is absent or outside the scratch directory`)
  }
  const tarballSize = fs.statSync(tgz).size
  if (tarballSize > MAX_TARBALL_BYTES) {
    throw new Error(`tarball ${filename} is ${tarballSize} bytes (limit ${MAX_TARBALL_BYTES})`)
  }

  // A published tarball is third-party input. Reject absolute paths, `..`,
  // and backslash separators before extraction rather than trusting tar.
  const entries = tarballEntries(tgz)
  if (entries.length > MAX_TARBALL_ENTRIES) {
    throw new Error(`tarball ${filename} has ${entries.length} entries (limit ${MAX_TARBALL_ENTRIES})`)
  }
  const unsafe = entries.find((name) => name.startsWith('/') || name.includes('\\') || name.split('/').includes('..'))
  if (unsafe) throw new Error(`tarball ${filename} contains an unsafe path: ${firstLine(unsafe)}`)

  // Reject links and special files before extraction. Nothing here needs to
  // follow a link, and a link is the one tar member that can point outside the
  // scratch directory.
  const verbose = spawnSync('tar', ['-tvzf', tgz], {
    encoding: 'utf8',
    timeout: EXTRACT_TIMEOUT_MS,
    maxBuffer: 32 * 1024 * 1024,
  })
  if (verbose.error) throw new Error(`could not inspect ${filename}: ${firstLine(verbose.error.message)}`)
  if (verbose.status !== 0) throw new Error(`could not inspect ${filename}: ${firstLine(verbose.stderr)}`)
  const special = String(verbose.stdout ?? '').split(/\r?\n/).find((line) => /^[lhbcp]/.test(line))
  if (special) throw new Error(`tarball ${filename} contains a link or special file: ${firstLine(special)}`)

  const untar = spawnSync('tar', ['-xzf', tgz, '-C', extractDir, '--no-same-owner', '--no-same-permissions'], {
    encoding: 'utf8',
    timeout: EXTRACT_TIMEOUT_MS,
    maxBuffer: 16 * 1024 * 1024,
  })
  if (untar.error) throw new Error(`could not unpack ${filename}: ${firstLine(untar.error.message)}`)
  if (untar.status !== 0) throw new Error(`could not unpack ${filename}: ${firstLine(untar.stderr)}`)

  const packageDir = path.join(extractDir, 'package')
  if (!fs.existsSync(path.join(packageDir, 'package.json'))) {
    throw new Error(`${filename} did not contain package/package.json`)
  }
  return { tgz: filename, packageDir }
}

export function extractCounts(report) {
  const coverage = report?.coverage ?? {}
  const entry = coverage.entryBlocking ?? null
  const notChecked = Array.isArray(report?.notChecked) ? report.notChecked : []
  const int = (value) => (Number.isInteger(value) ? value : null)
  return {
    total: int(coverage.total),
    checked: int(coverage.checked),
    fail: int(coverage.fail),
    warn: int(coverage.warn),
    na: int(coverage.na),
    notRun: int(coverage.notRun),
    partial: int(coverage.partial),
    error: int(coverage.error),
    notRunIds: notChecked.filter((item) => item?.coverage === 'not-run').map((item) => item.id).filter(Boolean),
    partialIds: notChecked.filter((item) => item?.coverage === 'partial').map((item) => item.id).filter(Boolean),
    entry: entry
      ? {
          required: int(entry.required),
          checked: Array.isArray(entry.checked) ? entry.checked.length : null,
          failed: Array.isArray(entry.failed) ? entry.failed.length : null,
          notChecked: Array.isArray(entry.notChecked) ? entry.notChecked.length : null,
        }
      : null,
  }
}

export function classifyCheckerExit(code) {
  if (code === 0) return { status: 'checked', label: 'completed; no blocking finding reported' }
  if (code === 1) return { status: 'checked', label: 'completed; blocking findings reported' }
  if (code === 2) return { status: 'incomplete', label: 'incomplete; a mandatory check did not run or the checker failed' }
  return { status: 'not_run', label: `not_run; checker exit ${code === null ? 'none' : code}` }
}

export function runCheckerOnDir(packageDir, checkerPath, workDir) {
  const reportPath = path.join(workDir, 'checker-report.json')
  fs.rmSync(reportPath, { force: true })
  const result = spawnSync(
    process.execPath,
    [checkerPath, packageDir, ...CHECKER_ARGS, '--format', 'json', '--out', reportPath],
    {
      encoding: 'utf8',
      timeout: CHECKER_TIMEOUT_MS,
      maxBuffer: 32 * 1024 * 1024,
      env: { ...process.env, NO_COLOR: '1' },
    },
  )
  if (result.error) {
    return {
      ...classifyCheckerExit(null),
      exitCode: null,
      counts: null,
      stderr: firstLine(result.error.message),
    }
  }
  const exitCode = Number.isInteger(result.status) ? result.status : null
  const classification = classifyCheckerExit(exitCode)
  let report = null
  try {
    report = JSON.parse(fs.readFileSync(reportPath, 'utf8'))
  } catch {
    // A checker that exits without a readable report has produced no evidence.
  }
  if (!report) {
    return {
      ...classification,
      status: 'not_run',
      exitCode,
      counts: null,
      stderr: firstLine(result.stderr),
      reason: `checker wrote no readable report; exit ${exitCode === null ? 'none' : exitCode}`,
    }
  }
  return {
    ...classification,
    exitCode,
    counts: extractCounts(report),
    stderr: firstLine(result.stderr),
    reason: classification.status === 'incomplete' ? classification.label : null,
  }
}

async function profileEntry(entry, context) {
  const base = {
    file: entry.file,
    name: entry.name,
    url: entry.url,
    repo: null,
    subdir: null,
    status: 'not_run',
    reason: null,
    package: null,
    registry: null,
    checker: null,
    flow: FLOW.state,
    boost: BOOST.state,
  }

  let candidate
  try {
    candidate = await resolveEntry(entry, { fetchImpl: context.fetchImpl })
  } catch (error) {
    return { ...base, reason: `resolution failed: ${firstLine(error?.message ?? error)}` }
  }
  if (!candidate.ok) {
    return {
      ...base,
      repo: candidate.target?.repoSlug ?? null,
      subdir: candidate.target?.subdir ?? null,
      reason: candidate.reason,
    }
  }

  const resolved = {
    ...base,
    repo: candidate.repo,
    subdir: candidate.subdir,
    package: { name: candidate.name, version: candidate.version },
    registry: { repository: candidate.registryRepository, source: candidate.registrySource },
  }

  const workRoot = fs.mkdtempSync(path.join(context.workRoot, 'entry-'))
  try {
    let packed
    try {
      packed = (context.packImpl ?? packAndUnpack)(candidate, workRoot)
    } catch (error) {
      return { ...resolved, reason: firstLine(error?.message ?? error) }
    }

    const checker = (context.runCheckerImpl ?? runCheckerOnDir)(packed.packageDir, context.checkerPath, workRoot)
    if (checker.status === 'not_run') {
      return {
        ...resolved,
        checker: { exit_code: checker.exitCode, counts: null },
        reason: checker.reason ?? checker.label,
      }
    }
    return {
      ...resolved,
      status: checker.status,
      checker: { exit_code: checker.exitCode, counts: checker.counts },
      reason: checker.status === 'incomplete' ? checker.label : null,
    }
  } finally {
    fs.rmSync(workRoot, { recursive: true, force: true })
  }
}

function readDiff(file) {
  if (!file) return { text: '', missing: true, bytes: 0, reason: 'no diff file was supplied' }
  try {
    const text = fs.readFileSync(file, 'utf8')
    return { text, missing: false, bytes: Buffer.byteLength(text), reason: null }
  } catch (error) {
    return {
      text: '',
      missing: true,
      bytes: 0,
      reason: `diff file ${file} is not readable (${firstLine(error?.code ?? error?.message ?? error)})`,
    }
  }
}

function countLine(counts) {
  if (!counts) return null
  const parts = []
  if (counts.total !== null) parts.push(`total ${counts.total}`)
  if (counts.checked !== null) parts.push(`run ${counts.checked}`)
  if (counts.na !== null || counts.notRun !== null) {
    parts.push(`not run ${(counts.na ?? 0) + (counts.notRun ?? 0)}`)
  }
  if (counts.fail !== null) parts.push(`FAIL ${counts.fail}`)
  if (counts.warn !== null) parts.push(`WARN ${counts.warn}`)
  if (counts.partial !== null) parts.push(`partial ${counts.partial}`)
  if (counts.error !== null && counts.error > 0) parts.push(`ERROR ${counts.error}`)
  return parts.length ? parts.join('; ') : null
}

function entryPrerequisiteLine(counts) {
  if (!counts?.entry) return null
  const parts = []
  if (counts.entry.required !== null) parts.push(`${counts.entry.checked ?? 0}/${counts.entry.required} checked`)
  else if (counts.entry.checked !== null) parts.push(`${counts.entry.checked} checked`)
  if (counts.entry.failed !== null) parts.push(`${counts.entry.failed} failed`)
  if (counts.entry.notChecked !== null) parts.push(`${counts.entry.notChecked} not checked`)
  return parts.length ? `ENTRY prerequisites: ${parts.join('; ')}` : null
}

export function renderSummary(result) {
  const lines = []
  lines.push('## Informational ENTRY check (non-blocking)')
  lines.push('')
  lines.push(`- Checker: \`${CHECKER_PACKAGE}@${CHECKER_VERSION}\` with \`${CHECKER_ARGS.join(' ')}\`.`)
  lines.push(`- Source: the published npm tarball only. The source repository is not cloned, and nothing from the tarball is installed or executed.`)
  lines.push('- This job posts no comment and creates no check run via the API; the job itself is one non-required status check. Delete `.github/workflows/entry-check.yml` to remove it.')
  lines.push('- The summary carries an exit code, counts, and the checks that did not run; it publishes no verdict.')
  lines.push('')

  if (result.topLevelNotRun) {
    lines.push(`not_run: ${result.topLevelNotRun}`)
    lines.push('')
  }

  if (result.diff?.present) {
    const limit = Number.isInteger(result.diff.limit) ? result.diff.limit : MAX_ENTRIES
    lines.push(`Added entry lines: ${result.diff.added_entry_lines}; unique entries: ${result.diff.unique}; attempted: ${result.diff.attempted}; not attempted (${limit}-entry cap): ${result.diff.skipped}; deduped lines (same repo/subdir, EN+zh included): ${result.diff.duplicates}.`)
    lines.push('')
  }

  if (!result.entries.length) {
    if (!result.topLevelNotRun) {
      lines.push('No added entry lines were found in this pull request\'s `README.md` / `README.zh-CN.md` diff.')
      lines.push('')
    }
  } else {
    for (const entry of result.entries) {
      const repo = entry.repo ?? (entry.name || 'unresolved entry')
      lines.push(`### \`${repo}\``)
      if (entry.file) lines.push(`- file: \`${entry.file}\``)
      if (entry.package) {
        lines.push(`- npm package: \`${entry.package.name}@${entry.package.version}\``)
        lines.push(`- registry repository: \`${entry.registry?.repository}\` (${entry.registry?.source})`)
      }
      if (entry.status === 'not_run') {
        lines.push(`- not_run: ${entry.reason ?? 'no reason recorded'}`)
      } else {
        const exitCode = entry.checker?.exit_code
        lines.push(`- checker exit: ${exitCode === null ? 'none' : exitCode}`)
        const counts = countLine(entry.checker?.counts)
        if (counts) lines.push(`- checks: ${counts}`)
        if (entry.checker?.counts?.notRunIds?.length) {
          lines.push(`- not checked: ${entry.checker.counts.notRunIds.join(', ')}`)
        }
        if (entry.checker?.counts?.partialIds?.length) {
          lines.push(`- partial coverage: ${entry.checker.counts.partialIds.join(', ')}`)
        }
        const prerequisites = entryPrerequisiteLine(entry.checker?.counts)
        if (prerequisites) lines.push(`- ${prerequisites}`)
        if (entry.status === 'incomplete') lines.push(`- checker status: incomplete; see the exit code and counts above`)
      }
      lines.push(`- FLOW: ${entry.flow}`)
      lines.push(`- BOOST: ${entry.boost}`)
      lines.push('')
    }
  }

  lines.push(`FLOW: ${result.flow.state}`)
  lines.push(`BOOST: ${result.boost.state}`)
  lines.push(`FLOW reason: ${result.flow.reason}`)
  lines.push(`BOOST reason: ${result.boost.reason}`)
  lines.push('')
  lines.push('Informational only. No repository was cloned, no package code was executed, and no verdict is published for FLOW or BOOST.')
  return `${lines.join('\n')}\n`
}

export function buildArtifact(result) {
  return {
    schema: SCHEMA,
    generated_at: result.generatedAt,
    informational: true,
    blocking: false,
    checker: {
      package: CHECKER_PACKAGE,
      version: CHECKER_VERSION,
      args: [...CHECKER_ARGS],
      node: process.versions.node,
    },
    registry: REGISTRY,
    source_policy: 'published npm tarball only; no repository clone; no package code execution',
    flow: { state: result.flow.state, reason: result.flow.reason },
    boost: { state: result.boost.state, reason: result.boost.reason },
    diff: result.diff,
    top_level_not_run: result.topLevelNotRun,
    entries: result.entries.map((entry) => ({
      file: entry.file,
      name: entry.name,
      url: entry.url,
      repo: entry.repo,
      subdir: entry.subdir,
      status: entry.status,
      reason: entry.reason,
      package: entry.package,
      registry: entry.registry,
      checker: entry.checker,
      flow: entry.flow,
      boost: entry.boost,
    })),
  }
}

function fallbackResult(message) {
  return {
    generatedAt: new Date().toISOString(),
    diff: { present: false, added_entry_lines: 0, unique: 0, attempted: 0, skipped: 0, duplicates: 0, limit: MAX_ENTRIES },
    topLevelNotRun: `check did not complete: ${firstLine(message)}`,
    entries: [],
    flow: { state: FLOW.state, reason: FLOW.reason },
    boost: { state: BOOST.state, reason: BOOST.reason },
  }
}

function writeOutputs(result, outDir, summaryFile) {
  const summary = renderSummary(result)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'entry-check.json'), `${JSON.stringify(buildArtifact(result), null, 2)}\n`)
  fs.writeFileSync(path.join(outDir, 'summary.md'), summary)
  if (summaryFile) {
    try {
      const prefix = fs.existsSync(summaryFile) && fs.statSync(summaryFile).size > 0 ? '\n' : ''
      fs.appendFileSync(summaryFile, `${prefix}${summary}`)
    } catch (error) {
      process.stderr.write(`entry-check: could not append the step summary (${firstLine(error?.message ?? error)})\n`)
    }
  }
  process.stdout.write(summary)
  return { outDir, summaryPath: path.join(outDir, 'summary.md'), jsonPath: path.join(outDir, 'entry-check.json') }
}

function parseArgs(argv) {
  const options = {
    diff: null,
    checker: null,
    root: process.cwd(),
    outDir: path.join(process.env.RUNNER_TEMP || os.tmpdir(), 'entry-check'),
    summary: process.env.GITHUB_STEP_SUMMARY || null,
    max: MAX_ENTRIES,
    help: false,
  }
  const valueFor = (arg, index) => {
    const equals = arg.indexOf('=')
    if (equals !== -1) return { value: arg.slice(equals + 1), next: index }
    const next = argv[index + 1]
    if (next === undefined) throw new Error(`${arg} needs a value`)
    return { value: next, next: index + 1 }
  }
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--help' || arg === '-h') {
      options.help = true
    } else if (arg === '--diff' || arg.startsWith('--diff=')) {
      const parsed = valueFor(arg, index)
      options.diff = parsed.value
      index = parsed.next
    } else if (arg === '--checker' || arg.startsWith('--checker=')) {
      const parsed = valueFor(arg, index)
      options.checker = parsed.value
      index = parsed.next
    } else if (arg === '--root' || arg.startsWith('--root=')) {
      const parsed = valueFor(arg, index)
      options.root = parsed.value
      index = parsed.next
    } else if (arg === '--out-dir' || arg.startsWith('--out-dir=')) {
      const parsed = valueFor(arg, index)
      options.outDir = parsed.value
      index = parsed.next
    } else if (arg === '--summary' || arg.startsWith('--summary=')) {
      const parsed = valueFor(arg, index)
      options.summary = parsed.value
      index = parsed.next
    } else if (arg === '--max' || arg.startsWith('--max=')) {
      const parsed = valueFor(arg, index)
      options.max = Number.parseInt(parsed.value, 10)
      index = parsed.next
    } else {
      throw new Error(`unknown option: ${arg}`)
    }
  }
  if (!Number.isInteger(options.max) || options.max < 1) options.max = MAX_ENTRIES
  options.max = Math.min(options.max, MAX_ENTRIES)
  options.root = path.resolve(options.root)
  options.outDir = path.resolve(options.outDir)
  options.checker = options.checker
    ? path.resolve(options.checker)
    : path.join(options.root, 'node_modules', CHECKER_PACKAGE, 'bin', 'dsh-standards.mjs')
  return options
}

export function usage() {
  return `Usage: node scripts/check-entry.mjs --diff <file> [options]

  --diff <file>      diff produced by git diff --unified=0 <base>...HEAD -- README.md README.zh-CN.md
  --checker <file>   dsh-standards bin (default: <root>/node_modules/${CHECKER_PACKAGE}/bin/dsh-standards.mjs)
  --root <dir>       checkout root (default: cwd)
  --out-dir <dir>    where entry-check.json and summary.md are written
  --summary <file>   append the Markdown summary to this file (default: GITHUB_STEP_SUMMARY)
  --max <n>          entries to attempt, capped at ${MAX_ENTRIES}

The check is informational: it always exits 0 and reports an unresolved entry
as not_run. It never clones a repository and never runs package code.`
}

export async function buildResult(options, { fetchImpl = globalThis.fetch, workRoot = null, packImpl = null, runCheckerImpl = null } = {}) {
  const diff = readDiff(options.diff)
  const entries = diff.missing ? [] : parseAddedEntries(diff.text)
  const selection = selectEntries(entries, options.max)
  const checker = inspectChecker(options.checker)

  const result = {
    generatedAt: new Date().toISOString(),
    diff: {
      present: !diff.missing,
      bytes: diff.bytes,
      added_entry_lines: selection.total,
      unique: selection.unique,
      attempted: 0,
      skipped: selection.skipped,
      duplicates: selection.duplicates,
      limit: selection.limit,
    },
    topLevelNotRun: null,
    entries: [],
    flow: { state: FLOW.state, reason: FLOW.reason },
    boost: { state: BOOST.state, reason: BOOST.reason },
  }

  if (diff.missing) result.topLevelNotRun = diff.reason
  if (!checker.ok) {
    result.topLevelNotRun = result.topLevelNotRun ? `${result.topLevelNotRun}; ${checker.reason}` : checker.reason
    return result
  }
  if (diff.missing) return result

  const scratch = workRoot ?? fs.mkdtempSync(path.join(os.tmpdir(), 'entry-check-'))
  try {
    for (const entry of selection.selected) {
      result.entries.push(await profileEntry(entry, {
        checkerPath: checker.path,
        fetchImpl,
        workRoot: scratch,
        packImpl,
        runCheckerImpl,
      }))
    }
  } finally {
    if (!workRoot) fs.rmSync(scratch, { recursive: true, force: true })
  }
  result.diff.attempted = result.entries.length
  return result
}

/**
 * CLI entry point. Every branch returns 0: this is an informational job, and a
 * check that cannot run must say not_run rather than fail a pull request. The
 * workflow sets continue-on-error as a second layer, but this function is
 * written not to need it.
 */
export async function runCli(argv = process.argv.slice(2), deps = {}) {
  let options = null
  try {
    options = parseArgs(argv)
    if (options.help) {
      process.stdout.write(`${usage()}\n`)
      return 0
    }
    const result = await buildResult(options, deps)
    writeOutputs(result, options.outDir, options.summary)
    return 0
  } catch (error) {
    const message = firstLine(error?.message ?? error)
    const outDir = options?.outDir ?? path.join(process.env.RUNNER_TEMP || os.tmpdir(), 'entry-check')
    const summaryFile = options?.summary ?? process.env.GITHUB_STEP_SUMMARY ?? null
    try {
      writeOutputs(fallbackResult(message), outDir, summaryFile)
    } catch {
      // A summary that cannot be written must not turn into a failing step.
    }
    process.stderr.write(`entry-check: not_run — ${message}\n`)
    return 0
  }
}

const self = fileURLToPath(import.meta.url)
const invoked = process.argv[1] ? path.resolve(process.argv[1]) : null
let isCli = false
try {
  isCli = Boolean(invoked && fs.existsSync(invoked) && fs.realpathSync(self) === fs.realpathSync(invoked))
} catch {
  isCli = false
}
if (isCli) {
  try {
    await runCli()
  } catch {
    // runCli already reports and returns 0; this covers a broken pipe or an
    // unanticipated throw while reporting.
  }
  process.exitCode = 0
}
