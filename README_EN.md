<div>
  <p align="center">
    <img width="100%" alt="Awesome DeepSeek Harness — a luminous whale connecting the DSH ecosystem" src="assets/media/awesome-deepseek-harness-banner.png">
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
  - [Private Beta Experiences](#private-beta-experiences)
  - [Community Discussions](#community-discussions)
- [Third-Party Clients](#third-party-clients)
  - [Desktop Apps and Distributions](#desktop-apps-and-distributions)
  - [Terminal, Mobile, and Web Experiences](#terminal-mobile-and-web-experiences)
- [Selected Plugins](#selected-plugins)
  - [Workflows and Agents](#workflows-and-agents)
  - [Context, Sessions, and Input](#context-sessions-and-input)
  - [Browser, Vision, and Interface](#browser-vision-and-interface)
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
- [# dsh-plugin](https://github.com/topics/dsh-plugin): DSH plugin projects on GitHub
- [DeepSeek Discord](https://discord.gg/Ycq5dCaS4): official Discord community, primarily in Chinese
- ["DeepSeek Harness"](https://x.com/search?q=%22DeepSeek%20Harness%22%20OR%20dsh-plugin&src=typed_query&f=live): live X search results for DSH

You are also welcome to join the Chinese DeepSeek Harness community. Scan the QR code to add the WeCom assistant and complete the group application form; the assistant will invite you after submission.

<table>
  <thead>
    <tr>
      <th align="center">WeCom Assistant</th>
      <th align="center">Group Application</th>
      <th align="center">WeChat Official Account</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><img src="https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/master/assets/community-wecom-assistant.png" alt="DeepSeek Harness WeCom assistant QR code" width="180" height="180"></td>
      <td align="center"><a href="https://trtgsjkv6r.feishu.cn/share/base/form/shrcnIt5twSVdLGD52KJBckGCgg"><img src="https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/master/assets/community-wecom-survey.png" alt="DeepSeek Harness community application QR code" width="180" height="180"></a></td>
      <td align="center"><img src="https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/master/assets/community-wechat-official-account.png" alt="DeepSeek Harness team WeChat Official Account QR code" width="180" height="180"></td>
    </tr>
  </tbody>
</table>

## Community Resources

### Guides and Analysis

| Guide | Format | Coverage |
| --- | --- | --- |
| [Dissecting DeepSeek Harness](https://xueai.app/slides/learn.html#dsh-1.html) | Interactive source-code course | Breaks down sessions, context, tools, sandboxing, Code Mode, Subagents, and other core mechanisms; some content requires signing in |
| [DeepSeek Harness from Zero to One](https://yanhua1010.github.io/dsh-harness-tutorial/) | Chinese guide and demos | Covers concepts, source walkthroughs, eight demos, and a `mini-harness` teaching project; based on `0.1.0-rc.6` |
| [Hello DSH](https://github.com/pingfanfan/hello-dsh) | Plugin introduction and Skills | Goes from terminal setup to a first code plugin, with 22 Chinese Skill examples, dry-run installation, and uninstall steps; verified on `0.1.0-rc.6` |

### Private Beta Experiences

The following articles come from DSH private-beta participants and plugin authors. They complement the official documentation with source-level practice, plugin development, and early community experience.

| Article | WeChat Account | First-hand Evidence and Why It Matters |
| --- | --- | --- |
| [From Vibe Coding to Vibe Assembly: I Replaced DeepSeek Harness's Official Agent Loop](https://mp.weixin.qq.com/s?src=11&timestamp=1786637084&ver=6902&signature=AmuyYYqPuPbw5G2jpJYbyn32WfqGpqQ5LFXWFbkahd791Xoyf5AHdeO0xALhXn7HBVWBPHrcKBA1-73Hzux4HNsbi3QRok89GJsW7GadbXAn4MMl5xxa9D7BZYd98ISQ&new=1) | 自然膨胀 | The author states that they received a private-beta invitation and built an assembler that replaces the Agent Loop; includes a self-reported 76-round comparison and reflections on Vibe Assembly. Related project: [TT-Wang/sliceagent](https://github.com/TT-Wang/sliceagent) |
| [DeepSeek Harness Private-Beta Technical Breakdown: Architecture, Ecosystem, Task Engine, and Operations](https://mp.weixin.qq.com/s?src=11&timestamp=1786636586&ver=6902&signature=5qBFaqg8tUoHqeaARYXZXqQR7TIhm6-A8hTn1l89K7fBYg75lM9%2AgkvFwRsFlpuNZxkOLFMp3Pz5RC0FXAVb5kSFba2A1f6OHfmA3Eb08bNBQi330OvXQaffRB2FKNI%2A&new=1) | cookbook之杂七杂八 | The author reports tracking private-beta snapshots for more than ten days and building supporting tools; covers Cordis events, Session Log, Surface, context compression, persistence, and operations. Related project: [fakechris/dsh-track](https://github.com/fakechris/dsh-track) |
| [DeepSeek Harness May Be the Agent Harness That Best Matches Your Imagination](https://mp.weixin.qq.com/s?src=11&timestamp=1786636558&ver=6902&signature=ea1xi1hCFVZn4aDcUyC1SuFiyIr7xADTcQK%2AM1YmlXj2ffHZ6-ensj06csdXXayjppWFX00kyH8C7vTtl9EOEyfXLnWFmffmcqMmFAfdi8NApznAvYLtb11iP8%2AHjpgE&new=1) | GTOC | The author reports participating in the beta and porting Humanize; discusses the ecosystem value of the Web UI over a TUI, the difference between Plugins and Skills, the Trajectory timeline, and product possibilities. Related project: [zevorn/dsh-humanize](https://github.com/zevorn/dsh-humanize) |
| [Thoughts After Participating in the DSH Private Beta](https://mp.weixin.qq.com/s?src=11&timestamp=1786637135&ver=6902&signature=f2kUSJauxSlkVXP-gNNPIRTnOpnLFlErLe4br99jXqa5DQMhCDnbDWewbtAMfQ6VIMH0W6Ac95tZ4VyWhtAVyNZawkPrsAw5igtwqPl5lNxNl8Mhd9tbuMK3IW%2AAvojR&new=1) | 减AI | The author explicitly states that they joined the beta and released [dsh-ads](https://github.com/Nagi-ovo/dsh-ads), [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize), and [dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins); useful for understanding how early plugin authors viewed the ecosystem. |

### Community Discussions

Public long-form social posts with substantial arguments, practical detail, or first-hand context that supplement gaps in official materials.

| Post | Author and Context | Summary |
| --- | --- | --- |
| [Understanding DSH from an Early Participant's Perspective](https://x.com/jiayuan_jy/status/2087911060154314963) | [Jiayuan (JY) Zhang](https://x.com/jiayuan_jy) · 2026-08-13; the author reports receiving repository access one month early | Frames DSH as both a working Coding Agent and an Agent development framework; uses a “LEGO car” analogy for Everything is a Plugin and discusses runtime self-extension, early self-evolving software, current maturity, and functional-programming characteristics. |
| [Understanding DSH as an Agent Runtime / Agent OS](https://x.com/anion_ex/status/2087910193783025853) | [Anionex](https://x.com/anion_ex) · 2026-08-13; private-beta participant and plugin author | Explains DSH through the composability of models, tools, policies, storage, context, interfaces, and Loops, then discusses limited Agent visibility into the runtime and controlled self-extension. |

## Third-Party Clients

The following projects provide standalone user interfaces, distribution formats, or productized assemblies rather than a single tool capability.

> **Classification note:** Distributions and forks directly reuse, modify, or repackage the complete DSH Runtime and cannot be installed with `dsh plugin`, so they are not plugins. Standalone clients connect to DSH through Web, RPC, ACP, or companion bridge plugins. Both remain important parts of the Harness ecosystem.

### Desktop Apps and Distributions

| Project | Platform / Form | Description |
| --- | --- | --- |
| [TinyWhale](https://github.com/aimierbear/TinyWhale) | macOS · Electron · Distribution fork | Directly forks `deepseek-ai/deepseek-harness` and adds a desktop shell; connects to an existing Web UI or launches a full `dsh web` Runtime, so it is not a plugin |
| [Oh-DSH-Desktop](https://github.com/hust-open-atom-club/oh-dsh-desktop) | macOS · Electron | Extensible workbench bundling the DSH Runtime, Node.js, PTY, workspace tools, and a plugin-market preview |
| [DSH Desktop](https://github.com/dataelement/dsh-desktop) | macOS / Windows · Electron | Cross-platform desktop client for managing local Harness instances, workspaces, random ports, Profiles, plugins, and sessions |
| [dsh-launcher](https://github.com/Ruler4396/dsh-launcher) | Windows · WebView2 | Lightweight launcher with silent startup, a standalone window, portable packages, and MSI distribution |

### Terminal, Mobile, and Web Experiences

| Project | Type | Description |
| --- | --- | --- |
| [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | TUI Bundle | Claude Code-style full-screen terminal, streaming status, context instruments, and session rollback |
| [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | TUI Bundle | Complete terminal interaction layer evolved from Tianshu, with state driven by the DSH session event stream |
| [dsh-tui](https://github.com/openguardrails/dsh-tui) | TUI Bundle · Early | Supports local DeepSeek and offline use; under active development, and the pre-port test suite is not yet running |
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

### Context, Sessions, and Input

- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor): audits the context-token cost and conflicts of AGENTS.md, Skill directories, and tool Schemas.
- [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve): cross-session memory, background evolution, and branch-aware behavior.
- [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file): searches workspace files with `@file` in the composer and attaches their content.
- [dsh-message-edit](https://github.com/Moeblack/dsh-message-edit): branch-based message editing, retry, regeneration, and version timelines.
- [dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio): edits system-prompt fragments with a live preview.
- [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind): rewinds conversations and workspace state through a persistent Change Ledger.
- [dsh-compaction-instant](https://github.com/KitDoesIt/dsh-compaction-instant): replaces LLM summarization with deterministic compilation and restores compressed content through `recall` / `search`; replacing the built-in compactor requires an npm alias and is a deeper runtime modification.

### Browser, Vision, and Interface

- [dsh-browser](https://github.com/Lum1104/dsh-browser): Chrome sidebar extension that lets DSH operate the current browser page directly.
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit): image Q&A, long-screenshot OCR, UI reconstruction, grounding, and pixel comparison.
- [dsh-computer-use](https://github.com/Anionex/dsh-computer-use): native macOS Computer Use Bundle that prioritizes Accessibility, rejects stale observations, and scopes permissions by app, Session, and action; currently an early `0.1.0` release installed from a source checkout.
- [modlens](https://github.com/liustack/modlens): gives text-only models vision through pasted images and model routing, offering an alternative to standalone vision tools that process workspace images.
- [dsh-better-browser](https://github.com/titanwings/dsh-better-browser): controls a real browser with retained login state through the external Kimi WebBridge and maintains tab sessions per task; requires WebBridge to be installed and running separately.
- [dsh-web-review](https://github.com/CanglongCl/dsh-web-review): previews pages inside DSH, lets users select elements, and submits selectors, accessible names, and change intent; includes a real frontend-modification eval suite, but currently declares no license.
- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar): sidebar workbench integrating files, terminal, Git, Subagents, and third-party tabs.
- [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil): previews and edits OpenPencil designs inside DSH.
- [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize): generates sandboxed, interactive HTML cards in the conversation stream.
- [dsh-notification](https://github.com/omdsh-dev/dsh-notification): configurable desktop notifications based on task outcomes and keywords.
- [dsh-share](https://github.com/hellodigua/dsh-share): generates and shares DSH conversation content in one click.

### Themes and Skins

- [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale): whale-girl theme collection for the DSH Web GUI; currently includes the hot-pluggable `maid-atelier` Web Client Bundle, installable and removable with `dsh plugin --profile web add ...`. Licensed under **CC BY-NC-SA 4.0**, which prohibits commercial use.

## External Integrations

- [Nowledge Mem](https://mem.nowledge.co/integrations/deepseek-harness): adds Working Memory, prompt-time retrieval, MCP tools, and session capture to DSH; depends on the external Nowledge Mem product and `nmem` CLI and should be evaluated separately from open-source plugins.
- [dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime): early runtime bridge connecting Multica and DSH; the package is currently marked `private` and `UNLICENSED`, with incomplete installation and distribution boundaries.
- [dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot): connects local DSH to Feishu / Lark with streaming cards, workspaces, session recovery, and approvals; licensed under AGPL-3.0, with app credentials stored locally in plaintext configuration protected by mode `600`.

## Developer Tools

- [dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check): checks Manifests, Patches, build traps, and directory inclusion status.
- [dsh-fail-logger](https://github.com/Areium/dsh-fail-logger): redacts, deduplicates, and categorizes tool failures into a machine-maintained Skill record; it records problems without changing behavior automatically.
- [deepseek-harness-action](https://github.com/Lixiaoyiao/deepseek-harness-action): uses DSH in GitHub Actions for PR review, CI diagnosis, automated fixes, and Issue-to-PR workflows; write access is off by default, and validation runs in a credential-free container.
- [dsh-suite](https://whyihaveyou.github.io/dsh-suite/): bilingual DSH ecosystem index with plugin search, a `create-dsh-plugin` scaffolder, and basic compatibility metadata; still early, with compatibility checks currently limited to static dependency comparison while install and configuration-assembly validation remain unfinished.
- [deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp): lets other Agents discover, inspect, install, and invoke DSH plugins through MCP; installation and runtime are disabled by default and produce their respective side effects only when `--allow-install` / `--allow-runtime` is explicitly enabled.
- [dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture): captures and stores outbound model API Payloads for request-assembly debugging.
- [dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool): creates and manages sandboxed JavaScript tools through a Monaco editor.
- [dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode): opens the current workspace directly in VS Code from the Web UI.

## Acknowledgements

Thanks to the DeepSeek Harness team, the Cordis community, the first private-beta developers, and everyone contributing public documentation, plugins, clients, practical experience, and ecosystem indexes.

[![Liang Evolution Slider: current state Liang Sheng; click to open the full interactive version](assets/media/liang-intensity-calibrator-card-liangsheng-v2.png)](https://lichtspektrum.github.io/liang-intensity-calibrator/)
