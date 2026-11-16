<div align="center">

# Awesome DeepSeek Harness (dsh)

**Everything is a Plugin.**

A curated collection of the best plugins, tools, skills, and resources built for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) — the open-source agent harness from DeepSeek AI, powered by [Cordis](https://github.com/cordiverse/cordis).

English | [中文](README.zh.md)

[Browse the searchable plugin directory](https://awesome-deepseekharness.github.io/awesome-deepseek-harness/) · [中文网站](https://awesome-deepseekharness.github.io/awesome-deepseek-harness/zh/)

[Official Repo](https://github.com/deepseek-ai/deepseek-harness) · [Official Site](https://deepseek.com/harness) · [Discord](https://discord.gg/Ycq5dCaS4) · [Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions) · [dsh-plugin Topic](https://github.com/topics/dsh-plugin) · [Official Tracker](https://github.com/awesome-deepseekharness/deepseek-official-tracker)

</div>

<p align="center">
  <a href="https://github.com/awesome-deepseekharness/awesome-deepseek-harness"><img src="https://img.shields.io/github/stars/awesome-deepseekharness/awesome-deepseek-harness?style=social" alt="GitHub stars"></a>
  <a href="https://github.com/awesome-deepseekharness/awesome-deepseek-harness/fork"><img src="https://img.shields.io/github/forks/awesome-deepseekharness/awesome-deepseek-harness?style=social" alt="GitHub forks"></a>
  <img src="https://img.shields.io/github/last-commit/awesome-deepseekharness/awesome-deepseek-harness" alt="last commit">
  <a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome"></a>
  <a href="https://github.com/topics/dsh-plugin"><img src="https://img.shields.io/badge/topic-dsh--plugin-ff7a45" alt="dsh-plugin topic"></a>
</p>

> ⭐ **Found this list useful? Star it — it takes 2 seconds, and it happens to be the #1 way to help others discover dsh plugins.**
> Save the list now so your next useful plugin is easier to find. Your ⭐ also supports the community maintaining this directory. Currently **43 → 100 stars is our first milestone (57 to go)**. To receive repository updates, choose your notification preferences in GitHub’s Watch menu.
>
> **Share & spread:** if you built or love a plugin here, share its original repository so others can explore it. [Share on X](https://twitter.com/intent/tweet?text=Awesome%20DeepSeek%20Harness%20%E2%80%94%20Everything%20is%20a%20Plugin%20%E2%9A%A1%20Curated%20dsh%20plugins%2C%20tools%20%26%20skills%20for%20%40deepseek_ai%20harness&url=https://github.com/awesome-deepseekharness/awesome-deepseek-harness&hashtags=dsh,deepseek,opensource) · [Share on Reddit](https://www.reddit.com/submit?url=https://github.com/awesome-deepseekharness/awesome-deepseek-harness&title=Awesome%20DeepSeek%20Harness%20%E2%80%94%20curated%20plugins%20%26%20skills) · [Discuss on Discord](https://discord.gg/Ycq5dCaS4) · [Copy link](https://github.com/awesome-deepseekharness/awesome-deepseek-harness)
>
> *Tip: READMEs with a clear demo tend to get more attention. Adding `dsh-plugin` helps with discovery, and starring the list makes it easier to find again.*

## What is dsh?

This is an independent, community-maintained directory, not an official DeepSeek product. Start with the [searchable directory](https://awesome-deepseekharness.github.io/awesome-deepseek-harness/): choose a category, compare project descriptions, and open the original repository for installation and compatibility details. For structured access, see [catalog.json](https://awesome-deepseekharness.github.io/awesome-deepseek-harness/catalog.json) and [llms.txt](https://awesome-deepseekharness.github.io/awesome-deepseek-harness/llms.txt).

DeepSeek Harness is DeepSeek AI's open-source agent harness. Its core philosophy is **everything is a plugin**: the model adapter, tool registry, session log, permission model, and even the agent loop itself are replaceable plugins — "no privileged core to patch." The runtime is built on [Cordis](https://github.com/cordiverse/cordis) (a meta-framework of spatiotemporal composability).

| Mode | Description |
| --- | --- |
| **Standard** | Full coding agent: file editing, shell, file & web search, skills, planning, goals, subagents, workflows |
| **Code** | All of Standard, plus tools exposed through the Code Mode SDK so the model can combine multi-step operations in one TypeScript program |
| **Minimal** | Two-tool coding agent (persistent bash + str_replace_editor) for benchmarking models |
| **Creator** | Runtime inspection, in-memory plugin experiments, and composing new modes — for authoring custom agent presets |

> ⚠️ **Developer Preview**: the official release warns that compatibility-breaking changes are coming. APIs and plugin contracts may change.

---

## 📦 Plugins (The Core)

> Publishing your own plugin? Tag your repository with the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic for discoverability.

### 🛍️ Marketplaces & Discovery

| Project | Description | ⭐ |
| --- | --- | --- |
| [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | The plugin market inside DeepSeek Harness — browse, search, one-click install | 3887 |
| [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) | Browse, install & update all GitHub `dsh-plugin` plugins in the DSH Web GUI | 165 |
| [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) | A DSH skill that finds, installs, and verifies GitHub plugins | 172 |
| [AdamPlatin123/dsh-plugin-radar](https://github.com/AdamPlatin123/dsh-plugin-radar) | Radar index repo that auto-scans dsh plugin candidates | 1492 |
| [LaplaceYoung/oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) | 700+ plugins registered only through extension seams — no agent-loop modification | 58 |

### 👁️ Vision

The hottest category — giving text-only models "eyes."

| Project | Description | ⭐ |
| --- | --- | --- |
| [liustack/modlens](https://github.com/liustack/modlens) | The first vision plugin for DSH: paste an image, get structured JSON evidence (OCR, layout, semantics) | 3962 |
| [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | Intent-aware image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diff, Artifacts, Web UI | 880 |
| [Anionex/agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) | Vision toolkit & skills for text-only LLMs: multi-image, Q&A, frontend UI restoration, GUI automation | 1202 |
| [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | Built-in free vision chain (no key) + pixel-level vision tools; one-command install, no Python | 1099 |
| [QwenLM/Qwen-MM-Plugins](https://github.com/QwenLM/Qwen-MM-Plugins) | Make any agent harness multimodal-native (cross-harness) | 2817 |

### 🌐 Web & Browser

| Project | Description | ⭐ |
| --- | --- | --- |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | Tool catalog for agents: search ~2,600 external endpoints (SEO/SERP, enrichment, scraping) by task, then call directly | 1400 |
| [liustack/modsearch](https://github.com/liustack/modsearch) | Web plugin for DSH: ask the web or X, get structured JSON evidence (search, fetch, citations) | 478 |
| [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | Chrome sidebar extension that lets DSH operate your browser directly — no vision required | 648 |
| [taxueseek/argo](https://github.com/taxueseek/argo) | Agent search tool: Chinese/English/academic/code/shopping/finance/news/encyclopedia | 123 |
| [CorsenAI/deepseek-harness-connector](https://github.com/CorsenAI/deepseek-harness-connector) | Chrome extension + local companion plugin: one exact DSH session reads and acts only in the Chrome tabs you explicitly attach, in your own signed-in profile — 21 browser actions, secrets masked in the page, loopback only; installable via `dsh plugin --profile web add` from the release tarball | 0 |

### 🧠 Memory

| Project | Description | ⭐ |
| --- | --- | --- |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking/tree/main/examples/dsh-memory-plugin) | OpenViking memory and context bundle for DSH: pre-step auto-recall, profile injection, session capture, `viking://` guarding + recall/write tools | 37172 |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight/tree/main/hindsight-integrations/coding-agents) | Hindsight agent memory that learns: auto recall/retain long-term project memory, knowledge pages, deep reflection, per-repo banks | 23595 |
| [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | DSH context insight panel: dashboard + `/context` command + browser for composition, evolution, compression/inject events | 1375 |
| [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | Cross-session long-term memory + background self-evolution: 5-track memory, git-branch awareness, skill self-evolution | 305 |
| [adoresever/graph-memory](https://github.com/adoresever/graph-memory) | Knowledge-graph memory: extract triples from conversations, compress context 75%, reuse experience across sessions | 620 |
| [mnemon-dev/mnemon](https://github.com/mnemon-dev/mnemon) | LLM-supervised persistent memory — graph recall, cross-session knowledge, single binary; works with DSH/Claude Code/OpenClaw | 574 |
| [tinqiao-oss/engramory](https://github.com/tinqiao-oss/engramory) | Portable memory protocol for AI agents: load as standing rules, curation discipline + reference spec | 190 |
| [text2future/flowix](https://github.com/text2future/flowix) | Notes for you, memory for your agents | 413 |
| [Ariestar/sivtr](https://github.com/Ariestar/sivtr) | A unified agent memory workspace for human and agent | 269 |
| [hardes11/dsh-squeeze-command](https://github.com/hardes11/dsh-squeeze-command) | Manual budget-targeted context compression: the conversation model picks the ranges to summarize and a cheap flash-tier route writes the checkpoint summaries; `dsh plugin add dsh-squeeze-command` | 1 |
| [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) | Bounded, layered, approval-gated cross-session memory for dsh with frozen snapshot injection (`dsh plugin --profile web add dsh-memento`) | 90 |
| [Sev7eEn7/dsh-sieve](https://github.com/Sev7eEn7/dsh-sieve) | Filters tool outputs, prunes stale context and discloses skills on demand for DSH 0.2.1-alpha.1. Install: `dsh plugin --profile headless add dsh-sieve@0.1.0`. | 64 |
| [lo2589/knowledge_database](https://github.com/lo2589/knowledge_database) | Click a sentence in a chat to make it a card in a knowledge-tree sidebar tab; Ctrl-drag merges several sentences into one card, every card links back to its source sentence, and the tree exports to Markdown, Mermaid, JSON, or PDF. Needs the repo's Python 3.11 + FastNode setup (`setup.sh`). Install: `./setup.sh` then `./dsh-install.sh`. | 0 |
| [OakcoderX/solopup-memory](https://github.com/OakcoderX/solopup-memory) | MIT public-beta text memory for DSH with original-source references, project scopes and correction history; `dsh plugin --profile desktop add solopup-memory@0.21.0-beta.2 --ignore-scripts` | 1 |
| [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | Durable task passport + offline TaskPack handoff: versioned local task state, packed into a single offline file another harness or machine can land, with machine-level facts downgraded at pack time; install via `dsh plugin --profile web add task-passport@0.3.2` | 10 |

### 🎨 Web UI, Skins & Desktop Pets

| Project | Description | ⭐ |
| --- | --- | --- |
| [zhu1090093659/dsh-web](https://github.com/zhu1090093659/dsh-web) | Plugin & skin collection for the DSH Web UI: task board, git graph, right-side panel, remote mobile UI, pet, live token stats, skin center | 9270 |
| [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | "Whale girl" skin series for DSH Web (maid-atelier) | 2077 |
| [vlln/whale-girl](https://github.com/vlln/whale-girl) | Desktop pet plugin for the DSH Web GUI (QQ-pet style): floating, draggable, feedable | 322 |
| [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | A complete sidebar workbench: file rendering/editing, terminal, Git, subagents, third-party pages | 3593 |
| [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | Select-to-annotate plugin: select text → annotate → send with message | 116 |
| [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | Turn DSH into a 2005-era portal: parody ads, fake games, and popups | 624 |
| [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | Render interactive visualization cards inside DSH conversations | 258 |
| [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | GenUI: interactive UI components inline in replies (layout, charts, forms, mermaid, 3D) + action event loop | 450 |
| [pengyue-polaron/deepseek-harness-genui](https://github.com/pengyue-polaron/deepseek-harness-genui) | Code-first React + TypeScript task apps rendered inline/Canvas/fullscreen/localhost, interaction state reusable by later turns | 109 |
| [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | OpenPencil design preview & editing plugin for DSH | 169 |
| [zizaiwo/dsh_plugins](https://github.com/zizaiwo/dsh_plugins) | Sidebar session categories for dsh Web UI: zero-config takeover of official workspace browser, organize sessions by custom folders (drag & drop, in-category creation, per-workspace isolation) | 0 |
| [lcsdg/dsh-quick-prompts](https://github.com/lcsdg/dsh-quick-prompts) | Quick-prompts bar above composer: per-category snippet chips, orange {{placeholder}} highlighting, two-column management, per-session category memory | 1 |
| [weibaohui/dsh-gaokao](https://github.com/weibaohui/dsh-gaokao) | Gaokao countdown blackboard: desktop widget counting down days (double-click to collapse into a slim bar) plus random knowledge-card quizzes while the agent works; installable via `dsh plugin add @weibaohui/dsh-gaokao` | 2 |
| [weibaohui/dsh-fireworks](https://github.com/weibaohui/dsh-fireworks) | Fireworks celebration engine: event-driven shows above the chat window while the agent codes (welcome / per-turn / tool sparks / milestone / finale / failure dud), token usage decides size & splendour; installable via `dsh plugin add @weibaohui/dsh-fireworks` | 0 |
| [Moonshile/moonshile-dsh-plugins](https://github.com/Moonshile/moonshile-dsh-plugins) | Re-sorts sidebar workspaces by last activity once per day; stable order within the day | 2 |
| [weibaohui/dsh-sidebar-tidy](https://github.com/weibaohui/dsh-sidebar-tidy) | Sidebar tidy: when plugins pile up, the rows under 'New session' get crowded with panel and plugin entries. This plugin folds them all — global panel rows, plugin-injected entry rows (own and third-party alike), and bottom entries — into a single menu button whose secondary menu triggers each entry exactly as before; keep any entry permanently visible with a name whitelist, and the button turns into an icon when the sidebar collapses to a narrow rail. Installable via `dsh plugin add @weibaohui/dsh-sidebar-tidy` | 0 |
| [12we21/cute-fat-fish-pet](https://github.com/12we21/cute-fat-fish-pet) | A chibi blue-haired maid desktop pet for the DSH Web UI with 106 hand-drawn transparent animations, desktop wandering, chat through local Ollama or the DSH online models, and optional screen watching (installable via `dsh plugin add github:12we21/cute-fat-fish-pet#path:/src`) | 1 |
| [VictorKozachek/dsh-user-code-block](https://github.com/VictorKozachek/dsh-user-code-block) | Syntax highlighting, copy button and monochrome mode for fenced code blocks in DSH user messages — the chat renders them as plain text by default; installable via `dsh plugin --profile desktop add dsh-user-code-block` | 1 |
| [mengge237/dsh-composer-ease](https://github.com/mengge237/dsh-composer-ease) | dsh-composer-ease: adds a completion popup to the DSH Web composer, plus bracket and quote pairing and wrap-on-selection; nothing else in the UI changes | 0 |
| [dongsheng123132/dsh-move-up](https://github.com/dongsheng123132/dsh-move-up) | One item in the workspace menu that moves a workspace to the top of the sidebar once, through the host workspace registry — no favorites, pins or automatic re-sorting; installable via `dsh plugin --profile desktop add dsh-move-up@0.3.0` | 0 |

### 🖥️ TUI & Desktop

| Project | Description | ⭐ |
| --- | --- | --- |
| [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Claude Code-style full-screen terminal plugin: pixel-whale top bar, streaming thoughts, double-Esc rollback, TPS gauge | 3030 |
| [shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) | Remote phone access to the DSH Web UI: QR for LAN/cloudflared public access, live sync, mobile layout, settings page | 1123 |
| [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | Interactive terminal UI + harness workflows: adds TDD, evidence gates, vision modules | 276 |
| [anywhere-labs/dsh-desktop](https://github.com/anywhere-labs/dsh-desktop) | A modern desktop experience for the DSH ecosystem | 32280 |
| [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | Community DSH distribution: unified TUI, desktop, and Web UI with layered install | 315 |
| [vibeinging/deepseek-harness-desktop-app](https://github.com/vibeinging/deepseek-harness-desktop-app) | Local AI desktop workspace: sessions, projects, files, web research, plugins, Office artifacts | 584 |
| [ChisaAlter/WhaleIsle](https://github.com/ChisaAlter/WhaleIsle) | Electron desktop shell for the DSH web UI, with themes & backgrounds | 200 |
| [Ruler4396/dsh-launcher](https://github.com/Ruler4396/dsh-launcher) | Lightweight Windows launcher: silent autostart + WebView2 window | 206 |
| [Jensen-Yao/dsh-plus-plus](https://github.com/Jensen-Yao/dsh-plus-plus) | Windows WPF desktop console for `dsh web`: one-click start/stop, phone URL over Wi-Fi/domain/Tailscale, firewall rule, storage locations, live logs, dark/light themes | 1 |

### 🧩 Tools, Workflows & Presets

| Project | Description | ⭐ |
| --- | --- | --- |
| [dryw/dsh-egm](https://github.com/dryw/dsh-egm) | Elephant-Goldfish Model for DSH: draft design specs with a context-rich Elephant, then challenge them with fresh, read-only Goldfish reviewers. Install: `dsh plugin --profile web add dsh-egm` (npm: `dsh-egm`). | 6 |
| [flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) | SSH remote workspaces for DSH with parallel projects across hosts, file browsing and editing, recursive search, terminals, Git diffs, and Agent tools to edit, build and test remotely. Optional IDE layout. | 286 |
| [leoan698-tom/dsh-sessivra](https://github.com/leoan698-tom/dsh-sessivra) | Sessivra: drag DSH sessions into resizable split views, drop native @ references into drafts, and review delegated work before queued follow-ups. Prerelease; Windows / DSH 0.2.1-rc.5. Install: `dsh plugin --profile web add dsh-plugin-sessivra@0.3.0-dev.26`. | 1 |
| [Q00/ouroboros](https://github.com/Q00/ouroboros/tree/main/integrations/dsh-plugin) | Config-only bundle mounting Ouroboros via MCP: 36 interview/Seed/execution/eval/evolution workflow tools | 5839 |
| [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | 9-channel IM bots for DSH via QR/credentials: Feishu, WeChat, DingTalk, WeCom, QQ, Slack, Telegram, Discord, WhatsApp | 1307 |
| [zh667/TokenLedger](https://github.com/zh667/TokenLedger) | Sidebar usage panel attributing tokens to relay site (New API/Sub2API/DeepSeek balance), today/month/total + heatmap | 199 |
| [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | Let the AI connect to databases and write SQL for you | 194 |
| [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Import chat histories from 13 coding agents (Claude Code/Codex/ChatGPT/Cursor/Gemini/opencode) as resumable DSH sessions | 162 |
| [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) | Multi-channel notify + phone control: one `notify()` API across 27 channels, event pushes, approvals/questions from phone | 104 |
| [zhengjy01/dsh-wps](https://github.com/zhengjy01/dsh-wps) | WPS / 金山文档 cloud-docs integration for DSH via the official Kingsoft SkillHub MCP (mcp__wps__*). | 1 |
| [xiaobright/dsh-anchored-standard](https://github.com/xiaobright/dsh-anchored-standard) | Two-phase DSH preset: Minimal-aligned bootstrap, then full Standard tools | 3817 |
| [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | Upgrade one-shot multi-agent scheduling into a generatable, savable, governable workflow layer | 123 |
| [jerryxff26-alt/delivery-board](https://github.com/jerryxff26-alt/delivery-board) | In-repo delivery board for humans & agents: stages, handoffs, soft WIP, weekly report, Timeline UI; DSH plugin + standalone `npx dsh-delivery-board` | 3 |
| [liceses/dsh-gitbash-preset](https://github.com/liceses/dsh-gitbash-preset) | One-click "Minimal (Git Bash)" preset so Minimal mode works on Windows | 131 |
| [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Codex-style `@file` mentions: search workspace files in the composer and attach contents | 512 |
| [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Open DSH workspace directories in VS Code directly from the web GUI | 53 |
| [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Desktop notifications for turn completions, with per-outcome and keyword rules | 84 |
| [radres/dsh-plugin-call-me](https://github.com/radres/dsh-plugin-call-me) | Rings your real phone: `call_me` and `text_me` tools, plus optional calls when a run stops or waits for approval; the spoken answer is transcribed back into the run. Needs the paid /call-me app (iPhone, Android). Install: `dsh plugin --profile web add github:radres/dsh-plugin-call-me` | 8 |
| [pitetow/dsh-notify-on-complete](https://github.com/pitetow/dsh-notify-on-complete) | Zero-dependency desktop notifications: run completion, questions, approvals | 4 |
| [hxyz486/dsh-archived-conversations](https://github.com/hxyz486/dsh-archived-conversations) | View, restore & delete archived conversations in DSH settings | 6 |
| [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | Rewind conversation & workspace state, powered by a persistent Change Ledger | 115 |
| [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | Self-evolving plugin: hot-mount/remove Cordis plugins in-session, auto-restore on restart | 11 |
| [Francis-Xavier-code/dsh-balance-plugin](https://github.com/Francis-Xavier-code/dsh-balance-plugin) | DeepSeek balance monitoring & usage stats + official top-up entry | 61 |
| [Cassius0924/dsh-usage-dashboard](https://github.com/Cassius0924/dsh-usage-dashboard) | DeepSeek quota & usage dashboard | 9 |
| [dustinmoon78/dsh-usage-stats](https://github.com/dustinmoon78/dsh-usage-stats) | DSH usage stats: aggregated token usage (overview/by-model/by-day) + pricing & cost estimate in Settings | 0 |
| [null5069/dsh-better-stats](https://github.com/null5069/dsh-better-stats) | Enhanced DSH Web composer stats strip: official CNY pricing (peak/off-peak, per-model), real-time settlement, live LLM/tool timers, provider balance, budget alerts | 1 |
| [WinnieJQ/dsh-conversation-cost](https://github.com/WinnieJQ/dsh-conversation-cost) | Per-conversation cost badge in the web conversation header: per-step official peak/off-peak pricing, live ¥/$ hover card with token breakdown; `dsh plugin --profile web add dsh-conversation-cost` | 0 |
| [devacc8/dsh-billing-badge](https://github.com/devacc8/dsh-billing-badge) | Billing season and account balance in the composer stats row, after the native cache-hit reading: a peak/off-peak dot with a countdown, and a panel splitting the balance into total, granted and topped up in the currency the API reports; `dsh plugin --profile web add dsh-billing-badge` | 0 |
| [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams multi-agent collaboration plugin for DSH | 1633 |
| [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | Skill-driven harness/loop engineering workflow agent plugin | 59 |
| [weshopai/weshop-dsh-plugin](https://github.com/weshopai/weshop-dsh-plugin) | Native WeShop plugin: infinite canvas with infinite creative skills | 12 |
| [morluto/jacobian](https://github.com/morluto/jacobian) | Pure mathematics for agents: search examples/counterexamples, compute exactly, verify | 192 |
| [thedeveloper256/dsh-model-router](https://github.com/thedeveloper256/dsh-model-router) | Role-based model routing: planner (root agent) on deepseek-v4-pro, delegated executor subagents on deepseek-v4-flash; ships a prompt section + `pro-flash-routing` skill | 2 |
| [nautahakk/jev-codex-router](https://github.com/nautahakk/jev-codex-router) | Routes DSH prompts to Codex models and reasoning efforts via Jev, with configurable model caps and approval thresholds | 0 |
| [zhengjy01/dsh-task-dispatcher](https://github.com/zhengjy01/dsh-task-dispatcher) | TickTick daily task dispatcher: interval pulls of todays due tasks, change-aware flomo+macOS notifications, optional auto-execute in headless sessions, worker workspace selection, web task board | 1 |
| [zhengjy01/dsh-vercel-mcp](https://github.com/zhengjy01/dsh-vercel-mcp) | Vercel MCP connection for DSH: official OAuth 2.0 client flow against mcp.vercel.com; Vercel platform tools under mcp__vercel__* | 0 |
| [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) | Second-model approval for dsh: a read-only reviewer subagent returns structured allow/deny verdicts with reasons before actions run, fail-closed (`dsh plugin --profile web add dsh-auto-review`) | 169 |
| [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) | Declarative permission rules for dsh: gate tools, paths and commands with allow/deny rules (`dsh plugin --profile web add dsh-permission-rules`) | 115 |
| [PerryLink/dsh-reach](https://github.com/PerryLink/dsh-reach) | Pushes DSH approval and question cards to IM channels (WeChat first) and answers them from chat, with per-channel security and an open push service | 0 |
| [PerryLink/dsh-ticktick](https://github.com/PerryLink/dsh-ticktick) | TickTick (Dida365) task bridge: a session-header task panel and curated agent tools over the official TickTick MCP endpoint | 0 |
| [zhengjy01/dsh-qqbot-panel](https://github.com/zhengjy01/dsh-qqbot-panel) | Visual web settings panel for the official @tencent-connect/dsh-qqbot plugin (credentials, access modes/allowlists, workspace picker, scan-to-bind). | 0 |
| [zhengjy01/dsh-updater](https://github.com/zhengjy01/dsh-updater) | Track DeepSeek Harness's own releases and update in one click: npm dist-tags + GitHub changelog, every change between the running build and the target, risk grading, and an atomic-rename backup with automatic rollback (`dsh plugin --profile web add @zhengjunyao/dsh-updater`) | 0 |
| [zhengjy01/dsh-restart](https://github.com/zhengjy01/dsh-restart) | One-click restart for DeepSeek Harness: a web restart button plus a `dsh_restart` agent tool hand the relaunch to a detached helper, the page auto-reconnects, and a recovery console shows boot errors when the new host fails (`dsh plugin --profile web add @zhengjunyao/dsh-restart`) | 0 |
| [zhengjy01/dsh-zsxq](https://github.com/zhengjy01/dsh-zsxq) | Knowledge Planet (知识星球 zsxq) integration for DSH: cookie/QR login against the unofficial web API, agent tools for groups / topic lists / topic detail / search / publish / comment / like, plus a web settings panel. | 0 |
| [zhengjy01/dsh-skill-recommender](https://github.com/zhengjy01/dsh-skill-recommender) | Session-profile driven open-source skill recommender for DSH: scans local DSH / Codex / Claude sessions, builds a weighted profile (topics, tools, tasks, projects) and recommends matching skills with a tunable match index. | 0 |
| [zhengjy01/dsh-goofish-mcp](https://github.com/zhengjy01/dsh-goofish-mcp) | Xianyu (Goofish 闲鱼) read-only monitoring for DSH: drives the goofish-cli MCP server and exposes read-only tools (search, item detail, listings, chat history, category) with all write actions filtered out. | 0 |
| [zhengjy01/dsh-npm](https://github.com/zhengjy01/dsh-npm) | NPM registry management for DSH: query package info, list versions, search packages, and publish/deprecate with optional token injection, plus a web settings panel. | 0 |
| [zhengjy01/dsh-backup-migrator](https://github.com/zhengjy01/dsh-backup-migrator) | Plugin environment backup and migration for DSH: backs up every profile's plugin list, plugin configs and local-source plugin tarballs into a git repo, and restores them on a new machine. | 0 |
| [zhengjy01/dsh-feishu-mcp](https://github.com/zhengjy01/dsh-feishu-mcp) | Feishu (Lark) OpenAPI MCP connection for DSH: bridges the official @larksuiteoapi/lark-mcp server, exposing IM, Bitable, Docs, Calendar and Drive APIs as mcp__feishu__* tools with OAuth user-token support. | 0 |
| [zhengjy01/dsh-aliyun-mcp](https://github.com/zhengjy01/dsh-aliyun-mcp) | Alibaba Cloud OpenAPI MCP connection for DSH: static-credential mode through the official OpenAPI MCP proxy, exposing ECS / OSS / DNS / Function Compute APIs as mcp__aliyun__* tools. | 0 |
| [hanshengcc/callai-seo-mcp](https://github.com/hanshengcc/callai-seo-mcp) | Live SEO data for DSH via the CallAI MCP server: Google/Bing SERP (with AI Overview sources), keyword volume and difficulty, competitor rankings and keyword gaps, backlinks, on-page audits as mcp__callai__* tools plus a bundled SEO skill; pay-as-you-go API key required (`dsh plugin --profile web add @callaiapi/seo`) | 0 |
| [weibaohui/dsh-flow](https://github.com/weibaohui/dsh-flow) | Execution flow chart: renders the session execution as a vertical node flow (turns / user / assistant / tools / approvals / retries / compaction), appended in real time over SSE with auto-follow scrolling; installable via `dsh plugin add @weibaohui/dsh-flow` | 0 |
| [yeruizhi/dsh-ask-user-timeout](https://github.com/yeruizhi/dsh-ask-user-timeout) | Bounded lifetime for `ask_user_question`: when no browser tab renders the question (tab closed / backgrounded / mux dropped), returns a structured, model-visible `ASK_TIMEOUT` after a configurable deadline (default 10 min) instead of hanging the loop forever; uses the same `deadline()` primitive as the official `timeout-policy` guard (`dsh plugin --profile web add git+https://github.com/yeruizhi/dsh-ask-user-timeout.git`) | 0 |
| [zhengjy01/dsh-wechat-clawbot](https://github.com/zhengjy01/dsh-wechat-clawbot) | WeChat ClawBot bridge for DSH: a QR-login floating ball relays messages to agent sessions, with reusable context tokens for out-of-window proactive push (maintained fork of lubaiUwU/DSH-WeChatClawBot; `dsh plugin --profile web add dsh-wechat-clawbot`). | 0 |
| [0xRabit/dsh-crypto-portfolio](https://github.com/0xRabit/dsh-crypto-portfolio) | Self-hosted crypto portfolio dashboard for DSH — BTC, EVM (73 chains), Solana, Dogecoin, Cardano, Hyperliquid, five exchanges and tokenised equities in one view, with a shareable PNG card, a tunable asset-health report, per-source connection tests and zero-dependency trend charts (`dsh plugin --profile web add dsh-crypto-portfolio`) | 2 |
| [shiyan688/dsh-novel-craft](https://github.com/shiyan688/dsh-novel-craft) | Novel-writing workbench that learns your taste: 👍/👎 marks on draft variants distill into reusable writing rules, and only the rules enter the writing context (`dsh plugin --profile web add dsh-novel-craft`) | 5 |
| [IORT-DOIT/dsh-meeting-room](https://github.com/IORT-DOIT/dsh-meeting-room) | Meeting room for DSH: several sessions (AI or human) join one room around a meeting goal, a built-in recorder drafts the meeting minutes for your review, member files are auto-archived into the room, and members' tool approvals can be answered right in the room panel (13 `room_*` tools, 8 config keys; install: `git clone` then `install_bundle link:<path>`) | 1 |
| [ff66ccff/dsh-ATN](https://github.com/ff66ccff/dsh-ATN) | Adaptive topology multi-agent preset for DeepSeek Harness with peer messaging, a shared board, task handoff and live network visualization. Install: `dsh plugin --profile web add dsh-atn@0.4.1`. | 2 |
| [lcestou/dsh-oh-my-claude](https://github.com/lcestou/dsh-oh-my-claude) | Claude Code CLI as a native dsh provider: the logged-in `claude` binary does the work on its own subscription, no API key. Live model list, per-session resume, approval relay, images, a memory/rewind/changes panel, workspaces on remote SSH boxes. `dsh plugin --profile web add dsh-oh-my-claude` | 10 |
| [luobosibing2/dsh-jev-plugin](https://github.com/luobosibing2/dsh-jev-plugin) | Native DSH plugin with a TypeSafe Jev decision layer for skill/file selection, task supervision, tool-output filtering and approval assistance — 12 independently configurable features, all disabled by default (install via the DSH Web plugin manager from the GitHub URL) | 203 |
| [klarkxy/dsh-plugins#dsh-dev-index](https://github.com/klarkxy/dsh-plugins/tree/main/plugins/dsh-dev-index) | Read official DSH docs in the Plugins page; Creator mode searches docs and checks plugin npm metadata. Install: `dsh plugin --profile web add @klarkxy/dsh-dev-index`. | 7 |
| [lo2589/deepseek-harness-media](https://github.com/lo2589/deepseek-harness-media) | Composer-bar buttons for DSH Web: switch model providers (GLM, MiniMax, OpenAI, Claude, local Ollama) without editing YAML, take screenshots, upload images/SVG/text files, send images to a vision model, plus a session media panel and history search. Install: `dsh plugin --profile web add file:./dsh-provider-quick-config`. | 4 |
| [skyjjgw/dsh-version-guard](https://github.com/skyjjgw/dsh-version-guard) | Snapshots plugin versions and profile configuration, with an independent recovery page to restore a known-good configuration when DSH cannot start. | 1 |
| [weibaohui/dsh-favorites](https://github.com/weibaohui/dsh-favorites) | Session favorites: bookmark any conversation into a browser-style favorites panel — one-click star from session rows, folders for organization, notes, custom display names, resume session, fork into a new session, basic session stats, plus a fork-relationship graph showing how conversations derive from one another. Installable via `dsh plugin add @weibaohui/dsh-favorites` | 1 |
| [JeffTsuiCUG/dsh-connect-minimaxcode](https://github.com/JeffTsuiCUG/dsh-connect-minimaxcode) | Connect the models of a locally signed-in MiniMax Code desktop app (CN build) to DSH, or sign in with the plugin's own OAuth 2.0 device-code flow (PKCE, the plugin never sees the password): Anthropic Messages compatible, live model catalog, daily credit check-in, and a credit balance with expiry details that follows the selected model in the composer tool row and stays on the plugin page. Unofficial plugin on MiniMax's undocumented interfaces, for study and research only. Install: `dsh plugin --profile desktop add dsh-connect-minimaxcode` | 0 |
| [caishengshuo/beforewrite](https://github.com/caishengshuo/beforewrite) | Host plugin that keeps the previous version of a file the agent is about to overwrite: `time_machine` lists, diffs and restores in one command, and you can mark a file manually before `rm` or `sed -i`. Install: `git clone` then `plugin_manager(action="install_bundle", target="<path>")` | 1 |
| [01men/ybkkasi](https://github.com/01men/ybkkasi) | Asset-governance console for self-hosted AI infrastructure: one ledger for MCP servers, skills, agents, AI apps, model channels and storage, with per-tool permission points, department x agent x skill cost attribution, dependency topology and an append-only audit trail. Mounts as a `web`-profile plugin tree (29 packages, 450 REST routes, 86 MCP tools, MIT). Install: `dsh plugin --profile web add github:01men/ybkkasi` | 67 |
| [lengrufeng2008/dsh-science-legion](https://github.com/lengrufeng2008/dsh-science-legion) | Tiered multi-agent science campaigns for DSH: 8 skills for math/physics/astronomy/engineering/biomedical evidence, shared blackboard, independent verifier, wolf-pack/flanking tactics, token gates, 10 known-answer evals; a six-agent pilot caught and corrected a benchmark answer-key error (`dsh plugin --profile web add github:lengrufeng2008/dsh-science-legion`) | 0 |
| [lengrufeng2008/dsh-code-intel](https://github.com/lengrufeng2008/dsh-code-intel) | Read-only semantic code navigation for DSH via local language servers: definition, references, workspace symbols, diagnostics, hover, rename preview; six native tools, no embeddings/hosted index, 6/6 tests | 0 |
| [jjjjjjjjnnjnn/dsh-triage](https://github.com/jjjjjjjjnnjnn/dsh-triage) | Pre-install judgement and post-mortem attribution: says which row admission denied, which module failed to import, which capability was declared but never registered; isolated probe with recorded evidence. Read-only, no install/remove, no security claims | 1 |
| [tommy00748-tech/dsh-native-notifications](https://github.com/tommy00748-tech/dsh-native-notifications) | Native desktop notifications from DSH itself (approval, question, completion, error, sign-in), attributed to the DSH app with click-to-open, plus a selectable/customisable synthesised chime. Install: `dsh plugin --profile web add github:tommy00748-tech/dsh-native-notifications` | 0 |

### 📚 Skills

| Project | Description | ⭐ |
| --- | --- | --- |
| [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | Digital Life 1.0: transforming cold farewells into warm skills | 24710 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | Beautiful, verifiable architecture/workflow/sequence/data-flow/lifecycle diagrams — self-contained HTML with motion | 61772 |
| [hyhmrright/brooks-lint](https://github.com/hyhmrright/brooks-lint) | AI code reviews grounded in 12 classic engineering books: decay-risk diagnostics, 6 analysis modes | 1474 |
| [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | Make coding agents architecture-aware: baseline-first, evidence-verified, drift-checked | 1185 |
| [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | The design skill for coding agents: stop shipping AI-slop UI, ship shippable frontends | 556 |
| [yogsoth-ai/de-anthropocentric-research-engine](https://github.com/yogsoth-ai/de-anthropocentric-research-engine) | A research engine for agents: literature synthesis, gap validation, hypothesis formation and experiment design from a stated direction - plan approved before it runs, backtracks when evidence is thin, pure markdown | 505 |
| [Minara-AI/minara-skills](https://github.com/Minara-AI/minara-skills) | Trading skills to make your agent earn for you | 345 |
| [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) | Expert guidance for HarmonyOS NEXT (API 12+) development | 347 |
| [alaliqing/claude-paper](https://github.com/alaliqing/claude-paper) | Cross-agent research paper toolkit: summaries, deep study, code demos, local web viewer | 336 |
| [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) | 85 SKILL.md reverse-engineering & security research skill pack (Cordis plugin) | 138 |
| [Lyn-77/ProMentor](https://github.com/Lyn-77/ProMentor) | AI coding mentor: architecture scan, laddered chapters, hand-written core logic, auto-grading | 74 |
| [Jayden-X-L/forkprobe](https://github.com/Jayden-X-L/forkprobe) | Compare multiple skills on the same task and pick the winner | 72 |
| [Mikuzjc/dsh-office-for-mso](https://github.com/Mikuzjc/dsh-office-for-mso) | DSH <-> Microsoft Office bridge skill: control open Word/Excel/PowerPoint via Office add-in (33 actions, AI-orchestrated) | 2 |
| [suyukun/dsh-tech-selection](https://github.com/suyukun/dsh-tech-selection) | Model-agnostic technology-selection research protocol for any AI agent (DSH/Claude/Cursor/Codex): T1-T6 source tiers, quality gates, quantified trade-offs, traceable verdicts | 0 |
| [morluto/rea](https://github.com/morluto/rea) | Reverse engineer anything with agents, from app behavior down to native binaries | 404 |
| [reliable-ly0411/babeldoc-pdf-translate](https://github.com/reliable-ly0411/babeldoc-pdf-translate) | BabelDOC PDF translation skill for DSH, also packaged as a Codex plugin: bilingual output, custom glossaries and local typesetting; install under `.dsh/skills/babeldoc-pdf-translate` | 0 |
| [zabuxie/vc-voice-train-skill](https://github.com/zabuxie/vc-voice-train-skill) | RVC voice training skill for DSH: dataset QA, fix for the RVC 20240604 audio_norm defect (silent broadband-noise output), objective acceptance (flat/harmonics/band energy), 40k/32k pipelines, cloud-GPU SOP | 10 |

### 🚀 Apps & Runtimes Built on DSH

| Project | Description | ⭐ |
| --- | --- | --- |
| [Devin-AXIS/iPolloWork](https://github.com/Devin-AXIS/iPolloWork) | Self-evolving agent runtime AI workspace, integrating DSH subagent delegation & both plugin ecosystems | 6007 |
| [whiteguo233/OpenBiliClaw](https://github.com/whiteguo233/OpenBiliClaw) | Local-first content discovery agent: Bilibili/Xiaohongshu/Douyin/YouTube/X/Zhihu/Reddit/Weibo (DSH plugin supported) | 3299 |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | Open-source CMA-compatible agent runtime: MCP tools, sandboxed sessions, audit & replay; includes a native DSH bundle | 645 |
| [hellowind777/helloagents](https://github.com/hellowind777/helloagents) | An autonomous senior AI partner that keeps working until implementation & verification complete | 705 |
| [yejiming/MuseAI](https://github.com/yejiming/MuseAI) | Create AI characters, enter story worlds (DSH plugin supported) | 644 |
| [ctxrs/ctx](https://github.com/ctxrs/ctx) | Instant recall for coding agents: search agent session history — git blame for sessions | 1107 |
| [strukto-ai/mirage](https://github.com/strukto-ai/mirage) | The world's first unified virtual filesystem for AI agents | 3629 |
| [junhoyeo/tokscale](https://github.com/junhoyeo/tokscale) | Track token usage across AI coding agents from your terminal; global leaderboard | 5428 |
| [xiufengsun/TokenTracker](https://github.com/xiufengsun/TokenTracker) | Local-first token & cost tracker for 31 coding tools incl. DSH, with native apps | 1606 |
| [JingbiaoMei/Tokdash](https://github.com/JingbiaoMei/Tokdash) | Visualization & analytics for sessions and quota usage: heatmaps, cost tracking | 72 |
| [EthanYoQ/Invoice-Downloader](https://github.com/EthanYoQ/Invoice-Downloader) | DSH bundle for local IMAP invoice download, OCR, archival, and Excel reimbursement summaries | 415 |
| [SuperJJ007/papermachine](https://github.com/SuperJJ007/papermachine) | Desktop data-analysis app built on DeepSeek Harness, running local Python and R with inspectable execution steps and chart/table provenance. | 59 |
| [pavel-logachev/dsh-mobile](https://github.com/pavel-logachev/dsh-mobile) | Native Android app + host plugin for DSH: all project chats, photos/files, steer, agent questions; QR pairing, Wi-Fi/Tailscale, no cloud | 1 |

---

## 🧱 Core Infrastructure

| Project | Description | ⭐ |
| --- | --- | --- |
| [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | Official repo: Everything is a Plugin | 104.5k |
| [cordiverse/cordis](https://github.com/cordiverse/cordis) | Meta-framework of spatiotemporal composability — the plugin runtime behind DSH | 8488 |
| [cordiverse/paper](https://github.com/cordiverse/paper) | *A Programming Paradigm for Spatiotemporal Composability* (Cordis design paper) | — |
| [@deepseek-ai/dsh](https://www.npmjs.com/package/@deepseek-ai/dsh) | Official npm package: `npx @deepseek-ai/dsh web` to launch | — |
| [create-dsh-plugin](https://www.npmjs.com/package/create-dsh-plugin) | Scaffold a DSH plugin in seconds (tool/events/webui templates + built-in verify) | — |

## 🎓 Learning & Guides

| Project | Description | ⭐ |
| --- | --- | --- |
| [Electricitysheep/dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) | DSH 0-to-1 handbook: install, plugin dev, performance tuning, real cases (CN/EN PDF) | 776 |
| [pingfanfan/hello-dsh](https://github.com/pingfanfan/hello-dsh) | Zero-to-plugin tutorial "Everything is a plugin", with 22 Chinese skill examples | 94 |
| [omdsh-dev/dsh-plugin-dev](https://github.com/omdsh-dev/dsh-plugin-dev) | DSH plugin dev pitfall archive: cordis dual-copies, tsconfig tri-set, Windows junction, multi-frame zstd | 15 |
| [hikariming/dshfind](https://github.com/hikariming/dshfind) | Learn DSH principles, plugin marketplace & best practices | 258 |
| [DeepWiki: deepseek-harness](https://deepwiki.com/deepseek-ai/deepseek-harness) | Auto-generated docs for the official repo | — |
| [deepseekagent.io guide](https://deepseekagent.io/guides/deepseek-harness) | dsh install & architecture guide (community) | — |
| [RaulLazaro/dsh-server-setup](https://github.com/RaulLazaro/dsh-server-setup) | Production DSH on VPS: systemd, dsh-proxy plugin, Basic Auth, Pangolin tunnel, 23-plugin stack | 1 |
| [dseek.app dsh CLI guide](https://dseek.app/cli) | Unofficial dsh cheat sheet: `npx @deepseek-ai/dsh web`, Node.js requirement, headless profile and plugin commands, sourced from the official repo and npm page (community) | — |
| [DSH Learn](https://dshlearn.com) | English learning site for dsh: getting-started guides, MCP setup, plugin installs, a community extensions directory, and release/news tracking, with sources cited (community) | — |

**Official docs:** [development.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/development.md) · [architecture.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md) · [cordis-primer](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/cordis-primer.md) · [cordis-tutorial](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/cordis-tutorial/index.md) (7 plugin tutorials) · [cookbook](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/cookbook) · [capability-seams](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/capability-seams.md)

## 🤝 Community

- [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions) — feedback & discussion
- [Discord](https://discord.gg/Ycq5dCaS4) — official DeepSeek Harness community
- [dsh-plugin topic](https://github.com/topics/dsh-plugin) — tag your plugin repo for discoverability

## 🔗 Sister Project

- [DeepSeek Official Tracker](https://github.com/awesome-deepseekharness/deepseek-official-tracker) — auto-tracked feed of DeepSeek official news, changelog, releases & npm changes (GitHub Actions)

---

## ⭐ Star History & Community Growth

<!-- star-history:start -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/star-history/star-history-dark.svg">
  <img alt="Star history" src="assets/star-history/star-history-light.svg">
</picture>
<!-- star-history:end -->

> **Community momentum:** As we approach 100 stars, popular or noteworthy plugins *may* be highlighted or pinned within this list and its site (e.g., a small featured area) — no guarantees, just a way for us to gauge what the community values and keep the list fresh. [Star on GitHub](https://github.com/awesome-deepseekharness/awesome-deepseek-harness) · [Follow @deepseek_ai on X](https://x.com/deepseek_ai) · [Join Discord](https://discord.gg/Ycq5dCaS4)

<sub>Chart is self-hosted via GitHub Action (`narayann7/star-history-action`) and refreshes every 6h + on new stars. Previously used `api.star-history.com/svg` is disabled due to [GitHub stargazers API restriction](https://star-history.com/blog/github-stargazer-api-restriction). If the image is empty, wait for the first workflow run or [view interactive chart](https://star-history.com/#awesome-deepseekharness/awesome-deepseek-harness&Date).</sub>

## Contributing

Found a great project? Open a [PR](CONTRIBUTING.md) or file an issue. Criteria: DSH-related, installable & usable, with a clear purpose.

> 💡 **PR tip — get merged in <24h:** follow the new [PR template](.github/pull_request_template.md) + [CONTRIBUTING.md](CONTRIBUTING.md) checklist (bilingual entry, correct category, verified install, `dsh-plugin` topic). Well-formed PRs are auto-labelled and get priority review. If no review in 48h, feel free to friendly ping `@hdjekuue` or other maintainers in the PR.

*This list is continuously updated. Star counts as of 2026-09-14.*

## License

[CC0-1.0](LICENSE) — public domain, use freely.
