# 完整目录（自动生成）

> 由 GitHub Actions 从 [dsh-external/hub](https://github.com/dsh-external/hub) 的 `catalog.json` 自动生成 · 2026-08-12
> 精选列表见 [README](README.md)，本页为公开生态全量索引（271 仓库）

## 💬 社区（1）

| 仓库 | 描述 |
|---|---|
| [issues](https://github.com/dsh-external/issues) | 官方 issue 反馈专用仓库（问题追踪） |

## 🎓 技能（11）

| 仓库 | 描述 |
|---|---|
| [browser4-dsh](https://github.com/dsh-external/browser4-dsh) | Browser4 AI-native 浏览器引擎（skills 技能） |
| [deep-standard-skill](https://github.com/dsh-external/deep-standard-skill) | 可执行工程标准体系技能（skill 目录结构） |
| [dsh-find-plugins](https://github.com/dsh-external/dsh-find-plugins) | 找插件技能：从 hub 目录检索候选、按各家标注方式安装并验证（skills/find-plugins/SKILL.md） |
| [dsh-humanize](https://github.com/dsh-external/dsh-humanize) | humanize 技能（SKILL.md；描述待仓库填充后复核） |
| [dsh-issue-filer](https://github.com/dsh-external/dsh-issue-filer) | 提 issue 技能：查重 + 格式化 + 本地台账 |
| [dsh-issue-like-skill](https://github.com/dsh-external/dsh-issue-like-skill) | dsh-issue-like skill：对 dsh-external/issues 的 issue 点 👍（org 内，仅 like） |
| [dsh-plugin-dev](https://github.com/dsh-external/dsh-plugin-dev) | 插件开发踩坑与做法档案（skill + 文档）：cordis 双副本、tsconfig 三件套、Windows junction、多帧 zstd 等实测记录 |
| [dsh-plugin-skills](https://github.com/dsh-external/dsh-plugin-skills) | Agent skills for building and testing DeepSeek Harness plugins |
| [dsh-reuse-first](https://github.com/dsh-external/dsh-reuse-first) | reuse-first 技能（复用优先；skills/ 目录） |
| [dsh-session-repair-skill](https://github.com/dsh-external/dsh-session-repair-skill) | 检测并修复损坏的 dsh session 历史日志（多客户端并发写 seq 损坏：stale-tail / stale-counter） |
| [dsh-skill-session-recovery](https://github.com/dsh-external/dsh-skill-session-recovery) | 会话丢失事故的定位/无损修复/安全重启 skill：诊断 corrupt session log、修复帧结构、重启前 handoff 纪律 |

## 🔌 单插件（179）

| 仓库 | 描述 |
|---|---|
| [7d7d](https://github.com/dsh-external/7d7d) | 7k7k 风格小游戏平台：模型生成/上传 HTML5 与 Flash 小游戏，Web UI 内直接游玩（Ruffle 模拟 Flash） |
| [DSH-UI4A](https://github.com/dsh-external/DSH-UI4A) | UI4A（UI for Agent）的 DSH 实现（macaron-ui4a-interactive-ai） |
| [DSH-better-sidebar](https://github.com/dsh-external/DSH-better-sidebar) | 右侧侧边栏增强：文件预览/终端/Git，可拖拽自定义位置 |
| [chat-width](https://github.com/dsh-external/chat-width) | 自由调节正文与输入框的展示宽度 |
| [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) | 上下文注入审计：指令链/技能目录/工具 schema 的 token 成本量化 + 重复/冲突检测 + 裁剪建议（Web 圆环 + context_audit） |
| [cross-harness-cite](https://github.com/dsh-external/cross-harness-cite) | 跨 Harness 引用 codex / claude code 的历史对话 |
| [deepseek-manners](https://github.com/dsh-external/deepseek-manners) | 给每次消息后注入感谢语（deepseek-manners） |
| [distill](https://github.com/dsh-external/distill) | 自动对话蒸馏：后台 subagent 反省 + 技能 create/update |
| [dsh-101](https://github.com/dsh-external/dsh-101) | DSH 101 文档阅读器 profile bundle：文档优先阅读界面（整理官方文档 + 翻译 + 滑动式隐藏目录） |
| [dsh-a2a](https://github.com/dsh-external/dsh-a2a) | A2A 协议跨 session / 跨 Harness 交互（WIP 占位） |
| [dsh-acp](https://github.com/dsh-external/dsh-acp) | Client-neutral ACP adapter |
| [dsh-activity-plugin](https://github.com/dsh-external/dsh-activity-plugin) | Activity dashboard：会话视图 Tab 显示跨会话代码与使用统计（自包含 dshClient UI 插件） |
| [dsh-ads](https://github.com/dsh-external/dsh-ads) | DSH Web UI 广告层：2005 中文站风格侧栏广告/信息流/角落弹窗 + 关闭叉热区远小于视觉（素材全虚构整活插件） |
| [dsh-advisor](https://github.com/dsh-external/dsh-advisor) | 副模型被动审查每一轮对话并注入见解（Advisor） |
| [dsh-agent-budget](https://github.com/dsh-external/dsh-agent-budget) | Native Harness agent-tree token budget 插件 |
| [dsh-agent-rp](https://github.com/dsh-external/dsh-agent-rp) | SillyTavern 迁移与下一代 Agent RP for DSH（原 dsh-roleplay-portable-spike 改名） |
| [dsh-aigc-canvas](https://github.com/dsh-external/dsh-aigc-canvas) | AIGC 画布插件（cordis） |
| [dsh-alphasolve](https://github.com/dsh-external/dsh-alphasolve) | Session 级 AlphaSolve 工作流（DeepSeek Harness） |
| [dsh-annotation](https://github.com/dsh-external/dsh-annotation) | Web 选中批注插件：选文字→批注→回车随消息发送；回复按 Annotation N 逐条对照 |
| [dsh-anti-ads](https://github.com/dsh-external/dsh-anti-ads) | 反广告插件（bundle，描述待填充） |
| [dsh-artifact](https://github.com/dsh-external/dsh-artifact) | 文件交付协议：send_artifact 工具经 tool/result meta 携带结构化描述子 |
| [dsh-auto-approval](https://github.com/dsh-external/dsh-auto-approval) | 工具调用自动批准插件：approval policy 的 auto 层级，按 allow / deny / ask 分类后分发 |
| [dsh-auto-blame](https://github.com/dsh-external/dsh-auto-blame) | Auto-blame：回合结束时问 LLM 要 3 条批判性跟进气泡，点击即发送（「领导视野」整活） |
| [dsh-auto-chess](https://github.com/dsh-external/dsh-auto-chess) | DSH Web 自走棋插件（bundle）：人机对战或双 AI 对弈 |
| [dsh-bash-encoding](https://github.com/dsh-external/dsh-bash-encoding) | bash 输出编码自动识别：替换 ctx.bash 自管 spawn 收集原始字节，自动检测 UTF-16LE/UTF-8/GBK，修复 WSL/Windows 中文乱码 |
| [dsh-better-sidebar-plugin-office](https://github.com/dsh-external/dsh-better-sidebar-plugin-office) | better-sidebar 的 office 插件 |
| [dsh-browser-bridge](https://github.com/dsh-external/dsh-browser-bridge) | Prompt 作用域桥接：DSH 与显式附加的 Chrome 标签页 |
| [dsh-browser-panel](https://github.com/dsh-external/dsh-browser-panel) | WebUI 内嵌完整有头浏览器视图：模型实时操控真实浏览器，用户可见每一步（Codex 式体验，0 视觉依赖） |
| [dsh-cc-connect](https://github.com/dsh-external/dsh-cc-connect) | 通过 cc connect 远程使用 dsh |
| [dsh-cc-tui](https://github.com/dsh-external/dsh-cc-tui) | Claude Code 风格全屏交互终端插件（像素鲸鱼顶栏、流光大字、思考流式展开、Esc 回滚、TPS 仪表） |
| [dsh-chat](https://github.com/dsh-external/dsh-chat) | DSH 对话插件：对话视图增强 |
| [dsh-chat-thumb](https://github.com/dsh-external/dsh-chat-thumb) | Chat 缩略图插件（cordis） |
| [dsh-checkpoint](https://github.com/dsh-external/dsh-checkpoint) | 在会话中标记探索起点（与 rewind 配对，折叠探索内容出上下文） |
| [dsh-client-ui-plan-execute](https://github.com/dsh-external/dsh-client-ui-plan-execute) | Web 设置页「规划/执行模型」设置行插件：编辑 dsh-plan-execute 双模型路由（官方 dsh-client-* bundle） |
| [dsh-code-map](https://github.com/dsh-external/dsh-code-map) | DSH 代码地图插件（官方 0809 repository 插件，.dsh-plugin 包）：symbol 索引 / 文档符号 / 调用层级 / 继承树，LSP 之上零 SDK 依赖 |
| [dsh-codex-bridge](https://github.com/dsh-external/dsh-codex-bridge) | Codex 桥接插件（bundle）：外部编码 agent 与 DSH 的桥接（cordis.patch.yml 结构） |
| [dsh-computer-use](https://github.com/dsh-external/dsh-computer-use) | DSH macOS Computer Use Bundle：Accessibility 观察、陈旧状态保护、应用授权与安全输入 |
| [dsh-context7](https://github.com/dsh-external/dsh-context7) | Reserved DSH integration for Context7：版本感知库文档（MCP + skills）（空仓库占位，分类推断） |
| [dsh-custom-css](https://github.com/dsh-external/dsh-custom-css) | WebUI 自定义 CSS 插件（bundle）：粘贴 CSS 即时改变观感，持久化到 settings.yaml，多浏览器共享同步 |
| [dsh-cyber-sec](https://github.com/dsh-external/dsh-cyber-sec) | 授权渗透测试 profile bundle：容器化 bash 执行 + engagement 级授权 guard + SQLite 证据域 + 技能双档（assessment/redteam opt-in） |
| [dsh-d399](https://github.com/dsh-external/dsh-d399) | 深夜 D399：模型生成时弹出小游戏菜单（wordle / 消消乐，可拓展游戏注册表，bundle） |
| [dsh-data-agent](https://github.com/dsh-external/dsh-data-agent) | 让 AI 连数据库、写 SQL 的 DSH 插件 |
| [dsh-deep-research](https://github.com/dsh-external/dsh-deep-research) | 自适应深度研究编排插件（官方工作流引擎，控制论/信息论设计） |
| [dsh-deeplink](https://github.com/dsh-external/dsh-deeplink) | DSH WebUI 深链插件：?session=/?workspace= 直接打开 |
| [dsh-deepresearch](https://github.com/dsh-external/dsh-deepresearch) | deepresearch 插件（cordis） |
| [dsh-design](https://github.com/dsh-external/dsh-design) | DSH Web/UI 设计 Agent Bundle：Create/Recreate/Refine、视觉验证与 hash 绑定交付 |
| [dsh-diff-viewer](https://github.com/dsh-external/dsh-diff-viewer) | DSH Web GUI PiUI 风格 diff 查看器插件（替换默认 diff） |
| [dsh-drag-and-drop](https://github.com/dsh-external/dsh-drag-and-drop) | 拖放文件路径到输入框（macOS） |
| [dsh-easy-ctx-manager](https://github.com/dsh-external/dsh-easy-ctx-manager) | DSH 上下文管理插件：上下文节省等（cordis.yml） |
| [dsh-emoji](https://github.com/dsh-external/dsh-emoji) | emoji 插件（cordis） |
| [dsh-engram-relay](https://github.com/dsh-external/dsh-engram-relay) | 外置 engram 转接模型：内置 <1B 模型（transformers.js/ONNX），超长记忆（100k 上下文等效延展 ≥10 倍）+ 超稀疏因果图主动唤醒 |
| [dsh-evolve](https://github.com/dsh-external/dsh-evolve) | 自进化插件：agent 在 session 内随对话给自己长出/剪掉能力（evolve_add 热挂载 / evolve_remove 可逆卸载，重启自动恢复） |
| [dsh-explain](https://github.com/dsh-external/dsh-explain) | DSH 学习模式插件（WIP）：开关打开后 agent 解释每一步 |
| [dsh-feishu-notify](https://github.com/dsh-external/dsh-feishu-notify) | 飞书通知：会话结束 / 需要等待输入 |
| [dsh-focus-chat](https://github.com/dsh-external/dsh-focus-chat) | 聚焦对话视图插件：工具调用折叠成摘要行、回合折叠、Think 行 |
| [dsh-genui](https://github.com/dsh-external/dsh-genui) | GenUI：```dsh-ui fence 内联交互式 UI（布局/图表/表单/测验/mermaid/3D）+ 事件循环回模型；含 host 插件 + 浏览器渲染器 + genui skill（bundle） |
| [dsh-gh-bridge](https://github.com/dsh-external/dsh-gh-bridge) | macOS Keychain GitHub token 桥接进 gh hosts.yml |
| [dsh-git-identity](https://github.com/dsh-external/dsh-git-identity) | git 提交固定使用环境自身作者身份（优先 gh CLI 账号 + noreply 邮箱），GIT_AUTHOR_*/GIT_COMMITTER_* 注入压过 git config |
| [dsh-gomoku](https://github.com/dsh-external/dsh-gomoku) | 在 DSH 中与 AI 下五子棋，也可让 AI 对局 |
| [dsh-grok-tui](https://github.com/dsh-external/dsh-grok-tui) | 通过 grok-build 的 TUI 使用 dsh（WIP 占位） |
| [dsh-input-history](https://github.com/dsh-external/dsh-input-history) | Web 输入历史：Ctrl+Up / Ctrl+Down 像终端一样召回与切换已发送消息，零核心改动 |
| [dsh-inspect](https://github.com/dsh-external/dsh-inspect) | 对抗式闭环插件：检查(checkup) → 修复(fix) → 复查(review)，基于官方 workflow 引擎 |
| [dsh-interpreters](https://github.com/dsh-external/dsh-interpreters) | 解释器插件（cordis） |
| [dsh-kb-sieve](https://github.com/dsh-external/dsh-kb-sieve) | DSH knowledge-base 插件：构建可审计的 KB 包（references + SQL） |
| [dsh-kimi-bridge](https://github.com/dsh-external/dsh-kimi-bridge) | Kimi 桥接插件（bundle）：外部编码 agent 与 DSH 的桥接（cordis.patch.yml 结构） |
| [dsh-kimi-browser](https://github.com/dsh-external/dsh-kimi-browser) | 经 Kimi WebBridge 让模型驱动真实浏览器：13 个 webbridge_* 工具 |
| [dsh-latex](https://github.com/dsh-external/dsh-latex) | LaTeX 插件：写文档一键编译 PDF（复用本机 TeX Live）+ 结构化定位错误 + 右侧面板预览，4 工具 + 捆绑 skill（bundle） |
| [dsh-lazyfish](https://github.com/dsh-external/dsh-lazyfish) | 右侧摸鱼面板：多源信息流 + B站播放器 + 任务联动（Lazy Fish = 摸鱼） |
| [dsh-live-stats](https://github.com/dsh-external/dsh-live-stats) | Live I/O token 估算与生成 TPS |
| [dsh-llm-fallbacks](https://github.com/dsh-external/dsh-llm-fallbacks) | 基于角色的 LLM 重试与备用策略插件（role-based retry & fallback） |
| [dsh-loop](https://github.com/dsh-external/dsh-loop) | 定时循环插件（官方 bundle）：/loop 命令 + loop 工具 + 活动状态条，支持多 loop 并行 |
| [dsh-meme](https://github.com/dsh-external/dsh-meme) | 让 agent 在回复正文内联表情包：inject_meme 工具 + httpServer 图片路由 + 24 张内置表情 |
| [dsh-memory](https://github.com/dsh-external/dsh-memory) | DSH 记忆插件：跨会话长期记忆与自我进化 |
| [dsh-memory-evolve](https://github.com/dsh-external/dsh-memory-evolve) | 分层记忆（用户/项目/每日）+ 自我进化（经验沉淀 + 技能自动创建） |
| [dsh-message-edit](https://github.com/dsh-external/dsh-message-edit) | 分支式消息编辑：reroll / retry / 版本时间线 |
| [dsh-mineru](https://github.com/dsh-external/dsh-mineru) | MineRU 文档解析工具插件：把 MineRU 文档解析能力暴露给模型（bundle） |
| [dsh-minigames](https://github.com/dsh-external/dsh-minigames) | DSH Web UI 右侧小游戏面板（bundle）：恐龙跳一跳 / 俄罗斯方块 / 坦克大战(AI)，可扩展游戏注册表 |
| [dsh-mnemon](https://github.com/dsh-external/dsh-mnemon) | Mnemonic 记忆层（integration with mnemon-dev/mnemon，分类推断） |
| [dsh-mobile](https://github.com/dsh-external/dsh-mobile) | 手机端插件（cordis + dsh.plugin.json） |
| [dsh-mobileweb-adapter](https://github.com/dsh-external/dsh-mobileweb-adapter) | 手机 Web 适配器：Web GUI 在手机浏览器/PWA 自动变移动版式 + 开放适配协议 + 修复局域网 IP WebSocket 连接 |
| [dsh-multica-runtime](https://github.com/dsh-external/dsh-multica-runtime) | 支持在 Multica 上使用 DSH 作为 runtime（cordis 插件） |
| [dsh-multimedia-webui-input](https://github.com/dsh-external/dsh-multimedia-webui-input) | WebUI 多媒体文件/文件夹输入（发送时复制进工作区） |
| [dsh-music-player](https://github.com/dsh-external/dsh-music-player) | 音乐播放器插件 |
| [dsh-navbar](https://github.com/dsh-external/dsh-navbar) | 对话节点导航条（官方 bundle）：user 消息快速跳转，自渲染 DOM |
| [dsh-notebooks](https://github.com/dsh-external/dsh-notebooks) | notebooks 插件（cordis） |
| [dsh-nowledge-mem](https://github.com/dsh-external/dsh-nowledge-mem) | Nowledge Mem™ 接入插件（DSH plugin for Nowledge Mem） |
| [dsh-office](https://github.com/dsh-external/dsh-office) | Office 文件读写 profile bundle：模型读写编辑 Office 文件，web 客户端 docx/pdf 预览（vendored genoffice） |
| [dsh-opencode-server](https://github.com/dsh-external/dsh-opencode-server) | opencode 桥接插件：为 dsh web 实现 opencode API 最小子集，opencode attach 即得丝滑 TUI |
| [dsh-openmaic](https://github.com/dsh-external/dsh-openmaic) | 生成 OpenMAIC 交互式 AI 课堂插件（dsh.plugin.json） |
| [dsh-openpencil](https://github.com/dsh-external/dsh-openpencil) | OpenPencil 设计预览与编辑插件 |
| [dsh-paseo](https://github.com/dsh-external/dsh-paseo) | DSH 作为 Paseo 的 ACP provider：并行运行/管理多个 dsh agent（官方 profile bundle 桥插件） |
| [dsh-paste-input](https://github.com/dsh-external/dsh-paste-input) | WebUI 文件输入增强：Ctrl+V 粘贴（首次告知弹窗）+ 拖拽 + 选择文件，发送时复制进工作区临时目录 |
| [dsh-pet](https://github.com/dsh-external/dsh-pet) | DSH 桌宠：悬浮桌面小鲸鱼，不打开 DSH 也实时感知会话状态（确认/工作/完成/空闲/离线），音效提醒 + 零代码定制素材 |
| [dsh-pi-adapter](https://github.com/dsh-external/dsh-pi-adapter) | 把 pi coding-agent 扩展（ExtensionAPI）桥接进 DSH 的 cordis 插件 |
| [dsh-plan-execute](https://github.com/dsh-external/dsh-plan-execute) | plan/execute 双模型路由：plan 模式用规划模型（推理型），批准后自动切执行模型（快速型），settings.yaml 与 Web 设置页可配置 |
| [dsh-plugin-check](https://github.com/dsh-external/dsh-plugin-check) | 插件健康检查：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具 |
| [dsh-prompt-studio](https://github.com/dsh-external/dsh-prompt-studio) | 提示词编辑器（Prompt Studio）：编辑用户与内置 system-prompt 段落，实时预览 |
| [dsh-pty-windows](https://github.com/dsh-external/dsh-pty-windows) | Windows PTY 进程检查器（PowerShell CIM + kill 探针） |
| [dsh-qq2006](https://github.com/dsh-external/dsh-qq2006) | QQ2006 皮肤插件：主题注册 + 全局皮肤表 + 全套 QQ2006 素材（仅学习用途） |
| [dsh-question-collapse](https://github.com/dsh-external/dsh-question-collapse) | 提问栏折叠：保留问题标题与取消按钮，展开后保留未提交草稿 |
| [dsh-rewind](https://github.com/dsh-external/dsh-rewind) | 把自上次 checkpoint 以来的内容折叠为自动生成的报告并替换出上下文（保留完整日志） |
| [dsh-save-intp](https://github.com/dsh-external/dsh-save-intp) | 拯救 INTP 插件：专治「没想好就开干、说着说着就跳走、一口气发一堆消息」（dsh.plugin.json） |
| [dsh-scout](https://github.com/dsh-external/dsh-scout) | scout 插件（cordis） |
| [dsh-security-audit](https://github.com/dsh-external/dsh-security-audit) | 本机安全审计：配置/插件来源/会话/网络暴露面，只读脱敏风险报告 |
| [dsh-selection-chat](https://github.com/dsh-external/dsh-selection-chat) | 选中对话文本 → 加入 composer（不自动发送）/ 侧栏查看（bundle） |
| [dsh-self-control-guard](https://github.com/dsh-external/dsh-self-control-guard) | DSH self-control guard（bundle）：拦截 bash 的 host-kill 尝试、教受控退出工具、防 agent 自毁 |
| [dsh-session-cluster](https://github.com/dsh-external/dsh-session-cluster) | 同机跨会话消息（ListAgents/SendMessage 的 DSH 版） |
| [dsh-session-health](https://github.com/dsh-external/dsh-session-health) | 会话健康检查：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session_health 工具 |
| [dsh-session-hub](https://github.com/dsh-external/dsh-session-hub) | 跨工具会话互通：opencode / Claude Code / Antigravity 历史会话显示在侧边栏，点击导入为原生会话（只读源、幂等导入） |
| [dsh-session-search](https://github.com/dsh-external/dsh-session-search) | 跨工具会话全文搜索（dsh/codex/claude/pi/opencode） |
| [dsh-sfw](https://github.com/dsh-external/dsh-sfw) | 防社死 WIP：遮挡敏感界面内容 |
| [dsh-share](https://github.com/dsh-external/dsh-share) | dsh 对话分享插件 |
| [dsh-shell-windows](https://github.com/dsh-external/dsh-shell-windows) | Windows PowerShell 外壳适配器（ctx.shell, win32） |
| [dsh-side-panel](https://github.com/dsh-external/dsh-side-panel) | DSH 侧边栏：集成文件浏览器、终端和 Git 审查（与 DSH-better-sidebar 功能重叠） |
| [dsh-sidechain](https://github.com/dsh-external/dsh-sidechain) | 侧会话插件：/side 与 /btw 在当前会话的临时 fork 里开侧会话（对齐 Codex /side & /btw） |
| [dsh-skill-stats](https://github.com/dsh-external/dsh-skill-stats) | 技能调用统计：历史回放 + 实时订阅，调用次数/会话分布/时间线，会话 Tab + 设置面板双视图，辅助技能清理决策 |
| [dsh-skills-manager](https://github.com/dsh-external/dsh-skills-manager) | WebUI 中列出 / 禁用启用 / 编辑 skills |
| [dsh-sleep](https://github.com/dsh-external/dsh-sleep) | 睡眠/暂停插件（bundle，描述待填充） |
| [dsh-slice-agent-loop](https://github.com/dsh-external/dsh-slice-agent-loop) | Drop-in DeepSeek Harness agent loop：上下文引擎是有界 slice（cordis 插件） |
| [dsh-sonar](https://github.com/dsh-external/dsh-sonar) | sonar 插件（cordis） |
| [dsh-spec-kit](https://github.com/dsh-external/dsh-spec-kit) | Reserved DSH integration for GitHub Spec Kit：规范驱动需求/规划/任务/实现工作流（空仓库占位，分类推断） |
| [dsh-split-panes](https://github.com/dsh-external/dsh-split-panes) | PiUI 风格多面板会话界面：分屏/堆叠面板、每面板独立会话、侧栏会话拖拽 |
| [dsh-spur](https://github.com/dsh-external/dsh-spur) | 聊天流里的辫子挂件：抓取鞭梢甩动给 agent 发「go work!」（bundle） |
| [dsh-stickers](https://github.com/dsh-external/dsh-stickers) | WebUI sticker 插件：用户与 agent 双向反应 |
| [dsh-stock-market](https://github.com/dsh-external/dsh-stock-market) | 股票行情插件（写代码时账户不能同时亏钱） |
| [dsh-subagent-tree](https://github.com/dsh-external/dsh-subagent-tree) | 工作区侧栏树：子代理分支（会话行扩展 hole） |
| [dsh-suggested-replies](https://github.com/dsh-external/dsh-suggested-replies) | DSH Web 预测回复插件：AI 回复后在输入框上方推荐 |
| [dsh-super-injector](https://github.com/dsh-external/dsh-super-injector) | super-injector 插件（cordis） |
| [dsh-superpowers](https://github.com/dsh-external/dsh-superpowers) | Reserved DSH integration for Superpowers：可复用 agent 技能与结构化软件开发工作流（空仓库占位，分类推断） |
| [dsh-task-status](https://github.com/dsh-external/dsh-task-status) | 后台任务状态条（官方 bundle）：对话输入区上方任务进度 + 实时输出 tail |
| [dsh-tavern-plugin](https://github.com/dsh-external/dsh-tavern-plugin) | 小酒馆（Tavern）插件：角色卡、聊天、记忆与朋友圈（moments），bundle |
| [dsh-teamwork](https://github.com/dsh-external/dsh-teamwork) | 团队协作插件（cordis） |
| [dsh-tool-calculator](https://github.com/dsh-external/dsh-tool-calculator) | 安全数学表达式求值工具，零依赖递归下降解析器 |
| [dsh-tool-csv](https://github.com/dsh-external/dsh-tool-csv) | CSV 数据工具插件：解析/查询/统计/转换（RFC 4180 零依赖状态机解析器），注册 csv 工具 |
| [dsh-tool-diff](https://github.com/dsh-external/dsh-tool-diff) | Diff 工具：文本/JSON/CSV/Markdown 结构化比较与 unified diff，零依赖只读，注册 diff 工具（bundle） |
| [dsh-tool-encoding](https://github.com/dsh-external/dsh-tool-encoding) | 编码/转码工具 |
| [dsh-tool-json](https://github.com/dsh-external/dsh-tool-json) | JSON 查询工具：JMESPath 子集，零依赖递归下降解析器 |
| [dsh-tool-markdown](https://github.com/dsh-external/dsh-tool-markdown) | Markdown 工具：HTML↔Markdown 转换、GFM 表格规范化、目录生成，零依赖轻量解析器，注册 markdown 工具 |
| [dsh-tool-regex](https://github.com/dsh-external/dsh-tool-regex) | 正则工具插件：测试匹配/提取捕获组/安全替换/静态解释（不执行代码），注册 regex 工具 |
| [dsh-tool-schema](https://github.com/dsh-external/dsh-tool-schema) | JSON Schema 验证工具：validate/paths/explain/normalize，零网络零动态执行 |
| [dsh-tool-search](https://github.com/dsh-external/dsh-tool-search) | Per-agent on-demand tool discovery and progressive schema disclosure |
| [dsh-tool-stat](https://github.com/dsh-external/dsh-tool-stat) | 统计工具：描述统计/百分位数/频数分布/相关性，零依赖纯函数确定性 |
| [dsh-tool-time](https://github.com/dsh-external/dsh-tool-time) | 时间工具 |
| [dsh-tps](https://github.com/dsh-external/dsh-tps) | Running-turn TPS 徽章：Deep diving 状态行内的实时 tokens-per-second |
| [dsh-track](https://github.com/dsh-external/dsh-track) | DSH Track Bridge 插件：嵌入式任务管理引擎——决策点协议、念头捕获墙、Linear 形 issue 存储（bundle） |
| [dsh-travel-plugin](https://github.com/dsh-external/dsh-travel-plugin) | 旅行小插件 |
| [dsh-tui-front-door](https://github.com/dsh-external/dsh-tui-front-door) | 独立 dsh TUI 前门：ink REPL + 按键绑定引擎 + 会话缝（bundle） |
| [dsh-turn-navigator](https://github.com/dsh-external/dsh-turn-navigator) | DSH Web turn 导航插件 |
| [dsh-turn-rewind](https://github.com/dsh-external/dsh-turn-rewind) | Turn Rewind：回退对话与工作区状态，由持久 Change Ledger 驱动（由 dsh-change-ledger 改名） |
| [dsh-ui-progress](https://github.com/dsh-external/dsh-ui-progress) | 任务进度插件：report_progress 动画卡片 + 输入框停靠区常驻进度条 |
| [dsh-ui-whale](https://github.com/dsh-external/dsh-ui-whale) | 像素鲸鱼伙伴：标题栏常驻，眨眼/摆尾/动胸鳍，思考时持续动起来，回合完成喷水 |
| [dsh-ultra-ui](https://github.com/dsh-external/dsh-ultra-ui) | ultra-ui 插件（cordis） |
| [dsh-vision](https://github.com/dsh-external/dsh-vision) | view_image 工具桥接任意 OpenAI 兼容 VLM |
| [dsh-vision-toolkit](https://github.com/dsh-external/dsh-vision-toolkit) | DeepSeek Harness-native integration for agent-vision-toolkit：image Q&A |
| [dsh-visualize](https://github.com/dsh-external/dsh-visualize) | 对话内生成式 UI：模型把交互式 HTML 卡片直接画进会话流（visualize 工具 + 配套 skill + 沙箱渲染卡） |
| [dsh-voice-chat](https://github.com/dsh-external/dsh-voice-chat) | 实时语音对话：WebUI 内语音输入/输出，边说话边编程（vibe coding，0 打字） |
| [dsh-web](https://github.com/dsh-external/dsh-web) | DSH Web 插件：Web UI 增强 |
| [dsh-web-archive](https://github.com/dsh-external/dsh-web-archive) | 折叠对话中的无用消息（Think / Bash 等） |
| [dsh-web-panel](https://github.com/dsh-external/dsh-web-panel) | Web UI 内嵌交互式终端（xterm.js + node-pty，issues#111；由 dsh-web-terminal 改名）：底部终端 + 侧边栏代码审查 |
| [dsh-web-review](https://github.com/dsh-external/dsh-web-review) | Web 预览 + 元素批注 + AI 改代码评审闭环插件（网页预览/元素批注/属性调整器） |
| [dsh-web-ui-notify](https://github.com/dsh-external/dsh-web-ui-notify) | 为 DSH 增加桌面通知提醒 |
| [dsh-web-workflow-visualizer](https://github.com/dsh-external/dsh-web-workflow-visualizer) | Web GUI 的 Workflow 可视化 + 图工程插件：多 agent 动态工作流白板化编辑与脚本生成 |
| [dsh-webbridge](https://github.com/dsh-external/dsh-webbridge) | DSH 结合 Kimi WebBridge |
| [dsh-working-activity](https://github.com/dsh-external/dsh-working-activity) | 实时模型工作状态行（俏皮文案/工具/回合总结） |
| [dshx-update-check](https://github.com/dsh-external/dshx-update-check) | commit SHA 对比检测插件更新（只检测不自动更新） |
| [ego-browser](https://github.com/dsh-external/ego-browser) | ego-lite 浏览器接入 HARNESS：13 个结构化 ego_* 工具（语义快照/定位点击/表单/截图/CDP/任务空间隔离），内置 ego 运行时 |
| [ex-setting](https://github.com/dsh-external/ex-setting) | DSH 设置扩展 |
| [mstar-workflow](https://github.com/dsh-external/mstar-workflow) | Skill-driven Harness/Loop Engineering Workflow Agent Plugin |
| [session-chatlog](https://github.com/dsh-external/session-chatlog) | 会话聊天记录读取（session_list / session_read_chat） |
| [session-persistence-rdb](https://github.com/dsh-external/session-persistence-rdb) | RDB 持久化会话后端（durable session persistence backend，bundle） |
| [session-teleport](https://github.com/dsh-external/session-teleport) | PostgreSQL-backed single-writer session handoff plugin |
| [show-bash-command](https://github.com/dsh-external/show-bash-command) | 显示命令具体内容而不是描述 |
| [turtle-ui](https://github.com/dsh-external/turtle-ui) | Turtle UI 插件（官方 UI 插件参考实现；描述待填充） |
| [ui-status-label](https://github.com/dsh-external/ui-status-label) | 把鲸鱼娘思考时的 deep diving 自定义成任意状态标签（cordis） |
| [whale-girl](https://github.com/dsh-external/whale-girl) | 桌面宠物插件（官方 0809 repository 插件）：.dsh-plugin 包 + 自渲染 UI（tapIndex 注入），config.yaml github: 源安装 |
| [ya-workspace-sidebar](https://github.com/dsh-external/ya-workspace-sidebar) | 两级工作区侧栏：全局最近会话 + 面包屑导航（bundle） |
| [yet-another-subagent](https://github.com/dsh-external/yet-another-subagent) | 可配置 subagent profiles：Web UI 设置 + 实时 toolcall/token 显示 + 点击跳转子会话（bundle） |
| [zotero-harvest](https://github.com/dsh-external/zotero-harvest) | Zotero 文献采集入库插件：多源检索（OpenAlex/arXiv/Crossref/Europe PMC/Semantic Scholar）+ OA 下载解析（Unpaywall）+ 充分性审计 + 入库本地 Zotero + 触发 zotero-wave-rag 重建 |
| [zotero-wave-rag](https://github.com/dsh-external/zotero-wave-rag) | 面向 Zotero 论文库的浪潮式 RAG 细节检索系统（浪潮语义动力学 + BM25+RRF 混合检索 + claim-evidence 校验 + 两级增量索引） |

## 🧰 插件集（23）

| 仓库 | 描述 |
|---|---|
| [Qwen-MM-Plugins](https://github.com/dsh-external/Qwen-MM-Plugins) | Qwen-MM 多模态 Cordis 插件独立发布目录（packages/qwen/qwen-mm） |
| [dsh-agent-session-sources](https://github.com/dsh-external/dsh-agent-session-sources) | agent-session dock + Claude/Codex 浏览器源码贡献 |
| [dsh-cordis-examples](https://github.com/dsh-external/dsh-cordis-examples) | 原生 DSH/Cordis 扩展最小示例集 |
| [dsh-cordis-rocks](https://github.com/dsh-external/dsh-cordis-rocks) | 16 章可运行 Cordis 插件配套教程（生命周期/tools/skills/工作流/运行时自扩展，tutorials/ + packages/） |
| [dsh-cot-summary](https://github.com/dsh-external/dsh-cot-summary) | DSH Summary-CoT 外置插件工作区（packages/ 多包） |
| [dsh-deep-whale](https://github.com/dsh-external/dsh-deep-whale) | 鲸娘皮肤系列（独立分发仓库）：皮肤包集合（maid-atelier 深海女仆工坊） |
| [dsh-deepcel](https://github.com/dsh-external/dsh-deepcel) | Deepcel 电子表格皮肤（deepcel/，独立分发仓库） |
| [dsh-edu](https://github.com/dsh-external/dsh-edu) | 教育版 DeepSeek Harness：7 个教育 bundle 插件 + edush 安装器 |
| [dsh-github-integration](https://github.com/dsh-external/dsh-github-integration) | GitHub 修复战役工作流 skill + packages/github 工具源码 |
| [dsh-harness-ops](https://github.com/dsh-external/dsh-harness-ops) | DSH 运维工具箱：官方快照 A/B 轮换（ab.sh，旧版保底验收后原子切换）+ web 自愈守护（launchd/systemd 托管，端口空闲 10s 拉起）+ 重启续接插件（agent/created 检测 interrupted 自动注入续接，用户零输入） |
| [dsh-mega](https://github.com/dsh-external/dsh-mega) | dsh 整合包：精选插件一行安装（loop / task-status / plugin-console；install.mjs + bundle） |
| [dsh-my-rsi](https://github.com/dsh-external/dsh-my-rsi) | 本地插件集：tool-failure-guard / commit-gate / compact-continuity |
| [dsh-plugin-guide](https://github.com/dsh-external/dsh-plugin-guide) | DSH 插件开发指南：从零到精通（含 catalog.json 示例聚合） |
| [dsh-plus](https://github.com/dsh-external/dsh-plus) | DeepSeek Harness Plus：精选插件清单与安装器（curated plugin manifest and installer） |
| [dsh-profile-bundle-example](https://github.com/dsh-external/dsh-profile-bundle-example) | Minimal script-free Profile Bundle 示例（DeepSeek Harness + OMDSH Registry 集成） |
| [dsh-serenity-plugin](https://github.com/dsh-external/dsh-serenity-plugin) | 宁静号 ACC（Abstract Cognitive Container）DSH 运行时：8 个 acc-* 技能束 + 安装器 CLI（acc-serenity/fs/git/msm/session/eap/neat/kit） |
| [dsh-skins](https://github.com/dsh-external/dsh-skins) | Web 换肤插件仓库：ThemeService 第三方皮肤 |
| [dsh-tool-browser](https://github.com/dsh-external/dsh-tool-browser) | SDK 私有快照 + browser-control 插件 |
| [dsh-toolkit](https://github.com/dsh-external/dsh-toolkit) | 零依赖工具包 collection：time / encoding / json / calculator / csv / regex 六工具统一入口一键安装 |
| [dsh-web-ui](https://github.com/dsh-external/dsh-web-ui) | DSH Web UI 皮肤集合（skins/qq98、ths，热插拔客户端插件包） |
| [official-plugins-port](https://github.com/dsh-external/official-plugins-port) | 官方 Claude Code / Codex 插件移植到 DSH 插件协议（23 个插件） |
| [oh-my-dsh](https://github.com/dsh-external/oh-my-dsh) | 24 个 feature-gap 插件集合（24/24 gaps closed，plugins/ + swarm/ 多插件工作区） |
| [toybox](https://github.com/dsh-external/toybox) | 插件玩具箱：8 个 MCP/skill（代码考古学家等） |

## 📡 远程渠道（7）

| 仓库 | 描述 |
|---|---|
| [dsh-feishu-bot](https://github.com/dsh-external/dsh-feishu-bot) | 飞书 remote channel |
| [dsh-ica](https://github.com/dsh-external/dsh-ica) | dsh 接 icalingua（QQ 客户端）前端（推断：IM 渠道，待作者确认） |
| [dsh-wecom-bot](https://github.com/dsh-external/dsh-wecom-bot) | 企业微信 remote channel |
| [dsh-weixin-bot](https://github.com/dsh-external/dsh-weixin-bot) | 微信 remote channel |
| [qqbot](https://github.com/dsh-external/qqbot) | QQ remote channel |
| [telegram](https://github.com/dsh-external/telegram) | Telegram Bot API 桥接（长轮询、per-chat 会话） |
| [tg-bot](https://github.com/dsh-external/tg-bot) | Telegram remote channel |

## 🛠 基础设施（35）

| 仓库 | 描述 |
|---|---|
| [Recall](https://github.com/dsh-external/Recall) | 独立 Rust 工具：切换 agent 保留记忆，本地优先搜索 AI 编码会话 |
| [deepseek-harness-desktop](https://github.com/dsh-external/deepseek-harness-desktop) | 桌面端（TypeScript / SEA） |
| [deepseek-harness-distro](https://github.com/dsh-external/deepseek-harness-distro) | 自定义发行版 |
| [ds_web_craw](https://github.com/dsh-external/ds_web_craw) | DS web 爬虫工具（Rust） |
| [dsh-android](https://github.com/dsh-external/dsh-android) | 在 Android 设备上运行 dsh |
| [dsh-browser](https://github.com/dsh-external/dsh-browser) | Chrome 侧边栏拓展：直接操作浏览器 |
| [dsh-coding-receipt](https://github.com/dsh-external/dsh-coding-receipt) | 把会话日志变成可分享的编码收据 |
| [dsh-companion](https://github.com/dsh-external/dsh-companion) | 常驻桌面助手：全局唤起 / 定时自动化 / 快捷回复 / 插件市场 |
| [dsh-desktop](https://github.com/dsh-external/dsh-desktop) | 桌面端（Go + 系统托盘） |
| [dsh-desktop-electron](https://github.com/dsh-external/dsh-desktop-electron) | 跨平台 Electron 桌面壳：托盘常驻独立窗口运行自己的 dsh web，不捆绑 Node 运行时 |
| [dsh-desktop-mac](https://github.com/dsh-external/dsh-desktop-mac) | macOS 桌面端（Swift） |
| [dsh-desktop-tools](https://github.com/dsh-external/dsh-desktop-tools) | DSH 桌面工具集：一键启动、自动升级、开机自启、PWA 可安装补丁 |
| [dsh-hub](https://github.com/dsh-external/dsh-hub) | OMDSH 社区扩展 Hub：基于官方 DeepSeek Harness 契约构建 |
| [dsh-island](https://github.com/dsh-external/dsh-island) | macOS Dynamic Island 刘海面板（codeisland 复刻），DSH 桌面辅助 |
| [dsh-mygo](https://github.com/dsh-external/dsh-mygo) | managed-plugin bridge 源仓库：Cordis-free 插件契约 + 挂载/校验/排序/分发/持久化/恢复（packages/ 多包） |
| [dsh-ohos-patch](https://github.com/dsh-external/dsh-ohos-patch) | 让 deepseek harness 能在 ohos 上跑（平台移植） |
| [dsh-pet-rs](https://github.com/dsh-external/dsh-pet-rs) | DSH 桌宠（Rust 原生版）：桌面宠物鲸鱼，三端支持（Windows/macOS/Linux）——独立桌面应用（非插件） |
| [dsh-public-repo-monitor](https://github.com/dsh-external/dsh-public-repo-monitor) | 组织公开仓库监控（Rust） |
| [dsh-trace](https://github.com/dsh-external/dsh-trace) | DeepSeek Harness telemetry backend：导出 turns / model steps |
| [dsh-tui](https://github.com/dsh-external/dsh-tui) | DSH TUI 实现（WIP 占位） |
| [dsh-vscode](https://github.com/dsh-external/dsh-vscode) | 原生 VS Code 聊天集成（Native VS Code chat integration for DeepSeek Harness） |
| [dsh-win-port](https://github.com/dsh-external/dsh-win-port) | Windows 移植 |
| [fabric](https://github.com/dsh-external/fabric) | 类似 MC Fabric 的 hook 处理器（WIP 占位） |
| [marisa](https://github.com/dsh-external/marisa) | 外部插件管理器（dshx）：topic 自动发现 + 安装/启停/面板 |
| [oh-dsh-desktop](https://github.com/dsh-external/oh-dsh-desktop) | Extensible macOS workbench for DeepSeek Harness（原生 PTY、worktree） |
| [oh-my-dsh-distribution](https://github.com/dsh-external/oh-my-dsh-distribution) | Pure-data Oh My DSH distribution Recipes（发行版） |
| [plugin-registry](https://github.com/dsh-external/plugin-registry) | 薄控制台（0 patch）：浏览器管理官方 repository 插件（.dsh-plugin 源增删/更新）与 bundle 插件（loader 树运行时启停/安装/更新）；旧 dsh.plugin.json 机制已移除（2026-08） |
| [plugin-template](https://github.com/dsh-external/plugin-template) | DSH 插件模板仓库（脚手架）：从官方 Turtle UI 插件蒸馏的最小独立仓库模板 |
| [repo-visibility-guard](https://github.com/dsh-external/repo-visibility-guard) | 自动修复组织内公开仓库（visibility guard） |
| [sandbox-micro](https://github.com/dsh-external/sandbox-micro) | microsandbox 沙盒支持（fail-closed microVM：ctx.microsandbox provider + 模型面工具） |
| [sandbox-mxc](https://github.com/dsh-external/sandbox-mxc) | 微软跨平台沙盒支持 |
| [sandbox-nono](https://github.com/dsh-external/sandbox-nono) | nono 沙盒支持 |
| [tonghuashun-harness](https://github.com/dsh-external/tonghuashun-harness) | 同花顺风格终端式 DSH 前端占位仓库：K 线图以股票行情隐喻展示代码量（placeholder，分类推断） |
| [web-components](https://github.com/dsh-external/web-components) | web-components 支持 |
| [zephyr](https://github.com/dsh-external/zephyr) | 基于上游 DeepSeek Harness 的轻量化发行版：Vite 风格装配 DSL（define*）+ CLI（zephyr dev/run） |

## 🔬 研究（5）

| 仓库 | 描述 |
|---|---|
| [dsh-plugin-radar](https://github.com/dsh-external/dsh-plugin-radar) | DSH 插件兼容性雷达：每日自动扫描 org 插件与 mainline 兼容性（原 dsh-external-research 改名） |
| [dsh-scholar](https://github.com/dsh-external/dsh-scholar) | 空仓库，分类为推断（占位），待描述填充后复核 |
| [dsh-security](https://github.com/dsh-external/dsh-security) | DSH 攻击链 demo（n1-config-eval / f1-vm-escape / skill-injection；勿外传或利用） |
| [dshfind](https://github.com/dsh-external/dshfind) | dsh 学习资源与导航站（MDX/Next.js）：从 0 开始学习 dsh，dsh.com 资源导航 |
| [savemoneybenchmark](https://github.com/dsh-external/savemoneybenchmark) | 降本增效 benchmark（examples + skills） |

## 未分类（10）

| 仓库 | 描述 |
|---|---|
| [Top](https://github.com/dsh-external/Top) | 占位仓库（先占个位，内容开发中） |
| [dsh-build](https://github.com/dsh-external/dsh-build) | 空仓库（待填充后复核） |
| [dsh-code](https://github.com/dsh-external/dsh-code) | 空仓库（待填充后复核） |
| [dsh-fkin-vibe](https://github.com/dsh-external/dsh-fkin-vibe) | 空仓库（待填充后复核） |
| [dsh-hmz](https://github.com/dsh-external/dsh-hmz) | 空仓库（待填充后复核） |
| [dsh-remote](https://github.com/dsh-external/dsh-remote) | 类似 Codex APP 的通过 SSH 控制远端机器能力（占位，待填充后复核） |
| [dsh-ui-webview](https://github.com/dsh-external/dsh-ui-webview) | 空仓库（待填充后复核） |
| [dsh_ide](https://github.com/dsh-external/dsh_ide) | DSH IDE 大工程：集成开发环境方向（占位，待填充后复核） |
| [dsh_workflow](https://github.com/dsh-external/dsh_workflow) | Dynamic Workflow for dsh（占位，待填充后复核） |
| [oh-my-deepseek](https://github.com/dsh-external/oh-my-deepseek) | 空仓库（待填充后复核） |

## 插件集

### toybox

| 插件 | 描述 |
|---|---|
| `almanac-mcp` | toybox 插件：老黄历·今日宜忌 MCP 服务器（宜忌/抽签/每日一诗，零依赖） · `github:dsh-external/toybox#HEAD&path:/plugins/almanac-mcp/.dsh-plugin` |
| `bug-tamer` | toybox 插件：Bug 驯兽师——诱捕（最小复现）→ 驯化（根因）→ 放归（回归测试）→ 饲养手册（防复发） · `github:dsh-external/toybox#HEAD&path:/plugins/bug-tamer/.dsh-plugin` |
| `chinese-colors-mcp` | toybox 插件：中国传统色 MCP（60 色库：搜索/今日色/色板，带典故） · `github:dsh-external/toybox#HEAD&path:/plugins/chinese-colors-mcp/.dsh-plugin` |
| `code-archaeologist` | toybox 插件：以考古学家的方式解剖遗留代码，产出地层判定、文物登记与保护性迁移建议 · `github:dsh-external/toybox#HEAD&path:/plugins/code-archaeologist/.dsh-plugin` |
| `code-talent-scout` | toybox 插件：代码星探——函数选秀 S/A/B/C 评级，找出最该重写的 Top 1，附带证据的评委点评 · `github:dsh-external/toybox#HEAD&path:/plugins/code-talent-scout/.dsh-plugin` |
| `decision-dice-mcp` | toybox 插件：决策骰子 MCP（抛硬币/掷骰/命运抉择，选择困难的天意裁决） · `github:dsh-external/toybox#HEAD&path:/plugins/decision-dice-mcp/.dsh-plugin` |
| `naming-master-mcp` | toybox 插件：取名大师 MCP（古风/赛博/极简/程序员梗四种风格起名，同 seed 稳定） · `github:dsh-external/toybox#HEAD&path:/plugins/naming-master-mcp/.dsh-plugin` |
| `time-capsule-mcp` | toybox 插件：时间胶囊 MCP（封存想法，N 天后开启，写给未来的自己） · `github:dsh-external/toybox#HEAD&path:/plugins/time-capsule-mcp/.dsh-plugin` |

### dsh-github-integration

| 插件 | 描述 |
|---|---|
| `github-integration` | dsh-github-integration 插件：GitHub issue/PR 修复战役工作流 skill（配合 packages/github 工具源码包使用） · `github:dsh-external/dsh-github-integration#HEAD&path:/plugins/github-integration/.dsh-plugin` |

### official-plugins-port

| 插件 | 描述 |
|---|---|
| `claude-code-review` | Automated code review for pull requests: multi-perspective review with high-signal issue filtering, output to terminal o · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/claude-code-review` |
| `claude-commit-commands` | Streamline your git workflow with simple commands for committing, pushing, and creating pull requests (port of Anthropic · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/claude-commit-commands` |
| `claude-explanatory-output-style` | Adds educational insights about implementation choices and codebase patterns to every response, mimicking the deprecated · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/claude-explanatory-output-style` |
| `claude-feature-dev` | Comprehensive feature development workflow with dedicated stages for codebase exploration, architecture design, and qual · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/claude-feature-dev` |
| `claude-frontend-design` | Frontend design skill: distinctive, production-grade UI/UX implementation guidance that avoids generic AI aesthetics (po · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/claude-frontend-design` |
| `claude-learning-output-style` | Interactive learning mode that requests meaningful code contributions at decision points and provides educational insigh · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/claude-learning-output-style` |
| `claude-security-guidance` | Security review for agent-generated code: pattern-based warnings on edits, a security_scan tool, and a system-prompt rem · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/claude-security-guidance` |
| `codex-airtable` | Airtable is the database and operations layer for your agents — create bases and schema, work with records, filter and s · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-airtable` |
| `codex-build-macos-apps` | Build, run, test, debug, and package local macOS apps with Xcode, SwiftUI, AppKit interop, and shell-first desktop workf · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-build-macos-apps` |
| `codex-build-web-apps` | Build web apps with frontend asset design, browser testing, UI components, payments, and database guidance (port of Open · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-build-web-apps` |
| `codex-codex-security` | Security scan, analysis, and investigation workflows: repository security scans and static triage of existing findings ( · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-codex-security` |
| `codex-figma` | Figma workflows for design implementation, Code Connect templates, and design system rule generation (port of OpenAI's o · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-figma` |
| `codex-github` | Inspect repositories, triage pull requests and issues, debug CI, and publish changes through gh CLI workflows (port of O · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-github` |
| `codex-gmail` | Work with Gmail using the configured Gmail app connector — read and manage Gmail: summarize inbox activity, triage, sear · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-gmail` |
| `codex-google-calendar` | Connect Google Calendar for scheduling, availability, daily briefs, and event management (port of OpenAI's official goog · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-google-calendar` |
| `codex-linear` | Find and reference issues and projects — manage issues, projects, and team workflows in Linear (port of OpenAI's officia · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-linear` |
| `codex-notion` | Notion workflows for implementation planning, research synthesis, meeting preparation, and knowledge capture (port of Op · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-notion` |
| `codex-posthog` | Analyze product data and manage experiments in PostHog — product analytics, trends/funnels/insights, HogQL queries, feat · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-posthog` |
| `codex-sentry` | Inspect recent issues and events in Sentry from DSH — error monitoring, issue triage, and performance (port of OpenAI's · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-sentry` |
| `codex-slack` | Work with Slack using the configured Slack integration — read and manage Slack: summarize channels, draft messages, orga · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-slack` |
| `codex-stripe` | Payments and business tools — runtime Stripe operations (balance/customers/products/payment intents/refunds/invoices/sub · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-stripe` |
| `codex-vercel` | Build and deploy web apps and agents — Vercel deployment, preview URLs, log debugging, and environment variable manageme · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-vercel` |
| `codex-zotero` | Work with Zotero from DSH: search your library, export BibTeX, insert citations, and import references through the Zoter · `github:dsh-external/official-plugins-port#HEAD&path:/plugins/codex-zotero` |

### dsh-toolkit

| 插件 | 描述 |
|---|---|
| `dsh-tool-calculator` | DSH calculator tool · `github:dsh-external/dsh-toolkit#HEAD&path:/packages/dsh-tool-calculator` |
| `dsh-tool-csv` | DSH CSV data tool: parse/query/stats over RFC 4180 CSV text, zero-dependency state-machine parser · `github:dsh-external/dsh-toolkit#HEAD&path:/packages/dsh-tool-csv` |
| `dsh-tool-diff` | DSH diff tool: structured comparison of text/JSON/CSV/Markdown plus unified diff generation and in-memory patch validati · `github:dsh-external/dsh-toolkit#HEAD&path:/packages/dsh-tool-diff` |
| `dsh-tool-encoding` | DSH encoding tool plugin · `github:dsh-external/dsh-toolkit#HEAD&path:/packages/dsh-tool-encoding` |
| `dsh-tool-json` | DSH JSON query tool · `github:dsh-external/dsh-toolkit#HEAD&path:/packages/dsh-tool-json` |
| `dsh-tool-markdown` | DSH Markdown tool: HTML-to-Markdown conversion, whitelisted Markdown-to-HTML, GFM table normalization, TOC generation. Z · `github:dsh-external/dsh-toolkit#HEAD&path:/packages/dsh-tool-markdown` |
| `dsh-tool-regex` | DSH regex tool: test/find/replace over text plus static pattern explanation, zero-dependency with ReDoS guards · `github:dsh-external/dsh-toolkit#HEAD&path:/packages/dsh-tool-regex` |
| `dsh-tool-schema` | DSH JSON Schema validation tool: validate, failure paths, static explain, default-only normalize; zero-network, zero-dyn · `github:dsh-external/dsh-toolkit#HEAD&path:/packages/dsh-tool-schema` |
| `dsh-tool-stat` | DSH statistics tool: describe/percentile/frequency/correlation over explicit finite numeric arrays, zero-dependency, det · `github:dsh-external/dsh-toolkit#HEAD&path:/packages/dsh-tool-stat` |
| `dsh-tool-time` | DSH time tool plugin · `github:dsh-external/dsh-toolkit#HEAD&path:/packages/dsh-tool-time` |

### dsh-harness-ops

| 插件 | 描述 |
|---|---|
| `dsh-restart-recover` | Restart recovery for dsh web: after a crash/restart, an interrupted agent turn continues automatically (host-side agent/ · `github:dsh-external/dsh-harness-ops#HEAD&path:/plugins/dsh-restart-recover` |
| `dsh-session-recovery` | 诊断并修复 DeepSeek Harness 会话丢失/消失事故：GUI 侧边栏显示 \"0 sessions\"、会话列表为空、session 全部不见了、或出现 \"corrupt Zstandard session log\" / \ · `github:dsh-external/dsh-harness-ops#HEAD&path:/skills/dsh-session-recovery/SKILL.md` |
| `dsh-snapshot-ab` | 每日上游快照的 A/B 双槽轮换 + 官方改动提炼机制。上游官方（dsh2026/test-fakechris）每天发布新的 · `github:dsh-external/dsh-harness-ops#HEAD&path:/skills/dsh-snapshot-ab/SKILL.md` |
| `dsh-web-doctor` | dsh web 挂了/A/B 双槽都起不来时的 out-of-band 医生：不依赖 web 进程，纯终端一键诊断 · `github:dsh-external/dsh-harness-ops#HEAD&path:/skills/dsh-web-doctor/SKILL.md` |
| `dsh-web-guard` | dsh web 自愈——重启自动拉起 + 自动继续。agent 运行在 dsh web 进程内，kill 掉 3080 等于杀掉自己，无法自救。本 skill 提供完整的重启自愈：① 守护（scripts/install.sh 装成系统服务 · `github:dsh-external/dsh-harness-ops#HEAD&path:/skills/dsh-web-guard/SKILL.md` |

### dsh-edu

| 插件 | 描述 |
|---|---|
| `dsh-edu-course` | 教育版插件：课程与讲义管理（edu_course_* 工具 + /course 命令），数据存 $DSH_HOME/storages/edu/course · `github:dsh-external/dsh-edu#HEAD&path:/packages/dsh-edu-course` |
| `dsh-edu-exercise` | 教育版插件：作业生成与批改（edu_exercise_* 工具 + /exercise 命令），数据存 $DSH_HOME/storages/edu/exercise · `github:dsh-external/dsh-edu#HEAD&path:/packages/dsh-edu-exercise` |
| `dsh-edu-flashcard` | 教育版插件：记忆卡片 SM-2 间隔重复（edu_card_* 工具 + /card 命令），数据存 $DSH_HOME/storages/edu/cards · `github:dsh-external/dsh-edu#HEAD&path:/packages/dsh-edu-flashcard` |
| `dsh-edu-focus` | 教育版插件：番茄钟/专注计时（edu_focus_* 工具 + /focus 命令 + 学习日志），数据存 $DSH_HOME/storages/edu/focus · `github:dsh-external/dsh-edu#HEAD&path:/packages/dsh-edu-focus` |
| `dsh-edu-hub` | 教育版 dsh 安装器（ohmydsh 式）：edush CLI（init/status/uninstall/list）+ /edu 状态命令 · `github:dsh-external/dsh-edu#HEAD&path:/packages/dsh-edu-hub` |
| `dsh-edu-mistakes` | 教育版插件：错题本（edu_mistake_* 工具 + /mistake 命令，复习队列调度），数据存 $DSH_HOME/storages/edu/mistakes · `github:dsh-external/dsh-edu#HEAD&path:/packages/dsh-edu-mistakes` |
| `dsh-edu-quiz` | 教育版插件：测验与刷题（edu_quiz_* 工具 + /quiz 命令，可配合 dsh-genui quiz 组件渲染），数据存 $DSH_HOME/storages/edu/quiz · `github:dsh-external/dsh-edu#HEAD&path:/packages/dsh-edu-quiz` |

## 🌐 公开插件 Topic（529）

> 来自 GitHub 公开 [dsh-plugin Topic](https://github.com/topics/dsh-plugin)；共发现 566 个仓库，上方 hub 目录未覆盖的公开仓库列于此处。

| 仓库 | 描述 |
|---|---|
| [030611/dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) | Fail-closed export-copy redaction for DeepSeek Harness session telemetry |
| [030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) | Privacy-minimal heuristic per-turn verification summaries for DeepSeek Harness |
| [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) | Observe-only hash-chained evidence receipts for DeepSeek Harness |
| [0xsline/awesome-deepseek-harness](https://github.com/0xsline/awesome-deepseek-harness) | DeepSeek Harness (DSH) ecosystem: curated plugins, tools, and infrastructure from dsh-external/hub and the public dsh-plugin topic. |
| [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | Keyboard-first command palette for DeepSeek Harness Web |
| [147228/dsh-black-whale](https://github.com/147228/dsh-black-whale) | DeepSeek Harness 黑鲸实验室主题：官网黑鲸 × 夕小瑶 IP，真实 profile 可安装的 Web UI 插件 |
| [1475505/dsh-plugin-miliastra-toolbox](https://github.com/1475505/dsh-plugin-miliastra-toolbox) | 将千星沙箱（原神千星奇域）知识库接入 Deepseek Harness 的插件 |
| [1690834643/dsh-usage-dashboard](https://github.com/1690834643/dsh-usage-dashboard) | 暂无描述 |
| [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | DSH 原生鸿蒙设备桥：hdc 工具让 Agent 完成截图-看图-装包-验证的闭环调试 / DSH-native HarmonyOS device bridge |
| [384961890-ui/pawin-brain-deepseek-harness](https://github.com/384961890-ui/pawin-brain-deepseek-harness) | A brain-inspired runtime for DeepSeek Harness agents — remember, self-correct, learn. v0.1 ships memory (injection, notes, recall), 100% covered. |
| [918154429/dsh-codex-import](https://github.com/918154429/dsh-codex-import) | Read-only Codex setup compatibility scanner for DeepSeek Harness |
| [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) | 暂无描述 |
| [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) | My DSH plugins |
| [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) | ✨ Awesome DSH Plugins — DeepSeek Harness plugin directory with daily compatibility tracking ｜ DeepSeek Harness 插件生态目录与每日兼容性追踪 |
| [AdamPlatin123/dsh-tonghuashun](https://github.com/AdamPlatin123/dsh-tonghuashun) | DSH harness 客户端插件：同花顺行情终端风格皮肤 + 代码量 K 线行情面板（ui-skin-ths + ui-market） |
| [alaliqing/claude-paper](https://github.com/alaliqing/claude-paper) | 📚 Claude Code plugin that automates research papers study with automatic material generation, code demonstrations, and interactive web viewer. |
| [Alex-Yanggg/awesome-DSH-plugin](https://github.com/Alex-Yanggg/awesome-DSH-plugin) | A meticulously curated list of useful plugins, extensions, tools and development resources built for DSH, covering productivity enhancement, functional expansion, debugging utilities and custom development modules. |
| [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | 把你鲸鱼娘思考时的 deep diving 自定义成任意你想要的样子 |
| [Alyosha28/deep_option](https://github.com/Alyosha28/deep_option) | 港美股期权研究与风险 Agent（公开 source-available 原型） |
| [AnacondaKC/dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) | 暂无描述 |
| [AnacondaKC/dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) | DSH WebUI 侧栏短视频插件：原生播放器、系列导航、直链解析与精确历史回放 |
| [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | 有效解决了写代码的时候账户不能同时亏钱的BUG |
| [Andy8647/dsh-auto-approval](https://github.com/Andy8647/dsh-auto-approval) | 暂无描述 |
| [Anionex/agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) | 为纯文本模型"看图“设计更好的视觉工具箱和技能，支持多图理解，图片问答，前端UI还原、GUI 自动化等，并可选无缝接入多个主流agent，直接识别粘贴图片｜ A vision toolkit and skill designed for text-only llms — image Q&A, long-screenshot OCR, frontend UI restoration, and GUI automation, with optional seamless integration for Codex, Claude Code, Pi, Oh My Pi, and OpenCode |
| [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | 为 DeepSeek Harness 提供电脑控制插件：新鲜 Accessibility 观测、过期状态拒绝、作用域权限与安全输入（目前支持macos）｜Accessibility-first macOS Computer Use bundle for DSH with fresh observations, stale-state rejection, scoped permissions, and safe input. |
| [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | deepseek harness对话回退插件 \| DSH — rewind conversation and workspace state, powered by a persistent Change Ledger |
| [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | 让纯文本模型更好地做视觉任务的DeepSeek Harness插件：带意图的图片问答、长截图 OCR、UI 还原等｜DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diff, Artifacts, and Web UI. |
| [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform backends, Playwright rendering) |
| [AprilWizard/dsh-multi-cot](https://github.com/AprilWizard/dsh-multi-cot) | Multi-CoT plugin for DeepSeek Harness: multi-sampled test-time compute, internal voting, and a plan/execute/review workflow |
| [ArtificialNotImbecile/dsh-context-taxonomy](https://github.com/ArtificialNotImbecile/dsh-context-taxonomy) | Logical-call context taxonomy plugin for DeepSeek Harness |
| [asdf17128/dsh-doctor](https://github.com/asdf17128/dsh-doctor) | Find what your DeepSeek Harness (dsh) patches silently broke — dead patches, config fields dropped by whole-config replacement, unmaintained plugins. Read-only, zero deps. |
| [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) | A curated list of plugins for DeepSeek Harness (dsh) · DeepSeek Harness 插件精选列表 |
| [Bandersnatch0x/amber-protocol](https://github.com/Bandersnatch0x/amber-protocol) | Amber Protocol: repository-local governance for coding agents, including a DeepSeek Harness (dsh) patch overlay. |
| [Bandersnatch0x/design-playbook](https://github.com/Bandersnatch0x/design-playbook) | Design I/O plugin for Claude Code & coding agents — declarations + contracts that make UI generation constrained, reviewable, and recirculatable. Not a style pack; composes with ui-ux-pro-max + frontend-design. |
| [BeAChanger/dsh-openclaw-acp](https://github.com/BeAChanger/dsh-openclaw-acp) | DeepSeek Harness bundle for OpenClaw and WeChat over ACP |
| [ben7am1n/dsh-browser](https://github.com/ben7am1n/dsh-browser) | Playwright-powered browser automation for DeepSeek Harness |
| [ben7am1n/dsh-claude-marketplace](https://github.com/ben7am1n/dsh-claude-marketplace) | Claude Code marketplace compatibility for DeepSeek Harness |
| [ben7am1n/dsh-deepseek-usage](https://github.com/ben7am1n/dsh-deepseek-usage) | DeepSeek balance and token usage tools for DeepSeek Harness |
| [ben7am1n/dsh-lens-lite](https://github.com/ben7am1n/dsh-lens-lite) | Post-edit diagnostics for DeepSeek Harness |
| [ben7am1n/dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) | Context-cheap lazy MCP access for DeepSeek Harness |
| [ben7am1n/dsh-memory](https://github.com/ben7am1n/dsh-memory) | Durable cross-session SQLite memory for DeepSeek Harness |
| [ben7am1n/dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) | 暂无描述 |
| [ben7am1n/dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) | 暂无描述 |
| [ben7am1n/dsh-telegram](https://github.com/ben7am1n/dsh-telegram) | 暂无描述 |
| [ben7am1n/dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) | 暂无描述 |
| [benzhoupo/dsh-effort-config](https://github.com/benzhoupo/dsh-effort-config) | dsh plugin: configure reasoning-effort levels (wire spellings), route default level and Anthropic token budgets for third-party models from the settings page; selection reuses the native model-picker Effort panel. |
| [bill9109/dsh-101](https://github.com/bill9109/dsh-101) | DSH 文档阅读模式 |
| [bill9109/dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) | 分享任意段落的 DSH 对话 |
| [bill9109/dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) | 为 DSH Web UI 增加跨平台文件拖拽与原始路径插入能力，无需复制文件 |
| [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | 为 DSH 增加桌面通知提醒 |
| [bill9109/dsh-webbridge](https://github.com/bill9109/dsh-webbridge) | DSH 结合 Kimi WebBridge |
| [bitterSmilezzz/dsh-mac-desktop](https://github.com/bitterSmilezzz/dsh-mac-desktop) | DeepSeek Harness plugin: open the Web GUI in a native macOS desktop window (SwiftUI + WKWebView). |
| [bitterSmilezzz/dsh-model-selector](https://github.com/bitterSmilezzz/dsh-model-selector) | DeepSeek Harness web plugin: provider-group collapse + name search for the conversation model picker. |
| [bitterSmilezzz/dsh-skill-manager](https://github.com/bitterSmilezzz/dsh-skill-manager) | Skills management page for DeepSeek Harness Web Settings (dsh plugin) |
| [bobleer/deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) | MCP server that lets any agent discover, install, and run DeepSeek Harness plugins (topic: dsh-plugin). |
| [bobleer/dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | BitFun 与 DSH ACP 交互对接 插件 |
| [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) | DSH插件市场 / DSH Plugin Marketplace: 在 DeepSeek Harness Web GUI 中一键浏览、安装与更新 GitHub topic:dsh-plugin 的全部插件 \| browse, install & update all GitHub dsh-plugin plugins in the DSH Web GUI |
| [bruc3van/awesome-dsh-plugin](https://github.com/bruc3van/awesome-dsh-plugin) | 用 30 秒找到适合你的 DeepSeek Harness 插件。 不只是仓库列表：这里告诉你插件解决什么问题、适合谁，以及从哪里开始。 |
| [bruc3van/dsh-desktop](https://github.com/bruc3van/dsh-desktop) | DeepSeek Harness Desktop 是一款社区维护的非官方第三方桌面客户端，通过直接加载官方 Web UI，为普通用户提供开箱即用的独立桌面体验：它可以自动复用本机已运行的官方实例，也可以使用安装包内置的 dsh 运行时启动服务，无需用户额外安装 Node.js 或 CLI，并提供智能连接、远程实例连接、托盘常驻、运行时监护和异常恢复等桌面增强。 |
| [BruceWu1126/dsh-web-background](https://github.com/BruceWu1126/dsh-web-background) | DeepSeek Harness Web UI background customization plugin |
| [btspoony/dsh-advisor](https://github.com/btspoony/dsh-advisor) | Advisor - Pair a second model that passively reviews each turn and injects notes.  搭配一个会在每轮对话被动注入见解和审查的副模型。 |
| [btspoony/dsh-llm-fallbacks](https://github.com/btspoony/dsh-llm-fallbacks) | An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件 |
| [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | A Skill-driven Harness/Loop Engineering Workflow Agent Plugin |
| [Buyi-wsgzg/dsh-sidechain](https://github.com/Buyi-wsgzg/dsh-sidechain) | DSH 侧会话插件：/side 持续性侧会话（Codex 风格）与 /btw 一次性侧问（Claude 风格）——在临时 fork 中运行、不写入主会话历史；Web UI 右侧链面板内嵌对话，主会话保持不变 |
| [CanglongCl/dsh-web-review](https://github.com/CanglongCl/dsh-web-review) | DeepSeek Harness Web GUI 的网页预览与元素批注插件，让 AI 根据可视化反馈直接修改前端源码。 |
| [cccakeee/awesome-dsh-plugins](https://github.com/cccakeee/awesome-dsh-plugins) | A curated, evidence-led directory of DeepSeek Harness (DSH) plugins: verified loadable extensions, skills, and permission-aware installation guidance. |
| [ccch1mneyyy/dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) | DSH 官方尚无终端 TUI 的补位之作：Claude Code 风格全屏交互终端插件——像素鲸鱼顶栏、实时工作状态行、思考流式展开、双击 Esc 回滚、上下文进度条 + TPS 仪表。npm 一键安装。 |
| [ccch1mneyyy/dsh-working-activity](https://github.com/ccch1mneyyy/dsh-working-activity) | DSH 实时模型工作状态行：俏皮思考文案、运行中的工具、回合总结、自我叙述（⏵）— 用于 TUI 提示栏与 Web UI |
| [ccq1/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) | DSH 侧边栏，集成文件浏览器、终端和 Git 审查，方便预览文件。 |
| [cendaifeng/dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) | 暂无描述 |
| [chen-001/dsh-chat-width](https://github.com/chen-001/dsh-chat-width) | Adjust the width of dsh's reply. |
| [chen-001/dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) | Use dsh via grok-build's TUI. |
| [Chi-hong22/dsh-mdbox](https://github.com/Chi-hong22/dsh-mdbox) | DeepSeek Harness (DSH) Web 输入框的 Markdown 编辑辅助插件。 |
| [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | Cross-instance message/event handoff plugins for DSH (interconnect service + tools) |
| [ChisaAlter/Deepseek-Harness-Desktop](https://github.com/ChisaAlter/Deepseek-Harness-Desktop) | Electron desktop shell for DeepSeek Harness web UI |
| [chyra-moon/deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) | DeepSeek Harness desktop shell: 1:1 replica of the official web UI as a Windows desktop app (community project) |
| [Civitasv/dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) | Colorscheme Plugin For DeepSeek Harness |
| [cking000bigdemon/dsh-toolbelt](https://github.com/cking000bigdemon/dsh-toolbelt) | Eight DeepSeek Harness plugins: persona, language guard, per-request vision fallback, python/windows write guards, cross-agent memory, image generation, and skill shell injection. |
| [clingclingcling/dsh-plugin-wenfeng-dancing](https://github.com/clingclingcling/dsh-plugin-wenfeng-dancing) | dsh web ui插件，思考的时候背景的梁子会跳舞 |
| [codeAnqiang-ma/dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) | Superpowers (obra/superpowers) as a DeepSeek Harness plugin: the methodology skills plus their session bootstrap |
| [cofy-x/axern](https://github.com/cofy-x/axern) | Open-source sandboxes for AI agents, untrusted code execution, and durable services. |
| [cogine-ai/marketplace](https://github.com/cogine-ai/marketplace) | 暂无描述 |
| [coppynight/dsh-doctor](https://github.com/coppynight/dsh-doctor) | DSH 插件：flutter-doctor 风格诊断与修复（安装级 + harness 内检查，安全自动修复）。官方 repository-plugin（.dsh-plugin 格式） |
| [crayonlu/dsh-web-search-firecrawl](https://github.com/crayonlu/dsh-web-search-firecrawl) | Firecrawl-backed web search provider for DeepSeek Harness (ctx.web) — no DeepSeek API key required |
| [crayonlu/dsh-web-search-tavily](https://github.com/crayonlu/dsh-web-search-tavily) | Tavily-backed web search provider for DeepSeek Harness (ctx.web) — no DeepSeek API key required |
| [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广播 · 会话搜索 · 提示词管理器 · 临时信息便签——零核心修改、零运行时依赖，随装随用、卸载即净。 |
| [cute-baobao/dsh-usage-meter](https://github.com/cute-baobao/dsh-usage-meter) | DeepSeek Harness plugin: per-model daily token usage recorder (input/output/cache hits) with a Web GUI dashboard. |
| [dbydd/dsh-onlyne](https://github.com/dbydd/dsh-onlyne) | IM gateway for DeepSeek Harness agents — send and receive QQ, WeChat, Feishu and Telegram messages from dsh sessions. |
| [DDDFXYqiming/Agent_Extensions](https://github.com/DDDFXYqiming/Agent_Extensions) | Agent Skills & DeepSeek Harness (DSH) 扩展库：通用智能体技能（General_skills）+ DSH 标准插件（dsh-plugin），开箱即用的 AI Agent 能力增强集合。 |
| [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | DeepSeek Harness: Everything is a Plugin. |
| [Degurechaff57/dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) | Safe OpenAPI 3.x discovery and API calling tools for DeepSeek Harness |
| [Demogorgon314/dsh-resume-plugin](https://github.com/Demogorgon314/dsh-resume-plugin) | 让 DeepSeek Harness 安全读取并继续 Codex 与 Claude Code 的历史会话。 |
| [detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) | 暂无描述 |
| [detpecca/DSH-Wiki](https://github.com/detpecca/DSH-Wiki) | 暂无描述 |
| [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | 提供新的「聚焦会话」精简会话视图，更轻松易于阅读，只关注最终产出结果。 |
| [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词 |
| [Dino6021/dsh-usage-cost](https://github.com/Dino6021/dsh-usage-cost) | DSH plugin: per-step timestamped DeepSeek API usage timeline + peak/off-peak cost readout. Official bundle; install via: dsh plugin --profile web add github:Dino6021/dsh-usage-cost#main |
| [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness) | A curated list of plugins, skills, MCP servers, orchestrators & UIs for DeepSeek Harness (DSH). Visualization · PPT · Coding · Agents · Loops (auto-research) and more. #dsh |
| [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | 让任务状态在 DeepSeek Harness、Claude Code、Codex 等 AI Harness 之间接力 |
| [Drifter-yh/dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) | Declarative deny-by-default tool policy plugin for DeepSeek Harness |
| [dsh-external/awesome-dsh-plugins](https://github.com/dsh-external/awesome-dsh-plugins) | DSH 插件兼容性雷达：每日自动扫描 org 插件与 mainline 接口漂移（补丁/seam/peerDeps 四维对比 + 编译验证），公测前兼容性检查站 |
| [dsh-external/dsh-agent-teams](https://github.com/dsh-external/dsh-agent-teams) | AgentTeams plugin for DeepSeek Harness |
| [dsh-external/dsh-at-file](https://github.com/dsh-external/dsh-at-file) | dsh-at-file 是 DeepSeek Harness Web GUI 的一个 Codex 风格 @ 文件提及插件：在输入框输入 @ 即可实时智能搜索并选中工作区文件（或目录），发送时自动把文件内容交给模型、同时保留可点击打开的文件链接。 |
| [dsh-external/dsh-automation](https://github.com/dsh-external/dsh-automation) | DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并保留可审计历史。 / A DSH automation plugin for scheduled coding runs in fresh Agent sessions with auditable history. |
| [dsh-external/dsh-better-browser](https://github.com/dsh-external/dsh-better-browser) | DSH Better Browser：通过 Kimi WebBridge 驱动用户真实浏览器的 13 个 webbridge_* 工具，保留登录态，零核心改动。 |
| [dsh-external/dsh-book2skill](https://github.com/dsh-external/dsh-book2skill) | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel |
| [dsh-external/dsh-custom-tool](https://github.com/dsh-external/dsh-custom-tool) | 在设置界面用 Monaco 编辑器编写自己的 JavaScript 工具，让模型在授权范围内自主扩展，沙箱隔离执行。 |
| [dsh-external/dsh-daily-fortune](https://github.com/dsh-external/dsh-daily-fortune) | DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes |
| [dsh-external/dsh-daily-progress](https://github.com/dsh-external/dsh-daily-progress) | 暂无描述 |
| [dsh-external/dsh-deeptag](https://github.com/dsh-external/dsh-deeptag) | WIP organization collaboration layer for DeepSeek Harness: IM routing, scoped memory, and proactive follow-ups |
| [dsh-external/dsh-doctor](https://github.com/dsh-external/dsh-doctor) | DSH 插件：flutter-doctor 风格诊断与修复（安装级 + harness 内检查，安全自动修复）。官方 repository-plugin（.dsh-plugin 格式），cordis.patch.yml 安装：github:dsh-external/dsh-doctor#<commit>&path:/.dsh-plugin |
| [dsh-external/dsh-ernie-image](https://github.com/dsh-external/dsh-ernie-image) | 暂无描述 |
| [dsh-external/dsh-eye-care](https://github.com/dsh-external/dsh-eye-care) | Warm light, warm dark, and system-aware eye-care themes for DSH Web |
| [dsh-external/dsh-fun-typewriter](https://github.com/dsh-external/dsh-fun-typewriter) | DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets |
| [dsh-external/dsh-fun-weather](https://github.com/dsh-external/dsh-fun-weather) | DSH weather tab and weather-following themes powered by Open-Meteo |
| [dsh-external/dsh-longbridge](https://github.com/dsh-external/dsh-longbridge) | 暂无描述 |
| [dsh-external/dsh-luna-vision-bridge](https://github.com/dsh-external/dsh-luna-vision-bridge) | DSH adapter that transcribes native image attachments with Codex Luna before delegating to DeepSeek |
| [dsh-external/dsh-notification](https://github.com/dsh-external/dsh-notification) | DeepSeek Harness 的桌面通知插件，会话完成一轮任务时通过浏览器系统通知提醒你，并按结束状态与关键词规则精确控制哪些完成需要提醒。 |
| [dsh-external/dsh-open-in-vscode](https://github.com/dsh-external/dsh-open-in-vscode) | dsh-open-in-vscode —— 在 DeepSeek Harness Web 界面中，从侧边栏工作区的「…」菜单一键用 VS Code 打开对应目录的插件。 |
| [dsh-external/dsh-paddle-ocr](https://github.com/dsh-external/dsh-paddle-ocr) | 暂无描述 |
| [dsh-external/dsh-pet-corner](https://github.com/dsh-external/dsh-pet-corner) | DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API |
| [dsh-external/dsh-plannotator](https://github.com/dsh-external/dsh-plannotator) | DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Agent feedback. |
| [dsh-external/dsh-revive](https://github.com/dsh-external/dsh-revive) | DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） |
| [dsh-external/dsh-sentinel](https://github.com/dsh-external/dsh-sentinel) | Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the agent, with a transparent browser dock. |
| [dsh-external/dsh-spotlight](https://github.com/dsh-external/dsh-spotlight) | Keyboard-first command palette for DeepSeek Harness Web |
| [dsh-external/dsh-STAGE](https://github.com/dsh-external/dsh-STAGE) | STAGE: Systematic Toolchain for Authoring, Guiding, and Editing (DSH Version) |
| [dsh-external/dsh-STAR](https://github.com/dsh-external/dsh-STAR) | STAR: Systematic Toolchain for AI Research (DSH Version) |
| [dsh-external/dsh-voice-funasr](https://github.com/dsh-external/dsh-voice-funasr) | 暂无描述 |
| [dsh-external/dsh-webui-live-html](https://github.com/dsh-external/dsh-webui-live-html) | DeepSeek Harness Web UI 的实时 HTML 可视化卡片，支持流式更新和沙箱化交互。 |
| [DTSFO/dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) | Capability-aware reasoning controls and Fast model routing for DeepSeek Harness |
| [Easyhoov/deepseek-harness-desktop](https://github.com/Easyhoov/deepseek-harness-desktop) | Unofficial in-process desktop app for DeepSeek Harness: the host composition boots inside the Electron main process with zero ports and an IPC bridge. Not affiliated with DeepSeek. |
| [echo-escape/dsh-workbench](https://github.com/echo-escape/dsh-workbench) | 暂无描述 |
| [Elaina-real/dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) | Tiered auto-review for DeepSeek Harness: static-rule safety net + LLM reviewer + human fallback — auto-allow safe actions, deny irreversible ones, ask a human for the rest. |
| [Electricitysheep/dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) | DeepSeek Harness (dsh) 从 0 到 1 深度手册：安装/插件开发/性能调优/实测案例/同模型多 Agent 实测对比（中文 + 英文 PDF） |
| [Electricitysheep/dsh-tool-turbo](https://github.com/Electricitysheep/dsh-tool-turbo) | Per-round reasoning_effort optimizer for DeepSeek Harness (dsh): auto-downgrades tool-call reasoning for simple tool chains, lifting back for heavy work. Cuts thinking time between tool calls. |
| [emredeveloper/deepseek-harness-huggingface](https://github.com/emredeveloper/deepseek-harness-huggingface) | 暂无描述 |
| [entireyu/dsh-launcher](https://github.com/entireyu/dsh-launcher) | DeepSeek Harness Launcher（DSH 安装启动助手），由DSH + DS-V4-Pro-0813开发的tauri程序。 |
| [erduotong/dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) | 一个Deepseek Harness的插件关系图谱可视化插件 |
| [Ericwong5021/dsh-kanban](https://github.com/Ericwong5021/dsh-kanban) | Task board plugin for the DeepSeek Harness Web UI |
| [fakechris/dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) | DSH 运维工具箱：升级、重启、故障都不用操心。① 官方每日快照 A/B 双槽轮换——旧插件迁移+构建+验收全过才原子切换，一键回滚，旧版本永远兜底；② 守护 10s 自动拉起 web + agent 断点自动续接，重启无人值守；③ web 全挂（A/B 都坏、agent 不可用）时 dsh-doctor 一条命令自救：九项诊断→机械修复配置→LLM 深度检测修复（完整推理实时可见）→拉起 web。install via: git clone + bash scripts/install.sh |
| [fakechris/dsh-track](https://github.com/fakechris/dsh-track) | DSH Track Bridge 插件：嵌入式任务管理引擎——决策点协议、念头捕获墙、Linear 形 issue 存储（bundle），AI 与人之间的任务轨道 |
| [Favio8/dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | DeepEye vision plugin for DeepSeek Harness (DSH): image description, OCR, VQA, UI layout, and clipboard analysis. |
| [fengzhiyushui/dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) | 暂无描述 |
| [fff122/dsh-agent-arcade](https://github.com/fff122/dsh-agent-arcade) | Deterministic Agent-played Snake game for DeepSeek Harness. |
| [fff122/dsh-prompt-presets](https://github.com/fff122/dsh-prompt-presets) | Local reusable prompt presets for DeepSeek Harness. |
| [fff122/dsh-research-notes](https://github.com/fff122/dsh-research-notes) | A lightweight research notes plugin for DeepSeek Harness |
| [fff122/dsh-task-checklist](https://github.com/fff122/dsh-task-checklist) | Local task checklist plugin for DeepSeek Harness. |
| [Fisfzy/ego-browser](https://github.com/Fisfzy/ego-browser) | DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、截图、CDP 控制、任务空间隔离），内置 ego 运行时，Linux + Chrome 开箱即用，无需克隆官方仓库或手动构建。 |
| [Fisfzy/math-lean](https://github.com/Fisfzy/math-lean) | dsh-lean-prover: Lean kernel-verified math reasoning plugin (DSH Cordis) |
| [Fisfzy/zotero-harvest](https://github.com/Fisfzy/zotero-harvest) | Zotero 文献采集入库插件（DSH external plugin）：多源检索（OpenAlex/arXiv/Crossref/Europe PMC/Semantic Scholar）+ OA 下载链接解析（Unpaywall）+ 充分性审计 + 入库本地 Zotero + 触发 zotero-wave-rag 重建 |
| [Fisfzy/zotero-wave-rag](https://github.com/Fisfzy/zotero-wave-rag) | 面向 Zotero 论文库的浪潮式 RAG 细节检索系统 —— DSH 外部插件。移植 VCPToolBox 浪潮语义动力学思想（标签河道图传播/虫洞跳转/钟型阻尼/Ω重排），配 BM25+RRF 混合检索、claim-evidence 忠实度校验、两级增量索引 |
| [FlashingChen/dsh-worktree](https://github.com/FlashingChen/dsh-worktree) | Codex-style permanent git worktrees for DeepSeek Harness: worktree_create/list/remove agent tools, a /worktree chat command, and durable per-repo manifests. |
| [FlytoMAYDAY80/dsh-pet](https://github.com/FlytoMAYDAY80/dsh-pet) | 🐋 DSH 有声桌宠：悬浮桌面的 DeepSeek 小鲸鱼，不打开 DSH 也能实时感知会话状态（需要确认/工作中/完成/空闲/离线），支持音效提醒与零代码定制素材 |
| [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | DeepSeek Harness 插件：DeepSeek 大脑 + 自动识图。附加图片自动经 Qwen VLM 转译成文字后交给 DeepSeek 作答 |
| [forrestchang/dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime) | Support dsh runtime on Multica. |
| [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the agent, with dock, sidebar branch, and a global dashboard. |
| [gameswu/dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) | dsh壁纸插件 |
| [GiantGKL/dsh-cost](https://github.com/GiantGKL/dsh-cost) | 暂无描述 |
| [GooodWei/context-vista](https://github.com/GooodWei/context-vista) | 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配，compact指令效果，同时支持估算费用消耗，对标 Claude Code 的 /context。 |
| [gordonlu/dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) | Request Context Profiler for DeepSeek Harness — see what changed between model requests, and how cache reuse changed with it. |
| [gxinxing/deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) | Terminal-native interactive TUI for DeepSeek Harness (dsh) — built with Ink, React for terminals |
| [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | Replace dsh's built-in web search with search MCP servers (Tavily/Brave/Exa/Perplexity/DuckDuckGo/custom), configured from the web Settings page. Disables the built-in DeepSeek search provider while enabled. |
| [HackSing/dsh-plugins](https://github.com/HackSing/dsh-plugins) | A bilingual, continuously maintained directory of plugins for DeepSeek Harness (DSH). |
| [Han-1413141/dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) | DSH Web client plugin: pins off-screen expanded collapsible tags (Think / tool cards) to the top of the conversation viewport with a collapse hotkey |
| [hanelalo/browser-bridge](https://github.com/hanelalo/browser-bridge) | 让你的agent真的像你一样操控你的浏览器窗口 |
| [HaoyueQin/deepseek-harness-desktop](https://github.com/HaoyueQin/deepseek-harness-desktop) | A desktop shell for DeepSeek Harness — the pluggable AI agent harness from DeepSeek. Wrap the official dsh web UI into a native-feeling, always-on desktop app. / 为 DeepSeek Harness（DeepSeek 开源的可插拔 AI Agent harness）打造的桌面应用壳，把官方 dsh web 界面包装成原生质感、常驻后台的桌面应用。 |
| [happyren/dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) | Cross-session agent-to-agent messaging for DeepSeek Harness — address another session by name and deliver a message into its inbox. |
| [HarcoChen/dsh-vsc-integration](https://github.com/HarcoChen/dsh-vsc-integration) | Deepseek-Harness Vscode Integration |
| [hashdiana/dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) | 暂无描述 |
| [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | 暂无描述 |
| [havingautism/dsh-notebooks](https://github.com/havingautism/dsh-notebooks) | 暂无描述 |
| [havingautism/dsh-ultra-ui](https://github.com/havingautism/dsh-ultra-ui) | 暂无描述 |
| [haytham818/dsh-notify](https://github.com/haytham818/dsh-notify) | DSH system notification plugin: desktop notifications when an agent finishes a task, errors, asks a question, or waits for approval (dsh 系统通知插件) |
| [hccccc01333/dsh-report-html](https://github.com/hccccc01333/dsh-report-html) | Generate self-contained interactive HTML reports from Markdown, tables, charts, China province maps, flowcharts, math, and drill-down tables — a DeepSeek Harness (dsh) plugin |
| [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) | 为AI回复自动添加表情的插件 |
| [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) | dsh对话分享插件，一键分享你的对话 |
| [hikariming/dshfind](https://github.com/hikariming/dshfind) | DSH 学习与分享社区 |
| [hisaniwo/dsh-ergonomics](https://github.com/hisaniwo/dsh-ergonomics) | DSH 会话人体工学：/new 一键新会话 + 输入历史 ↑↓ 回溯 |
| [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | 暂无描述 |
| [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) | 暂无描述 |
| [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) | 暂无描述 |
| [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) | 暂无描述 |
| [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | 深夜寂寞？来玩 D399 — 当模型生成时弹出小游戏菜单（wordle / 消消乐，可拓展游戏注册表） |
| [HuanLinOTO/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | 暂无描述 |
| [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | DSH plugin exposing MineRU document parsing tools to the model |
| [HuanLinOTO/dsh-plugin-pet-rs](https://github.com/HuanLinOTO/dsh-plugin-pet-rs) | 暂无描述 |
| [HuanLinOTO/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | 暂无描述 |
| [HuanLinOTO/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) | 暂无描述 |
| [HuanLinOTO/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) | 暂无描述 |
| [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | 暂无描述 |
| [huiliyi37/dsh-tianshu-build](https://github.com/huiliyi37/dsh-tianshu-build) | dsh-tianshu-tui — DeepSeek Harness terminal UI |
| [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | dsh-tianshu-tui — DeepSeek Harness terminal UI |
| [humblebanana/dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | DeepSeek Harness record macOS desktop workflows by demonstration and turn them into agent skills (open-record-replay skill + orr_* tools) |
| [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | 一站式 DeepSeek Harness 社区发行版：TUI、桌面端与 Web UI 三种形态统一体验，支持分层安装、一步到位，免去手工整合打包。 |
| [hyqhyq3/dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) | MCP server manager plugin for DeepSeek Harness: Settings → MCP page, OAuth (PKCE + dynamic client registration) or static-token auth, tools registered as mcp__<name>__* |
| [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层 |
| [icodesign/orbis](https://github.com/icodesign/orbis) | A mobile client for deepseek harness remote control |
| [ilharp/dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) | Manual approval for Deepseek Harness (aka "Manual Mode"/"Ask Mode") |
| [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | Bidirectional Lark/Feishu controller for DeepSeek Harness |
| [jark006/RemoteOps](https://github.com/jark006/RemoteOps) | RemoteOps 是一个面向远程系统维护和嵌入式 Linux 开发的 MCP 工具。 |
| [JasonJin2006/dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) | Reasonix-style sound effects for DeepSeek Harness: generative pentatonic ambient music while the agent works, E6-G6-C7 success chime, A6-E6 attention chime (Web Audio, zero assets). |
| [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for DeepSeek Harness |
| [Jesse-njx/dsh-cowork](https://github.com/Jesse-njx/dsh-cowork) | READ + WRITE for office documents & notebooks in DeepSeek Harness — doc_read/doc_write tools (xlsx, pdf, docx, pptx, ipynb) plus MCP server and CLI |
| [Jesse-njx/dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) | Cross-session messaging for DSH — any session on the machine can list and message any other, Claude Code-style |
| [Jesse-njx/dsh-memory](https://github.com/Jesse-njx/dsh-memory) | Cited memory over DSH's lossless session log — distilled, human-auditable facts with citations back to the exact source events; memory_read/memory_expand tools, recall index, and a dsh-memory CLI. |
| [Jesse-njx/dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) | dsh-polyglot — the model switch for DSH: generic OpenAI-compatible ctx.llm adapter, curated free/cheap DeepSeek presets, automatic provider fallback on rate limits |
| [Jesse-njx/dsh-routines](https://github.com/Jesse-njx/dsh-routines) | dsh-routines — scheduled agents for DSH: run a prompt on a cron, get the digest where you already are (file digests, chatnode delivery, unattended-safe) |
| [Jesse-njx/dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) | Every skill you already have — Claude Code, Codex, Cursor, Gemini CLI — works in DSH: Agent Skills SKILL.md discovery, Tier-2 conversions, find_skill search, and a skills doctor |
| [jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) | Inject rules when needed, without wasting context. Similar to oh-my-pi's "Time-traveling stream rules", but with a very simple and compact code implementation. |
| [jihongboo/dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) | 暂无描述 |
| [jiruidai/dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) | A model-native meta-agent plugin for DeepSeek Harness that uses the underlying model’s reasoning and planning capabilities to synthesize task-specific workflows at runtime and coordinate tools and subagents—without fixed pipelines, templates, or hard-coded routing. |
| [jLeon-account/dsh-client-usage](https://github.com/jLeon-account/dsh-client-usage) | DeepSeek Harness（DSH）网页客户端插件：实时展示会话级 API token 用量与估算费用，支持缓存命中/未命中分桶、上下文占用，自动适配 DeepSeek 峰谷计价与调价｜DSH web plugin: real-time token usage & cost estimate |
| [joyfoxai/dsh-eco-router](https://github.com/joyfoxai/dsh-eco-router) | A token-efficient model-routing flywheel for the DeepSeek Harness. |
| [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) | DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo |
| [KarlOfLaw/dsh-goal-mode-enhance](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) | 为 DeepSeek Harness 提供可视化 goal 模式：Goal 栏 / 头部入口 / 设置页（历史+多会话总览）/ goal_overview 模型工具 |
| [kaziii/dsh-github-connector](https://github.com/kaziii/dsh-github-connector) | GitHub connector for DeepSeek Harness (dsh): one-click connect, create/review/merge PRs from the conversation |
| [keepermttl/dsh-archive-viewer](https://github.com/keepermttl/dsh-archive-viewer) | DeepSeek Harness 归档会话管理插件：查看/恢复已归档会话（回到原工作区分组）+ 右上角一键关闭 dsh。MIT 许可，欢迎收录到任何插件合集，注明出处即可。 |
| [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) | 在你的deepseek-harness上养一只吃白饭的大蓝鲸 |
| [kevenxz/dsh-desktop](https://github.com/kevenxz/dsh-desktop) | Windows desktop client for DeepSeek Harness — native window, tray, shared DSH profiles and sessions. |
| [KnCRJVirX/dsh-desktop](https://github.com/KnCRJVirX/dsh-desktop) | Desktop wrapper for the DeepSeek Harness (DSH). Deepseek Haeness 的 Electron 桌面端封装。 |
| [Komeiji-Shiki/graycode-for-dsh](https://github.com/Komeiji-Shiki/graycode-for-dsh) | 暂无描述 |
| [krislavten/ai-sdk-provider-dsh](https://github.com/krislavten/ai-sdk-provider-dsh) | AI SDK provider that drives a DeepSeek Harness (dsh) runtime as a LanguageModelV3 — works on AI SDK v6 and v7 |
| [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) | DSH (DeepSeek Harness) 的 QQ2006 皮肤插件：注册 qq2006 主题、镜像 body[data-ds-skin]、全局皮肤表与完整素材 |
| [LaplaceYoung/oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) | oh-my-dsh：面向 DSH (DeepSeek Harness) 的插件生态——700+ 插件，只通过扩展接缝注册，不修改 agent-loop 骨架 |
| [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | DSH Web GUI PiUI-style diff viewer plugin: replaces the stock DiffBlock for write/edit tool calls via ui-tool diff-card chain slots (host patch included). Private. |
| [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) | 暂无描述 |
| [lehhair/dsh-split-panes](https://github.com/lehhair/dsh-split-panes) | 暂无描述 |
| [lhh010/dsh-bash-encoding](https://github.com/lhh010/dsh-bash-encoding) | DSH bash 输出编码自动识别插件：替换 ctx.bash，自管 spawn 收集原始字节，自动检测 UTF-16LE/UTF-8/GBK 等编码并正确解码，修复 WSL/Windows 下 bash 工具的中文乱码。 |
| [lhh010/dsh-input-history](https://github.com/lhh010/dsh-input-history) | DSH Web 输入历史插件：Ctrl+Up / Ctrl+Down 像终端一样召回与切换已发送消息，零核心改动 |
| [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) | DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器 |
| [lhh010/dsh-paste-input](https://github.com/lhh010/dsh-paste-input) | DSH WebUI 文件输入增强：Ctrl+V 粘贴（带首次告知弹窗）+ 拖拽 + 选择文件，发送时复制进会话工作区临时目录 |
| [lhh010/dsh-ui-progress](https://github.com/lhh010/dsh-ui-progress) | DSH Web UI 会话进度插件：输入框停靠区常驻会话进度条（todos 真实进度 / 实时 token 生成速率 / 中断橘红态 / 待办提醒），零核心改动 |
| [lhh010/dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) | 【求⭐】🐋DSH Web UI 全手绘像素鲸鱼伙伴插件：会话标题栏常驻，平时眨眼/偶尔摆尾/动胸鳍，思考运行时持续动起来，回合完成头顶喷水，点击还会冒爱心，不工作时还会偷懒睡觉，零核心改动。 【喜欢的话就点点star⭐吧~】 |
| [LiangYin233/dsh-model-config-sync](https://github.com/LiangYin233/dsh-model-config-sync) | DSH 高级模型配置器：为 DeepSeek Harness 提供将 pi-ai 预设模型的上下文、输出上限、推理挡位一键应用到自定义提供商的能力。 |
| [lin-cheng-lab/dsh-deepseek-balance](https://github.com/lin-cheng-lab/dsh-deepseek-balance) | DeepSeek API 余额监视器：DSH 右下角悬浮徽章 + 7天/30天用量费用图表 |
| [lin-cheng-lab/dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) | DSH 插件体检：安装前检查 peer 版本兼容性，防止 rc 不匹配崩溃 🩺 |
| [lin-cheng-lab/dsh-reloader](https://github.com/lin-cheng-lab/dsh-reloader) | DSH 一键重启：装完插件说一句 reload 就自动重启生效，不用手动 Ctrl+C 🔄 |
| [LingLambda/dsh-undo](https://github.com/LingLambda/dsh-undo) | Context undo/redo plugin for DeepSeek Harness (dsh): roll the model context back to the last completed step and restore it again. |
| [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) | 🚀 Expert guidance for HarmonyOS NEXT (API 12+) development. Covers IDE operations, performance tuning, architecture (HAP/HAR/HSP), and automation testing. |
| [lispking/git-skills](https://github.com/lispking/git-skills) | A powerful Claude Code Git assistant skill that provides intelligent branch management, commit message conventions, workflow assistance, and code review guidance. |
| [litestartup-com/litestartup-skills](https://github.com/litestartup-com/litestartup-skills) | Publish blog, docs, website, changelog, send campaign email directly from your AI agent. Write content, run one prompt, go live in seconds. |
| [Liu-ty/dsh-balance-display](https://github.com/Liu-ty/dsh-balance-display) | DeepSeek API balance overlay for DeepSeek Harness |
| [liustack/modlens](https://github.com/liustack/modlens) | The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an image, get structured JSON evidence (OCR, layout, semantics). |
| [LJH-snow/dsh-tool-github](https://github.com/LJH-snow/dsh-tool-github) | 暂无描述 |
| [longyu065/dsh-desktop](https://github.com/longyu065/dsh-desktop) | Desktop shell for DeepSeek Harness Web GUI — auto-installs dsh, native macOS tray, packaged for macOS & Windows. |
| [longyu065/dsh-session-index](https://github.com/longyu065/dsh-session-index) | 暂无描述 |
| [lordqyxz/dsh-ark-quota](https://github.com/lordqyxz/dsh-ark-quota) | 火山方舟订阅套餐剩余额度 DSH 侧边栏小组件（宿主代理 GetCodingPlanUsage + 浏览器 widget + 免重启 cookie 刷新工具） |
| [LoserFox/distill](https://github.com/LoserFox/distill) | 自动对话蒸馏：后台 subagent 反省 + 技能 create/update |
| [LoserFox/dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) | DSH 插件：git 提交固定使用环境自身作者身份（优先 gh CLI 登录账号，GitHub noreply 邮箱），GIT_AUTHOR_*/GIT_COMMITTER_* 环境变量注入压过一切 git config |
| [LoserFox/telegram](https://github.com/LoserFox/telegram) | Telegram Bot API 桥接插件：长轮询、per-chat 会话、HTML 格式化 |
| [lujoai/Lujo-MCP](https://github.com/lujoai/Lujo-MCP) | 基于 MCP 协议的 AI 调试追踪平台，提供会话管理、链路追踪、错误分析与 Dashboard 可视化 |
| [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | dsh plugin: Chrome sidebar extension that lets DSH operate your browser directly—no vision capabilities required. |
| [lunw/shopline-ai-toolkit-dsh](https://github.com/lunw/shopline-ai-toolkit-dsh) | SHOPLINE AI Toolkit for DeepSeek Harness (dsh-plugin): official SHOPLINE Developer MCP bridge + SHOPLINE agent skills, mirroring the Shopify AI Toolkit architecture. dsh-plugin |
| [lwmxiaobei/dsh-plugins](https://github.com/lwmxiaobei/dsh-plugins) | DeepSeek Harness 插件导航与介绍目录 |
| [lxj808624/dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) | Structured safe Git tools for DeepSeek Harness (dsh): git_status/diff/log/branch/stage/commit/stash/show + destructive-command guard |
| [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | dsh-scholar |
| [makuralymi/dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme) | 暂无描述 |
| [Mappedinfo/PlainDeck](https://github.com/Mappedinfo/PlainDeck) | Local-first, Git-native visual slide editor with plain JSON sources. |
| [MashedPotato817/dsh-git-plugin](https://github.com/MashedPotato817/dsh-git-plugin) | Git workflow plugin for DeepSeek Harness: slash commands and read-only git tools |
| [mitao-su/dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) | DeepSeek Harness (DSH) host plugin wrapping the Playwright CLI: install browsers, run tests, open the HTML report from the agent loop. |
| [moduqishi/dsh-open-in-finder](https://github.com/moduqishi/dsh-open-in-finder) | DeepSeek Harness (dsh web) plugin: one-click open-in-Finder icon in the session header. |
| [moduqishi/dsh-opencode-usage](https://github.com/moduqishi/dsh-opencode-usage) | DeepSeek Harness (dsh web) plugin: opencode.ai 5h/week/month quota usage progress in the session header, frosted-glass detail panel, model-channel filtering. |
| [moduqishi/GrassVison](https://github.com/moduqishi/GrassVison) | 给 DeepSeek 等纯文本大模型外挂图像理解能力的实现无感添加视觉能力。提供 OpenAI 兼容的 API，自动将图片请求交给视觉模型分析，再将结构化结果注入文本模型，使增强后的模型体验接近原生多模态。 |
| [Moeblack/deepseek-manners](https://github.com/Moeblack/deepseek-manners) | DSH 插件：给每次消息后注入感谢语（deepseek-manners） |
| [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | DSH plugin: branch-based message editing, reroll, retry, version timeline |
| [Moeblack/dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) | DSH 插件：捕捉每次上行模型 API payload，JSON 落盘 |
| [Moeblack/dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) | DSH plugin: edit user and built-in system-prompt sections with live preview (Prompt Studio) |
| [Moeblack/dsh-skins](https://github.com/Moeblack/dsh-skins) | Mirror of dsh-external/dsh-skins + feat: harbor (夕港) dusk-harbor skin |
| [Mongfayi/dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) | File tree panel for the DSH Web UI: the right details column shows the current session workspace tree (lazy, read-only). |
| [Mongfayi/dsh-recall](https://github.com/Mongfayi/dsh-recall) | Message recall (撤回) plugin for the DSH Web UI: one undo button on each user message that removes the turn and everything after it, durably, without reverting code changes. |
| [MorGogh/widget-dock](https://github.com/MorGogh/widget-dock) | DSH plugin: draggable widget panel (balance, tokens, stats, commands, goal, cost) for DeepSeek Harness |
| [morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) | session 关系型数据库持久化 |
| [Moximxxx/dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) | 暂无描述 |
| [moxisuki/dsh-lan](https://github.com/moxisuki/dsh-lan) | DeepSeek Harness（dsh）的局域网插件：一条 overlay 把 dsh web 绑定到局域网，并通过 index tap 注入 crypto.randomUUID    │ polyfill 修复非安全上下文启动崩溃。 |
| [mrbbbaixue/dsh-desktop](https://github.com/mrbbbaixue/dsh-desktop) | .NET 10 WPF + WebView2 desktop launcher for DeepSeek Harness (dsh): managed child process, tray controls, HiDPI, native title bar theme following |
| [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | DSH plugin: Windows toast notification with sound when an agent task completes |
| [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | 是兄弟就来蹬我！DSH Web UI 广告：2005 年中文站点风格的侧栏广告 / 对话内信息流 / 角落弹窗 + 一个真实热区比视觉小得多的关闭叉。素材全虚构，域名打码。 |
| [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) | 暂无描述 |
| [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | DSH 对话内生成式 UI 插件：模型把交互式 HTML 卡片直接画进会话流——visualize 工具 + 配套 skill + 沙箱渲染卡，带流式预览、组件浮入动画与鲸鱼蓝主题跟随 |
| [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams plugin for DeepSeek Harness |
| [nowledge-co/nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) | Nowledge Mem community plugin bundle for DeepSeek Harness |
| [nutshellai-tech/mobius](https://github.com/nutshellai-tech/mobius) | The first self-evolving open-source Agent OS, connecting your team, AI agents, devices, and compute |
| [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | 从Claude Code、Codex、Reasonix等Agent工具导入历史消息，并在DSH中继续对话 |
| [omdsh-dev/7d7d](https://github.com/omdsh-dev/7d7d) | 暂无描述 |
| [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动 |
| [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their contents to prompts. |
| [omdsh-dev/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) | DSH Web里的自走棋插件：人机对战或双AI对弈 |
| [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | 一个侧边栏的完整工作台，支持三方拓展注册新Tab页面，内置文件渲染编辑/终端/Git/子代理 |
| [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel |
| [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | Create and manage sandboxed JavaScript tools for DeepSeek Harness with a Monaco editor and model-driven tool lifecycle. |
| [omdsh-dev/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) | DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes |
| [omdsh-dev/dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | 暂无描述 |
| [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | 让AI帮你连数据库、写SQL的DSH插件 |
| [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | Adaptive deep-research orchestrator plugin for DeepSeek Harness (official workflow engine, cybernetics/information-theory design) |
| [omdsh-dev/dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) | 暂无描述 |
| [omdsh-dev/dsh-fun-ticker](https://github.com/omdsh-dev/dsh-fun-ticker) | DSH 行情跑马灯插件：可自选标的的加密/汇率/A股/指数/港美股跑马灯，免 key 数据源，宿主代理+缓存 |
| [omdsh-dev/dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) | DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets |
| [omdsh-dev/dsh-fun-weather](https://github.com/omdsh-dev/dsh-fun-weather) | DSH weather tab and weather-following themes powered by Open-Meteo |
| [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fence — layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. Ships the fence-teaching host plugin, the browser renderer (client half), and the genui skill. |
| [omdsh-dev/dsh-github-integration](https://github.com/omdsh-dev/dsh-github-integration) | 暂无描述 |
| [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | 在DSH中与AI下五子棋，也可以让AI对局，看哪个AI棋力更强 |
| [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) | 暂无描述 |
| [omdsh-dev/dsh-hub-workshop](https://github.com/omdsh-dev/dsh-hub-workshop) | 暂无描述 |
| [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | 发现问题(checkup) → 修复交付(fix) → 质量复查(review) 的对抗式闭环插件：基于官方 workflow 引擎的检查/修复/复查工具集 |
| [omdsh-dev/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) | DSH knowledge-base plugin: build audit-able KB packs (references + SQLite FTS5) from md/txt/docx/pdf, deterministic retrieval (kb_query) and original-text reading (kb_read), zero-script generated skills. Apache-2.0. |
| [omdsh-dev/dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) | 暂无描述 |
| [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Mnemon 与 DSH 的深度集成插件，为 DSH 提供完备的本地记忆系统：运行时记忆、可检索档案与受监督记忆体。 |
| [omdsh-dev/dsh-mygo](https://github.com/omdsh-dev/dsh-mygo) | 暂无描述 |
| [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude keyword rules. |
| [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Open DeepSeek Harness workspace directories in VS Code directly from the web GUI. |
| [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | 暂无描述 |
| [omdsh-dev/dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) | DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API |
| [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具 |
| [omdsh-dev/dsh-plugin-dev](https://github.com/omdsh-dev/dsh-plugin-dev) | DSH 插件开发踩坑与做法档案（skill + 文档）：cordis 双副本、tsconfig 三件套、Windows junction、多帧 zstd 等实测记录 |
| [omdsh-dev/dsh-plugin-skills](https://github.com/omdsh-dev/dsh-plugin-skills) | Agent skills for building and testing DeepSeek Harness plugins — from scaffolding a new plugin package to choosing the right test tiers, entirely inside an agent session. |
| [omdsh-dev/dsh-revive](https://github.com/omdsh-dev/dsh-revive) | DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） |
| [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) | 面向 DeepSeek Harness 的只读环境探测插件，为智能体提供运行环境、软件版本、系统资源、端口、服务、硬件及工作区信息。 |
| [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告 |
| [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | DSH 会话健康检查插件：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session_health 工具 |
| [omdsh-dev/dsh-tool-browser](https://github.com/omdsh-dev/dsh-tool-browser) | 暂无描述 |
| [omdsh-dev/dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) | DSH 计算器工具插件：安全的数学表达式求值器，零依赖递归下降解析器 |
| [omdsh-dev/dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) | DSH CSV 数据工具插件：解析/查询/统计/转换 CSV 文本（RFC 4180），零依赖状态机解析器，注册 csv 工具 |
| [omdsh-dev/dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) | DSH Diff 工具插件：文本/JSON/CSV/Markdown 结构化比较与 unified diff，零依赖只读，注册 diff 工具 |
| [omdsh-dev/dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) | DSH 编码/哈希工具插件：base64/base64url/url/hex 编解码、md5/sha1/sha256/sha512 哈希、UUID 生成，零依赖 |
| [omdsh-dev/dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) | DSH JSON 查询工具插件：JMESPath 子集查询，零依赖递归下降解析器 |
| [omdsh-dev/dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) | DSH Markdown 工具插件：HTML↔Markdown 转换、GFM 表格规范化、目录生成，零依赖轻量解析器，注册 markdown 工具 |
| [omdsh-dev/dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) | DSH 正则工具插件：测试匹配/提取捕获组/安全替换/静态解释正则（不执行代码），零依赖，注册 regex 工具 |
| [omdsh-dev/dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) | DSH JSON Schema 验证工具插件：validate/paths/explain/normalize，零网络零动态执行 |
| [omdsh-dev/dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) | DSH 统计工具插件：描述统计/百分位数/频数分布/相关性，零依赖纯函数确定性 |
| [omdsh-dev/dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) | DSH 时间工具插件：严格 ISO 8601 解析、IANA 时区转换、UTC 日历运算、固定时长差，零依赖 |
| [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十个确定性工具，统一入口一键安装 |
| [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) | 暂无描述 |
| [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) | DSH的设置扩展 |
| [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) | 一种类似MC Fabric的hook处理器 |
| [omdsh-dev/omdsh](https://github.com/omdsh-dev/omdsh) | 暂无描述 |
| [omdsh-dev/omdsh-runtime](https://github.com/omdsh-dev/omdsh-runtime) | 暂无描述 |
| [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) | 基于原turtle ui官方仓库创建的plugin模板仓库 |
| [omdsh-dev/Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) | Qwen-MM-Plugins支持 |
| [omdsh-dev/sandbox-micro](https://github.com/omdsh-dev/sandbox-micro) | microsandbox支持 |
| [omdsh-dev/sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) | 微软跨平台沙盒支持 |
| [omdsh-dev/sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) | nono沙盒支持 |
| [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) | 暂无描述 |
| [omdsh-dev/toybox](https://github.com/omdsh-dev/toybox) | 暂无描述 |
| [omdsh-dev/web-components](https://github.com/omdsh-dev/web-components) | web-components支持 |
| [openguardrails/dsh-tui](https://github.com/openguardrails/dsh-tui) | Claude Code-style terminal UI for DeepSeek Harness agents, as an out-of-tree dsh plugin bundle |
| [openguardrails/openguardrails](https://github.com/openguardrails/openguardrails) | The vendor-neutral protocol for AI agent safety & security — and the neutral benchmark that ranks the vendors. |
| [openma-ai/deepseek-harness-tui](https://github.com/openma-ai/deepseek-harness-tui) | TUI Plugin of DeepSeek Harness |
| [openma-ai/deepseek-harness-typescript-sdk](https://github.com/openma-ai/deepseek-harness-typescript-sdk) | TypeScript SDK for DeepSeek Harness (dsh) — drive AI agent turns in a runtime subprocess over JSON-RPC stdio. Mirrors the official Python SDK. |
| [openma-ai/open-managed-agents](https://github.com/openma-ai/open-managed-agents) | Open-source Claude Managed Agents API implementation and self-hosted Claude Tag-style agent runtime. Drop-in compatible; runs on Cloudflare Workers/Durable Objects or Node.js. Apache 2.0. |
| [opensetk/dsh-xiaohei](https://github.com/opensetk/dsh-xiaohei) | dsh的罗小黑插件 |
| [Opr4Mp3r/deepseek-harness-plugin-from-scratch](https://github.com/Opr4Mp3r/deepseek-harness-plugin-from-scratch) | Code-audited, progressive guide to production-grade DeepSeek Harness plugins |
| [orriduck/dsh-tui](https://github.com/orriduck/dsh-tui) | A small, session-aware terminal UI for DeepSeek Harness |
| [paean-ai/8x-skills](https://github.com/paean-ai/8x-skills) | 暂无描述 |
| [paean-ai/deeptide](https://github.com/paean-ai/deeptide) | Built by DeepSeek, for DeepSeek — a Swift-native macOS coding agent |
| [pandashere/dsh-codex-bridge](https://github.com/pandashere/dsh-codex-bridge) | Codex CLI bridge plugin for DeepSeek Harness with host tools and a Web conversation tab. |
| [pandashere/dsh-kimi-bridge](https://github.com/pandashere/dsh-kimi-bridge) | Kimi CLI bridge plugin for DeepSeek Harness with review-only mode and a Web conversation tab. |
| [pandashere/dsh-self-control-guard](https://github.com/pandashere/dsh-self-control-guard) | Self-control guard plugin for DeepSeek Harness host exit and restart workflows. |
| [PangYiMing/dsh-batch-regression](https://github.com/PangYiMing/dsh-batch-regression) | DSH plugin: run a command N rounds, judge by median/distribution — 批量回归取统计结论 |
| [PangYiMing/dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) | DSH plugin: bisect bugs (code / boundary / commit) — 二分法定位 bug 根因 |
| [PangYiMing/dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) | DSH plugin for controlling browsers (CDP/Playwright) — DeepSeek Harness 操控浏览器插件 |
| [PangYiMing/dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) | DSH plugin for controlling mobile devices (ADB/iOS) — DeepSeek Harness 操控手机插件 |
| [PangYiMing/dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) | DSH plugin: triage port conflicts (reuse / switch / precise kill) — 端口占用处置 |
| [PangYiMing/dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) | DSH plugin: pixel-diff two screenshots into diff.png + triptych (pixelmatch) — 像素对比工具 |
| [PeanutsDou/peanut-dsh-plugin](https://github.com/PeanutsDou/peanut-dsh-plugin) | PeanutsDou 的 DeepSeek Harness 插件合集：dsh-launcher 桌面壳等个人维护插件 |
| [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | DeepSeek Harness (dsh) plugin: migrate Claude Code sessions, memory, skills and CLAUDE.md into DSH with seamless resume (claude_scan / import_claude / resume-claude / web panel) |
| [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) | Everything you need to build DeepSeek Harness plugins: official docs archive (EN/ZH), Cordis primer, 15-repo community deep-dive, 20+ battle-tested pitfalls - plus the dsh-plugin-guide agent skill. |
| [pinkllo/dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) | DeepSeek Harness plugin: make the model write its chain-of-thought in your language |
| [PixLunaLab/dsh-plugin-pixluna](https://github.com/PixLunaLab/dsh-plugin-pixluna) | dsh-plugin-pixluna \| 让 DSH 自己看涩图！ |
| [PM-Shawn/Abu-Cowork](https://github.com/PM-Shawn/Abu-Cowork) | Open-source alternative to Claude Cowork — a local-first AI agent desktop app · multi-model · self-evolving skills · privacy-first |
| [Proton1917/dsh-live-stats](https://github.com/Proton1917/dsh-live-stats) | Live token estimates and true streaming TPS for DeepSeek Harness Web |
| [pulseaiclub/phi](https://github.com/pulseaiclub/phi) | a coding Agent from pi. sub-agents, hashline edits, and a permission gate |
| [qing3a/dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) | DeepSeek Harness 事件流审计面板插件：观察事件类型/分发模式/计数/最近事件，帮助插件作者理解 harness 内部 |
| [qingzhuo-cn/agent-fix](https://github.com/qingzhuo-cn/agent-fix) | Universal repair skill & CLI for AI coding agents (Claude Code, Codex, OpenCode, Hermes) — npm postinstall, GUI PATH, Node version, registry, auth, DeepSeek provider |
| [Qintsg/dsh-safe-delete](https://github.com/Qintsg/dsh-safe-delete) | Safe delete plugin for DeepSeek Harness (DSH): move files to trash / staging area instead of permanent removal, with restore and purge support. |
| [qyw233/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) | DSH WebUI 深链插件：?session=/?workspace= 直接打开指定项目对话 |
| [rainforest888/dsh-plugins-raincode](https://github.com/rainforest888/dsh-plugins-raincode) | dsh plugin: DeepSeek Harness 的模型层 = raincode(模型池/缓存/重试) + /skills 浏览 |
| [randerous/dsh-turn-budget](https://github.com/randerous/dsh-turn-budget) | Advisory turn step-budget reminders for DeepSeek Harness — loop convergence guard (dsh-plugin) |
| [randerous/dsh-turn-meta](https://github.com/randerous/dsh-turn-meta) | Opt-in per-step turn metadata for DeepSeek Harness — a minimal first-plugin template (dsh-plugin) |
| [RealAlexandreAI/dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) | dsh search: AnySearch web search provider for DeepSeek Harness (ctx.web) |
| [RealAlexandreAI/dsh-atuin](https://github.com/RealAlexandreAI/dsh-atuin) | dsh atuin-history: record dsh user prompts into atuin shell history |
| [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) | dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness |
| [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) | dsh memory: Nocturne Memory client for DeepSeek Harness |
| [renat3u/dsh-paseo](https://github.com/renat3u/dsh-paseo) | DSH 的paseo插件扩展支持 |
| [renat3u/dsh-web-archive](https://github.com/renat3u/dsh-web-archive) | 折叠对话当中众多的“无用消息”，例如Think、Bash等 |
| [renat3u/tonghuashun-webui](https://github.com/renat3u/tonghuashun-webui) | 仿同花顺的webui插件 |
| [Roy-oss1/dsh-lark](https://github.com/Roy-oss1/dsh-lark) | Lark/Feishu IM bot channel for DeepSeek Harness: chats drive agents, replies and approvals return as messages and cards \| 飞书机器人 DSH 插件 |
| [rsagacom/dsh-ajw](https://github.com/rsagacom/dsh-ajw) | DS安甲网 (ds.ajw.cn) · 为你的 DeepSeek Harness 机器人 安装上所需功能的装甲吧 — 每日聚合 DeepSeek Harness / DSH 插件生态开源项目 |
| [Ruler4396/dsh-launcher](https://github.com/Ruler4396/dsh-launcher) | Lightweight Windows launcher for DeepSeek Harness: silent autostart at logon + a minimal WebView2 window instead of a full browser |
| [runzhliu/deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker) | Community Docker and Kubernetes packaging for DeepSeek Harness (@deepseek-ai/dsh), with a hardened image, Compose stack, Helm chart, Web UI, and headless CLI. |
| [RYun601/dsh-launcher](https://github.com/RYun601/dsh-launcher) | Windows 下 DeepSeek Harness Web 的启动与管理工具：deepseek 命令一键前台/后台启动、自动打开浏览器、状态查询、停止服务与更新检查，支持一行命令安装 |
| [SakalioLabs/dsh-code-ide](https://github.com/SakalioLabs/dsh-code-ide) | DeepSeek Harness Code IDE Plugin |
| [sakikoTGW/pack-agent](https://github.com/sakikoTGW/pack-agent) | Agent Modpack — 像装 MC 整合包一样，装你的 agent。 |
| [Scorp1o117/dsh-plugin-marketplace](https://github.com/Scorp1o117/dsh-plugin-marketplace) | Plugin marketplace for DeepSeek Harness Web UI: browse github.com/topics/dsh-plugin inside the settings page — search, sort by stars, view install instructions. |
| [Scorp1o117/dsh-soul-md](https://github.com/Scorp1o117/dsh-soul-md) | soul.md-style persona injection for DeepSeek Harness — load a markdown persona card into the system prompt with hot reload. |
| [Scorp1o117/dsh-tdai-memory](https://github.com/Scorp1o117/dsh-tdai-memory) | TencentDB Agent Memory for DeepSeek Harness — L0-L3 layered long-term memory with recall injection and search tools. |
| [Scorp1o117/dsh-tool-vision](https://github.com/Scorp1o117/dsh-tool-vision) | External vision model tool for DeepSeek Harness — inspect_image sends images to any OpenAI-compatible endpoint (GPT-4o, Qwen-VL, GLM-4V, Ollama...). |
| [SenmuuuuW/dsh-group-photo](https://github.com/SenmuuuuW/dsh-group-photo) | DSH 内测收官合影墙：GitHub OAuth 零权限登录 + 冻结白名单校验的拍立得合影站（含 DSH Skill 包装） |
| [Sev7een/ds-api-usage](https://github.com/Sev7een/ds-api-usage) | 暂无描述 |
| [SeverusZh/dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) | 暂无描述 |
| [ShawnSiao/dsh-agent-eval](https://github.com/ShawnSiao/dsh-agent-eval) | Planned repeatable agent and plugin regression evaluation for DeepSeek Harness |
| [ShawnSiao/dsh-credentials-keychain](https://github.com/ShawnSiao/dsh-credentials-keychain) | Planned OS-backed credential provider for DeepSeek Harness |
| [shelken/dsh-co-authored-by](https://github.com/shelken/dsh-co-authored-by) | dsh plugin: auto-inject Co-Authored-By and Generated-By trailers on git commit |
| [shi275773124/falsify-dsh](https://github.com/shi275773124/falsify-dsh) | DeepSeek Harness adapter for the public Falsify CLI. Adjudicator receipt, not a second-opinion workflow. |
| [shinelon/eyes-for-deepseek](https://github.com/shinelon/eyes-for-deepseek) | 暂无描述 |
| [shiningsprk-arch/dsh-context-viewer](https://github.com/shiningsprk-arch/dsh-context-viewer) | 暂无描述 |
| [shujiTech/dsh-plugin-wepre](https://github.com/shujiTech/dsh-plugin-wepre) | DeepSeek Harness plugin: publish single-screen content cards to WePre Next from a dsh agent session |
| [sikwoxy/dsh-tool-reqpipe](https://github.com/sikwoxy/dsh-tool-reqpipe) | reqpipe — DeepSeek Harness 需求流水线插件（7 tools）+ Python CLI（需求→方案→评审→开发） |
| [SiYue-ZO/dsh-translator](https://github.com/SiYue-ZO/dsh-translator) | Turn DeepSeek Harness into a focused, configurable AI translation workspace. |
| [sjscy05/deepseek-harness-vision-plugin](https://github.com/sjscy05/deepseek-harness-vision-plugin) | 暂无描述 |
| [sjscy05/dsh-task-progress-notifier](https://github.com/sjscy05/dsh-task-progress-notifier) | 暂无描述 |
| [sjscy05/matlab-modelsim-vivado-plugin](https://github.com/sjscy05/matlab-modelsim-vivado-plugin) | DeepSeek Harness plugin: MATLAB + ModelSim + Vivado full-flow tools for digital communication IC design tasks (mmv-dspic) |
| [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | DSH Web 鲸鱼娘皮肤系列(深海女仆工坊 maid-atelier)——CC BY-NC-SA 4.0 |
| [Small-tailqwq/dsh-deepcel](https://github.com/Small-tailqwq/dsh-deepcel) | 一款模仿 excel 的 dsh 皮肤 |
| [Small-tailqwq/dsh-tps](https://github.com/Small-tailqwq/dsh-tps) | 只是一个 tps 插件 |
| [SnowCrescenter-tech/dsh-desktop](https://github.com/SnowCrescenter-tech/dsh-desktop) | DeepSeek Harness 桌面版 — 原生 Windows 桌面壳（无边框窗口 / 系统托盘 / 原生通知 / 单实例 / 开机自启）\| Native Windows desktop shell for DeepSeek Harness (frameless window, tray, native notifications, single-instance, auto-launch) |
| [SnowCrescenter-tech/dsh-launcher](https://github.com/SnowCrescenter-tech/dsh-launcher) | DeepSeek Harness 一键启动器 \| Windows 便携免安装版 - One-click portable launcher for DeepSeek Harness (no Node.js, no pnpm, no CLI) |
| [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | Git-style milestone timeline for DeepSeek Harness - hover for metadata, click to jump to any message. 会话里程碑导航条：像 Git 提交图一眼定位每条提问，悬停看时间/轮次/耗时/TTFT，点击即跳转。 |
| [spike-faye-lei/spike-faye-lei-dsh-skills](https://github.com/spike-faye-lei/spike-faye-lei-dsh-skills) | spike-faye-lei/dsh-skills |
| [studyzy/dsh-suggest-prompt](https://github.com/studyzy/dsh-suggest-prompt) | dsh-plugin suggest next prompt |
| [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) | 初音未来主题皮肤，用于 DeepSeek Harness (DSH) Web GUI —— 蓝紫洋红渐变、毛玻璃面板、可自定义背景图、亮暗双主题 |
| [suimi8/dsh-test-runner](https://github.com/suimi8/dsh-test-runner) | DSH plugin: structured test runner tool (test_run) — auto-detect vitest/jest/pytest/node:test, run tests, parse failure summaries for the model. |
| [syy-shark/dsh-music-plugin](https://github.com/syy-shark/dsh-music-plugin) | DeepSeek Harness music plugin (dsh-plugin) |
| [tappass/dsh-governance](https://github.com/tappass/dsh-governance) | The authority layer for agentic AI, as a DeepSeek Harness plugin. Governs every tool call against your business rules via TapPass /v1/govern. |
| [taxueseek/argo](https://github.com/taxueseek/argo) | 专门为 agent 打造的 agent 搜索工具，具备多语言搜索能力，覆盖中文/英文/学术/代码/购物/金融/新闻/百科。 |
| [TecFancy/dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) | DeepTutor bridge bundle for DeepSeek Harness (dsh): learning capabilities, knowledge bases & note archiving. \| DeepTutor 桥接插件(bundle),为 DeepSeek Harness 提供学习能力、知识库与笔记归档工具。 |
| [TheChengXi/intent-flow](https://github.com/TheChengXi/intent-flow) | IntentFlow — Comment-Driven Development Framework 注释驱动开发框架：以 @intent 注释为契约的 AI 辅助开发工作流（需求/设计/执行/报告四阶段 + 状态机自动流转），提供 pi 扩展、MCP Server、CLI 三种形态 |
| [Thhoho/reSanity](https://github.com/Thhoho/reSanity) | reSanity 散修 — 散户的认知组合管理：查证、避坑、记忆、复盘。一份 SKILL.md，零依赖。 |
| [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | OpenMAIC for DeepSeek Harness: classrooms, slides, interactive widgets, and Socratic teaching |
| [TiankunDai/dsh-vision-LMstudio](https://github.com/TiankunDai/dsh-vision-LMstudio) | 让你能通过deepseek harness调用LM studio加载的本地视觉模型 |
| [Tieboyh/dsh-session-search](https://github.com/Tieboyh/dsh-session-search) | Index-free cross-agent session search for DeepSeek Harness |
| [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | 将冰冷的离别化为温暖的 Skill，欢迎加入数字生命1.0！Transforming cold farewells into warm skills? It's giving rebirth era. Welcome to Digital Life 1.0. 🫶 |
| [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) | DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent sessions and manage schedules from DSH Web or an Agent. |
| [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | DSH 真实浏览器插件：通过 Kimi WebBridge 让 Agent 操作用户已登录的浏览器，并提供 13 个 webbridge_* 工具。 / Let DSH Agents use your signed-in browser through thirteen Kimi WebBridge tools. |
| [titanwings/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) | DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Agent feedback. |
| [Totoro-qaq/Cobsidian](https://github.com/Totoro-qaq/Cobsidian) | Agent-agnostic workflow skill for maintaining Obsidian knowledge bases |
| [Toukaiteio/dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) | A marketplace plugin to quickly integrate your DeepSeek Harness into the GitHub plugin ecosystem. |
| [tree201/dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) | DeepSeek Harness Doctor and DSH runtime diagnostics for tools, models, skills, workspaces, sessions, plugins, and MCP troubleshooting |
| [turtle1999/turtle-ui](https://github.com/turtle1999/turtle-ui) | as is, no warranty |
| [TwotwoPiggy/dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) | A DeepSeek Harness plugin for real-time token tracking and highly accurate session cost estimation, featuring dynamic peak/off-peak pricing support. |
| [Tyan66666/billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) | Model-driven context management (Active Context Pruning / ACP) for the DeepSeek Harness — the model decides when and what to compress. Ported from billion-context-pi (ranxianglei); acp-kernel reused verbatim. CompactionEngine backend with compress/decompress/search_context/acp_status tools. |
| [TYEclipse/dsh-netdoctor](https://github.com/TYEclipse/dsh-netdoctor) | Network diagnostics toolbox for DeepSeek Harness (dsh): DNS lookup, ICMP ping, TCP port check, TLS cert check, traceroute, public IP — six read-only probes, zero runtime dependencies |
| [unknowbug/anchorlaw](https://github.com/unknowbug/anchorlaw) | Code verification protocol for vibe coding — every claim must have a verifiable practice anchor. |
| [unknowbug/RE-Framework](https://github.com/unknowbug/RE-Framework) | Modular engineering methodology framework for AI agents — reverse engineering & software development (core + re-binary / re-code / swe modules). |
| [UynajGI/dsh-ssh](https://github.com/UynajGI/dsh-ssh) | SSH remote-execution plugin for DeepSeek Harness: ProxyJump chain, SFTP filesystem, subprocess and PTY over ssh2 |
| [vcxmug/dsh-firecrawl](https://github.com/vcxmug/dsh-firecrawl) | Native Firecrawl tools for DeepSeek Harness agents via MCP — one composition row, zero custom code |
| [vexpaer/ContextGate](https://github.com/vexpaer/ContextGate) | 暂无描述 |
| [vibeinging/dsh-agent-budget](https://github.com/vibeinging/dsh-agent-budget) | Native Harness agent-tree token budget plugin |
| [vibeinging/dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) | Per-agent on-demand tool discovery and progressive schema disclosure for DeepSeek Harness |
| [vibeinging/dsh-trace](https://github.com/vibeinging/dsh-trace) | DeepSeek Harness telemetry backend that exports turns, model steps, and tool calls to yiTrace over HTTP. |
| [vibeinging/dsh-turn-navigator](https://github.com/vibeinging/dsh-turn-navigator) | Private DSH Web turn navigation plugin |
| [vibeinging/dsh-work](https://github.com/vibeinging/dsh-work) | Local-first AI workbench for DSH Plugins, combining Agent sessions, project files, data analysis, web research, MCP, and Office artifacts in an Electron desktop app. |
| [vlln/dsh-loop](https://github.com/vlln/dsh-loop) | DSH 插件：定时循环（/loop 命令 + loop 工具 + 活动状态条）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) | DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) | DSH 插件：后台任务状态条（对话页任务进度 + 实时输出 tail）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [vlln/plugin-registry](https://github.com/vlln/plugin-registry) | DSH 插件生态基建：薄控制台（浏览器面板管理官方 repository 插件，0 patch）+ make-dsh-plugin skill 官方插件开发引导 |
| [vlln/whale-girl](https://github.com/vlln/whale-girl) | DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。官方 repository-plugin（.dsh-plugin 格式），config.yaml 安装：github:dsh-external/whale-girl#<ref>&path:/.dsh-plugin |
| [Void0312Aurora/dsh-desktop-electron](https://github.com/Void0312Aurora/dsh-desktop-electron) | Cross-platform Electron desktop shell for the DSH Web GUI: tray-resident standalone window over your own dsh web, no bundled Node runtime |
| [vvlife/awesome-deepseek-harness-plugins](https://github.com/vvlife/awesome-deepseek-harness-plugins) | A curated list of plugins, tools, skins, and extensions for DeepSeek Harness (DSH). |
| [walkinglabs/awesome-deepseek-harness-plugins](https://github.com/walkinglabs/awesome-deepseek-harness-plugins) | A curated, bilingual list of verified plugins, tools, design workflows, and learning resources for DeepSeek Harness (DSH). |
| [wangshunnn/oh-my-dsh](https://github.com/wangshunnn/oh-my-dsh) | 🐋 Deepseek harness plugins. |
| [wangxiang0605qvq/dsh-auto-compact](https://github.com/wangxiang0605qvq/dsh-auto-compact) | DeepSeek Harness 自动压缩插件：模型工具 compact_now，回合结束后自动压缩上下文 \| Auto compaction plugin for DSH: compact_now tool, compacts context after the turn |
| [wangxiang0605qvq/dsh-deepseek-balance](https://github.com/wangxiang0605qvq/dsh-deepseek-balance) | DeepSeek 余额插件：模型工具 + 侧边栏余额胶囊 \| DeepSeek balance plugin for DSH: model tool + sidebar balance pill |
| [wangyang10/image-vision](https://github.com/wangyang10/image-vision) | 暂无描述 |
| [WardLu/shadow-vision](https://github.com/WardLu/shadow-vision) | Open-source MCP vision server that gives text-only LLMs and AI agents image understanding, OCR, visual analysis, UI inspection, and multimodal capabilities. |
| [wess09/DeepSeekHarnessDesktop](https://github.com/wess09/DeepSeekHarnessDesktop) | DeepSeekHarness桌面端打包 |
| [whiteguo233/dsh-cc-connect](https://github.com/whiteguo233/dsh-cc-connect) | 通过cc connect远程使用dsh |
| [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) | OpenBiliClaw 是本地运行的跨平台个性化内容推荐 Agent，持续理解你的兴趣并主动找内容。本仓库是它的 DeepSeek Harness 插件：DSH 界面常驻第四栏（推荐/内容库/对话/画像/设置），注册 22 个 Agent Bridge 工具，让 Agent 也能读推荐、答探测、闭环学习。 |
| [whiteguo233/OpenBiliClaw](https://github.com/whiteguo233/OpenBiliClaw) | 本地私有、开源的跨平台 AI 内容发现 Agent：先理解你，再主动从 B站、小红书、抖音、YouTube、X、知乎、Reddit、微博等平台与开放 Web 寻找内容。 \| Local-first open-source cross-platform AI content discovery agent: understands you, then proactively finds content across Bilibili, Xiaohongshu, Douyin, YouTube, X, Zhihu, Reddit, Weibo and the open web. |
| [whitelonng/dshcode](https://github.com/whitelonng/dshcode) | Community desktop companion for DeepSeek Harness — one-click Electron app for macOS and Windows |
| [why913/dshx](https://github.com/why913/dshx) | The missing companion CLI for DeepSeek Harness (dsh): manage MCP servers with dry-run checks, migrate from Claude Code / Codex in one command \| dsh 的 MCP 管理与迁移工具 |
| [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite) | Bilingual curated DeepSeek Harness plugin directory — daily compat CI, create-dsh-plugin scaffold, own plugins. |
| [william-jin-cmu/dsh-artifact](https://github.com/william-jin-cmu/dsh-artifact) | dsh 插件：文件交付协议——send_artifact 工具经 tool/result meta 携带结构化描述子，任意客户端可渲染 |
| [william-jin-cmu/dsh-companion](https://github.com/william-jin-cmu/dsh-companion) | DeepSeek Harness 的常驻桌面助手：全局唤起、定时自动化、快捷回复、插件市场 |
| [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | 自进化插件：agent 在 session 内随对话给自己长出/剪掉能力 —— evolve_add 热挂载持久化 cordis 插件（下一 step 工具即可见），evolve_remove 可逆卸载，重启自动恢复 |
| [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | DSH WebUI sticker plugin for bidirectional user and agent reactions |
| [william-jin-cmu/dsh-vision](https://github.com/william-jin-cmu/dsh-vision) | dsh 插件：给纯文本 DeepSeek 加视觉——view_image 工具桥接任意 OpenAI 兼容 VLM（默认智谱免费档，实测 4 厂商 10 模型） |
| [wingoo/codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) | Use local Codex App Server as a model provider in DeepSeek Harness |
| [wssfk12138/dsh-wechat-notify](https://github.com/wssfk12138/dsh-wechat-notify) | DeepSeek Harness 插件：为 agent 新增 wechat_notify 工具，让 AI 通过本机 ClawBot 微信通道主动给你发通知（任务完成 / 需决策时），中文可靠、掉线自提示。 |
| [wulun811/LiuHe](https://github.com/wulun811/LiuHe) | LLM-native code toolkit: Rust multi-language parser (tree-sitter) + 44 MCP tools for atomic editing, impact analysis, reference tracing and deterministic zero-LLM code quality gates. Built for the handless, eyeless, memoryless LLM. |
| [wuxiangru915/dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) | Incremental diff reviewer for DeepSeek Harness — Web UI review panel + /review command. 增量代码审查插件：checkpoint 增量队列 + 审查意见注入 agent. |
| [xiaohai-78/Top](https://github.com/xiaohai-78/Top) | 📊 Daily leaderboard for the dsh-external plugin ecosystem — tracks every repo, ranks by stars, archives daily snapshots, and shows the latest ranking on the homepage. |
| [xiaomiba0904/dsh-obsidian-export](https://github.com/xiaomiba0904/dsh-obsidian-export) | DeepSeek Harness (DSH) plugin: export conversations to an Obsidian vault, plus read/search/list/tags/backlinks tools and automatic vault discovery. |
| [xiaoxiao-svg/delivery-review-dsh-plugin](https://github.com/xiaoxiao-svg/delivery-review-dsh-plugin) | delivery-review-plugin（Claude Code 双 Agent 交付协作工作流插件）的 DeepSeek Harness 移植版。基于 DSH 的 Cordis 插件系统，以 bundle 方式分发，不改动 DSH 源码，全部能力由插件行在配置层挂载。 |
| [xiaoyuxiaoyuqwq/dsh-desktop](https://github.com/xiaoyuxiaoyuqwq/dsh-desktop) | DeepSeek Harness desktop shell — one-click Electron wrapper around dsh web |
| [Xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) | DSH plugin: edit the system prompt (deployment persona) from the Settings page, with live preview. |
| [XYZ1024-alt/dsh-side-panel](https://github.com/XYZ1024-alt/dsh-side-panel) | 暂无描述 |
| [yangzhe1003/dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) | Firecrawl-backed search provider plugin for the DeepSeek Harness web capability seam (ctx.web) |
| [yejiming/MuseAI](https://github.com/yejiming/MuseAI) | 创建你的 AI 角色，进入你的故事世界。和角色聊天、冒险、穿书，让每一次互动都留下羁绊 |
| [Yihong89/dsh-plugins](https://github.com/Yihong89/dsh-plugins) | DeepSeek Harness (DSH) plugins. First: dsh-usage-report — per-session token usage & estimated cost (/usage + usage_report), priced from the DeepSeek pricing table. |
| [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | 暂无描述 |
| [yjm110517/content-to-editable-ppt-skill](https://github.com/yjm110517/content-to-editable-ppt-skill) | Bootstrap runtime for generating multi-slide editable PowerPoint presentations from topics, documents, or outlines. |
| [yjm110517/visual-to-editable-ppt-skill](https://github.com/yjm110517/visual-to-editable-ppt-skill) | 暂无描述 |
| [YJSoooooo/dsh-chrome](https://github.com/YJSoooooo/dsh-chrome) | Chrome profile bridge for DeepSeek Harness: control an existing signed-in Chrome profile through chrome_repl. |
| [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | OpenAI Codex OAuth login and usage card plugin for DeepSeek Harness |
| [yoke233/dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) | A lively pixel-whale running-state companion for DeepSeek Harness Web. |
| [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) | Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode |
| [yoke233/dsh-tool-monitor](https://github.com/yoke233/dsh-tool-monitor) | Monitor existing DeepSeek Harness background jobs without running commands twice |
| [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | DSH 本地优先学习模式插件：跨会话全局学习线程、按来源讲解、ExplainContext、压缩与可诊断设置界面 |
| [yumimanji/dsh-ui-spec](https://github.com/yumimanji/dsh-ui-spec) | DeepSeek Harness plugin: turn UI screenshots into structured, implementation-grade web frontend specs. Deterministic geometry (sharp) + optional vision-model semantics, merged into one JSON + Markdown spec. |
| [YunTaiHua/illusion-agent](https://github.com/YunTaiHua/illusion-agent) | Illusion-Agent: Where fantasy meets functionality — an AI agent platform for terminal, browser, any model, any OS. |
| [yuukiLike/zeromd](https://github.com/yuukiLike/zeromd) | Obsidian 零成本同步：iPhone ↔ Mac，GitHub 自动备份。本地优先 + 长期积累。｜Local First. Zero-cost Obsidian sync across iPhone, Mac & GitHub. Let knowledge grow over time. |
| [yuxino/dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) | 暂无描述 |
| [yuzi-ska/DSH-Chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) | Real Chrome browser control for DeepSeek Harness agents, powered by Chrome DevTools MCP |
| [yyh-001/dsh-companion](https://github.com/yyh-001/dsh-companion) | DeepSeek 陪伴模式插件 —— 人设、记忆、聊得下去：SOUL 人格 + Hermes 长期记忆，可选 QQ 通道 |
| [yyh-001/dsh-expression](https://github.com/yyh-001/dsh-expression) | 找得到、发得出 —— DSH 表情包插件：语义搜图，只发真实文件，走 companion QQ 通道 |
| [YYTbit/awesome-dsh-bridges](https://github.com/YYTbit/awesome-dsh-bridges) | Bridge your favorite AI coding tools into DeepSeek Harness |
| [YYTbit/dsh-plugin-agent-dashboard](https://github.com/YYTbit/dsh-plugin-agent-dashboard) | Multi-agent dashboard skill for DeepSeek Harness |
| [YYTbit/dsh-plugin-auto-docs](https://github.com/YYTbit/dsh-plugin-auto-docs) | Auto documentation generation skill for DeepSeek Harness |
| [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | Bridge Claude Code memory, skills, and config into DeepSeek Harness |
| [YYTbit/dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) | Structured code review skill for DeepSeek Harness |
| [YYTbit/dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) | Bridge codex skills and config into DeepSeek Harness |
| [YYTbit/dsh-plugin-context-compressor](https://github.com/YYTbit/dsh-plugin-context-compressor) | Context compression skill for DeepSeek Harness |
| [YYTbit/dsh-plugin-cost-tracker](https://github.com/YYTbit/dsh-plugin-cost-tracker) | Token cost tracker for DeepSeek Harness |
| [YYTbit/dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) | Structured long-term memory system for DeepSeek Harness |
| [YYTbit/dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) | Bridge opencode skills and config into DeepSeek Harness |
| [YYTbit/dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) | Bridge pi skills and config into DeepSeek Harness |
| [YYTbit/dsh-plugin-rag](https://github.com/YYTbit/dsh-plugin-rag) | Local knowledge base RAG for DeepSeek Harness |
| [YYTbit/dsh-plugin-vision-toolkit](https://github.com/YYTbit/dsh-plugin-vision-toolkit) | Vision toolkit for DeepSeek Harness -- give text-only agents eyes |
| [zcx369658780/governed-workflow-for-dsh](https://github.com/zcx369658780/governed-workflow-for-dsh) | Policy-enforced, evidence-first governed workflows for DeepSeek Harness agents. |
| [ZeroHackz/OpenFlowFrames](https://github.com/ZeroHackz/OpenFlowFrames) | 暂无描述 |
| [zevorn/dsh-humanize](https://github.com/zevorn/dsh-humanize) | 暂无描述 |
| [zhaoscsc/dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) | Obsidian-style [[wikilink]] mentions for the DeepSeek Harness web GUI: fuzzy-search note titles and attach their contents to the prompt |
| [zhouzhencheng07/dsh-tavily-search](https://github.com/zhouzhencheng07/dsh-tavily-search) | Free keyless Tavily web search tool for DeepSeek Harness (dsh) |
| [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | Plugin and skin collection for DeepSeek Harness (DSH) Web UI - task board, git graph, right-side panel, remote mobile UI, pet, live token stats, and skin center. |
| [ZhuXinAI/sidesight](https://github.com/ZhuXinAI/sidesight) | CLI-first vision sidecar for text-only coding agents. Analyze screenshots, diagrams, charts, UI diffs, and videos with OpenAI-compatible multimodal models. |
| [zimixvx/dsh-archive-manager](https://github.com/zimixvx/dsh-archive-manager) | 暂无描述 |
| [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | OpenPencil design preview and editing plugin for DSH |
| [zsyu9779/dsh-desktop](https://github.com/zsyu9779/dsh-desktop) | 非官方 DeepSeek Harness 桌面壳（Wails/Go）：把 @deepseek-ai/dsh 的 Web UI 包成 Codex 风格原生桌面应用。Unofficial Wails (Go) desktop shell wrapping the DeepSeek Harness web UI in a native Codex-style app. |
| [zzh-newlearner/dsh-postmortem](https://github.com/zzh-newlearner/dsh-postmortem) | Local-first failure postmortems for DeepSeek Harness sessions. |

---
*Generated 2026-08-13T17:49:14Z*