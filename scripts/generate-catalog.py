#!/usr/bin/env python3
"""Generate CATALOG.md from hub plus GitHub's public dsh-plugin topic."""
import json, re, sys, urllib.request, datetime

def fetch(url, token=None):
    req = urllib.request.Request(url, headers={"User-Agent": "awesome-dsh-sync", "Accept": "application/json"})
    if token:
        req.add_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

def fetch_topic_repos(token=None):
    """Fetch public repositories tagged with GitHub's dsh-plugin topic."""
    repos = []
    for page in range(1, 11):
        data = fetch(
            f"https://api.github.com/search/repositories?q=topic%3Adsh-plugin&per_page=100&page={page}",
            token,
        )
        items = data.get("items", [])
        repos.extend(items)
        if not items or len(repos) >= data.get("total_count", len(repos)):
            break
    unique = {}
    for repo in repos:
        key = (repo.get("html_url") or repo.get("full_name") or "").rstrip("/").lower()
        if key:
            unique[key] = repo
    return list(unique.values())

# Public-facing catalog: drop internal program repos, rewrite notes referencing the test phase.
DROP_REPOS = {"group-chat-diary", "onboarding", "review-panel", "dsh-club"}
NOTE_REWRITES = {
    "issues": "官方 issue 反馈专用仓库（问题追踪）",
    "dsh-sfw": "防社死 WIP：遮挡敏感界面内容",
    "dsh-desktop-tools": "DSH 桌面工具集：一键启动、自动升级、开机自启、PWA 可安装补丁",
    "context-doctor": "上下文注入审计：指令链/技能目录/工具 schema 的 token 成本量化 + 重复/冲突检测 + 裁剪建议（Web 圆环 + context_audit）",
}
NAME_REWRITES = {
    "context-doctor": "dsh-context-doctor",
}
URL_REWRITES = {
    "context-doctor": "https://github.com/Zhenyu98/dsh-context-doctor",
}

# Generic guard: drop any entry whose note references the test phase.
# \u5185\u6d4b is the escaped form of the blocked wording (kept out of source text).
TEST_PHASE = re.compile("\u5185\u6d4b|beta", re.I)

def is_public(r):
    name = r.get("name", "?")
    if r.get("hide") or name in DROP_REPOS:
        return False
    if name in NOTE_REWRITES:
        return True
    note = r.get("note") or r.get("description") or ""
    return not TEST_PHASE.search(note)

def note_for(r):
    name = r.get("name", "?")
    if name in NOTE_REWRITES:
        return NOTE_REWRITES[name]
    return (r.get("note") or r.get("description") or "").strip()

def display_name(r):
    return NAME_REWRITES.get(r.get("name"), r.get("name", "?"))

def url_for(r):
    return URL_REWRITES.get(r.get("name"), r.get("url", "#"))


def main():
    token = None
    url = "https://raw.githubusercontent.com/dsh-external/hub/main/catalog.json"
    if len(sys.argv) > 1 and sys.argv[1] != "-":
        token = sys.argv[1]
    elif len(sys.argv) > 1 and sys.argv[1] == "-":
        token = None
    try:
        cat = fetch(url, token)
        topic_repos = fetch_topic_repos(token)
    except Exception as e:
        print(f"fetch failed: {e}", file=sys.stderr)
        return 1

    cats = cat.get("categories", {})
    repos = cat.get("repos", [])
    listed = sum(1 for r in repos if is_public(r))
    hub_urls = {
        url_for(r).rstrip("/").lower()
        for r in repos
        if r.get("url")
    }
    topic_missing = [
        r for r in topic_repos
        if (r.get("html_url") or "").rstrip("/").lower() not in hub_urls
    ]

    out = ["# 完整目录（自动生成）", ""]
    out.append(f"> 由 GitHub Actions 从 [dsh-external/hub](https://github.com/dsh-external/hub) 的 `catalog.json` 自动生成 · {cat.get('generated', '')[:10]}")
    out.append(f"> 精选列表见 [README](README.md)，本页为公开生态全量索引（{listed} 仓库）")
    out.append("")

    # 分类顺序
    ordered = sorted(cats.items(), key=lambda kv: kv[1].get("order", 99))
    by_cat = {}
    for r in repos:
        if not is_public(r):
            continue
        by_cat.setdefault(r.get("category", "_uncategorized"), []).append(r)

    for cid, meta in ordered:
        title = meta.get("title", cid)
        emoji = meta.get("emoji", "")
        items = by_cat.get(cid, [])
        if not items:
            continue
        out.append(f"## {emoji} {title}（{len(items)}）")
        out.append("")
        out.append("| 仓库 | 描述 |")
        out.append("|---|---|")
        for r in sorted(items, key=lambda x: x.get("name", "")):
            name = display_name(r)
            desc = note_for(r).replace("|", "\\|")
            out.append(f"| [{name}]({url_for(r)}) | {desc} |")
        out.append("")

    uncat = by_cat.get("_uncategorized", [])
    if uncat:
        out.append(f"## 未分类（{len(uncat)}）")
        out.append("")
        out.append("| 仓库 | 描述 |")
        out.append("|---|---|")
        for r in sorted(uncat, key=lambda x: x.get("name", "")):
            desc = note_for(r).replace("|", "\\|")
            out.append(f"| [{display_name(r)}]({url_for(r)}) | {desc} |")
        out.append("")

    # 插件集（collections）
    collections = cat.get("collections", {})
    if collections:
        out.append("## 插件集")
        out.append("")
        for cname, cdata in collections.items():
            plugins = cdata.get("plugins", [])
            if not plugins:
                continue
            out.append(f"### {cname}")
            out.append("")
            out.append("| 插件 | 描述 |")
            out.append("|---|---|")
            for p in plugins:
                if TEST_PHASE.search(p.get("description") or ""):
                    continue
                desc = (p.get("description") or "").strip().replace("|", "\\|")
                src = p.get("source", "")
                out.append(f"| `{p.get('id','?')}` | {desc} · `{src}` |")
            out.append("")

    if topic_missing:
        out.append(f"## 🌐 公开插件 Topic（{len(topic_missing)}）")
        out.append("")
        out.append(
            f"> 来自 GitHub 公开 [dsh-plugin Topic](https://github.com/topics/dsh-plugin)；"
            f"共发现 {len(topic_repos)} 个仓库，上方 hub 目录未覆盖的公开仓库列于此处。"
        )
        out.append("")
        out.append("| 仓库 | 描述 |")
        out.append("|---|---|")
        for r in sorted(topic_missing, key=lambda x: x.get("full_name", "").lower()):
            name = r.get("full_name", r.get("name", "?"))
            desc = (r.get("description") or "").strip() or "暂无描述"
            desc = desc.replace("|", "\\|")
            out.append(f"| [{name}]({r.get('html_url', '#')}) | {desc} |")
        out.append("")

    out.append("---")
    out.append(f"*Generated {datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")}*")
    open("CATALOG.md", "w").write("\n".join(out))
    print(
        f"CATALOG.md written: {len(out)} lines, {listed} hub repos, "
        f"{len(topic_repos)} public topic repos ({len(topic_missing)} added)"
    )
    return 0

if __name__ == "__main__":
    sys.exit(main())
