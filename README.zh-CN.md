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
- [dsh-equip-engine](https://github.com/wuykjl/dsh-equip-engine) - 任务驱动插件配装引擎：双路检索（人工精选规则 + LLM 语义）、组合评分（协同/冲突/成本/信任）、冲突检测与安装命令导出。

## Agents & Orchestration

- [dsh-collaboration](https://github.com/Socialist-Sister/dsh-collaboration) - 多智能体协同套件：用户可配置的专家名册 + 持久专家实例（可多分身）按需雇佣、星型拓扑追问/中转、团队状态面板、模型对比与多模态视觉桥。
- [dsh-plans](https://github.com/Optim-Agent/dsh-plans) - 计划先行 Agent 预设：把仓库变更调研沉淀为 dsh-plans/ 下可追溯的 Markdown 计划，经 reviewer/criticizer 子代理多轮打磨，再作为 DSH goal 按验证清单执行。
- [dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) - 全局持久 Agent 小队：每个成员独立配置模型与工具策略；在 Settings 中管理、按对话选择并开关协作，普通发送按固定顺序或由模型规划执行。

## Context & Search

- [dsh-context](https://github.com/bowenliang123/dsh-context) - 上下文洞察面板：一眼看清模型上下文窗口的组成与变化——构成对照窗口大小、按请求历史趋势、压缩/注入事件、消息级 token 统计。
- [dsh-bookmarks](https://github.com/penguin-oo/dsh-bookmarks) - 收藏已定稿的 AI 回复（备注/标签），跨会话收藏中心支持搜索、标签筛选、跳回会话与一键导出 Markdown（Alt+B 开关面板）。
- [context-vista](https://github.com/GooodWei/context-vista) - 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配及消费估算
- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) - 看清模型每个请求到底背着多少上下文：指令链/技能目录/工具 schema 的 token 成本逐项量化，自动检测重复与冲突，给出可执行裁剪建议（Web 圆环面板 + context_audit 工具，全程只读）。
- [dsh-mcp-lens](https://github.com/labmimors/dsh-mcp-lens) - 渐进披露 MCP 网关：通过两个稳定入口检索大型远程工具目录，再用精确 schema 调用选中工具，并采用惰性连接与有界缓存。
- [dsh-cot-summary](https://github.com/dsh-external/dsh-cot-summary) - 外置 Summary-CoT 插件工作区。
- [dsh-explain](https://github.com/dsh-external/dsh-explain) - 学习模式插件，解释 agent 的每一步（WIP）。
- [dsh-file-mount](https://github.com/acefun29/dsh-file-mount) - 文件增量挂载与重复读取去重：已挂载行范围不重复进上下文，磁盘变化自动失效重挂，附「挂载文件」标签页与 token 节省统计。
- [dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) - 费曼学习法插件：讲解 → 复述 → 判定 → 回讲教学闭环，富 HTML 教学卡片（mermaid 图 + shiki 代码高亮）。
- [dsh-memory-vault](https://github.com/flymysql/dsh-memory) - 跨会话记忆库：memory_remember / memory_recall / memory_forget 三工具，最新条目自动注入系统提示词，设置页（记忆库 / Memory）管理。
- [dsh-session-search](https://github.com/dsh-external/dsh-session-search) - 跨 dsh/Codex/Claude Code/pi/OpenCode 会话只读搜索，无索引
- [cross-harness-cite](https://github.com/dsh-external/cross-harness-cite) - 跨 harness 引用历史对话
- [task-passport](https://github.com/dongsheng123132/task-passport) - 通过机器可读检查点与乐观锁，在 DeepSeek Harness、WorkBuddy、Claude Code 和 Codex 之间交接持久任务状态。
- [dsh-session-cluster](https://github.com/dsh-external/dsh-session-cluster) - 会话聚类
- [session-chatlog](https://github.com/dsh-external/session-chatlog) - 会话聊天记录
- [dsh-memoria](https://github.com/jiayan-xu/dsh-memoria) - Memoria 记忆后端：为 dsh agent 提供 observe/remember/search/recall 四个工具，支持向量+图记忆、命名空间隔离、自动写入与配置热重载。
- [dsh-memory-evolve](https://github.com/dsh-external/dsh-memory-evolve) - 跨会话长期记忆 + 后台自我进化（五轨记忆/Git 分支感知/技能进化）
- [dsh-memory-gate](https://github.com/GIT121995/dsh-memory-gate) - 有界本地长期记忆：CBDC（Claim→Belief→Decision→Consumption）权威门控 + SQLite/FTS5，检索到≠注入，use/verify/ignore 可解释决策与完整审计，/memory 命令管理，每次最多注入 3 条 1200 字符，不增加模型调用。
- [dsh-engram-relay](https://github.com/dsh-external/dsh-engram-relay) - 内置 <1B 模型实现 100k 等效长记忆，因果图精准唤醒
- [dsh-mneme](https://github.com/modusensus/dsh-mneme) - 跨会话记忆且主权归用户：SQLite + 可人工编辑的 Markdown 双写、autoDream 后台记忆巩固、完全离线语义检索（本地向量 / 精排 / 聚类）、198 个测试护航。
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
- [dsh-session-archive](https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-session-archive) - 设置页查看归档会话并两步确认永久删除死会话（运行中会话锁定）。


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
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) - 全保真导入 13 款编码 Agent 的历史会话（Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / opencode / ZCode / Grok Build / OpenClaw / Pi / Hermes / Kimi），导入后可在 DSH 续聊，并支持反向导出/同步回 Claude Code
- [dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) - 同一工作区并行多会话的文件认领与写入保护（claim/release、心跳 stale 接管、pending 三路合并）
- [dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) - 输入框工具栏快速便签：点子/感想/TODO，Markdown 预览、自动保存、一键发送到对话。
- [dsh-plugin-quote-reply](https://github.com/yangYzc/dsh-plugin-quote-reply) - 在会话中划选文字，一键「引用回复」插入输入框，或「新窗口回复」开新会话并预填引用。
- [dsh-pathlink](https://github.com/penguin-oo/dsh-pathlink) - 在对话中 Ctrl+点击文件路径与链接：路径在文件管理器中定位所在文件夹，链接在新标签页打开。
- [@picgo/dsh-plugin](https://github.com/PicGo/dsh-plugin) - PicGo 官方插件：把本地文件传到图床拿到公网链接，复用你已在 PicGo 配好的图床与上传器插件。

- [dsh-suggested-replies](https://github.com/dsh-external/dsh-suggested-replies) - DSH Web 输入框上方的预测回复插件。
- [dsh-wordbox](https://github.com/arcmosin/dsh-wordbox) - 输入框旁的常驻常用词/句面板，支持全局/当前项目双桶与一键插入。
- [dsh-voice-webspeech](https://github.com/anweat/dsh-voice-webspeech) - DSH 浏览器 Web Speech API 语音输入：零服务端、零密钥、零模型下载（Edge=Azure 语音、Chrome=Google 语音）。
- [dsh-plugin-anydoc](https://github.com/beancookie/dsh-plugin-anydoc) - 该插件封装了一个可复用的函数，通过 @firecrawl/anydoc 提取文件内容（支持文件路径或 Buffer 输入），并返回 GitHub‑Flavored Markdown（GFM）。同时提供可选的配置项（如输出目录、是否覆盖已有文件）。
- [dsh-attachment-upload](https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-attachment-upload) - 输入框「📎 附件」按钮：上传文件到当前工作区 .dsh-attachments 并把路径插入草稿。
- [dsh-steer-button](https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-steer-button) - 输入框常驻「插话」按钮：一键把草稿注入运行中的轮次（等同 Ctrl/Cmd+Enter）。
- [Boliban/dsh-enter-customizer](https://github.com/Boliban/dsh-enter-customizer) — 接管聊天输入框的回车等快捷键，每个快捷键的行为都能单独配置。

- [PerryLink/dsh-composer-history](https://github.com/PerryLink/dsh-composer-history) - 为 Web 作曲器提供终端风格输入历史：边缘优先方向键召回并精确还原草稿与光标、浏览器本地持久化历史、Ctrl+R 反向搜索与滑动上下文感知（压缩摘要加入召回与搜索）。

## UI & Experience

- [dsh-spotlight](https://github.com/0xsline/dsh-spotlight) - DeepSeek Harness Web 的键盘优先命令面板。
- [dsh-better-model-selector](https://github.com/Khellendros97/dsh-better-model-selector) - 将输入框模型选择器拆成「可搜索 + 收藏」的下拉选单和「推理强度滑动条」两个独立控件，支持 Ctrl+P / Ctrl+T 快速切换。
- [dsh-catppuccin](https://github.com/zhijun-dai/Catppuccin-dsh-theme) - Catppuccin 主题插件：为 DSH Web 主题运行时提供 Latte / Frappé / Macchiato / Mocha 四套皮肤。
- [solarized-dsh-theme](https://github.com/zhijun-dai/Solarized-dsh-theme) - Solarized + Selenized 主题插件：向 DSH Web 主题运行时注册四套忠实色板。
- [arcana](https://github.com/GooodWei/arcana) - DeepSeek Harness 的悬浮命令甲板：把所有斜杠命令列成可执行按钮，悬停看介绍，按使用次数排序。
- [dsh-aigc-canvas](https://github.com/dsh-external/dsh-aigc-canvas) - AIGC 画布插件（cordis）。
- [dsh-deepcel](https://github.com/dsh-external/dsh-deepcel) - Deepcel 电子表格皮肤与独立分发仓库。
- [dsh-deepseek-quota](https://github.com/yingjunnan/dsh-deepseek-quota) - DSH Web 页面右下角悬浮卡片展示 DeepSeek API 余额（自动刷新 + 手动刷新）。
- [dsh-diff-viewer](https://github.com/dsh-external/dsh-diff-viewer) - PiUI 风格 Web diff 查看器，替换默认 diff 视图。
- [dsh-mobile](https://github.com/dsh-external/dsh-mobile) - 手机端插件（cordis + dsh.plugin.json）。
- [dsh-openpencil](https://github.com/dsh-external/dsh-openpencil) - OpenPencil 设计预览与编辑插件。
- [dsh-design-studio](https://github.com/Sal7one/DSH-Design-Studio) - Design Studio 标签页：将设计简报转化为 html/css/js 原型，实时预览、元素选取、设计代理对话与视觉审查、身份预设、zip 导出。
- [dsh-pin-recall](https://github.com/kerwin2046/dsh-pin-recall) - 在 Web 助手消息操作条钉住回复，再通过 `/pin` `/recall` 召回进下一轮模型上下文（可一键唤醒）。
- [dsh-turn-navigator](https://github.com/dsh-external/dsh-turn-navigator) - DSH Web turn 导航插件。
- [dsh-ultra-ui](https://github.com/dsh-external/dsh-ultra-ui) - ultra-ui 插件（cordis）。
- [dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) - DSH Web 人民币/美元 token 计费插件：官方政策自动计价（含峰谷时段）、逐条消息费用账本、账号余额、按界面语言切换币种。
- [dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) - DeepSeek 账户余额与当前会话成本显示在 DSH Web 编辑器 dock 中（自动获取官方价格，支持峰时/非峰时计价）。
- [dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) - 会话与当日 API 费用统计、预算图框（已用%）、官方余额、历史看板，支持峰谷计价与官方价格一键同步。
- [dsh-cost-meter](https://github.com/Sttrevens/dsh-cost-meter) - Web UI 美元成本徽标：头部显示会话总成本、每条回复结尾显示该轮成本，悬停看分项（token 用量 × 可配置价格表）。
- [dsh-plugin-cost](https://github.com/yweilai77-dev/dsh-plugin-cost) - DSH Web 聊天框底部的会话费用估算：token 四桶 × 可配置价格表，一键刷新官方价格（估算非账单）。
- [dsh-spend](https://github.com/nonewind/dsh-spend) - DSH Web 用量与预计费用统计：右下角悬浮窗，按模型/按天/按会话多维聚合，内置供应商知识库自动识别计费计划。
- [dsh-balance-tide](https://github.com/huanyuLv/dsh-balance-tide) - 输入框下方显示 DeepSeek 账户余额与本会话花费，余额前带峰/谷价格徽章（北京时间）与距切换倒计时，悬停查看两档单价明细与使用建议。
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
- [dsh-markdown-preview](https://github.com/GitHubJiKe/dsh-markdown-preview) - 产物文件聊天内预览：点击产物 chip 在对话中渲染 Markdown（markdown-it + highlight.js）、图片或纯文本，系统应用打开仍一键可达
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
- [deepseek-harness-desktop](https://github.com/fendouai/deepseek-harness-desktop) - 基于 Tauri 2 的 DeepSeek Harness 桌面发行版，集成完整 Web UI、受监管的本地 sidecar 与内置 Node.js 24 运行时（macOS/Linux/Windows）。
- [DeepSeek Harness Desktop](https://github.com/chokwinlee/deepseek-harness-desktop) - 官方 DSH Web UI 的自包含 macOS/Windows 桌面端；macOS 采用 Tauri/WKWebView，DMG 不到 90 MB，并内置完整 Harness 运行时。
- [dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) - 右侧圆点时间轴导航栏，快速跳转到任意用户消息。
- [dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) - 轮次索引侧边栏：每条索引对应一轮用户提问，点击跳转并闪烁高亮，滚动时自动高亮当前轮次。
- [dsh-outline](https://github.com/urzeye/dsh-outline) - DSH Web 会话页实时大纲面板：用户问题 + Markdown 标题（1~6 级）大纲树，流式生成实时更新，点击节点定位高亮，支持展开层级调节、搜索与会话级收藏。
- [dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) - 关注提醒：会话等待输入或后台完成未打开时，左上角角标、标签页标题 (N) 计数与鲸鱼 favicon 换色三处联动。
- [dsh-plugin-description](https://github.com/MysaDC/dsh-plugin-description) - 为 Web 设置插件列表页的每张插件卡片补上中英文功能说明，并提供 `pluginDescriptions` 服务供其他插件注册自己的说明。
- [dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) - DSH Web 官方内置插件的人类可读目录，提供状态解释与经过审核的安全 UI 开关。
- [dsh-hud](https://github.com/a903067276-rgb/dsh-hud) - HUD 状态面板：Git 状态、MCP 服务器、技能列表、模型与 token 用量，悬浮侧栏一览无余。
- [dsh-file-mentions](https://github.com/a903067276-rgb/dsh-file-mentions) - 回复中的可点击文件路径：Codex 风格内联打开、📂 文件管理器显示、回合末尾的文件提及 chip 列表。
- [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) - DSH Web 请求中断自动续跑：网络/超时/宿主崩溃等非人为失败后自动发送「继续」，支持错误分类、自适应退避、模板化继续文本与浏览器通知；全部参数可在插件设置卡片中调整。
- [dsh-trajectory-debug](https://github.com/devmom/dsh-trajectory-debug) - DeepSeek Harness 轨迹瀑布流、确定性回放、断点、改参重跑、分叉对比与性能分析。
- [dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) - Web UI 配色方案插件：在设置里一键切换并持久化主题，内置 8 款开源预设，支持自定义主题。
- [dsh-plugin-setting-mcp](https://github.com/Ceelog/dsh-plugins/tree/main/src/plugins/dsh-plugin-setting-mcp) - 在 Web 设置面板中添加、编辑、删除、启用或停用 MCP 服务器，保存后热重载。
- [dsh-theme-plugin](https://github.com/BeiZi6/dsh-theme-plugin) - DSH Web GUI 主题工作室：5 套内置预设 + 完全可自定义的浅/深配色（强调色、背景、前景、UI 与代码字体、半透明侧栏、对比度），即时热切换并持久化到 localStorage。
- [dsh-opencodego-usage](https://github.com/BeiZi6/dsh-opencodego-usage) - OpenCodeGo 剩余额度监视器：输入框右下角呼吸指示灯（按剩余额度绿/黄/红），液态玻璃面板显示滚动/周/月用量窗口与重置时间，每 30 秒自动刷新；API Key 自动读取 DSH 凭据。
- [dsh-smooth-stream](https://github.com/SpookySandwich/dsh-smooth-stream) - 给 DeepSeek Harness 加入更好的流式文字动画。
- [dsh-whale-switch](https://github.com/bowen507/dsh-whale-switch) - 最小开关闭环：桌面快捷方式启动 dsh web + 右上角鲸鱼动画退出按钮（悬停升起、点击俯冲入水后优雅退出并关页）。

## IDE & Clients

- [dsh4vscode](https://github.com/DoggyHU/dsh4vscode) - 基于 DSH agent 的 VS Code 聊天窗口：OpenCode 式独立会话、模型自动路由（Flash/Pro/Pro Max）。
- [dsh-plugin-open-editor](https://github.com/Civitasv/dsh-plugin-open-editor) - 从会话页头一键用本地编辑器（VS Code / Cursor / JetBrains / Vim 等）打开当前项目。
- [dsh-open-with](https://github.com/ChuanTianML/dsh-open-with) - 从 DSH Web UI 使用自动检测或手动配置的本机编辑器、终端或文件管理器打开已登记工作区，并按浏览器记住首选目标。
- [DSH-for-VSC](https://github.com/yauntyour/DSH-for-VSC) - 把 DSH 的 WebUI 搬进 VS Code：编辑器内嵌面板 + 侧边栏控制台（服务状态/一键启停），离线自动拉起、日志随时可查、状态栏常驻指示。
- [dsh-gui](https://github.com/xuboboo/dsh-gui) - DeepSeek Harness 第三方 Windows 桌面客户端：原生窗口、品牌主题与启动动画、启动崩溃修复、Token 用量统计。
- [DSH Studio](https://github.com/Moresyl/dsh-studio) - 跨平台 Rust/Tauri 桌面外壳：托管 `dsh web`、回收进程树、自动选择空闲端口，并发布 Windows/Linux/macOS 安装包，无需 fork 上游 UI。

## Browser & Remote

- [dsh-browser-panel](https://github.com/dsh-external/dsh-browser-panel) - WebUI 内嵌有头浏览器，模型实时操控（Codex 式，0 视觉依赖）
- [dsh-builtin-browser](https://github.com/wqty123/dsh-browser) - DSH 共享真实浏览器：用户可见、可随时接管的浏览器窗口，由 agent 通过 CDP 驱动（snapshot/execute/content/多标签管理）。
- [dsh-browser](https://github.com/dsh-external/dsh-browser) - Chrome 侧边栏扩展
- [dsh-deeplink](https://github.com/dsh-external/dsh-deeplink) - 通过 URL 参数直接打开 DSH WebUI 会话或工作区。
- [dsh-remote](https://github.com/flymysql/dsh-remote) - 多机远程工作区：管理多个 SSH 主机，在原生 Add-workspace 流程中选择本地或远程工作区（系统文件夹/路径浏览），把远程工作区镜像到本地真实文件夹，用 rw_* 工具操作。
- [dsh-lan-access](https://github.com/Leon0555/dsh-lan-access) - 局域网访问：Web GUI 绑定 0.0.0.0 + crypto.randomUUID polyfill（修复非安全上下文下 RPC 崩溃），npm 可装
- [ego-browser](https://github.com/dsh-external/ego-browser) - 浏览器代理
- [dsh-webbridge](https://github.com/dsh-external/dsh-webbridge) - Web 桥接
- [browser4-dsh](https://github.com/dsh-external/browser4-dsh) - Browser4 AI-native 浏览器引擎（skills）
- [dsh-browser-runtime](https://github.com/anweat/dsh-browser) - DSH 自包含浏览器运行时插件：Playwright（chromium）+ OpenCLI 作为插件本地依赖（全局复用回退），提供 `browser` 服务与交互式浏览器工具。
- [dsh-computer-use](https://github.com/ZRui-C/dsh-computer-use) - 文本优先电脑控制：Playwright/CDP 后台操作 Chromium，Accessibility 优先控制 macOS；动作锁定到正确进程与窗口，不抢前台、不移动鼠标（已签名公证 Universal 2 DMG 安装包）。


## Models & Inference

- [dsh-vision](https://github.com/dsh-external/dsh-vision) - 视觉桥接：view_image 工具接任意 OpenAI 兼容 VLM（默认智谱免费档）
- [dsh-plugin-vision](https://github.com/tdf1995/dsh-plugin-vision) - 为纯文本大模型提供视觉能力：通过免费的 Gemini / GLM 视觉 API 完成图像描述、OCR 与视觉问答
- [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) - 内置免 Key 视觉链 + 像素级视觉工具（看图问答、定位、裁剪、像素对比、取色、OCR、矢量化、抠图、截图）；粘贴图片即可用，无 Python，一条命令安装
- [dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) - DeepSeek 大脑 + 自动识图：GUI 附加的每张图片自动经 OpenAI 兼容 VLM 转译成文字，再交给纯文本的 DeepSeek 作答——有 key 自动走快速通道（默认 qwen3.7-flash，支持百炼/智谱/OpenRouter 等任意 OpenAI 兼容端点），无 key 自动探测本地 Ollama（零配置，图片不出本机）。
- [DSH-Multimodal](https://github.com/yauntyour/DSH-Multimodal) - 按输入文件类型配置多模态处理模型链：图片/视频/音频等文件先经预设模型转为 Prompt Tokens 再交给纯文本会话模型，支持多模型回退链与「Multimodal」设置页。
- [dsh-advisor](https://github.com/dsh-external/dsh-advisor) - 副模型每轮被动审查并注入建议
- [dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) - 阻断式安全闸门：更强的模型对危险工具调用给出放行/拒绝/询问，由工具执行器强制执行，而非提示词劝阻。可选 BlockRun x402 路由，一个钱包按次调用 67 个模型。
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
- [dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) - 子代理 LLM 供应商/模型选择与角色模板（subagent_role 工具）。
- [dsh-subscription-auth](https://github.com/Khellendros97/dsh-subscription-auth) - 订阅会员 OAuth 登录：ChatGPT/Claude/Grok/Kimi 按订阅账号（非 API key）访问模型，登录后自动发现官方模型列表
- [dsh-llm-oauth](https://github.com/ziyou979/dsh-llm-oauth) - 订阅套餐 OAuth 登录插件：Grok / GitHub Copilot / OpenAI Codex / Anthropic / OpenRouter，持久凭据 + 请求路径自动刷新 token，不改仓库（Grok/Copilot 可用，Codex 慎用）。
- [dsh-llm-fallback](https://github.com/Visol-456/dsh-llm-fallback) - Provider 回退链：请求本身永远是链头（你选的模型永不被改写），失败按备用目标顺序自动切换重试；带 Web UI 配置面板
- [dsh-sampling-sliders](https://github.com/Semidia/dsh-sampling-sliders) - 输入栏采样面板：temperature / maxTokens 滑杆，热调 + 持久化两种模式，经 agent/request 钩子作用于所有 Provider。
- [dsh-service-control](https://github.com/Semidia/dsh-service-control) - 侧边栏底部重启 / 关闭按钮：经 ctx.appExit 优雅关闭，由脱离宿主管理的独立进程自动重启 dsh web。
- [loongport-dsh](https://github.com/SailingLoong/loongport-dsh) - 多站点中转服务商接入：签名目录（身份、地址、模型）、Settings → LoongPort 服务商与 API Key 手动配置页、OpenAI 兼容路由（npm 包：loongport）。
- [dsh-output-styles](https://github.com/PerryLink/dsh-output-styles) - 运行时切换模型输出风格（对标 Claude Code outputStyles）：/style 命令、按会话持久化、systemPrompt 注入与 Web 选择器。

## Git & Engineering

- [dsh-git-identity](https://github.com/dsh-external/dsh-git-identity) - Git 提交固定环境作者身份（gh 登录账号 + noreply 邮箱）
- [dsh-gh-bridge](https://github.com/dsh-external/dsh-gh-bridge) - macOS Keychain GitHub token 桥入 sandbox gh
- [dsh-atomgit](https://github.com/xiongjiamu/dsh-atomgit) - AtomGit 插件 bundle：内置 atomgit-skills 工作流（规划/实现/审查/合并 Issue 与 PR）、ag CLI 与平台托管的 GitCode MCP 工具
- [deepseek-harness-action](https://github.com/Lixiaoyiao/deepseek-harness-action) - 在 GitHub 中运行 DeepSeek Harness，用于 PR 审查、CI 诊断、受信任修复和 Issue → PR。
- [dsh-auto-blame](https://github.com/dsh-external/dsh-auto-blame) - 自动 blame
- [dsh-bash-rtk](https://github.com/DeepTrial/dsh-bash-rtk) - 在 DSH bash 执行器内把符合条件的 bash 命令路由给 rtk（Rust Token Killer）以压缩工具输出、节省 token；rtk 缺失时安全透传。
- [dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) - 结构化 Git 工具（status/diff/log/branch/stage/commit/stash/show）+ 破坏性命令安全护栏
- [dsh-plugin-check](https://github.com/dsh-external/dsh-plugin-check) - 插件健康检查（清单/patch 格式/构建陷阱/hub 收录）
- [dsh-ops-skill](https://github.com/dragon43pp/dsh-ops-skill) - 只读 DSH 运行时可靠性工具包：版本化脱敏状态契约、受保护快照、面向人工审查的升级差异与隔离回归检查；默认不使用特权 Docker。*文件夹式 Skill，不是 DSH profile bundle。*
- [dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) - 在已配置遥测后端接收前，对 `session-telemetry/record` 导出副本中的已支持秘密模式进行脱敏。
- [dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) - 把每轮工具计数与粗粒度验证信号写入本地 JSONL，不保存提示词、工具参数或结果正文。
- [dsh-inspect](https://github.com/dsh-external/dsh-inspect) - checkup → fix → review 对抗式闭环
- [hermes-dsh-collab](https://github.com/Cavan-Ou/hermes-dsh-collab) - 把 DeepSeek Harness 接进 Hermes 管线：派单 spec 模板、模型档位路由、质量门、git 唯一写者约定，SKILL.md 技能包（bundle 可安装）。
- [dsh-alphasolve](https://github.com/dsh-external/dsh-alphasolve) - AlphaSolve 工作流
- [mstar-workflow](https://github.com/dsh-external/mstar-workflow) - 工作流引擎
- [dsh-spur](https://github.com/dsh-external/dsh-spur) - 任务引擎
- [dsh-involute](https://github.com/dsh-external/dsh-involute) - 内嵌任务管理引擎
- [dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) - 增量代码审查插件：checkpoint 增量队列 + Web 审查面板 + /review 命令，审查意见注入 agent
- [dsh-test-runner](https://github.com/suimi8/dsh-test-runner) - 结构化测试运行工具（test_run）：自动识别 Vitest/Jest/pytest/node:test，运行测试并为模型解析失败摘要。
- [dsh-git-branch-switcher](https://github.com/mixin-ai/dsh-git-branch-switcher) - 会话头部 Git 分支胶囊：显示当前项目分支，并可在 Web UI 中直接切换分支。
- [dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) - 工程纪律闭环：动工前盘问需求、红绿测试证据门、交付前对抗式审查、交付报告与逐维度核对。
- [dsh-plugin-diff-review](https://github.com/Civitasv/dsh-plugin-diff-review) - 浮动面板中的 Codex 风格变动审查：逐轮查看会话更改 + git 工作区全量未提交更改（暂存/丢弃/提交/推送），含历史时间线。
- [dsh-yolo-mode](https://github.com/SeverusZh/dsh-yolo-mode) - 沙箱升权申请的 LLM 自动审批：预设 + 逐工具权限层级，fail-closed 兜底。
- [dsh-plugin-scheduled-tasks](https://github.com/Ceelog/dsh-plugins/tree/main/src/plugins/dsh-plugin-scheduled-tasks) - 按项目调度提示词，在全新的无头 Agent 会话中执行，支持单次、固定间隔和 cron 计划，并持久化运行历史。
- [dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) - 声明式 allow/deny/ask 权限规则：在 tools/pre-execute 瀑布上匹配工具名、参数、工作区路径与 agent 身份，带会话日志审计、干跑模式与热重载。
- [dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) - DSH 的 Claude Code /rewind 等价能力：变更型工具执行前 git 优先工作区快照，轮次边界 fork 会话，一条 /rewind 命令恢复文件并把会话回退到检查点。

## Output & Deliverables

- [folio](https://github.com/nyantused-cpun/folio) - Folio（兰亭）：咨询文档生成引擎（接案 → 记忆 → 方法论 → 交付物 → 凭证）的原生 DSH 插件栈：15 个工具、会话协议事件、L0 防护、Agent 预设；方法论包可替换，DSH 内零密钥起步。
- [dsh-report-studio](https://github.com/ciceroyang/dsh-report-studio) - 把 DeepSeek Harness 会话一键变成工作日报/周报/交接文档/公众号文章，附可验证凭据（报告与产物哈希）。


- [plugin-session-export](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-session-export) - 把 append-only 会话日志导出为人可读的 Markdown/HTML，按轨迹来源（系统提示/思维链/工具调用/子 agent）分组。
- [dsh-xiaohongshu-viral-note](https://github.com/xuboboo/dsh-xiaohongshu-viral-note) - 小红书爆款笔记 agent skill 插件：热门笔记研究、选题、种草文案生成/改写、合规校验、授权账号权重分析、扫码登录与受控发布。

## Notifications & Channels

- [dsh-feishu-bot](https://github.com/dsh-external/dsh-feishu-bot) - 飞书机器人
- [dsh-feishu-notify](https://github.com/dsh-external/dsh-feishu-notify) - 飞书通知（会话结束/等待输入）
- [dsh-lark-meeting-notifier](https://github.com/yeruizhi/dsh-lark-meeting-notifier) - 飞书会议提醒：右侧悬浮框显示今日/明日飞书会议，多闹钟闪烁提醒。
- [telegram](https://github.com/dsh-external/telegram) - Telegram 频道
- [dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) - Telegram 手机遥控器：附着本机正在运行的 DSH Web 会话（`/sessions` 选择、绑定/解绑），与电脑同轨迹（Codex 风格）。
- [harness-remote](https://github.com/Hyna-hla/harness-remote) - 第三方手机遥控端：局域网或 cpolar 连接电脑上的 DSH（扫码自动连接），流式聊天、审批横幅与后台高优先级推送、会话内切换模型与权限。
- [tg-bot](https://github.com/dsh-external/tg-bot) - Telegram bot
- [qqbot](https://github.com/dsh-external/qqbot) - QQ bot
- [dsh-wecom-bot](https://github.com/dsh-external/dsh-wecom-bot) - 企业微信 bot
- [dsh-weixin-bot](https://github.com/dsh-external/dsh-weixin-bot) - 微信 bot
- [dsh-im-hub](https://github.com/ThreeBody6666/dsh-im-hub) - 多平台 IM 网关：飞书（Lark）WebSocket 长连接（无需公网）、企业微信 AES 加密回调、Telegram 长轮询；每会话独立 agent、白名单访问、GUI 可视化设置卡片
- [dsh-voice-chat](https://github.com/dsh-external/dsh-voice-chat) - 语音对话
- [dsh-web-ui-notify](https://github.com/dsh-external/dsh-web-ui-notify) - WebUI 通知
- [dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) - Windows 通知，零依赖
- [dsh-ica](https://github.com/dsh-external/dsh-ica) - icalingua 前端
- [dsh-opencode-server](https://github.com/dsh-external/dsh-opencode-server) - opencode attach 丝滑 TUI
- [dsh-teamwork](https://github.com/dsh-external/dsh-teamwork) - 团队协作（cordis）

- [plugin-notify](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-notify) - 回合完成/出错/需审批时发 IM webhook 与本机通知（飞书/企微/钉钉/Slack/Discord/自定义）。

## Fun & Lifestyle

- [dsh-clippy](https://github.com/sjh9714/clippy-harness) - Clippy 复活为办公室助理宠物：对真实 agent 状态做出反应，失败回合弹出经典「非法操作」对话框。
- [dsh-agent-rp](https://github.com/dsh-external/dsh-agent-rp) - SillyTavern 迁移与下一代 DSH Agent RP。
- [dsh-emoji](https://github.com/dsh-external/dsh-emoji) - emoji 插件（cordis）。
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


- [xiekai886/dsh-MusicPlayer](https://github.com/xiekai886/dsh-MusicPlayer) - 可折叠/展开、自由拖动的悬浮音乐播放器，接入网易云音乐，支持歌单导入和按歌名或歌手搜索单曲导入，边对话边听歌。

## Infrastructure & Development

- [Code2Skill](https://github.com/leechen298/Code2Skill) - 从用户授权的源码生成 Function、MCP 工具、工作流 Skill 与离线测试包。
- [dsh-movein](https://github.com/sjh9714/dsh-movein) - 一条命令把整套 Claude Code 配置迁入 DSH：技能、MCP 服务器、hooks、子代理与权限规则，附 dry-run 迁移清单、迁移差异报告与 movein_from_claude_code 工具。
- [dsh-observation-journal](https://github.com/Cavan-Ou/dsh-observation-journal) - 把 DeepSeek Harness 的零侵入运行事实遥测：每个会话自动把任务/模型档位/工具/失败/时长/状态写入人机共读观测卡并附统计区（纯观察者——零工具、零 LLM、零注入）。
- [deepseek-harness-desktop](https://github.com/Easyhoov/deepseek-harness-desktop) - 非官方 Windows 进程内桌面应用，提供托盘常驻、原生通知与 IPC 桥接。
- [sandbase-harness](https://github.com/sandbaseai/sandbase-harness) - 通过原生 bundle 与 stdio MCP 接入 DSH 的持久化托管 Agent 运行时，提供沙箱会话、审计与回放。
- [sandbase-skills](https://github.com/sandbaseai/sandbase-skills) - 经校验的 SKILL.md 目录与安装器，为 DSH 和兼容 Agent 提供 88 个可安装技能包。
- [dsh-hmz](https://github.com/dsh-external/dsh-hmz) - 占位仓库，描述待补充。
- [dsh-interpreters](https://github.com/dsh-external/dsh-interpreters) - 解释器插件（cordis）。
- [dsh-notebooks](https://github.com/dsh-external/dsh-notebooks) - notebooks 插件（cordis）。
- [dsh-plugin-radar](https://github.com/dsh-external/dsh-plugin-radar) - DSH 插件兼容性雷达，原 dsh-external-research 改名。
- [dsh-scout](https://github.com/dsh-external/dsh-scout) - scout 插件（cordis）。
- [dsh-share](https://github.com/dsh-external/dsh-share) - DSH 对话分享插件。
- [dsh-sonar](https://github.com/dsh-external/dsh-sonar) - sonar 插件（cordis）。
- [dsh-workloads](https://github.com/yewenyell-lang/dsh-workloads) - 为 DeepSeek Harness 提供工作区级持久进程托管、就绪检测与运行中心。
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

- [dsh-tray](https://github.com/KAIbsb/dsh-tray) - Windows 托盘管理器:启动/重启/停止 DSH Web、崩溃自动拉起、状态图标与开机自启。
- [mirage-dsh](https://github.com/strukto-ai/mirage/tree/main/typescript/packages/dsh) - 把文件系统与 bash 提供者换成 mirage 虚拟工作区：文件工具与 shell 命令作用于挂载的资源（RAM、S3、Redis、Slack、Gmail、Notion、Postgres）而非宿主磁盘，支持按挂载点设置读/写/执行模式、按命令选择沙箱（进程内 monty、pyodide、quickjs；远程 docker、e2b、daytona），并可在虚拟终端中安装 CLI（git、gh、slack、linear、ntn、gws，或自行注册的程序树）作为命令头词。
- [dsh-genie](https://github.com/swaylq/dsh-genie) - 把 `cordis_define` 的动态包固化为可跨重启存活的正式组合包；写包与注册 profile 层均不需要 pnpm、联网或构建授权。
- [dsh-chat-tools](https://github.com/yj060464-commits/dsh-chat-tools) - headless 终端伴侣工具链：chat.sh 连续对话 REPL（滚动上下文/决策点拍板/工作流实时透传/思考档位切换）+ 会话日志 LLM 自动总结，零依赖纯 bash+Python

- [dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) - 插件开发知识库，作为按需加载的智能体技能：官方约束、任务工作流、API 参考与社区踩坑。

## Data & Market

- [dsh-stock-market](https://github.com/dsh-external/dsh-stock-market) - 沪深 A 股行情数据插件。
- [dsh-us-stocks](https://github.com/Realyujie/dsh-us-stocks) - 美股行情、历史 K 线、财务报表、分析师共识与新闻，基于 yahoo-finance2。

## Science & Research

- [dsh-openmaic](https://github.com/dsh-external/dsh-openmaic) - 生成 OpenMAIC 交互式 AI 课堂。
- [dsh-science](https://github.com/biociao/dsh-science) — 面向 DSH 的 Claude Science 式科研工作台：ReAct 研究循环引擎（research_* 工具）、带溯源的版本化工件（artifact_* 工具）与面向基因组/病原体/生物信息的 10 个科研技能。
- [dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) - 完整 reverse-skill（85 个 SKILL.md）的 DeepSeek Harness 插件：逆向工程、授权渗透测试与安全研究技能路由包。
- [dsh-grok-geo](https://github.com/xuboboo/dsh-grok-geo) - GEO 品牌审计 skill 插件：覆盖 17+ AI 搜索引擎（ChatGPT/Perplexity/Claude/豆包/DeepSeek/Kimi/文心一言）的 AI 搜索可见性、推荐、引用、竞品对比与内容缺口诊断。
- [dsh-rigorquant](https://github.com/linxichen/dsh-rigorquant) - 面向实证/计算数学研究（经济/金融/组合）的无人值守 Agent 预设 + 技能：隔离多智能体探索、双轨真值推导、仅反例淘汰的对抗审计、四重实现前校验，以及 jacobian/Lean 升级通道。
- [dsh-wuyun-liuqi](https://github.com/dhicoc/dsh-wuyun-liuqi) - 完整 wuyun-liuqi（五运六气）中医运气学技能包，封装为 DeepSeek Harness 插件：年度与客气推算、临床辨证、病机推演。

## Related

- [dsh-external/issues](https://github.com/dsh-external/issues) - Issue 聚合仓库
- [dsh-meme-hub](https://github.com/the-beating-light-of-the-nail/dsh-meme-hub) - 社区整活插件导航（皮肤/桌宠/小游戏），中英双语
- [DeepSeek Harness Handbook](https://github.com/sandbaseai/deepseek-harness-handbook) - 从 Agent 视角讲解 DSH 运行、扩展与排障的来源可追溯手册，提供多语言导航和可下载的速查指南
- [DeepSeek](https://deepseek.com) - 官方入口

### 友情链接

- [DeepSeek Harness Desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) - 为 DeepSeek Harness 生态打造的现代化桌面端：无需配置 Node.js 或执行命令即可启动和管理本地 Harness 服务；后续将支持插件市场、移动端远程控制与 IM Channels。[访问官网](https://www.dshdesktop.cn)

## Contributing

Please have a look at [contributing.md](contributing.md). 条目标准：仓库 + 一句话描述 + 链接；精选人工维护，全量索引以 hub 为准。

## 致谢

感谢 [LinuxDO 社区](https://linux.do/) 的支持与交流。
