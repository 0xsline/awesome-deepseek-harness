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
	<a href="https://deepseekdocs.com/">DeepSeek Docs</a>&nbsp;&nbsp;&nbsp;
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
- [Core](#core)
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
- [Related](#related)
- [Science & Research](#science--research)
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

## Core

- [dsh-deepresearch](https://github.com/dsh-external/dsh-deepresearch) - deepresearch 插件（cordis）。
- [dsh-plan-execute](https://github.com/dsh-external/dsh-plan-execute) - plan/execute 双模型路由：规划模型思考、执行模型干活
- [dsh-toolkit](https://github.com/dsh-external/dsh-toolkit) - 零依赖工具套件（calculator/csv/diff/encoding/json/markdown/regex/time）
- [dsh-deep-research](https://github.com/dsh-external/dsh-deep-research) - 自适应深度研究编排器（workflow 引擎）
- [dsh-101](https://github.com/dsh-external/dsh-101) - DSH 文档阅读模式
- [dsh-client-ui-plan-execute](https://github.com/dsh-external/dsh-client-ui-plan-execute) - Web 设置页「规划/执行模型」配置行

- [dsh_workflow](https://github.com/dsh-external/dsh_workflow) - Dynamic Workflow for dsh（占位）。
## Context & Search

- [context-vista](https://github.com/GooodWei/context-vista) - 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配及消费估算
- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) - 看清模型每个请求到底背着多少上下文：指令链/技能目录/工具 schema 的 token 成本逐项量化，自动检测重复与冲突，给出可执行裁剪建议（Web 圆环面板 + context_audit 工具，全程只读）。
- [dsh-cot-summary](https://github.com/dsh-external/dsh-cot-summary) - 外置 Summary-CoT 插件工作区。
- [dsh-explain](https://github.com/dsh-external/dsh-explain) - 学习模式插件，解释 agent 的每一步（WIP）。
- [dsh-file-mount](https://github.com/acefun29/dsh-file-mount) - 文件增量挂载与重复读取去重：已挂载行范围不重复进上下文，磁盘变化自动失效重挂，附「挂载文件」标签页与 token 节省统计。
- [dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) - 费曼学习法插件：讲解 → 复述 → 判定 → 回讲教学闭环，富 HTML 教学卡片（mermaid 图 + shiki 代码高亮）。
- [dsh-memory-vault](https://github.com/flymysql/dsh-memory) - 跨会话记忆库：memory_remember / memory_recall / memory_forget 三工具，最新条目自动注入系统提示词，设置页（记忆库 / Memory）管理。
- [dsh-session-search](https://github.com/dsh-external/dsh-session-search) - 跨 dsh/Codex/Claude Code/pi/OpenCode 会话只读搜索，无索引
- [cross-harness-cite](https://github.com/dsh-external/cross-harness-cite) - 跨 harness 引用历史对话
- [dsh-session-cluster](https://github.com/dsh-external/dsh-session-cluster) - 会话聚类
- [session-chatlog](https://github.com/dsh-external/session-chatlog) - 会话聊天记录
- [dsh-memoria](https://github.com/jiayan-xu/dsh-memoria) - Memoria 记忆后端：为 dsh agent 提供 observe/remember/search/recall 四个工具，支持向量+图记忆、命名空间隔离、自动写入与配置热重载。
- [dsh-memory-evolve](https://github.com/dsh-external/dsh-memory-evolve) - 跨会话长期记忆 + 后台自我进化（五轨记忆/Git 分支感知/技能进化）
- [dsh-engram-relay](https://github.com/dsh-external/dsh-engram-relay) - 内置 <1B 模型实现 100k 等效长记忆，因果图精准唤醒
- [dsh-mneme](https://github.com/modusensus/dsh-mneme) - 跨会话记忆且主权归用户：SQLite + 可人工编辑的 Markdown 双写、autoDream 后台记忆巩固、106 个测试护航。
- [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) - Mnemon 驱动的本地记忆系统：三层记忆（运行时热记忆/项目档案 Documents/长期记忆体 Memory Spaces），受监督写回、检索工具与 Web UI
- [zotero-harvest](https://github.com/dsh-external/zotero-harvest) - Zotero 文献库接入
- [url-manager](https://github.com/Piccolo123/url-manager) - Agent 先行链接收藏与知识管理：从任意平台保存链接，自动分类/打标签，全文搜索，共享分类，并以魔法链接卡片交付结果。零配置——Agent 首次使用自动注册。
- [url-manager-mcp](https://github.com/Piccolo123/url-manager-mcp) - url-manager 的 MCP 服务端：21 个工具（mcp__url_manager__*），支持收藏/搜索/分类/共享与魔法链接交付，支持 stdio 与 streamable-http。
- [zotero-wave-rag](https://github.com/dsh-external/zotero-wave-rag) - Zotero RAG 检索
- [dsh-data-agent](https://github.com/dsh-external/dsh-data-agent) - 让 AI 连数据库、写 SQL
- [dsh-easy-ctx-manager](https://github.com/dsh-external/dsh-easy-ctx-manager) - 上下文管理：上下文节省等（cordis）
- [dsh-kb-sieve](https://github.com/dsh-external/dsh-kb-sieve) - knowledge-base 插件：构建可审计 KB 包（references + SQL）
- [dsh-payload-capture](https://github.com/moeblack/dsh-payload-capture) - 捕捉每一次上行模型 API payload 存为 JSON（调试与观测）
- [dsh-memento](https://github.com/PerryLink/dsh-memento) - 有界、分层、带审批门、可审计的跨会话记忆：ctx.memory 服务、零依赖 SQLite、memory 工具与冻结快照注入。
- [dsh-news-plugin](https://github.com/canghai666x/dsh-news-plugin) - RSS 新闻采集工具：抓取 10+ 中英文源为结构化条目（标题/链接/来源/时间/摘要），逐源超时，供模型评分筛选与编排简报（cordis）。
- [dsh-news-briefing](https://github.com/canghai666x/dsh-news-briefing) - 新闻早晚报 Skill：五维评分筛选（故事性/时代感/深度性/趣味性/独特性）、反标题党铁律、Tier 内容偏好、去 AI 味中文写作规范。
- [dsh-web-novel-research](https://github.com/canghai666x/dsh-web-novel-research) - 中文网文剧情检索 Skill：免费转载站工作流（GBK 解码、跨卷同名章节消歧、多源断更验证），不依赖起点等付费站。
- [dsh-web-search-exa](https://github.com/TonyDua/dsh-web-search-exa) - 零配置 Exa 网页搜索提供方：无 key 走匿名 MCP 兜底（mcp.exa.ai/mcp），配 key 自动切 REST，接入 ctx.web 接缝。
- [dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) - DSH 增强型、可持久化的网页搜索：多引擎路由（DeepSeek/Exa/DDG/Bing/Jina + GitHub/B站/YouTube/V2EX/小红书/Twitter/Reddit/RSS）、SQLite+LRU 缓存、userscript 风格抽取、Playwright 渲染。


## Input & Editing

- [dsh-better-sidebar-plugin-office](https://github.com/dsh-external/dsh-better-sidebar-plugin-office) - better-sidebar 的 Office 集成。
- [dsh-message-edit](https://github.com/dsh-external/dsh-message-edit) - 分支式消息编辑 / reroll / retry / 版本时间线
- [dsh-prompt-studio](https://github.com/dsh-external/dsh-prompt-studio) - 系统提示词分段编辑 + 实时预览
- [dsh-paste-input](https://github.com/dsh-external/dsh-paste-input) - Ctrl+V 粘贴文件 / 拖拽 / 选择
- [dsh-drag-and-drop](https://github.com/dsh-external/dsh-drag-and-drop) - 跨平台拖拽插入原始路径
- [dsh-file-uploads](https://github.com/l541402398/dsh-file-uploads) - 从 Web 输入框上传任意本地文件，以待发送卡片展示，并在设置中管理已存文件。
- [dsh-input-history](https://github.com/dsh-external/dsh-input-history) - 输入历史
- [dsh-multimedia-webui-input](https://github.com/dsh-external/dsh-multimedia-webui-input) - 多媒体文件/文件夹输入
- [dsh-office](https://github.com/dsh-external/dsh-office) - Office 文件读写 bundle：模型读写 Office 文件，docx/pdf 预览
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) - 从 Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / opencode 全保真导入历史会话（含工具调用/思考块），导入后可在 DSH 续聊
- [dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) - 同一工作区并行多会话的文件认领与写入保护（claim/release、心跳 stale 接管、pending 三路合并）
- [dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) - 输入框工具栏快速便签：点子/感想/TODO，Markdown 预览、自动保存、一键发送到对话。
- [dsh-plugin-quote-reply](https://github.com/yangYzc/dsh-plugin-quote-reply) - 在会话中划选文字，一键「引用回复」插入输入框，或「新窗口回复」开新会话并预填引用。
- [@picgo/dsh-plugin](https://github.com/PicGo/dsh-plugin) - PicGo 官方插件：把本地文件传到图床拿到公网链接，复用你已在 PicGo 配好的图床与上传器插件。

- [dsh-suggested-replies](https://github.com/dsh-external/dsh-suggested-replies) - DSH Web 输入框上方的预测回复插件。
- [dsh-wordbox](https://github.com/arcmosin/dsh-wordbox) - 输入框旁的常驻常用词/句面板，支持全局/当前项目双桶与一键插入。
- [dsh-voice-webspeech](https://github.com/anweat/dsh-voice-webspeech) - DSH 浏览器 Web Speech API 语音输入：零服务端、零密钥、零模型下载（Edge=Azure 语音、Chrome=Google 语音）。
- [dsh-plugin-anydoc](https://github.com/beancookie/dsh-plugin-anydoc) - 该插件封装了一个可复用的函数，通过 @firecrawl/anydoc 提取文件内容（支持文件路径或 Buffer 输入），并返回 GitHub‑Flavored Markdown（GFM）。同时提供可选的配置项（如输出目录、是否覆盖已有文件）。

## UI & Experience

- [dsh-spotlight](https://github.com/0xsline/dsh-spotlight) - DeepSeek Harness Web 的键盘优先命令面板。
- [dsh-aigc-canvas](https://github.com/dsh-external/dsh-aigc-canvas) - AIGC 画布插件（cordis）。
- [dsh-deepcel](https://github.com/dsh-external/dsh-deepcel) - Deepcel 电子表格皮肤与独立分发仓库。
- [dsh-deepseek-quota](https://github.com/yingjunnan/dsh-deepseek-quota) - DSH Web 页面右下角悬浮卡片展示 DeepSeek API 余额（自动刷新 + 手动刷新）。
- [dsh-diff-viewer](https://github.com/dsh-external/dsh-diff-viewer) - PiUI 风格 Web diff 查看器，替换默认 diff 视图。
- [dsh-mobile](https://github.com/dsh-external/dsh-mobile) - 手机端插件（cordis + dsh.plugin.json）。
- [dsh-openpencil](https://github.com/dsh-external/dsh-openpencil) - OpenPencil 设计预览与编辑插件。
- [dsh-pin-recall](https://github.com/kerwin2046/dsh-pin-recall) - 在 Web 助手消息操作条钉住回复，再通过 `/pin` `/recall` 召回进下一轮模型上下文（可一键唤醒）。
- [dsh-turn-navigator](https://github.com/dsh-external/dsh-turn-navigator) - DSH Web turn 导航插件。
- [dsh-ultra-ui](https://github.com/dsh-external/dsh-ultra-ui) - ultra-ui 插件（cordis）。
- [dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) - DSH Web 人民币/美元 token 计费插件：官方政策自动计价（含峰谷时段）、逐条消息费用账本、账号余额、按界面语言切换币种。
- [dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) - DeepSeek 账户余额与当前会话成本显示在 DSH Web 编辑器 dock 中（自动获取官方价格，支持峰时/非峰时计价）。
- [dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) - 会话与当日 API 费用统计、预算图框（已用%）、官方余额、历史看板，支持峰谷计价与官方价格一键同步。
- [dsh-cost-meter](https://github.com/Sttrevens/dsh-cost-meter) - Web UI 美元成本徽标：头部显示会话总成本、每条回复结尾显示该轮成本，悬停看分项（token 用量 × 可配置价格表）。
- [dsh-plugin-cost](https://github.com/yweilai77-dev/dsh-plugin-cost) - DSH Web 聊天框底部的会话费用估算：token 四桶 × 可配置价格表，一键刷新官方价格（估算非账单）。
- [dsh-spend](https://github.com/nonewind/dsh-spend) - DSH Web 用量与预计费用统计：右下角悬浮窗，按模型/按天/按会话多维聚合，内置供应商知识库自动识别计费计划。
- [dsh-live-stats](https://github.com/dsh-external/dsh-live-stats) - 实时 token 估算与生成 TPS
- [dsh-view-modes](https://github.com/NigelYao/dsh-view-modes) - DSH Web 输出模式插件：提供详尽、普通和摘要视图，按语义分组工具调用与思考，并显示实时执行状态。
- [dsh-tps](https://github.com/dsh-external/dsh-tps) - TPS 仪表
- [dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) - 创意工坊式 DSH 插件浏览器：搜索、热度/最新/近 7-90 天飙升榜、中文关键词映射、描述与 README 机翻、插件特征过滤、一键安装/更新/卸载，内置已安装插件管理。
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
- [@zhaoolee/dsh-notes](https://github.com/zhaoolee/notes) - 将 DSH 对话导出为锤子便签风格 PNG，或在配置的账号工作区中新建和更新 Markdown 便签。
- [dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) - 基于 pi-tui 的 DeepSeek Harness 终端前端：流式 Markdown、thinking 折叠、工具卡片、slash 命令、审批/提问交互与 Web 会话共享
- [deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) - Windows 原生桌面外壳:一比一加载官方 Web UI,内置服务器托管、托盘驻留与掉线自动恢复
- [Harness Desktop](https://github.com/baiyuscc13724-max/deepseek-harness-desktop) - 官方 DSH Web UI 的 Windows 桌面版，提供中文安装版和免安装版、快速换肤、应用内插件市场、主模型与子代理选择和校验更新。
- [dsh-desktop](https://github.com/foolgry/dsh-desktop) - 开箱即用的 Electron 桌面版（macOS/Windows 安装包）：无需 Node.js 和命令行，自动跟随上游 `@deepseek-ai/dsh` 发版，内置 Web UI 与自动更新
- [dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) - 右侧圆点时间轴导航栏，快速跳转到任意用户消息。
- [dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) - 轮次索引侧边栏：每条索引对应一轮用户提问，点击跳转并闪烁高亮，滚动时自动高亮当前轮次。
- [dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) - 关注提醒：会话等待输入或后台完成未打开时，左上角角标、标签页标题 (N) 计数与鲸鱼 favicon 换色三处联动。
- [dsh-plugin-description](https://github.com/MysaDC/dsh-plugin-description) - 为 Web 设置插件列表页的每张插件卡片补上中英文功能说明，并提供 `pluginDescriptions` 服务供其他插件注册自己的说明。
- [dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) - DSH Web 官方内置插件的人类可读目录，提供状态解释与经过审核的安全 UI 开关。
- [dsh-hud](https://github.com/a903067276-rgb/dsh-hud) - HUD 状态面板：Git 状态、MCP 服务器、技能列表、模型与 token 用量，悬浮侧栏一览无余。
- [dsh-file-mentions](https://github.com/a903067276-rgb/dsh-file-mentions) - 回复中的可点击文件路径：Codex 风格内联打开、📂 文件管理器显示、回合末尾的文件提及 chip 列表。
- [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) - DSH Web 请求中断自动续跑：网络/超时/宿主崩溃等非人为失败后自动发送「继续」，支持错误分类、自适应退避、模板化继续文本与浏览器通知；全部参数可在插件设置卡片中调整。
- [dsh-trajectory-debug](https://github.com/devmom/dsh-trajectory-debug) - DeepSeek Harness 轨迹瀑布流、确定性回放、断点、改参重跑、分叉对比与性能分析。

## IDE & Clients

- [dsh4vscode](https://github.com/DoggyHU/dsh4vscode) - 基于 DSH agent 的 VS Code 聊天窗口：OpenCode 式独立会话、模型自动路由（Flash/Pro/Pro Max）。

## Browser & Remote

- [dsh-browser-panel](https://github.com/dsh-external/dsh-browser-panel) - WebUI 内嵌有头浏览器，模型实时操控（Codex 式，0 视觉依赖）
- [dsh-browser](https://github.com/dsh-external/dsh-browser) - Chrome 侧边栏扩展
- [dsh-deeplink](https://github.com/dsh-external/dsh-deeplink) - 通过 URL 参数直接打开 DSH WebUI 会话或工作区。
- [dsh-remote](https://github.com/flymysql/dsh-remote) - DeepSeek Harness 远程工作区：SSH 连接主机（密码或密钥）、选择远端工作目录，通过 rw_pick_workspace / rw_list_dir / rw_read_file / rw_exec 工具操作。
- [dsh-lan-access](https://github.com/Leon0555/dsh-lan-access) - 局域网访问：Web GUI 绑定 0.0.0.0 + crypto.randomUUID polyfill（修复非安全上下文下 RPC 崩溃），npm 可装
- [ego-browser](https://github.com/dsh-external/ego-browser) - 浏览器代理
- [dsh-webbridge](https://github.com/dsh-external/dsh-webbridge) - Web 桥接
- [browser4-dsh](https://github.com/dsh-external/browser4-dsh) - Browser4 AI-native 浏览器引擎（skills）
- [dsh-browser-runtime](https://github.com/anweat/dsh-browser) - DSH 自包含浏览器运行时插件：Playwright（chromium）+ OpenCLI 作为插件本地依赖（全局复用回退），提供 `browser` 服务与交互式浏览器工具。


## Models & Inference

- [dsh-vision](https://github.com/dsh-external/dsh-vision) - 视觉桥接：view_image 工具接任意 OpenAI 兼容 VLM（默认智谱免费档）
- [dsh-plugin-vision](https://github.com/tdf1995/dsh-plugin-vision) - 为纯文本大模型提供视觉能力：通过免费的 Gemini / GLM 视觉 API 完成图像描述、OCR 与视觉问答
- [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) - 内置免 Key 视觉链 + 像素级视觉工具（看图问答、定位、裁剪、像素对比、取色、OCR、矢量化、抠图、截图）；粘贴图片即可用，无 Python，一条命令安装
- [dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) - DeepSeek 大脑 + 自动识图：GUI 中附加的每张图片先经任意 OpenAI 兼容 VLM（默认 qwen3.7-flash）转写为文字，再交给纯文本 DeepSeek。
- [dsh-advisor](https://github.com/dsh-external/dsh-advisor) - 副模型每轮被动审查并注入建议
- [dsh-llm-fallbacks](https://github.com/dsh-external/dsh-llm-fallbacks) - 角色化 LLM 重试/备用策略
- [dsh-pi-adapter](https://github.com/dsh-external/dsh-pi-adapter) - pi ExtensionAPI 桥接
- [dsh-a2a](https://github.com/dsh-external/dsh-a2a) - Agent2Agent mesh
- [dsh-plugin-acn](https://github.com/acnlabs/dsh-plugin-acn) - 从 DeepSeek Harness 加入 ACN：注册本 Agent、发现其他 Agent、发消息、读收件箱。默认中国区。
- [dsh-acp](https://github.com/dsh-external/dsh-acp) - Client-neutral ACP 适配器
- [deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) - ACP profile 插件与独立 server，把完整 DSH agent 接入 Zed 等 ACP 客户端，并复用 DSH 的凭据、会话与 MCP 配置
- [dsh-mnemon](https://github.com/dsh-external/dsh-mnemon) - 助记层
- [dsh-slice-agent-loop](https://github.com/dsh-external/dsh-slice-agent-loop) - Drop-in agent loop：有界 slice 上下文引擎（cordis）
- [savemoneybenchmark](https://github.com/dsh-external/savemoneybenchmark) - 降本增效 benchmark（examples + skills）
- [dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) - MCP server 暴露 Harness agent：任意 MCP 客户端（如 Hermes）驱动 Harness 当「胳膊」。
- [dsh-subagent-tools](https://github.com/lynx-gt/dsh-subagent-tools) - 子代理委派按次覆盖 model / provider / persona / toolFilter、@preset: 引用、provider/model 复合 id（bundle，不改官方文件）。
- [dsh-subagent-cwd](https://github.com/lynx-gt/dsh-subagent-cwd) - dsh-subagent-tools 加按次 cwd（子代理工作目录），附所需的两处进程内 provider 补丁。
- [dsh-subscription-auth](https://github.com/Khellendros97/dsh-subscription-auth) - 订阅会员 OAuth 登录：ChatGPT/Claude/Grok/Kimi 按订阅账号（非 API key）访问模型，登录后自动发现官方模型列表

## Git & Engineering

- [dsh-git-identity](https://github.com/dsh-external/dsh-git-identity) - Git 提交固定环境作者身份（gh 登录账号 + noreply 邮箱）
- [dsh-gh-bridge](https://github.com/dsh-external/dsh-gh-bridge) - macOS Keychain GitHub token 桥入 sandbox gh
- [deepseek-harness-action](https://github.com/Lixiaoyiao/deepseek-harness-action) - 在 GitHub 中运行 DeepSeek Harness，用于 PR 审查、CI 诊断、受信任修复和 Issue → PR。
- [dsh-auto-blame](https://github.com/dsh-external/dsh-auto-blame) - 自动 blame
- [dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) - 结构化 Git 工具（status/diff/log/branch/stage/commit/stash/show）+ 破坏性命令安全护栏
- [dsh-plugin-check](https://github.com/dsh-external/dsh-plugin-check) - 插件健康检查（清单/patch 格式/构建陷阱/hub 收录）
- [dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) - 在已配置遥测后端接收前，对 `session-telemetry/record` 导出副本中的已支持秘密模式进行脱敏。
- [dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) - 把每轮工具计数与粗粒度验证信号写入本地 JSONL，不保存提示词、工具参数或结果正文。
- [dsh-inspect](https://github.com/dsh-external/dsh-inspect) - checkup → fix → review 对抗式闭环
- [dsh-alphasolve](https://github.com/dsh-external/dsh-alphasolve) - AlphaSolve 工作流
- [mstar-workflow](https://github.com/dsh-external/mstar-workflow) - 工作流引擎
- [dsh-spur](https://github.com/dsh-external/dsh-spur) - 任务引擎
- [dsh-involute](https://github.com/dsh-external/dsh-involute) - 内嵌任务管理引擎
- [dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) - 增量代码审查插件：checkpoint 增量队列 + Web 审查面板 + /review 命令，审查意见注入 agent
- [dsh-test-runner](https://github.com/suimi8/dsh-test-runner) - 结构化测试运行工具（test_run）：自动识别 Vitest/Jest/pytest/node:test，运行测试并为模型解析失败摘要。
- [dsh-git-branch-switcher](https://github.com/mixin-ai/dsh-git-branch-switcher) - 会话头部 Git 分支胶囊：显示当前项目分支，并可在 Web UI 中直接切换分支。
- [dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) - 工程纪律闭环：动工前盘问需求、红绿测试证据门、交付前对抗式审查。

## Output & Deliverables

- [dsh-report-studio](https://github.com/ciceroyang/dsh-report-studio) - 把 DeepSeek Harness 会话一键变成工作日报/周报/交接文档/公众号文章，附可验证凭据（报告与产物哈希）。


- [plugin-session-export](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-session-export) - 把 append-only 会话日志导出为人可读的 Markdown/HTML，按轨迹来源（系统提示/思维链/工具调用/子 agent）分组。

## Notifications & Channels

- [dsh-feishu-bot](https://github.com/dsh-external/dsh-feishu-bot) - 飞书机器人
- [dsh-feishu-notify](https://github.com/dsh-external/dsh-feishu-notify) - 飞书通知（会话结束/等待输入）
- [telegram](https://github.com/dsh-external/telegram) - Telegram 频道
- [dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) - Telegram 手机遥控器：附着本机正在运行的 DSH Web 会话（`/sessions` 选择、绑定/解绑），与电脑同轨迹（Codex 风格）。
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

- [plugin-notify](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-notify) - 回合完成/出错/需审批时发 IM webhook 与本机通知（飞书/企微/钉钉/Slack/Discord/自定义）。

## Fun & Lifestyle

- [dsh-agent-rp](https://github.com/dsh-external/dsh-agent-rp) - SillyTavern 迁移与下一代 DSH Agent RP。
- [dsh-emoji](https://github.com/dsh-external/dsh-emoji) - emoji 插件（cordis）。
- [dsh-stock-market](https://github.com/dsh-external/dsh-stock-market) - 股票行情插件。
- [dsh-travel-plugin](https://github.com/dsh-external/dsh-travel-plugin) - 旅行小插件。
- [dsh-weather](https://github.com/sunshine-lang/dsh-weather) - 天气工具：实时天气与多日预报，数据来自 Open-Meteo（免费，无需 API key）。
- [dsh-pdf](https://github.com/sunshine-lang/dsh-pdf) - PDF 工具箱：基于 pdfjs-dist 提取文本、元数据与页码范围（本地解析，无需 API key）。
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

- [Code2Skill](https://github.com/leechen298/Code2Skill) - 从用户授权的源码生成 Function、MCP 工具、工作流 Skill 与离线测试包。
- [deepseek-harness-desktop](https://github.com/Easyhoov/deepseek-harness-desktop) - 非官方 Windows 进程内桌面应用，提供托盘常驻、原生通知与 IPC 桥接。
- [dsh-hmz](https://github.com/dsh-external/dsh-hmz) - 占位仓库，描述待补充。
- [dsh-interpreters](https://github.com/dsh-external/dsh-interpreters) - 解释器插件（cordis）。
- [dsh-notebooks](https://github.com/dsh-external/dsh-notebooks) - notebooks 插件（cordis）。
- [dsh-plugin-radar](https://github.com/dsh-external/dsh-plugin-radar) - DSH 插件兼容性雷达，原 dsh-external-research 改名。
- [dsh-scout](https://github.com/dsh-external/dsh-scout) - scout 插件（cordis）。
- [dsh-share](https://github.com/dsh-external/dsh-share) - DSH 对话分享插件。
- [dsh-sonar](https://github.com/dsh-external/dsh-sonar) - sonar 插件（cordis）。
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
- [dsh-portable-launcher](https://github.com/15828148/dsh-portable-launcher) - dsh Web UI 的 Windows 一键便携启动器：自动安装 Node.js 和 dsh，国内镜像回退，重试与断点续传。
- [dsh-desktop-launcher](https://github.com/becomeless/dsh-desktop-launcher) - Windows 桌面启动器：双击图标一键启动 dsh Web（无命令行窗口，关窗即停、会话续接），一行命令安装。
- [dsh-quickstart](https://github.com/qzhqzh/dsh-quickstart) - Windows 桌面启动器（零依赖 npm CLI）：双击桌面快捷方式无窗口启动 dsh web，就绪后自动打开浏览器。
- [dshp](https://github.com/asdf17128/dshp) - Profile 管理器：列出/新建/克隆/对比 profile，并把整套配置（bundle 顺序、插件版本、patch）导出为单个可移植文件。
- [dsh-recommend](https://github.com/zp-home/dsh-recommend) - 插件透明排行与推荐：每日自动抓取 dsh-plugin 话题生态、公开评分模型，提供榜单/搜索/推荐工具与设置页排行榜。
- [dsh-eval](https://github.com/hccccc01333/dsh-eval) - Agent 评测平台：benchmark YAML、headless dsh 运行、trace 指标、脚本化评分与 run 对比/报告。
- [dsh-session-cleaner](https://github.com/fountunt/dsh-session-cleaner) - 无需重启即可删除运行中 Web 运行时里的会话：实时存储、工作区记录与磁盘工件一并清理。
- [dsh-session-cleaner-cli](https://github.com/ChenChen913/dsh-session-cleaner-cli) - 工作区会话离线深度清理 CLI：交互/批量删除（回收站+恢复+自动备份）、工作区账目与投影缓存同步、幽灵条目修剪，与运行时删除插件互补。
- [dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) - 官方 MCP 客户端的只读运行时管理面板：/mcp 命令与设置页 MCP 页签展示连接状态、已注册工具、错误与重连计数，脱敏展示并提供启停 patch 建议。
- [dsh-passwords](https://github.com/slywalker2006/dsh-passwords) - DSH Web UI 登录网关：首次配置、bcrypt + 静态加密（AES-256-GCM/HMAC）、防暴力破解、审计日志、TLS 1.2+ 与 80→443 跳转、CSRF 与防嵌框。

- [easyeda-agent](https://github.com/zhoushoujianwork/easyeda-agent) - 嘉立创EDA专业版(EasyEDA Pro)自动化：Go daemon + 编辑器内连接器 + agent skill + stdio MCP server，typed 原理图/PCB 动作、流程门禁与 DRC。
- [dsh-adb](https://github.com/SamXiaBing/dsh-adb) - ADB 设备与台架运维：设备发现、结构化 logcat（后台采集）、apk 安装、文件 pull/push、性能快照
- [dsh-restart](https://github.com/anweat/dsh-restart) - DSH 重启插件：可配置的重启方式（Node 原生/旧 PowerShell 适配）、重启后自动继续的提示词、可选看门狗自动拉起。


- [dsh-suite](https://github.com/whyihaveyou/dsh-suite) - DSH 插件活目录（785+ 插件，每小时刷新）+ 每日兼容性 CI + 中英双语可搜索目录站 + 内置插件商店。
- [create-dsh-plugin](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/create-dsh-plugin) - 秒建 DSH 插件脚手架（tool/events/webui 模板、锁 `next` 版本、内置 `--verify` 冒烟验证）。
- [plugin-manager](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-manager) - DSH Web UI 内置插件应用商店：目录浏览/搜索/一键安装/兼容徽章/已装列表。
- [plugin-team-board](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-team-board) - 多 agent 共享任务板（创建/认领/流转/查询），状态物化为 Cordis 协作用键。

## Science & Research

- [dsh-openmaic](https://github.com/dsh-external/dsh-openmaic) - 生成 OpenMAIC 交互式 AI 课堂。
- [dsh-science](https://github.com/biociao/dsh-science) — 面向 DSH 的 Claude Science 式科研工作台：ReAct 研究循环引擎（research_* 工具）、带溯源的版本化工件（artifact_* 工具）与面向基因组/病原体/生物信息的 10 个科研技能。

## Related

- [dsh-external/issues](https://github.com/dsh-external/issues) - Issue 聚合仓库
- [dsh-meme-hub](https://github.com/the-beating-light-of-the-nail/dsh-meme-hub) - 社区整活插件导航（皮肤/桌宠/小游戏），中英双语
- [DeepSeek](https://deepseek.com) - 官方入口

## Contributing

Please have a look at [contributing.md](contributing.md). 条目标准：仓库 + 一句话描述 + 链接；精选人工维护，全量索引以 hub 为准。

## 致谢

感谢 [LinuxDO 社区](https://linux.do/) 的支持与交流。
