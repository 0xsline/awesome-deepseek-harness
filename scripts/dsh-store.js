#!/usr/bin/env node
/**
 * dsh-store — Plugin Store CLI for DeepSeek Harness.
 *
 * Zero-dependency Node.js CLI (Node >= 18, uses global fetch) that lets you
 * browse the awesome-deepseek-harness catalog, and install / remove / update
 * plugins through the official `dsh plugin` command — with a pre-install
 * CONFLICT CHECK against the plugins currently installed in your profile.
 *
 * Usage:
 *   dsh-store search  [query]                 browse the catalog
 *   dsh-store info    <plugin>                plugin details + install command
 *   dsh-store list    [--profile <name>]      plugins installed in a profile
 *   dsh-store check   <plugin> [--profile <name>] [--ref <ref>]
 *                                            pre-install conflict check
 *   dsh-store install <plugin> [--profile <name>] [--ref <ref>] [--force] [--yes]
 *                                            check conflicts, then install
 *   dsh-store remove  <package-name> [--profile <name>]
 *   dsh-store update  <plugin> [--profile <name>] [--ref <ref>]
 *   dsh-store open                            open the Plugin Store web page
 *   dsh-store catalog [--refresh]             print catalog info
 *
 * <plugin> accepts a catalog name (e.g. dsh-spotlight), owner/repo
 * (0xsline/dsh-spotlight), github: spec or a full GitHub URL.
 *
 * Conflict detection is best-effort static analysis: it reads the bundle
 * patches (cordis.patch.yml) and greps the shipped sources of installed
 * bundles for Cordis entry ids, provided services, commands, tools and slot
 * registrations, then compares them with the candidate plugin's manifest.
 * Treat WARN findings as review points, not verdicts.
 */
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync, execSync } = require('child_process');

/* ------------------------------------------------------------------ */
/*  constants & helpers                                                */
/* ------------------------------------------------------------------ */

const STORE_REPO = '0xsline/awesome-deepseek-harness';
const STORE_URL =
  'https://0xsline.github.io/awesome-deepseek-harness/';
const RAW_BASE = 'https://raw.githubusercontent.com';

const C = process.stdout.isTTY
  ? {
      reset: '\x1b[0m', bold: '\x1b[1m', dim: '\x1b[2m', red: '\x1b[31m',
      green: '\x1b[32m', yellow: '\x1b[33m', cyan: '\x1b[36m', magenta: '\x1b[35m',
    }
  : { reset: '', bold: '', dim: '', red: '', green: '', yellow: '', cyan: '', magenta: '' };

const log = (...a) => console.log(...a);
const info = (...a) => console.log(`${C.cyan}ℹ${C.reset}`, ...a);
const ok = (...a) => console.log(`${C.green}✔${C.reset}`, ...a);
const warn = (...a) => console.log(`${C.yellow}⚠${C.reset}`, ...a);
const err = (...a) => console.error(`${C.red}✖${C.reset}`, ...a);

function fail(msg, code = 1) {
  err(msg);
  process.exit(code);
}

/** HTTP GET text with timeout + main/master fallback. Returns null on failure. */
async function httpText(url, timeoutMs = 8000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: ctrl.signal, redirect: 'follow' });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

/** Probe a raw file across candidate refs (given ref first, then main/master). */
async function fetchRaw(owner, repo, filePath, ref) {
  const refs = [...new Set([ref, 'main', 'master'].filter(Boolean))];
  for (const r of refs) {
    const url = `${RAW_BASE}/${owner}/${repo}/${r}/${filePath}`;
    const text = await httpText(url);
    if (text !== null) return { text, ref: r };
  }
  return null;
}

function repoRoot() {
  // <repo>/scripts/dsh-store.js  ->  <repo>
  return path.resolve(__dirname, '..');
}

/* ------------------------------------------------------------------ */
/*  catalog                                                             */
/* ------------------------------------------------------------------ */

let _catalogCache = null;

async function loadCatalog() {
  if (_catalogCache) return _catalogCache;

  // 1) local generated catalog.json (committed to the repo)
  const local = path.join(repoRoot(), 'store', 'catalog.json');
  if (fs.existsSync(local)) {
    try {
      _catalogCache = JSON.parse(fs.readFileSync(local, 'utf8'));
      _catalogCache._origin = 'local';
      return _catalogCache;
    } catch { /* fall through */ }
  }

  // 2) remote generated catalog.json
  const raw = await fetchRaw(STORE_REPO, 'store/catalog.json', 'store/catalog.json');
  if (raw) {
    try {
      _catalogCache = JSON.parse(raw.text);
      _catalogCache._origin = 'remote';
      return _catalogCache;
    } catch { /* fall through */ }
  }

  // 3) last resort: parse CATALOG.md from the web (same parser as the
  //    generate-store-catalog.py script, kept tiny).
  const md = await fetchRaw(STORE_REPO, 'CATALOG.md', 'CATALOG.md');
  if (!md) {
    fail('无法读取插件目录：本地 store/catalog.json 不存在，且无法访问 ' +
         `https://github.com/${STORE_REPO}（需要网络）`);
  }
  _catalogCache = parseCatalogMd(md.text);
  _catalogCache._origin = 'catalog.md';
  return _catalogCache;
}

