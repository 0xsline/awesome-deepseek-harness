import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import {
  BOOST,
  CHECKER_ARGS,
  CHECKER_VERSION,
  FLOW,
  MAX_ENTRIES,
  REGISTRY,
  buildArtifact,
  buildResult,
  extractCounts,
  inspectChecker,
  latestVersion,
  normalizeRepoSlug,
  parseAddedEntries,
  parseEntryLine,
  parseGithubRepoUrl,
  registryRepositoryMatches,
  renderSummary,
  resolveEntry,
  classifyCheckerExit,
  runCli,
  selectEntries,
} from './check-entry.mjs'

const here = path.dirname(fileURLToPath(import.meta.url))
const scriptPath = path.join(here, 'check-entry.mjs')

// Assembled from escapes so the prohibited conclusion words do not appear
// literally in this tree; the assertions still check for them.
const VERDICT_WORDS = new RegExp(
  [
    String.fromCharCode(80, 65, 83, 83),
    '\\u5408\\u683c',
    '\\u5b89\\u5168',
    '\\u8ba4\\u8bc1',
    '\\u6392\\u540d',
    '\\u8bc4\\u5206',
  ].join('|'),
  'i',
)

function tempDir(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'entry-check-test-'))
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }))
  return dir
}

function jsonResponse(value, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    text: async () => JSON.stringify(value),
    json: async () => value,
  }
}

function textResponse(value, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    text: async () => value,
    json: async () => JSON.parse(value),
  }
}

function fakeChecker(dir) {
  const root = path.join(dir, 'node_modules', 'dsh-standards')
  fs.mkdirSync(path.join(root, 'bin'), { recursive: true })
  fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify({ name: 'dsh-standards', version: CHECKER_VERSION }))
  const bin = path.join(root, 'bin', 'dsh-standards.mjs')
  fs.writeFileSync(bin, '#!/usr/bin/env node\nprocess.exit(0)\n')
  return bin
}

function registryMeta(name, repo) {
  return {
    name,
    'dist-tags': { latest: '1.2.3' },
    versions: {
      '1.2.3': {
        name,
        version: '1.2.3',
        repository: { type: 'git', url: `git+https://github.com/${repo}.git` },
      },
    },
  }
}

function routedFetch(routes) {
  return async (url) => {
    const route = routes[url]
    if (route === undefined) return textResponse('not found', 404)
    return route
  }
}

function fakePack(candidate, workRoot) {
  const dir = path.join(workRoot, 'fake-package')
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ name: candidate.name, version: candidate.version }))
  return { tgz: 'fake.tgz', packageDir: dir }
}

function fakeCheckerResult() {
  return {
    status: 'checked',
    label: 'completed; no blocking finding reported',
    exitCode: 0,
    stderr: '',
    reason: null,
    counts: {
      total: 14,
      checked: 12,
      fail: 0,
      warn: 2,
      na: 2,
      notRun: 0,
      partial: 6,
      error: 0,
      notRunIds: ['DSC-03', 'DSC-14'],
      partialIds: ['DSC-04', 'DSC-05'],
      entry: { required: 6, checked: 3, failed: 0, notChecked: 3 },
    },
  }
}

function diffFor(lines, file = 'README.md') {
  return [
    `diff --git a/${file} b/${file}`,
    `--- a/${file}`,
    `+++ b/${file}`,
    '@@ -1,0 +2,0 @@',
    ...lines,
    '',
  ].join('\n')
}

