<div>
  <p align="center">
    <img width="100%" alt="Awesome DeepSeek Harness — a luminous whale connecting the DSH ecosystem" src="assets/media/awesome-deepseek-harness-banner.png">
  </p>
</div>

<p align="center">
  简体中文 · <a href="README_EN.md">English</a> · <a href="README_JA.md">日本語</a>
</p>

<p align="center">
  DeepSeek Harness 终极指南：资料、教程、插件与工具<br>
</p>

<p align="center">
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
  <a href="https://github.com/topics/dsh-plugin"><img src="https://img.shields.io/badge/GitHub-dsh--plugin-0969da?style=flat-square" alt="GitHub topic: dsh-plugin"></a>
  <a href="https://github.com/libukai/awesome-deepseek-harness/stargazers"><img src="https://img.shields.io/github/stars/libukai/awesome-deepseek-harness?style=flat-square" alt="GitHub Stars"></a>
  <a href="https://github.com/libukai/awesome-deepseek-harness/issues"><img src="https://img.shields.io/badge/Issues-welcome-brightgreen.svg?style=flat-square" alt="Issues welcome"></a>
</p>

本项目致力于遵循少而精的原则，收集并精选有关 DeepSeek Harness 的优质资源，与更多 AI 从业者一同构建更繁荣的 Agent 生态。

