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
- [致谢](#致谢)

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

## Core & Bundles

- [DeepSeek Harness Ultimate](https://github.com/18126295767-cell/deepseek-harness-ultimate) - 社区维护的可复现 profile 安装器：整合编码、工作流、可靠性与生产力四大类去重默认配置；完整 commit-SHA 锁定、宽松许可证审查、依赖装前/装后检查、可选敏感集成，并为 Windows、macOS 与 Linux 提供 20 种语言的入门指南。
- [dsh-deepresearch](https://github.com/dsh-external/dsh-deepresearch) - deepresearch 插件（cordis）。
- [dsh-plan-execute](https://github.com/dsh-external/dsh-plan-execute) - plan/execute 双模型路由：规划模型思考、执行模型干活
- [dsh-toolkit](https://github.com/dsh-external/dsh-toolkit) - 零依赖工具套件（calculator/csv/diff/encoding/json/markdown/regex/time）
- [dsh-deep-research](https://github.com/dsh-external/dsh-deep-research) - 自适应深度研究编排器（workflow 引擎）
- [dsh-101](https://github.com/dsh-external/dsh-101) - DSH 文档阅读模式
- [dsh-client-ui-plan-execute](https://github.com/dsh-external/dsh-client-ui-plan-execute) - Web 设置页「规划/执行模型」配置行
- [dsh_workflow](https://github.com/dsh-external/dsh_workflow) - Dynamic Workflow for dsh（占位）。
- [dsh-equip-engine](https://github.com/wuykjl/dsh-equip-engine) - 任务驱动插件配装引擎：双路检索（人工精选规则 + LLM 语义）、组合评分（协同/冲突/成本/信任）、冲突检测与安装命令导出。
- [dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) - 四合一迁移向导：把 Claude Code、Codex、OpenCode、Hermes 的会话、记忆、技能、指令与斜杠命令迁入 DSH（审批门 + 幂等，会话可续聊）。
- [dsh-skill-mover](https://github.com/mjylfz/dsh-skill-mover) - 技能一键迁移：扫描 14 个 Agent 平台（Cursor、Claude Code、Codex、Hermes、Trae、Qoder 等）与共享层 ~/.agents，同名技能合并、软链接去重、可安全回滚。
- [gewu-tools](https://github.com/nyantused-cpun/gewu-tools) - 面向纯文本 DSH 主脑的模型无关视觉审阅流水线：HTML 逐页截图 + 视觉子代理简报契约（gewu_prep），再把每条审阅发现定位回源码核验真值（gewu_locate）；已在 mimo-v2.5 与 qwen3.7-plus 上实测。
- [dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) - DSH 插件管理面板与市场：一键启用/停用、多源市场、静态索引（500+ 插件 / 300 技能）、技能安装/停用、套装一键装配、框架一键升级（在线安装 + 失败自动回滚）。
- [dsh-gsd-bundle](https://github.com/jaaty/dsh-gsd-bundle) - 以宿主层 Cordis 插件重实现 Git Ship Done（opengsd-core）：用 spec/discuss/plan/execute/verify/ship 阶段循环替换默认 agent 循环。

## Agents & Orchestration

- [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) - 多智能体团队编排：舰长式会话搭配可持久化的子代理团队，支持角色分配与任务协同执行。
- [dsh-todo-guard](https://github.com/a903067276-rgb/dsh-todo-guard) - 重启后仍可恢复的 Todo 面板：通过 projection 预热恢复显示，并以「已验证 / 已拦截 / 未验证」三态核验完成证据，可在设置中切回官方行为。
- [fakechris/dsh-track](https://github.com/fakechris/dsh-track) - 嵌入式任务管理引擎：决策点协议、念头捕获墙、Linear 形 issue 存储，证据驱动生命周期。
- [dsh-dual-model-eval](https://github.com/huangdaxianer/dsh-dual-model-eval) - 把一个编码需求并发发送给多个已配置模型，在隔离的 Git worktree 中运行并并排展示工具轨迹与结果，再把用户采纳的候选提交为后续轮次基线。
- [dsh-agent-arena](https://github.com/LeemanCheung/dsh-agent-arena) - 在隔离的 Git 工作树中比较编码智能体，并提供确定性验证、评分和显式胜者应用。
- [xiehuan123/coding-coach](https://github.com/xiehuan123/coding-coach) - Coding Coach 编程教练：面向非开发人员的 35 技能 bundle + 完整 Agent 预设（八段「想法→上线」编排流水线，工程/产品/界面技能）。
- [dsh-collaboration](https://github.com/Socialist-Sister/dsh-collaboration) - 多智能体协同套件：用户可配置的专家名册 + 持久专家实例（可多分身）按需雇佣、星型拓扑追问/中转、团队状态面板、模型对比与多模态视觉桥。
- [dsh-plans](https://github.com/Optim-Agent/dsh-plans) - 计划先行 Agent 预设：把仓库变更调研沉淀为 dsh-plans/ 下可追溯的 Markdown 计划，经 reviewer/criticizer 子代理多轮打磨，再作为 DSH goal 按验证清单执行。
- [dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) - 持久化多模型 Agent 小队：在 Settings 管理、Composer 选择；主 Agent 动态规划有界 DAG，可选审查/修复闭环，Run Center 展示 DSH 官方 provider 上报的 Token 用量。
- [DSH Automation Center](https://github.com/usersx/dsh-automation-center) - 面向 Workspace 的定时 Agent 运行中心：每次执行创建全新的 Result Session 并保留持久审计历史；原版 DSH 使用会话标签，存在兼容 Shell Slot 时启用全局页面。
- [Knotline / 运筹](https://github.com/MrMaii/knotline) - DSH 可视化项目地图：用诉求、Agent、Skill、积压池、审批池和定时触发组合并持久化自定义 Agent 工作流。
- [cleverer-dsh](https://github.com/Classicoke/cleverer-dsh) - DSH 执行纪律套件：拦截同参重试、强制反思、约束待办执行、记忆查重，并将重复经验沉淀为技能（11 个插件 + 6 个技能）。
- [february2015/dsh-taskswarm](https://github.com/february2015/dsh-taskswarm) - TaskPlane 的 DSH 移植版：按依赖分波、多 lane 并行执行（git worktree 隔离），任务包 + 跨模型评审 + 崩溃可恢复。
- [hongyue0721/dsh-kimicode-swarm](https://github.com/hongyue0721/dsh-kimicode-swarm) - Kimi Code Swarm 风格的批量并行子 Agent 调度：`swarm_batch` 工具把互不依赖的子任务批量派发给真实子 Agent，两阶段自适应并发（爬坡 + 撞限流指数退避并自动收缩/恢复），聊天内 SSE 实时进度流，并支持 `resume_agent_ids` 断点续做。
- [timwhitez/dsh-self-evolving](https://github.com/timwhitez/dsh-self-evolving) - 证据优先、可崩溃恢复的 DSH 自进化引擎：有界生成 Cordis 插件候选，经一次性真实 Loader 隔离准入，Harbor 评估，并保存可审计的日志化谱系。
- [Saktawdi/dsh-ha-orchestrator](https://github.com/Saktawdi/dsh-ha-orchestrator) - 模型高可用故障回退（隔离/熔断/探测恢复）与子智能体编排（fanout/pipeline/supervisor），附带双语设置界面。
- [dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) - 官方子代理接缝上的持久化后台子代理：任意会话中启动，Web 侧边栏看进度、随时留言与打断，支持按子代理限定工具、人格与委托深度。
- [zoahdev/dsh-kirocrew](https://github.com/zoahdev/dsh-kirocrew) - 通过 ACP（基于 stdio 的 JSON-RPC 2.0）把 DSH 智能体桥接到一个持久、自进化的 KiroCrew 开发工作空间，仅暴露一个 `kiro_send` 工具。
- [bpc-oss/dsh-routed-subagent](https://github.com/bpc-oss/dsh-routed-subagent) - 从任意会话在任意 Agent 预设上完整挂载并运行一次性子代理：支持按调用覆盖模型/提供商、模型预检与外部 CLI 引擎（Codex / Claude / CodeBuddy），并提供后台任务、实时进度、终止和可续接会话。
- [bpc-oss/dsh-fork-to-preset](https://github.com/bpc-oss/dsh-fork-to-preset) - 在对话页头将任意会话分叉到另一 Agent 预设：通过预设选择器创建挂载到所选预设的新子会话，并继承源会话已完成的轮次。
- [qwert702/dsh-commander](https://github.com/qwert702/dsh-commander) — DSH 网页端指挥官模式插件：会话标题栏一键注入协议简报，解析模型回复中的任务块并自动执行，让策略层与执行层分离；通过徽章按钮激活/停用。

- [dsh-product-subagent-console](https://github.com/Jokasa7/dsh-product-subagent-console) - 面向 DSH 对话的多 Agent 工作台：支持可编辑任务方案、真实子会话观测、计划与实际运行对照，以及基于证据的恢复预览；已使用 DSH 0.1.1-rc.2 测试。

- [weibaohui/dsh-continue](https://github.com/weibaohui/dsh-continue) - 自动续跑：agent 会话中断后自动续上，规则表按失败类型（限流/额度/鉴权/上下文超限/崩溃孤儿）路由到退避重试、换模型、压缩上下文后继续或止损通知，规则可视化编辑，全程活动日志。

## Context & Search

- [zoahdev/dsh-github-intelligence](https://github.com/zoahdev/dsh-github-intelligence) - 只读开发者情报工具：16 大生态（GitHub、GitLab、Gitee、npm、PyPI、crates.io、Docker Hub、Hugging Face、Hacker News、Stack Overflow、Reddit、dev.to、RubyGems、NuGet、Go、ArXiv）统一查询，带 TTL 缓存，无需 API Key。
- [dsh-hacker-news](https://github.com/heartleo/hn-cli/tree/main/plugins/hacker-news) - DeepSeek Harness 的 Hacker News 工具：实时榜单、帖子评论树、Algolia 搜索和用户资料。
- [dsh-minimal-first-turn](https://github.com/ZRui-C/dsh-minimal-first-turn) - Web 根会话的首轮精简：将 prompt 和工具目录限制为持久 bash 与 str_replace_editor；首次工具调用或回复后恢复所选预设，带持久 composer 开关。
- [xiehuan123/dsh-deepread](https://github.com/xiehuan123/dsh-deepread) - DeepRead 精读助手：五种模式（快速/深度/知识地图/费曼读书法/全书），支持批量对比、预算预检与后台任务进度透明，输入支持微信公众号链接、本地 PDF（纯 JS 提取器）与粘贴文本，可选导出 MD / FreeMind / HTML。
- [dsh-context](https://github.com/bowenliang123/dsh-context) - 上下文洞察面板：一眼看清模型上下文窗口的组成与变化——构成对照窗口大小、按请求历史趋势、压缩/注入事件、消息级 token 统计。
- [dsh-bookmarks](https://github.com/penguin-oo/dsh-bookmarks) - 收藏已定稿的 AI 回复（备注/标签），跨会话收藏中心支持搜索、标签筛选、跳回会话与一键导出 Markdown（Alt+B 开关面板）。
- [billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) - DSH 的模型驱动上下文压缩（ACP），移植自 billion-context-pi；由模型决定何时压缩及压缩内容。
- [qwert702/dsh-context-compressor](https://github.com/qwert702/dsh-context-compressor) — 面向小模型的上下文压缩插件：将工具输出和对话历史压缩为几句话，为实际任务腾出上下文空间；自动在新生成的会话中继续工作。
- [dsh-scope](https://github.com/helloxkk/dsh-scope) - 上下文透镜：按会话查看 KV 缓存命中率与 token 构成，附 GitHub 风格的每日用量热力图（tokens、会话数、缓存效率）。
- [dsh-compressor](https://github.com/lifeodyssey/dsh-compressor) - Headroom 的精简移植，在不影响模型上下文缓存以及 Agent 性能的情况下，压缩工具的输出，至多减少 20% 的上下文。
- [context-vista](https://github.com/GooodWei/context-vista) - 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配及消费估算
- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) - 看清模型每个请求到底背着多少上下文：指令链/技能目录/工具 schema 的 token 成本逐项量化，自动检测重复与冲突，给出可执行裁剪建议（Web 圆环面板 + context_audit 工具，全程只读）。
- [dsh-mcp-lens](https://github.com/labmimors/dsh-mcp-lens) - 渐进披露 MCP 网关：通过两个稳定入口检索大型远程工具目录，再用精确 schema 调用选中工具，并采用惰性连接与有界缓存。
- [dsh-cot-summary](https://github.com/dsh-external/dsh-cot-summary) - 外置 Summary-CoT 插件工作区。
- [qwert702/dsh-token-viewer](https://github.com/qwert702/dsh-token-viewer) — CC Switch 风格的 DSH Token 消耗统计插件：按请求记录逐条统计、真实消耗英雄卡（含缓存命中率）、按请求时间分桶趋势图、从官网实时拉取并显示按模型的峰谷定价列表、按项目和模型汇总统计，以及账户余额。
- [dsh-explain](https://github.com/dsh-external/dsh-explain) - 学习模式插件，解释 agent 的每一步（WIP）。
- [dsh-file-mount](https://github.com/acefun29/dsh-file-mount) - 文件增量挂载与重复读取去重：已挂载行范围不重复进上下文，磁盘变化自动失效重挂，附「挂载文件」标签页与 token 节省统计。
- [dsh-session-search](https://github.com/dsh-external/dsh-session-search) - 跨 dsh/Codex/Claude Code/pi/OpenCode 会话只读搜索，无索引
- [cross-harness-cite](https://github.com/dsh-external/cross-harness-cite) - 跨 harness 引用历史对话
- [task-passport](https://github.com/dongsheng123132/task-passport) - 通过机器可读检查点与乐观锁，在 DeepSeek Harness、WorkBuddy、Claude Code 和 Codex 之间交接持久任务状态。
- [dsh-easy-ctx-manager](https://github.com/dsh-external/dsh-easy-ctx-manager) - 上下文管理：上下文节省等（cordis）
- [dsh-web-search-exa](https://github.com/TonyDua/dsh-web-search-exa) - 零配置 Exa 网页搜索提供方：无 key 走匿名 MCP 兜底（mcp.exa.ai/mcp），配 key 自动切 REST，接入 ctx.web 接缝。
- [dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) - DSH 增强型、可持久化的网页搜索：多引擎路由（DeepSeek/Exa/DDG/Bing/Jina + GitHub/B站/YouTube/V2EX/小红书/Twitter/Reddit/RSS）、SQLite+LRU 缓存、userscript 风格抽取、Playwright 渲染。
- [dsh-free-web-search](https://github.com/delef/dsh-free-web-search) - 免费网页搜索：支持 10 个引擎（Bing/DuckDuckGo/SearXNG/AnySearch 免费，Exa/Tavily/Keenable/Perplexity/DeepSeek 付费）、自动回退链、按时间筛选的高级搜索、GitHub/Reddit 平台搜索、网页抓取、LRU 缓存与设置界面；基础使用无需 API Key。
- [moguiyu/dsh-tavily](https://github.com/moguiyu/dsh-tavily) - Tavily 多密钥搜索：支持密钥轮换/故障转移、用量仪表盘与设置卡片。
- [dsh-session-sync](https://github.com/PerryLink/dsh-session-sync) - 跨设备会话同步：专用 git 镜像与仅追加的双方保留冲突裁决，附 /sync 命令与 sync_status/sync_pull/sync_push 工具。
- [JohnXu22786/context-pruner](https://github.com/JohnXu22786/context-pruner) - 会话上下文整理插件：修剪过期、重复、失败与过大的上下文以节省 token 预算。
- [Kaixxrua/dsh-aigc-radar](https://github.com/Kaixxrua/dsh-aigc-radar) - 检索 AIGC Radar 精选 GitHub AI 项目库（500 Stars 准入、中英双语标签、星标增长快照），经其 MCP 端点调用并以原生结果卡片展示；pre-step 监听器在写代码前主动建议复用检查。
- [dsh-context-budget](https://github.com/d3vmeh/dsh-context-budget) - 让本地模型的上下文保持在 GPU 能高效处理的规模：每次请求测量 prefill 速度，在每一步之前按硬性 token 上限、实测首 token 时间预算或预测的冷 prefill 预算发出警告或提前压缩；/context-budget 显示实时数据和立即压缩的代价。
- [dsh-personal-directive](https://github.com/PerryLink/dsh-personal-directive) - 个人指令插件：系统提示词注入、工具与顶部运行时开关，内置可替换的中性占位指令。

## Memory & Knowledge

- [zilliztech/memsearch](https://github.com/zilliztech/memsearch/tree/main/plugins/dsh) - 供 DSH 与其他编程 Agent 共享的 Markdown 记忆，支持自动捕获、步骤前上下文注入、搜索召回与审阅面板。

- [dsh-simple-memory](https://github.com/a903067276-rgb/dsh-simple-memory) - DSH 侧车式 Markdown 记忆：按会话注入索引、一键记忆流按钮、强制「分类-主题.md」命名与跨项目搜索。
- [dsh-hme](https://github.com/weopenfire-git/hme-plugin) - 跨会话长期记忆：有界核心（全局 USER.md + 按工作区 MEMORY.md，φ 斐波那契上限）+ 标签索引、自我收敛的档案层（archive/recall/move 三工具）。
- [dsh-memory-vault](https://github.com/flymysql/dsh-memory) - 跨会话记忆库：memory_remember / memory_recall / memory_forget 三工具，最新条目自动注入系统提示词，设置页（记忆库 / Memory）管理。
- [dsh-memoria](https://github.com/jiayan-xu/dsh-memoria) - Memoria 记忆后端：为 dsh agent 提供 observe/remember/search/recall 四个工具，支持向量+图记忆、命名空间隔离、自动写入与配置热重载。
- [dsh-memory-evolve](https://github.com/dsh-external/dsh-memory-evolve) - 跨会话长期记忆 + 后台自我进化（五轨记忆/Git 分支感知/技能进化）
- [qwert702/dsh-memory](https://github.com/qwert702/dsh-memory) — DSH 网页端项目级+全局长期记忆插件：分拆 POST /items 路由避免路径冲突，多轮工具调用上下文压缩后存入记忆项，去重与会话级持久化。
- [dsh-memory-gate](https://github.com/GIT121995/dsh-memory-gate) - 有界本地长期记忆：CBDC（Claim→Belief→Decision→Consumption）权威门控 + SQLite/FTS5，检索到≠注入，use/verify/ignore 可解释决策与完整审计，/memory 命令管理，每次最多注入 3 条 1200 字符，不增加模型调用。
- [dsh-engram-relay](https://github.com/dsh-external/dsh-engram-relay) - 内置 <1B 模型实现 100k 等效长记忆，因果图精准唤醒
- [dsh-mneme](https://github.com/modusensus/dsh-mneme) - DeepSeek Harness 跨会话记忆引擎：SQLite 存储 + 可人工编辑的 Markdown 镜像，autoDream 自我修正巩固、失败追踪、离线语义搜索（本地向量/精排/聚类）、实体-属性-时间轴、Sleep Mode、自定义模型 autoSummarize——473 测试。
- [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) - Mnemon 驱动的本地记忆系统：三层记忆（运行时热记忆/项目档案 Documents/长期记忆体 Memory Spaces），受监督写回、检索工具与 Web UI
- [url-manager](https://github.com/Piccolo123/url-manager) - Agent 先行链接收藏与知识管理：从任意平台保存链接，自动分类/打标签，全文搜索，共享分类，并以魔法链接卡片交付结果。零配置——Agent 首次使用自动注册。
- [qwert702/dsh-auto-translate](https://github.com/qwert702/dsh-auto-translate) — 英文回复自动翻译插件：在原文下方内联显示中文翻译，工具调用附一行中文注释；翻译通过独立请求完成，不进入会话上下文。
- [url-manager-mcp](https://github.com/Piccolo123/url-manager-mcp) - url-manager 的 MCP 服务端：21 个工具（mcp__url_manager__*），支持收藏/搜索/分类/共享与魔法链接交付，支持 stdio 与 streamable-http。
- [dsh-kb-sieve](https://github.com/dsh-external/dsh-kb-sieve) - knowledge-base 插件：构建可审计 KB 包（references + SQL）
- [kb-rag](https://github.com/Breeze136/kb-rag) - 本地文献知识库 RAG：8 个工具（PDF/文件夹/Zotero 入库、BM25+向量+重排混合检索、DOI 可点击溯源问答、范围/严格模式、去重/清空/统计），全本地 bge 嵌入 + 单文件 SQLite，实测 242 篇 86s 入库、2 万块亚秒热查询。
- [geometry-knowledge](https://github.com/sdoygb/geometry-knowledge) - 几何论（共扼谱几何 CSG）知识库插件：纯离线 BM25 检索 208 篇文章全文 + 3833 分块 + 871 条主库真理层，提供 geo_list / geo_search / geo_read / geo_calc / geo_truth 五工具（含 LaTeX→Unicode 转换、真理→文章引用链、单字查询），零运行时依赖，`dsh plugin add geometry-knowledge` 一键安装。
- [dsh-memento](https://github.com/PerryLink/dsh-memento) - 有界、分层、带审批门、可审计的跨会话记忆：ctx.memory 服务、零依赖 SQLite、memory 工具与冻结快照注入，并预演 dsh-memory-protocol v1（适配器注册表 + 一致性套件）。
- [dsh-engramory](https://github.com/tinqiao-oss/engramory/tree/master/adapters/dsh) - 基于文件的策展式记忆：带行数/字节上限的 `MEMORY.md` 索引 + 每条事实单独一个 markdown 文件，由 git 版本化、不借助工具即可阅读。上限由 `ctx.tools.guard()` 强制执行而非靠提示词约束，协议注册为运行时 skill；同一份记忆库也被 Claude Code、Codex、Kiro 与 OpenClaw 读取。
- [plur-ai/dsh-plugin](https://github.com/plur-ai/dsh-plugin) - PLUR 持久记忆：engram 在每次组装时渲染进系统提示词，而不是藏在工具调用之后，因此召回无需额外往返，记忆块也不会在上下文中累积；全本地检索（BM25 + BGE）、可直接编辑的纯 YAML 存储、按工作区划分 scope，并提供 /plur-memory 查看器。
- [dsh-memory-plugin](https://github.com/volcengine/OpenViking/tree/main/examples/dsh-memory-plugin) - DeepSeek Harness 的 OpenViking 记忆/上下文插件：接入 OpenViking 的自进化上下文数据库，为 dsh 提供跨会话 Agent 记忆与知识 RAG。
- [dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) - 持续自进化插件：从会话轨迹提炼提示词笔记、记忆、技能与子代理规范，并以版本化、可审计、可回滚的方式维护 Harness 状态。
- [ccch713/deepddw](https://github.com/ccch713/deepddw) - DSH 的记忆 + 知识库 + 文档检索——支持局域网内所有设备（电脑/手机/平板），不限本机。
- [dsh-mnemon](https://github.com/dsh-external/dsh-mnemon) - 助记层
- [zoahdev/dsh-zh](https://github.com/zoahdev/dsh-zh) - 中文思维 system-prompt 片段：让 agent 用简体中文回答，代码/命令保持原文。
- [memory-mcp-server](https://github.com/BingoAgentTouch/Personal_MCP) - 分层长期记忆 MCP 服务器：原始轮次 → 任务片段 → 每日总结 → 主题索引；本地 MiniLM 384 维嵌入或 OpenAI 兼容 API 后端，语义 + Jaccard 兜底检索，支持 dsh plugin add 一键安装。
- [dsh-memory-porter](https://github.com/Shiye-10Pages/dsh-memory-porter) - 跨厂商记忆迁移：Claude 导出里的 `memories.json` 零 token 入库、本机 Claude Code 记录免导出直读、历史对话用宿主已配的模型提纯；每条记忆都带由代码回原文核对的逐字证据。
- [dsh-simple-wiki-memory](https://github.com/rainow/dsh-simple-wiki-memory) - 超级简化版 llm-wiki 记忆插件：一个索引文档（自动加载）+ 每个主题一个 md 文件（需要时才读）——不会把所有东西塞进上下文烧 token。简单轻量，安装卸载无压力，想怎么改就怎么改。
- [dsh-library](https://github.com/PerryLink/dsh-library) - DeepSeek Harness 本地优先文档知识库：library_add/remove/list、语义+关键词混合 library_search（多样性重排、相关性过滤、避免 lost-in-the-middle）、引用感知注入与 library_cite_check/diagnose；SQLite 索引走 storage 域，本地嵌入，零模型下载。
- [JohnXu22786/docs-retriever](https://github.com/JohnXu22786/docs-retriever) - doctrove：版本化库文档检索 MCP 服务器，零运行时依赖，可作为 dsh 插件 bundle 安装。
- [dsh-ragflow](https://github.com/staff-os/dsh-ragflow) - RAGFlow 知识库检索插件：为 agent 提供 `ragflow_retrieve` 工具，查询 RAGFlow 数据集并返回带相似度分数和来源名的文档块；三角色设计（seam/provider/consumer），环境变量配置，`dsh plugin add github:staff-os/dsh-ragflow#main`。
- [Mutx163/dsh-model-memory](https://github.com/Mutx163/dsh-model-memory) - 自定义 API 模型的思考强度档位管理与跨会话偏好记忆：在“设置 → 模型”内直接切换 low/medium/high/max，原子写入 settings.yaml，并在新会话按渠道自动恢复上次使用的模型与强度。
- [dsh-cortexm](https://github.com/ssmurfgg04-gif/context-m/tree/main/plugins/dsh-cortexm) - 双时态记忆插件：每条事实带事务有效期区间，VSA/HRR 全息检索、BLAKE3 链式审计日志、会话回放与分叉；以 JSON-RPC 子进程方式驱动 Context-M（npm：dsh-cortexm，需另装 Python 包 `cortexm`）。
- [dsh-brainagent](https://github.com/stas130286-blip/dsh-brainagent) - 受大脑启发的认知插件：情景 / 语义 / 程序 / 情绪四类记忆库，配 reward-ledger 与 UCB1 老虎机学习回路、带时间触发器的目标栈、好奇心驱动的自主网络研究与主动提议。召回的记忆会随 prompt 发往你配置的模型 provider；许可证为源码可见、禁止商用。
- [weibaohui/hermes-loop](https://github.com/weibaohui/hermes-loop) - 自动复盘：对话收尾后自动把有价值的经验蒸馏成可复用技能存入技能库，支持信号加速触发、审批模式与技能库治理（归档/恢复，永不直接删除）。

## Input & Editing

- [dsh-global-rules](https://github.com/Semidia/dsh-global-rules) - 在设置页编辑 `~/.dsh/AGENTS.md` 全局规则：提供文本编辑与保存，无需命令行。
- [dsh-keyboard-history](https://github.com/NormanFxxkingRockwell/dsh-keyboard-history) - DSH 会话输入框的极简输入历史：按 ↑/↓ 翻阅发过的消息，仅此而已。
- [liustack/modlens](https://github.com/liustack/modlens) - 给纯文本模型补视觉：粘贴图片即可识别、多图问答、屏幕截图与视觉任务，一行命令安装。
- [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) - DSH 进阶视觉工具箱：OCR、目标定位（grounding）、多图问答、截图分析与 UI 还原，输出结构化 JSON。
- [Zhangbo-cn/dsh-voice-input-plugin](https://github.com/Zhangbo-cn/dsh-voice-input-plugin) - 输入框麦克风：点击持续监控、按住对话；浏览器语音识别逐字上屏，回复由 host Edge TTS 边生成边朗读（句子切分），朗读时暂停识别防回声，点击可停止。

- [dsh-better-sidebar-plugin-office](https://github.com/dsh-external/dsh-better-sidebar-plugin-office) - better-sidebar 的 Office 集成。
- [dsh-message-edit](https://github.com/dsh-external/dsh-message-edit) - 分支式消息编辑 / reroll / retry / 版本时间线
- [SpookySandwich/dsh-plugin-message-edit](https://github.com/SpookySandwich/dsh-plugin-message-edit) - 编辑已发送的消息即可从该轮次回溯并分叉对话；气泡下方提供版本计数器，「版本」标签页以轮次级树展示整个版本家族，控件布局可选 ChatGPT / DeepSeek / Claude。
- [dsh-prompt-studio](https://github.com/dsh-external/dsh-prompt-studio) - 系统提示词分段编辑 + 实时预览
- [dsh-paste-input](https://github.com/dsh-external/dsh-paste-input) - Ctrl+V 粘贴文件 / 拖拽 / 选择
- [dsh-reference-anything](https://github.com/Chael-Chael/dsh-reference-anything) - 扩展 DSH 原生 `@` 菜单，提供五类可配置来源：命令、Skills、工作区文件、DSH 会话，以及 ChatGPT/Claude/Gemini/DeepSeek/Grok/Kimi 对话；外部正文与附件按需读取，并按任务授权。
- [dsh-voice](https://github.com/motongv/dsh-voice) - 语音输入（语音转文字）+ 回答朗读（Edge 神经网络音色）
- [dsh-drag-and-drop](https://github.com/dsh-external/dsh-drag-and-drop) - 跨平台拖拽插入原始路径
- [dsh-file-uploads](https://github.com/l541402398/dsh-file-uploads) - 从 Web 输入框上传任意本地文件，以待发送卡片展示，并在设置中管理已存文件。
- [dsh-postman](https://github.com/zhousun55-byte/dsh-postman) - 输入框内上传文件与文件夹：图片以真实图片块加入消息，文本写入草稿，文件夹按目录结构落盘。
- [dsh-input-history](https://github.com/dsh-external/dsh-input-history) - 输入历史
- [dsh-multimedia-webui-input](https://github.com/dsh-external/dsh-multimedia-webui-input) - 多媒体文件/文件夹输入
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) - 全保真导入 13 款编码 Agent 的历史会话（Claude Code / Codex / ChatGPT / Cursor / Gemini / Reasonix / opencode / ZCode / Grok Build / OpenClaw / Pi / Hermes / Kimi），导入后可在 DSH 续聊，并支持反向导出/同步回 Claude Code
- [dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) - 同一工作区并行多会话的文件认领与写入保护（claim/release、心跳 stale 接管、pending 三路合并）
- [dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) - 输入框工具栏快速便签：点子/感想/TODO，Markdown 预览、自动保存、一键发送到对话。
- [dsh-plugin-quote-reply](https://github.com/yangYzc/dsh-plugin-quote-reply) - 在会话中划选文字，一键「引用回复」插入输入框，或「新窗口回复」开新会话并预填引用。
- [dsh-pathlink](https://github.com/penguin-oo/dsh-pathlink) - 在对话中 Ctrl+点击文件路径与链接：路径在文件管理器中定位所在文件夹，链接在新标签页打开。
- [@picgo/dsh-plugin](https://github.com/PicGo/dsh-plugin) - PicGo 官方插件：把本地文件传到图床拿到公网链接，复用你已在 PicGo 配好的图床与上传器插件。
- [dsh-suggested-replies](https://github.com/dsh-external/dsh-suggested-replies) - DSH Web 输入框上方的预测回复插件。
- [dsh-wordbox](https://github.com/arcmosin/dsh-wordbox) - 输入框旁的常驻常用词/句面板，支持全局/当前项目双桶与一键插入。
- [dsh-voice-webspeech](https://github.com/anweat/dsh-voice-webspeech) - DSH 浏览器 Web Speech API 语音输入：零服务端、零密钥、零模型下载（Edge=Azure 语音、Chrome=Google 语音）。
- [dsh-dictate](https://github.com/franksong2702/dsh-dictate) - Composer 浏览器 Web Speech 听写，识别无需专用 ASR 服务、密钥或模型下载；复用 Session 文本和已配置的 DSH 模型提供上下文词汇提示与可选转写润色。
- [dsh-talk](https://github.com/PerryLink/dsh-talk) - 语音优先会话闭环：作曲器麦克风按钮 + 浏览器/本地语音转写（Web Speech、FunASR、whisper.cpp），speak 工具朗读回复（browser、edge-tts、piper），事件播报带静音开关，说话打断。
- [dsh-plugin-anydoc](https://github.com/beancookie/dsh-plugin-anydoc) - 该插件封装了一个可复用的函数，通过 @firecrawl/anydoc 提取文件内容（支持文件路径或 Buffer 输入），并返回 GitHub‑Flavored Markdown（GFM）。同时提供可选的配置项（如输出目录、是否覆盖已有文件）。
- [dsh-attachment-upload](https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-attachment-upload) - 输入框「📎 附件」按钮：上传文件到当前工作区 .dsh-attachments 并把路径插入草稿。
- [dsh-steer-button](https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-steer-button) - 输入框常驻「插话」按钮：一键把草稿注入运行中的轮次（等同 Ctrl/Cmd+Enter）。
- [dsh-prompt-optimize](https://github.com/peterliucius/dsh-prompt-optimize) - 通过辅助 LLM 调用改写当前输入框草稿，只替换草稿、不发送消息。
- [Boliban/dsh-enter-customizer](https://github.com/Boliban/dsh-enter-customizer) - 接管聊天输入框的回车等快捷键，每个快捷键的行为都能单独配置。
- [PerryLink/dsh-composer-history](https://github.com/PerryLink/dsh-composer-history) - 为 Web 作曲器提供终端风格输入历史（边缘优先方向键、草稿/光标还原、Ctrl+R 搜索、滑动上下文感知），另加智能输入层：跨会话片段、带变量的提示模板、复用洞察与压缩摘要高亮。
- [dsh-file-upload](https://github.com/a903067276-rgb/dsh-file-upload) - 一键上传 + 拖拽文件进对话：保存到项目 uploads/、路径文本进输入框，可配合任意视觉工具。
- [JohnXu22786/snippet-expander](https://github.com/JohnXu22786/snippet-expander) - Steno：发送前的行内 #tag 快捷展开——多库、别名、{{变量}}、递归防护。
- [opencues/opencues](https://github.com/opencues/opencues/tree/master/integrations/dsh) - 输入框内的同义词提示与下划线补全：行尾输入 `_` 即自动填充，拼写错误随打随标。走 `ctx.llm`，无需自备 API key。

## UI, Themes & Interaction

- [fengb3/dsh-theme-macintosh](https://github.com/fengb3/dsh-theme-macintosh) - 经典麦金塔 System 7 像素风主题：桌面网点画布、Finder 侧栏、黑白按钮与弹窗，深浅色随官方外观切换。
- [dsh-view-manager](https://github.com/runcat-tommy/dsh-view-manager) - 管理 DeepSeek Harness Web GUI 会话页头的视图标签（对话/轨迹）：启停、隐藏、排序与重命名，支持中英文跟随界面语言，并带 npm 更新提醒。
- [dsh-history-question-nav](https://github.com/TropicWiden/dsh-history-question-nav) - 右侧问题面板列出当前会话的用户提问，点击即可定位对应回答。
- [dsh-chat-timeline-plus](https://github.com/NIU-001-LIU/dsh-chat-timeline-plus) - 消息时间线导航轨：悬停即弹出问答预览卡（问题 + 回答摘要），支持面板钉住常驻、按天分组与重点书签。
- [dsh-scenery-background](https://github.com/soslowsnail/dsh-scenery-background) - 山海主题 Web UI 背景轮换插件：支持每日一图与循环轮播，内置 5 张离线 SVG 场景、可选 Unsplash 摄影图、毛玻璃面板和悬浮控制。
- [dsh-zh-commands](https://github.com/Semidia/dsh-zh-commands) - 中文斜杠命令增强：新增 /help /status /time /cwd /whoami /preset，并本地化斜杠菜单中的内置命令说明。
- [dsh-skin-studio](https://github.com/LeemanCheung/dsh-skin-studio) - 本地语义令牌主题编辑器，支持色板提取、WCAG 审计、预览和导出。
- [deepseek-harness-zh-tw](https://github.com/chiyulogg-commits/deepseek-harness-zh-tw) - DeepSeek Harness 繁体中文（台湾用语）语系扩展版：新增繁体中文界面选项，25 个 Web UI 套件全量台湾用语中文化。
- [dsh-spotlight](https://github.com/0xsline/dsh-spotlight) - DeepSeek Harness Web 的键盘优先命令面板。
- [dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) - 将滑出屏幕的 Think/工具/命令标签钉在 DSH Web 会话顶部，并支持一键收起所有展开区块与自定义快捷键。
- [dsh-better-model-selector](https://github.com/Khellendros97/dsh-better-model-selector) - 将输入框模型选择器拆成「可搜索 + 收藏」的下拉选单和「推理强度滑动条」两个独立控件，支持 Ctrl+P / Ctrl+T 快速切换。
- [dsh-catppuccin](https://github.com/zhijun-dai/Catppuccin-dsh-theme) - Catppuccin 主题插件：为 DSH Web 主题运行时提供 Latte / Frappé / Macchiato / Mocha 四套皮肤。
- [dsh-appearance](https://github.com/Semidia/dsh-appearance) - 统一外观协调插件：主题配色预设、界面字体、界面字号，以及按工作区设置的正文字号 / 行高 / 背景；协调层保证界面缩放不会连带放大聊天正文。
- [solarized-dsh-theme](https://github.com/zhijun-dai/Solarized-dsh-theme) - Solarized + Selenized 主题插件：向 DSH Web 主题运行时注册四套忠实色板。
- [arcana](https://github.com/GooodWei/arcana) - DeepSeek Harness 的悬浮命令甲板：把所有斜杠命令列成可执行按钮，悬停看介绍，按使用次数排序。
- [dsh-aigc-canvas](https://github.com/dsh-external/dsh-aigc-canvas) - AIGC 画布插件（cordis）。
- [pbr-render](https://github.com/dhb861832993-star/pbr-render) - 游戏美术 PBR 3D 模型预览：GLB/GLTF 带贴图纹理、环境光照、轨道控制，以及材质通道检查器（基础色/法线/粗糙度/金属度/AO/自发光/线框），通过 pbr3d 围栏与 pbr_render 工具使用。
- [dsh-deepcel](https://github.com/dsh-external/dsh-deepcel) - Deepcel 电子表格皮肤与独立分发仓库。
- [dsh-diff-viewer](https://github.com/dsh-external/dsh-diff-viewer) - PiUI 风格 Web diff 查看器，替换默认 diff 视图。
- [dsh-mobile](https://github.com/dsh-external/dsh-mobile) - 手机端插件（cordis + dsh.plugin.json）。
- [dsh-openpencil](https://github.com/dsh-external/dsh-openpencil) - OpenPencil 设计预览与编辑插件。
- [dsh-design-studio](https://github.com/Sal7one/DSH-Design-Studio) - Design Studio 标签页：将设计简报转化为 html/css/js 原型，实时预览、元素选取、设计代理对话与视觉审查、身份预设、zip 导出。
- [dsh-ultra-ui](https://github.com/dsh-external/dsh-ultra-ui) - ultra-ui 插件（cordis）。
- [dsh-view-modes](https://github.com/NigelYao/dsh-view-modes) - DSH Web 输出模式插件：提供详尽、普通和摘要视图，按语义分组工具调用与思考，并显示实时执行状态。
- [dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) - 创意工坊式 DSH 插件浏览器：搜索、热度/最新/近 7-90 天飙升榜、中文关键词映射、描述与 README 机翻、插件特征过滤、一键安装/更新/卸载，内置已安装插件管理。
- [dsh-web-review](https://github.com/CanglongCl/dsh-web-review) - 隔离网页预览，通过元素批注和可视化调整指导源码修改
- [dsh-markdown-preview](https://github.com/GitHubJiKe/dsh-markdown-preview) - 产物文件聊天内预览：点击产物 chip 在对话中渲染 Markdown（markdown-it + highlight.js）、图片或纯文本，系统应用打开仍一键可达
- [dsh-i18n](https://github.com/Semidia/dsh-i18n) - 工具结果中文化：拦截工具执行输出，将英文标记（[exit code]、[timed out]、[sandbox: ...] 等）翻译为中文，并提供设置开关。
- [dsh-settings-tuner](https://github.com/Semidia/dsh-settings-tuner) - 系统参数调整界面：分组设置页（超时、并行度、LLM 重试策略、模型参数、Web 搜索、权限与预设）；基于逐行 YAML 匹配的安全 profile 配置编辑，写后校验。
- [dsh-workspace-menu](https://github.com/0imzero/dsh-workspace-menu) - DSH 主页工作区/会话增强菜单：置顶、重命名、资源管理器打开、归档、分叉、复制、新窗口打开。
- [dsh-mobileweb-adapter](https://github.com/dsh-external/dsh-mobileweb-adapter) - 手机浏览器/PWA 移动版式 + 局域网 WebSocket 修复
- [dsh-split-panes](https://github.com/dsh-external/dsh-split-panes) - 分栏
- [dsh-skins](https://github.com/dsh-external/dsh-skins) - Web UI 皮肤
- [dsh-skin](https://github.com/KinGao294/dsh-skin) - Codex 风格换肤 + 自定义背景插件：内置多套 --dsw-alias-* 配色，支持透明度/模糊调节的半透明壁纸层。
- [dsh-chat-thumb](https://github.com/dsh-external/dsh-chat-thumb) - Chat 缩略图（cordis）
- [show-bash-command](https://github.com/dsh-external/show-bash-command) - 显示命令具体内容而非描述
- [turtle-ui](https://github.com/dsh-external/turtle-ui) - 官方 UI 插件参考实现
- [@zhaoolee/dsh-notes](https://github.com/zhaoolee/notes) - 将 DSH 对话导出为锤子便签风格 PNG，或在配置的账号工作区中新建和更新 Markdown 便签。
- [dsh-plugin-description](https://github.com/MysaDC/dsh-plugin-description) - 为 Web 设置插件列表页的每张插件卡片补上中英文功能说明，并提供 `pluginDescriptions` 服务供其他插件注册自己的说明。
- [dsh-plugin-list-plus](https://github.com/yibiner/dsh-plugin-list-plus) - Web 设置的插件列表增强：信任分级、可折叠分组与全面的插件详情。
- [dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) - DSH Web 官方内置插件的人类可读目录，提供状态解释与经过审核的安全 UI 开关。
- [dsh-plan-switch](https://github.com/a903067276-rgb/dsh-plan-switch) - 输入框一键进/出 Plan 模式（/plan 的快捷点击），常驻小按钮。
- [dsh-file-mentions](https://github.com/a903067276-rgb/dsh-file-mentions) - 回复中的可点击文件路径：Codex 风格内联打开、📂 文件管理器显示、回合末尾的文件提及 chip 列表。
- [dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) - Web UI 配色方案插件：在设置里一键切换并持久化主题，内置 8 款开源预设，支持自定义主题。
- [dsh-plugin-setting-mcp](https://github.com/Ceelog/dsh-plugins/tree/main/src/plugins/dsh-plugin-setting-mcp) - 在 Web 设置面板中添加、编辑、删除、启用或停用 MCP 服务器，保存后热重载。
- [dsh-theme-plugin](https://github.com/BeiZi6/dsh-theme-plugin) - DSH Web GUI 主题工作室：5 套内置预设 + 完全可自定义的浅/深配色（强调色、背景、前景、UI 与代码字体、半透明侧栏、对比度），即时热切换并持久化到 localStorage。
- [dsh-plugin-smooth-stream](https://github.com/SpookySandwich/dsh-plugin-smooth-stream) - 给 DeepSeek Harness 加入更好的流式文字动画。
- [dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream) - 丝滑流式渲染：字跟着模型到达走、换行滑入、不闪，滚动归用户，尊重 prefers-reduced-motion。
- [dsh-whale-switch](https://github.com/bowen507/dsh-whale-switch) - 最小开关闭环：桌面快捷方式启动 dsh web + 右上角鲸鱼动画退出按钮（悬停升起、点击俯冲入水后优雅退出并关页）。
- [dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) - 给 dsh web 铺上 DeepSeek Harness 首页同款背景：WebGL 流体光效、点线网格与数字鲸鱼，深浅双主题。
- [Open Sea Skin](https://github.com/d-dev0101/open-sea-skin) - 实时 WebGPU 海洋背景，左下角可调波浪、日光、玻璃不透明度与自动昼夜循环；已在 DSH Web 0.1.0-rc.6 实测。
- [dsh-plugin-help](https://github.com/Semidia/dsh-plugin-help) - 已安装插件操作说明汇总面板：右下角悬浮 📖 按钮，中文标题优先、默认全部展开 README、蓝色圆形序号徽标、每个插件一键更新（`dsh plugin update`，环回端点）。
- [dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) - 官方 MCP 客户端（dsh-mcp-client）的管理控制台：/mcp 命令与设置页 MCP 页签提供服务器增删改（审批门 + 自动备份的 profile 写入）、走官方工具管线的工具试用台、健康诊断与连接状态。
- [dsh-premium-themes](https://github.com/xiaoyanzi191/dsh-premium-themes) - 8 套精选配色方案与自定义调色板导入（名称+方案+种子色推导完整 token 映射），设置页「调色板」行，热插拔安装。
- [dsh-session-pin](https://github.com/PerryLink/dsh-session-pin) - 把会话与工作区置顶到侧边栏顶部（每 pin 换色），另加导航组织器：boards、标签与保存视图、健康摘要与 /goto。
- [RevolutionLA/dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) - DSH Web 一键换肤插件：8 套原创主题、背景壁纸（透明度/模糊/渐变/URL）、每用户强调色、主题包导入导出/分享链接、收藏与随机，纯原生 token 系统。
- [dsh-workspace-sort](https://github.com/Moonshile/moonshile-dsh-plugins) - 侧边栏工作区每日按最近活动排序一次，当天顺序稳定。
- [dsh-theme-manager](https://github.com/runcat-tommy/dsh-theme-manager) - DSH Web 两级主题管理器：先选文化 / 场景、国旗、开发者配色或强烈对比配色，再选具体风格（内置 58 套配色，含浅色 / 深色底版）。

- [weibaohui/dsh-settings-ui](https://github.com/weibaohui/dsh-settings-ui) - 设置界面自定义：调整原生设置窗口大小（全屏/预置/自定义宽高）、背景透明度与背景（主题/颜色/图片），悬浮球即开即调，存本机浏览器。

## Dashboards & Session UX

- [zoahdev/dsh-timesheet](https://github.com/zoahdev/dsh-timesheet) - 从会话日志做基于 turn 的时间跟踪：按天/项目/供应商/来源汇总、工具调用数、失败率与 TTFT（CLI + `timesheet` 工具）。
- [zoahdev/dsh-replay](https://github.com/zoahdev/dsh-replay) - 时间旅行调试器：从 `session.jsonl.zstd` 回放、可视化并 diff 会话完整轨迹（零依赖，Node ≥ 22.19）。
- [dsh-session-cluster](https://github.com/dsh-external/dsh-session-cluster) - 会话聚类
- [session-chatlog](https://github.com/dsh-external/session-chatlog) - 会话聊天记录
- [dsh-session-archive](https://github.com/lbh1nb/dsh-plugins/tree/main/packages/dsh-session-archive) - 设置页查看归档会话并两步确认永久删除死会话（运行中会话锁定）。
- [dsh-plugin-no-workspace](https://github.com/SpookySandwich/dsh-plugin-no-workspace) - 独立的无工作区会话，支持无损解绑并直接显示为侧边栏一级项，不替换 DSH 原生工作区界面（npm 包：dsh-plugin-no-workspace）。
- [dsh-office](https://github.com/dsh-external/dsh-office) - Office 文件读写 bundle：模型读写 Office 文件，docx/pdf 预览
- [dsh-token-pet](https://github.com/pk7j7sqryy-ops/dsh-token-pet) - 会话头部卡通用量小部件：实时上下文占用、会话累计与构成，附日期周几、天气、3 天预报与极端天气预警，跟随主题色。
- [dsh-token-usage](https://github.com/jiamuAi/dsh-token-usage) - Codex 风格 Token 用量面板：全实例累计/单会话峰值 Token、最长聊天时长与连续天数、每日/每周/累计活动热力图，以及插件/Skill Top5。
- [dsh-office](https://github.com/Fayelin12/dsh-office) - DeepSeek Harness（DSH）办公室工作区/会话仪表盘：悬浮 6 列精灵面板可视化工作区、会话、token 用量与子代理——另含 Agent Mail、飞书消息流、会议日程、会议纪要与办公日志页签。
- [dsh-deepseek-quota](https://github.com/yingjunnan/dsh-deepseek-quota) - DSH Web 页面右下角悬浮卡片展示 DeepSeek API 余额（自动刷新 + 手动刷新）。
- [dsh-pin-recall](https://github.com/kerwin2046/dsh-pin-recall) - 在 Web 助手消息操作条钉住回复，再通过 `/pin` `/recall` 召回进下一轮模型上下文（可一键唤醒）。
- [dsh-turn-navigator](https://github.com/dsh-external/dsh-turn-navigator) - DSH Web turn 导航插件。
- [dsh-fork-graph](https://github.com/chouyong/dsh-fork-graph) - 会话标题栏内联的 Git 风格 fork 血缘图：用彩色轨道与分叉曲线显示会话从何处分支，并可点击跳转。
- [dsh-session-tree](https://github.com/ZhengQingJing/dsh-session-tree) - DSH Web 的只读会话谱系标签页：以有界树展示当前根会话、分支与子代理家族，并可点击节点跳转。
- [chouyong/dsh-branch-review](https://github.com/chouyong/dsh-branch-review) - 为相关 DSH 会话分支记录人工决策：保留、淘汰或待跟进，并保存理由、标签与外部链接。
- [dsh-fork-diff](https://github.com/chouyong/dsh-fork-diff) - DSH Web 的只读父分支与兄弟分支比较：展示消息与工具差异、用量与耗时摘要，支持筛选和打开对应会话。
- [dsh-usage](https://github.com/Huasecc/dsh-usage) - DeepSeek 账户全量用量与余额面板（走平台官方接口 api/v0/usage/by_api_key）：缓存命中/未命中/输出 Token、费用、24h–90d 范围切换、平台令牌持久化，以及模型可调用的 `deepseek_usage_query` 工具。
- [dsh-usage-panel](https://github.com/AlfredChaos/dsh-usage-panel) - 设置页 Token 用量统计：累计 KPI、半年活跃热力图、按模型堆叠的每日柱状图与模型环形图，只读重算会话日志。
- [dsh-what-changed](https://github.com/sjh9714/dsh-what-changed) - 会话顶栏的整会话改动审阅。列出本次会话 Agent 写过的每个文件与逐处改动，被权限拒绝的写入单独计数不算改动，数据来自 session projection 而非磁盘日志。
- [dsh-token-usage-dashboard](https://github.com/solstice621/dsh-token-usage-dashboard) - Codex 风格 Token 用量仪表盘：5 张统计卡、GitHub 风格活动热力图（每日/每周视图）、洞察与模型排名；快照持久化 + 增量同步，删除会话后统计保留。
- [dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) - DSH Web 人民币/美元 token 计费插件：官方政策自动计价（含峰谷时段）、逐条消息费用账本、账号余额、按界面语言切换币种。
- [dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) - DeepSeek 账户余额与当前会话成本显示在 DSH Web 编辑器 dock 中（自动获取官方价格，支持峰时/非峰时计价）。
- [dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) - 会话与当日 API 费用统计、预算图框（已用%）、官方余额、历史看板，支持峰谷计价与官方价格一键同步。
- [TokenLedger](https://github.com/zh667/TokenLedger) - 按中转站点、项目和模型统计本地 DSH Token 用量，并显示账户余额与订阅额度周期。
- [dsh-plugin-usage-meter](https://github.com/fancr-code/dsh-plugin-usage-meter) - API 用量/费用/余额仪表：输入框下方按钮式用量条（峰/谷时段标签、实时计价），当日/近 7 天按模型堆叠柱状图、模型分布、预算提醒与跨会话账本。
- [dsh-budget](https://github.com/PerryLink/dsh-budget) - DeepSeek Harness 成本治理：按模型/会话/天聚合 token 与费用计量，会话/日/月预算上限 + 阈值告警与超限 alert/block/degrade 策略，碳足迹估算、分模型延迟基准、Settings 预算页与 /budget 命令。
- [Phant0Meow/dsh-meow-cachebilling](https://github.com/Phant0Meow/dsh-meow-cachebilling) - 点开输入框旁的上下文圆环即见本轮账单：缓存命中/未命中/输出各花多少钱（¥），官方峰谷价与模型分价自动判定；非 DeepSeek 官方路由不显示。
- [dsh-cost-meter](https://github.com/Sttrevens/dsh-cost-meter) - Web UI 美元成本徽标：头部显示会话总成本、每条回复结尾显示该轮成本，悬停看分项（token 用量 × 可配置价格表）。
- [dsh-linked-folders](https://github.com/Sttrevens/dsh-linked-folders) - 多文件夹工作区：全局链接文件夹列表 + 会话内临时挂载（link_folder/unlink_folder），侧边栏管理。
- [dsh-plugin-cost](https://github.com/yweilai77-dev/dsh-plugin-cost) - DSH Web 聊天框底部的会话费用估算：token 四桶 × 可配置价格表，一键刷新官方价格（估算非账单）。
- [dsh-balance-tide](https://github.com/huanyuLv/dsh-balance-tide) - 输入框下方显示 DeepSeek 账户余额与本会话花费，余额前带峰/谷价格徽章（北京时间）与距切换倒计时，悬停查看两档单价明细与使用建议。
- [dsh-spend](https://github.com/nonewind/dsh-spend) - DSH Web 用量与预计费用统计：右下角悬浮窗，按模型/按天/按会话多维聚合，内置供应商知识库自动识别计费计划。
- [dsh-worktime-board](https://github.com/spacexun2/dsh-worktime-board) - 牛马修仙看板：右下角浮动看板，日/周/月三档统计 + 多维热力 + 线程出勤甘特 + 学年年历，agent 工时按十二境界（炼气→宇宙洪荒）修仙值计分。
- [dsh-live-stats](https://github.com/dsh-external/dsh-live-stats) - 实时 token 估算与生成 TPS
- [dsh-tps](https://github.com/dsh-external/dsh-tps) - TPS 仪表
- [DSH-better-sidebar](https://github.com/dsh-external/DSH-better-sidebar) - 侧边栏：文件渲染/终端/Git/子代理/自定义 API
- [dsh-web-panel](https://github.com/dsh-external/dsh-web-panel) - 内嵌终端 dock + Git Review + 文件视图
- [dsh-tmux-cc](https://github.com/adrianleb/dsh-tmux-cc) - 为 DSH Web 提供持久的 tmux 控制模式驾驶舱，在停靠栏中镜像原生窗格。
- [dsh-subagent-tree](https://github.com/dsh-external/dsh-subagent-tree) - 子代理树可视化
- [dsh-web-workflow-visualizer](https://github.com/dsh-external/dsh-web-workflow-visualizer) - workflow 可视化
- [dsh-ui-progress](https://github.com/dsh-external/dsh-ui-progress) - 进度
- [dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) - 右侧圆点时间轴导航栏，快速跳转到任意用户消息。
- [dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) - 轮次索引侧边栏：每条索引对应一轮用户提问，点击跳转并闪烁高亮，滚动时自动高亮当前轮次。
- [dsh-outline](https://github.com/urzeye/dsh-outline) - DSH Web 会话页实时大纲面板：用户问题 + Markdown 标题（1~6 级）大纲树，流式生成实时更新，点击节点定位高亮，支持展开层级调节、搜索与会话级收藏。
- [dsh-conversation-anchors](https://github.com/biggerboy/dsh-conversation-anchors) - 侧边栏会话锚点导航：每个对话节点（用户 / 助手 / 工具 / 命令）一条锚点，带角色徽标与摘要，点击平滑滚动定位到对应消息；随会话实时刷新。
- [dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) - 关注提醒：会话等待输入或后台完成未打开时，左上角角标、标签页标题 (N) 计数与鲸鱼 favicon 换色三处联动。
- [dsh-sidebar-mode](https://github.com/Meredith2328/dsh-sidebar-mode) - 嵌在「新会话」按钮里的预设模式徽章：点击即可切换下一个新会话的默认预设（长名自动省略号截断，「新会话」文字始终完整）。
- [dsh-hud](https://github.com/a903067276-rgb/dsh-hud) - HUD 状态面板：Git 状态、MCP 服务器、技能列表、模型与 token 用量，悬浮侧栏一览无余。
- [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) - DSH Web 请求中断自动续跑：网络/超时/宿主崩溃等非人为失败后自动发送「继续」，支持错误分类、自适应退避、模板化继续文本与浏览器通知；全部参数可在插件设置卡片中调整。
- [Chu-m/dsh-chat-continue](https://github.com/Chu-m/dsh-chat-continue) - 失败 API 请求自动重试，按可配置的 HTTP 状态码和错误码规则保持 DSH 对话连续。
- [qwert702/dsh-continue-on-limit](https://github.com/qwert702/dsh-continue-on-limit) — 本地小模型输出上限自动继续插件：双源检测已达到输出 token 上限提示（turn-max-tokens 节点 + provider 响应），maxConsecutive（默认 3）防死循环，完全无 UI。
- [dsh-trajectory-debug](https://github.com/devmom/dsh-trajectory-debug) - DeepSeek Harness 轨迹瀑布流、确定性回放、断点、改参重跑、分叉对比与性能分析。
- [dsh-netcafe](https://github.com/mario03690/dsh-netcafe) - 托管式成果工具包（一行配置接入 MCP）：md→docx/pptx/pdf、带代码内算术校验的表格、从中国大陆真实网络出口做的可达性测试、农历日历/节假日；免费匿名额度，按调用计费报告。
- [dsh-opencodego-usage](https://github.com/BeiZi6/dsh-opencodego-usage) - OpenCodeGo 剩余额度监视器：输入框右下角呼吸指示灯（按剩余额度绿/黄/红），液态玻璃面板显示滚动/周/月用量窗口与重置时间，每 30 秒自动刷新；API Key 自动读取 DSH 凭据。
- [penguin-oo/dsh-quota-hub](https://github.com/penguin-oo/dsh-quota-hub) - 统一实时额度仪表盘：一个可折叠玻璃面板聚合 OpenCodeGo 窗口、DeepSeek 余额、OpenRouter 额度、SiliconFlow 与 Moonshot 余额——自动识别 DSH 凭据，主机侧抓取（密钥不到达浏览器），可通过 ~/.dsh/dsh-quota-hub.json 自定义提供商。
- [dsh-trajectory-reader](https://github.com/flyingtimes/dsh-trajectory-reader) - 轨迹解读标签页：按用户轮次逐轮解读助手做了什么（需求/思路/执行/结果，规则引擎 + 可选 LLM 叙述），涉及文件、命令与错误一目了然，用户消息原样保留。
- [dsh-session-manager](https://github.com/Semidia/dsh-session-manager) - 侧边栏会话行右键菜单：置顶、重命名、归档、在新聊天中继续、标记未读、复制工作目录/标题/ID/深度链接、在资源管理器中打开、在新窗口中打开。
- [dsh-session-handoff](https://github.com/WeiYe6/dsh-session-handoff) - 长会话交接：/handoff 用 LLM 总结当前会话，在同一工作区创建带 agent 的干净新会话并注入交接文档，自动打开继续，原会话保持不变。
- [dsh-cost-crystal](https://github.com/xxvk/dsh-cost-crystal) - DSH Web UI 成本水晶球：余额卡片、实时 tok/s 速率、波峰/低峰计费倒计时、近 24h 消耗，以及 🔮 下一条消息消耗预测，全部时区感知。
- [dsh-session-repair-ui](https://github.com/Semidia/dsh-session-repair-ui) - 会话头部的修复按钮：检测并修复工具调用 ID 对不上、空 call ID、禁用插件产生的未知事件、损坏的 zstd 尾部和缺失的末帧换行，写入前自动备份。
- [plugin-team-board](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-team-board) - 多 agent 共享任务板（创建/认领/流转/查询），状态物化为 Cordis 协作用键。
- [zoahdev/dsh-code](https://github.com/zoahdev/dsh-code) - VS Code 扩展：从命令或面板运行 DeepSeek Harness 一次性任务（dsh --profile headless）。
- [dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) - 事件流审计面板：观察事件类型/分发模式/计数/最近事件，帮助插件作者理解 harness 内部
- [dsh-session-explorer](https://github.com/Zn-Dk/dsh-session-explorer) - DSH 会话消息级全文检索浏览器：FTS5 trigram 索引按消息检索（用户/助手/系统注入/工具，可按类型筛选），fork/续接会话结果自动去重，只读上下文预览自动滚动定位并一键跳转真实会话，增量/全量重建索引与健康检查，界面中英双语跟随 Host locale。
- [dsh-whale-meter](https://github.com/Shiye-10Pages/dsh-whale-meter) - 用量段位（🐟→🐳）与可分享战绩卡，分位本地估算；6 家厂商 46 个模型精准计价，含国内按输入长度分档；回填安装前的会话；8·17 调价前后新旧价对比。
- [dsh-bill](https://github.com/Jannchie/dsh-bill) - 费用统计：每轮成本行，把花费归因到工具输出 / 模型输出 / 系统提示词 / 终端命令，预算与月度预测；按 models.dev + OpenRouter（8000+ 模型）逐次调用定价，历史不重算。
- [dsh-history](https://github.com/chenproton/dsh-history) - 会话历史消息查看：列出当前会话全部你发送的消息，支持最新在前排序、文本过滤、一键复制，点击可跳转定位（目标未加载时自动加载更早历史）。
- [JohnXu22786/session-titler](https://github.com/JohnXu22786/session-titler) - 双阶段会话标题生成：忙碌时即时关键词标题，空闲时用经济模型精修。
- [dsh-billing-tui](https://github.com/Ethanz11-creat/dsh-billing-tui) - 实时 token 计费，按 DeepSeek 官方峰谷定价：TUI 状态行实时显示费用，/billing 打印鲸鱼 ASCII 账单小票。

- [woosh2010/dsh-usage-dashboard](https://github.com/woosh2010/dsh-usage-dashboard) - 峰谷计费坞 + 用量分析仪表盘：token/成本/模型统计、成本趋势与 Token 结构图表、最近 20 轮明细，支持时间/会话/模型全局筛选与账户余额。
- [runcat-tommy/dsh-panda-calendar](https://github.com/runcat-tommy/dsh-panda-calendar) - 熊猫日历会话视图标签页：公历/农历、干支、生肖、节气、传统与外国节日、中国法定节假日（含调休）、多城市天气；免费数据源，无需 API Key。
- [dsh-session-enhance](https://github.com/Tinger-X/dsh-session-enhance) - DSH Web 会话管理增强插件：归档管理 / 真实物理删除（墓碑防复活）/ 跨工作区拖拽搬移 / 对话通知 / 复制会话 ID / 一键同步记录。
## IDE & Clients

- [Blue](https://github.com/dsh-blue/blue) - DeepSeek Harness 交互式 TUI 插件：基于 Cordis bundle 的 pi-tui 渲染器，支持流式转录、工具调用卡片、审批浮层、会话管理与主题。
- [dsh-cc-tui](https://github.com/dsh-external/dsh-cc-tui) - Claude Code 风格全屏 TUI（流式展开/双击 Esc 回滚）
- [dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) - grok-build TUI
- [dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) - 基于 pi-tui 的 DeepSeek Harness 终端前端：流式 Markdown、thinking 折叠、工具卡片、slash 命令、审批/提问交互与 Web 会话共享
- [Martty](https://github.com/openma-ai/Martty) - 面向 DeepSeek Harness 的 Rust/ratatui Agent TUI，支持流式工具调用、子代理、持久会话和可扩展的 Cordis 客户端界面
- [dsh-terminal](https://github.com/geebos/dsh-terminal) - 会话内嵌可折叠交互式终端：多标签存活 shell、自动重连、一键快捷命令，界面支持中英文并跟随主题
- [lk251066/dsh-tui-pro](https://github.com/lk251066/dsh-tui-pro) - DeepSeek Harness 全屏终端工作台：提供独立持久助手、按工作区分组的项目会话，以及结构化思考、工具、diff、计划和子代理视图
- [DSH-Portable](https://github.com/WSL043/DSH-Portable) - 跨平台的 DeepSeek Harness 单目录便携发行版，内置运行环境与插件市场；更新保留数据，会话、设置、插件和工作区可随目录一起移动。
- [deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) - Windows 原生桌面外壳:一比一加载官方 Web UI,内置服务器托管、托盘驻留与掉线自动恢复
- [Harness Desktop](https://github.com/baiyuscc13724-max/deepseek-harness-desktop) - 官方 DSH Web UI 的 Windows 桌面版，提供中文安装版和免安装版、快速换肤、应用内插件市场、主模型与子代理选择和校验更新。
- [dsh-desktop](https://github.com/foolgry/dsh-desktop) - 开箱即用的 Electron 桌面版（macOS/Windows 安装包）：无需 Node.js 和命令行，自动跟随上游 `@deepseek-ai/dsh` 发版，内置 Web UI 与自动更新
- [deepseek-harness-desktop](https://github.com/fendouai/deepseek-harness-desktop) - 基于 Tauri 2 的 DeepSeek Harness 桌面发行版，集成完整 Web UI、受监管的本地 sidecar 与内置 Node.js 24 运行时（macOS/Linux/Windows）。
- [DeepSeek Harness Desktop](https://github.com/dsh-tauri-desk/deepseek-harness-desktop) - 一键运行的 Tauri 2 桌面版 DeepSeek Harness：内置运行时，无需 Node.js/pnpm/Docker，提供 macOS/Windows/Linux 原生安装包。
- [DeepSeek Harness Desktop](https://github.com/web-casa/DeepSeek-Harness-Desktop) - 面向 DSH 的社区 Tauri 2 桌面发行版：受监督的本地 sidecar、内置 Node.js 24、Windows/macOS 原生安装包；[官网](https://dsharness.app)。
- [DeepSeek Harness Desktop](https://github.com/chokwinlee/deepseek-harness-desktop) - 官方 DSH Web UI 的自包含 macOS/Windows 桌面端；macOS 采用 Tauri/WKWebView，DMG 不到 90 MB，并内置完整 Harness 运行时。
- [dsh-vscode](https://github.com/Lixxx1/dsh-vscode) - 面向官方 DSH 运行时的 VS Code 右侧栏客户端：接入项目与编辑器选区上下文，支持权限/Plan 控制、消息排队与 Steering、原生 Diff 审阅。
- [zhibailu/dsh-vsc](https://github.com/zhibailu/dsh-vsc) - DeepSeek Harness 的原生 VS Code 侧边栏与编辑器桥接：可询问选区、审阅 Agent 修改，并显示审批和问题卡片；连接配置的 DSH URL，在服务不可用时可自动启动 `dsh web`。
- [dsh4vscode](https://github.com/DoggyHU/dsh4vscode) - 基于 DSH agent 的 VS Code 聊天窗口：OpenCode 式独立会话、模型自动路由（Flash/Pro/Pro Max）。
- [dsh-plugin-open-editor](https://github.com/Civitasv/dsh-plugin-open-editor) - 从会话页头一键用本地编辑器（VS Code / Cursor / JetBrains / Vim 等）打开当前项目。
- [dsh-open-with](https://github.com/ChuanTianML/dsh-open-with) - 从 DSH Web UI 使用自动检测或手动配置的本机编辑器、终端或文件管理器打开已登记工作区，并按浏览器记住首选目标。
- [DSH-for-VSC](https://github.com/yauntyour/DSH-for-VSC) - 把 DSH 的 WebUI 搬进 VS Code：编辑器内嵌面板 + 侧边栏控制台（服务状态/一键启停），离线自动拉起、日志随时可查、状态栏常驻指示。
- [dsh-gui](https://github.com/xuboboo/dsh-gui) - DeepSeek Harness 第三方 Windows 桌面客户端：原生窗口、品牌主题与启动动画、启动崩溃修复、Token 用量统计。
- [DSH Studio](https://github.com/Moresyl/dsh-studio) - 跨平台 Rust/Tauri 桌面外壳：托管 `dsh web`、回收进程树、自动选择空闲端口，并发布 Windows/Linux/macOS 安装包，无需 fork 上游 UI。
- [DSH Deck](https://github.com/Socialist-Sister/dsh-deck) - 非官方 Electron 桌面外壳：复用官方 DSH Web UI 与数据，支持附加到现有 Harness、防止双写会话损坏、托盘常驻与单文件便携版。
- [DshCockpit](https://github.com/Lxiayu/DshCockpit) - Electron 桌面驾驶舱：托盘常驻后台任务、Token 用量与成本统计（预算报警）、运行时自动更新与回滚、Quick Ask 全局热键、定时任务、会话全文检索。
- [deepseek-harness-desktop](https://github.com/Easyhoov/deepseek-harness-desktop) - 非官方 Windows 进程内桌面应用，提供托盘常驻、原生通知与 IPC 桥接。
- [dsh-shell](https://github.com/TaoSmile/dsh-shell) - 面向已安装 DeepSeek Harness 的零安装桌面壳：自动附着运行中的 `dsh web`，或复用现有 Node 环境自动拉起；Electron 壳（托盘）+ 双击即用的 Edge 启动器。
- [dsh-chat-tools](https://github.com/yj060464-commits/dsh-chat-tools) - headless 终端伴侣工具链：chat.sh 连续对话 REPL（滚动上下文/决策点拍板/工作流实时透传/思考档位切换）+ 会话日志 LLM 自动总结，零依赖纯 bash+Python
- [dsh-desktop](https://github.com/xiaoyanzi191/dsh-desktop) - DeepSeek Harness 的 Electron 桌面封装：双击即启动，自动管理 dsh Web 服务生命周期。
- [dsh-come](https://github.com/qing3a/dsh-come) - 桌面壳（Rust 单 exe）：双击即用 DSH，自动装 Node、托盘、开机自启、插件市场
- [dsh-launcher](https://github.com/iceleaf916/dsh-launcher) - macOS 菜单栏启动器：一键启动/停止/重启 dsh Web 服务、热重载、开机自启、崩溃自愈，并可在系统浏览器或内置浏览器中打开 dsh 界面

- [ccgui / desktop-cc-gui](https://github.com/zhukunpenglinyutong/desktop-cc-gui) - multi-engine AI 编程桌面客户端（Tauri）：统一接入 Claude Code、Codex、Gemini、OpenCode、DeepSeek Harness 等 CLI runtime，不是 DSH Web UI 外壳，也不是 `dsh-plugin`。
- [dsh-desktop-hub](https://github.com/FlashingChen/dsh-desktop-hub) - 官方 DSH Web UI 的 Electron 桌面中枢：内置 MCP 配置转换器（Claude Code / Cursor JSON 一键转 DSH YAML）与 Skills / Plugin 管理台，捆绑 Node.js + DSH 运行时，免安装、免终端。

## Browser & Remote

- [mrRisega/dsh-remote](https://github.com/mrRisega/dsh-remote) - 反向代理网关：手机浏览器全功能远程控制 DSH Web UI（含特权方法）——loopback 伪装、WebSocket 透传、登录限流、可选 TLS，支持局域网直连或公网反代部署。
- [dsh-voice-gate](https://github.com/yangfei222666-9/dsh-voice-gate) - 语音优先的手机入口：零依赖 Python 服务（3081 端口）+ PWA 页面，把语音或文字发送到当前 DSH 会话，Token 鉴权、launchd 自启、Tailscale HTTPS 配方。
- [dsh-browser-panel](https://github.com/dsh-external/dsh-browser-panel) - WebUI 内嵌有头浏览器，模型实时操控（Codex 式，0 视觉依赖）
- [dsh-builtin-browser](https://github.com/wqty123/dsh-browser) - DSH 共享真实浏览器：用户可见、可随时接管的浏览器窗口，由 agent 通过 CDP 驱动（snapshot/execute/content/多标签管理）。
- [dsh-browser](https://github.com/dsh-external/dsh-browser) - Chrome 侧边栏扩展
- [dsh-deeplink](https://github.com/dsh-external/dsh-deeplink) - 通过 URL 参数直接打开 DSH WebUI 会话或工作区。
- [dsh-remote](https://github.com/flymysql/dsh-remote) - 多机远程工作区：管理多个 SSH 主机，在原生 Add-workspace 流程中选择本地或远程工作区（系统文件夹/路径浏览），把远程工作区镜像到本地真实文件夹，用 rw_* 工具操作。
- [dsh-ssh](https://github.com/jmcc-guo/dsh-ssh) - DeepSeek Harness 的 SSH 终端面板与 AI 连接管理：对话内自主 connect/exec/list/status/disconnect，WebUI 内 XShell 风格多标签 PTY 实时终端。
- [dsh-lan-access](https://github.com/Leon0555/dsh-lan-access) - 局域网访问：Web GUI 绑定 0.0.0.0 + crypto.randomUUID polyfill（修复非安全上下文下 RPC 崩溃），npm 可装
- [xgone/dsh-remote](https://github.com/xgone/dsh-remote) - 让 DeepSeek Harness 可以被安全地远程访问：账号密码认证 + MFA（TOTP）登录门禁、签名会话 Cookie、角色权限、浏览器内目录选择器、账号管理设置页。
- [dsh-dispatch](https://github.com/alextangson/dsh-dispatch) - 手机端指挥中心（插件 + 零知识中继 + PWA）：从手机把任务派发到隔离的 git worktree，审批推送通知支持手机/桌面先答为准（绝不自动批准），并提供多机器会话看板；端到端加密，可自建部署。
- [ego-browser](https://github.com/dsh-external/ego-browser) - 浏览器代理
- [dsh-webbridge](https://github.com/dsh-external/dsh-webbridge) - Web 桥接
- [browser4-dsh](https://github.com/dsh-external/browser4-dsh) - Browser4 AI-native 浏览器引擎（skills）
- [dsh-browser-runtime](https://github.com/anweat/dsh-browser) - DSH 自包含浏览器运行时插件：Playwright（chromium）+ OpenCLI 作为插件本地依赖（全局复用回退），提供 `browser` 服务与交互式浏览器工具。
- [dsh-computer-use](https://github.com/ZRui-C/dsh-computer-use) - 文本优先电脑控制：Playwright/CDP 后台操作 Chromium，Accessibility 优先控制 macOS；动作锁定到正确进程与窗口，不抢前台、不移动鼠标（已签名公证 Universal 2 DMG 安装包）。
- [dsh-adb](https://github.com/SamXiaBing/dsh-adb) - ADB 设备与台架运维：设备发现、结构化 logcat（后台采集）、apk 安装、文件 pull/push、性能快照
- [zoahdev/dsh-vision](https://github.com/zoahdev/dsh-vision) - vision_analyze 工具：用 OpenAI 兼容视觉模型分析本地图片或 URL。
- [dsh-click](https://github.com/PerryLink/dsh-click) - DeepSeek Harness 原生桌面控制（Windows 优先）：截图、无障碍树结构化读取、点击/输入/滚动/按键与应用启动——变更性操作过审批门禁，不抢占前台焦点
- [zoahdev/dsh-browser-use](https://github.com/zoahdev/dsh-browser-use) - Browser Use 云端桥接：通过 Browser Use API 让 dsh agent 执行真实网页任务（打开页面、点击、输入、填表、提取数据）。
- [sheep-programmer/dsh-web-search-free](https://github.com/sheep-programmer/dsh-web-search-free) - DSH 免费网页搜索：匿名免 Key 的 Parallel 默认后端与 Exa 备用后端，附设置开关和兼容 Claude Code/Codex 的 MCP 服务器。
- [SeerableOfficial/dsh-web-search-toggle](https://github.com/SeerableOfficial/dsh-web-search-toggle) - 会话级“网页搜索”开关：启用后引导 Agent 在回答前先检索网页。
- [tabbit-browser](https://github.com/Tabbit-Browser/dsh-plugin) - 通过 Tabbit 自有、任务隔离的 Playwright CLI（`tabbit-cli`）操控本机 Tabbit 浏览器：随包加载 `tabbit-browser` Skill、正式版 ≥1.9.0 与运行时预检、按系统地区后台下载安装包、持久命名任务空间（不回退到 Chrome/Ego/CDP）。
- [dsh-tabbit](https://github.com/Tabbit-Browser/dsh-tabbit) - 通过 Tabbit 自有、任务隔离的 Playwright CLI（`tabbit-cli`）操控本机 Tabbit 浏览器：随包加载 `tabbit-browser` Skill、正式版 ≥1.9.0 与运行时预检、按系统地区后台下载安装包、持久命名任务空间（不回退到 Chrome/Ego/CDP）。
- [dsh-antigravity](https://github.com/LiZhenNet/dsh-antigravity) - Google Antigravity / Cloud Code Assist 模型提供者插件：支持 Web OAuth 登录、实时额度同步、精选 11 个 Base 模型与动态思考档位路由。
- [JohnXu22786/browser-automation](https://github.com/JohnXu22786/browser-automation) - Web Bridge：面向 dsh 的浏览器自动化 MCP 服务器——真实浏览器导航、点击、填表、截图、JS 执行，由无障碍树快照驱动。
- [JohnXu22786/computer-control](https://github.com/JohnXu22786/computer-control) - 面向 dsh 的桌面控制：屏幕捕获、指针/键盘注入、无障碍树语义操作，紧急停止、允许/拒绝规则、确认流程与空闲待机。
- [harness-unity-bridge](https://github.com/WarrenMondeville/harness-unity-bridge) - 基于文件协议的桥接器：让 DeepSeek Harness 控制 Unity Editor——运行 EditMode/PlayMode 测试、编译脚本、刷新资源、读取控制台日志、控制 Play Mode 与构建——由确定性 Python CLI、Unity UPM 包与可安装的 DSH 技能（`unity-bridge`）组成。

## Models & Inference

- [dsh-agy-link](https://github.com/amlyczz/dsh-agy-link) - Google Antigravity (agy CLI) 模型接入：无 API Key 使用 Gemini/Claude/GPT-OSS 订阅模型，支持流式对话、原生工具卡片与 Web 界面 Google OAuth 登录。
- [dsh-baseurl-probe](https://github.com/Semidia/baseurl-probe) - 自动探测并修正模型供应商 baseURL：当裸域名只有 /v1 提供 OpenAI 兼容 API 时，无需 API Key 即可完成路径探测。
- [dsh-llm-compat-healer](https://github.com/Semidia/dsh-llm-compat-healer) - 中转/网关 LLM 兼容自愈：无需重启即可修复 DeepSeek `reasoning_content` 历史回传与不支持 `developer` 角色的问题，提供 pi-ai 兼容设置页，并为上游错误生成脱敏中文摘要。
- [dsh-provider-health](https://github.com/Semidia/dsh-provider-health) - 供应商健康度设置页：只读展示各供应商状态、由近期错误衰减计算的健康度、思考能力、最大 token 与最近错误；数据来自 llm-pi-ai 配置和兼容修复器错误日志。
- [dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) - 为 DeepSeek Harness 提供原生对话生图能力，支持 Google Gemini、OpenAI Images、OpenAI 兼容 API 和字节 Seedream。
- [exoticknight/dsh-labnana](https://github.com/exoticknight/dsh-labnana) - 为 DeepSeek Harness 接入 Labnana 图片生成：文生图 / 图生图 / 精准编辑，支持 NanoBanana Pro、Gemini 3.1 Flash Image、GPT-Image-2、Wan2.7、Seedream。
- [welsione/dsh-model-router](https://github.com/welsione/dsh-model-router) - 统一模型路由：一个逻辑 ModelID 汇聚多家供应商，首 token 前失败自动切换并冷却、健康度择优、按 purpose 三档分级、每候选思考级别，设置面板自动保存即时生效。
- [dsh-codex-oauth](https://github.com/WNJXYK/dsh-codex-oauth) - DSH 的 ChatGPT/Codex 订阅接入插件，支持 GPT 模型、图像生成、Web 搜索、额度显示，以及浏览器/设备码 OAuth 登录。
- [dsh-qwen-token-plan-cn-responses](https://github.com/nickhelion/dsh-plugins/tree/main/packages/qwen-token-plan-cn-responses) - 千问 Token Plan 个人版 Responses API 模型提供方：同步官方模型与逐模型内置工具文档，支持 DSH 本地函数和图片，并保留校验过的最近可用目录。
- [dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) - DSH 的 ChatGPT OAuth 模型提供方，支持 Codex 模型、图像生成、可切换的订阅搜索、普通与 Spark 额度显示和原生设置页面。
- [dsh-vision](https://github.com/dsh-external/dsh-vision) - 视觉桥接：view_image 工具接任意 OpenAI 兼容 VLM（默认智谱免费档）
- [DeepSee](https://github.com/windyslime/DeepSee) - DSH `0.1.0-rc.5` Web 配置的视觉推理网关：把图片轮次路由到本地可插拔的 VLM 后端，常规 DSH 文本路由不受影响。
- [dsh-plugin-vision](https://github.com/tdf1995/dsh-plugin-vision) - 为纯文本大模型提供视觉能力：通过免费的 Gemini / GLM 视觉 API 完成图像描述、OCR 与视觉问答
- [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) - 内置免 Key 视觉链 + 像素级视觉工具（看图问答、定位、裁剪、像素对比、取色、OCR、矢量化、抠图、截图）；粘贴图片即可用，无 Python，一条命令安装
- [dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) - DeepSeek 大脑 + 自动识图：GUI 附加图片默认经官方 deepseek-v4-flash-vision-exp 原生识图转译（纯文本 V4-Pro 也能看图）；支持任意 OpenAI 兼容 VLM 与本地 Ollama。
- [DSH-Multimodal](https://github.com/yauntyour/DSH-Multimodal) - 按输入文件类型配置多模态处理模型链：图片/视频/音频等文件先经预设模型转为 Prompt Tokens 再交给纯文本会话模型，支持多模型回退链与「Multimodal」设置页。
- [dsh-draw](https://github.com/PerryLink/dsh-draw) - 统一静态图像生成路由：单一 image_generate 工具 + 标准参数，配置驱动的 OpenAI 兼容引擎路由（OpenAI Images、智谱 CogView 及任意兼容端点）与健康感知回退，工作区持久附件结果、按会话配额记账、对话内结果卡片，设置面板将 API key 存为凭据引用。
- [dsh-advisor](https://github.com/dsh-external/dsh-advisor) - 副模型每轮被动审查并注入建议
- [dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) - 阻断式安全闸门：更强的模型对危险工具调用给出放行/拒绝/询问，由工具执行器强制执行，而非提示词劝阻。可选 BlockRun x402 路由，一个钱包按次调用 67 个模型。
- [dsh-llm-fallbacks](https://github.com/dsh-external/dsh-llm-fallbacks) - 角色化 LLM 重试/备用策略
- [dsh-pi-adapter](https://github.com/dsh-external/dsh-pi-adapter) - pi ExtensionAPI 桥接
- [dsh-a2a](https://github.com/dsh-external/dsh-a2a) - Agent2Agent mesh
- [dsh-plugin-acn](https://github.com/acnlabs/dsh-plugin-acn) - 从 DeepSeek Harness 加入 ACN：注册本 Agent、发现其他 Agent、发消息、读收件箱。默认中国区。
- [dsh-acp](https://github.com/dsh-external/dsh-acp) - Client-neutral ACP 适配器
- [deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) - ACP profile 插件与独立 server，把完整 DSH agent 接入 Zed 等 ACP 客户端，并复用 DSH 的凭据、会话与 MCP 配置
- [dsh-slice-agent-loop](https://github.com/dsh-external/dsh-slice-agent-loop) - Drop-in agent loop：有界 slice 上下文引擎（cordis）
- [savemoneybenchmark](https://github.com/dsh-external/savemoneybenchmark) - 降本增效 benchmark（examples + skills）
- [dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) - MCP server 暴露 Harness agent：任意 MCP 客户端（如 Hermes）驱动 Harness 当「胳膊」。
- [dsh-subagent-tools](https://github.com/lynx-gt/dsh-subagent-tools) - 子代理委派按次覆盖 model / provider / persona / toolFilter、@preset: 引用、provider/model 复合 id（bundle，不改官方文件）。
- [dsh-subagent-cwd](https://github.com/lynx-gt/dsh-subagent-cwd) - dsh-subagent-tools 加按次 cwd（子代理工作目录），附所需的两处进程内 provider 补丁。
- [dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) - 子代理 LLM 供应商/模型选择与角色模板（subagent_role 工具）。
- [penguin-oo/dsh-delegate-router](https://github.com/penguin-oo/dsh-delegate-router) - 给 DeepSeek Harness 的子代理调用做 Flash/Pro 自动分派：轻任务自动用便宜模型、重任务留在强模型，支持手动覆盖与 /delegate 会话模式。
- [Cavan-Ou/dsh-flash-godmode](https://github.com/Cavan-Ou/dsh-flash-godmode) - V4 Flash 无头推理模式路由插件：w7 人设锚定、首轮工具锚定与按复杂度分派的引导。
- [dsh-subscription-auth](https://github.com/Khellendros97/dsh-subscription-auth) - 订阅会员 OAuth 登录：ChatGPT/Claude/Grok/Kimi 按订阅账号（非 API key）访问模型，登录后自动发现官方模型列表
- [dsh-llm-oauth](https://github.com/ziyou979/dsh-llm-oauth) - 订阅套餐 OAuth 登录插件：Grok / GitHub Copilot / OpenAI Codex / Anthropic / OpenRouter，持久凭据 + 请求路径自动刷新 token，不改仓库（Grok/Copilot 可用，Codex 慎用）。
- [dsh-llm-local-token](https://github.com/tianxia--/dsh-llm-local-token) - 直接复用本机 Codex CLI 与 Claude Code 已持有的 OAuth 凭据：注册 `openai-codex` 与 `anthropic` 路由，分别读取 `~/.codex/auth.json` 与 `~/.claude/.credentials.json`（macOS 钥匙串回退），临期自动刷新 token，并从服务商限流响应头展示订阅用量。
- [loongport-dsh](https://github.com/SailingLoong/loongport-dsh) - 多站点中转服务商接入：签名目录（身份、地址、模型）、Settings → LoongPort 服务商与 API Key 手动配置页、OpenAI 兼容路由（npm 包：loongport）。
- [dsh-llm-fallback](https://github.com/Visol-456/dsh-llm-fallback) - Provider 回退链：请求本身永远是链头（你选的模型永不被改写），失败按备用目标顺序自动切换重试；带 Web UI 配置面板
- [dsh-smart-route](https://github.com/Semidia/dsh-smart-route) - 智能路由：对话栏按钮一键启用/停用，任一渠道报错（含 4xx）自动切换下一家；模型选择器显示链路名称但不暴露内部渠道/模型，支持多链路管理与设置页。
- [dsh-sampling-sliders](https://github.com/Semidia/dsh-sampling-sliders) - 输入栏采样面板：temperature / maxTokens 滑杆，热调 + 持久化两种模式，经 agent/request 钩子作用于所有 Provider。
- [dsh-service-control](https://github.com/Semidia/dsh-service-control) - 会话标题栏工具区的重启 / 关闭按钮：经 ctx.appExit 优雅关闭，通过计划任务调用启动器 `-ControlledRestart` 自动重启 `dsh web`。
- [dsh-output-styles](https://github.com/PerryLink/dsh-output-styles) - 运行时切换模型输出风格（对标 Claude Code outputStyles：/style 命令、按会话持久化、Web 选择器），另加 output.render.* 呈现协议——渲染器注册表、按会话/按工具规则与 /export。
- [NOirBRight/dsh-llm-ollama](https://github.com/NOirBRight/dsh-llm-ollama) - Ollama Cloud 原生聊天适配器：注册 `ollama-cloud` LLM 路由，原生模型发现（上下文窗口、视觉、推理、工具调用），并接入 web 搜索/抓取 provider。
- [dsh-llm-inspector](https://github.com/cdxiaodong/dsh-llm-inspector) - 统一 LLM 请求/响应检查器：调 reasoning effort、外部思考(think)导出、流量与包分析。
- [dsh-github](https://github.com/PerryLink/dsh-github) - 官方级 GitHub CI 集成：composite action.yml、轮询 PR 评审机器人（幂等行内评论 + status-check 门禁）以及 PR/issue 工具，所有写入走人工审批门。
- [dsh-local-ai](https://github.com/PerryLink/dsh-local-ai) - Ollama 本地模型接入：ollama_list/pull/remove/show 与健康检查，以官方 LlmAdapter 注册 Ollama 路由与 model_route 分流（离线优先/长文本/隐私），失败回退云端；/ollama 命令一键总览。
- [rapid-mlx-dsh-provider](https://github.com/raullenchai/rapid-mlx-dsh-provider) - Rapid-MLX（Apple 芯片本地推理服务）原生 provider：注册 `rapid-mlx` 的 LlmAdapter 路由，从服务端 `/v1/models` 读取模型信息（上下文窗口、推理解析器、能力）而非手写 settings.yaml，切换所服务的模型无需重新配置，且上下文压缩按真实上下文窗口计时。
- [dsh-llm-gate](https://github.com/d3vmeh/dsh-llm-gate) - 基于 llm/stream waterfall 的按 provider 并发门控：多余的模型请求在 DSH 内部 FIFO 排队，让主 agent、子 agent 和压缩在单槽位本地服务器（llama.cpp --parallel 1）上轮流执行而不是超时；支持 maxConcurrent / maxQueued / queueTimeoutMs。
- [JohnXu22786/model-catalog](https://github.com/JohnXu22786/model-catalog) - 模型目录自动发现：从 OpenAI 兼容的 API 主机获取模型列表、价格与能力，归一化为可直接使用的配置。
- [dsh-browser-vision](https://github.com/tristan-mcinnis/dsh-browser-vision) - 视觉浏览器工具：以 browser-use 通过 CDP 驱动真实 Chrome，并用 deepseek-v4-flash-vision-exp 读取页面，可识别 canvas 上绘制的文字、图片中烧录的文字与图表中的数值；支持按调用方提供的 JSON Schema 返回结构化结果，并统计每次运行的 token 成本
- [openllmsh/dsh](https://github.com/openllmsh/dsh) - 将 DeepSeek Harness 接入 OpenLLM 网关：纯配置的 Cordis patch，为内置 pi-ai 适配器添加指向本地守护进程（`127.0.0.1:8787/v1`，dsh 侧不持有 API Key）的 `openllm` provider，并注册 `openllm mcp` stdio 服务（openllm、claude-context、supermemory 工具组）。
- [lynkr-dsh-plugin](https://github.com/veerareddyvishal144/lynkr-dsh-plugin) - 将 Lynkr（一个自托管的多提供商分级路由 LLM 网关）注册为自定义 OpenAI 兼容 provider：根据每个请求的实际难度分类，并路由到能胜任该任务的最便宜模型，覆盖 15+ 提供商（Anthropic、OpenAI、Azure、Bedrock、Vertex、OpenRouter、Ollama、DeepSeek 等）。
- [dsh-fetch-timeouts](https://github.com/d3vmeh/dsh-fetch-timeouts) - 把整个 DSH 进程的 Node HTTP headers/body 超时调大（默认 30 分钟，支持代理环境变量），让 Ollama、LM Studio 这类在思考或生成大段工具参数时长时间不返回数据的本地模型不再在 5 分钟处被掐断；替代手工修改 node_modules 的 undici 补丁。
- [dsh-turn-doctor](https://github.com/d3vmeh/dsh-turn-doctor) - 解释失败的 turn 究竟死在哪一层：为每个模型请求计时（首字节、最长静默、总时长），结合错误信息判断元凶（dsh 空闲看门狗、Node undici 计时器、SDK 超时、服务器断开、上下文溢出、并发门队列、工具超时、压缩失败）并指出该改的配置项；诊断输出在 DSH 终端，聊天中可用 /why 查看，含子代理。
- [dsh-logbook](https://github.com/d3vmeh/dsh-logbook) - 让 ctx.logger 输出可见：聊天里的 /logs 命令（支持 level、name、grep、since 过滤）加上默认开启的 stderr 导出器（默认只输出警告和错误，可按插件配置），无需 Web UI；同时记录了 dsh 默认日志缓冲区会静默丢弃 warn 和 debug 记录这一发现。
- [dsh-model-pin](https://github.com/d3vmeh/dsh-model-pin) - 把所有模型请求限制在按 provider 配置的允许列表内（在 agent/request 层强制执行）：不在列表内的模型被重定向到 fallback 或直接拒绝；子代理不再继承过期的创建时路由；当连续请求会让 --models-max 1 的 llama.cpp 路由器重载模型时发出警告。单条目列表即全局单模型模式。
- [dsh-think-ultra](https://github.com/YUEYUEXYS/dsh-think-ultra) - 把每个请求钉回原生 `max` 推理强度（而非 `ultra` 选项），Flash / Pro / Vision 三套深度预设相互隔离。仅以构建产物分发：核心闭源，许可证禁止逆向、反混淆与二次打包。

## Git & Engineering

- [dsh-llm-verifier](https://github.com/Web0926/dsh-llm-verifier) - 在独立 Git worktree 中运行 3 或 5 个编码智能体候选，用项目命令验证补丁，只对通过者排序，并在应用获胜补丁前要求再次批准。
- [dsh-ci-co-pilot](https://github.com/temotee2103/dsh-ci-co-pilot) - GitHub 工作流插件：提供 PR 审查、CI 失败诊断与修复、Issue 分类和发布说明起草。
- [gongyijie85/dsh-repo-setup](https://github.com/gongyijie85/dsh-repo-setup) - 只读仓库体检引导工具（repo_setup_scan）：识别技术栈/测试/文档/git/数据库线索，给出插件、MCP 与卫生文件的安装建议（claude-code-setup 对应版）。
- [dsh-git-identity](https://github.com/dsh-external/dsh-git-identity) - Git 提交固定环境作者身份（gh 登录账号 + noreply 邮箱）
- [dsh-gh-bridge](https://github.com/dsh-external/dsh-gh-bridge) - macOS Keychain GitHub token 桥入 sandbox gh
- [dsh-tool-github](https://github.com/NEAZ71eve/dsh-tool-github) - GitHub REST API 工具 + 浏览器侧边栏面板：仓库/搜索/Issue/PR/评论、账号绑定与一键工作区集成。
- [dsh-atomgit](https://github.com/xiongjiamu/dsh-atomgit) - AtomGit 插件 bundle：内置 atomgit-skills 工作流（规划/实现/审查/合并 Issue 与 PR）、ag CLI 与平台托管的 GitCode MCP 工具
- [deepseek-harness-action](https://github.com/Lixiaoyiao/deepseek-harness-action) - 在 GitHub 中运行 DeepSeek Harness，用于 PR 审查、CI 诊断、受信任修复和 Issue → PR。
- [duyanta123/dsh-refactor-insight](https://github.com/duyanta123/dsh-refactor-insight) - 重构入口诊断：把代码库坏味道（超长文件/深嵌套/超长函数/上帝对象）转成带定位、优先级与依赖顺序的重构计划（只读不自动改码）。
- [dsh-auto-blame](https://github.com/dsh-external/dsh-auto-blame) - 自动 blame
- [dsh-bash-rtk](https://github.com/DeepTrial/dsh-bash-rtk) - 在 DSH bash 执行器内把符合条件的 bash 命令路由给 rtk（Rust Token Killer）以压缩工具输出、节省 token；rtk 缺失时安全透传。
- [dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) - 结构化 Git 工具（status/diff/log/branch/stage/commit/stash/show）+ 破坏性命令安全护栏
- [dsh-plugin-check](https://github.com/dsh-external/dsh-plugin-check) - 插件健康检查（清单/patch 格式/构建陷阱/hub 收录）
- [dsh-plugin-pub-review](https://github.com/weopenfire-git/dsh-plugin-pub-review) - 给 DSH 插件做发布就绪审查：官方文档新鲜度检查、30+ 项静态检查并给 Ready/Not-Ready 判定、发布预检与命令引导。
- [dsh-ops-skill](https://github.com/dragon43pp/dsh-ops-skill) - 只读 DSH 运行时可靠性工具包：版本化脱敏状态契约、受保护快照、面向人工审查的升级差异与隔离回归检查；默认不使用特权 Docker。*文件夹式 Skill，不是 DSH profile bundle。*
- [dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) - 把每轮工具计数与粗粒度验证信号写入本地 JSONL，不保存提示词、工具参数或结果正文。
- [dsh-inspect](https://github.com/dsh-external/dsh-inspect) - checkup → fix → review 对抗式闭环
- [hermes-dsh-collab](https://github.com/Cavan-Ou/hermes-dsh-collab) - 把 DeepSeek Harness 接进 Hermes 管线：派单 spec 模板、模型档位路由、质量门、git 唯一写者约定，SKILL.md 技能包（bundle 可安装）。
- [dsh-alphasolve](https://github.com/dsh-external/dsh-alphasolve) - AlphaSolve 工作流
- [mstar-workflow](https://github.com/dsh-external/mstar-workflow) - 工作流引擎
- [dsh-spur](https://github.com/dsh-external/dsh-spur) - 任务引擎
- [dsh-involute](https://github.com/dsh-external/dsh-involute) - 内嵌任务管理引擎
- [fullstack-expert](https://github.com/adithya-hmt/fullstack-expert) - Cordis 原生的证据优先工程工作流层（面向编码智能体）：仓库感知的垂直切片规划（fullstack_plan）、显式通过/失败/未知证据检查（fullstack_check）、先勘察后动手的方法论、带审批门禁的敏感操作守卫与内嵌工程技能（MIT）。
- [dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) - 增量代码审查插件：checkpoint 增量队列 + Web 审查面板 + /review 命令，审查意见注入 agent
- [dsh-test-runner](https://github.com/suimi8/dsh-test-runner) - 结构化测试运行工具（test_run）：自动识别 Vitest/Jest/pytest/node:test，运行测试并为模型解析失败摘要。
- [dsh-git-branch-switcher](https://github.com/mixin-ai/dsh-git-branch-switcher) - 会话头部 Git 分支胶囊：显示当前项目分支，并可在 Web UI 中直接切换分支。
- [dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) - 工程纪律闭环：动工前盘问需求、红绿测试证据门、交付前对抗式审查、交付报告与逐维度核对。
- [dsh-plugin-diff-review](https://github.com/Civitasv/dsh-plugin-diff-review) - 浮动面板中的 Codex 风格变动审查：逐轮查看会话更改 + git 工作区全量未提交更改（暂存/丢弃/提交/推送），含历史时间线。
- [dsh-plugin-scheduled-tasks](https://github.com/Ceelog/dsh-plugins/tree/main/src/plugins/dsh-plugin-scheduled-tasks) - 按项目调度提示词，在全新的无头 Agent 会话中执行，支持单次、固定间隔和 cron 计划，并持久化运行历史。
- [dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) - DSH 的 Claude Code /rewind 等价能力：变更型工具执行前 git 优先工作区快照，轮次边界 fork 会话，一条 /rewind 命令恢复文件并把会话回退到检查点。
- [dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) - LSP 动作面：诊断、格式化、补全、代码动作、符号、签名提示、inlay 提示与重命名工具，由真实语言服务器驱动。
- [dsh-git-status](https://github.com/Wongzexu/dsh-git-status) - 专精于 Git 分支与状态处理：Git 状态浮窗，commit DAG 泳道图、未提交改动与 stash、行内 diff，右键分支/tag 切换、合并、重命名、删除、新建，一键拉取远程
- [nateEc/dsh-gitLens](https://github.com/nateEc/dsh-gitLens) - 工作区范围的 Git 图谱：历史搜索与 Diff、多 Worktree WIP 和 Agent 会话视图，以及带恢复引用的受保护 Git 操作。
- [Starfie1d1272/dsh-github-skills](https://github.com/Starfie1d1272/dsh-github-skills) - 面向 DSH 的 GitHub 工作流 Skill Pack，覆盖 PR 分诊、review 反馈、GitHub Actions 诊断和安全的 draft PR 发布，并复用已有 GitHub/Git 能力。
- [dsh-repo-context](https://github.com/qing3a/dsh-repo-context) - 把 git 状态与仓库规范动态注入 system prompt（官方 system-prompt 缝隙插件）
- [dsh-test-drive](https://github.com/PerryLink/dsh-test-drive) - 在隔离的临时 DSH_HOME 里对插件执行「安装→patch 校验→启动冒烟→卸载→清理」的自动实测，输出结构化 dsh-test-drive/v1 结果供评分管线消费。
- [JohnXu22786/github-mcp](https://github.com/JohnXu22786/github-mcp) - repogate：面向 dsh 的 GitHub 开发者工作台 MCP 服务器——仓库、issue、PR、代码审查、搜索，零运行时依赖。
- [JohnXu22786/worktree-mgr](https://github.com/JohnXu22786/worktree-mgr) - 面向 dsh 的任务隔离 git 工作区：按任务自动创建、同步与收尾隔离工作区。
- [JohnXu22786/spec-driven](https://github.com/JohnXu22786/spec-driven) - keel（龙骨）：规格驱动开发纪律技能包——先立规格、验证假设、防止过度工程与范围蔓延；为 dsh 提供技能+工具+模板。
- [JohnXu22786/adversarial-review](https://github.com/JohnXu22786/adversarial-review) - gavel-review：对抗式多视角代码审查——并行攻击视角、确定性静态哨兵、跨视角合并去重、严重度分级、抑制规则与审查历史；dsh 工具 + 独立 CLI。
- [dsh-plugin-cloud](https://github.com/AgentsDanceAI/deepseek-harness-cloud/tree/main/packages/dsh-plugin-cloud) - DSH Cloud 网关供应商：设备授权登录后，将多模型供应商条目（DeepSeek、GPT、Claude、Gemini 等）写入用户配置层；可对接托管服务或自建部署。
- [dsh-plugin-rollout-scout](https://github.com/SpookySandwich/dsh-plugin-rollout-scout) - 检测账号当前被分配到哪个对话模型：并发发起一次性探测会话，按段落开头的写法为流式思维链打分，读起来像旧模型的在数秒内中止。
- [duyanta123/arch-doc](https://github.com/duyanta123/arch-doc) - 分析代码库并生成架构文档（模块职责、依赖图、入口点、运行方式）：五阶段 runbook + 零依赖 arch-profile 扫描脚本。
- [duyanta123/dsh-preset-scaffold](https://github.com/duyanta123/dsh-preset-scaffold) - 项目初始化脚手架预设：严格五阶段流程 + 工程规范 + 六套可运行模板（node-ts / react-vite / python / go / spring-boot / monorepo）。
- [dsh-verify](https://github.com/263311487-ux/dsh-verify) - Agent 交付物的独立浏览器验收测试：JSON 规格进，真实浏览器（Chromium/Firefox/WebKit）执行出结论（PASS/FAIL + 截图证据）。MCP 服务器 + CLI + GitHub Action，兼容任意 Agent 与 CI（MIT）。
- [beijingwahw/dsh-nuke-plugin](https://github.com/beijingwahw/dsh-nuke-plugin) - 事务式卸载引擎：每个动作支持校验/预览/执行/撤销，Saga 回滚、WAL 崩溃恢复、哈希链审计、硬链接去重，并提供贝叶斯先知在执行前预测成功率（MIT）。
- [maxmilian/dsh-forge](https://github.com/maxmilian/dsh-forge) - 自建 Gitea / Forgejo 的只读工具：实例版本、仓库列表、议题与 PR 搜索和读取、PR diff，以及 Actions 运行、任务与日志。

## Security & Governance

- [zoahdev/dsh-dep-audit](https://github.com/zoahdev/dsh-dep-audit) - 依赖供应链卫生审计：peer 范围可解析性、坏 dist-tag 检测（#2763 类）、过期/缺许可证/非注册表来源依赖与安装版本漂移（CLI + `dep_audit` 工具）。
- [zoahdev/dsh-poison-guard](https://github.com/zoahdev/dsh-poison-guard) - DSH 插件安装前投毒扫描：AST（JS-X-Ray）+ 去混淆解码 + 正则启发式，拦截凭据外泄、动态执行、混淆导入与安装脚本；发现即非零退出，可作 CI 门禁。
- [dsh-vet](https://github.com/rogerdigital/dsh-vet) - 在安装前静态审计可通过 npm 获取的 DSH 插件；生成并校验开放的 `dsh-vet/v1` 报告，包含严重性、置信度、证据、派生评级、CI Action 和可审计徽章。
- [dsh-skill-pack-security](https://github.com/PerryLink/dsh-skill-pack-security) - 安全审计技能包 + plugin_vet 供应链门禁：提供密钥扫描、依赖审计、供应链评审、提示注入审查、审计编排、威胁建模、漏洞情报与事件响应八个中英双语 agent 技能，附 npm provider 包注册自动化 plugin_vet 安装前扫描。
- [dsh-encrypt](https://github.com/yauntyour/DSH-Encrypt) - DSH 凭证加密插件：密码保护的 AES-256-GCM 存储、Argon2id 密钥派生（旧版 scrypt v2 密文自动升级）与 SHA3-256 完整性校验，仅在运行时临时解密。
- [dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) - 在已配置遥测后端接收前，对 `session-telemetry/record` 导出副本中的已支持秘密模式进行脱敏。
- [dsh-yolo-mode](https://github.com/SeverusZh/dsh-yolo-mode) - 沙箱升权申请的 LLM 自动审批：预设 + 逐工具权限层级，fail-closed 兜底。
- [dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) - 审批链上的第二模型 AI 自动审查：只读审查子代理返回带理由的 allow/deny 结构化裁决，默认 fail-closed。
- [dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) - 声明式 allow/deny/ask 权限规则：在 tools/pre-execute 瀑布上匹配工具名、参数、工作区路径与 agent 身份，带会话日志审计、干跑模式与热重载。
- [dsh-orcana](https://github.com/Leo-Ayh-Oday/dsh-orcana) - 运行时治理组合包：零进展转向、证据时效完成门、能力披露，以及带资源限制、网络隔离、fail-closed 降级与有界审计日志的 Linux 沙箱加固。
- [odai-dsh-plugin](https://github.com/orziz/odai/tree/main/dsh/plugin) - 面向整个 DSH profile 的治理与责任路由，覆盖意图对齐、授权与安全边界、范围化记忆、上下文压缩和基于证据的交付门禁；兼容 DSH 0.1.1-rc.2。
- [dsh-workflow-isolate](https://github.com/Linxiushen/dsh-workflow-isolate) - 面向 DSH 0.1.0-rc.7 的替代 WorkflowEngine provider：每次运行都新建 QuickJS/WASM 运行时，仅以 JSON 桥接宿主，并限制内存、执行时限与子 Agent 扇出。
- [dsh-sfw](https://github.com/dsh-external/dsh-sfw) - 安全过滤
- [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) - 面向 DSH 插件的常驻依赖安全监控：追踪实际安装路径、OSV 漏洞、npm 发布与兼容性信号，并路由给了解项目的 DSH Agent。
- [dsh-passwords](https://github.com/slywalker2006/dsh-passwords) - 把 DeepSeek Harness 变成服务器级多租户平台：远程访问 + 自动 HTTPS、子用户权限与 token/日配额、沙箱强制、加密认证与审计日志。
- [dsh-guardian](https://github.com/cdxiaodong/dsh-guardian) - Agent 安全护栏：拦截并审计所有工具调用，命中敏感操作就要求人工确认。
- [dsh-plugin-verify](https://github.com/qing3a/dsh-plugin-verify) - 运行时行为验证 CLI：一条命令跑 mock-llm 完整 agent 循环，检查 waterfall 链与零副作用，产出可复现验证报告
- [dsh-safeguard](https://github.com/ZhijiangTang/dsh-safeguard) - 执行前护栏：拦截危险 shell 命令与密钥泄漏，阻止其运行。
- [dsh-mask](https://github.com/PerryLink/dsh-mask) - PII 脱敏中间件：在模型边界前把姓名/电话/邮箱/身份证/银行卡/密钥/地址替换为占位符，展示层还原；明文绝不入会话日志；/mask 命令 + mask_test 工具。
- [dsh-defend](https://github.com/PerryLink/dsh-defend) - 官方接缝上的提示注入 / 越狱 / 密钥泄露检测：移植自 Prompt-Injection-Payloads、Jailbreak-Detector 与 Secret-Key-Leaker-Detect 的规则 + Aho-Corasick 引擎，在用户消息、工具参数、工具结果三处按 allow/ask/block 分层拦截，附脱敏 defend/detection 审计事件、defend_report 工具与危险递归删除命令门禁。
- [dsh-perm-guard](https://github.com/a903067276-rgb/dsh-perm-guard) - 自动审批权限守卫：介于 workspace-write 与 danger-full-access 之间的中间档——信任目录内安全操作自动放行，危险操作一律人工确认；11 个分类开关可调，自带审计记录。
- [dsh-change-budget](https://github.com/Raphaelutumn/dsh-change-budget) - 可配置的逐回合修改额度，在受支持的文件修改工具执行前限制不同文件数、修改调用数与 UTF-8 载荷字节数。
- [dsh-secret-scrub](https://github.com/jkt-check/dsh-secret-scrub) - 不可逆密钥脱敏守卫：分级内置正则规则（minimal/balanced/aggressive）加自定义规则，在文本流向会话日志和模型请求的路上把访问密钥、Bearer 令牌、私钥块改写为 `[REDACTED:<category>]` 占位符；`dsh plugin add` 一键安装。
- [dsh-mood](https://github.com/Raphaelutumn/dsh-mood) - 给 AI 编程 Agent 的轻量心情指示器：把会话行为（连续失败、重复调用、活动强度）折叠成四态 Mood（顺利 / 困惑 / 受挫 / 过载），以低干扰的会话头部状态灯呈现。
- [JohnXu22786/safety-net](https://github.com/JohnXu22786/safety-net) - 破坏性命令拦截闸门：执行前解析 rm -rf / git reset --hard / push --force 并要求人工确认（dsh 插件 + 通用 CLI）。
- [JohnXu22786/secret-guard](https://github.com/JohnXu22786/secret-guard) - 阻止 agent 读写敏感文件（.env、凭据），掩码工具结果中泄露的密钥，含审计日志与安全的 sg_* 检查工具。
- [accpowered/dsh-credential-manager](https://github.com/accpowered/dsh-credential-manager) - 命名凭据管理：模型按引用使用 API key、令牌与登录凭据；秘密值以 `DSH_CM_*` 环境变量按次注入 shell 执行，绝不进入对话。
- [accpowered/dsh-auto-review](https://github.com/accpowered/dsh-auto-review) - 沙箱升级请求的 LLM 自动审查审批应答器（`'auto'` 策略下）：确定性过滤 + 清洁上下文审查模型裁决，无需人工提示，错误路径一律 fail-closed；需要打过补丁的 harness 核心（补丁见 core-patches/）。
- [dsh-capmark-gate](https://github.com/taltara/capmark) - 按声明的能力清单约束 agent：用 Markdown 编写的 `CAP.md` 声明插件可做什么，插件据此用 `tools.restrict()` 收窄 agent 可见的工具集，并在 `tools/pre-execute` 上裁决每次调用；比工具名更细的 scope 会被标记为仅供审计，而非当作强制边界。
- [dsh-agentvalet](https://github.com/AgentValet/dsh-agentvalet) - 代理式 SaaS 访问：四个工具经凭据代理调用已授权平台，每次调用签发短期断言，机器上不存任何 API key，每次调用都可由所有者审批、撤销并留存审计。
- [sofagent](https://github.com/KongFangXun/sofagent) - 提交时 agent 治理 harness：24 条确定性规则审计 git diff（密钥泄漏、越权改动、盲目修改、注入痕迹），HMAC 链防篡改历史，9 插件 DSH 家族（audit / gate / rollback / inject / ontology / evolve / commons / daemon / fde）经 SkillHub 分发。

## Output & Deliverables

- [EthanYoQ/Invoice-Downloader](https://github.com/EthanYoQ/Invoice-Downloader) - 用于本地 IMAP 发票下载、OCR 识别、归档和 Excel 报销汇总的 DSH bundle。
- [zoahdev/dsh-llms-forge](https://github.com/zoahdev/dsh-llms-forge) - 为插件仓库生成 llms.txt（package.json + README，AI 可读发现文件，默认只读，CLI + `llms_forge` 工具）。
- [zoahdev/dsh-readme-forge](https://github.com/zoahdev/dsh-readme-forge) - 为插件仓库生成 README.md（package.json + cordis.patch.yml + 源码布局，CLI + `readme_forge` 工具）。
- [stacktree-dsh](https://github.com/stevysmith/stacktree-dsh) - 连接 Stacktree MCP 服务端的 Cordis 覆盖配置（stdio 或 Streamable HTTP）：把生成的 HTML 发布到不可猜测的私有链接，客户无需账号即可打开；支持原地替换以保持链接长期有效，并可用密码或邮箱域名设置访问门槛。
- [dsh-artifacts](https://github.com/zoahdev/dsh-artifacts) - Claude Artifacts 式渲染：把 Markdown + JSON 变成自包含 HTML 文档/卡片/仪表盘/画廊（CLI + `artifact_render` 工具，零运行时依赖）。
- [folio](https://github.com/nyantused-cpun/folio) - Folio（兰亭）：咨询文档生成引擎（接案 → 记忆 → 方法论 → 交付物 → 凭证）的原生 DSH 插件栈：15 个工具、会话协议事件、L0 防护、Agent 预设；方法论包可替换，DSH 内零密钥起步。
- [dsh-report-studio](https://github.com/ciceroyang/dsh-report-studio) - 把 DeepSeek Harness 会话一键变成工作日报/周报/交接文档/公众号文章，附可验证凭据；支持跨会话聚合周报与飞书/Notion 发布。
- [dsh-trajectory](https://github.com/ciceroyang/dsh-trajectory) - 把 DeepSeek Harness 会话日志渲染成可分享的自包含 HTML 轨迹文档（回合、工具调用、Token 账本），附 SHA-256 审计戳。
- [dsh-timeline-studio-plugin](https://github.com/MartinDelophy/dsh-timeline-studio-plugin) - 将 DSH 接入 Timeline Studio，可检查 `.timeline` 工程、预演语义编辑、事务式写入，并验证 MP4 渲染结果。
- [plugin-session-export](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-session-export) - 把 append-only 会话日志导出为人可读的 Markdown/HTML，按轨迹来源（系统提示/思维链/工具调用/子 agent）分组。
- [dsh-xiaohongshu-viral-note](https://github.com/xuboboo/dsh-xiaohongshu-viral-note) - 小红书爆款笔记 agent skill 插件：热门笔记研究、选题、种草文案生成/改写、合规校验、授权账号权重分析、扫码登录与受控发布。
- [dsh-translate](https://github.com/PerryLink/dsh-translate) - DeepSeek Harness 厂商参数翻译与确定性 JSON 修复：/translate 命令映射 11 家厂商的 13 个规范参数，post-execute 修复层（含 fix_json 工具）修复工具输出中的坏 JSON 且绝不编造数据
- [inspiration-deck-workshop](https://github.com/zjsthmjialin/inspiration-deck-workshop) - 注册灵感演示工坊技能：本地静态 HTML 演示文稿（6 套 deck 模板、25+ 布局、主题与动效展示馆），带 validate 校验与 PNG/PDF 导出 CLI，零运行时依赖。
- [pdf-background-gray-codex-skill](https://github.com/zjsthmjialin/pdf-background-gray-codex-skill) - 去除扫描 PDF 的灰色/米白底色，保持分辨率、页面几何与抗锯齿文字边缘（无损 Flate 写回），核心为单文件 Python 脚本。
- [JohnXu22786/docgen](https://github.com/JohnXu22786/docgen) - 文档工坊技能包：纯提示词（Agent Skills）文档生成——README、PR 描述、changelog 与代码审查；零第三方依赖。
- [dsh-research-report](https://github.com/PerryLink/dsh-research-report) - DeepSeek Harness 可核查研究报告引擎：内容寻址证据账本（claim ↔ 快照绑定、防篡改）与版本化封存报告，每条 claim 带核查结论，manifest SHA-256 封印报告目录。

## Office & Documents

- [dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) - 为 DeepSeek Harness 打造一个真正的办公环境。Univer Office 插件将电子表格、文档、幻灯片、画布、多维表格等汇聚到同一个运行时——数据互联、修改经过校验、变更按版本管理，并以隔离工作树支持多 Agent 协作。
- [Cooberped/dsh-evidence](https://github.com/Cooberped/dsh-evidence) - 把附件变成带版本的证据：`search_documents` 在本机建立私有索引（启动探测能力，可用则 SQLite FTS5，否则回退零依赖 JS 后端），返回带精确坐标的紧凑证据块——PDF 页码、PPTX 幻灯片、text/DOCX 行区间或带引号的 XLSX `Sheet!Range`——`read_document` 仅在内容版本仍匹配时展开该坐标。中文连续段按重叠 bigram 建索引并以短语查询，保持语序；上传的栅格图片走原生视觉附件链路。
- [dsh-qingagent](https://github.com/void2anything/dsh-qingagent) - 把开源 AI 写作客户端「青简 QingAgent」接进 DeepSeek Harness：对话里起草改稿，右侧宣纸面板排版渲染（mermaid、drawio、表格、KaTeX），每处修改先摆在纸上供审阅、提交才落稿；需本机运行青简桌面客户端。

## Notifications & Channels

- [dsh-dingtalk-channel](https://github.com/ttmouse/dsh-dingtalk-channel) - 钉钉 IM 双向 channel（Stream 模式）：每条单聊/群聊驱动一个带工具的 agent，消息即入口，回复流式回到对话，免公网回调。
- [dsh-feishu](https://github.com/PGZXB/dsh-feishu) - DeepSeek Harness 的飞书 UI：面板驱动控制台，卡内审批与提问，流式卡片，扫码一键配置。
- [dsh-feishu-bot](https://github.com/dsh-external/dsh-feishu-bot) - 飞书机器人
- [dsh-feishu-notify](https://github.com/dsh-external/dsh-feishu-notify) - 飞书通知（会话结束/等待输入）
- [dsh-serverchan-notify](https://github.com/nickhelion/dsh-plugins/tree/main/packages/serverchan-notify) - Server酱3 微信推送：回合结束时推送标题、模型、项目目录、Git 分支、状态与回复摘要；支持子代理过滤，fire-and-forget 不阻塞主流程。
- [dsh-lark-meeting-notifier](https://github.com/yeruizhi/dsh-lark-meeting-notifier) - 飞书会议提醒：右侧悬浮框显示今日/明日飞书会议，多闹钟闪烁提醒。
- [dsh-rss-daily](https://github.com/shangjian2023/dsh-rss-daily) - 每日新闻简报:定时抓取 46 个精选 RSS 源,由 dsh 内已配置的模型编辑成简报(失败降级规则版),经 webhook 推送到企业微信/Telegram/Server酱/PushDeer/Bark/Gotify,错过时段自动补跑,带 Web 面板。
- [telegram](https://github.com/dsh-external/telegram) - Telegram 频道
- [dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) - Telegram 手机遥控器：附着本机正在运行的 DSH Web 会话（`/sessions` 选择、绑定/解绑），与电脑同轨迹（Codex 风格）。
- [harness-remote](https://github.com/Hyna-hla/harness-remote) - 第三方手机遥控端：局域网或 cpolar 连接电脑上的 DSH（扫码自动连接），流式聊天、审批横幅与后台高优先级推送、会话内切换模型与权限。
- [tg-bot](https://github.com/dsh-external/tg-bot) - Telegram bot
- [qqbot](https://github.com/dsh-external/qqbot) - QQ bot
- [dsh-wecom-bot](https://github.com/dsh-external/dsh-wecom-bot) - 企业微信 bot
- [dsh-weixin-bot](https://github.com/dsh-external/dsh-weixin-bot) - 微信 bot
- [dsh-weixin-clawbot](https://github.com/zp-home/dsh-weixin-clawbot) - 将腾讯官方微信 ClawBot/iLink 通道接入常驻 DSH Host，支持手机任务控制与会话管理。
- [dsh-im-hub](https://github.com/ThreeBody6666/dsh-im-hub) - 多平台 IM 网关：飞书（Lark）WebSocket 长连接（无需公网）、企业微信 AES 加密回调、Telegram 长轮询；每会话独立 agent、白名单访问、GUI 可视化设置卡片
- [dsh-overdrive](https://github.com/temotee2103/dsh-overdrive) - OpenClaw 风格多平台网关：WhatsApp / Telegram / Discord / Slack / 飞书 / 钉钉 / 企微多渠道接入，聊天内轨迹回放（/trace）、子代理与 cron 命令、原生审批按钮、一键 docker 部署。
- [dsh-im-bridge](https://github.com/MHfire/dsh-im-bridge) - 企业微信渠道桥接：WebSocket 长连接直连（无需公网），进程内 Agent + 按发送者持久会话（GUI 实时可见、可续聊），人设可定制，流式进度动画。
- [DSH-WX-Msg-Tool](https://github.com/yauntyour/DSH-WX-Msg-Tool) - 微信 ClawBot/iLink 渠道插件：在 DSH Web 扫码登录，提供消息发送、轮询与状态工具、后台长轮询，并可按发送者维持 DSH 会话后自动回复微信消息。
- [super-wechat-bridge](https://github.com/Qshuai0213/super-wechat-bridge) - 微信 iLink ClawBot 桥接：官方腾讯 iLink 协议直连，Web 设置界面（扫码登录/模型/预设/权限/会话管理含删除），24h 到期前自动推送新二维码续期，全程不断线。
- [dsh-voice-chat](https://github.com/dsh-external/dsh-voice-chat) - 语音对话
- [dsh-web-ui-notify](https://github.com/dsh-external/dsh-web-ui-notify) - WebUI 通知
- [dsh-notification-sounds](https://github.com/qq33357486/dsh-notification-sounds) - 跨平台浏览器音频提醒：DSH 需要用户操作时播放中文“任务等待”，任务完成时播放“任务完成”。
- [dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) - Windows 通知，零依赖
- [dsh-notify-win](https://github.com/Andyqwe44/dsh-notify-win) - 原生 Windows toast + 任务栏闪烁，任务完成/审批/提问时触发，支持 Win10/11，npm 安装 `dsh plugin --profile web add dsh-notify-win`
- [dsh-ica](https://github.com/dsh-external/dsh-ica) - icalingua 前端
- [dsh-opencode-server](https://github.com/dsh-external/dsh-opencode-server) - opencode attach 丝滑 TUI
- [dsh-teamwork](https://github.com/dsh-external/dsh-teamwork) - 团队协作（cordis）
- [plugin-notify](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-notify) - 回合完成/出错/需审批时发 IM webhook 与本机通知（飞书/企微/钉钉/Slack/Discord/自定义）。
- [dsh-monitor](https://github.com/AbnerAI/dsh-monitor) - 常驻后台监视器（文件收件箱/命令输出）：新消息一到即唤醒 Agent，是 Claude Code Monitor 工具的 Harness 对应实现。
- [dsh-island](https://github.com/cdxiaodong/dsh-island) - 通过 Unix socket 把 DSH agent 的会话、工具调用与审批实时桥接到 CodeIsland macOS 刘海面板，可直接在面板上批准/拒绝。
- [february2015/dsh-dingo](https://github.com/february2015/dsh-dingo) - 多对话并行的声音提醒 + 对话直达：当前对话当/当当（crisp 清脆档），其他对话叮/叮叮（soft 柔和档）+ 右上角小卡片，点一下直达对应对话。

## Fun & Lifestyle

- [dsh-chinese-poetry](https://github.com/runcat-tommy/dsh-chinese-poetry) - 免 token 诗词查询插件：会话页头「诗词」标签页，支持搜索/筛选/飞花令/每日一首/收藏/节日专题/分享卡片图，AI 解读复用 DSH 会话（不自动提交）。
- [dsh-whale-companion](https://github.com/LeemanCheung/dsh-whale-companion) - 可拖拽的鲸鱼伙伴，提供本地成长、成就、皮肤和隐私安全的活动统计。
- [dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) - 元气鲸鱼娘桌宠：摸头养成、工作状态联动、494 条台词与 30 项成就，自带设置面板，全本地、零遥测。
- [dsh-clippy](https://github.com/sjh9714/clippy-harness) - Clippy 复活为办公室助理宠物：对真实 agent 状态做出反应，失败回合弹出经典「非法操作」对话框。
- [dsh-agent-rp](https://github.com/dsh-external/dsh-agent-rp) - SillyTavern 迁移与下一代 DSH Agent RP。
- [dsh-emoji](https://github.com/dsh-external/dsh-emoji) - emoji 插件（cordis）。
- [dsh-travel-plugin](https://github.com/dsh-external/dsh-travel-plugin) - 旅行小插件。
- [dsh-weather](https://github.com/sunshine-lang/dsh-weather) - 天气工具：实时天气与多日预报，数据来自 Open-Meteo（免费，无需 API key）。
- [dsh-pdf](https://github.com/sunshine-lang/dsh-pdf) - PDF 工具箱：基于 pdfjs-dist 提取文本、元数据与页码范围（本地解析，无需 API key）。
- [dsh-ui-whale](https://github.com/dsh-external/dsh-ui-whale) - 像素鲸鱼伙伴（眨眼/摆尾/喷水/爱心）
- [dsh-muyu](https://github.com/liuwenji007/dsh-muyu) - Web 右下角电子木鱼：点头记本会话功德；模型思考或流式输出时会自动敲。
- [dsh-vibegap](https://github.com/ktao732084-arch/dsh-vibegap) - Agent 等待间隙背单词:agent 持续运行约 18 秒后 Web 右下角浮现拼写单词卡,会话完成或等待输入时自动收起;可与本机 VibeGap 桌面端共享词书与进度。
- [dsh-pet](https://github.com/FlytoMAYDAY80/dsh-pet) - 桌面小鲸鱼，实时感知会话状态
- [dsh-desk-pet](https://github.com/anneheartrecord/dsh-desk-pet) - 用真的置顶窗口而不是页面挂件实现的 macOS 桌宠：六种状态跟着本地 DSH 走，原生右键菜单，自带的 skill 把一张照片变成整套十八个姿势的皮肤。
- [dsh-pet-rs](https://github.com/dsh-external/dsh-pet-rs) - 桌宠 Rust 版
- [dsh-stickers](https://github.com/dsh-external/dsh-stickers) - 贴纸
- [dsh-ads](https://github.com/dsh-external/dsh-ads) - 2005 中文站风格广告层（整活）
- [dsh-gomoku](https://github.com/dsh-external/dsh-gomoku) - 五子棋
- [dsh-qq2006](https://github.com/dsh-external/dsh-qq2006) - QQ2006 皮肤
- [dsh-lazyfish](https://github.com/dsh-external/dsh-lazyfish) - 摸鱼面板（信息流 + B 站）
- [dsh-tavern-plugin](https://github.com/dsh-external/dsh-tavern-plugin) - 小酒馆角色卡
- [ui-status-label](https://github.com/dsh-external/ui-status-label) - 鲸鱼娘思考状态自定义标签（cordis）
- [dsh-digipet](https://github.com/swaylq/dsh-digipet) - 数码宝贝式养成宠物：孵蛋、吃真实工作长大（回合、工具、报错都算营养），按工作方式走四条进化路线；零 token、纯命令交互。
- [dsh-wildmon](https://github.com/swaylq/dsh-wildmon) - 宝可梦式捕捉收集：回合、工具、报错刷出野外遭遇，投球捕捉、集 28 格图鉴、组 6 只队伍；零 token、纯命令交互。
- [dsh-survival](https://github.com/Socialist-Sister/dsh-survival-mode) - Minecraft 生存玩法 Agent 预设：引擎硬结算生命/饥饿/昼夜/怪物，原版配方合成解锁高级工具，铁砧修复，浏览器状态栏；按官方预设插件规范构建。
- [xiekai886/dsh-MusicPlayer](https://github.com/xiekai886/dsh-MusicPlayer) - 可折叠/展开、自由拖动的悬浮音乐播放器，接入网易云音乐，支持歌单导入和按歌名或歌手搜索单曲导入，边对话边听歌。
- [zoahdev/dsh-subscribe](https://github.com/zoahdev/dsh-subscribe) - Steam 式插件市场：网页一键订阅，一条命令同步到 dsh profile；500+ 社区插件，带验证精选，零依赖 CLI。
- [dsh-vibe-pack](https://github.com/LeemanCheung/dsh-vibe-pack) - 仅数据的事务式配置包管理器，提供完整性、归属、预览、差异和回滚保护。
- [Luaphes/dsh-plugins-market](https://github.com/Luaphes/dsh-plugins-market) - DSH Web UI 内插件市场：全量嗅探 dsh-plugin topic，过滤蹭标签噪音，保留人工精选标记，支持排序/搜索/语言过滤与一键安装（安装前校验 dsh.bundle 声明）。
- [dsh-pianist](https://github.com/Laplace-bit/dsh-pianist) - 钢琴演奏：让 Agent 在 Canvas2D 三角钢琴上弹奏点播曲目，Salamander Grand 真实采样音色，沉浸式舞台，88 键可弹。
- [dsh-blackjack](https://github.com/yul761/dsh-blackjack) - 对话里的 21 点牌桌：每日免费手数赢 CHIP，可单向兑换为模型额度，只在你自己配置的额度耗尽时由续命路由接管那一次失败的请求；奖池由运营者出资，服务端与可审计的账本同仓开源。

- [weibaohui/dsh-xiuxian](https://github.com/weibaohui/dsh-xiuxian) - 修仙陪伴：MC 像素风桌宠与 agent 会话实时联动，子代理启动时化身宠物现身（最多 3 只同屏），储物袋收藏、右键法宝菜单、图鉴选宠，可导出 Codex 桌宠格式。

## Plugin Ecosystem & Development

- [SunQingyuan0/Kabutack](https://github.com/SunQingyuan0/Kabutack) - 基于角色的 DSH 插件 / Skill / MCP 管理器：把能力组合定义为“角色”，在 Web 设置页一键动态装载与切换。
- [dsh-workbench](https://github.com/staff-os/dsh-workbench) - DSH 企业级工作台：在运行中的会话里统一管理 AI 员工、知识库、技能、MCP 服务器与 DSH 插件。
- [dsh-plugin-bench](https://github.com/B1lli/dsh-plugin-bench) - 证据化、类型感知的 DSH 插件质量评测：按 artifact 与完整 commit 绑定八维质量区间和证据账本，输出 Markdown/SVG 评分卡；Stars 与身份不计分。
- [zoahdev/dsh-quality-score](https://github.com/zoahdev/dsh-quality-score) - 插件质量评分卡：0-100 分 + 等级 + 六项分项（manifest、peer 可解析、dist-tag 健康、死依赖、新鲜度、dsh-tools peer 兼容），逐项修复建议，支持批量榜单（CLI + `quality_score` 工具）。
- [zoahdev/dsh-plugin-doctor](https://github.com/zoahdev/dsh-plugin-doctor) - DSH 插件体检：manifest/patch/entry/build/pack/install 校验、可被模型调用的 plugin_check、profile 宿主遮蔽与 BOM 检测、环境诊断、供应链投毒预检。
- [oneinitAI/dsh-thunderforge](https://github.com/oneinitAI/dsh-thunderforge) - 一站式插件开发 Bundle：清洁室 LLM 载荷捕获、三层开发知识库（vendor 自 dsh-plugin-dev-skills 与 dsh-plugin-guide）、生成即冒烟的对话式脚手架、双数据源轨迹瀑布（会话日志 × capture，内置 dsh-replay 引擎）、带保护的开发 preset（内置 dshp）。
- [dsh-plugin-starter](https://github.com/ciceroyang/dsh-plugin-starter) - 一条命令生成实战验证过的 DSH 插件工程（bundle、工具、运行时 skill、单测、CI），零依赖免构建，带 --verify 冒烟。
- [menotbobbybrown/create-dsh-app](https://github.com/menotbobbybrown/create-dsh-app) - DeepSeek Harness Agent 与插件的一行命令脚手架生成器。
- [Code2Skill](https://github.com/leechen298/Code2Skill) - 从用户授权的源码生成 Function、MCP 工具、工作流 Skill 与离线测试包。
- [dsh-movein](https://github.com/sjh9714/dsh-movein) - 预览并将 Claude Code、Codex 与 OpenCode 的受支持配置迁入 DSH，涵盖技能、命令、代理、指令与 MCP 服务，支持 OpenCode V1/V2 JSONC 与目标冲突保护。
- [sandbase-skills](https://github.com/sandbaseai/sandbase-skills) - 经校验的 SKILL.md 目录与安装器，为 DSH 和兼容 Agent 提供 88 个可安装技能包。
- [dsh-plugin-store](https://github.com/sandbaseai/dsh-plugin-store) - DSH 设置页原生插件市场，支持按搜索和标签浏览社区目录、安装插件并查看已安装包。
- [DshMarketPlace/dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store) - 装在 DSH 内的双语插件目录：提供 `/store`、设置页、Agent 搜索/安装工具和随包发现 Skill，并在安装前展示风险项、请求确认。
- [dsh-hmz](https://github.com/dsh-external/dsh-hmz) - 占位仓库，描述待补充。
- [dsh-interpreters](https://github.com/dsh-external/dsh-interpreters) - 解释器插件（cordis）。
- [dsh-notebooks](https://github.com/dsh-external/dsh-notebooks) - notebooks 插件（cordis）。
- [dsh-plugin-radar](https://github.com/dsh-external/dsh-plugin-radar) - DSH 插件兼容性雷达，原 dsh-external-research 改名。
- [dsh-scout](https://github.com/dsh-external/dsh-scout) - scout 插件（cordis）。
- [dsh-share](https://github.com/dsh-external/dsh-share) - DSH 对话分享插件。
- [maxmilian/dsh-sonarqube](https://github.com/maxmilian/dsh-sonarqube) - 唯读 SonarQube Community Build 集成：查询 Quality Gate、Issue、Security Hotspot、覆盖率与项目指标，并提供源文件及行号定位。
- [plugin-registry](https://github.com/dsh-external/plugin-registry) - 插件控制台 + make-dsh-plugin skill + 开发指引
- [dsh-plugin-manager-registry](https://github.com/Jesse-njx/dsh-plugin-manager-registry) - 离线容错的插件注册表，聚合并去重 awesome 列表、GitHub Topic 与 npm 中的 DSH 插件。
- [marisa](https://github.com/dsh-external/marisa) - 外部插件管理器（寄生安装/CLI/设置页面板）
- [hub](https://github.com/dsh-external/hub) - 全组织分类索引 + 统一 catalog.json（CI 自动生成）
- [dshx-update-check](https://github.com/dsh-external/dshx-update-check) - 插件更新检查
- [toybox](https://github.com/dsh-external/toybox) - MCP 插件集（almanac/bug-tamer/命名大师/时间胶囊等）
- [dsh-github-integration](https://github.com/dsh-external/dsh-github-integration) - GitHub 集成插件
- [dsh-super-injector](https://github.com/dsh-external/dsh-super-injector) - super-injector 插件（cordis）
- [dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) - MCP 服务器管理器：设置页添加服务器，OAuth（PKCE + 动态客户端注册）或静态 token 认证，工具注册为 mcp__<name>__*
- [dsh-mcp-skill-panel](https://github.com/lilyblessing/dsh-mcp-skill-panel) - MCP 与技能管理面板：MCP 服务器与 Skill 目录实时启停以释放上下文占用；可选 AI 中间层（mcp_search/mcp_call）按 server 状态过滤模型可见性
- [dsh-recommend](https://github.com/zp-home/dsh-recommend) - 插件透明排行与推荐：每日自动抓取 dsh-plugin 话题生态、公开评分模型，提供榜单/搜索/推荐工具与设置页排行榜。
- [dsh-capability-index](https://github.com/777-Zen/dsh-capability-index) - 插件库起飞前检查单：任务型请求时注入 Top-K 适用插件提示（带作者声明的 use_when/not_for 能力声明），让插件库利用率可预期、不靠运气。
- [dsh-eval](https://github.com/hccccc01333/dsh-eval) - Agent 评测平台：benchmark YAML、headless dsh 运行、trace 指标、脚本化评分与 run 对比/报告。
- [dsh-suite](https://github.com/whyihaveyou/dsh-suite) - DSH 插件活目录（785+ 插件，每小时刷新）+ 每日兼容性 CI + 中英双语可搜索目录站 + 内置插件商店。
- [dshget-data](https://github.com/bobby-sheng/dshget-data) - [DSH Get](https://www.dshget.com/) 的公开标准化目录快照；提供 2,460 个 DeepSeek Harness 插件的中英双语搜索、分类、安装命令和来源标注。
- [Awesome DeepSeek Harness Plugins](https://github.com/web-casa/Awesome-DeepSeek-Harness-Plugins) - 由 [cordis.run](https://cordis.run) 维护的公开 Cordis 插件索引，从已发布记录生成，提供每个插件的安装命令和安全状态链接。
- [create-dsh-plugin](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/create-dsh-plugin) - 秒建 DSH 插件脚手架（tool/events/webui 模板、锁 `next` 版本、内置 `--verify` 冒烟验证）。
- [plugin-manager](https://github.com/whyihaveyou/dsh-suite/tree/main/packages/plugins/plugin-manager) - DSH Web UI 内置插件应用商店：目录浏览/搜索/一键安装/兼容徽章/已装列表。
- [dsh-genie](https://github.com/swaylq/dsh-genie) - 把 `cordis_define` 的动态包固化为可跨重启存活的正式组合包；写包与注册 profile 层均不需要 pnpm、联网或构建授权。
- [dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) - 插件开发知识库，作为按需加载的智能体技能：官方约束、任务工作流、API 参考与社区踩坑。
- [dsh-popper](https://github.com/1473382/dsh-popper) - 证伪驱动的智能体会话修正循环：高风险操作前先提交可检验主张，确定性 gate 验证结果；主张被证伪后强制给出互斥替代假设并各配判别性实验，全部事件进入只追加的证据账本。
- [awesome-dsh](https://github.com/stakeswky/awesome-dsh) - `dsh-plugin` topic 全量目录，自动更新（2600+ 仓库）：Cloudflare Worker 每 6 小时重新抓取，用 Workers AI 把英文简介译成中文，并提供相关度检索 API 与按需查找、安装插件的智能体技能。
- [dsh-score](https://github.com/PerryLink/dsh-score) - DSH 插件多维质量评分：五维（安装成功率/维护活跃度/文档完整性/安全扫描/协议合规）评分卡与总分，/score 命令与排行榜报告；安装证据预留消费 dsh-test-drive 的结构化实测结果。
- [dsh-blueprint](https://github.com/taltara/mddl-harness) - Web 客户端的 Blueprint 标签页：读取 harness 实际启动的配置、对运行中的插件树做 lint，并在带标记的托管块内写入 `cordis.patch.yml` 覆盖层，支持快照与一键恢复。若某行引用了 profile 无法加载的包，则拒绝写入——那会导致整个 harness 无法启动，而不只是禁用一行。
- [LLYlab/DSHEssentialTools](https://github.com/LLYlab/DSHEssentialTools) - 常驻型 DeepSeek Harness 插件：项目运行与代码查看、程序快照、带消息微版本的 VTD 对话树（编辑 / 重试 / 分支），以及 DET 功能管理器与全局插件开关。
- [dsh-plugin-runcat-inventory](https://github.com/runcat-tommy/dsh-plugin-runcat-inventory) - 逃咪-插件总览（Runcat Plugin Overview）：更好用的 DSH 插件列表 —— 表格视图、状态过滤、启用/停用开关（HMR 热生效）、配置查看/复制、中英双语界面。

- [duyanta123/dsh-repo-scanner](https://github.com/duyanta123/dsh-repo-scanner) - 只读仓库事实扫描内核：为分析型插件提供可复现的仓库探测、文件索引、模块、依赖、入口点、符号与 Git 变更基线等硬事实（CLI + 库接口 + 技能 runbook）。
- [dsh-darwin](https://github.com/que3sui/dsh-darwin) - 双插件自进化闭环：dsh-sentinel 机械挖掘会话日志中的重试环、工具错误簇、高频中断与 token 浪费，生成结构化问题工单；dsh-forge 把工单合成候选技能，经评测门与人工确认才晋级到 `.dsh/skills`，并支持确定性回滚。

## Runtime & Operations

- [ianho7/dsh-port-inspector](https://github.com/ianho7/dsh-port-inspector) - Windows 本地开发端口来源追踪与已验证 DSH 服务的安全处理。
- [Ghost011118/dsh-plugin-governor-extension](https://github.com/Ghost011118/dsh-plugin-governor-extension) - 基于补丁的 DSH 插件治理扩展：提供插件清单与白名单控制、策略试运行、运行时工具调用准入规则，并通过 dsh-autostart 实现受控重启和自动回滚。
- [fakechris/dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) - DSH 自愈运维工具箱：官方每日快照 A/B 双槽轮换（旧插件自动迁移 + 验收门禁原子切换 + 一键回滚）、10s 守护自动拉起 web 并续接被打断的回合，以及 web/agent 全挂时的 out-of-band dsh-doctor（诊断 → 机械修复 → LLM 深度修复 → 拉起）。
- [zoahdev/dsh-disk-audit](https://github.com/zoahdev/dsh-disk-audit) - dsh 数据目录磁盘占用审计：总大小、按目录拆分、最大文件、超大文件告警（会话日志可达数百 MB）与清理建议（CLI + `disk_audit` 工具）。
- [zoahdev/dsh-cn-boot](https://github.com/zoahdev/dsh-cn-boot) - 国内网络引导：探测 npm/npmmirror/GitHub/HuggingFace/Gitee 与本地代理，推荐镜像/代理并生成 PowerShell + bash 引导脚本（CLI + `cn_boot` 工具）。
- [zoahdev/dsh-firstrun](https://github.com/zoahdev/dsh-firstrun) - 首次运行体检：Node/pnpm/dsh 工具链、profile、API Key（只显示名称）、工作区与注册表，附下一步建议（CLI + `quickstart` 工具）。
- [zoahdev/dsh-trace](https://github.com/zoahdev/dsh-trace) - 聚合可观测仪表盘：解码 sessions 根目录下的每个 `session.jsonl.zstd`，把 token/工具/错误/延迟渲染成一张自包含 HTML 报告（零依赖）。
- [dsh-launch](https://github.com/Khellendros97/dsh-launch) - 在独立 broker 进程中监督长驻服务（dev server、watcher、mock API），服务在对话回合结束、会话关闭、DSH 重启后继续运行；自带 Service 侧边栏 tab（经 better-sidebar 扩展 API 注入）与 service_start/stop/restart/list/logs 模型工具。
- [dsh-env-switcher](https://github.com/Oyama-Mahiro-F/dsh-env-switcher) - Windows/WSL2 双环境一键切换插件（共存模式）：两个 DSH 实例分别在 3080/3081 端口同时运行，Web UI 内一键切换，不杀任何进程。
- [dsh-payload-capture](https://github.com/moeblack/dsh-payload-capture) - 捕捉每一次上行模型 API payload 存为 JSON（调试与观测）
- [dsh-doctor](https://github.com/ciceroyang/dsh-doctor) - DeepSeek Harness 本地环境一键体检：node/pnpm/dsh 版本、端口 3080、DSH_HOME 可写性、profile 清单、多帧会话日志健康扫描、dsh-doctor/v1 信封。
- [dsh-observation-journal](https://github.com/Cavan-Ou/dsh-observation-journal) - 把 DeepSeek Harness 的零侵入运行事实遥测：每个会话自动把任务/模型档位/工具/失败/时长/状态写入人机共读观测卡并附统计区（纯观察者——零工具、零 LLM、零注入）。
- [Oscar-Williams/dsh-deepcanary](https://github.com/Oscar-Williams/dsh-deepcanary) - 面向 DeepSeek Harness 的证据优先注意力监督：提供 C0–C3 策略、去重 Inbox 提醒、静默时段和脱敏结果记录。
- [sandbase-harness](https://github.com/sandbaseai/sandbase-harness) - 通过原生 bundle 与 stdio MCP 接入 DSH 的持久化托管 Agent 运行时，提供沙箱会话、审计与回放。
- [dsh-workloads](https://github.com/yewenyell-lang/dsh-workloads) - 为 DeepSeek Harness 提供工作区级持久进程托管、就绪检测与运行中心。
- [dsh-doctor](https://github.com/asdf17128/dsh-doctor) - Profile 体检：检出 patch 整体替换 config 而丢失的字段、指向不存在 entry id 的 patch，以及工具重名冲突。
- [chouyong/dsh-effect-doctor](https://github.com/chouyong/dsh-effect-doctor) - 隔离插件卸载后验证 Cordis 管理的运行时资源是否回到基线，并生成确定性清理回执。
- [dsh-xray](https://github.com/alloevil/dsh-xray) - DSH 组成透视：把每个已启动的行归因到引入它的层，比对声明树与实际树（揪出被 dsh 静默跳过的 patch 行），提供服务依赖图与级联停用、逐插件生命周期健康、工具 schema 的 token 成本，并对树外插件做启发式能力审计；静态命令在 dsh 无法启动时也能运行，`xray_composition` 工具让 agent 自省自身能力集。
- [dsh-portable-launcher](https://github.com/15828148/dsh-portable-launcher) - dsh Web UI 的 Windows 一键便携启动器：自动安装 Node.js 和 dsh，国内镜像回退，重试与断点续传。
- [dsh-desktop-launcher](https://github.com/becomeless/dsh-desktop-launcher) - Windows 桌面启动器：双击图标一键启动 dsh Web（无命令行窗口，关窗即停、会话续接），一行命令安装。
- [dsh-quickstart](https://github.com/qzhqzh/dsh-quickstart) - Windows 桌面启动器（零依赖 npm CLI）：双击桌面快捷方式无窗口启动 dsh web，就绪后自动打开浏览器。
- [oxgbl/dsh-no-cmd-launcher](https://github.com/oxgbl/dsh-no-cmd-launcher) - Windows 后台启动器：无命令行窗口运行 DSH Web，提供桌面启动/停止快捷方式及 npm/CLI 安装。
- [dsh-win32](https://github.com/sjh9714/dsh-win32) - 无需 WSL 的 DSH 原生 Windows shell 与 Workspace Write 沙箱预设，沙箱会话使用 busybox-w32，非受限会话使用 Git Bash，并提供安装诊断。
- [dshp](https://github.com/asdf17128/dshp) - Profile 管理器：列出/新建/克隆/对比 profile，并把整套配置（bundle 顺序、插件版本、patch）导出为单个可移植文件。
- [dsh-session-cleaner](https://github.com/fountunt/dsh-session-cleaner) - 无需重启即可删除运行中 Web 运行时里的会话：实时存储、工作区记录与磁盘工件一并清理。
- [dsh-session-cleaner-cli](https://github.com/ChenChen913/dsh-session-cleaner-cli) - 工作区会话离线深度清理 CLI：交互/批量删除（回收站+恢复+自动备份）、工作区账目与投影缓存同步、幽灵条目修剪，与运行时删除插件互补。
- [dsh-restart](https://github.com/anweat/dsh-restart) - DSH 重启插件：可配置的重启方式（Node 原生/旧 PowerShell 适配）、重启后自动继续的提示词、可选看门狗自动拉起。
- [dsh-tray](https://github.com/KAIbsb/dsh-tray) - Windows 托盘管理器:启动/重启/停止 DSH Web、崩溃自动拉起、状态图标与开机自启。
- [dsh-tray-launcher](https://github.com/fancr-code/dsh-tray-launcher) - Windows 桌面托盘启动器：无窗口运行 dsh web，托盘右键切换图标（梁祖/鲸鱼娘/DeepSeek/自定义，托盘与快捷方式同步），退出即全退，npm 一行命令安装。
- [dsh-dock](https://github.com/UnknowCao/dsh-dock) - Windows 桌面启动器插件：预编译鲸鱼 exe 双击全屏打开 DSH Web UI（token 健康闸、冷启动卡片），侧栏「更多」菜单提供 设置/重启/完全退出——退出自动关窗并停止服务器。
- [mirage-dsh](https://github.com/strukto-ai/mirage/tree/main/typescript/packages/dsh) - 把文件系统与 bash 提供者换成 mirage 虚拟工作区：文件工具与 shell 命令作用于挂载的资源（RAM、S3、Redis、Slack、Gmail、Notion、Postgres）而非宿主磁盘，支持按挂载点设置读/写/执行模式、按命令选择沙箱（进程内 monty、pyodide、quickjs；远程 docker、e2b、daytona），并可在虚拟终端中安装 CLI（git、gh、slack、linear、ntn、gws，或自行注册的程序树）作为命令头词。
- [loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) - DSH 的 OpenTelemetry GenAI 调用链插件：每轮生成一棵 span 树（步骤、带 TTFT 的 LLM 调用、工具执行、token 用量），通过标准 OTLP 上报到任意兼容后端，正文采集默认关闭。
- [dsh-observe](https://github.com/PerryLink/dsh-observe) - DSH 的可观测性导出器：session/event 流转为 OTLP 与 Langfuse 的 turn/step/tool/LLM span 与 token/成本指标，带脱敏 prompt/completion 采集、异步批量、有界持久离线缓冲与退避重试——默认关闭。
- [dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) - 把整套 DSH 配置一键备份/导出/导入/迁移为单个便携 ZIP，新机器上一步还原（Host 引擎 + Web UI 双面 Cordis 插件）。

- [dsh-backup](https://github.com/xiaoyuyu6420/dsh-backup) - 一键备份与恢复 ~/.dsh 用户数据：/backup 命令族 + backup_dsh 工具 + Settings 面板，sha256 校验与加固的恢复条目审查（路径穿越/symlink 拒绝），重启不重置节奏的定时自动备份、轮换、本机下载路由与私有仓库 GitHub 同步。
- [dsh-fast](https://github.com/PerryLink/dsh-fast) - 只读零侵入性能诊断：会话加载耗时/spill 命中/压缩统计/上下文注入体量/缓存命中率，/fast 命令与 fast_report 工具，异步采样不占模型路径。
- [ClawMetry](https://github.com/vivekchand/clawmetry) - 本地零配置仪表盘：读取 dsh 会话日志，展示会话记录、token 用量、成本与工具调用。
- [Zn-Dk/dsh-session-repair](https://github.com/Zn-Dk/dsh-session-repair) - 诊断并安全修复损坏的 DSH 会话历史：raw zstd/JSONL 工件校验（header、seq、tool-call ID、turn/step 闭合）、空 tool-call ID 链的确定性修复、单槽 pre-repair 备份与恢复、审计记录。
- [JohnXu22786/hooks-adapter](https://github.com/JohnXu22786/hooks-adapter) - 通用 hooks 兼容层：在 dsh 上运行 Claude Code / Codex / opencode 配置中声明的 hooks。
- [maxmilian/dsh-grafana-query](https://github.com/maxmilian/dsh-grafana-query) - 面向 Grafana 的只读工具，经数据源代理：实例健康、数据源列表、instant 与 range PromQL 查询、当前告警状态与已配置的告警规则。
- [maxmilian/dsh-sentry](https://github.com/maxmilian/dsh-sentry) - 面向 Sentry 的只读工具：项目列表、议题搜索与详情，以及最新或指定 event 的裁剪堆栈——局部变量、请求数据与疑似机密的 tag 会被移除。
- [dsh-circuit-breaker](https://github.com/pricklywiggles/dsh-circuit-breaker) - 确定性循环保护：拒绝以相同参数重复的工具调用，并限制单个 agent 的调用总数，由模型之外的代码强制执行；事件日志可让父 agent 中断卡住的子 agent。
## Domain & Specialist Skills

- [dsh-mimir](https://github.com/1692775560/dsh-Mimir-Academic-research) - 科研全周期工作台（七视图 Web 面板）：arXiv 搜索/导入/订阅 + AI 相关度评分、Zotero 导入、实验记录与 SSH/GPU 远程作业、LaTeX 边改边编译工作室（11 种顶会模板+快照回滚）、图表统一管理、一键生成带论文原图的组会 PPT；内置 10 个科研 skills（npm：`dsh-mimir`）。
- [dsh-fund-research](https://github.com/PerryLink/dsh-fund-research) - 中国公募基金确定性研究报告：公开源数据采集（天天基金/东方财富）、纯函数指标计算（业绩拆解/持仓穿透/风格归因/经理画像），版本化报告附逐数字可回溯源快照的附录。
- [weopenfire-git/dsh-market-quote](https://github.com/weopenfire-git/dsh-market-quote) - A股/港股/美股实时行情与历史K线查询工具插件，腾讯免费公开源（免 key），只读。
- [pengpengyi92/dsh-quant](https://github.com/pengpengyi92/dsh-quant) - Agent-native 量化研究工具箱：59 工具 · 6 域（数据/因子/ML/风控/执行/生态），一条管线跑通 PDAT→PET。
- [maddogfinance/dsh-trading](https://github.com/maddogfinance/dsh-trading) - 只读交易研究工作台插件：带类型的行情数据接缝（可自带数据源）、多周期指标 regime 快照、dsh web 交互式 K 线卡（模型标注需溯源且经价格区间校验）、以及在 pre-execute 门拦截下单形工具调用的 risk-guard。
- [dsh-trading-toolkit](https://github.com/kentleenot/dsh-trading-toolkit) - DSH agent 的 A股/美股交易工具箱：实时行情、OHLCV K线、ADX 三状态市场分类信号与简易回测预览，数据源东方财富。只读设计，永不下单。
- [LAU-MARS/dsh-cad](https://github.com/LAU-MARS/dsh-cad) - CAD 查看器与 OCCT 参数化建模工具（图元、拉伸、布尔、圆角、工程图、装配），Web UI 内交互式 3D/2D 面板，支持 STEP/STL 导出。

- [gongyijie85/mattpocock-skills-dsh](https://github.com/gongyijie85/mattpocock-skills-dsh) - Matt Pocock 完整发布技能集（25 个 SKILL.md：grilling、writing-for-agents、wait-what、TDD、code-review、wayfinder、ask-matt 路由）的 DSH 移植。
- [gongyijie85/mattpocock-skills-dsh-zh](https://github.com/gongyijie85/mattpocock-skills-dsh-zh) - Matt Pocock 25 个技能正文全译中文（技术术语保留英文并附注释）。
- [gongyijie85/dsh-ponytail](https://github.com/gongyijie85/dsh-ponytail) - Ponytail 最懒资深工程师模式：6 个技能，改编自 DietrichGebert/ponytail。
- [oneinitAI/dsh-buddy](https://github.com/oneinitAI/dsh-buddy) - 用户画像自适应表达技能：从对话构建熟练度、领域差距与当前状态画像，并据此调整回答深度、术语密度和步骤粒度；支持导出透明画像快照。
- [gongyijie85/dsh-ecc](https://github.com/gongyijie85/dsh-ecc) - ECC（227k⭐ 操作员系统）273 个技能（95.8%）分四批移植到 DSH。
- [dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) - 费曼学习法插件：讲解 → 复述 → 判定 → 回讲教学闭环，富 HTML 教学卡片（mermaid 图 + shiki 代码高亮）。
- [zotero-harvest](https://github.com/dsh-external/zotero-harvest) - Zotero 文献库接入
- [zotero-wave-rag](https://github.com/dsh-external/zotero-wave-rag) - Zotero RAG 检索
- [dsh-data-agent](https://github.com/dsh-external/dsh-data-agent) - 让 AI 连数据库、写 SQL
- [dsh-news-plugin](https://github.com/canghai666x/dsh-news-plugin) - RSS 新闻采集工具：抓取 10+ 中英文源为结构化条目（标题/链接/来源/时间/摘要），逐源超时，供模型评分筛选与编排简报（cordis）。
- [dsh-news-briefing](https://github.com/canghai666x/dsh-news-briefing) - 新闻早晚报 Skill：五维评分筛选（故事性/时代感/深度性/趣味性/独特性）、反标题党铁律、Tier 内容偏好、去 AI 味中文写作规范。
- [dsh-web-novel-research](https://github.com/canghai666x/dsh-web-novel-research) - 中文网文剧情检索 Skill：免费转载站工作流（GBK 解码、跨卷同名章节消歧、多源断更验证），不依赖起点等付费站。
- [easyeda-agent](https://github.com/zhoushoujianwork/easyeda-agent) - 嘉立创EDA专业版(EasyEDA Pro)自动化：Go daemon + 编辑器内连接器 + agent skill + stdio MCP server，typed 原理图/PCB 动作、流程门禁与 DRC。
- [dsh-stock-market](https://github.com/dsh-external/dsh-stock-market) - 沪深 A 股行情数据插件。
- [dsh-us-stocks](https://github.com/Realyujie/dsh-us-stocks) - 美股行情、历史 K 线、财务报表、分析师共识与新闻，基于 yahoo-finance2。
- [dsh-openmaic](https://github.com/dsh-external/dsh-openmaic) - 生成 OpenMAIC 交互式 AI 课堂。
- [dsh-science](https://github.com/biociao/dsh-science) — 面向 DSH 的 Claude Science 式科研工作台：ReAct 研究循环引擎（research_* 工具）、带溯源的版本化工件（artifact_* 工具）与面向基因组/病原体/生物信息的 10 个科研技能。
- [dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) - 完整 reverse-skill（85 个 SKILL.md）的 DeepSeek Harness 插件：逆向工程、授权渗透测试与安全研究技能路由包。
- [dsh-grok-geo](https://github.com/xuboboo/dsh-grok-geo) - GEO 品牌审计 skill 插件：覆盖 17+ AI 搜索引擎（ChatGPT/Perplexity/Claude/豆包/DeepSeek/Kimi/文心一言）的 AI 搜索可见性、推荐、引用、竞品对比与内容缺口诊断。
- [Haniubub/seo-toolkit](https://github.com/Haniubub/seo-toolkit) - SEO 审计技能：面向 DSH 的完整本地与技术 SEO 审计——确定性 Python 测量（53 个脚本 + lib/）、LLM 判断（24 个子技能 + 18 个 Agent）、加权评分、按业务类型门控的多 Agent 扇出、schema.org、E-E-A-T、GBP、GEO/AI 概览。
- [dsh-rigorquant](https://github.com/linxichen/dsh-rigorquant) - 面向实证/计算数学研究（经济/金融/组合）的无人值守 Agent 预设 + 技能：隔离多智能体探索、双轨真值推导、仅反例淘汰的对抗审计、四重实现前校验，以及 jacobian/Lean 升级通道。
- [dsh-wuyun-liuqi](https://github.com/dhicoc/dsh-wuyun-liuqi) - 完整 wuyun-liuqi（五运六气）中医运气学技能包，封装为 DeepSeek Harness 插件：年度与客气推算、临床辨证、病机推演。
- [dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) - 论文写作守卫：本地正则扫描修改过程残留、防御性写作与 AI 写作痕迹（破折号滥用、不是X而是Y、LLM 高频词、三连排比）；writing_audit / writing_rules 工具，论文文件写入后增量自动审计。
- [write-chinese-long-screenplay](https://github.com/mudden2380078550-creator/write-chinese-long-screenplay) - 中文长剧本写作 skill（SKILL.md）：双输入板块（背景 + 人物卡）+ 因果—价值内核，内置去 AI 味审查与连续性台账，支撑 100 场以上长篇幅项目。
- [kubemd](https://github.com/guiyi-labs/kubemd) - 证据优先的 Kubernetes 运行时故障诊断 skill（含案例记忆）：诊断线上集群故障（CrashLoop/OOM/Pending/NetworkPolicy 误拦），dry-run 修复并沉淀已解案例供秒回；附 go install 免依赖 CLI。
- [commercial-ui-ux-codex-skill](https://github.com/zjsthmjialin/commercial-ui-ux-codex-skill) - 注册 commercial-ui-ux 技能：以任务为中心的商业界面 UI/UX/GUI 设计、审查、修复与实现（SaaS、仪表盘、后台、表单、设计系统），带参考文档体系与质量门禁。
- [dsh-wm](https://github.com/WayneJin0918/dsh-wm) - DeepSeek Harness 上的世界模型研究插件：看帧、认 3D / pixel / latent 路线、给 pred vs GT 打分，并对 skill / wm.yaml 做 RSI。
- [vdnight89/InfiniteDSH](https://github.com/vdnight89/InfiniteDSH) - 诸天万界DSH：一个会话就是一本书。封面开书十九界，只写正文，规则书按关键词注入，/export-story 誊成 Markdown 小说。
- [JohnXu22786/skill-framework](https://github.com/JohnXu22786/skill-framework) - Praxis：面向 dsh 的工程方法论技能库（Agent Skills），以 Cordis 插件形式经 ctx.skills 提供。
- [duyanta123/dsh-data-insight](https://github.com/duyanta123/dsh-data-insight) - 数据洞察技能：把原始数据（CSV / 粘贴表格 / SQL 结果 / DuckDB）转成带业务结论、指标与图表的结构化 Markdown 报告。

- [dsh-industry-research](https://github.com/PerryLink/dsh-industry-research) - 行业/公司研究领域包：industry_map 产业链建图、industry_track 经 ctx.web 的公开源政策动态跟踪、company_scan 基于用户数据文件的公司速览卡、industry_report 研究报告（可选 ctx.researchReport 引擎封存桥，缺席时内置降级渲染），附两个研究方法论技能。
- [dsh-data-quality](https://github.com/PerryLink/dsh-data-quality) - 确定性的数据画像、清洗与校验：data_profile / data_clean / data_verify 工具，外加冻结的跨插件 verifyCitations 引用核验契约，报告持久化到存储域。
- [maxmilian/dsh-odoo](https://github.com/maxmilian/dsh-odoo) - 经 JSON-RPC 的 Odoo 只读工具：服务器信息、模型字段自省，以及白名单模型上的受限 search_read。草稿创建工具需显式开启 allowWrite 才会注册。
## Tools & Utilities

- [dsh-tray](https://github.com/liulifu/dsh-tray) - Windows 系统托盘守护工具：启动/停止/重启 DSH 服务，支持多 profile 端口绑定、快照式快速恢复、插件启停、SQLite 版本台账，以及自动发现加载失败插件后禁用并恢复 DSH 的客户端哨兵。

- [zilliztech/dsh-milvus](https://github.com/zilliztech/dsh-milvus) - 只读 DSH Web 插件，可在对话中检查和搜索 Milvus 或 Zilliz Cloud Collection，支持标量、BM25、稠密向量与混合查询。

- [zoahdev/dsh-discussions-radar](https://github.com/zoahdev/dsh-discussions-radar) - 官方 GitHub Discussions 雷达：列出/筛选/搜索官方讨论区（Ideas/Q&A/Show Your Plugins!/General/Announcements）（CLI + `discussions_radar` 工具）。
- [dsh-case](https://github.com/ZhijiangTang/dsh-case) - 命名大小写转换，支持 camel/snake/kebab/Pascal 等 8 种风格。
- [dsh-clipboard](https://github.com/ZhijiangTang/dsh-clipboard) - 跨平台将文本写入系统剪贴板。
- [dsh-cron-parse](https://github.com/ZhijiangTang/dsh-cron-parse) - 解析 cron 表达式为人类可读描述，并预览未来运行时间。
- [dsh-dead-links](https://github.com/ZhijiangTang/dsh-dead-links) - 检查 Markdown 文档中的失效 http(s) 链接。
- [dsh-fetch-file](https://github.com/ZhijiangTang/dsh-fetch-file) - 将 URL 下载为工作区文件：路径围栏、流式、200MB 上限。
- [dsh-file-convert](https://github.com/zzy-12345678/dsh-file-convert) - 本地优先的格式转换：覆盖图片、PDF（含 OCR 与实验性 PDF→DOCX）、数据、音视频与办公文档共 26 种转换；7 个工具，全本地执行，无需 API Key。
- [dsh-fmt](https://github.com/ZhijiangTang/dsh-fmt) - JSON/YAML/TOML/SQL 格式化与校验，错误带行列定位。
- [dsh-handoff](https://github.com/ZhijiangTang/dsh-handoff) - 将当前会话一键导出为确定性 Markdown 交接文档。
- [dsh-http](https://github.com/ZhijiangTang/dsh-http) - 结构化 HTTP 请求工具：返回状态码、耗时与大小，支持 basic/bearer 认证。
- [dsh-jwt](https://github.com/ZhijiangTang/dsh-jwt) - 调试用 JWT 解码（不验签），并判断是否过期。
- [dsh-password](https://github.com/ZhijiangTang/dsh-password) - 基于 crypto 生成强随机密码与 diceware 口令短语。
- [dsh-pkg-info](https://github.com/ZhijiangTang/dsh-pkg-info) - 查询 npm/PyPI 包信息（版本、许可证、依赖）。
- [dsh-url-tools](https://github.com/ZhijiangTang/dsh-url-tools) - URL 解析、去跟踪参数、编解码与重定向展开。
- [dsh-when](https://github.com/ZhijiangTang/dsh-when) - 将自然语言相对时间（如「2 小时后」）解析为 ISO 时间，fail-fast。
- [JohnXu22786/command-scout](https://github.com/JohnXu22786/command-scout) - 扫描项目声明的构建命令（Makefile、package.json scripts、justfile、deno tasks）并作为 agent 工具暴露。
- [JohnXu22786/file-planning](https://github.com/JohnXu22786/file-planning) - trailmap：磁盘持久化执行规划插件——里程碑/步骤状态机、依赖标注、审计事件与复盘纪要，提供 dsh 工具、CLI 与技能三种接口。
- [JohnXu22786/codegraph](https://github.com/JohnXu22786/codegraph) - 面向 dsh 的代码知识图谱：将符号、调用点与导入索引到 SQLite，通过 CLI 或 stdio MCP 工具服务回答调用/依赖问题。
- [Nicholas023/vision-exp-tile](https://github.com/Nicholas023/vision-exp-tile) - 面向视觉大模型的大图智能识图插件：800×800 无损切块识别（smart/pipeline/full 三策略）、本地 OCR（前处理+手写分流）、可选多厂商 GPU 加速（DirectML 覆盖 NVIDIA/AMD/Intel，CUDA/OpenVINO），自动回退 CPU。MIT 开源。
- [dsh-overlay-check](https://github.com/taltara/mddl-harness/tree/main/packages/overlay-check) - 零依赖的离线覆盖层安全检查库：可解析性预检、受限的托管块写入、可读 diff，并会提示 `agent-presets.roots` 在启动时会被丢弃（deepseek-harness#403）。

## Related

- [dsh-external/issues](https://github.com/dsh-external/issues) - Issue 聚合仓库
- [dsh-meme-hub](https://github.com/the-beating-light-of-the-nail/dsh-meme-hub) - 社区整活插件导航（皮肤/桌宠/小游戏），中英双语
- [DeepSeek Harness Handbook](https://github.com/sandbaseai/deepseek-harness-handbook) - 从 Agent 视角讲解 DSH 运行、扩展与排障的来源可追溯手册，提供 162 篇英文 canonical 指南、189 份多语言文档、可搜索的 [Awesome 资源地图](https://sandbaseai.github.io/deepseek-harness-handbook/awesome-deepseek-harness-resources.html)，以及 Install Doctor 和 Failure Router 速查工具
- [liyupi/ai-guide](https://github.com/liyupi/ai-guide) - 中文 Vibe Coding 教程，设有 DeepSeek Harness 专题：保姆级入门、服务器部署、Agent 预设详解、极简模式实测与精选插件推荐。
- [TeamoRouter](https://teamorouter.com/docs/install-deepseek-harness) - OpenAI 兼容接入点，提供免费的 DeepSeek V4 Pro/Flash 每日配额；把 DEEPSEEK_BASE_URL 指向它即可，无需支付信息。
- [DeepSeek](https://deepseek.com) - 官方入口

### 友情链接

- [DeepSeek Harness Desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) - 为 DeepSeek Harness 生态打造的现代化桌面端：无需配置 Node.js 或执行命令即可启动和管理本地 Harness 服务；后续将支持插件市场、移动端远程控制与 IM Channels。[访问官网](https://www.dshdesktop.cn)

## Contributing

Please have a look at [contributing.md](contributing.md). 条目标准：仓库 + 一句话描述 + 链接；精选人工维护，全量索引以 hub 为准。

## 致谢

感谢 [LinuxDO 社区](https://linux.do/) 的支持与交流。