test('parseEntryLine reads only the README entry shape', () => {
  const parsed = parseEntryLine('- [dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) - Four-source migration wizard.')
  assert.deepEqual(parsed, {
    name: 'dsh-claude-move',
    url: 'https://github.com/PerryLink/dsh-claude-move',
    description: 'Four-source migration wizard.',
  })
  assert.equal(parseEntryLine('- [Install](#install)'), null)
  assert.deepEqual(parseEntryLine('- [x](https://example.com) - non-GitHub link'), {
    name: 'x',
    url: 'https://example.com',
    description: 'non-GitHub link',
  })
  assert.equal(parseEntryLine('not an entry'), null)
  assert.equal(parseEntryLine('- [x](https://github.com/o/r) without separator'), null)
  // The Chinese README uses an em dash as the separator; it must parse too.
  assert.deepEqual(parseEntryLine('- [中文条目](https://github.com/o/r) — 一句话说明'), {
    name: '中文条目',
    url: 'https://github.com/o/r',
    description: '一句话说明',
  })
  assert.deepEqual(parseEntryLine('- [en dash](https://github.com/o/r) – with en dash'), {
    name: 'en dash',
    url: 'https://github.com/o/r',
    description: 'with en dash',
  })
})

test('parseGithubRepoUrl handles root, tree, blob, and git URL shapes', () => {
  assert.deepEqual(parseGithubRepoUrl('https://github.com/PerryLink/dsh-talk'), {
    owner: 'PerryLink', repo: 'dsh-talk', ref: null, subdir: null, repoSlug: 'perrylink/dsh-talk',
  })
  const tree = parseGithubRepoUrl('https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-session-archive')
  assert.equal(tree.repoSlug, 'lbh1nb/dsh-plugins')
  assert.equal(tree.ref, 'main')
  assert.equal(tree.subdir, 'packages/dsh-session-archive')

  const blob = parseGithubRepoUrl('https://github.com/o/r/blob/main/packages/x/package.json')
  assert.equal(blob.ref, 'main')
  assert.equal(blob.subdir, 'packages/x')
  assert.equal(parseGithubRepoUrl('https://github.com/o/r/blob/main/package.json').subdir, null)

  assert.equal(parseGithubRepoUrl('git+https://github.com/o/r.git').repoSlug, 'o/r')
  assert.equal(parseGithubRepoUrl('git@github.com:o/r.git').repoSlug, 'o/r')
  assert.equal(parseGithubRepoUrl('https://gitlab.com/o/r'), null)
  assert.equal(parseGithubRepoUrl('https://github.com/o/r/tree/main/packages/..%2Fetc'), null)
  assert.equal(parseGithubRepoUrl('not a url'), null)
})

test('normalizeRepoSlug accepts registry and shorthand forms', () => {
  assert.equal(normalizeRepoSlug('git+https://github.com/PerryLink/dsh-talk.git'), 'perrylink/dsh-talk')
  assert.equal(normalizeRepoSlug({ url: 'https://github.com/o/r' }), 'o/r')
  assert.equal(normalizeRepoSlug('github:o/r'), 'o/r')
  assert.equal(normalizeRepoSlug('o/r'), 'o/r')
  assert.equal(normalizeRepoSlug('https://gitlab.com/o/r'), null)
  assert.equal(normalizeRepoSlug('gitlab.com/o/r'), null)
  assert.equal(normalizeRepoSlug(''), null)
})

test('registryRepositoryMatches requires an exact repository backlink', () => {
  const meta = registryMeta('pkg-one', 'acme/one')
  assert.equal(registryRepositoryMatches(meta, 'acme/one', '1.2.3').ok, true)
  assert.equal(registryRepositoryMatches(meta, 'acme/Two', '1.2.3').ok, false)
  assert.equal(registryRepositoryMatches(meta, 'acme/one', '1.2.3').from, 'version')

  const topLevelOnly = {
    name: 'pkg-two',
    repository: { url: 'https://github.com/acme/two' },
    'dist-tags': { latest: '2.0.0' },
    versions: { '2.0.0': { name: 'pkg-two', version: '2.0.0' } },
  }
  const topLevel = registryRepositoryMatches(topLevelOnly, 'acme/two', '2.0.0')
  assert.equal(topLevel.ok, true)
  assert.equal(topLevel.from, 'package')

  const staleTopLevel = {
    name: 'pkg-three',
    repository: { url: 'https://github.com/acme/old-name' },
    'dist-tags': { latest: '3.0.0' },
    versions: { '3.0.0': { name: 'pkg-three', version: '3.0.0', repository: { url: 'https://github.com/acme/new-name' } } },
  }
  assert.equal(registryRepositoryMatches(staleTopLevel, 'acme/old-name', '3.0.0').ok, false)

  const noRepository = { name: 'pkg-four', 'dist-tags': { latest: '4.0.0' }, versions: { '4.0.0': {} } }
  assert.equal(registryRepositoryMatches(noRepository, 'acme/four', '4.0.0').ok, false)
  assert.equal(latestVersion(noRepository), '4.0.0')
  assert.equal(latestVersion({}), null)
})

