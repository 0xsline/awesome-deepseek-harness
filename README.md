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
- [Recently Added](#recently-added)
- [Core & Official](#core--official)
- [Context & Search](#context--search)
- [Input & Editing](#input--editing)
- [UI & Experience](#ui--experience)
- [Browser & Remote](#browser--remote)
- [Models & Inference](#models--inference)
- [Git & Engineering](#git--engineering)
- [Notifications & Channels](#notifications--channels)
- [Fun & Lifestyle](#fun--lifestyle)
- [Infrastructure & Development](#infrastructure--development)
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

## Recently Added

- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) - See exactly what every request carries: token cost of the AGENTS.md chain, skill catalog and tool schemas, with duplicate/conflict detection and actionable pruning tips (Web UI gauge + context_audit tool).
- [dsh-agent-rp](https://github.com/dsh-external/dsh-agent-rp) - SillyTavern migration and next-generation agent roleplay for DSH.
- [dsh-aigc-canvas](https://github.com/dsh-external/dsh-aigc-canvas) - AIGC canvas plugin (cordis).
- [dsh-better-sidebar-plugin-office](https://github.com/dsh-external/dsh-better-sidebar-plugin-office) - Office integration for DSH-better-sidebar.
- [dsh-cot-summary](https://github.com/dsh-external/dsh-cot-summary) - External Summary-CoT plugin workspace.
- [dsh-deepcel](https://github.com/dsh-external/dsh-deepcel) - Deepcel spreadsheet skin and standalone distribution.
- [dsh-deeplink](https://github.com/dsh-external/dsh-deeplink) - Open DSH WebUI sessions or workspaces directly from URL parameters.
- [dsh-deepresearch](https://github.com/dsh-external/dsh-deepresearch) - DeepResearch plugin (cordis).
- [dsh-diff-viewer](https://github.com/dsh-external/dsh-diff-viewer) - PiUI-style Web diff viewer replacing the default diff view.
- [dsh-emoji](https://github.com/dsh-external/dsh-emoji) - Emoji plugin (cordis).
- [dsh-explain](https://github.com/dsh-external/dsh-explain) - Learning mode that explains each agent step (WIP).
- [dsh-hmz](https://github.com/dsh-external/dsh-hmz) - Placeholder repository; description pending.
- [dsh-interpreters](https://github.com/dsh-external/dsh-interpreters) - Interpreter plugin (cordis).
- [dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) - Feynman learning-mode plugin: teach → teach-back → judge → re-explain loop rendered as rich HTML lesson cards (mermaid diagrams + shiki code highlighting).
- [dsh-mobile](https://github.com/dsh-external/dsh-mobile) - Mobile client plugin (cordis + dsh.plugin.json).
- [dsh-notebooks](https://github.com/dsh-external/dsh-notebooks) - Notebooks plugin (cordis).
- [dsh-openmaic](https://github.com/dsh-external/dsh-openmaic) - Generate interactive OpenMAIC AI classrooms.
- [dsh-openpencil](https://github.com/dsh-external/dsh-openpencil) - OpenPencil design preview and editing plugin.
- [dsh-plugin-radar](https://github.com/dsh-external/dsh-plugin-radar) - Daily DSH plugin compatibility radar, renamed from dsh-external-research.
- [dsh-scout](https://github.com/dsh-external/dsh-scout) - Scout plugin (cordis).
- [dsh-share](https://github.com/dsh-external/dsh-share) - Share DSH conversations.
- [dsh-sonar](https://github.com/dsh-external/dsh-sonar) - Sonar plugin (cordis).
- [dsh-stock-market](https://github.com/dsh-external/dsh-stock-market) - Stock market data plugin.
- [dsh-suggested-replies](https://github.com/dsh-external/dsh-suggested-replies) - Suggested replies above the DSH Web composer.
- [dsh-travel-plugin](https://github.com/dsh-external/dsh-travel-plugin) - Travel plugin.
- [dsh-turn-navigator](https://github.com/dsh-external/dsh-turn-navigator) - DSH Web turn navigation plugin.
- [dsh-ultra-ui](https://github.com/dsh-external/dsh-ultra-ui) - Ultra UI plugin (cordis).
- [dsh_workflow](https://github.com/dsh-external/dsh_workflow) - Dynamic workflow for DSH (placeholder).

## Core & Official

- [dsh-plan-execute](https://github.com/dsh-external/dsh-plan-execute) - Dual-model plan/execute routing: planner model thinks, executor model acts.
- [dsh-toolkit](https://github.com/dsh-external/dsh-toolkit) - Official tool suite (calculator/csv/diff/encoding/json/markdown/regex/time).
- [dsh-deep-research](https://github.com/dsh-external/dsh-deep-research) - Adaptive deep-research orchestrator (official workflow engine).
- [dsh-101](https://github.com/dsh-external/dsh-101) - DSH documentation reading mode.
- [dsh-client-ui-plan-execute](https://github.com/dsh-external/dsh-client-ui-plan-execute) - Web Settings row for plan/execute model routing.

## Context & Search

- [billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) - Model-driven context compression (ACP) for DeepSeek Harness, ported from billion-context-pi; the model decides when and what to compress.
- [dsh-session-search](https://github.com/dsh-external/dsh-session-search) - Index-free read-only search across dsh/Codex/Claude Code/pi/OpenCode sessions.
- [cross-harness-cite](https://github.com/dsh-external/cross-harness-cite) - Cite past conversations across harnesses.
- [dsh-session-cluster](https://github.com/dsh-external/dsh-session-cluster) - Session clustering.
- [session-chatlog](https://github.com/dsh-external/session-chatlog) - Session chat logs.
- [dsh-memory-evolve](https://github.com/dsh-external/dsh-memory-evolve) - Cross-session long-term memory + background self-evolution (5-track memory/git-branch awareness/skill evolution).
- [dsh-engram-relay](https://github.com/dsh-external/dsh-engram-relay) - Built-in <1B model for 100k-equivalent long memory with causal-graph wake-up.
- [zotero-harvest](https://github.com/dsh-external/zotero-harvest) - Zotero library integration.
- [zotero-wave-rag](https://github.com/dsh-external/zotero-wave-rag) - Zotero RAG retrieval.
- [dsh-data-agent](https://github.com/dsh-external/dsh-data-agent) - Let the model connect to databases and write SQL.
- [dsh-easy-ctx-manager](https://github.com/dsh-external/dsh-easy-ctx-manager) - Context management: context saving and more (cordis).
- [dsh-kb-sieve](https://github.com/dsh-external/dsh-kb-sieve) - Knowledge-base plugin: build auditable KB packages (references + SQL).
- [dsh-payload-capture](https://github.com/moeblack/dsh-payload-capture) - Capture every upstream model API payload to JSON (debug & observability).

## Input & Editing

- [dsh-message-edit](https://github.com/dsh-external/dsh-message-edit) - Branch-based message editing / reroll / retry / version timeline.
- [dsh-prompt-studio](https://github.com/dsh-external/dsh-prompt-studio) - Edit system-prompt sections with live preview.
- [dsh-paste-input](https://github.com/dsh-external/dsh-paste-input) - Ctrl+V paste files / drag & drop / picker.
- [dsh-drag-and-drop](https://github.com/dsh-external/dsh-drag-and-drop) - Cross-platform drag & drop with original path insertion.
- [dsh-input-history](https://github.com/dsh-external/dsh-input-history) - Input history.
- [dsh-multimedia-webui-input](https://github.com/dsh-external/dsh-multimedia-webui-input) - Multimedia file/folder input.
- [dsh-office](https://github.com/dsh-external/dsh-office) - Office file read/write bundle: model edits Office files, docx/pdf preview in web client.
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) - Import Claude Code JSONL transcripts (tool history + thinking blocks) as resumable DeepSeek Harness sessions.
- [dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) - Quick sticky notes in the composer: ideas/feelings/TODO with Markdown preview, auto-save, one-click send to chat.

## UI & Experience

- [dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) - DeepSeek account balance and session cost in the DSH Web composer dock (auto-fetched official pricing, peak/off-peak support).
- [dsh-live-stats](https://github.com/dsh-external/dsh-live-stats) - Live token estimates and generation TPS.
- [dsh-view-modes](https://github.com/NigelYao/dsh-view-modes) - DSH Web output modes with Verbose, Normal, and Summary views, semantic grouping for tool calls and thinking, and live execution status.
- [dsh-tps](https://github.com/dsh-external/dsh-tps) - TPS meter.
- [dsh-cc-tui](https://github.com/dsh-external/dsh-cc-tui) - Claude Code-style fullscreen TUI (streaming expand / double-Esc rollback).
- [dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) - TUI built with grok-build.
- [dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) - Pi TUI (differential-rendering terminal framework) front end: streaming markdown, thinking collapse, tool cards, slash commands, approval/question overlays, shared dsh session store.
- [deepseek-harness-tui](https://github.com/openma-ai/deepseek-harness-tui) - Rust/ratatui terminal client that speaks the DSH SDK JSON-RPC protocol directly and runs standalone or as a profile bundle.
- [DSH-better-sidebar](https://github.com/dsh-external/DSH-better-sidebar) - Sidebar: file rendering/terminal/Git/subagents/custom APIs.
- [dsh-web-panel](https://github.com/dsh-external/dsh-web-panel) - Embedded terminal dock + Git Review + file view.
- [dsh-web-review](https://github.com/CanglongCl/dsh-web-review) - Isolated web page previews with element annotations and visual adjustments that guide source edits.
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
- [deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) - Native Windows desktop shell: 1:1 official web UI with embedded server hosting, tray and auto-recovery.
- [dsh-desktop](https://github.com/foolgry/dsh-desktop) - Download-and-run Electron desktop build (macOS/Windows installers): no Node.js or terminal needed, tracks upstream `@deepseek-ai/dsh` releases automatically, with built-in web UI and auto-update.
- [dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) - Right-side dot-timeline rail to jump between user messages.
- [dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) - Turn-index sidebar: one entry per user turn, click to jump, scroll-spy highlighting.
- [dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) - Attention reminders: frame badge, tab-title count and whale-favicon recolor for sessions waiting for input or finished unopened.

## Browser & Remote

- [dsh-browser-panel](https://github.com/dsh-external/dsh-browser-panel) - Headed browser embedded in the WebUI, model-driven (Codex-style, zero vision deps).
- [dsh-browser](https://github.com/dsh-external/dsh-browser) - Chrome sidebar extension.
- [dsh-remote](https://github.com/dsh-external/dsh-remote) - SSH remote control.
- [ego-browser](https://github.com/dsh-external/ego-browser) - Browser agent.
- [dsh-webbridge](https://github.com/dsh-external/dsh-webbridge) - Web bridge.
- [browser4-dsh](https://github.com/dsh-external/browser4-dsh) - Browser4 AI-native browser engine (skills).

## Models & Inference

- [dsh-vision](https://github.com/dsh-external/dsh-vision) - Vision bridge: view_image tool over any OpenAI-compatible VLM (Zhipu free tier by default).
- [dsh-advisor](https://github.com/dsh-external/dsh-advisor) - Second model passively reviews each turn and injects notes.
- [dsh-llm-fallbacks](https://github.com/dsh-external/dsh-llm-fallbacks) - Role-based LLM retry/fallback strategy.
- [dsh-pi-adapter](https://github.com/dsh-external/dsh-pi-adapter) - ExtensionAPI bridge for pi.
- [dsh-a2a](https://github.com/dsh-external/dsh-a2a) - Agent2Agent mesh.
- [dsh-acp](https://github.com/dsh-external/dsh-acp) - Client-neutral ACP adapter.
- [deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) - ACP profile plugin and standalone server that exposes the full DSH agent to Zed and other ACP clients while reusing DSH credentials, sessions, and MCP configuration.
- [dsh-mnemon](https://github.com/dsh-external/dsh-mnemon) - Mnemonic layer.
- [dsh-slice-agent-loop](https://github.com/dsh-external/dsh-slice-agent-loop) - Drop-in agent loop with bounded-slice context engine (cordis).
- [savemoneybenchmark](https://github.com/dsh-external/savemoneybenchmark) - Cost-reduction benchmark (examples + skills).
- [dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) - MCP server exposing Harness agent: any MCP client (e.g. Hermes) drives Harness as its 'arms'.

## Git & Engineering

- [dsh-git-identity](https://github.com/dsh-external/dsh-git-identity) - Pin Git commit authorship to the environment identity (gh account + noreply email).
- [dsh-gh-bridge](https://github.com/dsh-external/dsh-gh-bridge) - Bridge macOS Keychain GitHub token into sandboxed gh.
- [dsh-auto-blame](https://github.com/dsh-external/dsh-auto-blame) - Auto blame.
- [dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) - Structured Git tools (status/diff/log/branch/stage/commit/stash/show) with a destructive-command guard.
- [dsh-plugin-check](https://github.com/dsh-external/dsh-plugin-check) - Plugin health checks (manifest/patch format/build pitfalls/hub status).
- [dsh-inspect](https://github.com/dsh-external/dsh-inspect) - Adversarial checkup → fix → review loop.
- [dsh-alphasolve](https://github.com/dsh-external/dsh-alphasolve) - AlphaSolve workflow.
- [mstar-workflow](https://github.com/dsh-external/mstar-workflow) - Workflow engine.
- [dsh-spur](https://github.com/dsh-external/dsh-spur) - Task engine.
- [dsh-involute](https://github.com/dsh-external/dsh-involute) - Embedded task-management engine.
- [dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) - Incremental diff reviewer: checkpoint-based since-review queue with a Web UI panel, /review command, and feedback injection into the agent.
- [dsh-test-runner](https://github.com/suimi8/dsh-test-runner) - Structured test runner tool (test_run): auto-detect Vitest/Jest/pytest/node:test, run tests, parse failure summaries for the model.

## Notifications & Channels

- [dsh-feishu-bot](https://github.com/dsh-external/dsh-feishu-bot) - Feishu bot.
- [dsh-feishu-notify](https://github.com/dsh-external/dsh-feishu-notify) - Feishu notifications (session end / input needed).
- [telegram](https://github.com/dsh-external/telegram) - Channel integration for Telegram.
- [tg-bot](https://github.com/dsh-external/tg-bot) - Telegram bot.
- [qqbot](https://github.com/dsh-external/qqbot) - QQ bot.
- [dsh-wecom-bot](https://github.com/dsh-external/dsh-wecom-bot) - WeCom bot.
- [dsh-weixin-bot](https://github.com/dsh-external/dsh-weixin-bot) - WeChat bot.
- [dsh-voice-chat](https://github.com/dsh-external/dsh-voice-chat) - Voice chat.
- [dsh-web-ui-notify](https://github.com/dsh-external/dsh-web-ui-notify) - WebUI notifications.
- [dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) - Windows notifications, zero dependencies.
- [dsh-ica](https://github.com/dsh-external/dsh-ica) - ICalingua frontend.
- [dsh-opencode-server](https://github.com/dsh-external/dsh-opencode-server) - Smooth TUI via opencode attach.
- [dsh-teamwork](https://github.com/dsh-external/dsh-teamwork) - Team collaboration (cordis).

## Fun & Lifestyle

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

## Infrastructure & Development

- [deepseek-harness-desktop](https://github.com/Easyhoov/deepseek-harness-desktop) - Unofficial in-process Windows desktop app with tray residency, native notifications, and an IPC bridge.
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
- [dshp](https://github.com/asdf17128/dshp) - Profile manager: list, create, clone and diff profiles, and export a whole setup (bundle order, plugin versions, patch) as one portable file.
- [dsh-recommend](https://github.com/zp-home/dsh-recommend) - Transparent plugin rankings and recommendations: daily auto-fetched dsh-plugin topic data, open scoring model, rank/search/recommend tools and a settings-page leaderboard.
- [dsh-eval](https://github.com/hccccc01333/dsh-eval) - Agent evaluation platform: benchmark YAML, headless dsh runs, trace-based metrics, scripted grading, and run compare/report.

## Related

- [dsh-external/issues](https://github.com/dsh-external/issues) - Issue aggregation hub.
- [DeepSeek](https://deepseek.com) - Official site.

## Contributing

Please have a look at [contributing.md](contributing.md). Entry standard: repository + one-line description + link; the curated list is maintained by hand, the full index lives in hub.

## Thanks

Thanks to the [Linux Do community](https://linux.do/) for the support and exchange.
