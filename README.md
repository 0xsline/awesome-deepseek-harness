<p align="center">
 <a href="README.md">English</a>&nbsp;&nbsp;|&nbsp;&nbsp;
 <a href="README.zh-CN.md">简体中文</a>
</p>

<br>

<div align="center">
 <img width="640" src="assets/banner.jpg" alt="Awesome DeepSeek Harness">
</div>

# Awesome DeepSeek Harness [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<!-- BANNER: luminous DeepSeek whale with agent-orchestration harness (1280×480) -->

<p align="center">
 <a href="#install">Install</a>&nbsp;&nbsp;&nbsp;
 <a href="contributing.md">Contribution guide</a>&nbsp;&nbsp;&nbsp;
 <a href="https://deepseekdocs.com/">DeepSeek Docs</a>&nbsp;&nbsp;&nbsp;
 <a href="https://github.com/topics/dsh-plugin">Public plugin topic</a>&nbsp;&nbsp;&nbsp;
 <a href="https://github.com/dsh-external/issues">Issues</a>&nbsp;&nbsp;&nbsp;
 <a href="CATALOG.md">完整目录</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center">
 <b>Curated DeepSeek Harness (DSH) ecosystem: plugins, tools &amp; infrastructure. Sources: dsh-external/hub catalog and the public GitHub dsh-plugin topic.</b><br>
</p>