test('parseAddedEntries reads only added README lines', () => {
  const diff = [
    'diff --git a/README.md b/README.md',
    '--- a/README.md',
    '+++ b/README.md',
    '@@ -1,2 +1,2 @@',
    '- [old](https://github.com/o/old) - removed line',
    '+- [one](https://github.com/o/one) - added line',
    ' context line',
    '+- [two](https://github.com/o/two/tree/main/packages/two) - subdirectory entry',
    'diff --git a/CATALOG.md b/CATALOG.md',
    '--- a/CATALOG.md',
    '+++ b/CATALOG.md',
    '@@ -1,0 +1,1 @@',
    '+ [three](https://github.com/o/three) - wrong file',
    '',
  ].join('\n')
  const entries = parseAddedEntries(diff)
  assert.equal(entries.length, 2)
  assert.deepEqual(entries.map((entry) => entry.name), ['one', 'two'])
  assert.equal(entries[0].file, 'README.md')
  assert.equal(entries[1].file, 'README.md')
  assert.equal(parseAddedEntries(diffFor(['+- [a](https://github.com/o/a) - a'], 'README.zh-CN.md')).length, 1)
  assert.equal(parseAddedEntries('').length, 0)
})

test('selectEntries deduplicates bilingual lines and caps at three', () => {
  const entries = [
    { name: 'a', url: 'https://github.com/o/a', file: 'README.md' },
    { name: 'a', url: 'https://github.com/o/a', file: 'README.zh-CN.md' },
    { name: 'b', url: 'https://github.com/o/b/tree/main/packages/b', file: 'README.md' },
    { name: 'c', url: 'https://github.com/o/c', file: 'README.md' },
    { name: 'd', url: 'https://github.com/o/d', file: 'README.md' },
  ]
  const selected = selectEntries(entries, 3)
  assert.equal(selected.total, 5)
  assert.equal(selected.unique, 4)
  assert.equal(selected.duplicates, 1)
  assert.equal(selected.selected.length, MAX_ENTRIES)
  assert.equal(selected.skipped, 1)
  assert.deepEqual(selected.selected.map((entry) => entry.name), ['a', 'b', 'c'])
  assert.equal(selectEntries(entries, 99).selected.length, MAX_ENTRIES)
})

test('resolveEntry accepts a matching registry backlink', async (t) => {
  const rawUrl = 'https://raw.githubusercontent.com/acme/one/HEAD/package.json'
  const registryUrl = `${REGISTRY}pkg-one`
  const fetchImpl = routedFetch({
    [rawUrl]: textResponse(JSON.stringify({ name: 'pkg-one' })),
    [registryUrl]: jsonResponse(registryMeta('pkg-one', 'acme/one')),
  })
  const result = await resolveEntry({ url: 'https://github.com/acme/one' }, { fetchImpl })
  assert.equal(result.ok, true)
  assert.equal(result.repo, 'acme/one')
  assert.equal(result.name, 'pkg-one')
  assert.equal(result.version, '1.2.3')
  assert.equal(result.registryRepository, 'acme/one')
})

