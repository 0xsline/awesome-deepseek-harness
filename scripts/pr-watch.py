#!/usr/bin/env python3
"""PR watcher for 0xsline/awesome-deepseek-harness.

Every 30 minutes (or once per run):
- list open PRs
- for each: verify repo exists (GitHub API), bilingual diff (README.md +
  README.zh-CN.md), mergeability
- auto-merge compliant PRs (squash + delete branch); log anomalies
  (conflict / single-language / missing repo) and skip them — they stay
  in the log for manual handling.

State file (~/.dsh/pr-watch-state.json) remembers PRs already flagged as
anomalous so they are not re-logged every cycle; a PR update resets it.

Usage:
  python3 scripts/pr-watch.py            # one pass
  python3 scripts/pr-watch.py --loop     # forever, 1800s interval
"""
import json
import os
import subprocess
import sys
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

REPO = "0xsline/awesome-deepseek-harness"
STATE = Path.home() / ".dsh" / "pr-watch-state.json"
INTERVAL = 1800  # 30 min


def now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def log(msg: str) -> None:
    print(f"[{now()}] {msg}", flush=True)


def gh(args: list[str]) -> str:
    return subprocess.run(["gh", *args], capture_output=True, text=True, check=True).stdout


def repo_exists(full_name: str) -> bool:
    try:
        req = urllib.request.Request(
            f"https://api.github.com/repos/{full_name}",
            headers={"User-Agent": "dsh-pr-watch", "Accept": "application/vnd.github+json"},
        )
        with urllib.request.urlopen(req, timeout=20) as resp:
            return resp.status == 200
    except Exception:
        return False


def pr_diffs(n: int) -> str:
    return gh(["pr", "diff", str(n), "--repo", REPO])


def load_state() -> dict:
    if STATE.exists():
        return json.loads(STATE.read_text())
    return {}


def save_state(state: dict) -> None:
    STATE.parent.mkdir(parents=True, exist_ok=True)
    STATE.write_text(json.dumps(state, ensure_ascii=False, indent=1))


def check_and_merge() -> None:
    state = load_state()
    out = gh(["pr", "list", "--repo", REPO, "--state", "open", "--json", "number,title,updatedAt", "-q", ".[] | \"\\(.number) \\(.updatedAt)\""])
    if not out.strip():
        log("no open PRs")
        return
    for line in out.strip().splitlines():
        n, updated = line.split(" ", 1)
        n = int(n)
        if state.get(str(n)) == updated:
            continue  # already flagged as anomalous, unchanged
        title = gh(["pr", "view", str(n), "--repo", REPO, "--json", "title", "-q", ".title"]).strip()
        log(f"checking #{n}: {title}")

        # 1. bilingual diff check
        diff = pr_diffs(n)
        has_en = "README.md" in diff
        has_zh = "README.zh-CN.md" in diff
        if not (has_en and has_zh):
            log(f"  SKIP #{n}: not bilingual (en={has_en} zh={has_zh}) — needs manual fix")
            state[str(n)] = updated
            continue

        # 2. repo existence for new entries (github.com/owner/repo links)
        import re

        repos = set(re.findall(r"github\.com/([A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+)", diff))
        missing = [r for r in sorted(repos) if not repo_exists(r)]
        if missing:
            log(f"  SKIP #{n}: repos not found: {missing}")
            state[str(n)] = updated
            continue

        # 3. mergeability
        status = gh(["pr", "view", str(n), "--repo", REPO, "--json", "mergeStateStatus", "-q", ".mergeStateStatus"]).strip()
        if status != "CLEAN":
            log(f"  SKIP #{n}: merge state {status} — needs manual rebase")
            state[str(n)] = updated
            continue

        merged = subprocess.run(
            ["gh", "pr", "merge", str(n), "--repo", REPO, "--squash", "--delete-branch"],
            capture_output=True, text=True,
        )
        if merged.returncode == 0:
            log(f"  MERGED #{n}")
        else:
            log(f"  MERGE FAILED #{n}: {merged.stderr.strip()[:200]}")
            state[str(n)] = updated
    save_state(state)


def main() -> None:
    if "--loop" not in sys.argv:
        check_and_merge()
        return
    while True:
        try:
            check_and_merge()
        except Exception as exc:  # gh/API hiccup: keep the watcher alive
            log(f"cycle error: {exc}")
        time.sleep(INTERVAL)


if __name__ == "__main__":
    main()