> 如果这个项目对你有帮助，还请不吝点一个 ⭐；也欢迎关注 𝕏 [@李不凯正在研究](https://x.com/libukai)，获取 Agent 相关的更多实践内容。

## 目录

- [目录](#目录)
- [快速开始](#快速开始)
  - [启动 Web UI](#启动-web-ui)
  - [从源码运行](#从源码运行)
  - [使用 Python SDK](#使用-python-sdk)
  - [安装插件](#安装插件)
- [官方资源](#官方资源)
  - [安装集成](#安装集成)
  - [源码仓库](#源码仓库)
  - [官方文档](#官方文档)
  - [讨论社区](#讨论社区)
- [社区资源](#社区资源)
  - [分析教程](#分析教程)
  - [社区讨论](#社区讨论)
- [第三方客户端](#第三方客户端)
  - [桌面与发行版](#桌面与发行版)
  - [终端、移动与 Web 体验](#终端移动与-web-体验)
- [精选插件](#精选插件)
  - [工作流与 Agent](#工作流与-agent)
  - [上下文、会话与输入](#上下文会话与输入)
  - [浏览器、视觉与界面](#浏览器视觉与界面)
  - [主题与皮肤](#主题与皮肤)
- [外部集成](#外部集成)
- [开发工具](#开发工具)
- [致谢](#致谢)

## 快速开始

[DeepSeek Harness](https://deepseek.com/harness/)（简称 DSH 或 `dsh`）是 DeepSeek AI 开源的 Agent Harness 项目。它基于 [Cordis](https://github.com/cordiverse/cordis)，采用 **Everything is a Plugin（一切皆插件）** 的架构：模型适配器、工具、会话日志、界面和 Agent Loop 都可以通过插件树组合与替换。

### 启动 Web UI

安装 [Node.js](https://nodejs.org/) 22.19.x 或 24+（推荐 24+）后执行：

```bash
npx @deepseek-ai/dsh web
```

默认访问 `http://127.0.0.1:3080`。进入 **Settings → Models** 配置模型服务后即可创建会话。详细步骤见[官方快速开始](https://deepseek-harness.github.io/deepseek-harness/guide/quickstart)和[模型服务配置](https://deepseek-harness.github.io/deepseek-harness/guide/providers)。

### 从源码运行

```bash
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness
pnpm install
pnpm run build
pnpm dsh web
```

### 使用 Python SDK

官方 Python SDK 支持通过内置运行时程序化调用 Harness，无需系统提供 Node.js。当前要求 Python 3.10+，支持情况和平台限制以[官方 Python SDK 指南](https://deepseek-harness.github.io/deepseek-harness/guide/python-sdk)为准。

```bash
python -m venv .venv
. .venv/bin/activate
python -m pip install deepseek-harness-sdk
```

### 安装插件

`web` 和 `headless` 是发行版内置的 Profile。外部插件以声明 `dsh.bundle` 的 Bundle 加入指定 Profile：

```bash
dsh plugin --profile web add <package-or-git-spec>
dsh --profile web --dump-config
```

从 Git 仓库安装时，建议固定 commit，并先检查安装脚本。pnpm 可能要求显式授权依赖的构建脚本；这段代码会在 Agent 沙箱之外执行。完整机制见[官方插件打包与安装教程](https://deepseek-harness.github.io/deepseek-harness/develop/basic/publish)。

## 官方资源

官方提供开源仓库、配套论文和较完整的参考文档，并持续运营开发者社区。

### 安装集成

- [@deepseek-ai/dsh](https://www.npmjs.com/package/@deepseek-ai/dsh)：官方 CLI 与 Web UI 的 npm 启动包
- [deepseek-harness-sdk](https://pypi.org/project/deepseek-harness-sdk/)：用于程序化集成 DSH 的官方 Python SDK

### 源码仓库

- [GitHub](https://github.com/deepseek-ai/deepseek-harness)：查看源码、Issue、版本与贡献者
- [Paper](https://github.com/cordiverse/paper)：基于 Cordis 的产品架构详解论文

### 官方文档

- [中文官网](https://deepseek.com/harness/)：了解产品定位和核心理念
- [帮助文档](https://deepseek-harness.github.io/deepseek-harness/guide/quickstart)：使用、插件开发与架构参考入口

### 讨论社区

- [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions)：问题反馈、使用交流和提案讨论
- [# dsh-plugin](https://github.com/topics/dsh-plugin)：GitHub 上的 DSH 插件项目集合
- [Discord DeepSeek](https://discord.gg/Ycq5dCaS4)：官方 Discord 社区，以中文讨论为主
- ["DeepSeek Harness"](https://x.com/search?q=%22DeepSeek%20Harness%22%20OR%20dsh-plugin&src=typed_query&f=live)：X 上有关 DSH 的实时搜索结果

特别欢迎加入 DeepSeek Harness 中文社区：扫码添加企微小助手并填写入群问卷，完成后小助手会邀请你入群。

<table>
  <thead>
    <tr>
      <th align="center">企微小助手</th>
      <th align="center">入群问卷</th>
      <th align="center">微信公众号</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><img src="https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/master/assets/community-wecom-assistant.png" alt="DeepSeek Harness 企微小助手二维码" width="180" height="180"></td>
      <td align="center"><a href="https://trtgsjkv6r.feishu.cn/share/base/form/shrcnIt5twSVdLGD52KJBckGCgg"><img src="https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/master/assets/community-wecom-survey.png" alt="DeepSeek Harness 入群问卷二维码" width="180" height="180"></a></td>
      <td align="center"><img src="https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/master/assets/community-wechat-official-account.png" alt="DeepSeek Harness 团队微信公众号二维码" width="180" height="180"></td>
    </tr>
  </tbody>
</table>

## 社区资源

### 分析教程

| 教程                                                                            | 形式            | 内容                                                                           |
| ------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------ |
| [解剖 DeepSeek Harness](https://xueai.app/slides/learn.html#dsh-1.html)         | 交互式源码专题  | 拆解会话、上下文、工具、沙箱、Code Mode 和 Subagent 等核心机制；部分内容需登录 |
| [DeepSeek Harness 从零到一](https://yanhua1010.github.io/dsh-harness-tutorial/) | 中文教程与 Demo | 包含原理、源码拆解、8 个 Demo 和 `mini-harness` 教学项目；基于 `0.1.0-rc.6`    |
| [Hello DSH](https://github.com/pingfanfan/hello-dsh/blob/main/README.zh.md)     | 插件入门与 Skill | 从终端安装讲到首个代码插件，附 22 个中文 Skill 示例、dry-run 与卸载流程；已在 `0.1.0-rc.6` 验证 |
| [DeepSeek Harness：从开机到拆开](https://github.com/alchaincyf/deepseek-harness-orange-book) | 中文实测电子书 | 提供 PDF、EPUB 和 HTML，收录完整系统提示词、129 行默认启动清单与三份原始会话日志；写于发布后 24 小时内，内容可能随版本演进而变化 |

### 社区讨论

收录包含完整论述、实践细节或一手背景的公开社交媒体长帖，补充官方资料未覆盖的背景与实践细节。

| 长帖                                                                                                                                                                    | 作者与背景                                                                              | 内容摘要                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [从早期参与者视角理解 DSH](https://x.com/jiayuan_jy/status/2087911060154314963)                                                                                         | [Jiayuan (JY) Zhang](https://x.com/jiayuan_jy) · 2026-08-13；作者自述提前一个月进入仓库 | 将 DSH 同时理解为可运行的 Coding Agent 和 Agent 开发框架；用“乐高汽车”解释一切皆插件，并讨论 Runtime 自扩展、自进化软件雏形、当前成熟度和函数式编程特征。 |
| [从 Agent Runtime / Agent OS 视角理解 DSH](https://x.com/anion_ex/status/2087910193783025853)                                                                           | [Anionex](https://x.com/anion_ex) · 2026-08-13；内测参与者与插件作者                    | 从模型、工具、策略、存储、上下文、界面和 Loop 的可组合性解释 DSH，并讨论 Agent 对运行时的有限观察与自扩展。                                               |

## 第三方客户端

以下项目提供了独立的用户界面、发行形态或产品化组装，而不只是单个工具能力。

> **分类说明：** 发行版或 Fork 会直接复用、修改或重新打包完整的 DSH Runtime，不能通过 `dsh plugin` 安装，因此不属于插件；独立客户端则通过 Web、RPC、ACP 或配套桥接插件连接 DSH。它们仍然是 Harness 生态的重要组成部分。

### 桌面与发行版

| 项目                                                                    | 平台 / 形态                    | 说明                                                                                                                   |
| ----------------------------------------------------------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| [TinyWhale](https://github.com/aimierbear/TinyWhale)                    | macOS · Electron · 发行版 Fork | 直接 Fork `deepseek-ai/deepseek-harness` 并增加独立桌面壳；连接已有 Web UI，或启动完整的 `dsh web` Runtime，不属于插件 |
| [Oh-DSH-Desktop](https://github.com/hust-open-atom-club/oh-dsh-desktop) | macOS · Electron               | 打包 DSH Runtime、Node.js、PTY、工作区工具和插件市场预览的可扩展工作台                                                 |
| [DSH Desktop](https://github.com/dataelement/dsh-desktop)               | macOS / Windows · Electron     | 管理本地 Harness、工作区、随机端口、Profile、插件和会话的跨平台桌面端                                                  |
| [dsh-launcher](https://github.com/Ruler4396/dsh-launcher)               | Windows · WebView2             | 提供静默启动、独立窗口、便携包和 MSI 的轻量启动器                                                                      |

### 终端、移动与 Web 体验

| 项目                                                            | 类型              | 说明                                                                                              |
| --------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------- |
| [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI)               | TUI Bundle        | Claude Code 风格全屏终端、流式状态、上下文仪表与会话回退                                          |
| [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | TUI Bundle        | 基于天枢演进的完整终端交互层，状态来自 DSH 会话事件流                                             |
| [dsh-tui](https://github.com/openguardrails/dsh-tui)            | TUI Bundle · 早期 | 支持本地 DeepSeek 与离线运行；仍处于活跃开发期，移植前的测试套件尚未恢复运行                      |
| [Orbis](https://github.com/icodesign/orbis)                     | 移动远控 · Beta   | 通过 DSH 插件完成设备配对、端到端加密传输和多设备实时更新                                         |
| [dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui)       | Web UI 集合       | 汇总任务看板、Git Graph、移动界面、皮肤、宠物和运行统计等组件                                     |
| [dsh-web](https://github.com/Tom6814/dsh-web)                   | Docker Web · 早期 | 通过 Docker 部署完整 Web 界面、工作区和插件市场；项目处于高速开发期，需挂载数据卷持久化配置与会话 |

> 项目被收录不代表已经签名、公证、自包含或适合生产环境；请查看各项目 README 和 Releases 中的当前说明。

## 精选插件

### 工作流与 Agent

- [dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit)：时间、编码、JSON、计算器、CSV、正则、Markdown、Diff 等确定性工具合集。
- [dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research)：面向 DSH 的自适应深度研究编排器。
- [dsh-101](https://github.com/bill9109/dsh-101)：在 DSH 中阅读和理解官方文档的学习模式。
- [dsh-auto-approval](https://github.com/Andy8647/dsh-auto-approval)：使用规则和模型分类工具调用，输出 `allow / deny` 自动审批决策。
- [mstar-harness](https://github.com/btspoony/mstar-harness)：以 Skill 驱动的 Harness / Loop Engineering 工作流插件。
- [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams)：为 DSH 提供 Agent Teams 能力。
- [dsh-automation](https://github.com/titanwings/dsh-automation)：按计划在全新根 Agent 和 Session 中执行独立任务，保留定义修订、运行历史和明确的工作区与权限边界。
- [dsh-plannotator](https://github.com/titanwings/dsh-plannotator)：对 Agent 计划逐段批注并提交结构化反馈，提供草稿隔离、版本绑定和过期计划拒绝。
- [dsh-record-replay](https://github.com/humblebanana/dsh-record-replay)：录制 macOS 桌面工作流并生成 Skill；当前依赖 Xcode Command Line Tools 和独立的 `open-record-replay` 本地源码副本。

### 上下文、会话与输入

- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor)：审计 AGENTS.md、Skill 目录和工具 Schema 的上下文 Token 成本与冲突。
- [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve)：跨会话记忆、后台演进和分支感知能力。
- [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file)：在输入框中通过 `@file` 搜索工作区文件并附加内容。
- [dsh-message-edit](https://github.com/Moeblack/dsh-message-edit)：分支式消息编辑、重试、重新生成和版本时间线。
- [dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio)：编辑系统提示词片段并提供实时预览。
- [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind)：基于持久 Change Ledger 回退对话和工作区状态。
- [dsh-compaction-instant](https://github.com/KitDoesIt/dsh-compaction-instant)：以确定性编译替代 LLM 摘要，并通过 `recall` / `search` 恢复被压缩内容；替换内置压缩器时需要使用 npm alias，属于较深的运行时改造。

### 浏览器、视觉与界面

- [dsh-browser](https://github.com/Lum1104/dsh-browser)：Chrome 侧边栏扩展，让 DSH 直接操作当前浏览器页面。
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit)：图片问答、长截图 OCR、UI 还原、Grounding 和像素对比。
- [dsh-computer-use](https://github.com/Anionex/dsh-computer-use)：原生 macOS Computer Use Bundle，优先使用 Accessibility，拒绝过期观察并按应用、Session 和操作范围管理权限；当前为早期 `0.1.0`，需从源码检出目录安装。
- [modlens](https://github.com/liustack/modlens)：通过粘贴图片和模型路由让纯文本模型获得视觉能力，是以独立视觉工具处理工作区图片之外的另一种方案。
- [dsh-better-browser](https://github.com/titanwings/dsh-better-browser)：通过外部 Kimi WebBridge 操作保留登录态的真实浏览器，按任务维护标签页会话；需另行安装并运行 WebBridge。
- [dsh-web-review](https://github.com/CanglongCl/dsh-web-review)：在 DSH 内预览网页、点选元素并提交选择器、可访问名称和修改意图，附真实前端修改评测套件；当前仓库尚未声明许可证。
- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar)：集成文件、终端、Git、子 Agent 和第三方 Tab 的侧边栏工作台。
- [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil)：在 DSH 中预览和编辑 OpenPencil 设计。
- [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize)：在对话流中生成沙箱化的可交互 HTML 卡片。
- [dsh-notification](https://github.com/omdsh-dev/dsh-notification)：按任务结果和关键词配置桌面通知。
- [dsh-share](https://github.com/hellodigua/dsh-share)：一键生成并分享 DSH 对话内容。

### 主题与皮肤

- [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale)：DSH Web GUI 的鲸鱼娘主题皮肤集合；当前包含可热插拔的 `maid-atelier` Web Client Bundle，可通过 `dsh plugin --profile web add ...` 安装和卸载。项目采用 **CC BY-NC-SA 4.0**，禁止商业性使用。

## 外部集成

- [Sealos Skills](https://github.com/labring/sealos-skills)：由 Sealos 团队维护的 DSH Profile Bundle，提供应用部署、数据库、对象存储等八个云原生 Skills；实际使用会操作外部 Sealos Cloud 资源，需要账号与相关凭据，登录会写入 `~/.sealos/kubeconfig`，部分流程需放宽沙箱权限。`package.json` 声明 MIT，但仓库根目录当前缺少 `LICENSE` 文件。
- [Nowledge Mem](https://mem.nowledge.co/integrations/deepseek-harness)：为 DSH 提供 Working Memory、提示时检索、MCP 工具和会话捕获；依赖外部 Nowledge Mem 产品与 `nmem` CLI，适合与开源插件分开评估。
- [dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime)：连接 Multica 与 DSH 的早期运行时桥接；当前包标记为 `private`、`UNLICENSED`，安装与分发边界仍不完整。
- [dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot)：把本地 DSH 接入飞书 / Lark，提供流式卡片、工作区、会话恢复与审批；采用 AGPL-3.0，应用凭据以权限 `600` 的明文配置保存在本机。

## 开发工具

- [dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check)：检查 Manifest、Patch、构建陷阱和目录收录状态。
- [dsh-fail-logger](https://github.com/Areium/dsh-fail-logger)：脱敏、去重并分类记录工具失败，将机器维护的实录沉淀进 Skill；只记录问题，不自动修改行为。
- [deepseek-harness-action](https://github.com/Lixiaoyiao/deepseek-harness-action)：在 GitHub Actions 中使用 DSH 做 PR Review、CI 诊断、自动修复和 Issue → PR；写权限默认关闭，并将验证放在无凭据容器中运行。
- [dsh-suite](https://whyihaveyou.github.io/dsh-suite/zh.html)：中英双语 DSH 生态索引，提供插件搜索、`create-dsh-plugin` 脚手架和基础兼容性元数据；当前处于早期阶段，兼容性检查主要为静态依赖比对，安装与配置组装验证尚未完成。
- [deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp)：让其他 Agent 通过 MCP 发现、检查、安装和调用 DSH 插件；安装与运行默认关闭，只有显式启用 `--allow-install` / `--allow-runtime` 才会产生对应副作用。
- [dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture)：捕获并落盘上行模型 API Payload，便于调试请求组装。
- [dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool)：通过 Monaco 编辑器创建和管理沙箱化 JavaScript 工具。
- [dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode)：从 Web UI 直接在 VS Code 中打开当前工作区。

## 致谢

感谢 DeepSeek Harness 团队、Cordis 社区、首批内测开发者，以及所有公开文档、插件、客户端、实践和生态索引的贡献者。

[![滑动变祖器：当前状态为梁圣，点击进入完整交互版](assets/media/liang-intensity-calibrator-card-liangsheng-v2.png)](https://lichtspektrum.github.io/liang-intensity-calibrator/)