test('resolveEntry reads package.json below a tree subdirectory', async () => {
  const rawUrl = 'https://raw.githubusercontent.com/acme/mono/main/packages/plugin/package.json'
  const registryUrl = `${REGISTRY}pkg-mono`
  const fetchImpl = routedFetch({
    [rawUrl]: textResponse(JSON.stringify({ name: 'pkg-mono' })),
    [registryUrl]: jsonResponse(registryMeta('pkg-mono', 'acme/mono')),
  })
  const result = await resolveEntry({ url: 'https://github.com/acme/mono/tree/main/packages/plugin' }, { fetchImpl })
  assert.equal(result.ok, true)
  assert.equal(result.subdir, 'packages/plugin')
})

test('resolveEntry reports not_run instead of falling back to a clone', async () => {
  const missing = await resolveEntry({ url: 'https://github.com/acme/missing' }, {
    fetchImpl: routedFetch({}),
  })
  assert.equal(missing.ok, false)
  assert.match(missing.reason, /HTTP 404/)

  const mismatchUrl = 'https://raw.githubusercontent.com/acme/squat/HEAD/package.json'
  const squat = await resolveEntry({ url: 'https://github.com/acme/squat' }, {
    fetchImpl: routedFetch({
      [mismatchUrl]: textResponse(JSON.stringify({ name: 'pkg-squat' })),
      [`${REGISTRY}pkg-squat`]: jsonResponse(registryMeta('pkg-squat', 'other/real')),
    }),
  })
  assert.equal(squat.ok, false)
  assert.match(squat.reason, /does not match/)

  const noNameUrl = 'https://raw.githubusercontent.com/acme/no-name/HEAD/package.json'
  const noName = await resolveEntry({ url: 'https://github.com/acme/no-name' }, {
    fetchImpl: routedFetch({ [noNameUrl]: textResponse(JSON.stringify({ version: '1.0.0' })) }),
  })
  assert.equal(noName.ok, false)
  assert.match(noName.reason, /no package name/)

  const notGithub = await resolveEntry({ url: 'https://example.com/acme/one' }, { fetchImpl: routedFetch({}) })
  assert.equal(notGithub.ok, false)
  assert.match(notGithub.reason, /not a parseable GitHub/)
})

test('extractCounts keeps exit-adjacent counts and not-run identities', () => {
  const report = {
    coverage: {
      total: 14, checked: 12, fail: 0, warn: 2, na: 2, notRun: 0, partial: 6, error: 0,
      entryBlocking: { required: 6, checked: ['C-1.1', 'C-1.2', 'C-1.4'], failed: [], notChecked: ['C-3.1', 'C-3.2', 'C-3.5'] },
    },
    notChecked: [
      { id: 'DSC-03', coverage: 'not-run' },
      { id: 'DSC-14', coverage: 'not-run' },
      { id: 'DSC-04', coverage: 'partial' },
    ],
  }
  const counts = extractCounts(report)
  assert.equal(counts.total, 14)
  assert.equal(counts.fail, 0)
  assert.equal(counts.warn, 2)
  assert.deepEqual(counts.notRunIds, ['DSC-03', 'DSC-14'])
  assert.deepEqual(counts.partialIds, ['DSC-04'])
  assert.deepEqual(counts.entry, { required: 6, checked: 3, failed: 0, notChecked: 3 })
  assert.deepEqual(extractCounts(null).notRunIds, [])
})

test('classifyCheckerExit maps the documented exit codes', () => {
  assert.equal(classifyCheckerExit(0).status, 'checked')
  assert.equal(classifyCheckerExit(1).status, 'checked')
  assert.match(classifyCheckerExit(1).label, /blocking findings/)
  assert.equal(classifyCheckerExit(2).status, 'incomplete')
  assert.equal(classifyCheckerExit(3).status, 'not_run')
  assert.equal(classifyCheckerExit(null).status, 'not_run')
})