function parseCatalogMd(text) {
  const plugins = [];
  let section = '', subsection = '', inTopic = false;
  const rowRe = /^\|\s*(\[[^\]]+\]\(([^)]+)\)|`([^`]+)`)\s*\|\s*(.*?)\s*\|$/;
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (line.startsWith('## ')) {
      const t = line.slice(3).replace(/^[^\w\s\u4e00-\u9fff（(]+/, '').replace(/\s*[（(]\d+[)）]\s*$/, '').trim();
      section = t; subsection = ''; inTopic = t.startsWith('公开插件');
      continue;
    }
    if (line.startsWith('### ')) {
      subsection = line.slice(4).replace(/\s*[（(]\d+[)）]\s*$/, '').trim();
      continue;
    }
    if (!line.startsWith('|') || line.startsWith('|--')) continue;
    const m = rowRe.exec(line);
    if (!m) continue;
    const [, , url, backtick] = m;
    const desc = (m[4] || '').replace(/`github:[^`]+`/, '').replace(/\s*·\s*$/, '').trim();
    const specM = /`(github:[^`]+)`/.exec(m[4] || '');
    const spec = specM ? specM[1] : null;
    let entry;
    if (backtick) {
      // bundle entry
      const sm = /^github:([^/#]+)\/([^#]+)/.exec(spec || '');
      if (!sm) continue;
      entry = {
        id: `${subsection || sm[1]}/${backtick}`, name: backtick,
        url: `https://github.com/${sm[1]}/${sm[2]}`,
        description: desc, category: '插件集 Bundles', source: 'hub',
        installSpec: spec, kind: 'bundle-entry',
        owner: sm[1], repo: sm[2],
        ...(subsection ? { collection: subsection } : {}),
      };
    } else if (url) {
      const gm = /^https?:\/\/github\.com\/([^/]+)\/([^/?#]+)/.exec(url);
      if (!gm) continue;
      entry = {
        id: inTopic ? `${gm[1]}/${gm[2]}` : gm[2], name: gm[2],
        url, description: desc, category: subsection || section, source: inTopic ? 'topic' : 'hub',
        owner: gm[1], repo: gm[2], installSpec: `github:${gm[1]}/${gm[2]}`,
      };
    } else continue;
    plugins.push(entry);
  }
  return { count: plugins.length, plugins };
}

