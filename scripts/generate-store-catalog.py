#!/usr/bin/env python3
"""Generate store/catalog.json from CATALOG.md — the data feed of the Plugin Store.

Parses the auto-generated CATALOG.md (hub sections + public dsh-plugin Topic
section) into a flat, deduplicated JSON list consumed by:
  * store/  — the GitHub-Pages Plugin Store frontend
  * scripts/dsh-store.js — the CLI installer / conflict checker

Usage:
    python3 scripts/generate-store-catalog.py [CATALOG.md] [-o store/catalog.json]

The generated file is committed to the repo (and refreshed by the
sync-catalog workflow), so the store and the CLI can both work offline.
"""

import json
import os
import re
import sys
from datetime import date, datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(HERE)
DEFAULT_IN = os.path.join(REPO_ROOT, "CATALOG.md")
DEFAULT_OUT = os.path.join(REPO_ROOT, "store", "catalog.json")

GITHUB_RE = re.compile(r"^https?://github\.com/([^/]+)/([^/?#]+)")
ROW_RE = re.compile(r"^\|\s*(\[[^\]]+\]\(([^)]+)\)|`([^`]+)`)\s*\|\s*(.*?)\s*\|$")
SPEC_RE = re.compile(r"`(github:[^`]+)`")

# Hub section emoji -> storefront category label (kept readable, zh+en)
HUB_CATEGORY = {
    "社区": "社区 Community",
    "技能": "技能 Skills",
    "单插件": "单插件 Plugins",
    "插件集": "插件集 Bundles",
    "远程渠道": "远程渠道 Channels",
    "基础设施": "基础设施 Infrastructure",
    "研究": "研究 Research",
    "未分类": "未分类 Uncategorized",
}
EMOJI_RE = re.compile(r"^[^\w\s（(]+|\s*（\d+）\s*$|^\s+|\s+$")


def clean_section_title(raw: str) -> str:
    """'## 🔌 单插件（179）' -> '单插件'."""
    title = raw.lstrip("#").strip()
    title = re.sub(r"^[^\w\s\u4e00-\u9fff（(]+", "", title)  # leading emoji
    title = re.sub(r"\s*[（(]\d+[)）]\s*$", "", title)  # trailing count
    return title.strip()


def github_parts(url: str):
    m = GITHUB_RE.match(url)
    if not m:
        return None
    owner, repo = m.group(1), m.group(2)
    return owner, repo.rstrip("/")


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_IN
    out = sys.argv[2] if len(sys.argv) > 2 else DEFAULT_OUT

    with open(src, encoding="utf-8") as f:
        lines = f.readlines()

    plugins = []
    seen = {}  # url -> index
    section = None
    subsection = None
    in_topic = False

    for raw in lines:
        line = raw.rstrip("\n")
        if line.startswith("## "):
            title = clean_section_title(line[3:])
            section = title
            subsection = None
            in_topic = title.startswith("公开插件")
            continue
        if line.startswith("### "):
            subsection = clean_section_title(line[4:])
            continue
        if not line.startswith("|") or line.startswith("|--"):
            continue
        m = ROW_RE.match(line)
        if not m:
            continue
        link, url, backtick_name = m.group(1), m.group(2), m.group(3)
        desc = m.group(4).strip()

        name = None
        install_spec = None
        is_bundle_entry = False
        if backtick_name:
            # 插件集 entry row: `name` | desc · `github:...`
            name = backtick_name
            is_bundle_entry = True
            spec_m = SPEC_RE.search(desc)
            if spec_m:
                install_spec = spec_m.group(1)
                desc = desc.replace(spec_m.group(0), "").strip()
                # strip the trailing ' · ' glue
                desc = re.sub(r"\s*·\s*$", "", desc).strip()
            # bundle entries have no URL of their own; derive it from the spec
            if install_spec:
                m2 = re.match(r"^github:([^/#]+)/([^#]+)", install_spec)
                if m2:
                    owner, repo = m2.group(1), m2.group(2)
                    url = f"https://github.com/{owner}/{repo}"
                else:
                    continue
            else:
                continue
        elif link and url:
            parts = github_parts(url)
            if not parts:
                continue
            owner, repo = parts
            name = f"{owner}/{repo}" if in_topic else repo
        else:
            continue

        category = subsection if (in_topic and subsection) else section
        category_label = HUB_CATEGORY.get(category, category or "未分类 Uncategorized")
        source = "topic" if in_topic else "hub"

        entry = {
            "id": name,
            "name": name,
            "url": url,
            "description": desc,
            "category": category_label,
            "source": source,
            "installSpec": install_spec,
        }
        if is_bundle_entry:
            entry["kind"] = "bundle-entry"
            entry["owner"], entry["repo"] = owner, repo
            if subsection:
                entry["collection"] = subsection
            # unique storefront id: collection/name (the collection repo may
            # also appear as its own catalog row)
            entry["id"] = f"{subsection or owner}/{name}"
            # bundle entries live inside a collection repo: dedupe by (url, name)
            key = f"be:{url}:{name}"
        else:
            entry["owner"], entry["repo"] = owner, repo
            entry["installSpec"] = f"github:{owner}/{repo}"
            key = url

        if key in seen:
            prev = plugins[seen[key]]
            if source == "hub" and prev["source"] == "topic":
                plugins[seen[key]] = entry
            continue
        seen[key] = len(plugins)
        plugins.append(entry)

    plugins.sort(key=lambda p: (p["source"] != "hub", p["name"].lower()))

    data = {
        "generatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "catalogDate": date.today().isoformat(),
        "source": os.path.basename(src),
        "count": len(plugins),
        "plugins": plugins,
    }

    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

    from_hub = sum(1 for p in plugins if p["source"] == "hub")
    print(f"OK: {len(plugins)} plugins ({from_hub} hub / {len(plugins)-from_hub} topic) -> {out}")


if __name__ == "__main__":
    sys.exit(main())