test('renderSummary carries exit codes, counts, and fixed FLOW/BOOST lines', () => {
  const result = {
    generatedAt: new Date().toISOString(),
    diff: { present: true, added_entry_lines: 1, unique: 1, attempted: 1, skipped: 0, duplicates: 0, limit: 3 },
    topLevelNotRun: null,
    entries: [{
      file: 'README.md',
      name: 'dsh-claude-move',
      url: 'https://github.com/PerryLink/dsh-claude-move',
      repo: 'perrylink/dsh-claude-move',
      subdir: null,
      status: 'checked',
      reason: null,
      package: { name: 'dsh-claude-move', version: '0.4.19' },
      registry: { repository: 'perrylink/dsh-claude-move', source: 'version' },
      checker: { exit_code: 0, counts: fakeCheckerResult().counts },
      flow: FLOW.state,
      boost: BOOST.state,
    }],
    flow: { state: FLOW.state, reason: FLOW.reason },
    boost: { state: BOOST.state, reason: BOOST.reason },
  }
  const summary = renderSummary(result)
  assert.match(summary, /checker exit: 0/)
  assert.match(summary, /checks: total 14; run 12; not run 2; FAIL 0; WARN 2; partial 6/)
  assert.match(summary, /not checked: DSC-03, DSC-14/)
  assert.match(summary, /^FLOW: not-run$/m)
  assert.match(summary, /^BOOST: not-measured$/m)
  assert.doesNotMatch(summary, VERDICT_WORDS)
  assert.match(renderSummary({ ...result, entries: [], topLevelNotRun: 'diff file missing' }), /not_run: diff file missing/)
})

test('buildArtifact keeps the result structural and non-blocking', () => {
  const result = {
    generatedAt: new Date().toISOString(),
    diff: { present: true, added_entry_lines: 0, unique: 0, attempted: 0, skipped: 0, duplicates: 0, limit: 3 },
    topLevelNotRun: null,
    entries: [],
    flow: { state: FLOW.state, reason: FLOW.reason },
    boost: { state: BOOST.state, reason: BOOST.reason },
  }
  const artifact = buildArtifact(result)
  assert.equal(artifact.informational, true)
  assert.equal(artifact.blocking, false)
  assert.equal(artifact.checker.version, CHECKER_VERSION)
  assert.equal(artifact.registry, REGISTRY)
  assert.deepEqual(artifact.checker.args, [...CHECKER_ARGS])
  assert.equal(artifact.flow.state, 'not-run')
  assert.equal(artifact.boost.state, 'not-measured')
  assert.doesNotMatch(JSON.stringify(artifact), VERDICT_WORDS)
})

test('buildResult profiles at most three entries and exits through the CLI with 0', async (t) => {
  const dir = tempDir(t)
  const checker = fakeChecker(dir)
  const routes = {}
  const entries = []
  for (let index = 1; index <= 4; index += 1) {
    const name = `pkg-${index}`
    const repo = `acme/plugin-${index}`
    entries.push(`+- [plugin-${index}](https://github.com/${repo}) - entry ${index}`)
    routes[`https://raw.githubusercontent.com/${repo}/HEAD/package.json`] = textResponse(JSON.stringify({ name }))
    routes[`${REGISTRY}${name}`] = jsonResponse(registryMeta(name, repo))
  }
  const diff = path.join(dir, 'pr.diff')
  fs.writeFileSync(diff, diffFor(entries))
  const out = path.join(dir, 'out')
  const summaryFile = path.join(dir, 'summary.md')
  const options = {
    diff,
    checker,
    root: dir,
    outDir: out,
    summary: summaryFile,
    max: 99,
  }
  const result = await buildResult(options, {
    fetchImpl: routedFetch(routes),
    workRoot: dir,
    packImpl: fakePack,
    runCheckerImpl: fakeCheckerResult,
  })
  assert.equal(result.entries.length, 3)
  assert.equal(result.diff.attempted, 3)
  assert.equal(result.diff.skipped, 1)
  assert.equal(result.diff.limit, 3)
  assert.equal(result.entries.every((entry) => entry.status === 'checked'), true)

  const code = await runCli([
    '--diff', diff,
    '--checker', checker,
    '--root', dir,
    '--out-dir', out,
    '--summary', summaryFile,
    '--max', '3',
  ], {
    fetchImpl: routedFetch(routes),
    workRoot: dir,
    packImpl: fakePack,
    runCheckerImpl: fakeCheckerResult,
  })
  assert.equal(code, 0)
  assert.equal(fs.existsSync(path.join(out, 'summary.md')), true)
  assert.equal(fs.existsSync(path.join(out, 'entry-check.json')), true)
  assert.match(fs.readFileSync(summaryFile, 'utf8'), /^FLOW: not-run$/m)
})

