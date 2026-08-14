<p align="center">
	<a href="README.md">English</a>&nbsp;&nbsp;|&nbsp;&nbsp;
	<a href="README.zh-CN.md">简体中文</a>
</p>

<br>

<div align="center">
	<img width="640" src="assets/banner.jpg" alt="Awesome DeepSeek Harness">
</div>

# Awesome DeepSeek Harness [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<!-- BANNER：发光 DeepSeek 鲸与智能体编排环（1280×480） -->

<p align="center">
	<a href="#install">安装</a>&nbsp;&nbsp;&nbsp;
	<a href="contributing.md">贡献指南</a>&nbsp;&nbsp;&nbsp;
	<a href="https://github.com/topics/dsh-plugin">公开插件目录</a>&nbsp;&nbsp;&nbsp;
	<a href="https://github.com/dsh-external/issues">Issues</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center">
	<b>DeepSeek Harness (DSH) 生态精选：插件、工具与基建（数据源：dsh-external/hub catalog + GitHub 公开 dsh-plugin Topic）。</b><br>
</p>

<br>
> 注意：GitHub 的 [`dsh-plugin` Topic](https://github.com/topics/dsh-plugin) 是公开的；部分 `dsh-external` 仓库链接仍可能需要组织访问权限。

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

先安装 Node.js，再运行官方运行时：

```sh
npx @deepseek-ai/dsh web
```

安装外部 profile bundle 前，确保 `pnpm` 已在 `PATH` 中：

```sh
dsh plugin --profile web add "github:owner/repo#ref"
```

`dsh plugin` 会把包管理操作转发给 pnpm，因此支持 npm、Git/GitHub、本地路径、`file:` 和 `link:` 包规格。只有声明了 `dsh.bundle.patch` 的包才会成为 active profile layer；普通依赖会安装但不会激活。安装或更新 bundle 后，重启 `dsh --profile web`。

旧的 `&path:` 子路径写法和 Repository Plugin 安装方式已不属于当前官方 bundle 流程；请使用声明了 `dsh.bundle.patch` 的可安装包。

管理面板：设置 → 「插件」。

## Recently Added

- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) - 看清模型每个请求到底背着多少上下文：指令链/技能目录/工具 schema 的 token 成本逐项量化，自动检测重复与冲突，给出可执行裁剪建议（Web 圆环面板 + context_audit 工具，全程只读）。
- [dsh-agent-rp](https://github.com/dsh-external/dsh-agent-rp) - SillyTavern 迁移与下一代 DSH Agent RP。
- [dsh-aigc-canvas](https://github.com/dsh-external/dsh-aigc-canvas) - AIGC 画布插件（cordis）。
- [dsh-better-sidebar-plugin-office](https://github.com/dsh-external/dsh-better-sidebar-plugin-office) - better-sidebar 的 Office 集成。
- [dsh-cot-summary](https://github.com/dsh-external/dsh-cot-summary) - 外置 Summary-CoT 插件工作区。
- [dsh-deepcel](https://github.com/dsh-external/dsh-deepcel) - Deepcel 电子表格皮肤与独立分发仓库。
- [dsh-deeplink](https://github.com/dsh-external/dsh-deeplink) - 通过 URL 参数直接打开 DSH WebUI 会话或工作区。
- [dsh-deepresearch](https://github.com/dsh-external/dsh-deepresearch) - deepresearch 插件（cordis）。
- [dsh-diff-viewer](https://github.com/dsh-external/dsh-diff-viewer) - PiUI 风格 Web diff 查看器，替换默认 diff 视图。
- [dsh-emoji](https://github.com/dsh-external/dsh-emoji) - emoji 插件（cordis）。
- [dsh-explain](https://github.com/dsh-external/dsh-explain) - 学习模式插件，解释 agent 的每一步（WIP）。
- [dsh-hmz](https://github.com/dsh-external/dsh-hmz) - 占位仓库，描述待补充。
- [dsh-interpreters](https://github.com/dsh-external/dsh-interpreters) - 解释器插件（cordis）。
- [dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) - 费曼学习法插件：讲解 → 复述 → 判定 → 回讲教学闭环，富 HTML 教学卡片（mermaid 图 + shiki 代码高亮）。
- [dsh-mobile](https://github.com/dsh-external/dsh-mobile) - 手机端插件（cordis + dsh.plugin.json）。
- [dsh-notebooks](https://github.com/dsh-external/dsh-notebooks) - notebooks 插件（cordis）。
- [dsh-openmaic](https://github.com/dsh-external/dsh-openmaic) - 生成 OpenMAIC 交互式 AI 课堂。
- [dsh-openpencil](https://github.com/dsh-external/dsh-openpencil) - OpenPencil 设计预览与编辑插件。
- [dsh-plugin-radar](https://github.com/dsh-external/dsh-plugin-radar) - DSH 插件兼容性雷达，原 dsh-external-research 改名。
- [dsh-scout](https://github.com/dsh-external/dsh-scout) - scout 插件（cordis）。
- [dsh-share](https://github.com/dsh-external/dsh-share) - DSH 对话分享插件。
- [dsh-sonar](https://github.com/dsh-external/dsh-sonar) - sonar 插件（cordis）。
- [dsh-stock-market](https://github.com/dsh-external/dsh-stock-market) - 股票行情插件。
- [dsh-suggested-replies](https://github.com/dsh-external/dsh-suggested-replies) - DSH Web 输入框上方的预测回复插件。
- [dsh-travel-plugin](https://github.com/dsh-external/dsh-travel-plugin) - 旅行小插件。
- [dsh-turn-navigator](https://github.com/dsh-external/dsh-turn-navigator) - DSH Web turn 导航插件。
- [dsh-ultra-ui](https://github.com/dsh-external/dsh-ultra-ui) - ultra-ui 插件（cordis）。
- [dsh_workflow](https://github.com/dsh-external/dsh_workflow) - Dynamic Workflow for dsh（占位）。

## Core & Official

- [dsh-plan-execute](https://github.com/dsh-external/dsh-plan-execute) - plan/execute 双模型路由：规划模型思考、执行模型干活
- [dsh-toolkit](https://github.com/dsh-external/dsh-toolkit) - 官方工具套件（calculator/csv/diff/encoding/json/markdown/regex/time）
- [dsh-deep-research](https://github.com/dsh-external/dsh-deep-research) - 自适应深度研究编排器（官方 workflow 引擎）
- [dsh-101](https://github.com/dsh-external/dsh-101) - DSH 文档阅读模式
- [dsh-client-ui-plan-execute](https://github.com/dsh-external/dsh-client-ui-plan-execute) - Web 设置页「规划/执行模型」配置行

## Context & Search

- [dsh-session-search](https://github.com/dsh-external/dsh-session-search) - 跨 dsh/Codex/Claude Code/pi/OpenCode 会话只读搜索，无索引
- [cross-harness-cite](https://github.com/dsh-external/cross-harness-cite) - 跨 harness 引用历史对话
- [dsh-session-cluster](https://github.com/dsh-external/dsh-session-cluster) - 会话聚类
- [session-chatlog](https://github.com/dsh-external/session-chatlog) - 会话聊天记录
- [dsh-memory-evolve](https://github.com/dsh-external/dsh-memory-evolve) - 跨会话长期记忆 + 后台自我进化（五轨记忆/Git 分支感知/技能进化）
- [dsh-engram-relay](https://github.com/dsh-external/dsh-engram-relay) - 内置 <1B 模型实现 100k 等效长记忆，因果图精准唤醒
- [zotero-harvest](https://github.com/dsh-external/zotero-harvest) - Zotero 文献库接入
- [zotero-wave-rag](https://github.com/dsh-external/zotero-wave-rag) - Zotero RAG 检索
- [dsh-data-agent](https://github.com/dsh-external/dsh-data-agent) - 让 AI 连数据库、写 SQL
- [dsh-easy-ctx-manager](https://github.com/dsh-external/dsh-easy-ctx-manager) - 上下文管理：上下文节省等（cordis）
- [dsh-kb-sieve](https://github.com/dsh-external/dsh-kb-sieve) - knowledge-base 插件：构建可审计 KB 包（references + SQL）
- [dsh-payload-capture](https://github.com/moeblack/dsh-payload-capture) - 捕捉每一次上行模型 API payload 存为 JSON（调试与观测）

## Input & Editing

- [dsh-message-edit](https://github.com/dsh-external/dsh-message-edit) - 分支式消息编辑 / reroll / retry / 版本时间线
- [dsh-prompt-studio](https://github.com/dsh-external/dsh-prompt-studio) - 系统提示词分段编辑 + 实时预览
- [dsh-paste-input](https://github.com/dsh-external/dsh-paste-input) - Ctrl+V 粘贴文件 / 拖拽 / 选择
- [dsh-drag-and-drop](https://github.com/dsh-external/dsh-drag-and-drop) - 跨平台拖拽插入原始路径
- [dsh-input-history](https://github.com/dsh-external/dsh-input-history) - 输入历史
- [dsh-multimedia-webui-input](https://github.com/dsh-external/dsh-multimedia-webui-input) - 多媒体文件/文件夹输入
- [dsh-office](https://github.com/dsh-external/dsh-office) - Office 文件读写 bundle：模型读写 Office 文件，docx/pdf 预览
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) - 从 Claude Code JSONL 全保真导入历史会话（含工具调用/思考块），导入后可在 DSH 续聊
- [dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) - 输入框工具栏快速便签：点子/感想/TODO，Markdown 预览、自动保存、一键发送到对话。

## UI & Experience

- [dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) - DSH Web 人民币/美元 token 计费插件：官方政策自动计价（含峰谷时段）、逐条消息费用账本、账号余额、按界面语言切换币种。
- [dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) - DeepSeek 账户余额与当前会话成本显示在 DSH Web 编辑器 dock 中（自动获取官方价格，支持峰时/非峰时计价）。
- [dsh-live-stats](https://github.com/dsh-external/dsh-live-stats) - 实时 token 估算与生成 TPS
- [dsh-view-modes](https://github.com/NigelYao/dsh-view-modes) - DSH Web 输出模式插件：提供详尽、普通和摘要视图，按语义分组工具调用与思考，并显示实时执行状态。
- [dsh-tps](https://github.com/dsh-external/dsh-tps) - TPS 仪表
- [dsh-cc-tui](https://github.com/dsh-external/dsh-cc-tui) - Claude Code 风格全屏 TUI（流式展开/双击 Esc 回滚）
- [dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) - grok-build TUI
- [deepseek-harness-tui](https://github.com/openma-ai/deepseek-harness-tui) - Rust/ratatui 终端客户端，直接使用 DSH SDK JSON-RPC 协议，支持独立运行或作为 profile bundle 加载
- [DSH-better-sidebar](https://github.com/dsh-external/DSH-better-sidebar) - 侧边栏：文件渲染/终端/Git/子代理/自定义 API
- [dsh-web-panel](https://github.com/dsh-external/dsh-web-panel) - 内嵌终端 dock + Git Review + 文件视图
- [dsh-web-review](https://github.com/CanglongCl/dsh-web-review) - 隔离网页预览，通过元素批注和可视化调整指导源码修改
- [dsh-mobileweb-adapter](https://github.com/dsh-external/dsh-mobileweb-adapter) - 手机浏览器/PWA 移动版式 + 局域网 WebSocket 修复
- [dsh-subagent-tree](https://github.com/dsh-external/dsh-subagent-tree) - 子代理树可视化
- [dsh-web-workflow-visualizer](https://github.com/dsh-external/dsh-web-workflow-visualizer) - workflow 可视化
- [dsh-split-panes](https://github.com/dsh-external/dsh-split-panes) - 分栏
- [dsh-ui-progress](https://github.com/dsh-external/dsh-ui-progress) - 进度
- [dsh-skins](https://github.com/dsh-external/dsh-skins) - Web UI 皮肤
- [dsh-skin](https://github.com/KinGao294/dsh-skin) - Codex 风格换肤 + 自定义背景插件：内置多套 --dsw-alias-* 配色，支持透明度/模糊调节的半透明壁纸层。
- [dsh-chat-thumb](https://github.com/dsh-external/dsh-chat-thumb) - Chat 缩略图（cordis）
- [show-bash-command](https://github.com/dsh-external/show-bash-command) - 显示命令具体内容而非描述
- [turtle-ui](https://github.com/dsh-external/turtle-ui) - 官方 UI 插件参考实现
- [dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) - 基于 pi-tui 的 DeepSeek Harness 终端前端：流式 Markdown、thinking 折叠、工具卡片、slash 命令、审批/提问交互与 Web 会话共享
- [deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) - Windows 原生桌面外壳:一比一加载官方 Web UI,内置服务器托管、托盘驻留与掉线自动恢复
- [dsh-desktop](https://github.com/foolgry/dsh-desktop) - 开箱即用的 Electron 桌面版（macOS/Windows 安装包）：无需 Node.js 和命令行，自动跟随上游 `@deepseek-ai/dsh` 发版，内置 Web UI 与自动更新
- [dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) - 右侧圆点时间轴导航栏，快速跳转到任意用户消息。
- [dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) - 轮次索引侧边栏：每条索引对应一轮用户提问，点击跳转并闪烁高亮，滚动时自动高亮当前轮次。
- [dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) - 关注提醒：会话等待输入或后台完成未打开时，左上角角标、标签页标题 (N) 计数与鲸鱼 favicon 换色三处联动。

## Browser & Remote

- [dsh-browser-panel](https://github.com/dsh-external/dsh-browser-panel) - WebUI 内嵌有头浏览器，模型实时操控（Codex 式，0 视觉依赖）
- [dsh-browser](https://github.com/dsh-external/dsh-browser) - Chrome 侧边栏扩展
- [dsh-remote](https://github.com/dsh-external/dsh-remote) - SSH 远端控制
- [ego-browser](https://github.com/dsh-external/ego-browser) - 浏览器代理
- [dsh-webbridge](https://github.com/dsh-external/dsh-webbridge) - Web 桥接
- [browser4-dsh](https://github.com/dsh-external/browser4-dsh) - Browser4 AI-native 浏览器引擎（skills）

## Models & Inference

- [dsh-vision](https://github.com/dsh-external/dsh-vision) - 视觉桥接：view_image 工具接任意 OpenAI 兼容 VLM（默认智谱免费档）
- [dsh-advisor](https://github.com/dsh-external/dsh-advisor) - 副模型每轮被动审查并注入建议
- [dsh-llm-fallbacks](https://github.com/dsh-external/dsh-llm-fallbacks) - 角色化 LLM 重试/备用策略
- [dsh-pi-adapter](https://github.com/dsh-external/dsh-pi-adapter) - pi ExtensionAPI 桥接
- [dsh-a2a](https://github.com/dsh-external/dsh-a2a) - Agent2Agent mesh
- [dsh-acp](https://github.com/dsh-external/dsh-acp) - Client-neutral ACP 适配器
- [deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) - ACP profile 插件与独立 server，把完整 DSH agent 接入 Zed 等 ACP 客户端，并复用 DSH 的凭据、会话与 MCP 配置
- [dsh-mnemon](https://github.com/dsh-external/dsh-mnemon) - 助记层
- [dsh-slice-agent-loop](https://github.com/dsh-external/dsh-slice-agent-loop) - Drop-in agent loop：有界 slice 上下文引擎（cordis）
- [savemoneybenchmark](https://github.com/dsh-external/savemoneybenchmark) - 降本增效 benchmark（examples + skills）
- [dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) - MCP server 暴露 Harness agent：任意 MCP 客户端（如 Hermes）驱动 Harness 当「胳膊」。
- [dsh-subagent-tools](https://github.com/lynx-gt/dsh-subagent-tools) - 子代理委派按次覆盖 model / provider / persona / toolFilter、@preset: 引用、provider/model 复合 id（bundle，不改官方文件）。
- [dsh-subagent-cwd](https://github.com/lynx-gt/dsh-subagent-cwd) - dsh-subagent-tools 加按次 cwd（子代理工作目录），附所需的两处进程内 provider 补丁。

## Git & Engineering

- [dsh-git-identity](https://github.com/dsh-external/dsh-git-identity) - Git 提交固定环境作者身份（gh 登录账号 + noreply 邮箱）
- [dsh-gh-bridge](https://github.com/dsh-external/dsh-gh-bridge) - macOS Keychain GitHub token 桥入 sandbox gh
- [dsh-auto-blame](https://github.com/dsh-external/dsh-auto-blame) - 自动 blame
- [dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) - 结构化 Git 工具（status/diff/log/branch/stage/commit/stash/show）+ 破坏性命令安全护栏
- [dsh-plugin-check](https://github.com/dsh-external/dsh-plugin-check) - 插件健康检查（清单/patch 格式/构建陷阱/hub 收录）
- [dsh-inspect](https://github.com/dsh-external/dsh-inspect) - checkup → fix → review 对抗式闭环
- [dsh-alphasolve](https://github.com/dsh-external/dsh-alphasolve) - AlphaSolve 工作流
- [mstar-workflow](https://github.com/dsh-external/mstar-workflow) - 工作流引擎
- [dsh-spur](https://github.com/dsh-external/dsh-spur) - 任务引擎
- [dsh-involute](https://github.com/dsh-external/dsh-involute) - 内嵌任务管理引擎
- [dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) - 增量代码审查插件：checkpoint 增量队列 + Web 审查面板 + /review 命令，审查意见注入 agent
- [dsh-test-runner](https://github.com/suimi8/dsh-test-runner) - 结构化测试运行工具（test_run）：自动识别 Vitest/Jest/pytest/node:test，运行测试并为模型解析失败摘要。

## Notifications & Channels

- [dsh-feishu-bot](https://github.com/dsh-external/dsh-feishu-bot) - 飞书机器人
- [dsh-feishu-notify](https://github.com/dsh-external/dsh-feishu-notify) - 飞书通知（会话结束/等待输入）
- [telegram](https://github.com/dsh-external/telegram) - Telegram 频道
- [tg-bot](https://github.com/dsh-external/tg-bot) - Telegram bot
- [qqbot](https://github.com/dsh-external/qqbot) - QQ bot
- [dsh-wecom-bot](https://github.com/dsh-external/dsh-wecom-bot) - 企业微信 bot
- [dsh-weixin-bot](https://github.com/dsh-external/dsh-weixin-bot) - 微信 bot
- [dsh-voice-chat](https://github.com/dsh-external/dsh-voice-chat) - 语音对话
- [dsh-web-ui-notify](https://github.com/dsh-external/dsh-web-ui-notify) - WebUI 通知
- [dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) - Windows 通知，零依赖
- [dsh-ica](https://github.com/dsh-external/dsh-ica) - icalingua 前端
- [dsh-opencode-server](https://github.com/dsh-external/dsh-opencode-server) - opencode attach 丝滑 TUI
- [dsh-teamwork](https://github.com/dsh-external/dsh-teamwork) - 团队协作（cordis）

## Fun & Lifestyle

- [dsh-ui-whale](https://github.com/dsh-external/dsh-ui-whale) - 像素鲸鱼伙伴（眨眼/摆尾/喷水/爱心）
- [dsh-pet](https://github.com/FlytoMAYDAY80/dsh-pet) - 桌面小鲸鱼，实时感知会话状态
- [dsh-pet-rs](https://github.com/dsh-external/dsh-pet-rs) - 桌宠 Rust 版
- [dsh-stickers](https://github.com/dsh-external/dsh-stickers) - 贴纸
- [dsh-ads](https://github.com/dsh-external/dsh-ads) - 2005 中文站风格广告层（整活）
- [dsh-gomoku](https://github.com/dsh-external/dsh-gomoku) - 五子棋
- [dsh-qq2006](https://github.com/dsh-external/dsh-qq2006) - QQ2006 皮肤
- [dsh-lazyfish](https://github.com/dsh-external/dsh-lazyfish) - 摸鱼面板（信息流 + B 站）
- [dsh-tavern-plugin](https://github.com/dsh-external/dsh-tavern-plugin) - 小酒馆角色卡
- [dsh-sfw](https://github.com/dsh-external/dsh-sfw) - 安全过滤
- [ui-status-label](https://github.com/dsh-external/ui-status-label) - 鲸鱼娘思考状态自定义标签（cordis）

## Infrastructure & Development

- [deepseek-harness-desktop](https://github.com/Easyhoov/deepseek-harness-desktop) - 非官方 Windows 进程内桌面应用，提供托盘常驻、原生通知与 IPC 桥接。
- [plugin-registry](https://github.com/dsh-external/plugin-registry) - 插件控制台 + make-dsh-plugin skill + 开发指引
- [dsh-plugin-manager-registry](https://github.com/Jesse-njx/dsh-plugin-manager-registry) - 离线容错的插件注册表，聚合并去重 awesome 列表、GitHub Topic 与 npm 中的 DSH 插件。
- [marisa](https://github.com/dsh-external/marisa) - 外部插件管理器（寄生安装/CLI/设置页面板）
- [hub](https://github.com/dsh-external/hub) - 全组织分类索引 + 统一 catalog.json（CI 自动生成）
- [dshx-update-check](https://github.com/dsh-external/dshx-update-check) - 插件更新检查
- [toybox](https://github.com/dsh-external/toybox) - MCP 插件集（almanac/bug-tamer/命名大师/时间胶囊等）
- [dsh-github-integration](https://github.com/dsh-external/dsh-github-integration) - GitHub 集成插件
- [dsh-super-injector](https://github.com/dsh-external/dsh-super-injector) - super-injector 插件（cordis）
- [dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) - MCP 服务器管理器：设置页添加服务器，OAuth（PKCE + 动态客户端注册）或静态 token 认证，工具注册为 mcp__<name>__*
- [dsh-doctor](https://github.com/asdf17128/dsh-doctor) - Profile 体检：检出 patch 整体替换 config 而丢失的字段、指向不存在 entry id 的 patch，以及工具重名冲突。
- [dshp](https://github.com/asdf17128/dshp) - Profile 管理器：列出/新建/克隆/对比 profile，并把整套配置（bundle 顺序、插件版本、patch）导出为单个可移植文件。
- [dsh-recommend](https://github.com/zp-home/dsh-recommend) - 插件透明排行与推荐：每日自动抓取 dsh-plugin 话题生态、公开评分模型，提供榜单/搜索/推荐工具与设置页排行榜。
- [dsh-eval](https://github.com/hccccc01333/dsh-eval) - Agent 评测平台：benchmark YAML、headless dsh 运行、trace 指标、脚本化评分与 run 对比/报告。

## Related

- [dsh-external/issues](https://github.com/dsh-external/issues) - Issue 聚合仓库
- [DeepSeek](https://deepseek.com) - 官方入口

## Contributing

Please have a look at [contributing.md](contributing.md). 条目标准：仓库 + 一句话描述 + 链接；精选人工维护，全量索引以 hub 为准。

## 致谢

感谢 [LinuxDO 社区](https://linux.do/) 的支持与交流。
