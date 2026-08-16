<div>
  <p align="center">
    <img width="100%" alt="Agent = Model + Harness — a luminous whale connecting the DSH ecosystem" src="assets/media/awesome-deepseek-harness-banner.png">
  </p>
</div>

<p align="center">
  <a href="README.md">简体中文</a> · English · <a href="README_JA.md">日本語</a>
</p>

<p align="center">
  The ultimate guide to DeepSeek Harness: resources, tutorials, plugins, and tools<br>
</p>

<p align="center">
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
  <a href="https://github.com/topics/dsh-plugin"><img src="https://img.shields.io/badge/GitHub-dsh--plugin-0969da?style=flat-square" alt="GitHub topic: dsh-plugin"></a>
  <a href="https://github.com/libukai/awesome-deepseek-harness/stargazers"><img src="https://img.shields.io/github/stars/libukai/awesome-deepseek-harness?style=flat-square" alt="GitHub Stars"></a>
  <a href="https://github.com/libukai/awesome-deepseek-harness/issues"><img src="https://img.shields.io/badge/Issues-welcome-brightgreen.svg?style=flat-square" alt="Issues welcome"></a>
</p>

This project follows a curated, quality-over-quantity approach to collecting excellent DeepSeek Harness resources and building a richer Agent ecosystem with AI practitioners.