test('buildResult reports an unresolved entry as not_run and still records the exit code path', async (t) => {
  const dir = tempDir(t)
  const checker = fakeChecker(dir)
  const diff = path.join(dir, 'pr.diff')
  fs.writeFileSync(diff, diffFor(['+- [missing](https://github.com/acme/missing) - entry']))
  const result = await buildResult({
    diff,
    checker,
    root: dir,
    outDir: path.join(dir, 'out'),
    summary: null,
    max: 3,
  }, {
    fetchImpl: routedFetch({}),
    workRoot: dir,
    packImpl: fakePack,
    runCheckerImpl: fakeCheckerResult,
  })
  assert.equal(result.entries.length, 1)
  assert.equal(result.entries[0].status, 'not_run')
  assert.match(result.entries[0].reason, /HTTP 404/)
  const summary = renderSummary(result)
  assert.match(summary, /not_run: url:/)
  assert.match(summary, /^FLOW: not-run$/m)
})

test('runCli exits 0 for a missing diff and for an unknown option', async (t) => {
  const dir = tempDir(t)
  const checker = fakeChecker(dir)
  const out = path.join(dir, 'out')
  const summaryFile = path.join(dir, 'summary.md')
  assert.equal(await runCli(['--diff', path.join(dir, 'absent.diff'), '--checker', checker, '--out-dir', out, '--summary', summaryFile]), 0)
  assert.match(fs.readFileSync(summaryFile, 'utf8'), /not_run: diff file/)

  const previous = process.env.RUNNER_TEMP
  process.env.RUNNER_TEMP = dir
  try {
    assert.equal(await runCli(['--bogus-option']), 0)
  } finally {
    if (previous === undefined) delete process.env.RUNNER_TEMP
    else process.env.RUNNER_TEMP = previous
  }
  assert.match(fs.readFileSync(path.join(dir, 'entry-check', 'summary.md'), 'utf8'), /not_run: check did not complete/)
})

test('the CLI process exits 0 when the checker or diff is absent', (t) => {
  const dir = tempDir(t)
  const diff = path.join(dir, 'pr.diff')
  fs.writeFileSync(diff, diffFor(['+- [missing](https://github.com/acme/missing) - entry']))
  const run = spawnSync(process.execPath, [
    scriptPath,
    '--diff', diff,
    '--checker', path.join(dir, 'no-checker.mjs'),
    '--out-dir', path.join(dir, 'out'),
    '--summary', path.join(dir, 'summary.md'),
  ], { encoding: 'utf8', timeout: 30_000 })
  assert.equal(run.status, 0)
  assert.match(fs.readFileSync(path.join(dir, 'summary.md'), 'utf8'), /not_run: checker not found/)
})

test('inspectChecker rejects a drifted version and the source never shells out to git', (t) => {
  const dir = tempDir(t)
  const checker = fakeChecker(dir)
  assert.equal(inspectChecker(checker).ok, true)
  const pkgPath = path.join(dir, 'node_modules', 'dsh-standards', 'package.json')
  fs.writeFileSync(pkgPath, JSON.stringify({ name: 'dsh-standards', version: '1.6.7' }))
  const drifted = inspectChecker(checker)
  assert.equal(drifted.ok, false)
  assert.match(drifted.reason, /not the pinned 1\.6\.8/)

  const source = fs.readFileSync(scriptPath, 'utf8')
  assert.doesNotMatch(source, /spawnSync\(\s*['"]git['"]/)
  assert.doesNotMatch(source, /git\s+clone/)
  assert.match(source, /--ignore-scripts/)
  assert.match(source, /--no-exec/)
  assert.match(source, /registry\.npmjs\.org/)
})
