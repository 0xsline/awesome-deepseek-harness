/* DSH Plugin Store — vanilla JS, zero dependencies */
'use strict';

const state = {
  plugins: [],
  q: '',
  category: '',
  source: '',
  bundleOnly: false,
};

const $ = (sel) => document.querySelector(sel);
const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function badge(p) {
  if (p.kind === 'bundle-entry') return el('span', 'badge bundle', '集');
  return el('span', 'badge ' + p.source, p.source === 'hub' ? '精选' : 'Topic');
}

function installSpec(p) {
  if (p.installSpec) return p.installSpec;
  if (p.owner && p.repo) return `github:${p.owner}/${p.repo}`;
  return '';
}

async function loadCatalog() {
  try {
    const res = await fetch('catalog.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    state.plugins = data.plugins || [];
    $('#stats').innerHTML = `共 <b>${state.plugins.length}</b> 个插件`;
    return data;
  } catch (e) {
    $('#stats').textContent = 'catalog.json 加载失败';
    $('#notice').textContent = '无法加载 catalog.json（' + e.message + '）。请确认 docs/catalog.json 已生成并随仓库发布。';
  }
}

function renderCategories() {
  const cats = new Set(state.plugins.map((p) => p.category).filter(Boolean));
  const sel = $('#category');
  for (const c of [...cats].sort((a, b) => a.localeCompare(b, 'zh'))) {
    const o = document.createElement('option');
    o.value = c;
    o.textContent = c;
    sel.appendChild(o);
  }
}

function filterPlugins() {
  const q = state.q.trim().toLowerCase();
  return state.plugins.filter((p) => {
    if (state.bundleOnly && p.kind !== 'bundle-entry') return false;
    if (state.category && p.category !== state.category) return false;
    if (state.source && p.source !== state.source) return false;
    if (!q) return true;
    const hay = [
      p.name, p.description, p.category,
      p.owner && p.repo ? `${p.owner}/${p.repo}` : '',
      p.collection || '',
    ].join(' ').toLowerCase();
    return hay.includes(q);
  });
}

function renderGrid() {
  const grid = $('#grid');
  const list = filterPlugins();
  grid.innerHTML = '';
  $('#empty').classList.toggle('hidden', list.length > 0);
  const frag = document.createDocumentFragment();
  for (const p of list.slice(0, 300)) {
    const card = el('div', 'card');
    const top = el('div', 'card-top');
    top.appendChild(el('span', 'card-name', p.name));
    top.appendChild(badge(p));
    card.appendChild(top);
    card.appendChild(el('div', 'card-desc', p.description || '（无描述）'));
    const meta = el('div', 'card-meta');
    meta.appendChild(el('span', 'cat', p.category || '未分类'));
    meta.appendChild(el('span', '', p.owner + '/' + p.repo));
    if (p.collection) meta.appendChild(el('span', '', '⊂ ' + p.collection));
    card.appendChild(meta);
    card.addEventListener('click', () => openModal(p));
    frag.appendChild(card);
  }
  grid.appendChild(frag);
}

function cmdBlock(label, text) {
  const sec = el('section');
  sec.appendChild(el('h3', '', label));
  const box = el('div', 'cmd');
  const code = el('code', '', text);
  const btn = el('button', 'copy-btn', '复制');
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    btn.textContent = '已复制 ✓';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '复制'; btn.classList.remove('copied'); }, 1600);
  });
  box.appendChild(code);
  box.appendChild(btn);
  sec.appendChild(box);
  return sec;
}

function openModal(p) {
  const body = $('#modal-body');
  body.innerHTML = '';
  const d = el('div', 'detail');
  d.appendChild(el('h2', '', p.name));
  d.appendChild(el('div', 'd-sub', `${p.owner}/${p.repo} · ${p.category || '未分类'} · ${p.source === 'hub' ? '精选' : '公开 Topic'}${p.collection ? ' · ⊂ ' + p.collection : ''}`));
  const tags = el('div', 'd-tags');
  tags.appendChild(badge(p));
  tags.appendChild(el('span', 'badge topic', 'repo'));
  d.appendChild(tags);
  d.appendChild(el('div', 'd-desc', p.description || '（无描述）'));

  const spec = installSpec(p);
  if (spec) {
    d.appendChild(cmdBlock('方式一 · 命令行安装（含安装前冲突检查，推荐）',
      `dsh-store install ${p.id}\n# 仅检查不安装: dsh-store check ${p.id}`));
    d.appendChild(cmdBlock('方式二 · 官方 dsh plugin 命令（无冲突检查）',
      `dsh plugin --profile <profile> add "${spec}"`));
  }

  const links = el('div', 'd-links');
  const a = document.createElement('a');
  a.href = p.url;
  a.target = '_blank';
  a.rel = 'noopener';
  a.textContent = '查看仓库 ↗';
  links.appendChild(a);
  if (p.kind === 'bundle-entry' && p.owner && p.repo) {
    const a2 = document.createElement('a');
    a2.href = `https://github.com/${p.owner}/${p.repo}`;
    a2.target = '_blank';
    a2.rel = 'noopener';
    a2.textContent = '所属插件集 ↗';
    links.appendChild(a2);
  }
  d.appendChild(links);

  body.appendChild(d);
  $('#modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#modal').classList.add('hidden');
  document.body.style.overflow = '';
}

$('#search').addEventListener('input', (e) => { state.q = e.target.value; renderGrid(); });
$('#category').addEventListener('change', (e) => { state.category = e.target.value; renderGrid(); });
$('#source').addEventListener('change', (e) => { state.source = e.target.value; renderGrid(); });
$('#bundleOnly').addEventListener('change', (e) => { state.bundleOnly = e.target.checked; renderGrid(); });
$('#modal').addEventListener('click', (e) => { if (e.target.hasAttribute('data-close')) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

(async () => {
  await loadCatalog();
  renderCategories();
  renderGrid();
})();
