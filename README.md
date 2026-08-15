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
- [Core](#core)
- [Agents & Orchestration](#agents--orchestration)
- [Context & Search](#context--search)
- [Input & Editing](#input--editing)
- [UI & Experience](#ui--experience)
- [IDE & Clients](#ide--clients)
- [Browser & Remote](#browser--remote)
- [Models & Inference](#models--inference)
- [Git & Engineering](#git--engineering)
- [Output & Deliverables](#output--deliverables)
- [Notifications & Channels](#notifications--channels)
- [Fun & Lifestyle](#fun--lifestyle)
- [Infrastructure & Development](#infrastructure--development)
- [Data & Market](#data--market)
- [Science & Research](#science--research)
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

## Core

- [dsh-deepresearch](https://github.com/dsh-external/dsh-deepresearch) - DeepResearch plugin (cordis).
- [dsh-plan-execute](https://github.com/dsh-external/dsh-plan-execute) - Dual-model plan/execute routing: planner model thinks, executor model acts.
- [dsh-toolkit](https://github.com/dsh-external/dsh-toolkit) - Zero-dependency tool suite (calculator/csv/diff/encoding/json/markdown/regex/time).
- [dsh-deep-research](https://github.com/dsh-external/dsh-deep-research) - Adaptive deep-research orchestrator (workflow engine).
- [dsh-101](https://github.com/dsh-external/dsh-101) - DSH documentation reading mode.
- [dsh-client-ui-plan-execute](https://github.com/dsh-external/dsh-client-ui-plan-execute) - Web Settings row for plan/execute model routing.

- [dsh_workflow](https://github.com/dsh-external/dsh_workflow) - Dynamic workflow for DSH (placeholder).
- [dsh-equip-engine](https://github.com/wuykjl/dsh-equip-engine) - Task-driven plugin equip engine: dual retrieval (curated rules + LLM semantic), combo scoring (synergy/conflict/cost/trust), conflict detection and install-command export.


## Agents & Orchestration

- [xiehuan123/coding-coach](https://github.com/xiehuan123/coding-coach) - Coding Coach: 35-skill bundle plus a full agent preset for non-developers (8-stage idea-to-launch pipeline; engineering/product/UI skills).
- [dsh-collaboration](https://github.com/Socialist-Sister/dsh-collaboration) - Multi-agent collaboration suite: user-configured specialist roster, persistent on-demand dispatch (team_call/team_message/team_status/team_close), clone instances, star-topology relay, model comparison and a multimodal vision bridge.
- [dsh-plans](https://github.com/Optim-Agent/dsh-plans) - Planning-first agent preset: research repository changes into traceable Markdown plans, refine them through reviewer/criticizer subagent rounds, then execute as a DSH goal with a verifier checklist.
- [dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) - Global persistent agent squads with per-agent model/tool policies: manage them in Settings, select and toggle one per conversation, then collaborate on normal sends in a fixed or model-planned order.

## Context & Search

- [xiehuan123/dsh-deepread](https://github.com/xiehuan123/dsh-deepread) - DeepRead: deep-reading assistant with five modes (quick/deep/knowledge-map/Feynman reading/book), WeChat links, local PDF (pure-JS extractor), optional MD/FreeMind/HTML export.
- [dsh-context](https://github.com/bowenliang123/dsh-context) - Context insight panel: see what the model's context window is made of and how it evolves — composition vs. window size, per-request history, compression/injection events, and per-message token stats.
- [dsh-bookmarks](https://github.com/penguin-oo/dsh-bookmarks) - Bookmark finalized assistant replies with notes and tags; a cross-session center with search, tag filter, session jump and one-click Markdown export (Alt+B toggles the panel).
- [billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) - Model-driven context compression (ACP) for DeepSeek Harness, ported from billion-context-pi; the model decides when and what to compress.
- [dsh-compressor](https://github.com/lifeodyssey/dsh-compressor) - Slim port of Headroom: compresses tool output, cuts up to 20% of context, without affecting the model's context cache or agent performance.
- [context-vista](https://github.com/GooodWei/context-vista) - A right-side floating panel and /context command for DeepSeek Harness — a live donut chart of context token usage, allocation, and estimated cost.
- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) - See exactly what every request carries: token cost of the AGENTS.md chain, skill catalog and tool schemas, with duplicate/conflict detection and actionable pruning tips (Web UI gauge + context_audit tool).
- [dsh-mcp-lens](https://github.com/labmimors/dsh-mcp-lens) - Progressive-disclosure MCP gateway that searches large remote tool catalogs through two stable interfaces, then calls selected tools with exact schemas, lazy connections and bounded caches.
- [dsh-cot-summary](https://github.com/dsh-external/dsh-cot-summary) - External Summary-CoT plugin workspace.
- [dsh-explain](https://github.com/dsh-external/dsh-explain) - Learning mode that explains each agent step (WIP).
- [dsh-file-mount](https://github.com/acefun29/dsh-file-mount) - Incremental file mounting with read dedupe: mounted line ranges are never re-sent to the model, on-disk changes invalidate and remount, with a Mounted Files tab and token-savings accounting.
- [dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) - Feynman learning-mode plugin: teach → teach-back → judge → re-explain loop rendered as rich HTML lesson cards (mermaid diagrams + shiki code highlighting).
- [dsh-memory-vault](https://github.com/flymysql/dsh-memory) - Cross-session memory vault: memory_remember / memory_recall / memory_forget tools, latest entries injected into system-prompt assembly, Settings page (记忆库 / Memory).
- [dsh-session-search](https://github.com/dsh-external/dsh-session-search) - Index-free read-only search across dsh/Codex/Claude Code/pi/OpenCode sessions.
- [cross-harness-cite](https://github.com/dsh-external/cross-harness-cite) - Cite past conversations across harnesses.
- [task-passport](https://github.com/dongsheng123132/task-passport) - Carry durable task state across DeepSeek Harness, WorkBuddy, Claude Code and Codex with machine-readable checkpoints and optimistic locking.
- [dsh-session-cluster](https://github.com/dsh-external/dsh-session-cluster) - Session clustering.
- [session-chatlog](https://github.com/dsh-external/session-chatlog) - Session chat logs.
- [dsh-memoria](https://github.com/jiayan-xu/dsh-memoria) - Memoria memory backend for dsh: 4 tools (observe/remember/search/recall) into a vector+graph memory layer (memoria) with namespace isolation, auto-write (turn-end observe + positive-feedback -> importance-5 remember) and hot-reload settings.
- [dsh-memory-evolve](https://github.com/dsh-external/dsh-memory-evolve) - Cross-session long-term memory + background self-evolution (5-track memory/git-branch awareness/skill evolution).
- [dsh-memory-gate](https://github.com/GIT121995/dsh-memory-gate) - Bounded local long-term memory with CBDC (Claim→Belief→Decision→Consumption) authority gating: SQLite + FTS5 claims, scoped dual-channel recall, /memory management commands, ≤3-claim/1200-char injection per call, no extra model call.
- [dsh-engram-relay](https://github.com/dsh-external/dsh-engram-relay) - Built-in <1B model for 100k-equivalent long memory with causal-graph wake-up.
- [dsh-mneme](https://github.com/modusensus/dsh-mneme) - Cross-session memory with memory sovereignty: SQLite + human-editable Markdown mirror, autoDream consolidation with self-correction (update decisions), failure tracking, and fully-offline semantic search (local embedding / rerank / clustering), 233 tests.
- [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) - Mnemon-powered local memory system: three-tier memory (runtime hot memory / project Documents / long-term Memory Spaces) with supervised writeback, retrieval tools, and Web UI.
- [zotero-harvest](https://github.com/dsh-external/zotero-harvest) - Zotero library integration.
- [url-manager](https://github.com/Piccolo123/url-manager) - Agent-first URL collection & knowledge management: save links from any platform, auto-categorize/tag, full-text search, shared categories, and deliver results as magic-link cards. Zero setup — agents auto-register on first use.
- [url-manager-mcp](https://github.com/Piccolo123/url-manager-mcp) - MCP server companion for url-manager: 21 tools (mcp__url_manager__*) for save/search/categorize/share and magic-link delivery. Stdio or streamable-http.
- [zotero-wave-rag](https://github.com/dsh-external/zotero-wave-rag) - Zotero RAG retrieval.
- [dsh-data-agent](https://github.com/dsh-external/dsh-data-agent) - Let the model connect to databases and write SQL.
- [dsh-easy-ctx-manager](https://github.com/dsh-external/dsh-easy-ctx-manager) - Context management: context saving and more (cordis).
- [dsh-kb-sieve](https://github.com/dsh-external/dsh-kb-sieve) - Knowledge-base plugin: build auditable KB packages (references + SQL).
- [dsh-payload-capture](https://github.com/moeblack/dsh-payload-capture) - Capture every upstream model API payload to JSON (debug & observability).
- [dsh-memento](https://github.com/PerryLink/dsh-memento) - Bounded, layered, approval-gated, auditable cross-session memory: typed ctx.memory seam, zero-dependency SQLite provider, memory tool and frozen snapshot injection.
- [dsh-news-plugin](https://github.com/canghai666x/dsh-news-plugin) - RSS news fetch tool: grabs 10+ CN/EN feeds into structured items (title/link/source/date/summary) with per-source timeout, ready for model-side scoring and briefing (cordis).
- [dsh-news-briefing](https://github.com/canghai666x/dsh-news-briefing) - News briefing skill: 5-dimension scoring (story/timeliness/depth/fun/uniqueness), anti-clickbait writing rules, Tier-based content preference, de-AI-style Chinese writing guide.
- [dsh-web-novel-research](https://github.com/canghai666x/dsh-web-novel-research) - Chinese web-novel plot lookup skill: free mirror-site workflow (GBK decoding, cross-volume duplicate chapter disambiguation, multi-source completion check) without paid sources.
- [dsh-web-search-exa](https://github.com/TonyDua/dsh-web-search-exa) - Zero-config Exa web search provider: keyless anonymous MCP fallback (mcp.exa.ai/mcp) plus keyed REST search, for the ctx.web seam.
- [dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) - Persistent enhanced web search for DSH: multi-engine routing (DeepSeek/Exa/DDG/Bing/Jina + GitHub/Bilibili/YouTube/V2EX/Xiaohongshu/Twitter/Reddit/RSS), SQLite+LRU cache, userscript-style extraction, Playwright rendering.
- [dsh-session-archive](https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-session-archive) - Settings section to view archived sessions and permanently delete dead conversations (two-step confirm, running sessions locked).
- [dsh-engramory](https://github.com/tinqiao-oss/engramory/tree/master/adapters/dsh) - File-based curated memory: a line/byte-capped `MEMORY.md` index plus one markdown file per fact, versioned with git and readable without a tool. The cap is enforced through `ctx.tools.guard()` rather than asked for in a prompt, and the protocol is registered as a runtime skill; the same store is also read by Claude Code, Codex, Kiro, and OpenClaw.
- [plur-ai/dsh-plugin](https://github.com/plur-ai/dsh-plugin) - PLUR persistent memory: engrams are rendered into the system prompt on each assembly rather than sitting behind a tool call, so recall needs no round trip and the block never accumulates in context; fully local search (BM25 + BGE), plain YAML storage you can edit, per-workspace scoping, and a /plur-memory viewer.


- [dsh-memory-plugin](https://github.com/volcengine/OpenViking/tree/main/examples/dsh-memory-plugin) - OpenViking memory/context plugin for DeepSeek Harness: connects dsh to OpenViking's self-evolving context database for cross-session agent memory and knowledge RAG.
- [moguiyu/dsh-tavily](https://github.com/moguiyu/dsh-tavily) - Tavily search with multiple API keys, key rotation/failover, usage gauge, and a settings card for DSH.
- [dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) - Continual self-evolution: versioned, auditable, rollback-safe harness state (prompt notes, memories, skills, subagent specs) refined from session trajectories.

## Input & Editing

- [dsh-better-sidebar-plugin-office](https://github.com/dsh-external/dsh-better-sidebar-plugin-office) - Office integration for DSH-better-sidebar.
- [dsh-message-edit](https://github.com/dsh-external/dsh-message-edit) - Branch-based message editing / reroll / retry / version timeline.
- [dsh-prompt-studio](https://github.com/dsh-external/dsh-prompt-studio) - Edit system-prompt sections with live preview.
- [dsh-paste-input](https://github.com/dsh-external/dsh-paste-input) - Ctrl+V paste files / drag & drop / picker.
- [dsh-voice](https://github.com/motongv/dsh-voice) - Voice input (speech-to-text) and read-aloud (Edge neural TTS) for the composer.
- [dsh-drag-and-drop](https://github.com/dsh-external/dsh-drag-and-drop) - Cross-platform drag & drop with original path insertion.
- [dsh-file-uploads](https://github.com/l541402398/dsh-file-uploads) - Upload arbitrary local files from the Web composer, show pending cards, and manage stored files in Settings.
- [dsh-input-history](https://github.com/dsh-external/dsh-input-history) - Input history.
- [dsh-multimedia-webui-input](https://github.com/dsh-external/dsh-multimedia-webui-input) - Multimedia file/folder input.
- [dsh-office](https://github.com/dsh-external/dsh-office) - Office file read/write bundle: model edits Office files, docx/pdf preview in web client.
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) - Import full-fidelity conversation histories from 13 coding agents (Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / opencode / ZCode / Grok Build / OpenClaw / Pi / Hermes / Kimi) as resumable DeepSeek Harness sessions, with reverse export/sync back to Claude Code.
- [dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) - File claim/release protection for parallel DSH sessions on the same workspace (heartbeat stale takeover, pending 3-way merge area).
- [dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) - Quick sticky notes in the composer: ideas/feelings/TODO with Markdown preview, auto-save, one-click send to chat.
- [dsh-plugin-quote-reply](https://github.com/yangYzc/dsh-plugin-quote-reply) - Select text in a conversation, then quote it into the composer or reply in a new window.
- [dsh-pathlink](https://github.com/penguin-oo/dsh-pathlink) - Ctrl+click file paths and links in chat: paths open their folder in the OS file manager (with the file selected), links open in a new browser tab.
- [@picgo/dsh-plugin](https://github.com/PicGo/dsh-plugin) - Official PicGo plugin: upload local files to your image host and get public URLs, reusing the hosts and uploader plugins already configured in PicGo.

- [dsh-suggested-replies](https://github.com/dsh-external/dsh-suggested-replies) - Suggested replies above the DSH Web composer.
- [dsh-wordbox](https://github.com/arcmosin/dsh-wordbox) - Persistent common-word/phrase panel beside the composer input with global/current-project buckets and one-click insert.
- [dsh-voice-webspeech](https://github.com/anweat/dsh-voice-webspeech) - Browser Web Speech API voice input for DSH: zero server, zero keys, zero model downloads (Edge=Azure, Chrome=Google speech).
- [dsh-plugin-anydoc](https://github.com/beancookie/dsh-plugin-anydoc) - This plugin exports a reusable function that takes a file path or a Buffer, extracts the content via @firecrawl/anydoc, and returns GitHub‑Flavored Markdown (GFM). It also includes configuration options and an example usage.
- [dsh-attachment-upload](https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-attachment-upload) - Composer attach button: uploads files into the workspace's .dsh-attachments directory and inserts the path into the draft.
- [dsh-steer-button](https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-steer-button) - Always-visible steer button in the composer: one click injects the draft into the running turn (equals Ctrl/Cmd+Enter).
- [Boliban/dsh-enter-customizer](https://github.com/Boliban/dsh-enter-customizer) - Take over the system input shortcuts for the chat input box and configure behavior independently for each shortcut.


- [PerryLink/dsh-composer-history](https://github.com/PerryLink/dsh-composer-history) - Terminal-style input history for the web composer: edge-first arrow-key recall with exact draft/caret restore, browser-local persisted history, Ctrl+R reverse search, and sliding-context awareness (compaction summaries join recall and search).

## UI & Experience

- [dsh-token-pet](https://github.com/pk7j7sqryy-ops/dsh-token-pet) - Cute token-usage pet in the session header: live context occupancy, per-session usage and breakdown, plus date/weekday, weather, 3-day forecast and severe-weather alerts, all theme-aware.
- [dsh-token-usage](https://github.com/jiamuAi/dsh-token-usage) - Codex-style token usage panel: whole-instance cumulative/per-session peak tokens, longest chat & streak, daily/weekly/cumulative activity heatmap, and plugin/skill Top5.
- [dsh-office](https://github.com/Fayelin12/dsh-office) - Office workspace & session dashboard: a floating 6-column sprite panel visualizing workspaces, sessions, token usage and subagents.
- [dsh-spotlight](https://github.com/0xsline/dsh-spotlight) - Keyboard-first command palette for DeepSeek Harness Web.
- [dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) - Pins off-screen expanded Think/tool/command labels to the top of the DSH Web conversation and collapses every expanded section in one click (custom hotkey).
- [dsh-better-model-selector](https://github.com/Khellendros97/dsh-better-model-selector) - Splits the composer model selector into a searchable, favorite-marking dropdown and a reasoning-effort slider, with Ctrl+P / Ctrl+T quick-switch shortcuts.
- [dsh-catppuccin](https://github.com/zhijun-dai/Catppuccin-dsh-theme) - Catppuccin theme plugin: Latte / Frappé / Macchiato / Mocha skins for the DSH Web theme runtime.
- [solarized-dsh-theme](https://github.com/zhijun-dai/Solarized-dsh-theme) - Solarized + Selenized theme plugin: four faithful palettes registered into the DSH Web theme runtime.
- [arcana](https://github.com/GooodWei/arcana) - A floating command deck that lists every slash command in DeepSeek Harness as runnable buttons, sorted by usage.
- [dsh-aigc-canvas](https://github.com/dsh-external/dsh-aigc-canvas) - AIGC canvas plugin (cordis).
- [dsh-deepcel](https://github.com/dsh-external/dsh-deepcel) - Deepcel spreadsheet skin and standalone distribution.
- [dsh-deepseek-quota](https://github.com/yingjunnan/dsh-deepseek-quota) - DeepSeek API balance in a bottom-right floating card on the DSH Web page (auto-refresh + manual refresh).
- [dsh-diff-viewer](https://github.com/dsh-external/dsh-diff-viewer) - PiUI-style Web diff viewer replacing the default diff view.
- [dsh-mobile](https://github.com/dsh-external/dsh-mobile) - Mobile client plugin (cordis + dsh.plugin.json).
- [dsh-openpencil](https://github.com/dsh-external/dsh-openpencil) - OpenPencil design preview and editing plugin.
- [dsh-design-studio](https://github.com/Sal7one/DSH-Design-Studio) - Design Studio tab: design briefs become html/css/js mockups with live preview, element picker, design-agent chat with vision review, identity presets and zip export.
- [dsh-pin-recall](https://github.com/kerwin2046/dsh-pin-recall) - Pin assistant replies from the Web action strip and recall them into the next model turn (`/pin` `/recall`, with optional wake).
- [dsh-turn-navigator](https://github.com/dsh-external/dsh-turn-navigator) - DSH Web turn navigation plugin.
- [dsh-usage-panel](https://github.com/AlfredChaos/dsh-usage-panel) - Token usage statistics as a Settings page: cumulative KPIs, a six-month activity heatmap, stacked per-model daily bars and a model donut, rescanned read-only from session logs.
- [dsh-token-usage-dashboard](https://github.com/solstice621/dsh-token-usage-dashboard) - Codex-style token usage dashboard: five stat cards, GitHub-style activity heatmap (daily/weekly views), insights & model ranking; persisted snapshot with incremental sync, survives session deletion.
- [dsh-ultra-ui](https://github.com/dsh-external/dsh-ultra-ui) - Ultra UI plugin (cordis).
- [dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) - RMB/USD token billing for the DSH web: official-policy auto pricing (incl. peak/off-peak hours), per-message cost ledger, account balance, locale-driven currency display.
- [dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) - DeepSeek account balance and session cost in the DSH Web composer dock (auto-fetched official pricing, peak/off-peak support).
- [dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) - Per-session and daily API cost, budget with usage %, official balance, history dashboard, and one-click official price sync with peak/off-peak pricing.
- [dsh-cost-meter](https://github.com/Sttrevens/dsh-cost-meter) - Per-turn USD cost in the Web UI: session total in the header and per-turn cost in each message footer, with a hover breakdown (token usage × configurable pricing table).
- [dsh-plugin-cost](https://github.com/yweilai77-dev/dsh-plugin-cost) - Session cost estimate in the DSH Web composer dock (tokenUsage × configurable price table, one-click official-price refresh).
- [dsh-balance-tide](https://github.com/huanyuLv/dsh-balance-tide) - DeepSeek account balance and session cost under the composer, with a live peak/off-peak pricing badge (Beijing time), a countdown to the next pricing switch, and hover price tables with usage advice.
- [dsh-spend](https://github.com/nonewind/dsh-spend) - Token usage and estimated spend for the DSH web UI: floating panel with per-model / per-day / per-session stats and auto-detected billing plans.
- [dsh-live-stats](https://github.com/dsh-external/dsh-live-stats) - Live token estimates and generation TPS.
- [dsh-view-modes](https://github.com/NigelYao/dsh-view-modes) - DSH Web output modes with Verbose, Normal, and Summary views, semantic grouping for tool calls and thinking, and live execution status.
- [dsh-tps](https://github.com/dsh-external/dsh-tps) - TPS meter.
- [dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) - Steam Workshop-style in-app plugin browser: search, hot/newest/trending windows, Chinese keyword mapping, bilingual translation, plugin-signature filtering, and smart one-click install/update/uninstall with an installed-plugins manager.
- [dsh-cc-tui](https://github.com/dsh-external/dsh-cc-tui) - Claude Code-style fullscreen TUI (streaming expand / double-Esc rollback).
- [dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) - TUI built with grok-build.
- [dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) - Pi TUI (differential-rendering terminal framework) front end: streaming markdown, thinking collapse, tool cards, slash commands, approval/question overlays, shared dsh session store.
- [deepseek-harness-tui](https://github.com/openma-ai/deepseek-harness-tui) - Rust/ratatui terminal client that speaks the DSH SDK JSON-RPC protocol directly and runs standalone or as a profile bundle.
- [DSH-better-sidebar](https://github.com/dsh-external/DSH-better-sidebar) - Sidebar: file rendering/terminal/Git/subagents/custom APIs.
- [dsh-web-panel](https://github.com/dsh-external/dsh-web-panel) - Embedded terminal dock + Git Review + file view.
- [dsh-web-review](https://github.com/CanglongCl/dsh-web-review) - Isolated web page previews with element annotations and visual adjustments that guide source edits.
- [dsh-markdown-preview](https://github.com/GitHubJiKe/dsh-markdown-preview) - In-chat preview for produced files: click a produced-file chip to render Markdown (markdown-it + highlight.js), images, or plain text in the conversation, with system-app open kept one click away.
- [dsh-mobileweb-adapter](https://github.com/dsh-external/dsh-mobileweb-adapter) - Mobile/PWA layout adaptation + LAN WebSocket fix.
- [dsh-subagent-tree](https://github.com/dsh-external/dsh-subagent-tree) - Subagent tree visualization.
- [dsh-web-workflow-visualizer](https://github.com/dsh-external/dsh-web-workflow-visualizer) - Workflow visualization.
- [dsh-split-panes](https://github.com/dsh-external/dsh-split-panes) - Split panes.
- [dsh-ui-progress](https://github.com/dsh-external/dsh-ui-progress) - Progress indicators.
- [dsh-skins](https://github.com/dsh-external/dsh-skins) - Web UI skins.
- [dsh-skin](https://github.com/KinGao294/dsh-skin) - Codex-style skin switcher + custom wallpaper for the Web UI: curated --dsw-alias-* palettes and a translucent wallpaper layer with opacity/blur controls.
- [dsh-chat-thumb](https://github.com/dsh-external/dsh-chat-thumb) - Chat thumbnails (cordis).
- [show-bash-command](https://github.com/dsh-external/show-bash-command) - Show actual command content instead of descriptions.
- [turtle-ui](https://github.com/dsh-external/turtle-ui) - Official UI plugin reference implementation.
- [@zhaoolee/dsh-notes](https://github.com/zhaoolee/notes) - Export DSH conversations as Smartisan Notes-style PNGs, or create and update Markdown notes in a configured account-scoped workspace.
- [deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) - Native Windows desktop shell: 1:1 official web UI with embedded server hosting, tray and auto-recovery.
- [Harness Desktop](https://github.com/baiyuscc13724-max/deepseek-harness-desktop) - Windows desktop app for the official DSH Web UI with a Chinese installer and portable build, quick themes, an in-app plugin marketplace, separate main/subagent model selection, and verified updates.
- [dsh-desktop](https://github.com/foolgry/dsh-desktop) - Download-and-run Electron desktop build (macOS/Windows installers): no Node.js or terminal needed, tracks upstream `@deepseek-ai/dsh` releases automatically, with built-in web UI and auto-update.
- [deepseek-harness-desktop](https://github.com/fendouai/deepseek-harness-desktop) - Tauri 2 desktop distribution of DeepSeek Harness with the complete Web UI, a supervised local sidecar, and a bundled Node.js 24 runtime (macOS/Linux/Windows).
- [DeepSeek Harness Desktop](https://github.com/chokwinlee/deepseek-harness-desktop) - Self-contained macOS/Windows desktop host for the official DSH Web UI; macOS uses Tauri/WKWebView and ships sub-90 MB DMGs with the Harness runtime bundled.
- [dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) - Right-side dot-timeline rail to jump between user messages.
- [dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) - Turn-index sidebar: one entry per user turn, click to jump, scroll-spy highlighting.
- [dsh-outline](https://github.com/urzeye/dsh-outline) - Real-time conversation outline panel for the DSH Web session page: a tree of user questions and Markdown headings (H1-H6) that updates live while streaming, with click-to-jump highlight, expand-depth control, search, and per-session favorites.
- [dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) - Attention reminders: frame badge, tab-title count and whale-favicon recolor for sessions waiting for input or finished unopened.
- [dsh-sidebar-mode](https://github.com/Meredith2328/dsh-sidebar-mode) - Preset-mode badge embedded in the "New Session" button: click to pick the default agent preset for the next session (long names truncate with ellipsis so the label stays readable).
- [dsh-plugin-description](https://github.com/MysaDC/dsh-plugin-description) - Adds bilingual (zh/en) descriptions to every plugin card on the Web Settings plugin list; publishes a `pluginDescriptions` service for other plugins to register their own.
- [dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) - Human-readable catalog for official DSH Web built-ins with status explanations and an audited set of safe UI toggles.
- [dsh-hud](https://github.com/a903067276-rgb/dsh-hud) - HUD status panel: git status, MCP servers, skills, model and token usage in a floating side panel.
- [dsh-file-mentions](https://github.com/a903067276-rgb/dsh-file-mentions) - Clickable file paths in DSH replies: Codex-style inline open, 📂 reveal in file manager, and a mentioned-files chip list at the turn tail.
- [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) - Auto-resumes interrupted DSH Web requests: sends a queued 「继续」 after network/timeout/host-crash failures, with error classification, adaptive backoff, templated continue text and browser notifications; everything configurable from the plugin settings card.
- [dsh-trajectory-debug](https://github.com/devmom/dsh-trajectory-debug) - Trajectory waterfall, deterministic replay, breakpoints, edit-and-rerun, fork compare and performance analytics for DeepSeek Harness.
- [dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) - Web UI colorscheme plugin: switch and persist themes from Settings, with 8 built-in open-source presets plus custom themes.
- [dsh-plugin-setting-mcp](https://github.com/Ceelog/dsh-plugins/tree/main/src/plugins/dsh-plugin-setting-mcp) - Manage MCP servers from the Web settings panel, with add, edit, remove, enable/disable and hot reload on save.
- [dsh-theme-plugin](https://github.com/BeiZi6/dsh-theme-plugin) - Theme studio for the DSH Web GUI: five built-in presets plus fully customizable light/dark palettes (accent, background, foreground, UI and code fonts, translucent sidebar, contrast), hot-swapped instantly and persisted in localStorage.
- [dsh-opencodego-usage](https://github.com/BeiZi6/dsh-opencodego-usage) - OpenCodeGo quota monitor for the DSH Web GUI: a breathing indicator at the input's bottom-right (green/yellow/red by remaining share), a liquid-glass panel with rolling/weekly/monthly usage windows and reset times, auto-refreshing every 30 s; API key read from DSH credentials.
- [dsh-smooth-stream](https://github.com/SpookySandwich/dsh-smooth-stream) - Better streaming text animation for DeepSeek Harness.
- [dsh-whale-switch](https://github.com/bowen507/dsh-whale-switch) - Minimal on/off loop: a desktop shortcut launches dsh web, and an animated whale button (hover to arm, click to dive) shuts it down gracefully and closes the tab.
- [dsh-trajectory-reader](https://github.com/flyingtimes/dsh-trajectory-reader) - A 轨迹解读 (trajectory interpretation) tab that summarizes each user round — what was wanted, how the assistant thought and executed, files/commands/errors — via a rules engine plus optional LLM narrative; user messages stay verbatim.
- [dsh-session-manager](https://github.com/Semidia/dsh-session-manager) - Right-click context menu on sidebar conversation rows: pin, rename, archive, fork, mark unread, copy cwd/id/title/deep-link, open in explorer/new window.

- [dsh-cost-crystal](https://github.com/xxvk/dsh-cost-crystal) - Floating cost crystal for the DSH Web UI: balance card, real-time tok/s, peak/off-peak billing countdown, last-24h spend, and a 🔮 next-message cost forecast, all timezone-aware.
- [dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) - Brings the DeepSeek Harness homepage background to DSH Web: WebGL fluid light, dot-line grid and a digital whale, with dark and light palettes.
## IDE & Clients

- [dsh4vscode](https://github.com/DoggyHU/dsh4vscode) - VS Code chat windows backed by the DSH agent: OpenCode-style independent sessions, model auto-routing (Flash/Pro/Pro Max).
- [dsh-plugin-open-editor](https://github.com/Civitasv/dsh-plugin-open-editor) - Open the current workspace in your local editor (VS Code, Cursor, JetBrains, Vim, ...) from the session header.
- [dsh-open-with](https://github.com/ChuanTianML/dsh-open-with) - Open registered DSH workspaces from the Web UI in detected or configured local editors, terminals, or file managers, with a remembered per-browser preference.
- [DSH-for-VSC](https://github.com/yauntyour/DSH-for-VSC) - VS Code extension embedding the DSH WebUI as an editor panel: sidebar console with service status and start/stop, hidden auto-restart, status-bar indicator and run logs.
- [dsh-gui](https://github.com/xuboboo/dsh-gui) - Third-party Windows desktop client for DeepSeek Harness: native window, branded theme & splash, startup crash fixes, token usage statistics.
- [DSH Studio](https://github.com/Moresyl/dsh-studio) - Cross-platform Rust/Tauri desktop shell that supervises `dsh web`, reclaims process trees, selects free ports, and publishes Windows/Linux/macOS installers without forking the upstream UI.
- [DSH Deck](https://github.com/Socialist-Sister/dsh-deck) - Unofficial Electron desktop shell for the official DSH Web UI (same code, same data): attach-to-existing-harness mode prevents dual-writer session corruption, session-log relocated to the session row menu, tray residency, single portable exe.
- [DshCockpit](https://github.com/Lxiayu/DshCockpit) - Electron desktop cockpit for `dsh web`: tray-resident background tasks, token/cost tracking with budget alarms, runtime auto-update with rollback, Quick Ask hotkey, scheduled tasks, full-text session search.

## Browser & Remote

- [dsh-browser-panel](https://github.com/dsh-external/dsh-browser-panel) - Headed browser embedded in the WebUI, model-driven (Codex-style, zero vision deps).
- [dsh-builtin-browser](https://github.com/wqty123/dsh-browser) - Shared real browser for DSH: a visible browser window the human can take over, driven by the agent over CDP (snapshot/execute/content/tab management).
- [dsh-browser](https://github.com/dsh-external/dsh-browser) - Chrome sidebar extension.
- [dsh-deeplink](https://github.com/dsh-external/dsh-deeplink) - Open DSH WebUI sessions or workspaces directly from URL parameters.
- [dsh-remote](https://github.com/flymysql/dsh-remote) - Multi-machine remote workspace: manage many SSH hosts, pick a local or remote workspace in the native Add-workspace flow (system folder / path browse), mirror a remote workspace to a real local folder, and operate it with rw_* tools.
- [dsh-ssh](https://github.com/jmcc-guo/dsh-ssh) - AI-managed SSH connections with a live multi-tab terminal panel for DeepSeek Harness.
- [dsh-lan-access](https://github.com/Leon0555/dsh-lan-access) - LAN access for the Web GUI: 0.0.0.0 bind plus a crypto.randomUUID polyfill for non-secure (LAN HTTP) contexts (npm: dsh-lan-access).
- [ego-browser](https://github.com/dsh-external/ego-browser) - Browser agent.
- [dsh-webbridge](https://github.com/dsh-external/dsh-webbridge) - Web bridge.
- [browser4-dsh](https://github.com/dsh-external/browser4-dsh) - Browser4 AI-native browser engine (skills).
- [dsh-browser-runtime](https://github.com/anweat/dsh-browser) - Self-contained browser runtime plugin: Playwright (chromium) + OpenCLI as plugin-local deps (global reuse fallback), exposes a `browser` service and interactive browser tools.
- [dsh-computer-use](https://github.com/ZRui-C/dsh-computer-use) - Text-first computer use: background Chromium control via Playwright/CDP plus accessibility-first macOS control; actions stay pinned to the correct process and window without taking the user's pointer (Developer ID signed, notarized Universal 2 DMG).


## Models & Inference

- [dsh-vision](https://github.com/dsh-external/dsh-vision) - Vision bridge: view_image tool over any OpenAI-compatible VLM (Zhipu free tier by default).
- [dsh-plugin-vision](https://github.com/tdf1995/dsh-plugin-vision) - Vision for text-only LLMs: image description / OCR / VQA via free Gemini and GLM vision APIs.
- [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) - Free vision for text-only agents: built-in keyless vision chain plus pixel tools (Q&A, grounding, crop, pixel diff, colors, OCR, SVG trace, cutout, screenshots); paste an image and it just works — no Python, one-command install.
- [dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) - DeepSeek brain + automatic image transcription: attach images in the GUI and each one is transcribed to text via any OpenAI-compatible VLM before reaching the text-only DeepSeek — a keyed fast path (default qwen3.7-flash; DashScope/Zhipu/OpenRouter or any OpenAI-compatible endpoint) with your own key, or local Ollama auto-detected with zero config.
- [DSH-Multimodal](https://github.com/yauntyour/DSH-Multimodal) - Per-file-type multimodal chains: preset processing models per wildcard convert image/video/audio files into prompt tokens before they reach the text-only session model, with per-preset fallback chains and a Multimodal settings page.
- [dsh-advisor](https://github.com/dsh-external/dsh-advisor) - Second model passively reviews each turn and injects notes.
- [dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) - Blocking safety gate: a stronger model rules allow/deny/ask on risky tool calls, enforced by the tool executor rather than by prompt. Optional BlockRun x402 route for 67 models, paid per request from a wallet.
- [dsh-llm-fallbacks](https://github.com/dsh-external/dsh-llm-fallbacks) - Role-based LLM retry/fallback strategy.
- [dsh-pi-adapter](https://github.com/dsh-external/dsh-pi-adapter) - ExtensionAPI bridge for pi.
- [dsh-a2a](https://github.com/dsh-external/dsh-a2a) - Agent2Agent mesh.
- [dsh-plugin-acn](https://github.com/acnlabs/dsh-plugin-acn) - Join ACN from DeepSeek Harness: register this agent, discover others, send messages, read the inbox. Defaults to the China region.
- [dsh-acp](https://github.com/dsh-external/dsh-acp) - Client-neutral ACP adapter.
- [deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) - ACP profile plugin and standalone server that exposes the full DSH agent to Zed and other ACP clients while reusing DSH credentials, sessions, and MCP configuration.
- [dsh-mnemon](https://github.com/dsh-external/dsh-mnemon) - Mnemonic layer.
- [dsh-slice-agent-loop](https://github.com/dsh-external/dsh-slice-agent-loop) - Drop-in agent loop with bounded-slice context engine (cordis).
- [savemoneybenchmark](https://github.com/dsh-external/savemoneybenchmark) - Cost-reduction benchmark (examples + skills).
- [dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) - MCP server exposing Harness agent: any MCP client (e.g. Hermes) drives Harness as its 'arms'.
- [dsh-subagent-tools](https://github.com/lynx-gt/dsh-subagent-tools) - Per-call model / provider / persona / toolFilter overrides for subagent delegation, @preset: references, provider/model composite ids (bundle, no patched files).
- [dsh-subagent-cwd](https://github.com/lynx-gt/dsh-subagent-cwd) - Extends dsh-subagent-tools with a per-call cwd for subagents and the two in-process provider patches it requires.
- [dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) - Per-subagent LLM provider/model selection with role templates (subagent_role tool).
- [dsh-subscription-auth](https://github.com/Khellendros97/dsh-subscription-auth) - Subscription OAuth login: use ChatGPT/Claude/Grok/Kimi subscription accounts (not API keys) with automatic model discovery.
- [dsh-llm-oauth](https://github.com/ziyou979/dsh-llm-oauth) - OAuth / subscription-plan LLM login (Grok, GitHub Copilot, OpenAI Codex, Anthropic, OpenRouter): durable credential store with on-request token refresh, no repo patches (Grok/Copilot verified; use Codex with caution).
- [loongport-dsh](https://github.com/SailingLoong/loongport-dsh) - Multi-site relay provider setup: signed provider directory (identity, URLs, models), Settings → LoongPort page for provider and manual API key configuration, OpenAI-compatible routes (npm: loongport).
- [dsh-llm-fallback](https://github.com/Visol-456/dsh-llm-fallback) - Provider fallback chain: the request head is never rewritten (your picked model stays); on switchable failure it retries through the configured backup targets in order, with a Web UI settings panel.
- [dsh-smart-route](https://github.com/Semidia/dsh-smart-route) - Smart provider routing: composer-button one-click enable/disable, any channel error (including 4xx) auto-falls-back to the next channel, chain names shown in the model selector without exposing internal channels/models, multi-chain management with settings UI.
- [dsh-sampling-sliders](https://github.com/Semidia/dsh-sampling-sliders) - Composer sampling panel: temperature / maxTokens sliders with hot-apply and persist-to-file modes, applied to every provider via the agent/request hook.
- [dsh-service-control](https://github.com/Semidia/dsh-service-control) - Restart & shutdown buttons in the sidebar footer: graceful appExit shutdown, auto-restart of `dsh web` via a detached helper process.
- [dsh-output-styles](https://github.com/PerryLink/dsh-output-styles) - Runtime-switchable model output styles with Claude Code outputStyles parity: a /style command, per-session persistence, systemPrompt injection, and a web picker.
- [NOirBRight/dsh-llm-ollama](https://github.com/NOirBRight/dsh-llm-ollama) - Ollama Cloud native chat adapter: registers an `ollama-cloud` LLM route with native model discovery (context windows, vision, thinking, tools) and web search/fetch providers.
- [dsh-llm-inspector](https://github.com/cdxiaodong/dsh-llm-inspector) - Unified LLM request/response inspector: reasoning-effort tuning, external-think export, traffic & bundle analysis.

## Git & Engineering

- [dsh-git-identity](https://github.com/dsh-external/dsh-git-identity) - Pin Git commit authorship to the environment identity (gh account + noreply email).
- [dsh-gh-bridge](https://github.com/dsh-external/dsh-gh-bridge) - Bridge macOS Keychain GitHub token into sandboxed gh.
- [dsh-tool-github](https://github.com/NEAZ71eve/dsh-tool-github) - GitHub REST API tools + browser sidebar panel: repos, search, issues, PRs, comments, account binding, and one-click workspace integration.
- [dsh-atomgit](https://github.com/xiongjiamu/dsh-atomgit) - AtomGit plugin bundle for DeepSeek Harness: atomgit-skills workflows (plan/implement/review/merge issues & PRs), ag CLI, and platform-hosted GitCode MCP tools.
- [deepseek-harness-action](https://github.com/Lixiaoyiao/deepseek-harness-action) - GitHub Action that runs DeepSeek Harness for pull request review, CI diagnosis, trusted fixes, and issue-to-PR implementation.
- [dsh-auto-blame](https://github.com/dsh-external/dsh-auto-blame) - Auto blame.
- [dsh-bash-rtk](https://github.com/DeepTrial/dsh-bash-rtk) - Routes eligible bash commands through rtk (Rust Token Killer) inside the DSH bash executor to compress tool output and save tokens; safe passthrough when rtk is absent.
- [dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) - Structured Git tools (status/diff/log/branch/stage/commit/stash/show) with a destructive-command guard.
- [dsh-plugin-check](https://github.com/dsh-external/dsh-plugin-check) - Plugin health checks (manifest/patch format/build pitfalls/hub status).
- [dsh-ops-skill](https://github.com/dragon43pp/dsh-ops-skill) - Read-only DSH runtime reliability kit: versioned redacted state contracts, protected snapshots, review-oriented upgrade diffs, and isolated regression checks; no privileged Docker default. *Folder-based Skill; not a DSH profile bundle.*
- [dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) - Redacts supported secret patterns from the `session-telemetry/record` export copy before configured telemetry backends receive it.
- [dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) - Writes local JSONL summaries of per-turn tool counts and coarse verification signals without storing prompts, tool arguments, or result text.
- [dsh-inspect](https://github.com/dsh-external/dsh-inspect) - Adversarial checkup → fix → review loop.
- [hermes-dsh-collab](https://github.com/Cavan-Ou/hermes-dsh-collab) - Hook DeepSeek Harness into a Hermes pipeline: dispatch-spec template, model-tier routing, orchestrator-run quality gates, git single-writer rule, as a SKILL.md pack (bundle installable).
- [dsh-alphasolve](https://github.com/dsh-external/dsh-alphasolve) - AlphaSolve workflow.
- [mstar-workflow](https://github.com/dsh-external/mstar-workflow) - Workflow engine.
- [dsh-spur](https://github.com/dsh-external/dsh-spur) - Task engine.
- [dsh-involute](https://github.com/dsh-external/dsh-involute) - Embedded task-management engine.
- [dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) - Incremental diff reviewer: checkpoint-based since-review queue with a Web UI panel, /review command, and feedback injection into the agent.
- [dsh-test-runner](https://github.com/suimi8/dsh-test-runner) - Structured test runner tool (test_run): auto-detect Vitest/Jest/pytest/node:test, run tests, parse failure summaries for the model.
- [dsh-git-branch-switcher](https://github.com/mixin-ai/dsh-git-branch-switcher) - Session-header Git branch pill: shows the current workspace branch and switches branches from the Web UI.
- [dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) - Engineering-discipline loop: requirement grilling before edits, red/green test-evidence gates, adversarial delivery review, and a report with per-dimension verification.
- [dsh-plugin-diff-review](https://github.com/Civitasv/dsh-plugin-diff-review) - Codex-style diff review in a floating panel: per-round session changes plus a git workspace view with stage/revert/commit/push and a history timeline.
- [dsh-yolo-mode](https://github.com/SeverusZh/dsh-yolo-mode) - LLM auto-approval for sandbox escalation requests: presets, per-tool levels, fail-closed.
- [dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) - Second-model AI auto-review on the approval answerer chain: a read-only reviewer subagent returns structured allow/deny verdicts with reasons, fail-closed by default.
- [dsh-plugin-scheduled-tasks](https://github.com/Ceelog/dsh-plugins/tree/main/src/plugins/dsh-plugin-scheduled-tasks) - Run per-project prompts in fresh headless agent sessions on one-time, interval or cron schedules, with durable run history.
- [dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) - Declarative allow/deny/ask permission rules on the tools/pre-execute waterfall: tool/argument/path/agent matching, session-log audit, dry-run mode, hot reload.
- [dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) - Claude Code /rewind for DSH: git-first workspace snapshots before every mutating tool, turn-boundary session forks, and a one-shot /rewind command that restores files and forks the session back to a checkpoint.
- [dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) - LSP action surface: diagnostics, formatting, completion, code actions, symbols, signature help, inlay hints, and rename tools over real language servers.
- [dsh-git-status](https://github.com/Wongzexu/dsh-git-status) - Specialized in Git branch and status handling: a Git status drawer with a commit DAG lane graph, uncommitted changes/stash rows, inline diffs, and right-click branch/tag operations.
- [dsh-orcana](https://github.com/Leo-Ayh-Oday/dsh-orcana) - Runtime-governance bundles for zero-progress steering, evidence-fresh completion gates, capability disclosure, and Linux sandbox hardening with resource limits, network isolation, fail-closed degradation, and bounded audit logs.
- [Starfie1d1272/dsh-github-skills](https://github.com/Starfie1d1272/dsh-github-skills) - Skill-first GitHub workflows for DSH covering PR triage, review feedback, GitHub Actions diagnosis, and safe draft-PR publishing over existing capabilities.

## Output & Deliverables

- [folio](https://github.com/nyantused-cpun/folio) - Consulting document-generation engine (intake → memory → methodology → deliverable → proof) as a native DSH plugin stack: 15 tools, session-protocol events, L0 guard, agent preset; swappable methodology packs, zero-key start under DSH.

- [dsh-report-studio](https://github.com/ciceroyang/dsh-report-studio) - Turn a DeepSeek Harness session into deliverable work reports (daily/weekly/handoff/article) with verifiable receipts.


- [plugin-session-export](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-session-export) - Export the append-only session log as human-readable Markdown or HTML, grouped by trajectory source.
- [dsh-xiaohongshu-viral-note](https://github.com/xuboboo/dsh-xiaohongshu-viral-note) - Bundled Xiaohongshu/RED viral-note agent skill: hot-note research, note generation/rewrite, verification, authorized account analysis, QR login and controlled publishing.

## Notifications & Channels

- [dsh-feishu-bot](https://github.com/dsh-external/dsh-feishu-bot) - Feishu bot.
- [dsh-feishu-notify](https://github.com/dsh-external/dsh-feishu-notify) - Feishu notifications (session end / input needed).
- [dsh-lark-meeting-notifier](https://github.com/yeruizhi/dsh-lark-meeting-notifier) - Feishu meeting reminder: a right-side floating panel listing today's/tomorrow's Feishu meetings with multi-alarm flashing reminders.
- [telegram](https://github.com/dsh-external/telegram) - Channel integration for Telegram.
- [dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) - Telegram mobile remote for live DSH Web sessions: `/sessions` picker, bind/unbind, same trajectory as desktop (Codex-style).
- [harness-remote](https://github.com/Hyna-hla/harness-remote) - Third-party mobile remote client for DSH: connect to the PC service over LAN or cpolar (QR auto-connect), stream chat with approval banners, background push notifications, model/permission switching.
- [tg-bot](https://github.com/dsh-external/tg-bot) - Telegram bot.
- [qqbot](https://github.com/dsh-external/qqbot) - QQ bot.
- [dsh-wecom-bot](https://github.com/dsh-external/dsh-wecom-bot) - WeCom bot.
- [dsh-weixin-bot](https://github.com/dsh-external/dsh-weixin-bot) - WeChat bot.
- [dsh-im-hub](https://github.com/ThreeBody6666/dsh-im-hub) - Multi-platform IM gateway: Feishu (Lark) WebSocket long connection (no public URL), WeCom AES-encrypted callbacks, Telegram long polling; per-chat agent sessions, whitelist access, visual settings card.
- [dsh-im-bridge](https://github.com/MHfire/dsh-im-bridge) - WeCom (WeChat Work) channel bridge: WebSocket long connection (no public URL), in-process agents with per-sender persistent sessions visible in the Web GUI, customizable persona, streaming progress animation.
- [DSH-WX-Msg-Tool](https://github.com/yauntyour/DSH-WX-Msg-Tool) - WeChat ClawBot/iLink channel plugin: QR login in DSH Web, message send/poll/status tools, background polling, and optional per-sender persistent DSH sessions that automatically reply through WeChat.
- [super-wechat-bridge](https://github.com/Qshuai0213/super-wechat-bridge) - WeChat iLink ClawBot bridge: official Tencent iLink protocol, Web UI settings (QR login / model / preset / permissions / session management with delete), 24h auto-renewal pushes a fresh QR before expiry, zero downtime.
- [dsh-voice-chat](https://github.com/dsh-external/dsh-voice-chat) - Voice chat.
- [dsh-web-ui-notify](https://github.com/dsh-external/dsh-web-ui-notify) - WebUI notifications.
- [dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) - Windows notifications, zero dependencies.
- [dsh-ica](https://github.com/dsh-external/dsh-ica) - ICalingua frontend.
- [dsh-opencode-server](https://github.com/dsh-external/dsh-opencode-server) - Smooth TUI via opencode attach.
- [dsh-teamwork](https://github.com/dsh-external/dsh-teamwork) - Team collaboration (cordis).

- [plugin-notify](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-notify) - IM webhook + local notifications on turn completion / errors / approval requests (Feishu, WeCom, DingTalk, Slack, Discord, custom).
- [dsh-monitor](https://github.com/AbnerAI/dsh-monitor) - Persistent background watchers (file inbox / command output) that wake the agent on new messages; the harness analog of Claude Code's Monitor tool.

## Fun & Lifestyle

- [dsh-clippy](https://github.com/sjh9714/clippy-harness) - Clippy revived as an office assistant pet that reacts to real agent state, with a classic "illegal operation" dialog on failed turns.
- [dsh-agent-rp](https://github.com/dsh-external/dsh-agent-rp) - SillyTavern migration and next-generation agent roleplay for DSH.
- [dsh-emoji](https://github.com/dsh-external/dsh-emoji) - Emoji plugin (cordis).
- [dsh-travel-plugin](https://github.com/dsh-external/dsh-travel-plugin) - Travel plugin.
- [dsh-weather](https://github.com/sunshine-lang/dsh-weather) - Weather tool: current conditions and multi-day forecasts via Open-Meteo (free, no API key).
- [dsh-pdf](https://github.com/sunshine-lang/dsh-pdf) - PDF toolbox: extract text, metadata, and page ranges via pdfjs-dist (local, no API key).
- [dsh-ui-whale](https://github.com/dsh-external/dsh-ui-whale) - Pixel whale companion (blink/tail/spout/hearts).
- [dsh-pet](https://github.com/FlytoMAYDAY80/dsh-pet) - Desktop whale pet with live session state.
- [dsh-pet-rs](https://github.com/dsh-external/dsh-pet-rs) - Desktop pet, Rust edition.
- [dsh-stickers](https://github.com/dsh-external/dsh-stickers) - Stickers.
- [dsh-ads](https://github.com/dsh-external/dsh-ads) - 2005 Chinese-web-style ad layer (joke plugin).
- [dsh-gomoku](https://github.com/dsh-external/dsh-gomoku) - Gomoku (five-in-a-row).
- [dsh-qq2006](https://github.com/dsh-external/dsh-qq2006) - QQ2006 skin.
- [dsh-lazyfish](https://github.com/dsh-external/dsh-lazyfish) - Slack-off panel (feed + Bilibili player).
- [dsh-tavern-plugin](https://github.com/dsh-external/dsh-tavern-plugin) - Tavern character cards.
- [dsh-sfw](https://github.com/dsh-external/dsh-sfw) - Safety filter.
- [ui-status-label](https://github.com/dsh-external/ui-status-label) - Custom status labels for the whale's deep-diving (cordis).
- [dsh-digipet](https://github.com/swaylq/dsh-digipet) - Digimon-style raising pet: hatches from an egg, feeds on real work (turns, tools, errors), and evolves along four lines shaped by how you work; zero tokens, command-only.
- [dsh-wildmon](https://github.com/swaylq/dsh-wildmon) - Pokemon-style catch-em-all: turns, tools and errors spawn wild encounters; throw balls, fill a 28-slot dex, team of six; zero tokens, command-only.

- [xiekai886/dsh-MusicPlayer](https://github.com/xiekai886/dsh-MusicPlayer) - A collapsible/expandable draggable floating music player with NetEase Cloud Music playlist import and song/artist search; chat and listen at the same time.

## Infrastructure & Development

- [dsh-plugin-starter](https://github.com/ciceroyang/dsh-plugin-starter) - Scaffold a battle-tested DSH plugin (bundle, tool, runtime skill, tests, CI) in one command, zero dependencies.
- [dsh-doctor](https://github.com/ciceroyang/dsh-doctor) - One-command local environment health check for DSH: node/pnpm/dsh versions, port 3080, DSH_HOME writability, profile manifests, session logs, zstd.
- [Code2Skill](https://github.com/leechen298/Code2Skill) - Generate Functions, MCP tools, workflow Skills, and offline test packages from user-authorized source code.
- [dsh-movein](https://github.com/sjh9714/dsh-movein) - Move a whole Claude Code setup into DSH in one command: skills, MCP servers, hooks, subagents and permission rules, with a dry-run moving estimate, a migration diff report, and a movein_from_claude_code agent tool.
- [dsh-observation-journal](https://github.com/Cavan-Ou/dsh-observation-journal) - Zero-touch runtime telemetry for DSH: every session auto-writes task, model tier, tools, failures, duration, status into a human-readable journal with a stats section (pure observer — no tools, no LLM calls, no injection).
- [deepseek-harness-desktop](https://github.com/Easyhoov/deepseek-harness-desktop) - Unofficial in-process Windows desktop app with tray residency, native notifications, and an IPC bridge.
- [sandbase-harness](https://github.com/sandbaseai/sandbase-harness) - Persistent managed-agent runtime for DSH via a native bundle and stdio MCP, with sandboxed sessions, audit, and replay.
- [sandbase-skills](https://github.com/sandbaseai/sandbase-skills) - Verified SKILL.md catalog and installer with 88 installable skill bundles for DSH and compatible agents.
- [dsh-hmz](https://github.com/dsh-external/dsh-hmz) - Placeholder repository; description pending.
- [dsh-interpreters](https://github.com/dsh-external/dsh-interpreters) - Interpreter plugin (cordis).
- [dsh-notebooks](https://github.com/dsh-external/dsh-notebooks) - Notebooks plugin (cordis).
- [dsh-plugin-radar](https://github.com/dsh-external/dsh-plugin-radar) - Daily DSH plugin compatibility radar, renamed from dsh-external-research.
- [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) - Always-on dependency security monitoring for DSH plugins: exact installed paths, OSV vulnerabilities, npm releases, and compatibility signals routed to a project-aware DSH Agent.
- [dsh-scout](https://github.com/dsh-external/dsh-scout) - Scout plugin (cordis).
- [dsh-share](https://github.com/dsh-external/dsh-share) - Share DSH conversations.
- [dsh-sonar](https://github.com/dsh-external/dsh-sonar) - Sonar plugin (cordis).
- [dsh-workloads](https://github.com/yewenyell-lang/dsh-workloads) - Workspace-owned durable process supervision, readiness checks, and a Runtime Center for DeepSeek Harness.
- [plugin-registry](https://github.com/dsh-external/plugin-registry) - Plugin console + make-dsh-plugin skill + dev guide.
- [dsh-plugin-manager-registry](https://github.com/Jesse-njx/dsh-plugin-manager-registry) - Offline-tolerant registry that discovers and deduplicates DSH plugins from awesome lists, GitHub topics, and npm.
- [marisa](https://github.com/dsh-external/marisa) - External plugin manager (parasitic install/CLI/settings panel).
- [hub](https://github.com/dsh-external/hub) - Org-wide index + unified catalog.json (CI-generated).
- [dshx-update-check](https://github.com/dsh-external/dshx-update-check) - Plugin update checker.
- [toybox](https://github.com/dsh-external/toybox) - MCP plugin collection (almanac/bug-tamer/naming master/time capsule, etc.).
- [dsh-github-integration](https://github.com/dsh-external/dsh-github-integration) - GitHub integration plugin.
- [dsh-super-injector](https://github.com/dsh-external/dsh-super-injector) - Super-injector (cordis).
- [dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) - MCP server manager: Settings page with OAuth (PKCE + dynamic client registration) or static-token auth; tools registered as mcp__<name>__*.
- [dsh-doctor](https://github.com/asdf17128/dsh-doctor) - Profile health check: finds config fields a patch dropped by whole-config replacement, patches targeting missing entry ids, and tool-name collisions.
- [dsh-session-repair-ui](https://github.com/Semidia/dsh-session-repair-ui) - Session repair button in the conversation header: detects & fixes session-log corruption — tool-call id swaps, empty call ids (`message must have tool source`), unknown event types from disabled plugins (marks `ignorable`), torn zstd tails, missing final-frame newlines; ghost-style UI, auto-backup before writes.
- [dsh-plugin-help](https://github.com/Semidia/dsh-plugin-help) - Installed-plugins README summary panel: floating 📖 button, zh-preferring titles, default-all-expanded READMEs, blue circular index badges, per-plugin one-click update (`dsh plugin update`) via a loopback endpoint.
- [dsh-portable-launcher](https://github.com/15828148/dsh-portable-launcher) - One-click portable Windows launcher for the dsh Web UI: auto-installs Node.js and dsh, CN mirror fallback, retries and resume.
- [dsh-desktop-launcher](https://github.com/becomeless/dsh-desktop-launcher) - Windows desktop launcher: double-click to start dsh Web with zero console windows, auto-stop on close, session resume, one-line install.
- [dsh-quickstart](https://github.com/qzhqzh/dsh-quickstart) - Windows desktop launcher (zero-dependency npm CLI): double-click a desktop shortcut to start dsh web with zero console windows and auto-open the browser once ready.
- [dsh-win32](https://github.com/sjh9714/dsh-win32) - Real Minimal mode on Windows: the missing win32 process inspector (persistent Git Bash shell), Ctrl-C interrupt injection, and an install-trap doctor.
- [dshp](https://github.com/asdf17128/dshp) - Profile manager: list, create, clone and diff profiles, and export a whole setup (bundle order, plugin versions, patch) as one portable file.
- [dsh-recommend](https://github.com/zp-home/dsh-recommend) - Transparent plugin rankings and recommendations: daily auto-fetched dsh-plugin topic data, open scoring model, rank/search/recommend tools and a settings-page leaderboard.
- [dsh-eval](https://github.com/hccccc01333/dsh-eval) - Agent evaluation platform: benchmark YAML, headless dsh runs, trace-based metrics, scripted grading, and run compare/report.
- [dsh-session-cleaner](https://github.com/fountunt/dsh-session-cleaner) - Delete sessions from a running web runtime: live store, workspace records, and on-disk artifacts (no restart needed).
- [dsh-session-cleaner-cli](https://github.com/ChenChen913/dsh-session-cleaner-cli) - Offline CLI that deep-cleans workspace sessions: interactive/batch delete with trash + restore + backups, workspace-registry and projection-cache sync, ghost-entry pruning. Companion to the runtime delete plugin.
- [dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) - Read-only runtime management panel for the official DSH MCP client: connection status, registered tools, errors and reconnect counts via the /mcp command and a Settings tab, with sanitized display and enable/disable patch suggestions.
- [dsh-passwords](https://github.com/slywalker2006/dsh-passwords) - Login gateway for the DSH web UI: first-run setup, bcrypt + at-rest encryption (AES-256-GCM/HMAC), brute-force lockout, audit log, TLS 1.2+ with 80→443 redirect, CSRF and anti-framing headers.

- [easyeda-agent](https://github.com/zhoushoujianwork/easyeda-agent) - EasyEDA Pro automation: Go daemon + in-app connector + agent skill + stdio MCP server for typed schematic/PCB actions, workflow gates, and DRC.
- [dsh-adb](https://github.com/SamXiaBing/dsh-adb) - ADB device & bench operations: device discovery, structured logcat (background streaming), apk install, file pull/push, dumpsys performance snapshots.
- [dsh-restart](https://github.com/anweat/dsh-restart) - Restart DSH: configurable restart method (Node native / legacy PowerShell), post-restart continue prompt, optional watchdog auto-relaunch.


- [dsh-suite](https://github.com/whyihaveyou/dsh-suite) - Living DSH plugin directory (785+ plugins, refreshed hourly) with a daily compatibility CI, a bilingual searchable catalog site, and an in-app plugin store.
- [create-dsh-plugin](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/create-dsh-plugin) - Scaffold a DSH plugin in seconds (tool / events / webui templates, `next`-tag version pinning, built-in `--verify` smoke test).
- [plugin-manager](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-manager) - In-app plugin store for the DSH Web UI: browse, search, one-click install, compat badges, installed list.
- [plugin-team-board](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-team-board) - Shared multi-agent task board (create / claim / transition / query) over a Cordis service key.

- [dsh-tray](https://github.com/KAIbsb/dsh-tray) - Windows tray manager for DSH Web: start/restart/stop, crash auto-restart, status icon, and autostart.
- [mirage-dsh](https://github.com/strukto-ai/mirage/tree/main/typescript/packages/dsh) - Swaps the filesystem and bash providers for a mirage virtual workspace: file tools and shell commands run over mounted resources (RAM, S3, Redis, Slack, Gmail, Notion, Postgres) instead of the host disk, with per-mount read/write/exec modes, per-command sandbox routing (monty, pyodide, quickjs in process; docker, e2b, daytona remote), and installed CLIs (git, gh, slack, linear, ntn, gws, or one you register) as head words in the virtual terminal.
- [dsh-genie](https://github.com/swaylq/dsh-genie) - Promote a `cordis_define` dynamic package into a real installed bundle that survives restart; writes the package and registers the profile layer without pnpm, network, or a build authorization.
- [dsh-chat-tools](https://github.com/yj060464-commits/dsh-chat-tools) - Headless terminal companion toolkit: chat.sh continuous-conversation REPL (rolling context, decision-point voting, live workflow streaming, effort switching) + automatic LLM session-log summarization. Zero-dependency bash + Python.

- [dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) - Plugin-development knowledge base as an on-demand agent skill: official constraints, task workflows, API references, and community pitfalls.
- [awesome-dsh](https://github.com/stakeswky/awesome-dsh) - Auto-updating catalog of the whole `dsh-plugin` topic (2600+ repos): a Cloudflare Worker recrawls every 6 hours, translates English descriptions to Chinese with Workers AI, and serves a ranked search API plus an agent skill that finds and installs plugins on demand.
- [dsh-guardian](https://github.com/cdxiaodong/dsh-guardian) - Agent security guardrail: intercepts and audits every tool call, requiring human confirmation on sensitive operations.

## Data & Market

- [dsh-stock-market](https://github.com/dsh-external/dsh-stock-market) - Shanghai and Shenzhen A-share market data plugin.
- [dsh-us-stocks](https://github.com/Realyujie/dsh-us-stocks) - US stock quotes, price history, financial statements, analyst consensus and news via yahoo-finance2.

## Science & Research

- [dsh-openmaic](https://github.com/dsh-external/dsh-openmaic) - Generate interactive OpenMAIC AI classrooms.
- [dsh-science](https://github.com/biociao/dsh-science) - Claude Science-style research workbench: ReAct research-loop engine (research_* tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for genomics/pathogens/bioinformatics.
- [dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) - Complete reverse-skill pack (85 SKILL.md) as a DeepSeek Harness Cordis plugin: reverse engineering, authorized pentesting and security-research skill router.
- [dsh-grok-geo](https://github.com/xuboboo/dsh-grok-geo) - GEO brand audit skill bundle: AI-search visibility, recommendations, citations, competitor presence and content-gap diagnosis across 17+ AI engines (ChatGPT/Perplexity/Claude/豆包/DeepSeek/Kimi/文心一言).
- [dsh-rigorquant](https://github.com/linxichen/dsh-rigorquant) - Agent preset + skill for unattended empirical/computational mathematics research (econ/finance/portfolio): walled multi-agent exploration, dual-track ground-truth derivation, adversarial counterexample-only audit, four-part pre-implementation check battery, and a jacobian/Lean escalation lane.
- [dsh-wuyun-liuqi](https://github.com/dhicoc/dsh-wuyun-liuqi) - Complete wuyun-liuqi (five-evolutions-six-qi / 五运六气) Traditional Chinese Medicine skill pack as a DeepSeek Harness Cordis plugin: annual and guest-qi calculation, clinical pattern differentiation, and pathogenesis reasoning.
- [dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) - Academic writing guard: local-regex linter for revision-process residue, defensive writing and AI-writing tells (em-dash abuse, not-X-but-Y, LLM word spikes, rule of three); writing_audit + writing_rules with incremental auto-audit on paper file writes.

## Related

- [dsh-external/issues](https://github.com/dsh-external/issues) - Issue aggregation hub.
- [dsh-meme-hub](https://github.com/the-beating-light-of-the-nail/dsh-meme-hub) - Curated navigation of community meme plugins (skins, desktop pets, mini-games), bilingual.
- [DeepSeek Harness Handbook](https://github.com/sandbaseai/deepseek-harness-handbook) - Agent-first, source-backed guide to running, extending, and troubleshooting DSH, with multilingual navigation and a downloadable field guide.
- [DeepSeek](https://deepseek.com) - Official site.

### Friendly links

- [DeepSeek Harness Desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) - Modern desktop client for the DSH ecosystem: launch and manage a local Harness without configuring Node.js or running commands; plugin marketplace, mobile remote control and IM channels planned. [Website](https://www.dshdesktop.cn)

## Contributing

Please have a look at [contributing.md](contributing.md). Entry standard: repository + one-line description + link; the curated list is maintained by hand, the full index lives in hub.

## Thanks

Thanks to the [Linux Do community](https://linux.do/) for the support and exchange.