/** Resolve a user-supplied plugin reference to a catalog entry. */
function catalogFind(catalog, ref) {
  if (!ref) return null;
  const r = ref.trim();
  const byUrl = catalog.plugins.find(p => p.url === r || p.url === r.replace(/\/$/, ''));
  if (byUrl) return byUrl;
  // github:owner/repo or github:owner/repo#ref&path:...
  const gm = /^github:([^/#]+)\/([^#]+)/.exec(r);
  if (gm) {
    const hit = catalog.plugins.find(p => p.owner === gm[1] && p.repo === gm[2]);
    if (hit) return hit;
  }
  // owner/repo
  const om = /^([^/\s]+)\/([^/\s#]+)$/.exec(r);
  if (om) {
    const hit = catalog.plugins.find(p => p.owner === om[1] && p.repo === om[2]);
    if (hit) return hit;
  }
  // bare name (prefer hub rows)
  return (
    catalog.plugins.find(p => p.name === r && p.source === 'hub') ||
    catalog.plugins.find(p => p.name === r) ||
    catalog.plugins.find(p => p.id === r) ||
    catalog.plugins.find(p => p.repo === r) ||
    null
  );
}

/** Split an install spec like github:owner/repo#HEAD&path:/x into parts. */
function parseSpec(spec) {
  const m = /^github:([^/#]+)\/([^#]+?)(?:#([^&]*))?(?:&path:(.*))?$/.exec(spec);
  if (!m) return null;
  return { owner: m[1], repo: m[2], ref: m[3] || null, subPath: m[4] || null };
}

/* ------------------------------------------------------------------ */
/*  local profile facts                                                 */
/* ------------------------------------------------------------------ */

function dshHome() {
  return process.env.DSH_HOME || path.join(os.homedir(), '.dsh');
}

function findProfile(name) {
  const root = path.join(dshHome(), 'profiles');
  let names = [];
  if (name) names = [name];
  else if (fs.existsSync(root)) {
    names = fs.readdirSync(root)
      .filter(d => !d.startsWith('.') && fs.existsSync(path.join(root, d, 'package.json')));
  }
  if (!names.length) return null;
  // prefer the standard 'web' profile
  const pick = names.includes('web') ? 'web' : names[0];
  return { name: pick, dir: path.join(root, pick) };
}

function resolveBundleDir(profileDir, bundleName) {
  const direct = path.join(profileDir, 'node_modules', ...bundleName.split('/'));
  if (fs.existsSync(path.join(direct, 'package.json'))) return direct;
  return null; // core/runtime bundles are not vendored in the profile
}

/** Minimal line-based parser for cordis.patch.yml (insert/disable/config lists). */
function parsePatchIds(text) {
  const out = { insert: [], disable: [], config: [], all: [] };
  let mode = null;
  const idRe = /^\s*-\s*id:\s*['"]?([^'",\s]+)/;
  const nestedRe = /^\s+-?\s*id:\s*['"]?([^'",\s]+)/;
  for (const line of String(text).split('\n')) {
    const t = line.trim();
    if (/^-\s*(insert|disable|config):/.test(t)) {
      mode = /^-\s*(insert|disable|config):/.exec(t)[1];
      continue;
    }
    let m = idRe.exec(line) || nestedRe.exec(line);
    if (m && mode) {
      const id = m[1];
      out[mode].push(id);
      out.all.push(id);
    }
  }
  return out;
}

/** Scan a package dir's shipped JS/TS for service/command/tool/slot registrations. */
function scanSources(dir) {
  const found = { services: new Set(), commands: new Set(), tools: new Set(), slots: new Set() };
  const patterns = {
    // high-precision: ctx.provide('x') / provide: ['x'] (cordis-style)
    services: [
      /ctx\.provide\s*\(\s*['"]([^'"]+)['"]/g,
      /provide\s*:\s*\[([^\]]*)\]/g,
      /provide\s*:\s*['"]([^'"]+)['"]/g,
    ],
    commands: [
      /ctx\.command\s*\(\s*['"]([^'"]+)['"]/g,
      /ctx\.command\s*\(\s*["`]([^"`]+)["`]/g,
    ],
    slots: [
      /slot\(\s*['"]([^'"]+)['"]/g,
      /registry\.register\s*\(\s*['"]([^'"]+)['"]/g,
    ],
  };
  // tool registration blocks: registerTool({name:'x'}) / tools.register({name:'x'})
  const toolBlockRe = /(?:registerTool|tools\.register)\s*\(\s*([^)]{0,300}?)\)/g;
  const toolNameRe = /name\s*:\s*['"]([^'"]+)['"]/;
  const toolCallRe = /\btool\(\s*['"]([^'"]+)['"]/g;

  const roots = ['lib', 'dist', 'src'];
  const files = [];
  const walk = (d, depth) => {
    if (depth > 4) return;
    let ents;
    try { ents = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of ents) {
      if (e.name.startsWith('.') || e.name === 'node_modules') continue;
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p, depth + 1);
      else if (/\.(js|cjs|mjs|ts|tsx|jsx)$/.test(e.name) && !e.name.endsWith('.d.ts')) files.push(p);
    }
  };
  for (const r of roots) {
    const d = path.join(dir, r);
    if (fs.existsSync(d)) walk(d, 0);
  }
  if (files.length > 400) files.length = 400; // guard against huge bundles
  for (const f of files) {
    let text;
    try { text = fs.readFileSync(f, 'utf8'); } catch { continue; }
    // generic patterns
    for (const key of Object.keys(patterns)) {
      for (const re of patterns[key]) {
        re.lastIndex = 0;
        let m;
        while ((m = re.exec(text))) {
          if (key === 'services' && m[1] && m[1].includes(',')) {
            m[1].split(',').map(s => s.trim()).filter(Boolean)
              .forEach(s => found.services.add(s.replace(/['"]/g, '')));
          } else if (m[1]) {
            found[key].add(m[1].trim().replace(/['"]/g, '').replace(/^\//, ''));
          }
        }
      }
    }
    // tool registration blocks
    toolBlockRe.lastIndex = 0;
    let tm;
    while ((tm = toolBlockRe.exec(text))) {
      const nm = toolNameRe.exec(tm[1]);
      if (nm) found.tools.add(nm[1].trim());
    }
    // tool('name') helper calls
    toolCallRe.lastIndex = 0;
    let cm;
    while ((cm = toolCallRe.exec(text))) found.tools.add(cm[1].trim().replace(/^\//, ''));
  }
  return {
    services: [...found.services].sort(),
    commands: [...found.commands].sort(),
    tools: [...found.tools].sort(),
    slots: [...found.slots].sort(),
  };
}

/** Everything the conflict engine needs to know about the local profile. */
function getLocalFacts(profile) {
  const pkgPath = path.join(profile.dir, 'package.json');
  if (!fs.existsSync(pkgPath)) fail(`profile「${profile.name}」不存在: ${profile.dir}`);
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  const bundles = [];
  const entryIds = new Set();
  const services = new Set();
  const commands = new Set();
  const tools = new Set();
  const slots = new Set();
  const deps = {};
  const unresolved = [];

  const bundleNames = new Set(pkg.dsh?.profile?.bundles || []);
  // also treat direct deps that declare dsh.bundle.patch as bundles
  for (const [depName] of Object.entries(pkg.dependencies || {})) {
    if (depName.startsWith('link:') || depName.startsWith('file:')) continue;
    bundleNames.add(depName);
  }

  // expand: any dependency of a resolved bundle that itself declares
  // dsh.bundle.patch is effectively installed too (aggregator pattern).
  const expanded = [...bundleNames];
  for (const name of expanded) {
    const dir = resolveBundleDir(profile.dir, name);
    if (!dir) continue;
    let bpkg = {};
    try { bpkg = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8')); } catch {}
    for (const [depName] of Object.entries(bpkg.dependencies || {})) {
      if (bundleNames.has(depName) || depName.startsWith('link:') || depName.startsWith('file:')) continue;
      const depDir = resolveBundleDir(profile.dir, depName);
      if (!depDir) continue;
      let depPkg = {};
      try { depPkg = JSON.parse(fs.readFileSync(path.join(depDir, 'package.json'), 'utf8')); } catch {}
      if (depPkg.dsh?.bundle?.patch) {
        bundleNames.add(depName);
        expanded.push(depName);
      }
    }
  }

  for (const name of bundleNames) {
    const dir = resolveBundleDir(profile.dir, name);
    if (!dir) {
      unresolved.push(name);
      continue;
    }
    let bpkg = {};
    try { bpkg = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8')); } catch {}
    let patchText = '';
    const patchRel = bpkg.dsh?.bundle?.patch;
    const patchCandidates = [
      patchRel && path.join(dir, patchRel),
      path.join(dir, 'cordis.patch.yml'),
      path.join(dir, 'dsh', 'cordis.patch.yml'),
    ].filter(Boolean);
    for (const pc of patchCandidates) {
      if (fs.existsSync(pc)) { patchText = fs.readFileSync(pc, 'utf8'); break; }
    }
    const ids = patchText ? parsePatchIds(patchText) : { insert: [], disable: [], config: [], all: [] };
    ids.all.forEach(id => entryIds.add(id));
    const src = scanSources(dir);
    src.services.forEach(s => services.add(s));
    src.commands.forEach(s => commands.add(s));
    src.tools.forEach(s => tools.add(s));
    src.slots.forEach(s => slots.add(s));
    Object.assign(deps, bpkg.dependencies || {});
    const injected = Array.isArray(bpkg.dsh?.client?.inject) ? bpkg.dsh.client.inject : [];
    bundles.push({
      name, version: bpkg.version, dir,
      entryIds: ids.all, patchRel: patchRel || null,
      services: src.services, commands: src.commands,
      tools: src.tools, slots: src.slots,
      injected,
      depCount: Object.keys(bpkg.dependencies || {}).length,
    });
  }

  return {
    profile: profile.name,
    profileDir: profile.dir,
    bundleNames: [...bundleNames],
    bundles,
    unresolved,
    entryIds: [...entryIds].sort(),
    services: [...services].sort(),
    commands: [...commands].sort(),
    tools: [...tools].sort(),
    slots: [...slots].sort(),
    deps,
  };
}

/* ------------------------------------------------------------------ */
/*  remote candidate facts                                              */
/* ------------------------------------------------------------------ */

/** List all file paths of a repo via the GitHub trees API (rate-limited but one call). */
async function listRepoFiles(owner, repo, ref) {
  const refs = [...new Set([ref, 'main', 'master'].filter(Boolean))];
  for (const r of refs) {
    const url = `https://api.github.com/repos/${owner}/${repo}/git/trees/${encodeURIComponent(r)}?recursive=1`;
    const text = await httpText(url, 10000);
    if (!text) continue;
    try {
      const data = JSON.parse(text);
      if (Array.isArray(data.tree)) {
        return {
          ref: r,
          truncated: !!data.truncated,
          files: data.tree
            .filter(t => t.type === 'blob' && !t.path.includes('/node_modules/'))
            .map(t => t.path),
        };
      }
    } catch { /* fall through */ }
  }
  return null;
}

async function getRemoteFacts(owner, repo, ref, subPath) {
  const pre = subPath ? `${subPath.replace(/^\/+|\/+$/g, '')}/` : '';
  const deadline = Date.now() + 50000;
  const dbg = (...a) => { if (process.env.DSH_STORE_DEBUG) console.error('[dbg]', ...a); };

  // discover repo layout (API tree, with path-probe fallback)
  const tree = await listRepoFiles(owner, repo, ref);
  const allFiles = tree ? tree.files : null;
  const resolvedRef = tree ? tree.ref : (ref || 'main');
  const has = p => allFiles && allFiles.includes(p);
  const candidates = (pred, max) => (allFiles || []).filter(pred).slice(0, max);
  dbg('subPath=', subPath, 'pre=', JSON.stringify(pre), 'tree=', !!tree, 'files=', allFiles ? allFiles.length : 0);

  // choose package.json (sub-package preferred under a subPath, else root)
  let pkgRel = null;
  if (allFiles) {
    if (pre && has(`${pre}package.json`)) pkgRel = `${pre}package.json`;
    else if (has('package.json')) pkgRel = 'package.json';
    else {
      const found = candidates(p => p.endsWith('/package.json') && !p.includes('/node_modules/'), 8);
      pkgRel = found.find(p => !p.includes('/examples/') && !p.includes('/test') && !p.includes('/tests/')) || found[0] || null;
    }
  } else {
    pkgRel = `${pre}package.json`;
  }

  let pkg = null;
  if (pkgRel) {
    const raw = await fetchRaw(owner, repo, pkgRel, resolvedRef);
    if (raw) {
      try { pkg = JSON.parse(raw.text); } catch {}
    }
  }
  dbg('pkgRel=', pkgRel, 'pkgName=', pkg?.name, 'hasSubPkgJson=', pre ? has(`${pre}package.json`) : 'n/a');
  if (Date.now() > deadline) fail('获取候选插件清单超时（网络问题或仓库不可达）');

  // locate the bundle patch / legacy manifest
  let patchRel = null;
  if (pkg?.dsh?.bundle?.patch) {
    const joined = path.posix.normalize(`${pre}${pkg.dsh.bundle.patch}`).replace(/^\.\//, '');
    if (!allFiles || has(joined)) patchRel = joined;
  }
  if (!patchRel && allFiles) {
    const found = candidates(p => p.endsWith('cordis.patch.yml') && !p.includes('/node_modules/'), 5);
    patchRel = found.find(p => p.startsWith(pre)) || found[0] || null;
  }
  if (!patchRel && !allFiles) patchRel = `${pre}cordis.patch.yml`;

  let patchText = '';
  if (patchRel) {
    const pr = await fetchRaw(owner, repo, patchRel, resolvedRef);
    if (pr) patchText = pr.text;
  }
  let legacyRel = null;
  if (allFiles) {
    const found = candidates(p => p.endsWith('dsh.plugin.json') && !p.includes('/node_modules/'), 5);
    legacyRel = found.find(p => p.startsWith(pre)) || found[0] || null;
  } else legacyRel = `${pre}dsh.plugin.json`;
  let legacy = null;
  if (legacyRel) {
    const lr = await fetchRaw(owner, repo, legacyRel, resolvedRef);
    if (lr) { try { legacy = JSON.parse(lr.text); } catch {} }
  }
  if (Date.now() > deadline) fail('获取候选插件清单超时（网络问题或仓库不可达）');

  // choose source files to scan (lib/src under root or subPath)
  let probeFiles = [];
  if (allFiles) {
    const isSrc = p => /\.(js|cjs|mjs|ts|tsx|jsx)$/.test(p) && !p.endsWith('.d.ts') &&
      !p.includes('/node_modules/') && !p.includes('/test') && !p.includes('/tests/') && !p.includes('/dist/');
    const prefs = ['lib/index.js', 'lib/client.js', 'lib/index.cjs', 'src/index.ts', 'src/index.js', 'src/client.ts', 'src/client.js', 'src/index.tsx'];
    probeFiles = candidates(p => isSrc(p) && p.startsWith(pre), 60);
    for (const pf of prefs) {
      const full = `${pre}${pf}`;
      if (probeFiles.length >= 60) break;
      if (!probeFiles.includes(full) && has(full)) probeFiles.unshift(full);
    }
  } else {
    probeFiles = ['lib/index.js', 'lib/client.js', 'lib/server.js', 'lib/index.cjs',
      'src/index.ts', 'src/index.js', 'src/client.ts', 'src/client.js', 'src/server.ts', 'src/index.tsx']
      .map(p => `${pre}${p}`);
  }

  const src = { services: new Set(), commands: new Set(), tools: new Set(), slots: new Set() };
  const patterns = {
    services: [/ctx\.provide\s*\(\s*['"]([^'"]+)['"]/g, /provide\s*:\s*\[([^\]]*)\]/g, /provide\s*:\s*['"]([^'"]+)['"]/g],
    commands: [/ctx\.command\s*\(\s*['"]([^'"]+)['"]/g, /ctx\.command\s*\(\s*["`]([^"`]+)["`]/g],
    slots: [/slot\(\s*['"]([^'"]+)['"]/g, /registry\.register\s*\(\s*['"]([^'"]+)['"]/g],
  };
  const toolBlockRe = /(?:registerTool|tools\.register)\s*\(\s*([^)]{0,300}?)\)/g;
  const toolNameRe = /name\s*:\s*['"]([^'"]+)['"]/;
  const probeResults = await Promise.all(
    probeFiles.map(async p => ({ p, raw: await fetchRaw(owner, repo, p, resolvedRef) }))
  );
  for (const { raw } of probeResults) {
    if (!raw) continue;
    for (const key of Object.keys(patterns)) {
      for (const re of patterns[key]) {
        re.lastIndex = 0;
        let m;
        while ((m = re.exec(raw.text))) {
          if (key === 'services' && m[1] && m[1].includes(',')) {
            m[1].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean)
              .forEach(s => src.services.add(s));
          } else if (m[1]) src[key].add(m[1].trim().replace(/['"]/g, '').replace(/^\//, ''));
        }
      }
    }
    toolBlockRe.lastIndex = 0;
    let tm;
    while ((tm = toolBlockRe.exec(raw.text))) {
      const nm = toolNameRe.exec(tm[1]);
      if (nm) src.tools.add(nm[1].trim());
    }
  }
  const injected = Array.isArray(pkg?.dsh?.client?.inject) ? pkg.dsh.client.inject : [];
  const ids = patchText ? parsePatchIds(patchText) : { insert: [], disable: [], config: [], all: [] };

  return {
    owner, repo, ref: resolvedRef, subPath: subPath || null,
    pkgName: pkg?.name || null,
    pkgVersion: pkg?.version || null,
    pkgDescription: pkg?.description || null,
    deps: pkg?.dependencies || {},
    hasBundlePatch: !!(patchText || legacy),
    patchRel, patchIds: ids.all,
    legacy,
    injected,
    services: [...src.services].sort(),
    commands: [...src.commands].sort(),
    tools: [...src.tools].sort(),
    slots: [...src.slots].sort(),
  };
}

/* ------------------------------------------------------------------ */
/*  conflict engine                                                     */
/* ------------------------------------------------------------------ */

/**
 * Compare a candidate against local facts.
 * Severities: 'blocker' (will not install without --force), 'warn'.
 */
function compareFacts(cand, local) {
  const issues = [];

  // 1) already installed
  if (cand.pkgName && local.bundleNames.includes(cand.pkgName)) {
    issues.push({
      sev: 'blocker', kind: 'already-installed',
      detail: `包 ${C.bold}${cand.pkgName}${C.reset} 已在 profile「${local.profile}」中安装`,
      target: cand.pkgName,
    });
  }

  // 2) cordis entry id clashes
  const idClash = cand.patchIds.filter(id => local.entryIds.includes(id));
  if (idClash.length) {
    issues.push({
      sev: 'blocker', kind: 'entry-id',
      detail: `Cordis entry id 冲突：${idClash.map(i => C.bold + i + C.reset).join('、')} ` +
        '已被其他插件占用，loader 会覆盖/禁用其中一方',
      target: idClash.join(','),
    });
  }

  // 3) provided service clashes
  const svcClash = intersect(cand.services, local.services);
  if (svcClash.length) {
    issues.push({
      sev: 'warn', kind: 'service',
      detail: `服务冲突：都提供 ${svcClash.map(s => C.bold + s + C.reset).join('、')}（路由可能歧义）`,
      target: svcClash.join(','),
    });
  }

  // 4) command clashes
  const cmdClash = intersect(cand.commands, local.commands);
  if (cmdClash.length) {
    issues.push({
      sev: 'warn', kind: 'command',
      detail: `命令冲突：都注册 ${cmdClash.map(s => C.bold + s + C.reset).join('、')}（后加载者覆盖）`,
      target: cmdClash.join(','),
    });
  }

  // 5) tool name clashes
  const toolClash = intersect(cand.tools, local.tools);
  if (toolClash.length) {
    issues.push({
      sev: 'warn', kind: 'tool',
      detail: `工具名冲突：都注册 ${toolClash.map(s => C.bold + s + C.reset).join('、')}（模型可能混淆）`,
      target: toolClash.join(','),
    });
  }

  // 6) slot clashes
  const slotClash = intersect(cand.slots, local.slots);
  if (slotClash.length) {
    issues.push({
      sev: 'warn', kind: 'slot',
      detail: `Slot 冲突：都注册 ${slotClash.map(s => C.bold + s + C.reset).join('、')}`,
      target: slotClash.join(','),
    });
  }

  // 7) dependency version conflicts (same name, different declared range)
  for (const [name, range] of Object.entries(cand.deps)) {
    if (local.deps[name] && local.deps[name] !== range && !isSameRange(local.deps[name], range)) {
      issues.push({
        sev: 'warn', kind: 'dep',
        detail: `依赖版本差异：${C.bold}${name}${C.reset} 本地 ${C.dim}${local.deps[name]}${C.reset} ↔ 候选 ${C.dim}${range}${C.reset}`,
        target: name,
      });
    }
  }

  return issues;
}

function intersect(a, b) {
  const bs = new Set(b);
  return a.filter(x => bs.has(x));
}

/** True when two ranges are trivially the same or both open-ended ("*"). */
function isSameRange(a, b) {
  const norm = r => (r || '').replace(/\s+/g, '');
  return norm(a) === norm(b) || norm(a) === '*' || norm(b) === '*';
}

/* ------------------------------------------------------------------ */
/*  reporting                                                           */
/* ------------------------------------------------------------------ */

function printLocalFacts(local) {
  log(`\n${C.bold}已安装（profile: ${C.cyan}${local.profile}${C.reset}${C.bold} @ ${C.dim}${local.profileDir}${C.reset}）`);
  if (!local.bundles.length) {
    log('  （无可解析的 bundle）');
  }
  for (const b of local.bundles) {
    const tag = b.patchRel
      ? `${b.entryIds.length ? ` ids[${b.entryIds.join(',')}]` : ''}`
      : ' (无 patch，普通依赖)';
    log(`  ${C.green}•${C.reset} ${C.bold}${b.name}${C.reset}${b.version ? `@${b.version}` : ''}${C.dim}${tag}${C.reset}`);
  }
  if (local.unresolved.length) {
    log(`  ${C.dim}  (core/runtime bundles 未解析: ${local.unresolved.join(', ')})${C.reset}`);
  }
}

function printCandidateFacts(cand, entry) {
  log(`\n${C.bold}候选插件${C.reset} ${C.cyan}${cand.owner}/${cand.repo}${C.reset}${cand.ref ? `@${cand.ref}` : ''}${cand.subPath ? ` (path: ${cand.subPath})` : ''}`);
  if (entry) log(`  ${C.dim}${entry.url}${C.reset}`);
  if (cand.pkgName) {
    log(`  package: ${C.bold}${cand.pkgName}${C.reset}${cand.pkgVersion ? `@${cand.pkgVersion}` : ''}${cand.pkgDescription ? ` — ${cand.pkgDescription}` : ''}`);
  }
  if (cand.hasBundlePatch) {
    log(`  bundle patch: ${C.green}✓${C.reset}${cand.patchRel ? ` (${cand.patchRel})` : ''}${cand.patchIds.length ? ` → entries [${cand.patchIds.join(', ')}]` : ''}`);
  } else if (cand.legacy) {
    log(`  legacy manifest: dsh.plugin.json`);
  } else {
    log(`  bundle patch: ${C.yellow}✗ 未声明 dsh.bundle.patch${C.reset} — 可能不是可安装 bundle（skills / profile / 工具仓库）`);
  }
  const parts = [];
  if (cand.services.length) parts.push(`services ${cand.services.join(',')}`);
  if (cand.commands.length) parts.push(`commands ${cand.commands.join(',')}`);
  if (cand.tools.length) parts.push(`tools ${cand.tools.join(',')}`);
  if (cand.slots.length) parts.push(`slots ${cand.slots.join(',')}`);
  if (parts.length) log(`  ${C.dim}静态扫描（启发式）: ${parts.join(' · ')}${C.reset}`);
  else log(`  ${C.dim}静态扫描（启发式）: 未发现 service/command/tool/slot 声明（可能都在未探测的文件中）${C.reset}`);
}

function printIssues(issues) {
  if (!issues.length) {
    log(`\n${C.green}${C.bold}✅ 未发现冲突${C.reset} —— 可以安全安装。`);
    return;
  }
  const blockers = issues.filter(i => i.sev === 'blocker');
  const warns = issues.filter(i => i.sev === 'warn');
  if (blockers.length) {
    log(`\n${C.red}${C.bold}🚫 发现 ${blockers.length} 个阻止安装的问题：${C.reset}`);
    for (const i of blockers) log(`   ${C.red}■${C.reset} [${i.kind}] ${i.detail}`);
  }
  if (warns.length) {
    log(`\n${C.yellow}${C.bold}⚠ 发现 ${warns.length} 个潜在冲突（警告，可继续但建议评估）：${C.reset}`);
    for (const i of warns) log(`   ${C.yellow}▲${C.reset} [${i.kind}] ${i.detail}`);
  }
}

/* ------------------------------------------------------------------ */
/*  commands                                                            */
/* ------------------------------------------------------------------ */

function cmdSearch(catalog, q, opts) {
  const ql = (q || '').toLowerCase();
  let list = catalog.plugins;
  if (ql) {
    list = list.filter(p =>
      (p.name || '').toLowerCase().includes(ql) ||
      (p.description || '').toLowerCase().includes(ql) ||
      `${p.owner}/${p.repo}`.toLowerCase().includes(ql));
  }
  if (opts.category) {
    const c = opts.category.toLowerCase();
    list = list.filter(p => (p.category || '').toLowerCase().includes(c));
  }
  if (opts.source) list = list.filter(p => p.source === opts.source);
  if (opts.bundle) list = list.filter(p => p.kind === 'bundle-entry');

  if (opts.json) {
    log(JSON.stringify({ query: q, count: list.length, plugins: list.slice(0, opts.limit || 50) }, null, 2));
    return;
  }
  log(`${C.bold}${list.length}${C.reset} 个插件${q ? ` 匹配「${C.cyan}${q}${C.reset}」` : ''}（目录: ${catalog._origin}）\n`);
  const head = list.slice(0, opts.limit || 30);
  for (const p of head) {
    const tag = p.kind === 'bundle-entry' ? `${C.magenta}[集]${C.reset} ` : '';
    log(`  ${tag}${C.bold}${p.name}${C.reset} ${C.dim}(${p.owner}/${p.repo})${C.reset}`);
    log(`      ${(p.description || '').slice(0, 110)}`);
    log(`      ${C.dim}${p.category} · ${p.source} · ${p.url}${C.reset}`);
  }
  if (list.length > head.length) {
    log(`  ${C.dim}… 还有 ${list.length - head.length} 个，用 --limit 查看更多或加搜索词过滤${C.reset}`);
  }
}

function cmdInfo(catalog, ref, opts) {
  const entry = catalogFind(catalog, ref);
  if (!entry) fail(`在目录中找不到「${ref}」；试试 dsh-store search ${ref}`);
  const spec = parseSpec(entry.installSpec);
  log(`\n${C.bold}${entry.name}${C.reset}${entry.kind === 'bundle-entry' ? ` ${C.magenta}[${entry.collection || '插件集'}]${C.reset}` : ''}`);
  log(`  ${entry.description}`);
  log(`  ${C.dim}类别: ${entry.category} · 来源: ${entry.source} · ${entry.url}${C.reset}`);
  if (entry.installSpec) {
    log(`\n  安装:   ${C.bold}dsh-store install ${entry.id}${C.reset}`);
    log(`  检查:   ${C.bold}dsh-store check ${entry.id}${C.reset}`);
    log(`  手动:   ${C.dim}dsh plugin --profile <profile> add "${entry.installSpec}"${C.reset}`);
  }
}

function cmdList(opts) {
  const profile = findProfile(opts.profile);
  if (!profile) fail(`找不到任何 dsh profile（$DSH_HOME=${dshHome()}）；请先运行 dsh 并确认 profile 存在`);
  const local = getLocalFacts(profile);
  printLocalFacts(local);
  log('');
  const counts = [
    `entry ids ${local.entryIds.length}`, `services ${local.services.length}`,
    `commands ${local.commands.length}`, `tools ${local.tools.length}`, `slots ${local.slots.length}`,
  ];
  log(`  ${C.dim}本地事实: ${counts.join(' · ')}${C.reset}`);
  if (opts.json) {
    const { dir: _d, ...rest } = local;
    log(JSON.stringify({ ...rest, profileDir: local.profileDir }, null, 2));
  }
  return 0;
}

async function cmdCheck(ref, opts) {
  const catalog = await loadCatalog();
  // an explicit github: spec (with optional #ref/&path:) always wins over the catalog
  const explicitSpec = /^github:/.test(ref) ? parseSpec(ref) : null;
  const entry = explicitSpec ? null : catalogFind(catalog, ref);
  const spec = explicitSpec || (entry && entry.installSpec ? parseSpec(entry.installSpec) : parseSpec(ref));
  if (!spec) {
    // bare github spec without catalog hit
    const m = /^github:([^/#]+)\/([^#]+?)(?:#([^&]*))?/.exec(ref);
    if (!m) fail(`无法解析「${ref}」；请用 name / owner/repo / github: 规范 / URL`);
  }
  const { owner, repo, ref: specRef, subPath } = spec;
  const profile = findProfile(opts.profile);
  if (!profile) fail('找不到 dsh profile，无法做本地冲突检查');

  info(`获取候选插件清单 ${owner}/${repo} …`);
  const cand = await getRemoteFacts(owner, repo, opts.ref || specRef || undefined, subPath);
  const local = getLocalFacts(profile);

  printCandidateFacts(cand, entry);
  printLocalFacts(local);
  const issues = compareFacts(cand, local);
  printIssues(issues);

  if (opts.json) {
    log(JSON.stringify({
      candidate: { owner, repo, ref: cand.ref, subPath, pkgName: cand.pkgName, patchIds: cand.patchIds, ...pick(cand, ['services', 'commands', 'tools', 'slots', 'deps']) },
      local: { profile: local.profile, bundleNames: local.bundleNames, entryIds: local.entryIds, services: local.services, commands: local.commands, tools: local.tools, slots: local.slots },
      issues,
    }, null, 2));
  }

  const blockers = issues.filter(i => i.sev === 'blocker');
  return blockers.length ? 1 : 0;
}

async function cmdInstall(ref, opts) {
  const catalog = await loadCatalog();
  // an explicit github: spec (with optional #ref/&path:) always wins over the catalog
  const explicitSpec = /^github:/.test(ref) ? parseSpec(ref) : null;
  const entry = explicitSpec ? null : catalogFind(catalog, ref);
  const spec = explicitSpec || (entry && entry.installSpec ? parseSpec(entry.installSpec) : parseSpec(ref));
  if (!spec) fail(`无法解析「${ref}」；请用 name / owner/repo / github: 规范 / URL`);

  const profile = findProfile(opts.profile);
  if (!profile) fail('找不到 dsh profile');

  const refForSpec = opts.ref || spec.ref || undefined;
  info(`冲突预检：${spec.owner}/${spec.repo}${refForSpec ? `@${refForSpec}` : ''} vs profile「${profile.name}」…`);
  const cand = await getRemoteFacts(spec.owner, spec.repo, refForSpec, spec.subPath);
  const local = getLocalFacts(profile);

  printCandidateFacts(cand, entry);
  const issues = compareFacts(cand, local);
  printIssues(issues);

  const blockers = issues.filter(i => i.sev === 'blocker');
  if (blockers.length && !opts.force) {
    err(`\n存在阻止安装的冲突。如需强行安装（不推荐），请加 ${C.bold}--force${C.reset}。`);
    return 1;
  }
  if (blockers.length) warn('已使用 --force 忽略阻止项。');

  if (issues.some(i => i.sev === 'warn') && !opts.yes && !opts.force) {
    const go = await confirm('仍有警告项，是否继续安装？[y/N] ');
    if (!go) { info('已取消。'); return 1; }
  }

  // build the pnpm-style spec
  let installSpec = entry?.installSpec;
  if (!installSpec) {
    installSpec = `github:${spec.owner}/${spec.repo}${refForSpec ? `#${refForSpec}` : ''}`;
  } else if (refForSpec && !installSpec.includes('#')) {
    installSpec = `${installSpec}#${refForSpec}`;
  }

  log(`\n执行: ${C.bold}dsh plugin --profile ${profile.name} add "${installSpec}"${C.reset}\n`);
  if (opts['dry-run']) {
    info('dry-run：不实际执行安装。');
    return 0;
  }
  const r = spawnSync('dsh', ['plugin', '--profile', profile.name, 'add', installSpec], {
    stdio: 'inherit',
    env: { ...process.env, FORCE_COLOR: '1' },
  });
  if (r.status !== 0) {
    err(`安装命令失败（exit ${r.status ?? r.signal}）。`);
    return 1;
  }
  ok(`已安装 ${C.bold}${spec.owner}/${spec.repo}${C.reset} → profile「${profile.name}」`);
  log(`\n${C.yellow}重启 dsh 以生效：${C.reset}`);
  log(`  ${C.bold}${C.dim}重启你正在运行的 dsh web 进程（或重开 dsh web）${C.reset}`);
  log(`  验证:  ${C.dim}dsh-store list --profile ${profile.name}${C.reset}`);
  return 0;
}

function cmdRemove(pkgName, opts) {
  const profile = findProfile(opts.profile);
  if (!profile) fail('找不到 dsh profile');
  log(`执行: ${C.bold}dsh plugin --profile ${profile.name} remove ${pkgName}${C.reset}\n`);
  const r = spawnSync('dsh', ['plugin', '--profile', profile.name, 'remove', pkgName], { stdio: 'inherit' });
  return r.status === 0 ? 0 : 1;
}

function cmdUpdate(ref, opts) {
  // an update is re-adding the spec at a (possibly newer) ref
  info('update 复用 install 流程（重新 add 相同/更新的 ref 即可升级）。');
  return cmdInstall(ref, { ...opts, force: true, yes: true });
}

function cmdOpen() {
  const url = STORE_URL;
  const p = process.platform;
  try {
    if (p === 'darwin') spawnSync('open', [url], { stdio: 'ignore' });
    else if (p === 'win32') spawnSync('cmd', ['/c', 'start', '', url], { stdio: 'ignore' });
    else spawnSync('xdg-open', [url], { stdio: 'ignore' });
    ok(`已在浏览器打开 ${url}`);
  } catch {
    log(`请手动打开: ${url}`);
  }
}

function confirm(q) {
  return new Promise(resolve => {
    const readline = require('readline');
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(q, ans => {
      rl.close();
      resolve(/^y|yes|是|确认/i.test(ans.trim()));
    });
  });
}

function pick(obj, keys) {
  const out = {};
  for (const k of keys) if (obj[k] !== undefined) out[k] = obj[k];
  return out;
}

/* ------------------------------------------------------------------ */
/*  CLI entry                                                           */
/* ------------------------------------------------------------------ */

function parseArgs(argv) {
  const opts = {};
  const pos = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const [k, ...rest] = a.slice(2).split('=');
      const v = rest.length ? rest.join('=') : (argv[i + 1] !== undefined && !argv[i + 1].startsWith('--') ? argv[++i] : true);
      opts[k] = v;
    } else pos.push(a);
  }
  return { opts, pos };
}

async function main() {
  const { opts, pos } = parseArgs(process.argv.slice(2));
  const cmd = pos[0] || 'help';
  const args = pos.slice(1);

  switch (cmd) {
    case 'search': {
      const catalog = await loadCatalog();
      cmdSearch(catalog, args[0], opts);
      return 0;
    }
    case 'info': {
      if (!args[0]) fail('用法: dsh-store info <plugin>');
      const catalog = await loadCatalog();
      cmdInfo(catalog, args[0], opts);
      return 0;
    }
    case 'list':
      return cmdList(opts);
    case 'check':
      if (!args[0]) fail('用法: dsh-store check <plugin> [--profile <name>] [--ref <ref>]');
      return cmdCheck(args[0], opts);
    case 'install':
      if (!args[0]) fail('用法: dsh-store install <plugin> [--profile <name>] [--ref <ref>] [--force] [--yes]');
      return cmdInstall(args[0], opts);
    case 'remove':
    case 'rm':
      if (!args[0]) fail('用法: dsh-store remove <package-name> [--profile <name>]');
      return cmdRemove(args[0], opts);
    case 'update':
    case 'upgrade':
      if (!args[0]) fail('用法: dsh-store update <plugin> [--profile <name>]');
      return cmdUpdate(args[0], opts);
    case 'open':
      cmdOpen();
      return 0;
    case 'catalog': {
      const catalog = await loadCatalog();
      log(`目录: ${catalog._origin} · ${catalog.count} 个插件 · 生成于 ${catalog.generatedAt || '—'}`);
      if (opts.refresh) log('（--refresh 暂无需刷新：catalog.json 随 sync-catalog workflow 自动更新）');
      return 0;
    }
    case 'help':
    case '--help':
    case '-h':
      log(helpText());
      return 0;
    default:
      err(`未知命令: ${cmd}`);
      log(helpText());
      return 1;
  }
}

function helpText() {
  return `
${C.bold}dsh-store${C.reset} — DeepSeek Harness 插件商店 CLI（冲突预检 + 安装/卸载/升级）

用法:
  ${C.bold}dsh-store search${C.reset} [关键词] [--category 类别] [--source hub|topic] [--limit N] [--json]
  ${C.bold}dsh-store info${C.reset}    <插件>
  ${C.bold}dsh-store list${C.reset}    [--profile <name>]
  ${C.bold}dsh-store check${C.reset}   <插件> [--profile <name>] [--ref <ref>] [--json]   ← 安装前冲突检查
  ${C.bold}dsh-store install${C.reset} <插件> [--profile <name>] [--ref <ref>] [--force] [--yes]
  ${C.bold}dsh-store remove${C.reset}  <包名> [--profile <name>]
  ${C.bold}dsh-store update${C.reset}  <插件> [--profile <name>]
  ${C.bold}dsh-store open${C.reset}    打开插件商店网页

<插件> 支持: 目录名（dsh-spotlight）、owner/repo、github: 规范、完整 GitHub URL。
冲突检查维度: 已安装包名 · Cordis entry id · 服务 · 命令 · 工具名 · Slot · 依赖版本。
更多: ${STORE_URL}
`.trim();
}

main().then(code => process.exit(code)).catch(e => {
  err(e && e.message ? e.message : String(e));
  process.exit(1);
});