> If this project helps you, please consider giving it a ⭐. You can also follow [@李不凯正在研究](https://x.com/libukai) on X for more hands-on Agent content.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Quick Start](#quick-start)
  - [Launch the Web UI](#launch-the-web-ui)
  - [Run from Source](#run-from-source)
  - [Use the Python SDK](#use-the-python-sdk)
  - [Install Plugins](#install-plugins)
- [Official Resources](#official-resources)
  - [Packages and Integrations](#packages-and-integrations)
  - [Source Repositories](#source-repositories)
  - [Official Documentation](#official-documentation)
  - [Community](#community)
- [Community Resources](#community-resources)
  - [Guides and Analysis](#guides-and-analysis)
  - [Community Discussions](#community-discussions)
- [Third-Party Clients](#third-party-clients)
  - [Desktop Apps and Distributions](#desktop-apps-and-distributions)
  - [Terminal, Mobile, and Web Experiences](#terminal-mobile-and-web-experiences)
- [Selected Plugins](#selected-plugins)
  - [Workflows and Agents](#workflows-and-agents)
  - [Context, Sessions, and Input](#context-sessions-and-input)
  - [Browser, Vision, and Interface](#browser-vision-and-interface)
  - [Sandboxing and Execution](#sandboxing-and-execution)
  - [Themes and Skins](#themes-and-skins)
- [External Integrations](#external-integrations)
- [Developer Tools](#developer-tools)
- [Acknowledgements](#acknowledgements)

## Quick Start

[DeepSeek Harness](https://deepseek.com/harness/) (also known as DSH or `dsh`) is an open-source Agent Harness project from DeepSeek AI. Built on [Cordis](https://github.com/cordiverse/cordis), it follows an **Everything is a Plugin** architecture: model adapters, tools, session logs, interfaces, and the Agent Loop can all be composed and replaced through a plugin tree.

### Launch the Web UI

Install [Node.js](https://nodejs.org/) 22.19.x or 24+ (24+ recommended), then run:

```bash
npx @deepseek-ai/dsh web
```

Open `http://127.0.0.1:3080` by default. Configure a model provider under **Settings → Models**, then create a session. See the [official quick start](https://deepseek-harness.github.io/deepseek-harness/guide/quickstart) and [model provider guide](https://deepseek-harness.github.io/deepseek-harness/guide/providers) for details.

### Run from Source

```bash
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness
pnpm install
pnpm run build
pnpm dsh web
```

### Use the Python SDK

The official Python SDK lets you call Harness programmatically through its bundled runtime, without requiring a system Node.js installation. It currently requires Python 3.10+. Refer to the [official Python SDK guide](https://deepseek-harness.github.io/deepseek-harness/guide/python-sdk) for supported platforms and current limitations.

```bash
python -m venv .venv
. .venv/bin/activate
python -m pip install deepseek-harness-sdk
```

### Install Plugins

`web` and `headless` are built-in distribution Profiles. External plugins join a target Profile as Bundles that declare `dsh.bundle`:

```bash
dsh plugin --profile web add <package-or-git-spec>
dsh --profile web --dump-config
```

When installing from a Git repository, pin a commit and inspect its installation scripts first. pnpm may require explicit approval for dependency build scripts, which execute outside the Agent sandbox. See the [official plugin packaging and installation guide](https://deepseek-harness.github.io/deepseek-harness/develop/basic/publish) for the complete mechanism.

## Official Resources

The official project provides an open-source repository, a companion paper, extensive reference documentation, and an actively maintained developer community.

### Packages and Integrations

- [@deepseek-ai/dsh](https://www.npmjs.com/package/@deepseek-ai/dsh): official npm launcher package for the CLI and Web UI
- [deepseek-harness-sdk](https://pypi.org/project/deepseek-harness-sdk/): official Python SDK for programmatic DSH integration

### Source Repositories

- [GitHub](https://github.com/deepseek-ai/deepseek-harness): source code, issues, releases, and contributors
- [Paper](https://github.com/cordiverse/paper): detailed paper on the Cordis-based product architecture

### Official Documentation

- [Chinese website](https://deepseek.com/harness/): product positioning and core concepts
- [Documentation](https://deepseek-harness.github.io/deepseek-harness/guide/quickstart): entry point for usage, plugin development, and architecture reference

### Community

- [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions): questions, usage discussions, and proposals
- [DeepSeek Discord](https://discord.gg/Ycq5dCaS4): official Discord community, primarily in Chinese
- ["DeepSeek Harness"](https://x.com/search?q=%22DeepSeek%20Harness%22%20OR%20dsh-plugin&src=typed_query&f=live): live X search results for DSH
- [# dsh-plugin](https://github.com/topics/dsh-plugin): DSH plugin projects on GitHub

## Community Resources

### Guides and Analysis

| Guide | Format | Coverage |
| --- | --- | --- |
| [DeepSeek Harness from Zero to One](https://yanhua1010.github.io/dsh-harness-tutorial/) | Chinese guide and demos | Covers concepts, source walkthroughs, eight demos, and a `mini-harness` teaching project |
| [DeepSeek Harness: From First Boot to Teardown](https://github.com/alchaincyf/deepseek-harness-orange-book) | Chinese hands-on ebook | Available as PDF, EPUB, and HTML, with the full system prompt, a 129-line default boot manifest, and three raw session logs |
| [Dissecting DeepSeek Harness](https://xueai.app/slides/learn.html#dsh-1.html) | Interactive source-code course | Breaks down sessions, context, tools, sandboxing, Code Mode, Subagents, and other core mechanisms |
| [What Cordis Is Doing, Seen Through DeepSeek Harness](https://blog.antinomie.org) | Chinese architecture essay | Explains the Cordis mental model from a plugin author's perspective and how complexity moves inside the system |
| [DeepSeek Harness Handbook](https://github.com/Electricitysheep/dsh-handbook) | Bilingual handbook | 14 chapters on install, plugin development, security, and cost, with online reading, PDFs, and runnable examples; content is CC BY-NC-SA 4.0 and based on `0.1.0-rc.6` |

### Community Discussions

Public long-form social posts with substantial arguments, practical detail, or first-hand context that supplement gaps in official materials.

| Post | Author and Context | Summary |
| --- | --- | --- |
| [Understanding DSH from an Early Participant's Perspective](https://x.com/jiayuan_jy/status/2087911060154314963) | [Jiayuan (JY) Zhang](https://x.com/jiayuan_jy); the author reports receiving repository access one month early | Frames DSH as both a working Coding Agent and an Agent development framework; uses a “LEGO car” analogy for Everything is a Plugin and discusses runtime self-extension, early self-evolving software, current maturity, and functional-programming characteristics. |
| [Understanding DSH as an Agent Runtime / Agent OS](https://x.com/anion_ex/status/2087910193783025853) | [Anionex](https://x.com/anion_ex); private-beta participant and plugin author | Explains DSH through the composability of models, tools, policies, storage, context, interfaces, and Loops, then discusses limited Agent visibility into the runtime and controlled self-extension. |
| [After a Night with DeepSeek Harness, I Found It Challenging Claude Code the Minecraft Way](https://www.pingwest.com/a/316436) | PingWest; launch-night media observation | Maps DSH core, plugins, directories, and distributions to Minecraft vanilla, Mods, CurseForge, and modpacks, while recording launch-night compatibility and security debates. |
| [Reading DSH Against Codex: Declarative Plugins vs a Swappable Agent Loop](https://x.com/grapeot/status/2088019011561005382) | [鸭哥](https://x.com/grapeot); line-by-line source comparison with Codex. Expanded essay at [yage.ai](https://yage.ai/share/dsh-deep-analysis-20260813.html) | Contrasts Codex's declarative plugins with DSH's in-process imperative plugins, arguing that everyday coding does not need Cordis complexity; the one structural advantage is a hot-swappable Agent Loop that gives a self-evolving harness a physical slot. |

## Third-Party Clients

The following projects provide standalone user interfaces, distribution formats, or productized assemblies rather than a single tool capability.

> **Classification note:** Distributions and forks directly reuse, modify, or repackage the complete DSH Runtime and cannot be installed with `dsh plugin`, so they are not plugins. Standalone clients connect to DSH through Web, RPC, ACP, or companion bridge plugins. Both remain important parts of the Harness ecosystem.

### Desktop Apps and Distributions

| Project | Platform / Form | Description |
| --- | --- | --- |
| [DeepSeek Harness Desktop (anywhere-labs)](https://github.com/anywhere-labs/deepseek-harness-desktop) | macOS (Apple Silicon) / Windows · Electron | Packages the official Runtime and Web UI with local-service lifecycle management, a system tray, and desktop windows; `v2.0.0` adds desktop Profile and pnpm services, while the plugin marketplace, mobile remote control, and Channels remain planned |
| [dsh-desktop](https://github.com/bruc3van/dsh-desktop) | macOS / Windows · Electron · Early | Reuses the official Web UI unchanged and keeps long-running tasks alive in the tray; disables renderer Node integration, restricts navigation, and verifies update packages with SHA-256, but the Agent process retains normal user-level file access and release packages are not formally developer-signed |
| [DeepSeek Harness Desktop (steven-kid)](https://github.com/steven-kid/deepseek-harness-desktop) | macOS / Windows / Linux · Electron · Early | Minimal shell that preserves the upstream Web UI, uses a random loopback port, Electron sandboxing, and `contextIsolation`, and smoke-tests packaged startup across platforms; macOS builds are not notarized and Windows builds are not commercially signed |
| [DeepSeek Harness Desktop App](https://github.com/vibeinging/deepseek-harness-desktop-app) | macOS / Windows · Electron · Early workbench | Adds projects, Git Worktrees, a browser, Canvas, Sites, and Office artifacts on the same DSH runtime path; currently at `v0.0.1`, with packaged-app validation still at an early stage |
| [TinyWhale](https://github.com/aimierbear/TinyWhale) | macOS · Electron · Distribution fork | Directly forks `deepseek-ai/deepseek-harness` and adds a desktop shell; connects to an existing Web UI or launches a full `dsh web` Runtime, so it is not a plugin |
| [Oh-DSH](https://github.com/hust-open-atom-club/oh-dsh) | macOS / Linux / Windows · Community distribution | Packages DSH, Node.js, and local capabilities as Desktop, Web, and TUI editions with tiered installers and a unified `ohdsh` launcher |
| [DSH Desktop](https://github.com/dataelement/dsh-desktop) | macOS / Windows · Electron | Cross-platform desktop client for managing local Harness instances, workspaces, random ports, Profiles, plugins, and sessions |
| [dsh-launcher](https://github.com/Ruler4396/dsh-launcher) | Windows · WebView2 | Lightweight launcher with silent startup, a standalone window, portable packages, and MSI distribution |

### Terminal, Mobile, and Web Experiences

| Project | Type | Description |
| --- | --- | --- |
| [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | TUI Bundle | Claude Code-style full-screen terminal, streaming status, context instruments, and session rollback |
| [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | TUI Bundle | Complete terminal interaction layer evolved from Tianshu, with state driven by the DSH session event stream |
| [dsh-tui](https://github.com/openguardrails/dsh-tui) | TUI Bundle · Early | Supports local DeepSeek and offline use; under active development, and the pre-port test suite is not yet running |
| [dsh-mini-tui](https://github.com/boxeryao/dsh-mini-tui) | TUI plugin · Early | Lightweight terminal UI connected directly to the DSH Runtime; MIT and `v0.2.0`, installed from npm and developed and tested against DSH `0.1.0-rc.6` |
| [Orbis](https://github.com/icodesign/orbis) | Mobile remote control · Beta | Uses a DSH plugin for device pairing, end-to-end encrypted transport, and real-time multi-device updates |
| [dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | Web UI collection | Collects task boards, Git Graph, mobile UI, skins, pets, runtime statistics, and other components |
| [dsh-web](https://github.com/Tom6814/dsh-web) | Docker Web · Early | Deploys a complete Web interface, workspace, and plugin market with Docker; development is moving quickly, and a data volume is required to persist configuration and sessions |

> Inclusion does not imply that a project is signed, notarized, self-contained, or production-ready. Check each project's README and Releases for current status.

## Selected Plugins

### Workflows and Agents

- [dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit): deterministic tools for time, encoding, JSON, calculations, CSV, regex, Markdown, Diff, and more.
- [dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research): adaptive deep-research orchestrator for DSH.
- [dsh-101](https://github.com/bill9109/dsh-101): learning mode for reading and understanding the official documentation inside DSH.
- [dsh-auto-approval](https://github.com/Andy8647/dsh-auto-approval): classifies tool calls with rules and models, then returns `allow / deny` approval decisions.
- [mstar-harness](https://github.com/btspoony/mstar-harness): Skill-driven Harness / Loop Engineering workflow plugin.
- [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams): Agent Teams capabilities for DSH.
- [dsh-automation](https://github.com/titanwings/dsh-automation): runs scheduled standalone tasks in fresh root Agents and Sessions, preserving definition revisions, run history, and explicit workspace and permission boundaries.
- [dsh-plannotator](https://github.com/titanwings/dsh-plannotator): annotates Agent plans section by section and submits structured feedback, with draft isolation, version binding, and stale-plan rejection.
- [dsh-record-replay](https://github.com/humblebanana/dsh-record-replay): records macOS desktop workflows and generates Skills; currently requires Xcode Command Line Tools and a separate local `open-record-replay` source checkout.
- [dsh-science-workbench](https://github.com/poplarity/dsh-science-workbench): reproducible science workbench that records cells, figures, feedback, and rerun lineage in a manifest, together with environment snapshots and input/output hashes; MIT and `v0.1.1`, still Early.

### Context, Sessions, and Input

- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor): audits the context-token cost and conflicts of AGENTS.md, Skill directories, and tool Schemas.
- [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve): cross-session memory, background evolution, and branch-aware behavior.
- [dsh-noema](https://github.com/ZSeven-W/dsh-noema): connects DSH to local-first Noema long-term memory, with recall-before-work, a settings page, and import from Codex, Claude Code, Cursor, and other tools; MIT and `0.1.0-rc.1`, verified on DSH `0.1.0-rc.6`, still new and marked Early.
- [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file): searches workspace files with `@file` in the composer and attaches their content.
- [dsh-message-edit](https://github.com/Moeblack/dsh-message-edit): branch-based message editing, retry, regeneration, and version timelines.
- [dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio): edits system-prompt fragments with a live preview.
- [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind): rewinds conversations and workspace state through a persistent Change Ledger.
- [dsh-compaction-instant](https://github.com/KitDoesIt/dsh-compaction-instant): replaces LLM summarization with deterministic compilation and restores compressed content through `recall` / `search`; replacing the built-in compactor requires an npm alias and is a deeper runtime modification.
- [dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report): generates daily, weekly, monthly, yearly, and custom-range reports read-only from session event logs without rewriting session history; MIT and `v0.2.0`, still Early.

### Browser, Vision, and Interface

- [dsh-browser](https://github.com/Lum1104/dsh-browser): Chrome sidebar extension that lets DSH operate the current browser page directly.
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit): image Q&A, long-screenshot OCR, UI reconstruction, grounding, and pixel comparison.
- [dsh-computer-use](https://github.com/Anionex/dsh-computer-use): native macOS Computer Use Bundle that prioritizes Accessibility, rejects stale observations, and scopes permissions by app, Session, and action; currently an early `0.1.0` release installed from a source checkout.
- [modlens](https://github.com/liustack/modlens): gives text-only models vision through pasted images and model routing, offering an alternative to standalone vision tools that process workspace images.
- [ModSearch](https://github.com/liustack/modsearch): adds Web search, X search, and focused page reading to DSH with structured evidence; MIT and released as `v5.4.2`, while individual engines may require external CLIs, sign-in, API keys, quotas, and their own service terms.
- [dsh-better-browser](https://github.com/titanwings/dsh-better-browser): controls a real browser with retained login state through the external Kimi WebBridge and maintains tab sessions per task; requires WebBridge to be installed and running separately.
- [dsh-web-review](https://github.com/CanglongCl/dsh-web-review): previews pages inside DSH, lets users select elements, and submits selectors, accessible names, and change intent; includes a real frontend-modification eval suite, but currently declares no license.
- [dsh-mcp-apps](https://github.com/sugarforever/dsh-mcp-apps): turns DSH Web into an MCP Apps Host and renders interactive Apps in sandboxed iframes with CSP and Permission Policy controls; MIT and `v0.1.1`, but still new and marked Early.
- [dsh-genui](https://github.com/omdsh-dev/dsh-genui): renders charts, forms, Mermaid diagrams, 3D scenes, and other interactive components in replies, then sends action events back to the model; MIT, no formal Release yet, and mainly Git-installed, so marked Early.
- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar): sidebar workbench integrating files, terminal, Git, Subagents, and third-party tabs.
- [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil): previews and edits OpenPencil designs inside DSH.
- [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize): generates sandboxed, interactive HTML cards in the conversation stream.
- [dsh-notification](https://github.com/omdsh-dev/dsh-notification): configurable desktop notifications based on task outcomes and keywords.
- [dsh-share](https://github.com/hellodigua/dsh-share): generates and shares DSH conversation content in one click.

### Sandboxing and Execution

- [sandbox-micro](https://github.com/omdsh-dev/sandbox-micro): provides a fail-closed microsandbox microVM capability; both the Provider and model-facing tools stay disabled after installation until separately enabled, and failed platform checks never degrade to unconstrained host execution. It has test directories but no formal Release; `package.json` declares BSD-3-Clause, but the repository has no root `LICENSE` file, so it is marked Early.
- [dsh-win32](https://github.com/sjh9714/dsh-win32): Windows persistent shell that works inside the sandbox, plus a minimal mode and `doctor` diagnostics; MIT and `v0.9.3`, built against DSH `0.1.0-rc.6`. Its optional sandboxed mode downloads GPLv2 BusyBox, and `setup` enables pnpm through Corepack when missing, so run it only with informed consent.

### Themes and Skins

- [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale): whale-girl theme collection for the DSH Web GUI; currently includes the hot-pluggable `maid-atelier` Web Client Bundle, installable and removable with `dsh plugin --profile web add ...`. Licensed under **CC BY-NC-SA 4.0**, which prohibits commercial use.

## External Integrations

- [Ollama](https://github.com/ollama/ollama/blob/main/docs/integrations/deepseek-harness.mdx): Ollama's official launcher for DSH, not a DeepSeek-official distribution. Use `ollama launch dsh` to install and start DSH, choose an Ollama model, and configure Web search; settings are stored separately in `~/.ollama/launch/dsh/settings.yaml` and do not modify `~/.dsh/settings.yaml`. Currently marked as a developer preview.
- [Sealos Skills](https://github.com/labring/sealos-skills): a DSH Profile Bundle maintained by the Sealos team, providing eight cloud-native Skills for application deployment, databases, object storage, and related workflows. Actual use changes external Sealos Cloud resources and requires an account and relevant credentials; login writes `~/.sealos/kubeconfig`, and some flows require a relaxed sandbox. `package.json` declares MIT, but the repository currently has no root `LICENSE` file.
- [Nowledge Mem](https://mem.nowledge.co/integrations/deepseek-harness): adds Working Memory, prompt-time retrieval, MCP tools, and session capture to DSH; depends on the external Nowledge Mem product and `nmem` CLI and should be evaluated separately from open-source plugins.
- [Open Design](https://github.com/nexu-io/open-design): local-first open-source design application with a native DSH runtime adapter for structured streaming, model discovery, cancellation, and session resume; Apache-2.0 and a large standalone product rather than an ordinary plugin.
- [dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime): early runtime bridge connecting Multica and DSH; the package is currently marked `private` and `UNLICENSED`, with incomplete installation and distribution boundaries.
- [dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot): connects local DSH to Feishu / Lark with streaming cards, workspaces, session recovery, and approvals; licensed under AGPL-3.0, with app credentials stored locally in plaintext configuration protected by mode `600`.
- [dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot): Tencent-maintained QQ Bot plugin with QR-code binding, isolated direct/group sessions, and restart recovery; MIT and `0.1.0`, with credentials saved to the local Profile during binding.
- [LoongSuite DSH Plugin](https://github.com/loongsuite/dsh-plugin): converts Agent turns, model calls, tool executions, and token usage into OpenTelemetry GenAI traces for OTLP backends such as Jaeger, Tempo, SigNoz, and Langfuse; Apache-2.0 and Beta, tested with DSH `0.1.0-rc.6` in headless and Web profiles. Content capture is off by default; enabling it may export source code, credentials, and personal data.

## Developer Tools

- [dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check): checks Manifests, Patches, build traps, and directory inclusion status.
- [dsh-fail-logger](https://github.com/Areium/dsh-fail-logger): redacts, deduplicates, and categorizes tool failures into a machine-maintained Skill record; it records problems without changing behavior automatically.
- [deepseek-harness-action](https://github.com/Lixiaoyiao/deepseek-harness-action): uses DSH in GitHub Actions for PR review, CI diagnosis, automated fixes, and Issue-to-PR workflows; write access is off by default, and validation runs in a credential-free container.
- [Awesome DSH Plugins Radar](https://github.com/AdamPlatin123/awesome-dsh-plugins): automated compatibility radar separating discovery, static, compile, and runtime signals; MIT, fast-changing, and without a Release, while “runtime usable” is not a security audit or quality guarantee, so marked Early.
- [dsh-market](https://github.com/dsh-market/dsh-market): in-DSH plugin market for browsing, searching, installing, updating, and uninstalling projects listed by `awesome-dsh-plugin`; MIT and `v1.9.0`. Build scripts are blocked by default and the install endpoint accepts same-origin POST only, but directory inclusion is not a security endorsement.
- [dsh-suite](https://whyihaveyou.github.io/dsh-suite/): bilingual DSH ecosystem index with plugin search, a `create-dsh-plugin` scaffolder, and basic compatibility metadata; its catalog refreshes hourly and it installs listed packages into a temporary Profile for daily compatibility checks. A successful install is not a security audit or quality guarantee.
- [deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp): lets other Agents discover, inspect, install, and invoke DSH plugins through MCP; installation and runtime are disabled by default and produce their respective side effects only when `--allow-install` / `--allow-runtime` is explicitly enabled.
- [dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture): captures and stores outbound model API Payloads for request-assembly debugging.
- [dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool): creates and manages sandboxed JavaScript tools through a Monaco editor.
- [dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode): opens the current workspace directly in VS Code from the Web UI.
- [dsh-movein](https://github.com/sjh9714/dsh-movein): moves Claude Code Skills, MCP servers, hooks, and global instructions into DSH with one command; dry-run by default, `CLAUDE.md` is read natively, and session history is out of scope. MIT, verified on DSH `0.1.0-rc.6`, still new and marked Early.

## Acknowledgements

Thanks to the DeepSeek Harness team, the Cordis community, the first private-beta developers, and everyone contributing public documentation, plugins, clients, practical experience, and ecosystem indexes.

[![Liang Evolution Slider: current state Liang Sheng; click to open the full interactive version](assets/media/liang-intensity-calibrator-card-liangsheng-v2.png)](https://lichtspektrum.github.io/liang-intensity-calibrator/)