<br>
> Note: the GitHub [`dsh-plugin` topic](https://github.com/topics/dsh-plugin) is public; some `dsh-external` repository links may still require org access.

## Contents

- [Install](#install)
- [Core & Bundles](#core--bundles)
- [Agents & Orchestration](#agents--orchestration)
- [Context & Search](#context--search)
- [Memory & Knowledge](#memory--knowledge)
- [Input & Editing](#input--editing)
- [UI, Themes & Interaction](#ui-themes--interaction)
- [Dashboards & Session UX](#dashboards--session-ux)
- [IDE & Clients](#ide--clients)
- [Browser & Remote](#browser--remote)
- [Models & Inference](#models--inference)
- [Git & Engineering](#git--engineering)
- [Security & Governance](#security--governance)
- [Output & Deliverables](#output--deliverables)
- [Office & Documents](#office--documents)
- [Notifications & Channels](#notifications--channels)
- [Fun & Lifestyle](#fun--lifestyle)
- [Plugin Ecosystem & Development](#plugin-ecosystem--development)
- [Runtime & Operations](#runtime--operations)
- [Domain & Specialist Skills](#domain--specialist-skills)
- [Tools & Utilities](#tools--utilities)
- [Related](#related)
- [Thanks](#thanks)

## Install

Install the official runtime with Node.js:

```sh
npx @deepseek-ai/dsh web
```

Install an external profile bundle with pnpm on your `PATH`:

```sh
dsh plugin --profile web add "github:owner/repo#ref"
```

`dsh plugin` forwards package operations to pnpm, so npm, Git/GitHub, local path, `file:` and `link:` package specs are supported. Only packages declaring `dsh.bundle.patch` become active profile layers; plain dependencies remain installed but inactive. Restart `dsh --profile web` after installing or updating a bundle.

The former `&path:` sub-path and Repository Plugin installation forms are not part of the current official bundle flow; use an installable package that declares `dsh.bundle.patch`.

Management panel: Settings → Plugins.

## Core & Bundles

- [DeepSeek Harness Ultimate](https://github.com/18126295767-cell/deepseek-harness-ultimate) - Community-maintained reproducible profile installer: deduplicated defaults across coding, workflow, reliability and productivity; full commit-SHA pins, permissive-license audit, pre/post dependency checks, optional sensitive integrations, and beginner guides in 20 languages for Windows, macOS and Linux.
- [dsh-deepresearch](https://github.com/dsh-external/dsh-deepresearch) - DeepResearch plugin (cordis).
- [dsh-plan-execute](https://github.com/dsh-external/dsh-plan-execute) - Dual-model plan/execute routing: planner model thinks, executor model acts.
- [dsh-toolkit](https://github.com/dsh-external/dsh-toolkit) - Zero-dependency tool suite (calculator/csv/diff/encoding/json/markdown/regex/time).
- [dsh-deep-research](https://github.com/dsh-external/dsh-deep-research) - Adaptive deep-research orchestrator (workflow engine).
- [dsh-101](https://github.com/dsh-external/dsh-101) - DSH documentation reading mode.
- [dsh-client-ui-plan-execute](https://github.com/dsh-external/dsh-client-ui-plan-execute) - Web Settings row for plan/execute model routing.
- [dsh_workflow](https://github.com/dsh-external/dsh_workflow) - Dynamic workflow for DSH (placeholder).
- [dsh-equip-engine](https://github.com/wuykjl/dsh-equip-engine) - Task-driven plugin equip engine: dual retrieval (curated rules + LLM semantic), combo scoring (synergy/conflict/cost/trust), conflict detection and install-command export.
- [dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) - Four-source migration wizard: move Claude Code, Codex, OpenCode and Hermes sessions, memories, skills, instructions and slash commands into DSH (approval-gated, idempotent, resumable sessions).
- [dsh-skill-mover](https://github.com/mjylfz/dsh-skill-mover) - One-click skill migration into DSH: scans 14 agent platforms (Cursor, Claude Code, Codex, Hermes, Trae, Qoder...) plus the shared ~/.agents layer, merges same-name skills, dedupes symlinks and rolls back safely.
- [gewu-tools](https://github.com/nyantused-cpun/gewu-tools) - Model-agnostic visual-inspection pipeline for text-only agents: page-by-page HTML screenshots plus a ready-made vision-subagent briefing contract (gewu_prep), then source-code truth verification of every finding (gewu_locate); validated on mimo-v2.5 & qwen3.7-plus.
- [dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) - DSH plugin manager & marketplace: one-click enable/disable, multi-source market, static index (500+ plugins / 300 skills), skill install/disable, suite one-click assembly, one-click framework upgrade (online install + auto-rollback).
- [dsh-gsd-bundle](https://github.com/jaaty/dsh-gsd-bundle) - Git Ship Done (opengsd-core) reimplemented as host-plane Cordis plugins: replaces the default agent loop with a spec/discuss/plan/execute/verify/ship phase loop.

## Agents & Orchestration

- [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) - Multi-agent team orchestration: captain-style session with durable sub-agent teams, role assignment, and coordinated task execution.
- [dsh-todo-guard](https://github.com/a903067276-rgb/dsh-todo-guard) - Reliable todo panel that survives restarts (official panel only re-renders on write — fixed via projection pre-warm) with three-state completion verification: evidence exists → verified, fake evidence → blocked, no evidence → unverified badge; settings toggle to fall back to official behavior.
- [fakechris/dsh-track](https://github.com/fakechris/dsh-track) - Embedded task-management engine for DSH: decision-point protocol, idea capture wall, Linear-shaped issue store with an evidence-driven lifecycle.
- [dsh-dual-model-eval](https://github.com/huangdaxianer/dsh-dual-model-eval) - Runs one coding prompt across multiple configured models in isolated Git worktrees, streams side-by-side tool traces and results, and commits the candidate the user adopts for later rounds.
- [dsh-agent-arena](https://github.com/LeemanCheung/dsh-agent-arena) - Compares coding agents in isolated Git worktrees with deterministic validation, scoring, and explicit winner application.
- [xiehuan123/coding-coach](https://github.com/xiehuan123/coding-coach) - Coding Coach: 35-skill bundle plus a full agent preset for non-developers (8-stage idea-to-launch pipeline; engineering/product/UI skills).
- [dsh-collaboration](https://github.com/Socialist-Sister/dsh-collaboration) - Multi-agent collaboration suite: user-configured specialist roster, persistent on-demand dispatch (team_call/team_message/team_status/team_close), clone instances, star-topology relay, model comparison and a multimodal vision bridge.
- [dsh-plans](https://github.com/Optim-Agent/dsh-plans) - Planning-first agent preset: research repository changes into traceable Markdown plans, refine them through reviewer/criticizer subagent rounds, then execute as a DSH goal with a verifier checklist.
- [dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) - Persistent multi-model squads managed in Settings and selected in the Composer; the lead Agent dynamically plans bounded DAG runs with optional review/repair, while Run Center reports DSH's official provider-reported Token usage.
- [DSH Automation Center](https://github.com/usersx/dsh-automation-center) - Workspace automation center for scheduled Agent runs: each execution starts a fresh Result Session with persistent audit history; stock DSH uses a Conversation tab, while compatible Shell slots enable a global page.
- [Knotline](https://github.com/MrMaii/knotline) - Visual DSH project map for composing persistent agent workflows from requests, agents, skills, backlogs, approval pools, and scheduled triggers.
- [cleverer-dsh](https://github.com/Classicoke/cleverer-dsh) - Execution-discipline suite for DSH with identical-retry interception, forced reflection, todo enforcement, memory deduplication, and experience-to-skill promotion (11 plugins + 6 skills).
- [february2015/dsh-taskswarm](https://github.com/february2015/dsh-taskswarm) - DSH port of TaskPlane: dependency-ordered waves run in parallel git-worktree lanes, with task packets, cross-model review, and crash recovery.
- [hongyue0721/dsh-kimicode-swarm](https://github.com/hongyue0721/dsh-kimicode-swarm) - Kimi Code Swarm-style batch parallel subagent dispatch: a `swarm_batch` tool fans independent subtasks out to real subagents with two-stage adaptive concurrency (ramp-up plus collision-driven exponential backoff, auto shrink/recover), an in-chat live progress stream (SSE), and `resume_agent_ids` continuation.
- [timwhitez/dsh-self-evolving](https://github.com/timwhitez/dsh-self-evolving) - Evidence-first, crash-resumable self-evolution engine for DSH: generates bounded Cordis plugin candidates, admits them through a one-shot real Loader, evaluates with Harbor, and journals an auditable lineage.
- [Saktawdi/dsh-ha-orchestrator](https://github.com/Saktawdi/dsh-ha-orchestrator) - Model high-availability failover (quarantine, circuit breaking, probe recovery) plus subagent orchestration (fanout/pipeline/supervisor) with a bilingual settings UI.
- [dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) - Durable background child agents on the official subagent seam: start from any session, watch progress in the Web UI sidebar, message and interrupt any time, with per-child tool scoping, persona and delegation-depth caps.
- [zoahdev/dsh-kirocrew](https://github.com/zoahdev/dsh-kirocrew) - Bridge a DSH agent to a persistent, self-evolving KiroCrew development workspace over ACP (JSON-RPC 2.0 over stdio) via a single `kiro_send` tool.
- [bpc-oss/dsh-routed-subagent](https://github.com/bpc-oss/dsh-routed-subagent) - Run a one-shot subagent fully mounted on any agent preset from any session, with per-call model/provider override, model pre-check, and external CLI engines (codex / claude / codebuddy) with background jobs, live progress, kill, and continuable sessions.
- [bpc-oss/dsh-fork-to-preset](https://github.com/bpc-oss/dsh-fork-to-preset) - Fork any session into a different agent preset from the conversation header: a preset picker creates a new child session mounted on the chosen preset, inheriting the source session's completed turns.
- [qwert702/dsh-commander](https://github.com/qwert702/dsh-commander) - Commander mode for DSH Web: inject protocol briefs into the session title bar, parse task blocks from model replies and auto-execute them, separating strategy from execution; activated via a badge button.

- [dsh-product-subagent-console](https://github.com/Jokasa7/dsh-product-subagent-console) - Conversation-level multi-agent workbench for editable task planning, real child-session observation, plan-versus-runtime comparison, and evidence-backed recovery previews; tested with DSH 0.1.1-rc.2.

- [weibaohui/dsh-continue](https://github.com/weibaohui/dsh-continue) - Auto-resume for interrupted agent sessions: an ordered rule table routes by failure type (rate limit, quota, auth, context overflow, crashed orphan) into backoff retry, model switch, resume after compaction, or stop-loss notification, with a visual rule editor and activity log.

## Context & Search

- [zoahdev/dsh-github-intelligence](https://github.com/zoahdev/dsh-github-intelligence) - Read-only developer-intelligence tools across 16 ecosystems (GitHub, GitLab, Gitee, npm, PyPI, crates.io, Docker Hub, Hugging Face, Hacker News, Stack Overflow, Reddit, dev.to, RubyGems, NuGet, Go, ArXiv) with TTL caching and no API key.
- [dsh-hacker-news](https://github.com/heartleo/hn-cli/tree/main/plugins/hacker-news) - Live Hacker News feeds, item threads, Algolia search, and user profiles for DeepSeek Harness.
- [dsh-minimal-first-turn](https://github.com/ZRui-C/dsh-minimal-first-turn) - Minimal-compatible first-turn conditioning for Web root sessions: restricts the prompt and tool catalog to persistent bash and str_replace_editor, then restores the selected preset after the first tool call or reply; includes a persistent composer toggle.
- [xiehuan123/dsh-deepread](https://github.com/xiehuan123/dsh-deepread) - DeepRead: deep-reading assistant with five modes (quick/deep/knowledge-map/Feynman reading/book), batch comparison, budget preflight, transparent background-job progress, WeChat links, local PDF (pure-JS extractor), optional MD/FreeMind/HTML export.
- [dsh-context](https://github.com/bowenliang123/dsh-context) - Context insight panel: see what the model's context window is made of and how it evolves — composition vs. window size, per-request history, compression/injection events, and per-message token stats.
- [dsh-bookmarks](https://github.com/penguin-oo/dsh-bookmarks) - Bookmark finalized assistant replies with notes and tags; a cross-session center with search, tag filter, session jump and one-click Markdown export (Alt+B toggles the panel).
- [billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) - Model-driven context compression (ACP) for DeepSeek Harness, ported from billion-context-pi; the model decides when and what to compress.
- [qwert702/dsh-context-compressor](https://github.com/qwert702/dsh-context-compressor) - Context compression for small models: compresses tool output and conversation history to a few sentences, freeing context for the actual task; continues in a fresh session automatically.
- [dsh-scope](https://github.com/helloxkk/dsh-scope) - Context lens: per-session KV cache hit rate and token composition, plus a GitHub-style usage heatmap of daily tokens, sessions, and cache efficiency.
- [dsh-compressor](https://github.com/lifeodyssey/dsh-compressor) - Slim port of Headroom: compresses tool output, cuts up to 20% of context, without affecting the model's context cache or agent performance.
- [context-vista](https://github.com/GooodWei/context-vista) - A right-side floating panel and /context command for DeepSeek Harness — a live donut chart of context token usage, allocation, and estimated cost.
- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) - See exactly what every request carries: token cost of the AGENTS.md chain, skill catalog and tool schemas, with duplicate/conflict detection and actionable pruning tips (Web UI gauge + context_audit tool).
- [dsh-mcp-lens](https://github.com/labmimors/dsh-mcp-lens) - Progressive-disclosure MCP gateway that searches large remote tool catalogs through two stable interfaces, then calls selected tools with exact schemas, lazy connections and bounded caches.
- [dsh-cot-summary](https://github.com/dsh-external/dsh-cot-summary) - External Summary-CoT plugin workspace.
- [qwert702/dsh-token-viewer](https://github.com/qwert702/dsh-token-viewer) - CC Switch-style token consumption statistics: per-request usage log, real-consumption hero with cache-hit rate, trend chart, per-model peak/off-peak pricing, per-project stats, and account balance.
- [dsh-explain](https://github.com/dsh-external/dsh-explain) - Learning mode that explains each agent step (WIP).
- [dsh-file-mount](https://github.com/acefun29/dsh-file-mount) - Incremental file mounting with read dedupe: mounted line ranges are never re-sent to the model, on-disk changes invalidate and remount, with a Mounted Files tab and token-savings accounting.
- [dsh-session-search](https://github.com/dsh-external/dsh-session-search) - Index-free read-only search across dsh/Codex/Claude Code/pi/OpenCode sessions.
- [cross-harness-cite](https://github.com/dsh-external/cross-harness-cite) - Cite past conversations across harnesses.
- [task-passport](https://github.com/dongsheng123132/task-passport) - Carry durable task state across DeepSeek Harness, WorkBuddy, Claude Code and Codex with machine-readable checkpoints and optimistic locking.
- [dsh-easy-ctx-manager](https://github.com/dsh-external/dsh-easy-ctx-manager) - Context management: context saving and more (cordis).
- [dsh-web-search-exa](https://github.com/TonyDua/dsh-web-search-exa) - Zero-config Exa web search provider: keyless anonymous MCP fallback (mcp.exa.ai/mcp) plus keyed REST search, for the ctx.web seam.
- [dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) - Persistent enhanced web search for DSH: multi-engine routing (DeepSeek/Exa/DDG/Bing/Jina + GitHub/Bilibili/YouTube/V2EX/Xiaohongshu/Twitter/Reddit/RSS), SQLite+LRU cache, userscript-style extraction, Playwright rendering.
- [dsh-free-web-search](https://github.com/delef/dsh-free-web-search) - Free web search with 10 engines (Bing/DuckDuckGo/SearXNG/AnySearch free + Exa/Tavily/Keenable/Perplexity/DeepSeek paid), automatic fallback chain, time-filtered advanced search, platform search (GitHub/Reddit), web page fetching, LRU caching, and a settings UI. No API keys required for basic use.
- [moguiyu/dsh-tavily](https://github.com/moguiyu/dsh-tavily) - Tavily search with multiple API keys, key rotation/failover, usage gauge, and a settings card for DSH.
- [dsh-session-sync](https://github.com/PerryLink/dsh-session-sync) - Cross-device session sync: a dedicated git mirror with append-only keep-both conflict resolution, a /sync command and sync_status/sync_pull/sync_push tools.
- [JohnXu22786/context-pruner](https://github.com/JohnXu22786/context-pruner) - Session context triage for dsh: prunes stale, repeated, failed and oversized context to save token budget.
- [Kaixxrua/dsh-aigc-radar](https://github.com/Kaixxrua/dsh-aigc-radar) - Search AIGC Radar's curated GitHub AI project library (500-star admission, bilingual tags, star-growth snapshots) over its MCP endpoint with native result cards; a pre-step listener nudges a reuse check before the agent writes code.
- [dsh-context-budget](https://github.com/d3vmeh/dsh-context-budget) - Keeps a local model's context at a size the GPU handles well: measures prefill speed on every request and, before each step, warns or compacts early on a hard token ceiling, an observed time-to-first-token budget, or a predicted cold-prefill budget; /context-budget shows the numbers and the cost of compacting now.
- [dsh-personal-directive](https://github.com/PerryLink/dsh-personal-directive) - Personal directives for the agent: system-prompt injection, tools, and a top-bar runtime toggle with replaceable neutral placeholder instructions.

## Memory & Knowledge

- [zilliztech/memsearch](https://github.com/zilliztech/memsearch/tree/main/plugins/dsh) - Shared Markdown memory for DSH and other coding agents, with automatic capture, pre-step context injection, searchable recall, and a review panel.

- [dsh-simple-memory](https://github.com/a903067276-rgb/dsh-simple-memory) - Sidecar markdown memory for DSH: per-session index injection, one-click memory-flow button, enforced 分类-主题.md format, cross-project search.
- [dsh-hme](https://github.com/weopenfire-git/hme-plugin) - Cross-session long-term memory: bounded core (USER.md global + MEMORY.md per-workspace, φ Fibonacci caps) + a tag-indexed, self-consolidating archive (archive/recall/move tools).
- [dsh-memory-vault](https://github.com/flymysql/dsh-memory) - Cross-session memory vault: memory_remember / memory_recall / memory_forget tools, latest entries injected into system-prompt assembly, Settings page (记忆库 / Memory).
- [dsh-memoria](https://github.com/jiayan-xu/dsh-memoria) - Memoria memory backend for dsh: 4 tools (observe/remember/search/recall) into a vector+graph memory layer (memoria) with namespace isolation, auto-write (turn-end observe + positive-feedback -> importance-5 remember) and hot-reload settings.
- [dsh-memory-evolve](https://github.com/dsh-external/dsh-memory-evolve) - Cross-session long-term memory + background self-evolution (5-track memory/git-branch awareness/skill evolution).
- [qwert702/dsh-memory](https://github.com/qwert702/dsh-memory) - Project-level and global long-term memory for DSH Web: isolated POST /items route to avoid path conflicts, multi-turn tool-call context compression before storing entries, deduplication and session-persistent storage.
- [dsh-memory-gate](https://github.com/GIT121995/dsh-memory-gate) - Bounded local long-term memory with CBDC (Claim→Belief→Decision→Consumption) authority gating: SQLite + FTS5 claims, scoped dual-channel recall, /memory management commands, ≤3-claim/1200-char injection per call, no extra model call.
- [dsh-engram-relay](https://github.com/dsh-external/dsh-engram-relay) - Built-in <1B model for 100k-equivalent long memory with causal-graph wake-up.
- [dsh-mneme](https://github.com/modusensus/dsh-mneme) - Cross-session memory engine for DeepSeek Harness: SQLite store + human-editable Markdown mirror, autoDream consolidation with self-correction, failure tracking, offline semantic search (local embedding/rerank/clustering), entity-attribute-timeline, Sleep Mode, custom-model autoSummarize — 473 tests.
- [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) - Mnemon-powered local memory system: three-tier memory (runtime hot memory / project Documents / long-term Memory Spaces) with supervised writeback, retrieval tools, and Web UI.
- [url-manager](https://github.com/Piccolo123/url-manager) - Agent-first URL collection & knowledge management: save links from any platform, auto-categorize/tag, full-text search, shared categories, and deliver results as magic-link cards. Zero setup — agents auto-register on first use.
- [qwert702/dsh-auto-translate](https://github.com/qwert702/dsh-auto-translate) - Auto-translates English replies inline below the original text, with Chinese annotations for tool calls; translation goes through an independent provider request and never enters the session context.
- [url-manager-mcp](https://github.com/Piccolo123/url-manager-mcp) - MCP server companion for url-manager: 21 tools (mcp__url_manager__*) for save/search/categorize/share and magic-link delivery. Stdio or streamable-http.
- [dsh-kb-sieve](https://github.com/dsh-external/dsh-kb-sieve) - Knowledge-base plugin: build auditable KB packages (references + SQL).
- [kb-rag](https://github.com/Breeze136/kb-rag) - Local literature knowledge-base RAG: 8 tools (PDF/folder/Zotero ingest, hybrid BM25+vector+reranker search, cited QA with clickable DOI links, scope/strict modes, dedup/clear/stats), all-local bge embeddings + single-file SQLite, measured 242-doc/86s ingest and sub-second hot queries on 20k chunks.
- [geometry-knowledge](https://github.com/sdoygb/geometry-knowledge) - Offline BM25 knowledge base for the Conjugate Spectral Geometry (CSG) corpus: 208 articles / 3833 chunks / 871 verified truths, 5 geo_* tools (list / search / read / calc / truth) with LaTeX→Unicode rendering, truth→article citation chains and single-character query support, zero runtime deps, `dsh plugin add geometry-knowledge`.
- [dsh-memento](https://github.com/PerryLink/dsh-memento) - Bounded, layered, approval-gated, auditable cross-session memory: typed ctx.memory seam, zero-dependency SQLite provider, memory tool and frozen snapshot injection, plus the dsh-memory-protocol v1 rehearsal with an adapter registry and a conformance suite.
- [dsh-engramory](https://github.com/tinqiao-oss/engramory/tree/master/adapters/dsh) - File-based curated memory: a line/byte-capped `MEMORY.md` index plus one markdown file per fact, versioned with git and readable without a tool. The cap is enforced through `ctx.tools.guard()` rather than asked for in a prompt, and the protocol is registered as a runtime skill; the same store is also read by Claude Code, Codex, Kiro, and OpenClaw.
- [plur-ai/dsh-plugin](https://github.com/plur-ai/dsh-plugin) - PLUR persistent memory: engrams are rendered into the system prompt on each assembly rather than sitting behind a tool call, so recall needs no round trip and the block never accumulates in context; fully local search (BM25 + BGE), plain YAML storage you can edit, per-workspace scoping, and a /plur-memory viewer.
- [dsh-memory-plugin](https://github.com/volcengine/OpenViking/tree/main/examples/dsh-memory-plugin) - OpenViking memory/context plugin for DeepSeek Harness: connects dsh to OpenViking's self-evolving context database for cross-session agent memory and knowledge RAG.
- [dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) - Continual self-evolution: versioned, auditable, rollback-safe harness state (prompt notes, memories, skills, subagent specs) refined from session trajectories.
- [ccch713/deepddw](https://github.com/ccch713/deepddw) - Memory + KB + doc search for DSH on all your LAN devices (PC, phone, tablet) — not local-only.
- [dsh-mnemon](https://github.com/dsh-external/dsh-mnemon) - Mnemonic layer.
- [zoahdev/dsh-zh](https://github.com/zoahdev/dsh-zh) - Chinese-thinking system-prompt section: makes the agent answer in simplified Chinese while keeping code/commands verbatim.
- [memory-mcp-server](https://github.com/BingoAgentTouch/Personal_MCP) - Layered long-term memory MCP server: raw turns → task fragments → daily summaries → topic indexes, local MiniLM 384-dim embeddings or OpenAI-compatible API backend, semantic + Jaccard-fallback search, one-command DSH plugin install.
- [dsh-memory-porter](https://github.com/Shiye-10Pages/dsh-memory-porter) - Cross-vendor memory migration: zero-token import of the `memories.json` in a Claude export, local Claude Code transcripts without an export, and conversations distilled through the host's own model; every memory carries verbatim evidence checked against the source by code.
- [dsh-simple-wiki-memory](https://github.com/rainow/dsh-simple-wiki-memory) - A super-simplified LLM-wiki memory plugin: one index document (auto-loaded) + one markdown file per topic (read only when needed) — no dumping everything into the context and burning tokens. Simple and lightweight, painless to install/uninstall, and freely editable however you like.
- [dsh-library](https://github.com/PerryLink/dsh-library) - Local-first document knowledge base for DeepSeek Harness: library_add/remove/list, hybrid semantic+keyword library_search with diversity re-ranking, relevance filtering and lost-in-the-middle avoidance, citation-aware injection, library_cite_check and library_diagnose; SQLite-backed index via the storage domain, local embedding, zero model downloads.
- [JohnXu22786/docs-retriever](https://github.com/JohnXu22786/docs-retriever) - DocTrove: versioned library documentation retrieval MCP server, zero runtime dependencies, installable as a dsh plugin bundle.
- [JohnXu22786/snippet-expander](https://github.com/JohnXu22786/snippet-expander) - Steno: inline #tag shorthand expansion before send — multi-library, aliases, {{variables}}, recursion guards.
- [dsh-ragflow](https://github.com/staff-os/dsh-ragflow) - RAGFlow knowledge-base retrieval plugin: gives the agent a `ragflow_retrieve` tool that queries your RAGFlow datasets and returns document chunks with similarity scores and source names; three-role design (seam/provider/consumer), env-based config, `dsh plugin add github:staff-os/dsh-ragflow#main`.
- [Mutx163/dsh-model-memory](https://github.com/Mutx163/dsh-model-memory) - Reasoning-effort tier manager for custom API models plus cross-session preference memory: inline low/medium/high/max toggles inside Settings -> Models, atomic settings.yaml persistence, and per-channel auto-restore of the last model and effort level in new sessions.
- [dsh-cortexm](https://github.com/ssmurfgg04-gif/context-m/tree/main/plugins/dsh-cortexm) - Bi-temporal memory plugin: every fact carries a transaction validity range, with VSA/HRR holographic retrieval, a BLAKE3-chained audit log, and session replay/fork; drives Context-M as a JSON-RPC subprocess (npm: dsh-cortexm, needs the Python `cortexm` package).
- [dsh-brainagent](https://github.com/stas130286-blip/dsh-brainagent) - Brain-inspired cognitive plugin: episodic / semantic / procedural / emotional memory stores with a reward-ledger and UCB1 bandit loop, a goal stack with time triggers, curiosity-driven autonomous web research, and proactive initiatives. Recalled memories ride along in the prompt to your configured provider; license is source-available, non-commercial.

- [weibaohui/hermes-loop](https://github.com/weibaohui/hermes-loop) - Automatic post-conversation retrospective that distills useful experience into reusable skills for the skill library, with approval mode and skill-library governance (archive/restore, never deletes directly).

## Input & Editing

- [dsh-global-rules](https://github.com/Semidia/dsh-global-rules) - Edit your `~/.dsh/AGENTS.md` global rules from the Settings page: a text editor with save button, no command line needed.
- [dsh-keyboard-history](https://github.com/NormanFxxkingRockwell/dsh-keyboard-history) - Minimal ↑/↓ input history for the DSH web composer: press ↑/↓ to walk back through sent messages. Nothing else.
- [liustack/modlens](https://github.com/liustack/modlens) - Vision plugin for text-only LLMs: paste images for recognition, multi-image Q&A, screenshot capture, and visual task completion with one-line install.
- [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) - Advanced vision toolkit for DSH: OCR, grounding, multi-image Q&A, screenshot analysis, and UI restoration with structured JSON output.
- [Zhangbo-cn/dsh-voice-input-plugin](https://github.com/Zhangbo-cn/dsh-voice-input-plugin) - Composer mic for the Web UI: tap-to-monitor live transcription and hold-to-talk, with host Edge TTS reply reading that streams while the model generates, echo-pause during reading, and tap-to-stop.

- [dsh-better-sidebar-plugin-office](https://github.com/dsh-external/dsh-better-sidebar-plugin-office) - Office integration for DSH-better-sidebar.
- [dsh-message-edit](https://github.com/dsh-external/dsh-message-edit) - Branch-based message editing / reroll / retry / version timeline.
- [SpookySandwich/dsh-plugin-message-edit](https://github.com/SpookySandwich/dsh-plugin-message-edit) - Edit a sent message to rewind and branch the conversation from that turn; version counter under the bubble, a turn-level version tree of the whole branch family, and ChatGPT / DeepSeek / Claude control layouts.
- [dsh-prompt-studio](https://github.com/dsh-external/dsh-prompt-studio) - Edit system-prompt sections with live preview.
- [dsh-paste-input](https://github.com/dsh-external/dsh-paste-input) - Ctrl+V paste files / drag & drop / picker.
- [dsh-reference-anything](https://github.com/Chael-Chael/dsh-reference-anything) - Extends the native DSH `@` menu with five configurable source groups: commands, skills, workspace files, DSH sessions, and ChatGPT/Claude/Gemini/DeepSeek/Grok/Kimi conversations; external bodies and attachments are read on demand with per-task authorization.
- [dsh-voice](https://github.com/motongv/dsh-voice) - Voice input (speech-to-text) and read-aloud (Edge neural TTS) for the composer.
- [dsh-drag-and-drop](https://github.com/dsh-external/dsh-drag-and-drop) - Cross-platform drag & drop with original path insertion.
- [dsh-file-uploads](https://github.com/l541402398/dsh-file-uploads) - Upload arbitrary local files from the Web composer, show pending cards, and manage stored files in Settings.
- [dsh-postman](https://github.com/zhousun55-byte/dsh-postman) - Composer upload of files and folders: images attach as real message blocks, text goes into the draft, folders stored by directory structure.
- [dsh-input-history](https://github.com/dsh-external/dsh-input-history) - Input history.
- [dsh-multimedia-webui-input](https://github.com/dsh-external/dsh-multimedia-webui-input) - Multimedia file/folder input.
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) - Import full-fidelity conversation histories from 13 coding agents (Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / opencode / ZCode / Grok Build / OpenClaw / Pi / Hermes / Kimi) as resumable DeepSeek Harness sessions, with reverse export/sync back to Claude Code.
- [dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) - File claim/release protection for parallel DSH sessions on the same workspace (heartbeat stale takeover, pending 3-way merge area).
- [dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) - Quick sticky notes in the composer: ideas/feelings/TODO with Markdown preview, auto-save, one-click send to chat.
- [dsh-plugin-quote-reply](https://github.com/yangYzc/dsh-plugin-quote-reply) - Select text in a conversation, then quote it into the composer or reply in a new window.
- [dsh-pathlink](https://github.com/penguin-oo/dsh-pathlink) - Ctrl+click file paths and links in chat: paths open their folder in the OS file manager (with the file selected), links open in a new browser tab.
- [@picgo/dsh-plugin](https://github.com/PicGo/dsh-plugin) - Official PicGo plugin: upload local files to your image host and get public URLs, reusing the hosts and uploader plugins already configured in PicGo.
- [dsh-suggested-replies](https://github.com/dsh-external/dsh-suggested-replies) - Suggested replies above the DSH Web composer.
- [dsh-wordbox](https://github.com/arcmosin/dsh-wordbox) - Persistent common-word/phrase panel beside the composer input with global/current-project buckets and one-click insert.
- [dsh-voice-webspeech](https://github.com/anweat/dsh-voice-webspeech) - Browser Web Speech API voice input for DSH: zero server, zero keys, zero model downloads (Edge=Azure, Chrome=Google speech).
- [dsh-dictate](https://github.com/franksong2702/dsh-dictate) - Browser Web Speech dictation for the Composer: recognition needs no dedicated ASR server, key, or model download; reuses Session text and a configured DSH model for contextual phrase hints and optional transcript polishing.
- [dsh-talk](https://github.com/PerryLink/dsh-talk) - Voice-first session loop: a composer microphone button with browser/local speech-to-text (Web Speech, FunASR, whisper.cpp), a speak tool for text-to-speech replies (browser, edge-tts, piper), event announcements with mute, and speak-to-interrupt.
- [dsh-plugin-anydoc](https://github.com/beancookie/dsh-plugin-anydoc) - This plugin exports a reusable function that takes a file path or a Buffer, extracts the content via @firecrawl/anydoc, and returns GitHub‑Flavored Markdown (GFM). It also includes configuration options and an example usage.
- [dsh-attachment-upload](https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-attachment-upload) - Composer attach button: uploads files into the workspace's .dsh-attachments directory and inserts the path into the draft.
- [dsh-steer-button](https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-steer-button) - Always-visible steer button in the composer: one click injects the draft into the running turn (equals Ctrl/Cmd+Enter).
- [dsh-prompt-optimize](https://github.com/peterliucius/dsh-prompt-optimize) - Rewrite the current composer draft through an auxiliary LLM call without sending a message.
- [Boliban/dsh-enter-customizer](https://github.com/Boliban/dsh-enter-customizer) - Take over the system input shortcuts for the chat input box and configure behavior independently for each shortcut.
- [PerryLink/dsh-composer-history](https://github.com/PerryLink/dsh-composer-history) - Terminal-style input history for the web composer (edge-first arrows, draft/caret restore, Ctrl+R search, sliding-context awareness) plus a smart input layer: cross-session snippets, prompt templates with variables, reuse insights, and compaction-summary highlighting.
- [opencues/opencues](https://github.com/opencues/opencues/tree/master/integrations/dsh) - Word alternatives and underscore-gated fill-ins in the composer: end a line with `_` and it is filled, misspellings are flagged as you type. Routes through `ctx.llm`, so it needs no API key of its own.

## UI, Themes & Interaction

- [fengb3/dsh-theme-macintosh](https://github.com/fengb3/dsh-theme-macintosh) - Classic Macintosh (System 7) pixel theme: desktop pattern canvas, Finder sidebar, monochrome buttons and dialogs, light/dark support.
- [dsh-view-manager](https://github.com/runcat-tommy/dsh-view-manager) - Manage DeepSeek Harness Web GUI session view tabs (Chat / Trajectory): enable, hide, reorder and rename labels, locale-aware (zh/en), with npm update reminders.
- [dsh-history-question-nav](https://github.com/TropicWiden/dsh-history-question-nav) - Right-side Questions panel that lists the current session's user questions and scrolls to the matching answer.
- [dsh-chat-timeline-plus](https://github.com/NIU-001-LIU/dsh-chat-timeline-plus) - Message timeline rail with hover Q&A preview (question + reply digest card), panel pinning, day separators, and bookmarks.
- [dsh-scenery-background](https://github.com/soslowsnail/dsh-scenery-background) - Rotating Web UI backgrounds with daily and slideshow modes, five offline SVG scenes, optional Unsplash photos, glass panels, and a floating control.
- [dsh-zh-commands](https://github.com/Semidia/dsh-zh-commands) - Chinese slash-command enhancement: six new Chinese commands (/help /status /time /cwd /whoami /preset) plus in-place localization of every built-in command description in the slash menu.
- [dsh-skin-studio](https://github.com/LeemanCheung/dsh-skin-studio) - Local semantic-token theme editor with palette extraction, WCAG auditing, preview, and export.
- [deepseek-harness-zh-tw](https://github.com/chiyulogg-commits/deepseek-harness-zh-tw) - Traditional Chinese (Taiwan) locale edition of DeepSeek Harness: adds a third UI language option with Taiwan terminology across all 25 web UI packages.
- [dsh-spotlight](https://github.com/0xsline/dsh-spotlight) - Keyboard-first command palette for DeepSeek Harness Web.
- [dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) - Pins off-screen expanded Think/tool/command labels to the top of the DSH Web conversation and collapses every expanded section in one click (custom hotkey).
- [dsh-better-model-selector](https://github.com/Khellendros97/dsh-better-model-selector) - Splits the composer model selector into a searchable, favorite-marking dropdown and a reasoning-effort slider, with Ctrl+P / Ctrl+T quick-switch shortcuts.
- [dsh-catppuccin](https://github.com/zhijun-dai/Catppuccin-dsh-theme) - Catppuccin theme plugin: Latte / Frappé / Macchiato / Mocha skins for the DSH Web theme runtime.
- [dsh-appearance](https://github.com/Semidia/dsh-appearance) - Unified appearance coordinator: theme color presets, UI fonts, UI font size, plus per-workspace markdown font size / line-height / background, with a coordination layer that stops UI scaling from leaking into chat body text.
- [solarized-dsh-theme](https://github.com/zhijun-dai/Solarized-dsh-theme) - Solarized + Selenized theme plugin: four faithful palettes registered into the DSH Web theme runtime.
- [arcana](https://github.com/GooodWei/arcana) - A floating command deck that lists every slash command in DeepSeek Harness as runnable buttons, sorted by usage.
- [dsh-aigc-canvas](https://github.com/dsh-external/dsh-aigc-canvas) - AIGC canvas plugin (cordis).
- [pbr-render](https://github.com/dhb861832993-star/pbr-render) - PBR 3D model preview for game art: GLB/GLTF with textures, IBL environment, orbit controls, and a material channel inspector (baseColor/normal/roughness/metallic/AO/emissive/wireframe) via the pbr3d fence and pbr_render tool.
- [dsh-deepcel](https://github.com/dsh-external/dsh-deepcel) - Deepcel spreadsheet skin and standalone distribution.
- [dsh-diff-viewer](https://github.com/dsh-external/dsh-diff-viewer) - PiUI-style Web diff viewer replacing the default diff view.
- [dsh-mobile](https://github.com/dsh-external/dsh-mobile) - Mobile client plugin (cordis + dsh.plugin.json).
- [dsh-openpencil](https://github.com/dsh-external/dsh-openpencil) - OpenPencil design preview and editing plugin.
- [dsh-design-studio](https://github.com/Sal7one/DSH-Design-Studio) - Design Studio tab: design briefs become html/css/js mockups with live preview, element picker, design-agent chat with vision review, identity presets and zip export.
- [dsh-ultra-ui](https://github.com/dsh-external/dsh-ultra-ui) - Ultra UI plugin (cordis).
- [dsh-view-modes](https://github.com/NigelYao/dsh-view-modes) - DSH Web output modes with Verbose, Normal, and Summary views, semantic grouping for tool calls and thinking, and live execution status.
- [dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) - Steam Workshop-style in-app plugin browser: search, hot/newest/trending windows, Chinese keyword mapping, bilingual translation, plugin-signature filtering, and smart one-click install/update/uninstall with an installed-plugins manager.
- [dsh-web-review](https://github.com/CanglongCl/dsh-web-review) - Isolated web page previews with element annotations and visual adjustments that guide source edits.
- [dsh-markdown-preview](https://github.com/GitHubJiKe/dsh-markdown-preview) - In-chat preview for produced files: click a produced-file chip to render Markdown (markdown-it + highlight.js), images, or plain text in the conversation, with system-app open kept one click away.
- [dsh-i18n](https://github.com/Semidia/dsh-i18n) - Chinese localization for tool results: intercepts tool execution output and translates English markers (`[exit code]`, `[timed out]`, `[sandbox: ...]`, etc.) into Chinese, with a settings toggle.
- [dsh-settings-tuner](https://github.com/Semidia/dsh-settings-tuner) - System parameter adjustment UI: grouped settings page for timeouts, parallelism, LLM retry policy, model params, web search, permissions and presets; safe profile-config editing with line-level YAML matching and post-write validation.
- [dsh-workspace-menu](https://github.com/0imzero/dsh-workspace-menu) - Workspace/chat context menu for the DSH home page: pin, rename, open in file explorer, archive, fork, copy, and open in a new window.
- [dsh-mobileweb-adapter](https://github.com/dsh-external/dsh-mobileweb-adapter) - Mobile/PWA layout adaptation + LAN WebSocket fix.
- [dsh-split-panes](https://github.com/dsh-external/dsh-split-panes) - Split panes.
- [dsh-skins](https://github.com/dsh-external/dsh-skins) - Web UI skins.
- [dsh-skin](https://github.com/KinGao294/dsh-skin) - Codex-style skin switcher + custom wallpaper for the Web UI: curated --dsw-alias-* palettes and a translucent wallpaper layer with opacity/blur controls.
- [dsh-chat-thumb](https://github.com/dsh-external/dsh-chat-thumb) - Chat thumbnails (cordis).
- [show-bash-command](https://github.com/dsh-external/show-bash-command) - Show actual command content instead of descriptions.
- [turtle-ui](https://github.com/dsh-external/turtle-ui) - Official UI plugin reference implementation.
- [@zhaoolee/dsh-notes](https://github.com/zhaoolee/notes) - Export DSH conversations as Smartisan Notes-style PNGs, or create and update Markdown notes in a configured account-scoped workspace.
- [dsh-plugin-description](https://github.com/MysaDC/dsh-plugin-description) - Adds bilingual (zh/en) descriptions to every plugin card on the Web Settings plugin list; publishes a `pluginDescriptions` service for other plugins to register their own.
- [dsh-plugin-list-plus](https://github.com/yibiner/dsh-plugin-list-plus) - Trust-tiered, collapsible plugin list with comprehensive per-plugin details for Web Settings.
- [dsh-premium-themes](https://github.com/xiaoyanzi191/dsh-premium-themes) - 8 curated color schemes plus custom palette import (name + scheme + seed colors derive a full token map), a Palette row in General settings, hot-plug install.
- [dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) - Human-readable catalog for official DSH Web built-ins with status explanations and an audited set of safe UI toggles.
- [dsh-file-mentions](https://github.com/a903067276-rgb/dsh-file-mentions) - Clickable file paths in DSH replies: Codex-style inline open, 📂 reveal in file manager, and a mentioned-files chip list at the turn tail.
- [dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) - Web UI colorscheme plugin: switch and persist themes from Settings, with 8 built-in open-source presets plus custom themes.
- [dsh-plugin-setting-mcp](https://github.com/Ceelog/dsh-plugins/tree/main/src/plugins/dsh-plugin-setting-mcp) - Manage MCP servers from the Web settings panel, with add, edit, remove, enable/disable and hot reload on save.
- [dsh-theme-plugin](https://github.com/BeiZi6/dsh-theme-plugin) - Theme studio for the DSH Web GUI: five built-in presets plus fully customizable light/dark palettes (accent, background, foreground, UI and code fonts, translucent sidebar, contrast), hot-swapped instantly and persisted in localStorage.
- [dsh-plugin-smooth-stream](https://github.com/SpookySandwich/dsh-plugin-smooth-stream) - Better streaming text animation for DeepSeek Harness.
- [dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream) - Silky streaming reveal for the Web UI: text appears at the model's arrival rate, new lines glide in, no flicker; follow stays with the user and respects prefers-reduced-motion.
- [dsh-whale-switch](https://github.com/bowen507/dsh-whale-switch) - Minimal on/off loop: a desktop shortcut launches dsh web, and an animated whale button (hover to arm, click to dive) shuts it down gracefully and closes the tab.
- [dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) - Brings the DeepSeek Harness homepage background to DSH Web: WebGL fluid light, dot-line grid and a digital whale, with dark and light palettes.
- [Open Sea Skin](https://github.com/d-dev0101/open-sea-skin) - Realtime WebGPU ocean skin with lower-left controls for waves, daylight, glass opacity and automatic day cycling; tested on DSH Web 0.1.0-rc.6.
- [dsh-plugin-help](https://github.com/Semidia/dsh-plugin-help) - Installed-plugins README summary panel: floating 📖 button, zh-preferring titles, default-all-expanded READMEs, blue circular index badges, per-plugin one-click update (`dsh plugin update`) via a loopback endpoint.
- [dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) - MCP management console for the official DSH MCP client: server CRUD with approval-gated, backed-up profile writes, a tool trial console through the official tool pipeline, health diagnostics, and connection status.
- [dsh-session-pin](https://github.com/PerryLink/dsh-session-pin) - Pin sessions and workspaces to the top of the sidebar with per-pin colors, plus a navigation organizer: boards, tags and saved views, health summaries, and /goto.
- [RevolutionLA/dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) - One-command skinning for DSH Web: 8 original themes, wallpaper (opacity/blur/gradient/URL), per-user accent, and shareable theme packs + favorites + surprise-me. Purely native token system.
- [dsh-workspace-sort](https://github.com/Moonshile/moonshile-dsh-plugins) - Re-sorts sidebar workspaces by last activity once per day; stable order within the day.
- [dsh-theme-manager](https://github.com/runcat-tommy/dsh-theme-manager) - Two-level theme manager for the DSH Web UI: pick a culture / scene, a national flag, a developer palette, or a bold high-contrast pairing first, then a concrete style (58 built-in palettes, light & dark).

- [weibaohui/dsh-settings-ui](https://github.com/weibaohui/dsh-settings-ui) - Customizes the DSH native settings window: preset or custom sizes, fullscreen, background transparency, and theme, solid-color, or image backgrounds, with a floating ball for quick access; saved in the local browser.

## Dashboards & Session UX

- [zoahdev/dsh-timesheet](https://github.com/zoahdev/dsh-timesheet) - Turn-based time tracking from session logs: per-day/project/provider/source rollups, tool calls, failures, TTFT (CLI + `timesheet` tool).
- [zoahdev/dsh-replay](https://github.com/zoahdev/dsh-replay) - Time-travel debugger: replay, visualize, and diff a session's full trajectory from `session.jsonl.zstd` (zero deps, Node ≥ 22.19).
- [dsh-session-cluster](https://github.com/dsh-external/dsh-session-cluster) - Session clustering.
- [session-chatlog](https://github.com/dsh-external/session-chatlog) - Session chat logs.
- [dsh-session-archive](https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-session-archive) - Settings section to view archived sessions and permanently delete dead conversations (two-step confirm, running sessions locked).
- [dsh-plugin-no-workspace](https://github.com/SpookySandwich/dsh-plugin-no-workspace) - Standalone workspace-free conversations with lossless detach and direct top-level sidebar rendering, without replacing DSH's native workspace UI (npm: dsh-plugin-no-workspace).
- [dsh-office](https://github.com/dsh-external/dsh-office) - Office file read/write bundle: model edits Office files, docx/pdf preview in web client.
- [dsh-token-pet](https://github.com/pk7j7sqryy-ops/dsh-token-pet) - Cute token-usage pet in the session header: live context occupancy, per-session usage and breakdown, plus date/weekday, weather, 3-day forecast and severe-weather alerts, all theme-aware.
- [dsh-token-usage](https://github.com/jiamuAi/dsh-token-usage) - Codex-style token usage panel: whole-instance cumulative/per-session peak tokens, longest chat & streak, daily/weekly/cumulative activity heatmap, and plugin/skill Top5.
- [dsh-office](https://github.com/Fayelin12/dsh-office) - Office workspace & session dashboard for DeepSeek Harness (DSH): a floating 6-column sprite panel visualizing workspaces, sessions, token usage and subagents — plus Agent Mail, Feishu/Lark message feed, meeting schedules, transcripts and an office log tab.
- [dsh-deepseek-quota](https://github.com/yingjunnan/dsh-deepseek-quota) - DeepSeek API balance in a bottom-right floating card on the DSH Web page (auto-refresh + manual refresh).
- [dsh-pin-recall](https://github.com/kerwin2046/dsh-pin-recall) - Pin assistant replies from the Web action strip and recall them into the next model turn (`/pin` `/recall`, with optional wake).
- [dsh-turn-navigator](https://github.com/dsh-external/dsh-turn-navigator) - DSH Web turn navigation plugin.
- [dsh-fork-graph](https://github.com/chouyong/dsh-fork-graph) - Git-style conversation fork graph in the session header: colored lanes and fork curves show which session branched from which, with click-to-jump navigation.
- [dsh-session-tree](https://github.com/ZhengQingJing/dsh-session-tree) - Read-only session lineage tab for DSH Web: browse the current root, fork, and subagent family as a bounded tree and click any node to navigate.
- [chouyong/dsh-branch-review](https://github.com/chouyong/dsh-branch-review) - Track human decisions for related DSH session branches: keep, discard, or follow up with reasons, labels, and external links.
- [dsh-fork-diff](https://github.com/chouyong/dsh-fork-diff) - Read-only parent and sibling branch comparison in DSH Web: message and tool diffs, usage and latency summaries, filters, and open-session navigation.
- [dsh-usage](https://github.com/Huasecc/dsh-usage) - DeepSeek account-wide usage & balance panel from the official platform API (api/v0/usage/by_api_key): cache hit/miss & output tokens, cost, 24h–90d ranges, persistent platform token, and a model-visible `deepseek_usage_query` tool.
- [dsh-usage-panel](https://github.com/AlfredChaos/dsh-usage-panel) - Token usage statistics as a Settings page: cumulative KPIs, a six-month activity heatmap, stacked per-model daily bars and a model donut, rescanned read-only from session logs.
- [fancr-code/dsh-plugin-usage-meter](https://github.com/fancr-code/dsh-plugin-usage-meter) - Usage/cost/balance meter in the composer dock: button-style chip with live peak/off-peak pricing tags, today/last-7-days per-model stacked bar charts, budget alerts, and a persistent cross-session ledger.
- [dsh-what-changed](https://github.com/sjh9714/dsh-what-changed) - Session-wide file change review in the session header. Lists every file the agent wrote this session with its hunks, counts refused writes separately from changes, and folds from a session projection rather than the on-disk log.
- [dsh-token-usage-dashboard](https://github.com/solstice621/dsh-token-usage-dashboard) - Codex-style token usage dashboard: five stat cards, GitHub-style activity heatmap (daily/weekly views), insights & model ranking; persisted snapshot with incremental sync, survives session deletion.
- [dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) - RMB/USD token billing for the DSH web: official-policy auto pricing (incl. peak/off-peak hours), per-message cost ledger, account balance, locale-driven currency display.
- [dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) - DeepSeek account balance and session cost in the DSH Web composer dock (auto-fetched official pricing, peak/off-peak support).
- [dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) - Per-session and daily API cost, budget with usage %, official balance, history dashboard, and one-click official price sync with peak/off-peak pricing.
- [TokenLedger](https://github.com/zh667/TokenLedger) - Local DSH token usage by relay site, project, and model, with account balances and subscription quota windows.
- [dsh-budget](https://github.com/PerryLink/dsh-budget) - Cost governance for DeepSeek Harness: aggregated token/cost metering per model, session and day, session/daily/monthly budget caps with threshold alerts and alert/block/degrade over-limit policies, carbon footprint estimation, per-model latency benchmarks, a Settings budget tab, and the /budget command.
- [Phant0Meow/dsh-meow-cachebilling](https://github.com/Phant0Meow/dsh-meow-cachebilling) - Per-round cache billing inside the composer context-meter popover: what the current call spends on cache hits, misses, and output in CNY, with automatic official peak/off-peak and per-model pricing; hidden on non-official DeepSeek routes.
- [dsh-cost-meter](https://github.com/Sttrevens/dsh-cost-meter) - Per-turn USD cost in the Web UI: session total in the header and per-turn cost in each message footer, with a hover breakdown (token usage × configurable pricing table).
- [dsh-linked-folders](https://github.com/Sttrevens/dsh-linked-folders) - Multi-folder workspace: a global linked-folders list plus per-session on-the-fly linking (link_folder/unlink_folder), managed from the Web sidebar.
- [dsh-plugin-cost](https://github.com/yweilai77-dev/dsh-plugin-cost) - Session cost estimate in the DSH Web composer dock (tokenUsage × configurable price table, one-click official-price refresh).
- [dsh-balance-tide](https://github.com/huanyuLv/dsh-balance-tide) - DeepSeek account balance and session cost under the composer, with a live peak/off-peak pricing badge (Beijing time), a countdown to the next pricing switch, and hover price tables with usage advice.
- [dsh-spend](https://github.com/nonewind/dsh-spend) - Token usage and estimated spend for the DSH web UI: floating panel with per-model / per-day / per-session stats and auto-detected billing plans.
- [dsh-worktime-board](https://github.com/spacexun2/dsh-worktime-board) - Agent worktime dashboard: floating day/week/month stats, multi-dimension heatmap, thread attendance Gantt, school-year calendar, and a 12-realm xianxia score system for agent activity.
- [dsh-live-stats](https://github.com/dsh-external/dsh-live-stats) - Live token estimates and generation TPS.
- [dsh-tps](https://github.com/dsh-external/dsh-tps) - TPS meter.
- [DSH-better-sidebar](https://github.com/dsh-external/DSH-better-sidebar) - Sidebar: file rendering/terminal/Git/subagents/custom APIs.
- [dsh-web-panel](https://github.com/dsh-external/dsh-web-panel) - Embedded terminal dock + Git Review + file view.
- [dsh-tmux-cc](https://github.com/adrianleb/dsh-tmux-cc) - Persistent tmux control-mode cockpit for DSH Web that mirrors native panes in a dock.
- [dsh-subagent-tree](https://github.com/dsh-external/dsh-subagent-tree) - Subagent tree visualization.
- [dsh-web-workflow-visualizer](https://github.com/dsh-external/dsh-web-workflow-visualizer) - Workflow visualization.
- [dsh-ui-progress](https://github.com/dsh-external/dsh-ui-progress) - Progress indicators.
- [dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) - Right-side dot-timeline rail to jump between user messages.
- [dsh-plan-switch](https://github.com/a903067276-rgb/dsh-plan-switch) - One-click enter/exit Plan mode for the DSH web input bar, a quick-click shortcut for /plan.
- [dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) - Turn-index sidebar: one entry per user turn, click to jump, scroll-spy highlighting.
- [dsh-outline](https://github.com/urzeye/dsh-outline) - Real-time conversation outline panel for the DSH Web session page: a tree of user questions and Markdown headings (H1-H6) that updates live while streaming, with click-to-jump highlight, expand-depth control, search, and per-session favorites.
- [dsh-conversation-anchors](https://github.com/biggerboy/dsh-conversation-anchors) - Sidebar conversation anchor navigation: one anchor per chat node (user / assistant / tool / command) with role badges and summaries, click to smooth-scroll to that message; live-refreshes with the session.
- [dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) - Attention reminders: frame badge, tab-title count and whale-favicon recolor for sessions waiting for input or finished unopened.
- [dsh-sidebar-mode](https://github.com/Meredith2328/dsh-sidebar-mode) - Preset-mode badge embedded in the "New Session" button: click to pick the default agent preset for the next session (long names truncate with ellipsis so the label stays readable).
- [dsh-hud](https://github.com/a903067276-rgb/dsh-hud) - HUD status panel: git status, MCP servers, skills, model and token usage in a floating side panel.
- [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) - Auto-resumes interrupted DSH Web requests: sends a queued 「继续」 after network/timeout/host-crash failures, with error classification, adaptive backoff, templated continue text and browser notifications; everything configurable from the plugin settings card.
- [Chu-m/dsh-chat-continue](https://github.com/Chu-m/dsh-chat-continue) - Auto-retries failed API requests to keep DSH conversations running, with configurable HTTP status and error-code rules.
- [qwert702/dsh-continue-on-limit](https://github.com/qwert702/dsh-continue-on-limit) - Auto-sends continue when a local model hits its output-token cap: dual-source detection (turn-max-tokens node + provider response), maxConsecutive guard (default 3) prevents infinite loops.
- [dsh-trajectory-debug](https://github.com/devmom/dsh-trajectory-debug) - Trajectory waterfall, deterministic replay, breakpoints, edit-and-rerun, fork compare and performance analytics for DeepSeek Harness.
- [dsh-netcafe](https://github.com/mario03690/dsh-netcafe) - Hosted outcome tools bundle (MCP over one config row): md→docx/pptx/pdf, tables with in-code arithmetic checks, China-reachability testing from a real mainland vantage, Chinese calendar/holidays; free anonymous quota, per-call cost reporting.
- [dsh-opencodego-usage](https://github.com/BeiZi6/dsh-opencodego-usage) - OpenCodeGo quota monitor for the DSH Web GUI: a breathing indicator at the input's bottom-right (green/yellow/red by remaining share), a liquid-glass panel with rolling/weekly/monthly usage windows and reset times, auto-refreshing every 30 s; API key read from DSH credentials.
- [penguin-oo/dsh-quota-hub](https://github.com/penguin-oo/dsh-quota-hub) - Unified real-time quota dashboard: one collapsible glass panel for OpenCodeGo windows, DeepSeek balance, OpenRouter credits, SiliconFlow and Moonshot balances — auto-detects DSH credentials, host-side fetching (keys never reach the browser), custom providers via ~/.dsh/dsh-quota-hub.json.
- [dsh-trajectory-reader](https://github.com/flyingtimes/dsh-trajectory-reader) - A 轨迹解读 (trajectory interpretation) tab that summarizes each user round — what was wanted, how the assistant thought and executed, files/commands/errors — via a rules engine plus optional LLM narrative; user messages stay verbatim.
- [dsh-session-manager](https://github.com/Semidia/dsh-session-manager) - Right-click context menu on sidebar conversation rows: pin, rename, archive, fork, mark unread, copy cwd/id/title/deep-link, open in explorer/new window.
- [dsh-session-handoff](https://github.com/WeiYe6/dsh-session-handoff) - Hand long sessions over to a clean one: /handoff summarizes the conversation with an LLM, creates a new session+agent in the same workspace, injects the handoff document as the first message, and auto-opens it; the origin session stays unchanged.
- [dsh-cost-crystal](https://github.com/xxvk/dsh-cost-crystal) - Floating cost crystal for the DSH Web UI: balance card, real-time tok/s, peak/off-peak billing countdown, last-24h spend, and a 🔮 next-message cost forecast, all timezone-aware.
- [dsh-session-repair-ui](https://github.com/Semidia/dsh-session-repair-ui) - Session repair button in the conversation header: detects & fixes session-log corruption — tool-call id swaps, empty call ids (`message must have tool source`), unknown event types from disabled plugins (marks `ignorable`), torn zstd tails, missing final-frame newlines; ghost-style UI, auto-backup before writes.
- [plugin-team-board](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-team-board) - Shared multi-agent task board (create / claim / transition / query) over a Cordis service key.
- [zoahdev/dsh-code](https://github.com/zoahdev/dsh-code) - VS Code extension: run one-shot DeepSeek Harness tasks (`dsh --profile headless`) from a command or panel.
- [dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) - Event-flow audit panel: event types, distribution, counts, and recent events for plugin authors.
- [dsh-session-explorer](https://github.com/Zn-Dk/dsh-session-explorer) - Message-level full-text search browser across DSH sessions (FTS5 trigram over user / assistant / steering / tool with per-kind filters), deduplicated across fork/continued sessions, read-only context preview with auto-scroll to the focused message and one-click jump to the real session, incremental/full rebuild with health check, zh/en i18n follows the Host locale.
- [dsh-whale-meter](https://github.com/Shiye-10Pages/dsh-whale-meter) - Usage tiers (🐟→🐳) with a locally-estimated percentile and shareable stats card; 46 models across 6 vendors including size-tiered Chinese pricing; backfills pre-install sessions; old-vs-new rates across the 2026-08-17 change.
- [dsh-file-upload](https://github.com/a903067276-rgb/dsh-file-upload) - One upload button plus drag-and-drop files into the conversation as local paths: save to the project's uploads/, path text into the input box, works with any vision tool.
- [dsh-bill](https://github.com/Jannchie/dsh-bill) - Cost tracking: per-turn cost line, spend attributed to tool output / model output / system prompt / commands, budget, forecast; priced per call from models.dev + OpenRouter (8000+ models) and never recomputed.
- [dsh-history](https://github.com/chenproton/dsh-history) - Browse every message you sent in the current session: full-history listing with newest-first sort, text filter, one-click copy, and click-to-jump that auto-loads earlier history when the target is not yet loaded.
- [JohnXu22786/session-titler](https://github.com/JohnXu22786/session-titler) - Two-phase session captioning for DeepSeek Harness: instant keyword captions while busy, budget-model refinement when idle.
- [dsh-billing-tui](https://github.com/Ethanz11-creat/dsh-billing-tui) - Real-time token/cost billing with official DeepSeek peak/off-peak pricing: TUI status line and a whale ASCII receipt via /billing.

- [woosh2010/dsh-usage-dashboard](https://github.com/woosh2010/dsh-usage-dashboard) - Peak/valley billing dock and usage analytics: token/cost/model stats, trend and token-mix charts, latest-20-turns records, global time/session/model filters.
- [runcat-tommy/dsh-panda-calendar](https://github.com/runcat-tommy/dsh-panda-calendar) - Panda Calendar (熊猫日历) conversation-view tab: solar/lunar dates, ganzhi, Chinese zodiac, solar terms, festivals, China public holidays incl. make-up workdays, and multi-city weather; free data sources, no API key.
- [dsh-session-enhance](https://github.com/Tinger-X/dsh-session-enhance) - Full-control session management for DSH Web: archive, guaranteed physical delete (tombstone anti-resurrection), drag-and-drop workspace moves, conversation notifications, copy session ID and one-click record sync.
## IDE & Clients

- [Blue](https://github.com/dsh-blue/blue) - Interactive TUI plugin for DeepSeek Harness — a pi-tui renderer mounted as a Cordis bundle: streaming transcript, tool-call cards, approval overlays, session management, theming.
- [dsh-cc-tui](https://github.com/dsh-external/dsh-cc-tui) - Claude Code-style fullscreen TUI (streaming expand / double-Esc rollback).
- [dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) - TUI built with grok-build.
- [dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) - Pi TUI (differential-rendering terminal framework) front end: streaming markdown, thinking collapse, tool cards, slash commands, approval/question overlays, shared dsh session store.
- [Martty](https://github.com/openma-ai/Martty) - DSH-first Rust/ratatui agent TUI with streamed tool calls, subagents, durable sessions, and a Cordis-extensible client UI.
- [dsh-terminal](https://github.com/geebos/dsh-terminal) - Collapsible in-conversation interactive terminal with multi-tab live shells, auto-reconnect, one-click quick commands, and a bilingual UI that follows the theme.
- [lk251066/dsh-tui-pro](https://github.com/lk251066/dsh-tui-pro) - Full-screen terminal workbench for DeepSeek Harness with a durable assistant, workspace-grouped project sessions, and structured thinking, tool, diff, plan, and subagent views.
- [DSH-Portable](https://github.com/WSL043/DSH-Portable) - Cross-platform one-folder distribution of DeepSeek Harness with a bundled runtime, plugin market, data-preserving updates, and sessions, settings, plugins, and workspace that move together.
- [deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) - Native Windows desktop shell: 1:1 official web UI with embedded server hosting, tray and auto-recovery.
- [Harness Desktop](https://github.com/baiyuscc13724-max/deepseek-harness-desktop) - Windows desktop app for the official DSH Web UI with a Chinese installer and portable build, quick themes, an in-app plugin marketplace, separate main/subagent model selection, and verified updates.
- [dsh-desktop](https://github.com/foolgry/dsh-desktop) - Download-and-run Electron desktop build (macOS/Windows installers): no Node.js or terminal needed, tracks upstream `@deepseek-ai/dsh` releases automatically, with built-in web UI and auto-update.
- [deepseek-harness-desktop](https://github.com/fendouai/deepseek-harness-desktop) - Tauri 2 desktop distribution of DeepSeek Harness with the complete Web UI, a supervised local sidecar, and a bundled Node.js 24 runtime (macOS/Linux/Windows).
- [DeepSeek Harness Desktop](https://github.com/dsh-tauri-desk/deepseek-harness-desktop) - One-click Tauri 2 desktop distribution of DeepSeek Harness: bundled runtime, no Node.js/pnpm/Docker required, native macOS/Windows/Linux packages.
- [DeepSeek Harness Desktop](https://github.com/web-casa/DeepSeek-Harness-Desktop) - Community Tauri 2 desktop distribution with a supervised local sidecar, bundled Node.js 24, native Windows/macOS packages, and a [website](https://dsharness.app).
- [DeepSeek Harness Desktop](https://github.com/chokwinlee/deepseek-harness-desktop) - Self-contained macOS/Windows desktop host for the official DSH Web UI; macOS uses Tauri/WKWebView and ships sub-90 MB DMGs with the Harness runtime bundled.
- [dsh-vscode](https://github.com/Lixxx1/dsh-vscode) - VS Code right-sidebar client for the official DSH runtime: project and editor-selection context, permission/plan controls, queued steering messages, and native diff review.
- [zhibailu/dsh-vsc](https://github.com/zhibailu/dsh-vsc) - Native VS Code sidebar + editor bridge for DeepSeek Harness: ask about a selection, review agent changes, approval and question cards; connects to the configured DSH URL and can auto-start `dsh web` when unavailable.
- [dsh4vscode](https://github.com/DoggyHU/dsh4vscode) - VS Code chat windows backed by the DSH agent: OpenCode-style independent sessions, model auto-routing (Flash/Pro/Pro Max).
- [dsh-plugin-open-editor](https://github.com/Civitasv/dsh-plugin-open-editor) - Open the current workspace in your local editor (VS Code, Cursor, JetBrains, Vim, ...) from the session header.
- [dsh-open-with](https://github.com/ChuanTianML/dsh-open-with) - Open registered DSH workspaces from the Web UI in detected or configured local editors, terminals, or file managers, with a remembered per-browser preference.
- [DSH-for-VSC](https://github.com/yauntyour/DSH-for-VSC) - VS Code extension embedding the DSH WebUI as an editor panel: sidebar console with service status and start/stop, hidden auto-restart, status-bar indicator and run logs.
- [dsh-gui](https://github.com/xuboboo/dsh-gui) - Third-party Windows desktop client for DeepSeek Harness: native window, branded theme & splash, startup crash fixes, token usage statistics.
- [DSH Studio](https://github.com/Moresyl/dsh-studio) - Cross-platform Rust/Tauri desktop shell that supervises `dsh web`, reclaims process trees, selects free ports, and publishes Windows/Linux/macOS installers without forking the upstream UI.
- [DSH Deck](https://github.com/Socialist-Sister/dsh-deck) - Unofficial Electron desktop shell for the official DSH Web UI (same code, same data): attach-to-existing-harness mode prevents dual-writer session corruption, session-log relocated to the session row menu, tray residency, single portable exe.
- [DshCockpit](https://github.com/Lxiayu/DshCockpit) - Electron desktop cockpit for `dsh web`: tray-resident background tasks, token/cost tracking with budget alarms, runtime auto-update with rollback, Quick Ask hotkey, scheduled tasks, full-text session search.
- [deepseek-harness-desktop](https://github.com/Easyhoov/deepseek-harness-desktop) - Unofficial in-process Windows desktop app with tray residency, native notifications, and an IPC bridge.
- [dsh-shell](https://github.com/TaoSmile/dsh-shell) - Zero-install desktop shell for an already-installed DeepSeek Harness: attaches to a running `dsh web` or auto-launches it with your existing Node environment; Electron shell with tray plus a double-click Edge app-mode launcher.
- [dsh-desktop](https://github.com/xiaoyanzi191/dsh-desktop) - Electron desktop wrapper for DeepSeek Harness: double-click to start, automatically manages the dsh Web service lifecycle.
- [dsh-chat-tools](https://github.com/yj060464-commits/dsh-chat-tools) - Headless terminal companion toolkit: chat.sh continuous-conversation REPL (rolling context, decision-point voting, live workflow streaming, effort switching) + automatic LLM session-log summarization. Zero-dependency bash + Python.
- [dsh-come](https://github.com/qing3a/dsh-come) - Desktop shell for DeepSeek Harness (Rust single exe): self-bootstrapping Node, tray, autostart, plugin store.
- [dsh-launcher](https://github.com/iceleaf916/dsh-launcher) - macOS menu-bar launcher for dsh: start/stop/restart the web service, hot reload, auto-start at login, and open the UI in a system or built-in browser.

- [ccgui / desktop-cc-gui](https://github.com/zhukunpenglinyutong/desktop-cc-gui) - Multi-engine AI coding desktop client (Tauri): Claude Code, Codex, Gemini, OpenCode, DeepSeek Harness and more in one GUI — not a DSH Web UI shell or `dsh-plugin`.
- [dsh-desktop-hub](https://github.com/FlashingChen/dsh-desktop-hub) - Electron desktop hub for the official DSH Web UI with a built-in MCP config converter (Claude Code / Cursor JSON → DSH YAML), Skills / Plugin management consoles, and a bundled Node.js + DSH runtime — no install, no terminal.
- [JohnXu22786/browser-automation](https://github.com/JohnXu22786/browser-automation) - Web Bridge: browser automation MCP server for dsh — real-browser navigation, click, form-fill, screenshots, JS execution, accessibility-tree snapshot driven.
- [JohnXu22786/computer-control](https://github.com/JohnXu22786/computer-control) - Desktop control for dsh: screen capture, pointer/keyboard injection, accessibility-tree semantic actions, emergency stop, allow/deny rules, confirmation flow and idle standby.

## Browser & Remote

- [mrRisega/dsh-remote](https://github.com/mrRisega/dsh-remote) - Reverse-proxy gateway to control the DSH Web UI from a phone browser with full feature coverage (incl. privileged methods): loopback masquerading, WebSocket passthrough, login rate limiting, optional TLS, LAN or public reverse-proxy deployment.
- [dsh-voice-gate](https://github.com/yangfei222666-9/dsh-voice-gate) - Voice-first mobile gate into DSH: a zero-dependency Python service (port 3081) with a PWA page that sends voice or text to the current session, token auth, launchd autostart, and a Tailscale HTTPS recipe.
- [dsh-browser-panel](https://github.com/dsh-external/dsh-browser-panel) - Headed browser embedded in the WebUI, model-driven (Codex-style, zero vision deps).
- [dsh-builtin-browser](https://github.com/wqty123/dsh-browser) - Shared real browser for DSH: a visible browser window the human can take over, driven by the agent over CDP (snapshot/execute/content/tab management).
- [dsh-browser](https://github.com/dsh-external/dsh-browser) - Chrome sidebar extension.
- [dsh-deeplink](https://github.com/dsh-external/dsh-deeplink) - Open DSH WebUI sessions or workspaces directly from URL parameters.
- [dsh-remote](https://github.com/flymysql/dsh-remote) - Multi-machine remote workspace: manage many SSH hosts, pick a local or remote workspace in the native Add-workspace flow (system folder / path browse), mirror a remote workspace to a real local folder, and operate it with rw_* tools.
- [dsh-ssh](https://github.com/jmcc-guo/dsh-ssh) - AI-managed SSH connections with a live multi-tab terminal panel for DeepSeek Harness.
- [dsh-lan-access](https://github.com/Leon0555/dsh-lan-access) - LAN access for the Web GUI: 0.0.0.0 bind plus a crypto.randomUUID polyfill for non-secure (LAN HTTP) contexts (npm: dsh-lan-access).
- [xgone/dsh-remote](https://github.com/xgone/dsh-remote) - Remote access & authentication for DeepSeek Harness web UI: account/password login gate, MFA (TOTP), signed session cookies, role-based access, in-browser directory picker, and a Settings page for account management (npm: @xgone/dsh-remote).
- [dsh-dispatch](https://github.com/alextangson/dsh-dispatch) - Phone-side command center (plugin + zero-knowledge relay + PWA): dispatch tasks into isolated git worktrees from your phone, approval push notifications with phone/desktop first-answer-wins (never auto-approved), and a multi-machine session board; E2E encrypted, self-hostable.
- [ego-browser](https://github.com/dsh-external/ego-browser) - Browser agent.
- [dsh-webbridge](https://github.com/dsh-external/dsh-webbridge) - Web bridge.
- [browser4-dsh](https://github.com/dsh-external/browser4-dsh) - Browser4 AI-native browser engine (skills).
- [dsh-browser-runtime](https://github.com/anweat/dsh-browser) - Self-contained browser runtime plugin: Playwright (chromium) + OpenCLI as plugin-local deps (global reuse fallback), exposes a `browser` service and interactive browser tools.
- [dsh-computer-use](https://github.com/ZRui-C/dsh-computer-use) - Text-first computer use: background Chromium control via Playwright/CDP plus accessibility-first macOS control; actions stay pinned to the correct process and window without taking the user's pointer (Developer ID signed, notarized Universal 2 DMG).
- [dsh-adb](https://github.com/SamXiaBing/dsh-adb) - ADB device & bench operations: device discovery, structured logcat (background streaming), apk install, file pull/push, dumpsys performance snapshots.
- [zoahdev/dsh-vision](https://github.com/zoahdev/dsh-vision) - Vision analysis tool: analyze a local image or URL with an OpenAI-compatible vision model.
- [dsh-click](https://github.com/PerryLink/dsh-click) - Native desktop control for DeepSeek Harness (Windows first): screen_shot, screen_read accessibility trees, click/type/scroll/key, and app launch — approval-gated, never stealing foreground focus.
- [zoahdev/dsh-browser-use](https://github.com/zoahdev/dsh-browser-use) - Browser Use cloud bridge: run real web tasks (open pages, click, type, fill forms, extract data) through the Browser Use API.
- [sheep-programmer/dsh-web-search-free](https://github.com/sheep-programmer/dsh-web-search-free) - Free web search for DSH: anonymous Parallel default plus Exa fallback, a Settings toggle, and an MCP server compatible with Claude Code and Codex.
- [SeerableOfficial/dsh-web-search-toggle](https://github.com/SeerableOfficial/dsh-web-search-toggle) - Per-session Web Search toggle that directs the agent to search the web before answering.
- [tabbit-browser](https://github.com/Tabbit-Browser/dsh-plugin) - Drive the user's Tabbit Browser from DSH via its Browser-owned, task-isolated Playwright CLI (`tabbit-cli`): bundled `tabbit-browser` skill, ≥1.9.0 runtime preflight, region-aware installer download, and persistent named task spaces (no Chrome/Ego/CDP fallback).
- [dsh-tabbit](https://github.com/Tabbit-Browser/dsh-tabbit) - Drive the user's Tabbit Browser from DSH via its Browser-owned, task-isolated Playwright CLI (`tabbit-cli`): bundled `tabbit-browser` skill, ≥1.9.0 runtime preflight, region-aware installer download, and persistent named task spaces (no Chrome/Ego/CDP fallback).
- [dsh-antigravity](https://github.com/LiZhenNet/dsh-antigravity) - Google Antigravity / Cloud Code Assist model provider for DSH with native Web OAuth, real-time quota tracking, and dynamic reasoning effort routing.
- [JohnXu22786/model-catalog](https://github.com/JohnXu22786/model-catalog) - Model catalog auto-discovery: fetch model listings, pricing and capabilities from OpenAI-compatible API hosts, normalized into ready-to-use config.
- [dsh-browser-vision](https://github.com/tristan-mcinnis/dsh-browser-vision) - Vision browser tool: drives real Chrome over CDP with browser-use and reads the page with deepseek-v4-flash-vision-exp, so canvas text, text baked into images and values in rendered charts are readable; returns JSON validated against a caller-supplied schema and reports per-run token cost.
- [harness-unity-bridge](https://github.com/WarrenMondeville/harness-unity-bridge) - File-based bridge that lets DeepSeek Harness control the Unity Editor: run EditMode/PlayMode tests, compile scripts, refresh assets, read console logs, control Play Mode, and build — via a deterministic Python CLI, a Unity UPM package, and an installable DSH skill (`unity-bridge`).

## Models & Inference

- [dsh-agy-link](https://github.com/amlyczz/dsh-agy-link) - Google Antigravity (agy CLI) model provider for DSH: stream Gemini/Claude/GPT-OSS subscriptions, native tool cards, thinking turns, and in-GUI Google OAuth login.
- [dsh-baseurl-probe](https://github.com/Semidia/baseurl-probe) - Provider baseURL auto-detection: when a provider's baseURL is a bare domain (e.g. `https://mzeapi.top`) and only `/v1` serves the OpenAI-compatible API, the plugin auto-fixes it — probes all providers with zero-cost path detection (no API key needed).
- [dsh-llm-compat-healer](https://github.com/Semidia/dsh-llm-compat-healer) - LLM compatibility auto-healer for transit/gateway providers: repairs DeepSeek `reasoning_content` replay and unsupported `developer` roles without a restart, exposes pi-ai compatibility settings, and adds redacted Chinese summaries for upstream errors.
- [dsh-provider-health](https://github.com/Semidia/dsh-provider-health) - Provider health dashboard as a Settings page: read-only per-provider status, health (time-decayed from recent errors), thinking capability, max tokens and latest error, sourced from the llm-pi-ai config and the compat-healer error log.
- [dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) - Native image generation for DeepSeek Harness with Google Gemini, OpenAI Images, OpenAI-compatible APIs, and ByteDance Seedream.
- [exoticknight/dsh-labnana](https://github.com/exoticknight/dsh-labnana) - Labnana image generation for DeepSeek Harness: text-to-image / image-to-image / precise editing (NanoBanana Pro, Gemini 3.1 Flash Image, GPT-Image-2, Wan2.7, Seedream).
- [welsione/dsh-model-router](https://github.com/welsione/dsh-model-router) - Unified model routing: one logical ModelID over multiple providers with first-token failover and cooldown, health-aware candidate ranking, three tiers auto-selected by purpose, per-candidate reasoning effort, and a settings-page management panel.
- [dsh-codex-oauth](https://github.com/WNJXYK/dsh-codex-oauth) - ChatGPT/Codex subscription integration for DSH with GPT models, image generation, web search, quota reporting, and browser/device-code OAuth sign-in.
- [dsh-qwen-token-plan-cn-responses](https://github.com/nickhelion/dsh-plugins/tree/main/packages/qwen-token-plan-cn-responses) - Qwen Token Plan CN Personal Responses API provider: syncs official model and per-model built-in-tool docs, supports DSH local functions and images, and keeps a validated last-known-good catalog.
- [dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) - ChatGPT OAuth provider for DSH with Codex models, image generation, selectable subscription search, standard and Spark quota reporting, and a native settings page.
- [dsh-vision](https://github.com/dsh-external/dsh-vision) - Vision bridge: view_image tool over any OpenAI-compatible VLM (Zhipu free tier by default).
- [DeepSee](https://github.com/windyslime/DeepSee) - DSH `0.1.0-rc.5` Web-profile visual-reasoning gateway: routes image turns through local, pluggable VLM backends and leaves normal DSH text routing intact.
- [dsh-plugin-vision](https://github.com/tdf1995/dsh-plugin-vision) - Vision for text-only LLMs: image description / OCR / VQA via free Gemini and GLM vision APIs.
- [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) - Free vision for text-only agents: built-in keyless vision chain plus pixel tools (Q&A, grounding, crop, pixel diff, colors, OCR, SVG trace, cutout, screenshots); paste an image and it just works — no Python, one-command install.
- [dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) - DeepSeek brain + automatic image transcription: GUI images are transcribed via the official deepseek-v4-flash-vision-exp by default (a pure-text V4-Pro brain can see images); any OpenAI-compatible VLM or local Ollama as alternatives.
- [DSH-Multimodal](https://github.com/yauntyour/DSH-Multimodal) - Per-file-type multimodal chains: preset processing models per wildcard convert image/video/audio files into prompt tokens before they reach the text-only session model, with per-preset fallback chains and a Multimodal settings page.
- [dsh-draw](https://github.com/PerryLink/dsh-draw) - Unified static-image generation router: one image_generate tool with standard parameters, config-driven OpenAI-compatible engine routing (OpenAI Images, Zhipu CogView, and any compatible endpoint) with health-aware fallback, durable workspace attachment results, per-session quota accounting, an in-conversation result card, and a Plugins settings panel that stores API keys as credential references.
- [dsh-advisor](https://github.com/dsh-external/dsh-advisor) - Second model passively reviews each turn and injects notes.
- [dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) - Blocking safety gate: a stronger model rules allow/deny/ask on risky tool calls, enforced by the tool executor rather than by prompt. Optional BlockRun x402 route for 67 models, paid per request from a wallet.
- [dsh-llm-fallbacks](https://github.com/dsh-external/dsh-llm-fallbacks) - Role-based LLM retry/fallback strategy.
- [dsh-pi-adapter](https://github.com/dsh-external/dsh-pi-adapter) - ExtensionAPI bridge for pi.
- [dsh-a2a](https://github.com/dsh-external/dsh-a2a) - Agent2Agent mesh.
- [dsh-plugin-acn](https://github.com/acnlabs/dsh-plugin-acn) - Join ACN from DeepSeek Harness: register this agent, discover others, send messages, read the inbox. Defaults to the China region.
- [dsh-acp](https://github.com/dsh-external/dsh-acp) - Client-neutral ACP adapter.
- [deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) - ACP profile plugin and standalone server that exposes the full DSH agent to Zed and other ACP clients while reusing DSH credentials, sessions, and MCP configuration.
- [dsh-slice-agent-loop](https://github.com/dsh-external/dsh-slice-agent-loop) - Drop-in agent loop with bounded-slice context engine (cordis).
- [savemoneybenchmark](https://github.com/dsh-external/savemoneybenchmark) - Cost-reduction benchmark (examples + skills).
- [dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) - MCP server exposing Harness agent: any MCP client (e.g. Hermes) drives Harness as its 'arms'.
- [dsh-subagent-tools](https://github.com/lynx-gt/dsh-subagent-tools) - Per-call model / provider / persona / toolFilter overrides for subagent delegation, @preset: references, provider/model composite ids (bundle, no patched files).
- [dsh-subagent-cwd](https://github.com/lynx-gt/dsh-subagent-cwd) - Extends dsh-subagent-tools with a per-call cwd for subagents and the two in-process provider patches it requires.
- [dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) - Per-subagent LLM provider/model selection with role templates (subagent_role tool).
- [penguin-oo/dsh-delegate-router](https://github.com/penguin-oo/dsh-delegate-router) - Automatic Flash/Pro routing for DeepSeek Harness subagent calls: light tasks run on a cheap model (e.g. V4 Flash), heavy tasks stay on the strong model — with per-call overrides and /delegate session modes.
- [Cavan-Ou/dsh-flash-godmode](https://github.com/Cavan-Ou/dsh-flash-godmode) - Reasoning-mode routing plugin for V4 Flash on headless: w7 persona anchoring, first-turn tool anchoring and complexity-dispatched guidance.
- [dsh-subscription-auth](https://github.com/Khellendros97/dsh-subscription-auth) - Subscription OAuth login: use ChatGPT/Claude/Grok/Kimi subscription accounts (not API keys) with automatic model discovery.
- [dsh-llm-oauth](https://github.com/ziyou979/dsh-llm-oauth) - OAuth / subscription-plan LLM login (Grok, GitHub Copilot, OpenAI Codex, Anthropic, OpenRouter): durable credential store with on-request token refresh, no repo patches (Grok/Copilot verified; use Codex with caution).
- [dsh-llm-local-token](https://github.com/tianxia--/dsh-llm-local-token) - Reuse the OAuth credentials your local Codex CLI and Claude Code already hold: registers `openai-codex` and `anthropic` routes read from `~/.codex/auth.json` and `~/.claude/.credentials.json` (macOS Keychain fallback), refreshes tokens near expiry, and reports subscription usage from provider rate-limit headers.
- [loongport-dsh](https://github.com/SailingLoong/loongport-dsh) - Multi-site relay provider setup: signed provider directory (identity, URLs, models), Settings → LoongPort page for provider and manual API key configuration, OpenAI-compatible routes (npm: loongport).
- [dsh-llm-fallback](https://github.com/Visol-456/dsh-llm-fallback) - Provider fallback chain: the request head is never rewritten (your picked model stays); on switchable failure it retries through the configured backup targets in order, with a Web UI settings panel.
- [dsh-smart-route](https://github.com/Semidia/dsh-smart-route) - Smart provider routing: composer-button one-click enable/disable, any channel error (including 4xx) auto-falls-back to the next channel, chain names shown in the model selector without exposing internal channels/models, multi-chain management with settings UI.
- [dsh-sampling-sliders](https://github.com/Semidia/dsh-sampling-sliders) - Composer sampling panel: temperature / maxTokens sliders with hot-apply and persist-to-file modes, applied to every provider via the agent/request hook.
- [dsh-service-control](https://github.com/Semidia/dsh-service-control) - Restart & shutdown buttons in the session header utilities: graceful appExit shutdown, auto-restart of `dsh web` via scheduled task → launcher `-ControlledRestart`.
- [dsh-output-styles](https://github.com/PerryLink/dsh-output-styles) - Runtime-switchable model output styles with Claude Code outputStyles parity (/style command, per-session persistence, web picker), plus the output.render.* presentation protocol: a renderer registry, per-session/per-tool rules, and /export.
- [NOirBRight/dsh-llm-ollama](https://github.com/NOirBRight/dsh-llm-ollama) - Ollama Cloud native chat adapter: registers an `ollama-cloud` LLM route with native model discovery (context windows, vision, thinking, tools) and web search/fetch providers.
- [dsh-llm-inspector](https://github.com/cdxiaodong/dsh-llm-inspector) - Unified LLM request/response inspector: reasoning-effort tuning, external-think export, traffic & bundle analysis.
- [dsh-github](https://github.com/PerryLink/dsh-github) - Official-grade GitHub CI integration: composite action.yml, polling PR review bot with idempotent inline comments and a status-check gate, plus PR/issues tools with every write gated by human approval.
- [dsh-local-ai](https://github.com/PerryLink/dsh-local-ai) - Ollama local-model adapter: ollama_list/pull/remove/show plus health checks, registers an Ollama route via the official LlmAdapter with model_route rules (offline-first / long-text / privacy) and cloud fallback; /ollama command for a one-shot overview.
- [rapid-mlx-dsh-provider](https://github.com/raullenchai/rapid-mlx-dsh-provider) - Native provider for Rapid-MLX, an Apple-silicon local inference server: registers a `rapid-mlx` LlmAdapter route that reads model facts (context window, reasoning parser, capabilities) from the server's `/v1/models` instead of a hand-written settings.yaml, so switching served models needs no re-setup and compaction is timed to the real context window.
- [dsh-llm-gate](https://github.com/d3vmeh/dsh-llm-gate) - Per-provider concurrency gate on the llm/stream waterfall: holds surplus model requests in a FIFO queue inside DSH so main agent, subagents and compaction take turns on a single-slot local server (llama.cpp --parallel 1) instead of timing out; maxConcurrent / maxQueued / queueTimeoutMs.
- [JohnXu22786/github-mcp](https://github.com/JohnXu22786/github-mcp) - RepoGate: GitHub developer workbench MCP server for dsh — repositories, issues, PRs, code review, search, zero runtime dependencies.
- [JohnXu22786/worktree-mgr](https://github.com/JohnXu22786/worktree-mgr) - Task-isolated Git worktrees for dsh: auto-create, sync and tear down isolated workspaces per task.
- [JohnXu22786/spec-driven](https://github.com/JohnXu22786/spec-driven) - Keel (龙骨): spec-driven development discipline skill pack — spec-first, verify assumptions, prevent over-engineering and scope creep; skills+tools+templates for dsh.
- [JohnXu22786/adversarial-review](https://github.com/JohnXu22786/adversarial-review) - Gavel-review: adversarial multi-perspective code review — parallel attack lenses, deterministic static sentinels, cross-lens merge/dedup, severity grading, suppression rules and review history; dsh tools + standalone CLI.
- [dsh-plugin-cloud](https://github.com/AgentsDanceAI/deepseek-harness-cloud/tree/main/packages/dsh-plugin-cloud) - DSH Cloud gateway provider: device-authorized login writes a multi-model provider row (DeepSeek, GPT, Claude, Gemini and more) into the user config layer; works against the hosted service or a self-hosted deployment.
- [dsh-plugin-rollout-scout](https://github.com/SpookySandwich/dsh-plugin-rollout-scout) - Detects which conversation model your account is being served: launches concurrent throwaway probe conversations, scores each streaming chain-of-thought by how its paragraphs open, and cancels probes that read as the older model within seconds.
- [openllmsh/dsh](https://github.com/openllmsh/dsh) - Routes the harness through the OpenLLM gateway: a pure-config Cordis patch that adds an `openllm` provider to the in-box pi-ai adapter pointed at the local daemon (`127.0.0.1:8787/v1`, no API key held by dsh) and registers the `openllm mcp` stdio server (openllm, claude-context, supermemory tool groups).
- [lynkr-dsh-plugin](https://github.com/veerareddyvishal144/lynkr-dsh-plugin) - Registers Lynkr, a self-hosted tier-routing LLM gateway, as a custom OpenAI-compatible provider: classifies each request's difficulty and routes it to the cheapest model that can handle it, across 15+ providers (Anthropic, OpenAI, Azure, Bedrock, Vertex, OpenRouter, Ollama, DeepSeek, and more).
- [dsh-fetch-timeouts](https://github.com/d3vmeh/dsh-fetch-timeouts) - Raises Node's HTTP headers/body timeouts for the whole DSH process (default 30 min, proxy-aware) so Ollama and LM Studio models that stay silent while thinking or generating a large tool call are not cut off at 5 minutes; replaces the node_modules undici patch.
- [dsh-turn-doctor](https://github.com/d3vmeh/dsh-turn-doctor) - Explains which layer killed a failed turn: times every model request (first byte, longest silence, total) and combines that with the error to name the culprit (dsh idle watchdog vs Node undici timers vs SDK timer vs server crash, context overflow, gate queue, tool timeouts, failed compactions) and the exact setting to change; verdicts in the DSH terminal plus a /why command, subagents included.
- [dsh-logbook](https://github.com/d3vmeh/dsh-logbook) - Makes ctx.logger output visible: a /logs chat command over a full-capture ring (level, name, grep, since filters) plus a default-on stderr exporter for warnings and errors, configurable per plugin; works headless. Also documents that dsh's default log buffer silently drops warn and debug records.
- [dsh-model-pin](https://github.com/d3vmeh/dsh-model-pin) - Keeps every model request inside a per-provider allow-list, enforced at the agent/request waterfall: disallowed models are redirected to a fallback or refused; subagents stop inheriting stale creation-time routes; warns when consecutive requests would make a --models-max 1 llama.cpp router reload models. A one-entry list is a global single-model mode.
- [dsh-think-ultra](https://github.com/YUEYUEXYS/dsh-think-ultra) - Pins every request to native `max` reasoning effort instead of the `ultra` option, with isolated Flash / Pro / Vision depth presets. Distributed as a build-only artifact: the core is closed and its license forbids reverse-engineering, deobfuscation and repackaging.

## Git & Engineering

- [dsh-llm-verifier](https://github.com/Web0926/dsh-llm-verifier) - Runs 3 or 5 coding-agent candidates in detached Git worktrees, validates their patches with project commands, ranks only passing candidates, and requires separate approval before applying the winner.
- [dsh-ci-co-pilot](https://github.com/temotee2103/dsh-ci-co-pilot) - GitHub workflow plugin for PR review, CI failure diagnosis and fixes, issue triage, and release-note drafting.
- [gongyijie85/dsh-repo-setup](https://github.com/gongyijie85/dsh-repo-setup) - Read-only repo bootstrap scanner (repo_setup_scan tool): detects stack/tests/docs/git/db and recommends plugins, MCP servers and hygiene files (claude-code-setup counterpart).
- [dsh-git-identity](https://github.com/dsh-external/dsh-git-identity) - Pin Git commit authorship to the environment identity (gh account + noreply email).
- [dsh-gh-bridge](https://github.com/dsh-external/dsh-gh-bridge) - Bridge macOS Keychain GitHub token into sandboxed gh.
- [dsh-tool-github](https://github.com/NEAZ71eve/dsh-tool-github) - GitHub REST API tools + browser sidebar panel: repos, search, issues, PRs, comments, account binding, and one-click workspace integration.
- [dsh-atomgit](https://github.com/xiongjiamu/dsh-atomgit) - AtomGit plugin bundle for DeepSeek Harness: atomgit-skills workflows (plan/implement/review/merge issues & PRs), ag CLI, and platform-hosted GitCode MCP tools.
- [deepseek-harness-action](https://github.com/Lixiaoyiao/deepseek-harness-action) - GitHub Action that runs DeepSeek Harness for pull request review, CI diagnosis, trusted fixes, and issue-to-PR implementation.
- [duyanta123/dsh-refactor-insight](https://github.com/duyanta123/dsh-refactor-insight) - Turn codebase smells into an executable, priority-ordered refactoring plan: file-length / deep-nesting / function-length / god-object heuristics plus a staged runbook (read-only, no auto-rewrite).
- [dsh-auto-blame](https://github.com/dsh-external/dsh-auto-blame) - Auto blame.
- [dsh-bash-rtk](https://github.com/DeepTrial/dsh-bash-rtk) - Routes eligible bash commands through rtk (Rust Token Killer) inside the DSH bash executor to compress tool output and save tokens; safe passthrough when rtk is absent.
- [dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) - Structured Git tools (status/diff/log/branch/stage/commit/stash/show) with a destructive-command guard.
- [dsh-plugin-check](https://github.com/dsh-external/dsh-plugin-check) - Plugin health checks (manifest/patch format/build pitfalls/hub status).
- [dsh-plugin-pub-review](https://github.com/weopenfire-git/dsh-plugin-pub-review) - Publish-readiness review for DSH plugins: official docs freshness check, 30+ static checks with a Ready/Not-Ready verdict, and publish preflight + command guidance.
- [dsh-ops-skill](https://github.com/dragon43pp/dsh-ops-skill) - Read-only DSH runtime reliability kit: versioned redacted state contracts, protected snapshots, review-oriented upgrade diffs, and isolated regression checks; no privileged Docker default. *Folder-based Skill; not a DSH profile bundle.*
- [dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) - Writes local JSONL summaries of per-turn tool counts and coarse verification signals without storing prompts, tool arguments, or result text.
- [dsh-inspect](https://github.com/dsh-external/dsh-inspect) - Adversarial checkup → fix → review loop.
- [hermes-dsh-collab](https://github.com/Cavan-Ou/hermes-dsh-collab) - Hook DeepSeek Harness into a Hermes pipeline: dispatch-spec template, model-tier routing, orchestrator-run quality gates, git single-writer rule, as a SKILL.md pack (bundle installable).
- [dsh-alphasolve](https://github.com/dsh-external/dsh-alphasolve) - AlphaSolve workflow.
- [mstar-workflow](https://github.com/dsh-external/mstar-workflow) - Workflow engine.
- [dsh-spur](https://github.com/dsh-external/dsh-spur) - Task engine.
- [dsh-involute](https://github.com/dsh-external/dsh-involute) - Embedded task-management engine.
- [fullstack-expert](https://github.com/adithya-hmt/fullstack-expert) - Cordis-native, evidence-first engineering workflow layer for coding agents: repository-aware vertical-slice planning (fullstack_plan), explicit pass/fail/unknown evidence checks (fullstack_check), inspect-first methodology, approval-aware sensitive-operation guards, and embedded engineering skills (MIT).
- [dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) - Incremental diff reviewer: checkpoint-based since-review queue with a Web UI panel, /review command, and feedback injection into the agent.
- [dsh-test-runner](https://github.com/suimi8/dsh-test-runner) - Structured test runner tool (test_run): auto-detect Vitest/Jest/pytest/node:test, run tests, parse failure summaries for the model.
- [dsh-git-branch-switcher](https://github.com/mixin-ai/dsh-git-branch-switcher) - Session-header Git branch pill: shows the current workspace branch and switches branches from the Web UI.
- [dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) - Engineering-discipline loop: requirement grilling before edits, red/green test-evidence gates, adversarial delivery review, and a report with per-dimension verification.
- [dsh-plugin-diff-review](https://github.com/Civitasv/dsh-plugin-diff-review) - Codex-style diff review in a floating panel: per-round session changes plus a git workspace view with stage/revert/commit/push and a history timeline.
- [dsh-plugin-scheduled-tasks](https://github.com/Ceelog/dsh-plugins/tree/main/src/plugins/dsh-plugin-scheduled-tasks) - Run per-project prompts in fresh headless agent sessions on one-time, interval or cron schedules, with durable run history.
- [dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) - Claude Code /rewind for DSH: git-first workspace snapshots before every mutating tool, turn-boundary session forks, and a one-shot /rewind command that restores files and forks the session back to a checkpoint.
- [dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) - LSP action surface: diagnostics, formatting, completion, code actions, symbols, signature help, inlay hints, and rename tools over real language servers.
- [dsh-git-status](https://github.com/Wongzexu/dsh-git-status) - Specialized in Git branch and status handling: a Git status drawer with a commit DAG lane graph, uncommitted changes/stash rows, inline diffs, and right-click branch/tag operations.
- [nateEc/dsh-gitLens](https://github.com/nateEc/dsh-gitLens) - Workspace-scoped Git graph with history search and diffs, multi-worktree WIP and agent-session views, and guarded Git operations with recovery refs.
- [Starfie1d1272/dsh-github-skills](https://github.com/Starfie1d1272/dsh-github-skills) - Skill-first GitHub workflows for DSH covering PR triage, review feedback, GitHub Actions diagnosis, and safe draft-PR publishing over existing capabilities.
- [dsh-repo-context](https://github.com/qing3a/dsh-repo-context) - Injects git status and repo conventions into the system prompt via the official system-prompt seam.
- [dsh-test-drive](https://github.com/PerryLink/dsh-test-drive) - Isolated install-smoke-uninstall test drives for DSH plugins in a throwaway DSH_HOME (install → patch check → launch smoke → uninstall → cleanup), emitting structured dsh-test-drive/v1 results for scoring pipelines.
- [JohnXu22786/safety-net](https://github.com/JohnXu22786/safety-net) - Destructive-command interception gate: parses and requires human approval for rm -rf / git reset --hard / push --force before execution (dsh plugin + standalone CLI).
- [JohnXu22786/secret-guard](https://github.com/JohnXu22786/secret-guard) - Blocks agents from reading/writing sensitive files (.env, credentials), masks leaked secrets in tool results, with an audit journal and safe sg_* inspection tools.
- [duyanta123/arch-doc](https://github.com/duyanta123/arch-doc) - Analyze a codebase and generate architecture documentation (module responsibilities, dependency graph, entry points, run methods) via a five-stage runbook plus a zero-dependency arch-profile scanner.
- [duyanta123/dsh-preset-scaffold](https://github.com/duyanta123/dsh-preset-scaffold) - Project-init scaffold preset: strict five-phase runbook, engineering standards, and six runnable starter templates (node-ts / react-vite / python / go / spring-boot / monorepo).
- [dsh-verify](https://github.com/263311487-ux/dsh-verify) - Independent browser acceptance testing for agent deliverables: JSON spec in, real Chromium (Firefox/WebKit) verdict out (PASS/FAIL with screenshot receipts). MCP server + CLI + GitHub Action, works with any agent and CI (MIT).
- [beijingwahw/dsh-nuke-plugin](https://github.com/beijingwahw/dsh-nuke-plugin) - Transactional uninstall engine: validate/preview/execute/undo per action with Saga rollback, WAL crash recovery, hash-chain audit, hardlink dedup, and a Bayesian oracle that predicts success probability before you commit (MIT).
- [maxmilian/dsh-forge](https://github.com/maxmilian/dsh-forge) - Read-only Gitea and Forgejo tools: instance version, repositories, issue and pull request search and read, PR diffs, and Actions runs, jobs and logs.

## Security & Governance

- [zoahdev/dsh-dep-audit](https://github.com/zoahdev/dsh-dep-audit) - Dependency supply-chain hygiene audit: peer-range resolvability, broken dist-tag detection (#2763 class), stale/missing-license/non-registry deps, and installed-vs-declared drift (CLI + `dep_audit` tool).
- [zoahdev/dsh-poison-guard](https://github.com/zoahdev/dsh-poison-guard) - Pre-install supply-chain poison scanner for DSH plugins: AST (JS-X-Ray) + deobfuscation decoder + regex heuristics; exits non-zero on findings for CI gating.
- [dsh-vet](https://github.com/rogerdigital/dsh-vet) - Pre-install static audits for npm-installable DSH plugins; emits and validates the open `dsh-vet/v1` report with severity, confidence, evidence, derived grades, a CI Action, and auditable badges.
- [dsh-skill-pack-security](https://github.com/PerryLink/dsh-skill-pack-security) - Security-audit skill pack plus the plugin_vet supply-chain gate: eight agent skills (secret scan, dependency audit, supply-chain review, prompt-injection review, audit orchestration, threat modeling, vulnerability intelligence and incident response) in Chinese and English editions, with an npm provider bundle that registers the automated plugin_vet pre-install scanner.
- [dsh-encrypt](https://github.com/yauntyour/DSH-Encrypt) - Credential provider for DSH with password-protected AES-256-GCM storage, Argon2id key derivation (legacy scrypt v2 auto-upgrade), SHA3-256 integrity checks, and temporary runtime decryption.
- [dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) - Redacts supported secret patterns from the `session-telemetry/record` export copy before configured telemetry backends receive it.
- [dsh-yolo-mode](https://github.com/SeverusZh/dsh-yolo-mode) - LLM auto-approval for sandbox escalation requests: presets, per-tool levels, fail-closed.
- [dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) - Second-model AI auto-review on the approval answerer chain: a read-only reviewer subagent returns structured allow/deny verdicts with reasons, fail-closed by default.
- [dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) - Declarative allow/deny/ask permission rules on the tools/pre-execute waterfall: tool/argument/path/agent matching, session-log audit, dry-run mode, hot reload.
- [dsh-orcana](https://github.com/Leo-Ayh-Oday/dsh-orcana) - Runtime-governance bundles for zero-progress steering, evidence-fresh completion gates, capability disclosure, and Linux sandbox hardening with resource limits, network isolation, fail-closed degradation, and bounded audit logs.
- [odai-dsh-plugin](https://github.com/orziz/odai/tree/main/dsh/plugin) - Profile-wide DSH governance and responsibility routing with intent alignment, authorization and safety boundaries, scoped memory, compaction, and evidence-gated delivery; compatible with DSH 0.1.1-rc.2.
- [dsh-workflow-isolate](https://github.com/Linxiushen/dsh-workflow-isolate) - Alternative WorkflowEngine provider for DSH 0.1.0-rc.7 that runs model-written orchestration in fresh QuickJS/WASM runtimes with a JSON-only host bridge and bounded memory, execution time, and child-agent fan-out.
- [dsh-sfw](https://github.com/dsh-external/dsh-sfw) - Safety filter.
- [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) - Always-on dependency security monitoring for DSH plugins: exact installed paths, OSV vulnerabilities, npm releases, and compatibility signals routed to a project-aware DSH Agent.
- [dsh-passwords](https://github.com/slywalker2006/dsh-passwords) - Turns DeepSeek Harness into a server-grade multi-tenant platform: remote access + auto HTTPS, subuser permissions & token/daily quotas, sandbox enforcement, encrypted auth & audit log.
- [dsh-guardian](https://github.com/cdxiaodong/dsh-guardian) - Agent security guardrail: intercepts and audits every tool call, requiring human confirmation on sensitive operations.
- [dsh-plugin-verify](https://github.com/qing3a/dsh-plugin-verify) - Runtime behavior verification CLI: mock-llm agent loop, 7/7 waterfall, zero-side-effect checks, reproducible reports.
- [dsh-safeguard](https://github.com/ZhijiangTang/dsh-safeguard) - Pre-execution guardrail: vetoes dangerous shell commands and blocks secret/credential leaks before they run.
- [dsh-mask](https://github.com/PerryLink/dsh-mask) - PII masking middleware: anonymizes names, phones, emails, ID cards, bank cards, keys, and addresses before the model boundary and restores placeholders at display; plaintext never enters the session log; /mask command plus mask_test tool.
- [dsh-defend](https://github.com/PerryLink/dsh-defend) - Prompt-injection, jailbreak, and secret-leak detection on the official seams: an Aho-Corasick engine over rules ported from Prompt-Injection-Payloads, Jailbreak-Detector, and Secret-Key-Leaker-Detect gates user messages, tool arguments, and tool results with allow/ask/block tiers, sanitized defend/detection audit events, a defend_report tool, and a destructive-delete command guard.
- [dsh-perm-guard](https://github.com/a903067276-rgb/dsh-perm-guard) - Auto-approval permission guard: a middle tier between workspace-write and danger-full-access — auto-allows safe operations inside trust directories, always asks a human for destructive ones, with 11 per-category switches and an audit trail.
- [dsh-change-budget](https://github.com/Raphaelutumn/dsh-change-budget) - Configurable per-turn budgets that limit distinct files, mutation calls, and UTF-8 payload bytes before supported file-mutation tools run.
- [dsh-secret-scrub](https://github.com/jkt-check/dsh-secret-scrub) - Irreversible secret-scrubbing guard: tiered built-in regex rules (minimal/balanced/aggressive) plus custom patterns rewrite access keys, bearer tokens, and private key blocks into `[REDACTED:<category>]` placeholders on their way to the session log and the model; one-command install via `dsh plugin add`.
- [dsh-mood](https://github.com/Raphaelutumn/dsh-mood) - A tiny behavioral mood ring for AI coding agents: folds session behavior (consecutive failures, repeated calls, activity) into a four-state Mood (GOOD / CONFUSED / FRUSTRATED / OVERWHELMED) shown as a low-friction session-header status light.
- [JohnXu22786/docgen](https://github.com/JohnXu22786/docgen) - Documentation workshop skill pack: pure-prompt (Agent Skills) doc generation — README, PR description, changelog and code review; zero third-party dependencies.
- [accpowered/dsh-credential-manager](https://github.com/accpowered/dsh-credential-manager) - Named credential manager: the model uses API keys, tokens, and logins by reference; secret values are injected into each shell run as `DSH_CM_*` env vars, resolved per execution, and never enter the conversation.
- [accpowered/dsh-auto-review](https://github.com/accpowered/dsh-auto-review) - LLM auto-review approval answerer for sandbox escalations under the `'auto'` policy: a deterministic filter plus a clean-context reviewer model decide without a human prompt, fail-closed on every error path; requires a patched harness core (included in core-patches/).
- [dsh-capmark-gate](https://github.com/taltara/capmark) - Holds an agent to a declared capability manifest: a Markdown `CAP.md` states what a plugin may do, and the gate masks the agent's tool view with `tools.restrict()` and judges every call at `tools/pre-execute`; scopes finer than a tool name are linted as advisory rather than presented as enforcement.
- [dsh-agentvalet](https://github.com/AgentValet/dsh-agentvalet) - Brokered SaaS access: four tools call approved platforms through a credential broker, minting a short-lived assertion per call, so no API key is stored on the machine and every call is owner-approvable, revocable, and audited.
- [sofagent](https://github.com/KongFangXun/sofagent) - Commit-time agent governance harness: 24 deterministic audit rules over git diffs (secrets, out-of-scope edits, blind modifications, prompt-injection traces), HMAC-chained tamper-evident history, and a 9-plugin DSH family (audit / gate / rollback / inject / ontology / evolve / commons / daemon / fde) distributed via SkillHub.

## Output & Deliverables

- [EthanYoQ/Invoice-Downloader](https://github.com/EthanYoQ/Invoice-Downloader) - DSH bundle for local IMAP invoice download, OCR, archival, and Excel reimbursement summaries.
- [zoahdev/dsh-llms-forge](https://github.com/zoahdev/dsh-llms-forge) - Generate llms.txt for plugin repos from package.json + README (AI-readable discovery, read-only by default, CLI + `llms_forge` tool).
- [zoahdev/dsh-readme-forge](https://github.com/zoahdev/dsh-readme-forge) - Generate README.md for plugin repos from package.json + cordis.patch.yml + source layout (CLI + `readme_forge` tool).
- [stacktree-dsh](https://github.com/stevysmith/stacktree-dsh) - Cordis overlays that connect the Stacktree MCP server (stdio or Streamable HTTP): publish generated HTML to an unguessable private URL a client opens with no account, replace it in place so the link stays valid, and gate it by passcode or email domain.
- [dsh-artifacts](https://github.com/zoahdev/dsh-artifacts) - Claude-Artifacts-style renderer: turns Markdown + JSON into self-contained HTML documents, cards, dashboards, and galleries (CLI + `artifact_render` tool, zero runtime dependencies).
- [folio](https://github.com/nyantused-cpun/folio) - Consulting document-generation engine (intake → memory → methodology → deliverable → proof) as a native DSH plugin stack: 15 tools, session-protocol events, L0 guard, agent preset; swappable methodology packs, zero-key start under DSH.
- [dsh-report-studio](https://github.com/ciceroyang/dsh-report-studio) - Turn a DeepSeek Harness session into deliverable work reports (daily/weekly/handoff/article) with verifiable receipts; cross-session weekly aggregation and Feishu/Notion publishing.
- [dsh-trajectory](https://github.com/ciceroyang/dsh-trajectory) - Render a DeepSeek Harness session log into a shareable, self-contained HTML trajectory document (turns, tool calls, token ledger) with a SHA-256 audit stamp.
- [dsh-timeline-studio-plugin](https://github.com/MartinDelophy/dsh-timeline-studio-plugin) - Connects DSH to Timeline Studio for `.timeline` project inspection, semantic edit previews, transactional edits, and verified MP4 rendering.
- [plugin-session-export](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-session-export) - Export the append-only session log as human-readable Markdown or HTML, grouped by trajectory source.
- [dsh-xiaohongshu-viral-note](https://github.com/xuboboo/dsh-xiaohongshu-viral-note) - Bundled Xiaohongshu/RED viral-note agent skill: hot-note research, note generation/rewrite, verification, authorized account analysis, QR login and controlled publishing.
- [dsh-translate](https://github.com/PerryLink/dsh-translate) - Vendor parameter translation and deterministic JSON repair for DeepSeek Harness: a /translate command maps 13 canonical parameters across 11 vendors, and the post-execute repair layer (plus fix_json) fixes broken JSON tool output without fabricating data.
- [inspiration-deck-workshop](https://github.com/zjsthmjialin/inspiration-deck-workshop) - Registers the Inspiration Deck Workshop skill: local static HTML presentation decks (6 deck templates, 25+ layouts, themes & motion showroom) with a validate + PNG/PDF export CLI, zero runtime deps.
- [pdf-background-gray-codex-skill](https://github.com/zjsthmjialin/pdf-background-gray-codex-skill) - Whitens gray/off-white scan backgrounds in image-based PDFs while preserving resolution, page geometry and anti-aliased text edges (lossless Flate write-back) via a single Python script.
- [dsh-research-report](https://github.com/PerryLink/dsh-research-report) - Verifiable research-report engine for DeepSeek Harness: content-addressed evidence ledger (claim-to-snapshot binding, tamper-evident) and versioned sealed reports with per-claim verification verdicts and a manifest SHA-256 seal.

## Office & Documents

- [dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) - Give DeepSeek Harness a real office environment. Univer Office Plugin brings spreadsheets, docs, slides, canvases, relational tables, and more into one runtime — with connected data, validation, versioned changes, and isolated worktrees for multi-agent collaboration.
- [Cooberped/dsh-evidence](https://github.com/Cooberped/dsh-evidence) - Turns attached files into versioned evidence: `search_documents` builds a private local index (SQLite FTS5 after a startup capability probe, dependency-free JS fallback otherwise) and returns compact evidence blocks carrying an exact coordinate — PDF page, PPTX slide, text/DOCX line range, or quoted XLSX `Sheet!Range` — which `read_document` expands only while the content version still matches. Contiguous CJK runs are indexed as overlapping bigrams and queried as phrases, so word order is preserved; uploaded raster images take the native vision attachment path instead.
- [dsh-qingagent](https://github.com/void2anything/dsh-qingagent) - Writing bridge to the open-source QingAgent client: the agent drafts and revises documents on a typeset rice-paper panel (mermaid, drawio, tables, KaTeX), every edit staged for review before it lands; requires the QingAgent desktop client running locally.

## Notifications & Channels

- [dsh-dingtalk-channel](https://github.com/ttmouse/dsh-dingtalk-channel) - DingTalk IM channel via Stream-mode WebSocket: each chat drives its own tooled agent; replies stream back as messages, no public callback URL needed.
- [dsh-feishu](https://github.com/PGZXB/dsh-feishu) - Feishu (Lark) UI for DeepSeek Harness: panel-driven control console, in-card approvals and questions, live streaming cards, one-QR setup.
- [dsh-feishu-bot](https://github.com/dsh-external/dsh-feishu-bot) - Feishu bot.
- [dsh-feishu-notify](https://github.com/dsh-external/dsh-feishu-notify) - Feishu notifications (session end / input needed).
- [dsh-serverchan-notify](https://github.com/nickhelion/dsh-plugins/tree/main/packages/serverchan-notify) - ServerChan3 (Server酱) push notifications when a turn finishes: title, model, project directory, git branch, status and a reply excerpt; subagent filtering, fire-and-forget, key from env/config/file.
- [dsh-lark-meeting-notifier](https://github.com/yeruizhi/dsh-lark-meeting-notifier) - Feishu meeting reminder: a right-side floating panel listing today's/tomorrow's Feishu meetings with multi-alarm flashing reminders.
- [dsh-rss-daily](https://github.com/shangjian2023/dsh-rss-daily) - Daily news digest: fetches 46 curated RSS sources on schedule, LLM-edits them into a briefing with the model already configured in dsh (rule-based fallback), and delivers it to your IM via webhook (WeCom/Telegram/ServerChan/PushDeer/Bark/Gotify), with catch-up for missed runs and a Web panel.
- [telegram](https://github.com/dsh-external/telegram) - Channel integration for Telegram.
- [dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) - Telegram mobile remote for live DSH Web sessions: `/sessions` picker, bind/unbind, same trajectory as desktop (Codex-style).
- [harness-remote](https://github.com/Hyna-hla/harness-remote) - Third-party mobile remote client for DSH: connect to the PC service over LAN or cpolar (QR auto-connect), stream chat with approval banners, background push notifications, model/permission switching.
- [tg-bot](https://github.com/dsh-external/tg-bot) - Telegram bot.
- [qqbot](https://github.com/dsh-external/qqbot) - QQ bot.
- [dsh-wecom-bot](https://github.com/dsh-external/dsh-wecom-bot) - WeCom bot.
- [dsh-weixin-bot](https://github.com/dsh-external/dsh-weixin-bot) - WeChat bot.
- [dsh-weixin-clawbot](https://github.com/zp-home/dsh-weixin-clawbot) - Connects Tencent's official Weixin ClawBot/iLink channel to a persistent DSH Host for phone task control and session management.
- [dsh-im-hub](https://github.com/ThreeBody6666/dsh-im-hub) - Multi-platform IM gateway: Feishu (Lark) WebSocket long connection (no public URL), WeCom AES-encrypted callbacks, Telegram long polling; per-chat agent sessions, whitelist access, visual settings card.
- [dsh-overdrive](https://github.com/temotee2103/dsh-overdrive) - OpenClaw-style multi-platform gateway for DSH: WhatsApp / Telegram / Discord / Slack / Feishu / DingTalk / WeCom channels, in-chat trajectory replay (`/trace`), subagent & cron commands, native approval buttons, one-command docker deploy.
- [dsh-im-bridge](https://github.com/MHfire/dsh-im-bridge) - WeCom (WeChat Work) channel bridge: WebSocket long connection (no public URL), in-process agents with per-sender persistent sessions visible in the Web GUI, customizable persona, streaming progress animation.
- [DSH-WX-Msg-Tool](https://github.com/yauntyour/DSH-WX-Msg-Tool) - WeChat ClawBot/iLink channel plugin: QR login in DSH Web, message send/poll/status tools, background polling, and optional per-sender persistent DSH sessions that automatically reply through WeChat.
- [super-wechat-bridge](https://github.com/Qshuai0213/super-wechat-bridge) - WeChat iLink ClawBot bridge: official Tencent iLink protocol, Web UI settings (QR login / model / preset / permissions / session management with delete), 24h auto-renewal pushes a fresh QR before expiry, zero downtime.
- [dsh-voice-chat](https://github.com/dsh-external/dsh-voice-chat) - Voice chat.
- [dsh-web-ui-notify](https://github.com/dsh-external/dsh-web-ui-notify) - WebUI notifications.
- [dsh-notification-sounds](https://github.com/qq33357486/dsh-notification-sounds) - Cross-platform browser audio alerts that play bundled Chinese prompts when DSH needs user input or finishes a task.
- [dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) - Windows notifications, zero dependencies.
- [dsh-notify-win](https://github.com/Andyqwe44/dsh-notify-win) - Native Windows toast + taskbar flash for task done / approval / ask_user_question; Win10/11, npm install `dsh plugin --profile web add dsh-notify-win`.
- [dsh-ica](https://github.com/dsh-external/dsh-ica) - ICalingua frontend.
- [dsh-opencode-server](https://github.com/dsh-external/dsh-opencode-server) - Smooth TUI via opencode attach.
- [dsh-teamwork](https://github.com/dsh-external/dsh-teamwork) - Team collaboration (cordis).
- [plugin-notify](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-notify) - IM webhook + local notifications on turn completion / errors / approval requests (Feishu, WeCom, DingTalk, Slack, Discord, custom).
- [dsh-monitor](https://github.com/AbnerAI/dsh-monitor) - Persistent background watchers (file inbox / command output) that wake the agent on new messages; the harness analog of Claude Code's Monitor tool.
- [dsh-island](https://github.com/cdxiaodong/dsh-island) - Bridge DSH agent sessions, tool calls, and approvals to the CodeIsland macOS notch panel over a Unix socket, with in-panel allow/deny.
- [february2015/dsh-dingo](https://github.com/february2015/dsh-dingo) - Sound reminders with one-click jump for concurrent sessions: the current session gets crisp dang/dang-dang tones, other sessions a soft ding/ding-ding plus a top-right card that jumps straight to the replying conversation.

## Fun & Lifestyle

- [dsh-chinese-poetry](https://github.com/runcat-tommy/dsh-chinese-poetry) - Token-free Chinese classical-poetry tab in the DSH conversation view: search, filters, 飞花令, daily poem, favorites, festival topics, share-card image, and AI explanation via your own DSH session.
- [dsh-whale-companion](https://github.com/LeemanCheung/dsh-whale-companion) - Draggable whale companion with local progression, achievements, skins, and privacy-safe activity tracking.
- [dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) - Whale-girl desktop pet for the DSH Web UI: pat-to-raise growth, work-state poses, 494 dialogue lines and 30 achievements with a built-in settings panel; local-first, zero telemetry.
- [dsh-clippy](https://github.com/sjh9714/clippy-harness) - Clippy revived as an office assistant pet that reacts to real agent state, with a classic "illegal operation" dialog on failed turns.
- [dsh-agent-rp](https://github.com/dsh-external/dsh-agent-rp) - SillyTavern migration and next-generation agent roleplay for DSH.
- [dsh-emoji](https://github.com/dsh-external/dsh-emoji) - Emoji plugin (cordis).
- [dsh-travel-plugin](https://github.com/dsh-external/dsh-travel-plugin) - Travel plugin.
- [dsh-weather](https://github.com/sunshine-lang/dsh-weather) - Weather tool: current conditions and multi-day forecasts via Open-Meteo (free, no API key).
- [dsh-pianist](https://github.com/Laplace-bit/dsh-pianist) - Piano performance: the agent plays a requested piece on a Canvas2D grand piano with Salamander Grand samples, immersive stage visuals, and a playable 88-key keyboard.
- [dsh-pdf](https://github.com/sunshine-lang/dsh-pdf) - PDF toolbox: extract text, metadata, and page ranges via pdfjs-dist (local, no API key).
- [dsh-ui-whale](https://github.com/dsh-external/dsh-ui-whale) - Pixel whale companion (blink/tail/spout/hearts).
- [dsh-muyu](https://github.com/liuwenji007/dsh-muyu) - Wooden-fish overlay in the Web client's lower-right: knock the whale for per-session merit; auto-knocks while the model thinks or streams.
- [dsh-vibegap](https://github.com/ktao732084-arch/dsh-vibegap) - Vocabulary flashcards for agent wait time: a spelling card appears in the Web client lower-right after ~18s of agent activity and retreats when the session finishes or needs input; optional shared progress with the local VibeGap desktop app.
- [dsh-pet](https://github.com/FlytoMAYDAY80/dsh-pet) - Desktop whale pet with live session state.
- [dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet) - macOS desk pet in a real always-on-top window rather than a page widget: six states from local DSH, native right-click menu, and a bundled skill that turns one photo into a full eighteen-pose skin.
- [dsh-pet-rs](https://github.com/dsh-external/dsh-pet-rs) - Desktop pet, Rust edition.
- [dsh-stickers](https://github.com/dsh-external/dsh-stickers) - Stickers.
- [dsh-ads](https://github.com/dsh-external/dsh-ads) - 2005 Chinese-web-style ad layer (joke plugin).
- [dsh-gomoku](https://github.com/dsh-external/dsh-gomoku) - Gomoku (five-in-a-row).
- [dsh-qq2006](https://github.com/dsh-external/dsh-qq2006) - QQ2006 skin.
- [dsh-lazyfish](https://github.com/dsh-external/dsh-lazyfish) - Slack-off panel (feed + Bilibili player).
- [dsh-tavern-plugin](https://github.com/dsh-external/dsh-tavern-plugin) - Tavern character cards.
- [ui-status-label](https://github.com/dsh-external/ui-status-label) - Custom status labels for the whale's deep-diving (cordis).
- [dsh-digipet](https://github.com/swaylq/dsh-digipet) - Digimon-style raising pet: hatches from an egg, feeds on real work (turns, tools, errors), and evolves along four lines shaped by how you work; zero tokens, command-only.
- [dsh-wildmon](https://github.com/swaylq/dsh-wildmon) - Pokemon-style catch-em-all: turns, tools and errors spawn wild encounters; throw balls, fill a 28-slot dex, team of six; zero tokens, command-only.
- [dsh-survival](https://github.com/Socialist-Sister/dsh-survival-mode) - Minecraft-survival game mode as a DSH agent preset: hard-settled HP/hunger/day-night/mobs, vanilla crafting gates and anvil repair, plus a browser status bar; built on the official preset plugin spec.
- [xiekai886/dsh-MusicPlayer](https://github.com/xiekai886/dsh-MusicPlayer) - A collapsible/expandable draggable floating music player with NetEase Cloud Music playlist import and song/artist search; chat and listen at the same time.
- [zoahdev/dsh-subscribe](https://github.com/zoahdev/dsh-subscribe) - Steam-style plugin marketplace: subscribe on the web, sync with one command into a dsh profile; 500+ community plugins with verified curation and a zero-dependency CLI.
- [dsh-vibe-pack](https://github.com/LeemanCheung/dsh-vibe-pack) - Transactional data-only configuration pack manager with integrity, ownership, preview, diff, and rollback safeguards.
- [Luaphes/dsh-plugins-market](https://github.com/Luaphes/dsh-plugins-market) - Plugin market inside the DSH Web UI: crawls the dsh-plugin topic with noise filtering, curated marks, ranking and one-click install (dsh.bundle-verified).
- [dsh-blackjack](https://github.com/yul761/dsh-blackjack) - Blackjack in the conversation: free daily hands win CHIP, redeemable one-way into model credit that a fallback route spends only when your own provider quota runs out; operator-funded pool, with the server and its audited ledger open source in the same repo.

- [weibaohui/dsh-xiuxian](https://github.com/weibaohui/dsh-xiuxian) - Xianxia desktop pets tied to live agent sessions: pixel-style companions appear as subagents spawn (up to 3 on screen), with storage-bag collection, a right-click artifact menu, a pet gallery, and Codex pet-format export.

## Plugin Ecosystem & Development

- [SunQingyuan0/Kabutack](https://github.com/SunQingyuan0/Kabutack) - Role-based manager for DSH plugins/Skills/MCP: bundle capabilities into “roles” and hot-switch them from the Web UI.
- [dsh-workbench](https://github.com/staff-os/dsh-workbench) - Enterprise workbench for DSH: manage AI employees, knowledge bases, skills, MCP servers and DSH plugins from a running session.
- [dsh-plugin-bench](https://github.com/B1lli/dsh-plugin-bench) - Evidence-backed, type-aware DSH plugin quality benchmark: commit-bound score intervals and evidence ledgers across eight lifecycle dimensions, with Markdown/SVG scorecards; Stars and identity are not scored.
- [zoahdev/dsh-quality-score](https://github.com/zoahdev/dsh-quality-score) - Plugin quality scorecard: 0-100 with grade, 6 components (manifest, peer resolvability, dist-tag health, dead ranges, freshness, dsh-tools peer compat), fix suggestions per deduction, and a batch leaderboard (CLI + `quality_score` tool).
- [zoahdev/dsh-plugin-doctor](https://github.com/zoahdev/dsh-plugin-doctor) - Health checks for DSH plugins: manifest/patch/entry/build/pack/install verification, model-callable plugin_check, profile host-shadowing + manifest-BOM detection, environment diagnostics, and supply-chain poison preflight.
- [oneinitAI/dsh-thunderforge](https://github.com/oneinitAI/dsh-thunderforge) - All-in-one plugin development bundle: clean-room LLM payload capture, three-layer authoring skills (vendored dsh-plugin-dev-skills + dsh-plugin-guide), conversational scaffolder with generate-and-smoke templates, dual-source trajectory waterfall (session logs × capture, dsh-replay engine vendored), and guarded dev presets (dshp vendored).
- [dsh-plugin-starter](https://github.com/ciceroyang/dsh-plugin-starter) - Scaffold a battle-tested DSH plugin (bundle, tool, runtime skill, tests, CI) in one command, zero dependencies, with a --verify smoke run.
- [menotbobbybrown/create-dsh-app](https://github.com/menotbobbybrown/create-dsh-app) - One-line scaffold generator for DeepSeek Harness agents and plugins.
- [Code2Skill](https://github.com/leechen298/Code2Skill) - Generate Functions, MCP tools, workflow Skills, and offline test packages from user-authorized source code.
- [dsh-movein](https://github.com/sjh9714/dsh-movein) - Preview and move supported Claude Code, Codex, and OpenCode setup into DSH, including skills, commands, agents, instructions, and MCP servers, with OpenCode V1/V2 JSONC support and collision-safe apply.
- [sandbase-skills](https://github.com/sandbaseai/sandbase-skills) - Verified SKILL.md catalog and installer with 88 installable skill bundles for DSH and compatible agents.
- [dsh-plugin-store](https://github.com/sandbaseai/dsh-plugin-store) - Native DSH Settings marketplace for browsing the community catalog by search and tags, installing plugins, and reviewing installed packages.
- [DshMarketPlace/dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store) - In-DSH bilingual plugin catalogue: `/store`, a Settings tab, agent search/install tools, a bundled discovery skill, and risk-aware approval before installation.
- [dsh-hmz](https://github.com/dsh-external/dsh-hmz) - Placeholder repository; description pending.
- [dsh-interpreters](https://github.com/dsh-external/dsh-interpreters) - Interpreter plugin (cordis).
- [dsh-notebooks](https://github.com/dsh-external/dsh-notebooks) - Notebooks plugin (cordis).
- [dsh-plugin-radar](https://github.com/dsh-external/dsh-plugin-radar) - Daily DSH plugin compatibility radar, renamed from dsh-external-research.
- [dsh-scout](https://github.com/dsh-external/dsh-scout) - Scout plugin (cordis).
- [dsh-share](https://github.com/dsh-external/dsh-share) - Share DSH conversations.
- [maxmilian/dsh-sonarqube](https://github.com/maxmilian/dsh-sonarqube) - Read-only SonarQube Community Build integration for Quality Gates, issues, Security Hotspots, coverage, and project measures, with source file and line locations.
- [plugin-registry](https://github.com/dsh-external/plugin-registry) - Plugin console + make-dsh-plugin skill + dev guide.
- [dsh-plugin-manager-registry](https://github.com/Jesse-njx/dsh-plugin-manager-registry) - Offline-tolerant registry that discovers and deduplicates DSH plugins from awesome lists, GitHub topics, and npm.
- [marisa](https://github.com/dsh-external/marisa) - External plugin manager (parasitic install/CLI/settings panel).
- [hub](https://github.com/dsh-external/hub) - Org-wide index + unified catalog.json (CI-generated).
- [dshx-update-check](https://github.com/dsh-external/dshx-update-check) - Plugin update checker.
- [toybox](https://github.com/dsh-external/toybox) - MCP plugin collection (almanac/bug-tamer/naming master/time capsule, etc.).
- [dsh-github-integration](https://github.com/dsh-external/dsh-github-integration) - GitHub integration plugin.
- [dsh-super-injector](https://github.com/dsh-external/dsh-super-injector) - Super-injector (cordis).
- [dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) - MCP server manager: Settings page with OAuth (PKCE + dynamic client registration) or static-token auth; tools registered as mcp__<name>__*.
- [dsh-mcp-skill-panel](https://github.com/lilyblessing/dsh-mcp-skill-panel) - MCP & Skill manager: real-time enable/disable for MCP servers and skills to free context; optional AI middle layer (mcp_search/mcp_call) with state-based visibility filtering.
- [dsh-recommend](https://github.com/zp-home/dsh-recommend) - Transparent plugin rankings and recommendations: daily auto-fetched dsh-plugin topic data, open scoring model, rank/search/recommend tools and a settings-page leaderboard.
- [dsh-capability-index](https://github.com/777-Zen/dsh-capability-index) - Pre-flight plugin-library check for DSH agents: task-type requests trigger a Top-K hint of suitable plugins with use_when/not_for capability declarations, making plugin usage predictable instead of opportunistic.
- [dsh-eval](https://github.com/hccccc01333/dsh-eval) - Agent evaluation platform: benchmark YAML, headless dsh runs, trace-based metrics, scripted grading, and run compare/report.
- [dsh-suite](https://github.com/whyihaveyou/dsh-suite) - Living DSH plugin directory (785+ plugins, refreshed hourly) with a daily compatibility CI, a bilingual searchable catalog site, and an in-app plugin store.
- [dshget-data](https://github.com/bobby-sheng/dshget-data) - Public normalized catalog snapshot for [DSH Get](https://www.dshget.com/), a bilingual searchable directory of 2,460 DeepSeek Harness plugins with categories, install commands, and source attribution.
- [Awesome DeepSeek Harness Plugins](https://github.com/web-casa/Awesome-DeepSeek-Harness-Plugins) - Public Cordis plugin index maintained by [cordis.run](https://cordis.run), generated from published records with per-plugin install commands and security-status links.
- [create-dsh-plugin](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/create-dsh-plugin) - Scaffold a DSH plugin in seconds (tool / events / webui templates, `next`-tag version pinning, built-in `--verify` smoke test).
- [plugin-manager](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-manager) - In-app plugin store for the DSH Web UI: browse, search, one-click install, compat badges, installed list.
- [dsh-genie](https://github.com/swaylq/dsh-genie) - Promote a `cordis_define` dynamic package into a real installed bundle that survives restart; writes the package and registers the profile layer without pnpm, network, or a build authorization.
- [dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) - Plugin-development knowledge base as an on-demand agent skill: official constraints, task workflows, API references, and community pitfalls.
- [dsh-popper](https://github.com/1473382/dsh-popper) - Falsification-driven correction loop for agent sessions: risky work commits an evidence-checkable claim first, deterministic gates verify it, falsified claims force mutually exclusive replacement hypotheses with discriminating experiments, and every event lands in an append-only evidence ledger.
- [awesome-dsh](https://github.com/stakeswky/awesome-dsh) - Auto-updating catalog of the whole `dsh-plugin` topic (2600+ repos): a Cloudflare Worker recrawls every 6 hours, translates English descriptions to Chinese with Workers AI, and serves a ranked search API plus an agent skill that finds and installs plugins on demand.
- [dsh-score](https://github.com/PerryLink/dsh-score) - Multi-dimensional quality scoring for DSH plugins: a five-dimension score card (install success, maintenance activity, docs completeness, security scan, protocol compliance) with /score command and leaderboard reports; install evidence reserves consumption of dsh-test-drive structured results.
- [JohnXu22786/hooks-adapter](https://github.com/JohnXu22786/hooks-adapter) - Universal hooks compatibility layer: run hooks declared in Claude Code / Codex / opencode configs on dsh.
- [dsh-blueprint](https://github.com/taltara/mddl-harness) - Blueprint tab for the Web client: reads the config the harness actually booted, lints the running tree, and writes a `cordis.patch.yml` overlay behind a marker-delimited block with snapshots and one-click restore. Refuses to write a row naming a package the profile cannot load, since that stops the harness booting rather than disabling one entry.
- [LLYlab/DSHEssentialTools](https://github.com/LLYlab/DSHEssentialTools) - A permanent DeepSeek Harness plugin: project run & code viewer, program snapshots, a VTD conversation tree (edit / retry / branches) with message micro-versions, plus a DET feature manager and global plugin control.
- [dsh-plugin-runcat-inventory](https://github.com/runcat-tommy/dsh-plugin-runcat-inventory) - Runcat Plugin Overview (逃咪-插件总览): a better DSH plugin inventory — table view, status filters, enable/disable switches (hot-applied via HMR), config viewer/copy, zh/en UI.

- [duyanta123/dsh-repo-scanner](https://github.com/duyanta123/dsh-repo-scanner) - Read-only repository fact scanner kernel for analysis plugins: deterministic probe / file index / modules / dependencies / entry points / symbols / graphs and git facts over a stable JSON schema (CLI + library + skill runbook).
- [dsh-darwin](https://github.com/que3sui/dsh-darwin) - Two-plugin self-evolution loop: dsh-sentinel mines session logs for retry loops, tool-error clusters, interrupts and token waste into structured tickets; dsh-forge turns a ticket into a candidate skill behind an eval gate, promotes it into `.dsh/skills` only on human confirmation, and rolls it back deterministically.

## Runtime & Operations

- [ianho7/dsh-port-inspector](https://github.com/ianho7/dsh-port-inspector) - Windows local development port attribution and safe handling for verified DSH services.
- [Ghost011118/dsh-plugin-governor-extension](https://github.com/Ghost011118/dsh-plugin-governor-extension) - Patch-based DSH plugin governance extension: plugin inventory and whitelist controls, policy trials, runtime tool-call admission rules, plus supervised restart and automatic rollback through dsh-autostart.
- [fakechris/dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) - Self-healing DSH ops toolbox: official daily-snapshot A/B slot rotation (auto plugin migration + acceptance-gated atomic switch + one-click rollback), a 10s watchdog that auto-relaunches the web and resumes interrupted turns, and an out-of-band dsh-doctor (diagnosis → mechanical repair → LLM deep repair → relaunch) when web and agent are both down.
- [zoahdev/dsh-disk-audit](https://github.com/zoahdev/dsh-disk-audit) - Disk-usage audit for dsh data directories: total size, per-directory breakdown, largest files, oversized-file warnings (session logs can hit hundreds of MB) and cleanup suggestions (CLI + `disk_audit` tool).
- [zoahdev/dsh-cn-boot](https://github.com/zoahdev/dsh-cn-boot) - China-network bootstrap: probes npm/npmmirror/GitHub/HuggingFace/Gitee and local proxies, recommends mirrors/proxy, generates a PowerShell + bash bootstrap (CLI + `cn_boot` tool).
- [zoahdev/dsh-firstrun](https://github.com/zoahdev/dsh-firstrun) - First-run health check: node/pnpm/dsh toolchain, profile, API key (names only), workspace, registry + actionable next steps (CLI + `quickstart` tool).
- [zoahdev/dsh-trace](https://github.com/zoahdev/dsh-trace) - Aggregate observability dashboard: decode every `session.jsonl.zstd` under a sessions root and render tokens/tools/errors/latency as one self-contained HTML report (zero deps).
- [dsh-launch](https://github.com/Khellendros97/dsh-launch) - Detached-broker supervision of long-running services (dev servers, watchers, mock APIs) that survive turns, sessions and DSH restarts, with a Service sidebar tab (registered via better-sidebar's extension API) and service_start/stop/restart/list/logs model tools.
- [dsh-env-switcher](https://github.com/Oyama-Mahiro-F/dsh-env-switcher) - One-click Windows/WSL2 environment switcher for DSH (coexistence mode): both environments run simultaneously on separate ports and switch from the web UI without killing any process.
- [dsh-payload-capture](https://github.com/moeblack/dsh-payload-capture) - Capture every upstream model API payload to JSON (debug & observability).
- [dsh-doctor](https://github.com/ciceroyang/dsh-doctor) - One-command local environment health check for DSH: node/pnpm/dsh versions, port 3080, DSH_HOME writability, profile manifests, multi-frame session-log health scan, dsh-doctor/v1 envelope.
- [dsh-observation-journal](https://github.com/Cavan-Ou/dsh-observation-journal) - Zero-touch runtime telemetry for DSH: every session auto-writes task, model tier, tools, failures, duration, status into a human-readable journal with a stats section (pure observer — no tools, no LLM calls, no injection).
- [Oscar-Williams/dsh-deepcanary](https://github.com/Oscar-Williams/dsh-deepcanary) - Evidence-first attention supervision for DeepSeek Harness: C0–C3 policies, deduplicated Inbox alerts, quiet hours, and redacted outcome records.
- [sandbase-harness](https://github.com/sandbaseai/sandbase-harness) - Persistent managed-agent runtime for DSH via a native bundle and stdio MCP, with sandboxed sessions, audit, and replay.
- [dsh-workloads](https://github.com/yewenyell-lang/dsh-workloads) - Workspace-owned durable process supervision, readiness checks, and a Runtime Center for DeepSeek Harness.
- [dsh-doctor](https://github.com/asdf17128/dsh-doctor) - Profile health check: finds config fields a patch dropped by whole-config replacement, patches targeting missing entry ids, and tool-name collisions.
- [chouyong/dsh-effect-doctor](https://github.com/chouyong/dsh-effect-doctor) - Isolated cleanup verifier for Cordis-managed runtime resources, producing deterministic receipts after plugin teardown.
- [dsh-xray](https://github.com/alloevil/dsh-xray) - Composition X-ray for DSH: attribute every booted row to the layer that introduced it, diff declared vs actual trees (catching patch rows dsh silently skips), service dependency graph with disable-cascade, per-plugin lifecycle health, tool-schema token cost, and a heuristic capability audit of out-of-tree plugins; static commands work even when dsh cannot boot, and an `xray_composition` tool lets agents introspect their own capability set.
- [fancr-code/dsh-tray-launcher](https://github.com/fancr-code/dsh-tray-launcher) - Windows system-tray launcher: windowless `dsh web` with a tray menu (open UI/log, exit = full quit), preset icons (Liangzu / whale-girl / DeepSeek) plus custom, one-line npm install.
- [dsh-portable-launcher](https://github.com/15828148/dsh-portable-launcher) - One-click portable Windows launcher for the dsh Web UI: auto-installs Node.js and dsh, CN mirror fallback, retries and resume.
- [dsh-desktop-launcher](https://github.com/becomeless/dsh-desktop-launcher) - Windows desktop launcher: double-click to start dsh Web with zero console windows, auto-stop on close, session resume, one-line install.
- [dsh-quickstart](https://github.com/qzhqzh/dsh-quickstart) - Windows desktop launcher (zero-dependency npm CLI): double-click a desktop shortcut to start dsh web with zero console windows and auto-open the browser once ready.
- [oxgbl/dsh-no-cmd-launcher](https://github.com/oxgbl/dsh-no-cmd-launcher) - Windows background launcher: run DSH Web without a command window, with desktop start/stop shortcuts and npm/CLI installation.
- [dsh-dock](https://github.com/UnknowCao/dsh-dock) - Windows desktop launcher plugin: prebuilt whale exe opens the DSH Web UI as a fullscreen Edge app (token health gate, cold-start card); a sidebar More menu adds Settings/Reload/Full Exit, which stops the server and closes the window.
- [dsh-win32](https://github.com/sjh9714/dsh-win32) - Native Windows shell and Workspace Write sandbox presets for DSH without WSL, using busybox-w32 for sandboxed sessions and Git Bash for unrestricted sessions, with setup diagnostics.
- [dshp](https://github.com/asdf17128/dshp) - Profile manager: list, create, clone and diff profiles, and export a whole setup (bundle order, plugin versions, patch) as one portable file.
- [dsh-session-cleaner](https://github.com/fountunt/dsh-session-cleaner) - Delete sessions from a running web runtime: live store, workspace records, and on-disk artifacts (no restart needed).
- [dsh-session-cleaner-cli](https://github.com/ChenChen913/dsh-session-cleaner-cli) - Offline CLI that deep-cleans workspace sessions: interactive/batch delete with trash + restore + backups, workspace-registry and projection-cache sync, ghost-entry pruning. Companion to the runtime delete plugin.
- [dsh-restart](https://github.com/anweat/dsh-restart) - Restart DSH: configurable restart method (Node native / legacy PowerShell), post-restart continue prompt, optional watchdog auto-relaunch.
- [dsh-tray](https://github.com/KAIbsb/dsh-tray) - Windows tray manager for DSH Web: start/restart/stop, crash auto-restart, status icon, and autostart.
- [mirage-dsh](https://github.com/strukto-ai/mirage/tree/main/typescript/packages/dsh) - Swaps the filesystem and bash providers for a mirage virtual workspace: file tools and shell commands run over mounted resources (RAM, S3, Redis, Slack, Gmail, Notion, Postgres) instead of the host disk, with per-mount read/write/exec modes, per-command sandbox routing (monty, pyodide, quickjs in process; docker, e2b, daytona remote), and installed CLIs (git, gh, slack, linear, ntn, gws, or one you register) as head words in the virtual terminal.
- [loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) - OpenTelemetry GenAI tracing for DSH: one span tree per turn (steps, LLM calls with TTFT, tool executions, token usage), exported over standard OTLP to any compatible backend, content capture off by default.
- [dsh-observe](https://github.com/PerryLink/dsh-observe) - Observability exporter for DSH: turn/step/tool/LLM spans and token/cost metrics from the session/event stream to OTLP and Langfuse, with sanitized prompt/completion capture, async batching, a bounded durable offline buffer, and retry with backoff — off by default.
- [dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) - Backup / export / import / migrate the whole DSH configuration as one portable ZIP, restore it on any machine with one click (host engine + Web UI).

- [dsh-backup](https://github.com/xiaoyuyu6420/dsh-backup) - One-command backup & restore of ~/.dsh user data: /backup commands plus a backup_dsh tool and Settings panel, sha256 verify with hardened restore screening (path-traversal/symlink rejection), restart-surviving scheduled auto-backup, rotation, loopback download route, and private-repo GitHub sync.
- [dsh-fast](https://github.com/PerryLink/dsh-fast) - Read-only performance diagnostics: session load timing, spill hits, compaction stats, context-injection volume, and cache-hit rate via the /fast command and fast_report tool, sampled asynchronously off the model path.
- [ClawMetry](https://github.com/vivekchand/clawmetry) - Local zero-config dashboard that reads dsh session logs and shows transcripts, token usage, cost, and tool calls.
- [Zn-Dk/dsh-session-repair](https://github.com/Zn-Dk/dsh-session-repair) - Diagnose and safely repair corrupted DSH session history: raw zstd/JSONL artifact validation (header, seq, tool-call IDs, turn/step closure), deterministic repair of empty tool-call ID chains, single-slot pre-repair backup + restore, and an audit trail.
- [maxmilian/dsh-grafana-query](https://github.com/maxmilian/dsh-grafana-query) - Read-only Grafana tools over the data source proxy: instance health, data sources, instant and range PromQL queries, current alert state, and provisioned alert rules.
- [maxmilian/dsh-sentry](https://github.com/maxmilian/dsh-sentry) - Read-only Sentry tools: project listing, issue search and detail, and the latest or a specific event with a trimmed stacktrace that drops local variables, request data, and secret-looking tags.
- [dsh-circuit-breaker](https://github.com/pricklywiggles/dsh-circuit-breaker) - Deterministic loop guard: denies a tool call repeated with identical arguments and caps per-agent calls, in code outside the model; incident log lets a parent interrupt a stuck subagent.
## Domain & Specialist Skills

- [dsh-mimir](https://github.com/1692775560/dsh-Mimir-Academic-research) - Research-lifecycle workbench (7-view web panel): arXiv search/import/subscriptions with AI relevance scoring, Zotero import, experiment tracking with SSH/GPU remote jobs, LaTeX write-compile-snapshot studio with 11 venue templates, figure management, and one-click group-meeting PPT decks with real paper figures; 10 bundled research skills (npm: `dsh-mimir`).
- [dsh-fund-research](https://github.com/PerryLink/dsh-fund-research) - Deterministic research reports for Chinese public mutual funds: public-source data collection (Tiantian Fund/Eastmoney), pure-function metrics (performance decomposition, holdings penetration, style attribution, manager profile), and versioned reports with a per-number snapshot traceability appendix.
- [weopenfire-git/dsh-market-quote](https://github.com/weopenfire-git/dsh-market-quote) - A-share / HK / US realtime quotes and historical K-line tool plugin via Tencent's free public source (no API key), read-only.
- [pengpengyi92/dsh-quant](https://github.com/pengpengyi92/dsh-quant) - Agent-native quantitative R&D toolkit for DSH: 59 tools across 6 domains (data, alpha, ML, risk, execution, ecosystem) with an end-to-end PDAT→PET research pipeline.
- [maddogfinance/dsh-trading](https://github.com/maddogfinance/dsh-trading) - Research-only trading workbench plugins: typed market-data seam (bring your own provider), multi-timeframe indicator regime snapshot, interactive chart cards in dsh web with provenance-gated model annotations, and a risk-guard that blocks execution-shaped tool calls at the pre-execute gate.
- [dsh-trading-toolkit](https://github.com/kentleenot/dsh-trading-toolkit) - A-share and US stock trading toolkit for DSH agents: realtime quotes, OHLCV klines, ADX regime signals and simple backtest previews via EastMoney. Read-only, never places orders.
- [LAU-MARS/dsh-cad](https://github.com/LAU-MARS/dsh-cad) - CAD viewer and OCCT parametric modeling tools (primitives, extrusion, booleans, fillets, engineering drawings, assemblies) with an interactive 3D/2D panel in the Web UI; STEP/STL export.

- [gongyijie85/mattpocock-skills-dsh](https://github.com/gongyijie85/mattpocock-skills-dsh) - Matt Pocock's full promoted skill set (25 SKILL.md: grilling, writing-for-agents, wait-what, TDD, code review, wayfinder, ask-matt router) ported to DSH.
- [gongyijie85/mattpocock-skills-dsh-zh](https://github.com/gongyijie85/mattpocock-skills-dsh-zh) - Matt Pocock's 25 skills fully translated to Chinese (technical terms kept in English with glosses).
- [gongyijie85/dsh-ponytail](https://github.com/gongyijie85/dsh-ponytail) - Ponytail, lazy senior dev mode: 6 skills (ponytail, ponytail-audit, ponytail-debt, ponytail-gain, ponytail-help, ponytail-review) adapted from DietrichGebert/ponytail.
- [oneinitAI/dsh-buddy](https://github.com/oneinitAI/dsh-buddy) - Portrait-adaptive communication skill: builds a live user portrait (proficiency, per-domain gaps, current state) from the conversation and calibrates every answer's depth, jargon density and step granularity to it; behavior-over-claims dumb-play detection; transparent profile snapshot export. MIT.
- [gongyijie85/dsh-ecc](https://github.com/gongyijie85/dsh-ecc) - 273 ECC skills (95.8% of the 227k-star operator system) ported to DSH in four batches.
- [dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) - Feynman learning-mode plugin: teach → teach-back → judge → re-explain loop rendered as rich HTML lesson cards (mermaid diagrams + shiki code highlighting).
- [zotero-harvest](https://github.com/dsh-external/zotero-harvest) - Zotero library integration.
- [zotero-wave-rag](https://github.com/dsh-external/zotero-wave-rag) - Zotero RAG retrieval.
- [dsh-data-agent](https://github.com/dsh-external/dsh-data-agent) - Let the model connect to databases and write SQL.
- [dsh-news-plugin](https://github.com/canghai666x/dsh-news-plugin) - RSS news fetch tool: grabs 10+ CN/EN feeds into structured items (title/link/source/date/summary) with per-source timeout, ready for model-side scoring and briefing (cordis).
- [dsh-news-briefing](https://github.com/canghai666x/dsh-news-briefing) - News briefing skill: 5-dimension scoring (story/timeliness/depth/fun/uniqueness), anti-clickbait writing rules, Tier-based content preference, de-AI-style Chinese writing guide.
- [dsh-web-novel-research](https://github.com/canghai666x/dsh-web-novel-research) - Chinese web-novel plot lookup skill: free mirror-site workflow (GBK decoding, cross-volume duplicate chapter disambiguation, multi-source completion check) without paid sources.
- [easyeda-agent](https://github.com/zhoushoujianwork/easyeda-agent) - EasyEDA Pro automation: Go daemon + in-app connector + agent skill + stdio MCP server for typed schematic/PCB actions, workflow gates, and DRC.
- [dsh-stock-market](https://github.com/dsh-external/dsh-stock-market) - Shanghai and Shenzhen A-share market data plugin.
- [dsh-us-stocks](https://github.com/Realyujie/dsh-us-stocks) - US stock quotes, price history, financial statements, analyst consensus and news via yahoo-finance2.
- [dsh-openmaic](https://github.com/dsh-external/dsh-openmaic) - Generate interactive OpenMAIC AI classrooms.
- [dsh-science](https://github.com/biociao/dsh-science) - Claude Science-style research workbench: ReAct research-loop engine (research_*tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for genomics/pathogens/bioinformatics.
- [dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) - Complete reverse-skill pack (85 SKILL.md) as a DeepSeek Harness Cordis plugin: reverse engineering, authorized pentesting and security-research skill router.
- [dsh-grok-geo](https://github.com/xuboboo/dsh-grok-geo) - GEO brand audit skill bundle: AI-search visibility, recommendations, citations, competitor presence and content-gap diagnosis across 17+ AI engines (ChatGPT/Perplexity/Claude/豆包/DeepSeek/Kimi/文心一言).
- [Haniubub/seo-toolkit](https://github.com/Haniubub/seo-toolkit) - SEO audit skill: full local & technical SEO audit for DSH — deterministic Python measurement (53 scripts + lib/), LLM judgment (24 sub-skills + 18 agents), weighted score, gated multi-agent fan-out, schema.org, E-E-A-T, GBP, GEO/AI Overviews.
- [dsh-rigorquant](https://github.com/linxichen/dsh-rigorquant) - Agent preset + skill for unattended empirical/computational mathematics research (econ/finance/portfolio): walled multi-agent exploration, dual-track ground-truth derivation, adversarial counterexample-only audit, four-part pre-implementation check battery, and a jacobian/Lean escalation lane.
- [dsh-wuyun-liuqi](https://github.com/dhicoc/dsh-wuyun-liuqi) - Complete wuyun-liuqi (five-evolutions-six-qi / 五运六气) Traditional Chinese Medicine skill pack as a DeepSeek Harness Cordis plugin: annual and guest-qi calculation, clinical pattern differentiation, and pathogenesis reasoning.
- [dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) - Academic writing guard: local-regex linter for revision-process residue, defensive writing and AI-writing tells (em-dash abuse, not-X-but-Y, LLM word spikes, rule of three); writing_audit + writing_rules with incremental auto-audit on paper file writes.
- [write-chinese-long-screenplay](https://github.com/mudden2380078550-creator/write-chinese-long-screenplay) - Chinese long-form screenwriting skill (SKILL.md): two author input blocks (background + character bible) feeding a causal-value engine, anti-AI-flavor review, and a continuity ledger for 100+ scene projects.
- [kubemd](https://github.com/guiyi-labs/kubemd) - Evidence-first Kubernetes runtime diagnosis skill with case memory: diagnoses live cluster failures (CrashLoop/OOM/Pending/NetworkPolicy deny), dry-run fixes, records resolved cases for instant recall; ships a go-install CLI twin.
- [commercial-ui-ux-codex-skill](https://github.com/zjsthmjialin/commercial-ui-ux-codex-skill) - Registers the commercial-ui-ux skill: task-aware commercial UI/UX/GUI design, review, repair and implementation (SaaS, dashboards, admin panels, forms, design systems) with a reference-doc system and quality gates.
- [dsh-wm](https://github.com/WayneJin0918/dsh-wm) - World-model research toolkit: inspect frames, name 3D / pixel / latent routes, score pred vs GT, and RSI skills / wm.yaml.
- [vdnight89/InfiniteDSH](https://github.com/vdnight89/InfiniteDSH) - 诸天万界DSH: one DSH session is one book; a cover-card picker opens 19 realms, a prose-only preset locks the model to fiction, keyword worldbook lore grounds each turn, and /export-story typesets the session into a Markdown novel.
- [JohnXu22786/skill-framework](https://github.com/JohnXu22786/skill-framework) - Praxis: a bundled engineering-methodology skill library (Agent Skills) for dsh, served as a Cordis plugin via ctx.skills.
- [duyanta123/dsh-data-insight](https://github.com/duyanta123/dsh-data-insight) - Data-insight skill that turns raw data (CSV / pasted tables / SQL results / DuckDB) into structured Markdown reports with business conclusions, metrics and charts.

- [dsh-industry-research](https://github.com/PerryLink/dsh-industry-research) - Industry and company research domain pack: industry_map chain maps, public-source policy/news tracking over ctx.web (industry_track), company_scan cards from user data files, and industry_report with an optional ctx.researchReport sealing bridge and a builtin-fallback renderer, plus two methodology skills.
- [dsh-data-quality](https://github.com/PerryLink/dsh-data-quality) - Deterministic data profiling, cleaning, and verification: data_profile / data_clean / data_verify tools plus a frozen cross-plugin verifyCitations citation-checking contract, with durable reports in a storage domain.
- [maxmilian/dsh-odoo](https://github.com/maxmilian/dsh-odoo) - Read-only Odoo tools over JSON-RPC: server info, model field introspection, and a restricted search_read on an allow list of models. A draft-create tool is registered only when allowWrite is enabled.
## Tools & Utilities
- [dsh-tray](https://github.com/liulifu/dsh-tray) - Windows system-tray guardian for DeepSeek Harness: launch/stop/restart the dsh service, multi-profile port bindings, snapshot-based quick recovery, plugin enable/disable, SQLite version ledger, and a client sentinel that detects a plugin failing to load, disables it and restores DSH.

- [zilliztech/dsh-milvus](https://github.com/zilliztech/dsh-milvus) - Read-only DSH Web plugin for inspecting and searching Milvus or Zilliz Cloud collections from chat, including scalar, BM25, dense, and hybrid queries.

- [zoahdev/dsh-discussions-radar](https://github.com/zoahdev/dsh-discussions-radar) - Official GitHub Discussions radar: list/filter/search the official boards (Ideas/Q&A/Show Your Plugins!/General/Announcements) (CLI + `discussions_radar` tool).
- [dsh-case](https://github.com/ZhijiangTang/dsh-case) - Name-case conversion across 8 styles: camel, snake, kebab, Pascal, and more.
- [dsh-clipboard](https://github.com/ZhijiangTang/dsh-clipboard) - Writes text to the system clipboard, cross-platform (macOS/Windows/Linux).
- [dsh-cron-parse](https://github.com/ZhijiangTang/dsh-cron-parse) - Parses cron expressions into human-readable text and previews upcoming run times.
- [dsh-dead-links](https://github.com/ZhijiangTang/dsh-dead-links) - Scans Markdown files for dead http(s) links.
- [dsh-fetch-file](https://github.com/ZhijiangTang/dsh-fetch-file) - Downloads a URL into the workspace as a file, with a path fence, streaming, and a 200 MB cap.
- [dsh-file-convert](https://github.com/zzy-12345678/dsh-file-convert) - Local-first file conversion: 26 conversions across images, PDF (with OCR and experimental PDF→DOCX), data, audio/video and office docs; 7 tools, all local, no API keys.
- [dsh-fmt](https://github.com/ZhijiangTang/dsh-fmt) - Formats and validates JSON/YAML/TOML/SQL, with line-and-column error locations.
- [dsh-handoff](https://github.com/ZhijiangTang/dsh-handoff) - Exports the current session as a deterministic Markdown handoff document.
- [dsh-http](https://github.com/ZhijiangTang/dsh-http) - Structured HTTP request tool: returns status, duration, and size, with basic/bearer auth helpers.
- [dsh-jwt](https://github.com/ZhijiangTang/dsh-jwt) - Decodes a JWT for debugging without verifying its signature, and flags expiry.
- [dsh-password](https://github.com/ZhijiangTang/dsh-password) - Generates strong random passwords and diceware passphrases via crypto.
- [dsh-pkg-info](https://github.com/ZhijiangTang/dsh-pkg-info) - Queries npm/PyPI package metadata (version, license, dependencies).
- [dsh-url-tools](https://github.com/ZhijiangTang/dsh-url-tools) - URL parsing, tracking-parameter removal, encode/decode, and redirect expansion.
- [dsh-when](https://github.com/ZhijiangTang/dsh-when) - Parses natural-language relative time (e.g. "in 2 hours") into ISO timestamps, fail-fast.
- [JohnXu22786/command-scout](https://github.com/JohnXu22786/command-scout) - Scans a project's declared build commands (Makefile, package.json scripts, justfile, deno tasks) and exposes them as agent tools.
- [JohnXu22786/file-planning](https://github.com/JohnXu22786/file-planning) - Trailmap: disk-persisted execution-planning plugin — milestone/step state machine, dependency tagging, audit events and retrospective notes, via dsh tools, CLI and skills.
- [JohnXu22786/codegraph](https://github.com/JohnXu22786/codegraph) - Code knowledge graph for dsh: indexes symbols, call sites and imports into SQLite and answers call/dependency questions via CLI or stdio MCP tool server.
- [Nicholas023/vision-exp-tile](https://github.com/Nicholas023/vision-exp-tile) - Large-image recognition for vision-exp models: lossless 800×800 tile recognition (smart/pipeline/full), local OCR with preprocessing & handwriting routing, optional multi-vendor GPU (DirectML/CUDA/OpenVINO) with auto CPU fallback.
- [dsh-overlay-check](https://github.com/taltara/mddl-harness/tree/main/packages/overlay-check) - Offline overlay safety checks as a zero-dependency library: resolvability preflight, confined managed-block writes, a readable diff, and a warning that `agent-presets.roots` is discarded at boot (deepseek-harness#403).

## Related

- [dsh-external/issues](https://github.com/dsh-external/issues) - Issue aggregation hub.
- [dsh-meme-hub](https://github.com/the-beating-light-of-the-nail/dsh-meme-hub) - Curated navigation of community meme plugins (skins, desktop pets, mini-games), bilingual.
- [DeepSeek Harness Handbook](https://github.com/sandbaseai/deepseek-harness-handbook) - 173 English-canonical, source-backed guides with 202 localized documents, an 82-resource Agent-first [Awesome resource map](https://sandbaseai.github.io/deepseek-harness-handbook/awesome-deepseek-harness-resources.html), local-browser [Install Doctor](https://sandbaseai.github.io/deepseek-harness-handbook/install-doctor.html), and [Failure Router](https://sandbaseai.github.io/deepseek-harness-handbook/diagnose.html).
- [liyupi/ai-guide](https://github.com/liyupi/ai-guide) - Chinese Vibe Coding handbook with a dedicated DeepSeek Harness section: getting started, server deployment, agent presets, minimal-mode field test, and curated plugins.
- [TeamoRouter](https://teamorouter.com/docs/install-deepseek-harness) - OpenAI-compatible endpoint with free DeepSeek V4 Pro/Flash daily quotas; point DEEPSEEK_BASE_URL at it, no payment info required.
- [DeepSeek](https://deepseek.com) - Official site.

### Friendly links

- [DeepSeek Harness Desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) - Modern desktop client for the DSH ecosystem: launch and manage a local Harness without configuring Node.js or running commands; plugin marketplace, mobile remote control and IM channels planned. [Website](https://www.dshdesktop.cn)

## Contributing

Please have a look at [contributing.md](contributing.md). Entry standard: repository + one-line description + link; the curated list is maintained by hand, the full index lives in hub.

## Thanks

Thanks to the [Linux Do community](https://linux.do/) for the support and exchange.
