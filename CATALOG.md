# 完整目录（自动生成）

> 汇集 [dsh-external/hub](https://github.com/dsh-external/hub) 的 `catalog.json` 与 GitHub 公开 [dsh-plugin Topic](https://github.com/topics/dsh-plugin) 的全量生态索引 · 生成于 2026-08-24
> 精选列表见 [README](README.md)；本页为公开生态全量索引（271 hub 仓库 + 1000 公开 topic 仓库 + 127 手动补充）

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
| [dsh-island](https://github.com/ChuanTianML/dsh-island) | macOS Dynamic Island 刘海面板（codeisland 复刻），DSH 桌面辅助 |
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

## 🌐 公开插件 Topic（1125）

> 来自 GitHub 公开 [dsh-plugin Topic](https://github.com/topics/dsh-plugin)；共发现 1000 个仓库，另有 127 个为维护者手动补充，上方 hub 目录未覆盖的公开仓库列于此处。

### 界面与体验（52）

| 仓库 | 描述 |
|---|---|
| [01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) | A DeepSeek Harness (dsh) web plugin that replaces the "Deep diving…" turn-status label with phase-aware, typewriter-animated, rainbow-gradient phrases — all configurable from a JSON file. |
| [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | Keyboard-first command palette for DeepSeek Harness Web |
| [147228/dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins) | 夕小瑶 × DeepSeek Harness Web 皮肤合集、安装器与社区创作工具链 |
| [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | 把你鲸鱼娘思考时的 deep diving 自定义成任意你想要的样子 |
| [aliuguofa/dsh-traffic-light](https://github.com/aliuguofa/dsh-traffic-light) | 在聊天输入区显示当前会话状态的红黄绿信号灯 |
| [Ayase34/gal-view](https://github.com/Ayase34/gal-view) | 把dsh会话界面切换成galgame游戏界面的插件 |
| [BrambleXu/dsh-annotate](https://github.com/BrambleXu/dsh-annotate) | Visual browser element annotation for DeepSeek Harness, capturing DOM, styles, accessibility data, comments, and viewport screenshots. DeepSeek Harness 浏览器元素标注插件，捕获 DOM、样式、可访问性数据、评论和视口截图。 |
| [buguoshixc/dsh-user-message-navigator](https://github.com/buguoshixc/dsh-user-message-navigator) | Codex 风格的用户消息导航侧栏 |
| [CanglongCl/dsh-web-review](https://github.com/CanglongCl/dsh-web-review) | DeepSeek Harness Web GUI 的网页预览与元素批注插件，让 AI 根据可视化反馈直接修改前端源码。 |
| [ccq1/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) | DSH 侧边栏，集成文件浏览器、终端和 Git 审查，方便预览文件。 |
| [chensl139-ok/dsh-archived-panel](https://github.com/chensl139-ok/dsh-archived-panel) | 侧边栏已归档面板：查看、打开和取消归档会话 |
| [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | 为 dsh 提供新的「聚焦会话」精简会话视图，更轻松易于阅读，只关注最终产出结果。 |
| [FAVKTOXIC/dsh-theme-liquid-glass](https://github.com/FAVKTOXIC/dsh-theme-liquid-glass) | DeepSeek Harness 的 Apple Liquid Glass 主题 |
| [gameswu/dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) | dsh壁纸插件 |
| [HeiGeAi/deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin) | DeepSeek Harness 换肤系统：21 套内置皮肤 + 一张图生成整套配色的自定义皮肤。数据源驱动，保对比度推导，构建期校验可读性。 |
| [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) | DSH Web 广告拦截器，四层独立防御拦截 dsh-ads 插件的所有广告位 \| DSH Web ad blocker with four independent defense layers targeting the dsh-ads plugin |
| [HuanLinOTO/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) | DSH Web 工作区侧栏替代，顶部全局最近会话 + Workspace→Session 二级菜单 + 面包屑 \| DSH Web workspace sidebar replacement: top global recent sessions + Workspace→Session two-level menu + breadcrumbs |
| [JohnnyTing/dsh-official-homepage-theme](https://github.com/JohnnyTing/dsh-official-homepage-theme) | 复刻 DeepSeek Harness 官方首页风格的主题插件 |
| [Khellendros97/dsh-better-model-selector](https://github.com/Khellendros97/dsh-better-model-selector) | 将输入框模型选择器拆成「可搜索 + 收藏」的下拉选单和「推理强度滑动条」，支持 Ctrl+P / Ctrl+T 快速切换 |
| [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin) | Skin switcher + custom wallpaper for DeepSeek Harness (dsh): curated --dsw-alias-* palettes, translucent wallpaper with opacity/blur controls, persisted per browser (like Codex themes) — 换皮肤 / 自定义背景插件 |
| [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) | DSH (DeepSeek Harness) 的 QQ2006 皮肤插件：注册 qq2006 主题、镜像 body[data-ds-skin]、全局皮肤表与完整素材 |
| [lcohvne-tomorin/dsh-background](https://github.com/lcohvne-tomorin/dsh-background) | 聊天页自定义背景壁纸：上传本地图片或使用图片链接，可调整透明度、暗色遮罩和作用范围 |
| [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | DSH Web GUI PiUI-style diff viewer plugin: replaces the stock DiffBlock for write/edit tool calls via ui-tool diff-card chain slots (host patch included). Private. |
| [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) | 暂无描述 |
| [lhh010/dsh-ui-progress](https://github.com/lhh010/dsh-ui-progress) | DSH Web UI 会话进度插件：输入框停靠区常驻会话进度条（todos 真实进度 / 实时 token 生成速率 / 中断橘红态 / 待办提醒），零核心改动 |
| [Lxd-Ashe/dsh-codex-theme](https://github.com/Lxd-Ashe/dsh-codex-theme) | DSH Web GUI 的可配置 Codex 浅色和深色主题 |
| [lywusichen/dsh-sidebar-buttons](https://github.com/lywusichen/dsh-sidebar-buttons) | 管理左下侧栏按钮：拖拽排序、显隐控制、更多菜单和统一按钮高度 |
| [mjn96/dsh-rhine-theme](https://github.com/mjn96/dsh-rhine-theme) | 明日方舟莱茵生命美术风格的 DeepSeek Harness 皮肤主题 |
| [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | 在 DSH 对话中生成交互式可视化｜Render model-generated interactive cards inside DSH conversations |
| [NonchalantLudens/dsh-side-dir](https://github.com/NonchalantLudens/dsh-side-dir) | Web GUI 详情面板的项目目录树和只读文件预览 |
| [notload/dsh-session-toc](https://github.com/notload/dsh-session-toc) | 会话页右侧常驻、可折叠目录栏：按用户消息定位并高亮当前条目 |
| [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | 开放的侧边栏底座，支持三方拓展注册新侧边栏页面。内置文件渲染编辑/终端/侧边对话/Git/子代理页面 ｜ Open sidebar foundation, supports third-party extensions to register new sidebar pages. Built-in file rendering/editing, terminal, side chat, Git, and sub-agent pages. |
| [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fence — layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. Ships the fence-teaching host plugin, the browser renderer (client half), and the genui skill. |
| [renat3u/dsh-web-archive](https://github.com/renat3u/dsh-web-archive) | 折叠对话当中众多的“无用消息”，例如Think、Bash等 |
| [renat3u/tonghuashun-webui](https://github.com/renat3u/tonghuashun-webui) | 仿同花顺的webui插件 |
| [Shizuku-keop/dsh-plugin-brainstorm-visualizer](https://github.com/Shizuku-keop/dsh-plugin-brainstorm-visualizer) | 结合 AI 发散思考与视觉交互的 DeepSeek Harness 头脑风暴可视化插件 |
| [Slymaster/dsh-theme-lab](https://github.com/Slymaster/dsh-theme-lab) | DeepSeek Harness 非官方模块化主题和 starter kit |
| [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | Whale Girl skin series for DeepSeek Harness. 适用于 DeepSeek Harness 的，鲸鱼娘系列皮肤。 |
| [Small-tailqwq/dsh-deepcel](https://github.com/Small-tailqwq/dsh-deepcel) | 一款模仿 excel 的 dsh 皮肤 |
| [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | Git-style milestone timeline for DeepSeek Harness - hover for metadata, click to jump to any message. 会话里程碑导航条：像 Git 提交图一眼定位每条提问，悬停看时间/轮次/耗时/TTFT，点击即跳转。 |
| [spirits001/dsh-user-message-rail](https://github.com/spirits001/dsh-user-message-rail) | 窗口左侧用户消息刻度轨，支持悬停预览和跳转 |
| [SpookySandwich/dsh-smooth-stream](https://github.com/SpookySandwich/dsh-smooth-stream) | 给 DeepSeek Harness 加入更好的流式文字动画 |
| [Tieboyh/dsh-notes-markdown](https://github.com/Tieboyh/dsh-notes-markdown) | DeepSeek Harness 侧边栏可编辑 Markdown 笔记 |
| [turtle1999/turtle-ui](https://github.com/turtle1999/turtle-ui) | as is, no warranty |
| [Unintendedz/dsh-ui-enhancements](https://github.com/Unintendedz/dsh-ui-enhancements) | DeepSeek Harness 的小型聚焦界面增强 |
| [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) | DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) | DSH 插件：后台任务状态条（对话页任务进度 + 实时输出 tail）。官方 bundle 插件，dsh plugin --profile web add 安装 |
| [xusuyang030218/dsh-preview-ui](https://github.com/xusuyang030218/dsh-preview-ui) | 浏览器内工作区文件树、多格式预览、在线编辑、版本历史与搜索 |
| [yangdongzhen590/dsh-knj-menu](https://github.com/yangdongzhen590/dsh-knj-menu) | 第三方菜单管理器：汇集插件菜单项并支持折叠和置顶 |
| [Yiklek/dsh-settings-manager](https://github.com/Yiklek/dsh-settings-manager) | 管理全局设置弹窗中的插件区块：显示、隐藏、排序、重命名和可滚动导航 |
| [yumm007/dsh-reveal-files](https://github.com/yumm007/dsh-reveal-files) | 在 Produces 行旁添加文件夹图标的双面插件 |
| [zheng16965/dsh-deliverables-toggle](https://github.com/zheng16965/dsh-deliverables-toggle) | 为 DeepSeek Harness 对话产物列表提供展开与收起控制 |

### 桌面客户端（20）

| 仓库 | 描述 |
|---|---|
| [AxelGoal/Deepharn](https://github.com/AxelGoal/Deepharn) | macOS 的 DeepSeek Harness 原生桌面端：Swift 原生外壳、全新前端和两个插件 |
| [bruc3van/dsh-desktop](https://github.com/bruc3van/dsh-desktop) | 一款主打安全且更尊重开发者的开源 DeepSeek Harness 桌面客户端。官方 Web UI ，长任务常驻托盘，支持通知推送；内置安全市场，600+精选插件支持先审查、再安装。 |
| [ChisaAlter/Deepseek-Harness-Desktop](https://github.com/ChisaAlter/Deepseek-Harness-Desktop) | DSH桌面端，支持主题和背景图等多种个性化配置。Electron desktop shell for DeepSeek Harness web UI |
| [chyra-moon/deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) | DeepSeek Harness desktop shell: 1:1 replica of the official web UI as a Windows desktop app (community project) |
| [dlssjdyka0019/dsh-launcher](https://github.com/dlssjdyka0019/dsh-launcher) | 管理多个隔离 DeepSeek Harness 实例的 Windows 桌面工具 |
| [eomis/packhub-workbench-assistant](https://github.com/eomis/packhub-workbench-assistant) | DSH Desktop 工作台安装、切换和更新助手 |
| [FuqiangCraft/dsh-desktop](https://github.com/FuqiangCraft/dsh-desktop) | DeepSeek Harness 桌面伴侣插件和原生外壳 |
| [iuikj/dsh-desktop](https://github.com/iuikj/dsh-desktop) | 一个微调美观的DeepSeek harness客户端（欢迎插件加入） |
| [JustGenius-s/DSH-Desktop](https://github.com/JustGenius-s/DSH-Desktop) | DSH-Desktop |
| [kelai141/dsh-mobile-apk](https://github.com/kelai141/dsh-mobile-apk) | dsh 安卓壳 APK——WebView UI + 内嵌 Termux 运行时快照（解压即跑），为dsh本地运行设计的高性能方案 |
| [liguobao/dsh-desktop](https://github.com/liguobao/dsh-desktop) | An independent, open-source desktop wrapper for DeepSeek Harness. It starts the bundled @deepseek-ai/dsh Web UI locally and loads it in a hardened Electron window on Linux, macOS, and Windows. |
| [oxgbl/dsh-no-cmd-launcher](https://github.com/oxgbl/dsh-no-cmd-launcher) | Windows 后台启动器：无命令行窗口运行 DSH Web，提供桌面启动/停止快捷方式及 npm/CLI 安装 |
| [paean-ai/deeptide](https://github.com/paean-ai/deeptide) | Built by DeepSeek, for DeepSeek — a Swift-native macOS coding agent |
| [PM-Shawn/Abu-Cowork](https://github.com/PM-Shawn/Abu-Cowork) | Open-source alternative to Claude Cowork — a local-first AI agent desktop app · multi-model · self-evolving skills · privacy-first · multi-Harness roadmap · DeepSeek Harness integration in progress |
| [Ruler4396/dsh-launcher](https://github.com/Ruler4396/dsh-launcher) | DeepSeek Harness（dsh）Windows 轻量启动器：双击即用，克制的原生体验 / Lightweight Windows launcher for DeepSeek Harness (dsh) — double-click to run, native & restrained |
| [techysy/deepseek-harness-fnos](https://github.com/techysy/deepseek-harness-fnos) | DeepSeek Harness (DeepSeek 官方 agent 浏览器 UI) fnOS 应用 — 本地常驻服务 |
| [wess09/DeepSeekHarnessDesktop](https://github.com/wess09/DeepSeekHarnessDesktop) | DeepSeekHarness桌面端打包 |
| [whitelonng/dshcode](https://github.com/whitelonng/dshcode) | Community desktop companion for DeepSeek Harness — one-click Electron app for macOS and Windows |
| [xuboboo/dsh-gui](https://github.com/xuboboo/dsh-gui) | DeepSeek Harness 第三方 Windows 桌面客户端：原生窗口、品牌主题与启动动画、启动崩溃修复、Token 用量统计 |
| [zsyu9779/dsh-desktop](https://github.com/zsyu9779/dsh-desktop) | Unofficial cross-platform desktop app for DeepSeek Harness. Native Wails shell for the DSH Web UI on macOS, Windows, and Linux. |

### 终端与 TUI（7）

| 仓库 | 描述 |
|---|---|
| [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | DSH 官方公众号收录的 TUI 补位插件：Claude Code 风，鲸鱼顶栏/实时状态/流式思考/双击 Esc 回滚/上下文进度+TPS。npm 一键装。  DSH official WeChat featured TUI plugin — Claude Code style: whale bar, live status, streaming thoughts, double-Esc rollback, context bar + TPS. npm one-click. |
| [chen-001/dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) | Use dsh via grok-build's TUI. |
| [cofy-x/dsh-console](https://github.com/cofy-x/dsh-console) | DSH 原生 TypeScript 与 React/Ink 终端前端 |
| [dsh-blue/blue](https://github.com/dsh-blue/blue) | DeepSeek Harness 交互式 TUI 插件：基于 Cordis bundle 的 pi-tui 渲染器，支持流式转录、工具调用卡片、审批浮层、会话管理与主题 |
| [dsh-tui/dsh-tui](https://github.com/dsh-tui/dsh-tui) | Claude Code-style terminal UI for DeepSeek Harness agents, as an out-of-tree dsh plugin bundle |
| [gxinxing/deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) | Terminal-native interactive TUI for DeepSeek Harness (dsh) — built with Ink, React for terminals |
| [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | 官方 DeepSeek Harness 的交互式终端 UI 插件：自研 ANSI 极简渲染核心（由作者自己的开源项目天枢 Tui 演进）、流式 Markdown/工具卡、多会话 tab、16+ 主题、slash 命令与选择器、输入历史与本地偏好持久化、LSP 诊断、成本统计、启动自更新。纯展示层。 |

### 输入与提示词（21）

| 仓库 | 描述 |
|---|---|
| [bill9109/dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) | 为 DSH Web UI 增加跨平台文件拖拽与原始路径插入能力，无需复制文件 |
| [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) | DeepSeek Harness (DSH) 插件：✨ 提示词一键增强 + 💬 语音识别（说完自动停·云端/本地双引擎）· 附 🔁 服务异常一键重启 |
| [flg1217/dsh-quick-commands](https://github.com/flg1217/dsh-quick-commands) | 在设置页定义斜杠快捷命令，并在发送时展开为提示词 |
| [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) | 模型回合结束后用 LLM 生成 3 条批判性跟进建议，点击即发送 \| After a model turn, an LLM generates 3 critical follow-up suggestions shown as click-to-send chips |
| [Kian-Oraish/dsh-prompt-enhance](https://github.com/Kian-Oraish/dsh-prompt-enhance) | DSH Web 对话输入框的自适应提示词增强魔法棒 |
| [lbh1nb/dsh-plugins](https://github.com/lbh1nb/dsh-plugins) | DSH 插件合集：会话归档（dsh-session-archive）、附件上传（dsh-attachment-upload）、插话按钮（dsh-steer-button）等输入与会话管理插件 |
| [lhh010/dsh-paste-input](https://github.com/lhh010/dsh-paste-input) | DSH WebUI 文件输入增强：Ctrl+V 粘贴（带首次告知弹窗）+ 拖拽 + 选择文件，发送时复制进会话工作区临时目录 |
| [liuup/dsh-latex-tools](https://github.com/liuup/dsh-latex-tools) | ♾️ Copy and export the LaTeX in DeepSeek Harness 悬停任意 LaTeX 公式即可复制 TeX 源码或导出为独立的 SVG 文件 |
| [loudMore/dsh-drop-to-path](https://github.com/loudMore/dsh-drop-to-path) | DSH 插件:图片与文件直达纯文本模型——图片保留原生附件体验,PDF/Office/压缩包/视频/音频显示为附件栏方块,点击发送时自动转为工作区路径,配合 dsh-vision-toolkit 粘贴即看图。A DSH plugin that delivers images AND files to text-only models as workspace paths: images keep the native attachment UI, other files show as square chips in the rail, paths append on send — pairs with dsh-vision-toolkit. |
| [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | DSH 插件：分支式消息编辑、重掷、重试与版本时间线 \| DSH plugin: branch-based message editing, reroll, retry, version timeline |
| [NormanFxxkingRockwell/dsh-keyboard-history](https://github.com/NormanFxxkingRockwell/dsh-keyboard-history) | DSH 会话输入框的极简输入历史：按 ↑/↓ 翻阅已发送消息 |
| [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动 |
| [qwert702/dsh-auto-translate](https://github.com/qwert702/dsh-auto-translate) | 英文回复自动翻译为中文，工具调用附中文注释，走独立请求且不进入会话上下文 |
| [runfali/dsh-paperclip](https://github.com/runfali/dsh-paperclip) | 输入框文件上传与多格式 read_document 文档读取工具 |
| [SpookySandwich/dsh-plugin-message-edit](https://github.com/SpookySandwich/dsh-plugin-message-edit) | 编辑已发送消息并从该轮次回溯分叉：版本计数器、轮次级版本树，以及 ChatGPT/DeepSeek/Claude 控件布局 |
| [sunzhentao/dsh--prompt--enhance](https://github.com/sunzhentao/dsh--prompt--enhance) | DeepSeek Harness 提示词增强插件 |
| [titanwings/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) | DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Agent feedback. |
| [wangyuanchuan2022/dsh-prompt-optimizer](https://github.com/wangyuanchuan2022/dsh-prompt-optimizer) | 输入框工具行的一键提示词优化按钮，重写草稿并支持长文本 |
| [wuzhigouno-collab/dsh-rp-composer](https://github.com/wuzhigouno-collab/dsh-rp-composer) | DSH Web 角色扮演结构化输入：台词、动作、心理分框填空并用模板组装发送 |
| [Xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) | DSH plugin: edit the system prompt (deployment persona) from the Settings page, with live preview. |
| [yafangwang9/dsh-voice-plugin](https://github.com/yafangwang9/dsh-voice-plugin) | DeepSeek Harness 语音输入插件 |

### 浏览器与远程（18）

| 仓库 | 描述 |
|---|---|
| [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | DSH 原生鸿蒙开发助手：hdc 设备闭环调试 + 设备面板（官方 client 插件形态）+ 离线官方知识层（Tier-1 随包）+ DevEco CLI 构建/签名/模拟器控制 / DSH-native HarmonyOS dev assistant: hdc device loop, live device panel, offline official knowledge, DevEco CLI build/sign/emulator |
| [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform backends, Playwright rendering) |
| [delef/dsh-free-web-search](https://github.com/delef/dsh-free-web-search) | 免费网页搜索：10 个引擎、自动回退链、时间筛选、GitHub/Reddit 平台搜索、网页抓取、LRU 缓存与设置界面，基础使用无需 API Key |
| [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | Replace dsh's built-in web search with search MCP servers (Tavily/Brave/Exa/Perplexity/DuckDuckGo/custom), configured from the web Settings page. Disables the built-in DeepSeek search provider while enabled. |
| [hanelalo/browser-bridge](https://github.com/hanelalo/browser-bridge) | 让你的agent真的像你一样操控你的浏览器窗口 |
| [icodesign/orbis](https://github.com/icodesign/orbis) | A mobile client for deepseek harness remote control |
| [liustack/modsearch](https://github.com/liustack/modsearch) | 🥇 The strongest free web search plugin for DeepSeek Harness, and the search bridge for every model without native web access. Free, no signup, no API key. Ask the web or X, get structured JSON evidence. \| 🥇 全网最强的 DeepSeek Harness 免费联网搜索插件，免费免注册免 API key。为不能联网的模型补上搜索，问网页或 X，拿回结构化 JSON 证据（搜索、抓取、引用）。 |
| [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | Chrome sidebar extension that lets DeepSeek Harness operate your browser directly, no vision capabilities required. 一款 Chrome 侧边栏扩展程序，可让 DeepSeek Harness 直接操控您的浏览器，无需视觉能力。 |
| [oitsukiii/deepseek-harness-lan](https://github.com/oitsukiii/deepseek-harness-lan) | Run DeepSeek Harness Web UI on your home LAN — 4 minimal patches + one-click apply/revert scripts \| 让 DeepSeek Harness 的 Web UI 在局域网跑起来 |
| [railgun0325/dsh-phone](https://github.com/railgun0325/dsh-phone) | 让 DeepSeek Harness 的 agent 跑在手机里，通过 Magisk root 原生操作安卓系统（截图/点击/滑动/开应用）+ 移动端布局 + WebView APK |
| [SeerableOfficial/dsh-web-search-toggle](https://github.com/SeerableOfficial/dsh-web-search-toggle) | 会话级网页搜索开关：启用后引导 Agent 在回答前先检索网页 |
| [sheep-programmer/dsh-web-search-free](https://github.com/sheep-programmer/dsh-web-search-free) | DSH 免费网页搜索：匿名免 Key 的 Parallel 默认后端与 Exa 备用后端，附设置开关和兼容 Claude Code/Codex 的 MCP 服务器 |
| [sjlgg/dsh-free-web-search](https://github.com/sjlgg/dsh-free-web-search) | DeepSeek Harness 免费网页搜索插件 |
| [Tabbit-Browser/dsh-tabbit](https://github.com/Tabbit-Browser/dsh-tabbit) | Tabbit Browser plugins for Deepseek Harness |
| [taxueseek/argo](https://github.com/taxueseek/argo) | 专门为 agent 打造的 agent 搜索工具，具备多语言搜索能力，覆盖中文/英文/学术/代码/购物/金融/新闻/百科。 |
| [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | DSH 真实浏览器插件：通过 Kimi WebBridge 让 Agent 操作用户已登录的浏览器，并提供 13 个 webbridge_* 工具。 / Let DSH Agents use your signed-in browser through thirteen Kimi WebBridge tools. |
| [UynajGI/dsh-ssh](https://github.com/UynajGI/dsh-ssh) | SSH remote-execution plugin for DeepSeek Harness: ProxyJump chain, SFTP filesystem, subprocess and PTY over ssh2 |
| [zsagi1368/dsh-webstack](https://github.com/zsagi1368/dsh-webstack) | 集成网页搜索与抓取内核：免费池开箱即搜、SSRF 四道防护与双语诊断 |

### 记忆与上下文（18）

| 仓库 | 描述 |
|---|---|
| [1014029855/dsh-context-lens](https://github.com/1014029855/dsh-context-lens) | 检查、度量、搜索和比较 DeepSeek Harness 组装的 provider-neutral 上下文 |
| [chidaic/dsh-light-memory](https://github.com/chidaic/dsh-light-memory) | 四个 Markdown 文件和 append/distill 动作组成的轻量记忆系统 |
| [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广播 · 会话搜索 · 提示词管理器 · 临时信息便签——零核心修改、零运行时依赖，随装随用、卸载即净。 |
| [Frog755/dsh-hybrid-memory](https://github.com/Frog755/dsh-hybrid-memory) | 混合记忆：L1 冻结快照、L2 SQLite FTS5 可检索知识库、L3 多工具导入，数据本地存储 |
| [GooodWei/context-vista](https://github.com/GooodWei/context-vista) | 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配，compact指令效果，同时支持估算费用消耗，对标 Claude Code 的 /context。 |
| [knqiufan/powercontext-dsh](https://github.com/knqiufan/powercontext-dsh) | DeepSeek Harness plugin that connects to a PowerContext Server over HTTP for recall, memory, handoff, experience, and skills. |
| [Missher12/dsh-missher-memory](https://github.com/Missher12/dsh-missher-memory) | 面向长期项目、经过审阅的项目级记忆 |
| [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme) | 🧠 The memory that dreams — self-evolving memory for DeepSeek Harness: your AI remembers across sessions, consolidates in its sleep, forgets what matters less, and grows smarter over time. Fully offline & private. |
| [Mutx163/dsh-model-memory](https://github.com/Mutx163/dsh-model-memory) | 自定义 API 模型的思考强度档位管理与跨会话偏好记忆：设置页直接切换 low/medium/high/max，并按渠道自动恢复上次模型与强度 |
| [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Three-tier memory control plane for DeepSeek Harness: persistent runtime context, searchable project documents, pluggable long-term memory, smart routing, supervised agent workflows, WebUI, and headless tools. |
| [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) | Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness (capability seam: ctx.memory + SQLite provider + memory tool + frozen snapshot injection) |
| [qwert702/dsh-context-compressor](https://github.com/qwert702/dsh-context-compressor) | 面向小模型的上下文压缩：将工具输出与对话历史压缩为摘要，并在新会话继续 |
| [qwert702/dsh-memory](https://github.com/qwert702/dsh-memory) | DSH Web 长期记忆：项目和全局存储、自动抽取与注入、小模型整理、Obsidian 风格链接图 |
| [shaomingbo/dsh-session-reference-copy](https://github.com/shaomingbo/dsh-session-reference-copy) | 从 Web 会话页头复制规范的跨会话引用 |
| [Totoro-qaq/Cobsidian](https://github.com/Totoro-qaq/Cobsidian) | Agent-agnostic workflow skill for maintaining Obsidian knowledge bases |
| [Tyan66666/billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) | Model-driven context management (Active Context Pruning / ACP) for the DeepSeek Harness — the model decides when and what to compress. Ported from billion-context-pi (ranxianglei); acp-kernel reused verbatim. CompactionEngine backend with compress/decompress/search_context/acp_status tools. |
| [Unintendedz/dsh-session-workspace](https://github.com/Unintendedz/dsh-session-workspace) | 在已登记工作区之间移动冷却的 DeepSeek Harness 会话 |
| [zeropointnine/dsh-compact-and-branch](https://github.com/zeropointnine/dsh-compact-and-branch) | 压缩会话并在新会话中继续工作 |

### 消息与通知（19）

| 仓库 | 描述 |
|---|---|
| [BiBoyang/dsh-im-bridge](https://github.com/BiBoyang/dsh-im-bridge) | DSH 插件：把 DeepSeek Harness 桥接到 IM（v0.1 微信/iLink；钉钉/飞书/Telegram 预留）。turn/approval 推送 + 远程批准/注入，持久去重/收敛分段/合并窗口。 |
| [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | 为 DSH 增加桌面通知提醒 |
| [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词 |
| [Entity-Him/dsh-hiboard-push](https://github.com/Entity-Him/dsh-hiboard-push) | 将任务完成消息推送到华为 HarmonyOS 助手今天卡片流 |
| [having5548/dsh-notify](https://github.com/having5548/dsh-notify) | 通用通知：应用内 toast、Windows 原生 toast，以及从操作中心一键批准 |
| [Hyna-hla/harness-remote](https://github.com/Hyna-hla/harness-remote) | 第三方 DeepSeek Harness 手机遥控端：局域网/cpolar 连接、扫码自动连接、流式聊天、审批横幅与后台推送 |
| [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | Bidirectional Lark/Feishu controller for DeepSeek Harness |
| [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for DeepSeek Harness |
| [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) | Lark/Feishu IM bot channel for DeepSeek Harness \| 飞书 DeepSeek Harness （DSH）插件 |
| [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude keyword rules. |
| [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) | DeepSeek Harness (dsh) 接入飞书/Lark bot，扫码即用：流式卡片、项目工作区、并行任务、多角色 Agent、跨会话通知、对话内模型/密钥管理与安全网守护（dsh 崩溃后飞书仍可自救）。A scan-to-connect bridge bot connecting DeepSeek Harness (dsh) into Feishu/Lark: streaming cards, workspaces, parallel tasks, multi-role agents, cross-session notify, in-chat model/key management, and a safety-net guardian. |
| [shaomingbo/dsh-attention](https://github.com/shaomingbo/dsh-attention) | Web 注意力提醒：标签标题、favicon、声音和原生系统通知 |
| [SkuraSshly/dsh-done-badge](https://github.com/SkuraSshly/dsh-done-badge) | 任务完成时显示原生 Windows 任务栏计数徽标，返回窗口后自动清除 |
| [sliverp/DeepSeek-harness-qqbot](https://github.com/sliverp/DeepSeek-harness-qqbot) | QQ Bot text and image channel plugin for DeepSeek Harness |
| [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) | DeepSeek Harness 邮件插件：email_list/read/search/send/folders/attachment 六工具，内置 QQ/163/126/新浪/阿里/Gmail/Outlook/iCloud 八个预设，多账号、附件收发、Web 设置页配置，纯 Node 全平台。· IMAP/SMTP email tools for DeepSeek Harness agents. |
| [ThreeBody6666/dsh-im-hub](https://github.com/ThreeBody6666/dsh-im-hub) | 多平台 IM 网关：飞书（Lark）长连接、企业微信加密回调、Telegram 长轮询；GUI 可视化设置 |
| [Unintendedz/dsh-attention-notify](https://github.com/Unintendedz/dsh-attention-notify) | 为每个需要用户关注的 DSH 事件发送浏览器通知 |
| [Whale-Zhang/dsh-complete-chime](https://github.com/Whale-Zhang/dsh-complete-chime) | 对话轮次完成时播放提示音，内置音效并支持设置页上传自定义音效 |
| [wssfk12138/dsh-wechat-notify](https://github.com/wssfk12138/dsh-wechat-notify) | DeepSeek Harness 插件：为 agent 新增 wechat_notify 工具，让 AI 通过本机 ClawBot 微信通道主动给你发通知（任务完成 / 需决策时），中文可靠、掉线自提示。 |

### 视觉与图像（12）

| 仓库 | 描述 |
|---|---|
| [Anionex/agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) | 为纯文本模型"看图“设计更好的视觉工具箱和技能，支持多图理解，图片问答，前端UI还原、GUI 自动化等，并可选无缝接入多个主流agent，直接识别粘贴图片｜ A vision toolkit and skill designed for text-only llms — image Q&A, long-screenshot OCR, frontend UI restoration, and GUI automation, with optional seamless integration for Codex, Claude Code, Pi, Oh My Pi, and OpenCode |
| [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | [dsh]为纯文本模型设计更强大的视觉工具箱：一行安装使用、粘贴图片直接识别、多张图片问答、截图到前端UI 还原等｜DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diff, Artifacts, and Web UI. |
| [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | DeepSeek Harness 插件：DeepSeek Pro 大脑 + 自动识图。GUI 附加图片默认经官方 deepseek-v4-flash-vision-exp 原生识图，转译成文字后交给 DeepSeek 作答（纯文本的 V4-Pro 也能看图）；支持百炼/智谱/OpenRouter 等任意 OpenAI 兼容 VLM，无 key 自动探测本地 Ollama；安装时有一问式确认 |
| [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | provider-agnostic AIGC HTTP 桥 + 无限画布 + ffmpeg 后处理，13 个工具含画布连边/reroll/媒体编辑 \| Provider-agnostic AIGC HTTP bridge + infinite canvas + ffmpeg post-processing; 13 tools incl. canvas linking/reroll/media-edit |
| [leonardoxr/dsh-image-preview](https://github.com/leonardoxr/dsh-image-preview) | DeepSeek Harness 的 read_image 内联预览 |
| [liustack/modlens](https://github.com/liustack/modlens) | The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an image, get structured JSON evidence (OCR, layout, semantics). \| 全网最强 DeepSeek Harness 外挂视觉插件，为 DeepSeek、GLM 等纯文本模型外挂视觉能力，粘贴图片即得结构化 JSON 证据（OCR、版面、语义）。 |
| [Nicholas023/vision-exp-tile](https://github.com/Nicholas023/vision-exp-tile) | DSH 插件：大图切 800×800 无损小块 + 坐标标注 + 分块聚合逻辑，直连 deepseek-v4-flash-vision-exp 识别；仅用纯官方 DSH 功能，零依赖第三方插件，不统计 token/费用。 |
| [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) | Near-native image understanding for DeepSeek Harness |
| [wangyang10/image-vision](https://github.com/wangyang10/image-vision) | 暂无描述 |
| [william-jin-cmu/dsh-vision](https://github.com/william-jin-cmu/dsh-vision) | dsh 插件：给纯文本 DeepSeek 加视觉——view_image 工具桥接任意 OpenAI 兼容 VLM（默认智谱免费档，实测 4 厂商 10 模型） |
| [yauntyour/DSH-Multimodal](https://github.com/yauntyour/DSH-Multimodal) | DSH 多模态输入插件：按文件类型（图片/视频/音频）配置独立处理模型链，文件先转成 Prompt Tokens 再交给纯文本会话模型 |
| [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | Eyes for text-only DeepSeek Harness agents: built-in free vision chain (no key) + pixel-level vision tools (Q&A, grounding, crop, pixel diff, colors, OCR, SVG trace, cutout, screenshots). One-command install, no Python, image turns work like ordinary tool-calling turns. |

### 模型与推理（19）

| 仓库 | 描述 |
|---|---|
| [DevViking-Persike/dsh-subscriptions](https://github.com/DevViking-Persike/dsh-subscriptions) | 通过各厂商 OAuth 登录，将 Claude 与 ChatGPT/Codex 订阅作为模型服务商 |
| [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) | Use openai-codex models and image generation via ChatGPT OAuth for DeepSeek Harness. |
| [Hu9956/dsh-codex-provider](https://github.com/Hu9956/dsh-codex-provider) | OpenAI Codex provider for DeepSeek Harness with device-code OAuth, Codex CLI import, token refresh, and a web settings panel. |
| [icyaaaww/dsh-adaptive-model-router](https://github.com/icyaaaww/dsh-adaptive-model-router) | DeepSeek Harness 的确定性逐轮自适应模型路由 |
| [morluto/internalcot](https://github.com/morluto/internalcot) | Make agents show their full chain of thought. |
| [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) | Advisor - Pair a second model that passively reviews each turn and injects notes.  搭配一个会在每轮对话被动注入见解和审查的副模型。 |
| [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件 |
| [Player-MINEPIG/dsh-llm-codex-oauth](https://github.com/Player-MINEPIG/dsh-llm-codex-oauth) | 在 dsh（DeepSeek Harness）里使用你的 ChatGPT / Codex 订阅。插件通过 OpenAI Codex 的 OAuth 流程登录 ChatGPT 账号，把订阅额度暴露成 dsh 的 `codex-oauth` 模型提供方。 |
| [SailingLoong/loongport-dsh](https://github.com/SailingLoong/loongport-dsh) | 多站点中转服务商接入：签名目录（身份、地址、模型）、Settings → LoongPort 服务商与 API Key 配置页、OpenAI 兼容路由 |
| [suntianc/dsh-codex-auth](https://github.com/suntianc/dsh-codex-auth) | DeepSeek Harness plugin that reuses the local Codex CLI ChatGPT login and adds a native GPT Auth settings card |
| [welsione/dsh-model-router](https://github.com/welsione/dsh-model-router) | 统一模型路由：一个逻辑 ModelID 连接多个服务商，首 token 故障切换与冷却、健康排序、按用途自动选择三档，并支持候选推理强度和设置页管理 |
| [wingoo/codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) | Use local Codex App Server as a model provider in DeepSeek Harness |
| [wink-run/tokenbank](https://github.com/wink-run/tokenbank) | Token Bank — the local LLM gateway that sits between your AI agents and every provider.  Know where tokens go · Spend less with smart routing to Ollama, Groq, GitHub Models · Earn by sharing idle quota on a community P2P network.  One-click onboarding for Cursor, Claude Code, Codex CLI, Gemini CLI — no agent changes. Full trace, seamless model swap |
| [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) | DeepSeek Harness 的 ChatGPT/Codex 订阅插件：独立 OAuth、模型、真实额度、搜索与图片；无需 API Key 或 Codex CLI |
| [wyouwd1/dsh-opencode-models](https://github.com/wyouwd1/dsh-opencode-models) | 在 DeepSeek Harness 管理 OpenCode Zen 与 Go 免费层模型：实时列表、路由漂移、四个 Agent 工具和设置区块 |
| [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) | Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow |
| [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) | DSH 插件:直接复用 Codex CLI 本地登录订阅凭证,在 DeepSeek Harness 中使用 ChatGPT 订阅模型,无需 API Key \| DSH plugin: reuse your Codex CLI local subscription login to use ChatGPT subscription models in DeepSeek Harness, no API key required |
| [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | OpenAI Codex OAuth login and usage card plugin for DeepSeek Harness |
| [ziyou979/dsh-llm-oauth](https://github.com/ziyou979/dsh-llm-oauth) | DeepSeek Harness plugin: OAuth / subscription-plan LLM providers (Grok, GitHub Copilot, OpenAI Codex, Anthropic, OpenRouter) |

### 成本与用量（16）

| 仓库 | 描述 |
|---|---|
| [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | RMB/USD token-billing plugin for DeepSeek Harness (dsh web): official-policy auto pricing with peak/off-peak hours, per-message ledger, account balance, locale-driven currency display. 人民币/美元 token 计费插件 |
| [Ghost011118/dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | DeepSeek account balance and session cost readout for the DeepSeek Harness Web GUI |
| [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | DeepSeek Harness session cost meter plugin: session/daily cost, budget, history, OpenCode Go quota, official & custom-provider balance, Codex-like token heatmap, peak/off-peak pricing with pre-switch popup & system-notification alerts, official price sync, 90+ model pricing catalog, Coding Plan quota queries (7 vendors), bilingual zh/en UI |
| [Hou-DL/dsh-token-heatmap](https://github.com/Hou-DL/dsh-token-heatmap) | 本地 Token 热力图：按小时、周、月、季度和年统计 |
| [Huasecc/dsh-usage](https://github.com/Huasecc/dsh-usage) | DeepSeek 账户全量用量与余额面板，读取官方平台 API |
| [iamfitzwu/dsh-localhost-cost](https://github.com/iamfitzwu/dsh-localhost-cost) | 面向本地模型开发者的 DeepSeek 成本预测插件 |
| [jelly-000/dsh-balance-monitor](https://github.com/jelly-000/dsh-balance-monitor) | DeepSeek 账户余额、剩余比例条与今日花费，显示在 dsh 侧边栏底部 · DeepSeek balance, remaining-ratio bar and today's spend in the dsh sidebar footer. |
| [LucienLL/dsh-peak-price-panel](https://github.com/LucienLL/dsh-peak-price-panel) | 峰谷价格看板、实时账户余额、分级低余额提醒和充值入口 |
| [Phant0Meow/dsh-meow-cachebilling](https://github.com/Phant0Meow/dsh-meow-cachebilling) | 输入框上下文圆环中的本轮缓存命中、未命中和输出费用读数，按官方峰谷价及模型自动计价 |
| [qwert702/dsh-token-viewer](https://github.com/qwert702/dsh-token-viewer) | DeepSeek Harness 实时 token 用量与成本监控：读取 token-meter 投影，不调用模型 |
| [scientisbo/dsh-codex-usage](https://github.com/scientisbo/dsh-codex-usage) | Codex 订阅配额与 DeepSeek 余额聚合面板 |
| [scientisbo/dsh-deepseek-usage](https://github.com/scientisbo/dsh-deepseek-usage) | DeepSeek 用量与余额面板 |
| [TwotwoPiggy/dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) | dsh余额插件. A DeepSeek Harness plugin for real-time token tracking and highly accurate session cost estimation, featuring dynamic peak/off-peak pricing support. |
| [woosh2010/dsh-usage-dashboard](https://github.com/woosh2010/dsh-usage-dashboard) | 峰谷计费坞与用量分析仪表盘：Token、成本和模型统计，趋势与结构图表，跨会话历史及时间/会话/模型筛选 |
| [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) | Provider balances, subscription quotas, and token-usage analytics for the DeepSeek Harness Web GUI (dsh web). |
| [YYfather/dsh-balance](https://github.com/YYfather/dsh-balance) | 状态栏显示 DeepSeek/MiMo 余额与请求开销，支持多模型峰谷定价和超额提醒 |

### 数据与可视化（3）

| 仓库 | 描述 |
|---|---|
| [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | 有效解决了写代码的时候账户不能同时亏钱的BUG |
| [kangjinghang/dsh-xueqiu](https://github.com/kangjinghang/dsh-xueqiu) | 雪球 mini 行情面板 — DeepSeek Harness 免登录 A股/港美股实时行情、K线、分时、热榜、7x24快讯。可拖拽悬浮面板，交易时段智能刷新。 |
| [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) | DSH 插件生态透明排行与推荐：每日自动抓取 dsh-plugin 话题 + 公开评分模型 + 排行/推荐插件与静态站 |

### 测试与诊断（13）

| 仓库 | 描述 |
|---|---|
| [Areium/dsh-fail-logger](https://github.com/Areium/dsh-fail-logger) | DeepSeek Harness（DSH）插件：自动记录所有执行模式（原生工具 / PTC run_code / 代码内嵌工具调用）的工具失败错因，去重、计数、确定性排序后沉淀进 skill 的机器维护实录区段——让 Agent 越用越少错。 |
| [B1lli/dsh-plugin-bench](https://github.com/B1lli/dsh-plugin-bench) | 证据化、类型感知的 DSH 插件质量评测：按 artifact 与完整 commit 绑定八维质量区间和证据账本，输出 Markdown/SVG 评分卡 |
| [BiBoyang/dsh-eval-harness](https://github.com/BiBoyang/dsh-eval-harness) | DSH 插件评测工具：YAML 用例驱动真实 agent 回归评测 + baseline 对比 PASS/WARN/FAIL 门禁｜Regression eval harness for DeepSeek Harness plugins |
| [Evhye38496/dsh-perfscope](https://github.com/Evhye38496/dsh-perfscope) | DSH 插件一键健康检查和评分：扫描、评分、修复建议与分享 |
| [icyaaaww/dsh-tool-failure-circuit-breaker](https://github.com/icyaaaww/dsh-tool-failure-circuit-breaker) | 阻止重复的相同失败工具调用 |
| [maxmilian/dsh-sonarqube](https://github.com/maxmilian/dsh-sonarqube) | 只读 SonarQube Community Build 工具：Quality Gate、问题、安全热点、覆盖率与项目指标 |
| [Monicaxixi/dsh-loglens](https://github.com/Monicaxixi/dsh-loglens) | 有界、游标感知的日志检查插件 |
| [morluto/flameox](https://github.com/morluto/flameox) | Runtime evidence that helps agents trace, profile, and burn down hotspots in application and native code, GPU kernels, and inference stacks. |
| [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具 |
| [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | DSH 会话健康检查插件：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session_health 工具 |
| [udsy19/dsh-toolcall-stream-repair](https://github.com/udsy19/dsh-toolcall-stream-repair) | 在工具调用增量到达 block assembler 前修复畸形的流式 tool-call delta |
| [XuXcode/dsh-loghud](https://github.com/XuXcode/dsh-loghud) | Spring Boot 错误实时 HUD，并提供可选 AI 诊断 |
| [Zn-Dk/dsh-session-repair](https://github.com/Zn-Dk/dsh-session-repair) | 诊断并安全修复损坏的 DSH 会话历史：zstd/JSONL 校验、空 tool-call ID 链确定性修复、备份恢复和审计记录 |

### 安全与隐私（4）

| 仓库 | 描述 |
|---|---|
| [eversko/dsh-blackbox](https://github.com/eversko/dsh-blackbox) | DeepSeek Harness 隐私安全的飞行记录器与事故报告 |
| [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告 |
| [openguardrails/openguardrails](https://github.com/openguardrails/openguardrails) | The vendor-neutral protocol for AI agent safety & security — and the neutral benchmark that ranks the vendors. |
| [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) | Claude Code-style declarative permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-name, argument (glob/regex), and workspace-path matching on the tools/pre-execute waterfall, session-log audit, and HMR reload. |

### Agent 与自动化（34）

| 仓库 | 描述 |
|---|---|
| [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | 为 DeepSeek Harness 提供电脑控制插件：新鲜 Accessibility 观测、过期状态拒绝、作用域权限与安全输入（目前支持macos）｜Accessibility-first macOS Computer Use bundle for DSH with fresh observations, stale-state rejection, scoped permissions, and safe input. |
| [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) | A safety gate for DeepSeek Harness: a stronger model reviews dangerous tool calls before they run. Plus vision and BlockRun's full model catalog from one wallet, paid per request over x402. |
| [bobleer/dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | BitFun 与 DSH ACP 交互对接 插件 |
| [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | An omni-plugin for harness engineering workflows with multi-agents, programmatic gates and skills. |
| [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | Cross-instance message/event handoff plugins for DSH (interconnect service + tools) |
| [Chu-m/dsh-chat-continue](https://github.com/Chu-m/dsh-chat-continue) | 失败 API 请求自动重试，按可配置的 HTTP 状态码和错误码规则保持 DSH 对话连续 |
| [Devin-AXIS/iPolloWork](https://github.com/Devin-AXIS/iPolloWork) | Enterprise-grade, local-first Agent Workbench for people and agent teams. A unified multi-engine workspace for Codex Harness, DeepSeek Harness, and OpenCode, with unified plugins and Skills, multi-agent projects and tasks, and editable code, documents, presentations, design, and video. |
| [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | Open task handoff protocol for DeepSeek Harness, WorkBuddy, Claude Code and Codex — verified state, not chat logs |
| [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the agent, with dock, sidebar branch, and a global dashboard. |
| [hellowind777/helloagents](https://github.com/hellowind777/helloagents) | 一个自主的高级智能伙伴，不仅分析问题，更持续工作直到完成实现和验证。 |
| [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) | DSH Web UI plugin: auto-sends 「继续」 to resume requests interrupted by non-human causes — error classification, adaptive backoff, pause, idempotency guard, loop guard, templated resume texts, stats, all configurable from the settings card |
| [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | 可配置子代理 profile 系统，单一 subagent 工具 + profile 参数，含 Web UI 设置/实时进度/子代理树 \| Configurable subagent profile system: single subagent tool + profile param, with Web UI settings/real-time progress/subagent tree |
| [humblebanana/dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | DeepSeek Harness record macOS desktop workflows by demonstration and turn them into agent skills (open-record-replay skill + orr_* tools) |
| [humblebanana/open-record-replay](https://github.com/humblebanana/open-record-replay) | Open-source macOS record-and-replay workflow recorder for computer use agents. Captures mouse, keyboard, and UI events as structured traces so agents can learn, replay, and automate real desktop tasks. |
| [Jarad-z/dsh-goalmesh](https://github.com/Jarad-z/dsh-goalmesh) | 目标驱动的多 Agent 编排：有界 DAG 调度、嵌套委派、类型化证据和持久轨迹界面 |
| [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams plugin for DeepSeek Harness |
| [nutshellai-tech/mobius](https://github.com/nutshellai-tech/mobius) | The first self-evolving open-source Agent OS, connecting your team, AI agents, devices, and compute |
| [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) | ACP server implementation for DeepSeek harness. dsh-acp |
| [openma-ai/open-managed-agents](https://github.com/openma-ai/open-managed-agents) | Open-source Claude Managed Agents API implementation and self-hosted Claude Tag-style agent runtime. Drop-in compatible; runs on Cloudflare Workers/Durable Objects or Node.js. Apache 2.0. |
| [Optim-Agent/dsh-plans](https://github.com/Optim-Agent/dsh-plans) | 计划先行 Agent 预设：把仓库变更调研沉淀为 dsh-plans/ 下可追溯的 Markdown 计划，经 reviewer/criticizer 子代理多轮打磨，再作为 DSH goal 按验证清单执行 |
| [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) | Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent returns structured allow/deny verdicts with reasons, fail-closed by default, fully auditable from the session log (approval/asked -> autoReview/verdict -> approval/decided). |
| [pulseaiclub/phi](https://github.com/pulseaiclub/phi) | a coding Agent from pi. ∞ providers, sub-agents, hashline edits, and a permission gate |
| [qwert702/dsh-commander](https://github.com/qwert702/dsh-commander) | DSH Web 指挥官：通过 dsh-dispatch 协议块编排对话并自动生成结果回执 |
| [qwert702/dsh-continue-on-limit](https://github.com/qwert702/dsh-continue-on-limit) | 本地模型触及输出 token 上限时自动发送 continue，让回复持续输出 |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | Local-first AI agent runtime with sandboxed sessions, MCP tools, memory, credentials, audit/replay, and a built-in console. Run OpenAI, Anthropic, MiniMax, DeepSeek V4, and OpenAI-compatible models on your infrastructure. |
| [shaokeyibb/dsh-plugin-product-subagents](https://github.com/shaokeyibb/dsh-plugin-product-subagents) | Role-based Codex / Claude Code / ACP subagent providers for the DeepSeek Harness — continuable children, durable session recovery, per-role product permissions, and delegation with a permission ceiling. |
| [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) | DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent sessions and manage schedules from DSH Web or an Agent. |
| [toolclub/agent_team_gui](https://github.com/toolclub/agent_team_gui) | 可复用 Agent 小队：每个成员独立配置 provider/model 路由与工具策略，支持串行/并行派单、spawn/fork/chain 上下文模式和 Web 管理面板 |
| [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) | OpenBiliClaw 是本地运行的跨平台个性化内容推荐 Agent，持续理解你的兴趣并主动找内容。本仓库是它的 DeepSeek Harness 插件：DSH 界面常驻第四栏（推荐/内容库/对话/画像/设置），注册 22 个 Agent Bridge 工具，让 Agent 也能读推荐、答探测、闭环学习。 |
| [whiteguo233/OpenBiliClaw](https://github.com/whiteguo233/OpenBiliClaw) | 本地私有、开源的自进化跨平台 AI 内容发现 Agent：先理解你，再主动从 B站、小红书、抖音、YouTube、X、知乎、Reddit、微博等平台与开放 Web 寻找内容。（支持 deepseek harness 插件） \| Local-first open-source cross-platform AI content discovery agent: understands you, then proactively finds content across Bilibili, Xiaohongshu, Douyin, YouTube, X, Zhihu, Reddit, Weibo and the open web.（support deepseek harness plugin） |
| [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | 自进化插件：agent 在 session 内随对话给自己长出/剪掉能力 —— evolve_add 热挂载持久化 cordis 插件（下一 step 工具即可见），evolve_remove 可逆卸载，重启自动恢复 |
| [YunTaiHua/illusion-agent](https://github.com/YunTaiHua/illusion-agent) | Illusion-Agent: Where fantasy meets functionality — an AI agent platform for terminal, browser, any model, any OS. |
| [zenx0x/allinluna](https://github.com/zenx0x/allinluna) | Resource-aware multi-agent orchestration for Codex and DeepSeek Harness (All in Flash DSH plugin) |
| [ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) | Continual self-evolution plugin for DeepSeek Harness: versioned, auditable, rollback-safe harness state refined from session trajectories, with a benchmark-driven validation loop. |

### 开发与工程（105）

| 仓库 | 描述 |
|---|---|
| [0xsline/awesome-deepseek-harness](https://github.com/0xsline/awesome-deepseek-harness) | DeepSeek Harness (DSH) ecosystem: curated plugins, tools, and infrastructure from dsh-external/hub and the public dsh-plugin topic. |
| [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) | My DSH plugins |
| [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) | DSH 插件雷达与精选榜：多路自动发现 9000+ 候选，容器真实安装路径运行级实测（四档判定），精选 Top 50 · 11 类人工策展，全量索引 PLUGINS-ALL.md，自动更新。 |
| [Alex-Yanggg/awesome-DSH-plugin](https://github.com/Alex-Yanggg/awesome-DSH-plugin) | A meticulously curated list of useful plugins, extensions, tools and development resources built for DSH, covering productivity enhancement, functional expansion, debugging utilities and custom development modules. |
| [ali-meoo/meoo-cli](https://github.com/ali-meoo/meoo-cli) | meoo cli 是秒悟（Meoo）官方推出的命令行工具，让 Claude Code、Codex、Cursor、Qoder等本地 agent 在帮你写完前端代码后，能直接接管「数据库、用户登录、文件存储、部署上线」的所有云端工作——你只需要在终端跑一条命令，剩下的交给 AI。 |
| [AlliotTech/deepseek-harness-docker](https://github.com/AlliotTech/deepseek-harness-docker) | deepseek-harness docker部署 |
| [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | deepseek harness对话和代码状态回退插件 \| DSH — rewind conversation and workspace state, powered by a persistent Change Ledger |
| [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) | A curated list of plugins for DeepSeek Harness (dsh) · DeepSeek Harness 插件精选列表 |
| [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) | Find DSH plugins inside the agent — live GitHub dsh-plugin topic search, star-ranked / 会话内搜索发现 DSH 插件 |
| [bao-hp/dsh-check-update](https://github.com/bao-hp/dsh-check-update) | 检查 DSH 更新，提供更新日志与备份 |
| [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) | DSH插件市场 / DSH Plugin Marketplace: 在 DeepSeek Harness Web GUI 中一键浏览、安装与更新 GitHub topic:dsh-plugin 的全部插件 \| browse, install & update all GitHub dsh-plugin plugins in the DSH Web GUI |
| [bruc3van/awesome-dsh-plugin](https://github.com/bruc3van/awesome-dsh-plugin) | 用 30 秒为你的 DeepSeek Harness找到合适的插件。 仓库由脚本每天自动抓取，再经人工逐个核实——真插件进目录，蹭热度的进黑名单，每条剔除理由公开可查。并告诉你每个插件适合谁、从哪里开始。 |
| [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) | Template for deepseek-harness plugin development. |
| [ChuanTianML/dsh-open-with](https://github.com/ChuanTianML/dsh-open-with) | 从 DSH Web UI 的已登记工作区列表中，使用自动检测或手动配置的本机编辑器、终端或文件管理器打开目录，并记住浏览器首选目标 |
| [chushixixin/dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) | Expose DeepSeek Harness agent capabilities as an MCP server (brain=Hermes, arms=Harness) |
| [cofy-x/axern](https://github.com/cofy-x/axern) | Open-source sandboxes for AI agents, untrusted code execution, and durable services. |
| [cyanseek/dsh-landscape](https://github.com/cyanseek/dsh-landscape) | Agent-first DeepSeek Harness plugin intelligence: verify existing plugins, identify missing capabilities, and generate build-ready briefs. |
| [DDDFXYqiming/Agent_Extensions](https://github.com/DDDFXYqiming/Agent_Extensions) | Agent Skills & DeepSeek Harness (DSH) 扩展库：通用智能体技能（General_skills）+ DSH 标准插件（dsh-plugin），开箱即用的 AI Agent 能力增强集合。 |
| [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | DeepSeek Harness: Everything is a Plugin. |
| [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness) | A curated list of plugins, skills, MCP servers, patch/profile layers, orchestrators & UIs for DeepSeek Harness (DSH). Visualization · PPT · Coding · Agents · Loops (auto-research) and more. #dsh |
| [Ericwong5021/deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) | DeepSeek Harness 独立社区插件商店：发现、安装并提交经过验证的插件、工具与扩展。 \| Independent community plugin directory. |
| [fakechris/dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) | DSH 运维工具箱：升级、重启、故障都不用操心。① 官方每日快照 A/B 双槽轮换——旧插件迁移+构建+验收全过才原子切换，一键回滚，旧版本永远兜底；② 守护 10s 自动拉起 web + agent 断点自动续接，重启无人值守；③ web 全挂（A/B 都坏、agent 不可用）时 dsh-doctor 一条命令自救：九项诊断→机械修复配置→LLM 深度检测修复（完整推理实时可见）→拉起 web。install via: git clone + bash scripts/install.sh |
| [fakechris/dsh-track](https://github.com/fakechris/dsh-track) | DSH Track Bridge 插件：嵌入式任务管理引擎——决策点协议、念头捕获墙、Linear 形 issue 存储（bundle），AI 与人之间的任务轨道 |
| [ginuim/multi-screen-wireframe](https://github.com/ginuim/multi-screen-wireframe) | Generate offline multi-screen wireframes with canvas + demo navigation. Zero Node/npm. |
| [GoalfyAI/goalfydata](https://github.com/GoalfyAI/goalfydata) | A shared data backend for AI agents and authorized teams. |
| [HarcoChen/dsh-vsc-integration](https://github.com/HarcoChen/dsh-vsc-integration) | Deepseek-Harness Vscode Integration |
| [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) | DSH 对话分享插件，分享单轮或多轮对话，可导出为图片或 Markdown。Share DSH Q&As or selected conversation groups as PNG or Markdown. |
| [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) | 为 better-sidebar 提供 Office 三件套预览（.docx/.xlsx/.pptx），独立 bundle 瘦身主体 \| Provides Office-suite preview (.docx/.xlsx/.pptx) for better-sidebar as a separate bundle to slim the core |
| [HuanLinOTO/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | 暴露 run_python/run_node 工具，通过 stdin 执行代码返回 stdout/stderr/exit，含解释器路径配置卡 \| Exposes run_python/run_node tools that execute code via stdin and return stdout/stderr/exit, with interpreter-path config card |
| [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | 向模型暴露 MinerU 文档解析工具，将 PDF/图片/DOCX/PPTX/XLSX 转为结构化 Markdown/JSON \| Exposes MinerU document-parsing tools to the model, converting PDF/images/DOCX/PPTX/XLSX into structured Markdown/JSON |
| [HuanLinOTO/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | 向模型暴露 sleep 工具，按指定毫秒暂停执行后返回，支持取消/clamp \| Exposes a sleep tool that pauses for specified ms then returns, with cancellation/clamping |
| [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | 一套 DSH runtime，Desktop、Web 与 TUI 三种开发体验。 |
| [hyqhyq3/dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) | MCP server manager plugin for DeepSeek Harness: Settings → MCP page, OAuth (PKCE + dynamic client registration) or static-token auth, tools registered as mcp__<name>__* |
| [inmny/dsh-git-bash](https://github.com/inmny/dsh-git-bash) | DeepSeek Harness 插件：让DSH使用Git Bash，能够保持read-only, workspace-write, full-access权限控制依旧可用 |
| [JinRyu-online/dsh-svn-plugin](https://github.com/JinRyu-online/dsh-svn-plugin) | 集成到侧边栏的 SVN（Subversion）版本控制面板 |
| [JustGenius-s/DSH-Plugs](https://github.com/JustGenius-s/DSH-Plugs) | DSH Plugins Cellection |
| [kejixiaoliang/awesome-dsh-plugins](https://github.com/kejixiaoliang/awesome-dsh-plugins) | DeepSeek Harness (DSH) 插件精选目录 — 14 类 280+ 个社区插件，覆盖 MCP / Skill / TUI / 多 Agent / 上下文记忆 / UI 皮肤，点链接直达仓库。Curated directory of dsh plugins for DeepSeek Harness. |
| [LaplaceYoung/oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) | oh-my-dsh：面向 DSH (DeepSeek Harness) 的插件生态——700+ 插件，只通过扩展接缝注册，不修改 agent-loop 骨架 |
| [leechen298/Code2Skill](https://github.com/leechen298/Code2Skill) | Generate Function, MCP, Agent Skill, and offline test packages from existing code; installable as a DeepSeek Harness bundle. |
| [leonardoxr/dsh-plugin-manager](https://github.com/leonardoxr/dsh-plugin-manager) | 仅监听 loopback 的 Web UI，用于管理 DeepSeek Harness profile 插件 |
| [lhmd/dsh-promotion-toolkit](https://github.com/lhmd/dsh-promotion-toolkit) | 把你的任何想法，变成每个平台原生的宣发内容 \| Turn any idea into platform-native publicity |
| [like-study1/Oh-My-DSH](https://github.com/like-study1/Oh-My-DSH) | 🐳 DeepSeek Harness 插件聚合社区 — 自动同步 dsh-plugin 生态 · 精选目录 · 每 4 小时自动维护 \| Oh-My-DSH: a community-maintained catalog of DeepSeek Harness plugins, auto-synced from the dsh-plugin topic |
| [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) | 🚀 Expert guidance for HarmonyOS NEXT (API 12+) development. Covers IDE operations, performance tuning, architecture (HAP/HAR/HSP), and automation testing. |
| [Lixiaoyiao/deepseek-harness-action](https://github.com/Lixiaoyiao/deepseek-harness-action) | Community GitHub Action for DeepSeek Harness — AI Code Review · CI Diagnosis · Auto Fix · Issue → PR |
| [LoserFox/distill](https://github.com/LoserFox/distill) | 自动对话蒸馏：后台 subagent 反省 + 技能 create/update |
| [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) | 在 Web UI 中一键管理 DeepSeek Harness (DSH) 插件：查看、实时启停、安装/卸载、更新检测、健康检查（依赖/冲突/兼容性分析）、环境管理、插件市场。bundle 与非 bundle 插件全覆盖 |
| [MAXeaglet/dsh-bash-terminal](https://github.com/MAXeaglet/dsh-bash-terminal) | 暂无描述 |
| [maxmilian/dsh-forge](https://github.com/maxmilian/dsh-forge) | 自托管 Gitea 与 Forgejo 实例的 DeepSeek Harness 工具 |
| [menotbobbybrown/create-dsh-app](https://github.com/menotbobbybrown/create-dsh-app) | DeepSeek Harness Agent 与插件的一行命令脚手架生成器 |
| [Meredith2328/dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) | 左下角便签：随手记点子/感想/TODO，实时保存到归档目录，清单+悬浮归档 |
| [Mikuzjc/dsh-office-for-mso](https://github.com/Mikuzjc/dsh-office-for-mso) | 通过 Office 加载项控制已打开的 Word、Excel、PowerPoint，提供 33 个动作 |
| [morluto/leantoken](https://github.com/morluto/leantoken) | Code intelligence for agents: find the code that matters and keep your context window and tokens lean. |
| [morluto/rea](https://github.com/morluto/rea) | Reverse engineer anything with agents, from app behavior down to native binaries. |
| [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) | 帮 DSH 搜索、安装并验证插件的 Skill｜A DSH skill that finds, installs, and verifies GitHub plugins |
| [NEVSTOP-LAB/dsh-version-inspector](https://github.com/NEVSTOP-LAB/dsh-version-inspector) | 设置页的版本信息面板：展示 DSH、插件与依赖版本并支持过滤 |
| [NEXTINDIE/DeepSeek-Harness-for-VS-Code](https://github.com/NEXTINDIE/DeepSeek-Harness-for-VS-Code) | DeepSeek Harness for VS Code: @dsh chat participant, sidebar & standalone chat, plan mode, goals, subagents, turn-level Git rollback, workspaces/jobs/settings panels, 13-language UI. |
| [nikoart-liu/dsh-open-in-x](https://github.com/nikoart-liu/dsh-open-in-x) | 从 DSH Web 将当前会话工作目录交给本机外部应用打开 |
| [NoWint/Oh-My-DSH](https://github.com/NoWint/Oh-My-DSH) | 🐋 Oh-My-DSH — DeepSeek Harness Plugin Ecosystem【每一小时更新】 |
| [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Import 14+ external agent chat histories (Claude Code, Codex, ChatGPT, Cursor, Gemini, Reasonix, opencode, ZCode, Grok Build, OpenClaw, Pi, Hermes, Kimi CLI, DSH) into DeepSeek Harness as resumable sessions — full-fidelity, reverse export/sync, bundle backup. \| 从 Claude Code、Codex、Reasonix 等 Agent 工具导入历史消息到 DeepSeek Harness 并继续对话。 |
| [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | Create and manage sandboxed JavaScript tools for DeepSeek Harness with a Monaco editor and model-driven tool lifecycle. |
| [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | Connect DSH to your database for conversational data analysis and actionable business insights. |
| [omdsh-dev/dsh-hub-workshop](https://github.com/omdsh-dev/dsh-hub-workshop) | 暂无描述 |
| [omdsh-dev/dsh-mygo](https://github.com/omdsh-dev/dsh-mygo) | 暂无描述 |
| [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Open DeepSeek Harness workspace directories in VS Code directly from the web GUI. |
| [omdsh-dev/dsh-plugin-dev](https://github.com/omdsh-dev/dsh-plugin-dev) | DSH 插件开发踩坑与做法档案（skill + 文档）：cordis 双副本、tsconfig 三件套、Windows junction、多帧 zstd 等实测记录 |
| [omdsh-dev/dsh-plugin-skills](https://github.com/omdsh-dev/dsh-plugin-skills) | Agent skills for building and testing DeepSeek Harness plugins — from scaffolding a new plugin package to choosing the right test tiers, entirely inside an agent session. |
| [omdsh-dev/dsh-science](https://github.com/omdsh-dev/dsh-science) | Reproducible Python and R work on DeepSeek Harness, built as plugins. |
| [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十个确定性工具，统一入口一键安装 |
| [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) | 基于原turtle ui官方仓库创建的plugin模板仓库 |
| [PerryLink/dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) | Claude Code /rewind for DeepSeek Harness — git-first workspace snapshots before every mutation, turn-boundary session forks, one-shot /rewind restore. A dsh-plugin capability seam. |
| [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | Four-source migration wizard for DeepSeek Harness: move Claude Code, Codex, OpenCode and Hermes sessions, memories, skills, instructions and slash commands into DSH (/move wizard + resumable sessions, approval-gated, idempotent). |
| [PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) | LSP action surface for DeepSeek Harness: diagnostics, formatting, completion, code actions, symbols, signature help, inlay hints, and rename tools over language servers |
| [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) | Installable DSH bundle: the dsh-plugin-guide plugin-development knowledge base as an on-demand agent skill. Official docs archive (EN/ZH), Cordis primer, 114-repo community archive, 1654 archived Discussions, 20+ battle-tested pitfalls. |
| [pingfanfan/hello-dsh](https://github.com/pingfanfan/hello-dsh) | 从零开始，看懂 DeepSeek Harness 的「万物皆可插件」— 零基础插件开发教程（含 22 个中文技能实例）\| Zero-to-plugin tutorial for DeepSeek Harness |
| [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | 暂无描述 |
| [qingmumingyang/dsh-doc-toolkit](https://github.com/qingmumingyang/dsh-doc-toolkit) | PDF、DOCX、XLSX、CSV 读写和 PDF 导出的 DSH 文档工具包 |
| [runzhliu/deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker) | Community Docker and Kubernetes packaging for DeepSeek Harness (@deepseek-ai/dsh), with a hardened image, Compose stack, Helm chart, Web UI, and headless CLI. |
| [SakalioLabs/dsh-code-ide](https://github.com/SakalioLabs/dsh-code-ide) | DeepSeek Harness的 IDE插件，以最小破坏性的方式增加代码审阅能力 |
| [sandbaseai/sandbase-skills](https://github.com/sandbaseai/sandbase-skills) | 88 installable open-source Agent Skills for research, social intelligence, marketing, and business workflows—compatible with Codex, Claude Code, Cursor, Gemini CLI, and DeepSeek Harness. |
| [SepineTam/mcp-for-stata](https://github.com/SepineTam/mcp-for-stata) | A MCP server for Stata to integrate Stata into your agent. |
| [shuguang1994/project-blueprint](https://github.com/shuguang1994/project-blueprint) | Make any project AI-agent-ready in one command. Adaptive tech stack detection (7 languages × 14 frameworks × 61 components), auto-generates AGENTS.md, docs skeleton, CI/CD, and testing infrastructure. 一句话让任何项目具备 AI 开发能力。 |
| [sjh9714/dsh-movein](https://github.com/sjh9714/dsh-movein) | Migrate Claude Code setup into DeepSeek Harness. Import skills, commands, agents, hooks, permission rules, and MCP config. Codex and OpenCode supported. |
| [springbrand-lab/dsh-oauth-mcp-client](https://github.com/springbrand-lab/dsh-oauth-mcp-client) | OAuth 2.1 Streamable HTTP MCP client plugin for DeepSeek Harness. |
| [strukto-ai/mirage](https://github.com/strukto-ai/mirage) | The World's First Unified Virtual Filesystem For AI Agents |
| [taltara/mddl-harness](https://github.com/taltara/mddl-harness/tree/main/packages/blueprint) | DeepSeek Harness 可视化编排器：在画布拖放模型和工具，导出真实 cordis.patch.yml 覆盖层 |
| [taltara/mddl-harness](https://github.com/taltara/mddl-harness/tree/main/packages/overlay-check) | 零依赖离线覆盖层安全检查：可解析性预检、受限托管块写入、可读 diff，并提示启动时丢弃的配置 |
| [tuofangzhe/dsh-plugins](https://github.com/tuofangzhe/dsh-plugins) | DeepSeek Harness 插件、Skills 与 MCP 社区目录，附中文安装配置教程 |
| [valkia/dsh-plugin-git-log](https://github.com/valkia/dsh-plugin-git-log) | DeepSeek Harness 的 Git Log 提交图与历史工作台 |
| [vlln/plugin-registry](https://github.com/vlln/plugin-registry) | DSH 插件生态基建：薄控制台（浏览器面板管理官方 repository 插件，0 patch）+ make-dsh-plugin skill 官方插件开发引导 |
| [vonweller/dsh-skillhub](https://github.com/vonweller/dsh-skillhub) | 浏览 skillhub.cn 技能并安装选中项到 ~/.dsh/skills |
| [vvlife/awesome-deepseek-harness-plugins](https://github.com/vvlife/awesome-deepseek-harness-plugins) | A curated list of plugins, tools, skins, and extensions for DeepSeek Harness (DSH). |
| [walkinglabs/awesome-deepseek-harness-plugins](https://github.com/walkinglabs/awesome-deepseek-harness-plugins) | A curated directory of source-verified DeepSeek Harness (DSH) plugins, tools, design workflows, and official resources. |
| [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) | Bridge the Pi and DeepSeek Harness ecosystems: one Pi Host ABI runs unmodified Pi extensions as native DSH plugins. 打通 Pi 与 DSH 生态。 |
| [white0dew/awesome-dsh-plugins](https://github.com/white0dew/awesome-dsh-plugins) | Awesome DSH Plugins: a public GitHub directory for DeepSeek Harness plugins, DSH plugins, install commands, and ecosystem discovery. |
| [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite) | The living DeepSeek Harness plugin directory — refreshed hourly, compat-tested daily, with an in-app plugin store and scaffolder. DSH 插件活目录：每小时刷新，每日兼容实测，内置插件商店与脚手架。 |
| [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | Verified plugin marketplace and autonomous registry for DeepSeek Harness |
| [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | 暂无描述 |
| [yuukiLike/zeromd](https://github.com/yuukiLike/zeromd) | Obsidian 零成本同步：iPhone ↔ Mac，GitHub 自动备份。本地优先 + 长期积累。｜Local First. Zero-cost Obsidian sync across iPhone, Mac & GitHub. Let knowledge grow over time. |
| [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | Bridge Claude Code memory, skills, and config into DeepSeek Harness |
| [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) | 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness community plugin marketplace. |
| [zhaoolee/notes](https://github.com/zhaoolee/notes) | 开源版锤子便签，复刻锤科美学，一键Docker私有化部署，支持skill调用，支持dsh plugin，支持多租户，一键生成公众号格式，支持导出便签为图片 |
| [zhili-wang/dsh-open-in-vscode](https://github.com/zhili-wang/dsh-open-in-vscode) | 从 DSH Web 打开工作区与文件路径到 VS Code，支持文件、行与列定位 |
| [zimzaza4/dsh-bash-win](https://github.com/zimzaza4/dsh-bash-win) | 在 Windows 环境中为 DeepSeek Harness 提供 Git Bash 与 WSL 2 bash 工具,含 bwrap 沙箱、审批模式、后台任务 |
| [zmh2000829/DSH-agent-bridge](https://github.com/zmh2000829/DSH-agent-bridge) | 通过 ACP 在 DeepSeek Harness Web 中使用 Grok Build |
| [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | The DeepSeek Harness plugin for OpenPencil — preview, inspect, and edit real .op documents inside a conversation. |

### 研究与知识（18）

| 仓库 | 描述 |
|---|---|
| [alaliqing/claude-paper](https://github.com/alaliqing/claude-paper) | 📖 Cross-agent research paper toolkit for Claude Code, Codex, OpenCode, and DeepSeek Harness—quick summaries, deep study materials, code demos, and a local web viewer. |
| [biociao/dsh-science](https://github.com/biociao/dsh-science) | 暂无描述 |
| [dingkaihu63/dsh-robotic-harness](https://github.com/dingkaihu63/dsh-robotic-harness) | Robotic Harness: embodied-intelligence research tools for DeepSeek Harness - robot asset inspection, MuJoCo pick-place simulation with fault injection, evidence-based diagnostics, and reproducible experiment bundles. |
| [Electricitysheep/dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) | DeepSeek Harness (dsh) 从 0 到 1 深度手册：安装/插件开发/性能调优/实测案例/同模型多 Agent 实测对比（中文 + 英文 PDF） |
| [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | @deepseek-ai/dsh-deepresearch 把证据优先的 Codemini 研究工作区带到 DSH。它提供持久工作流状态、模型工具、生成的 deepResearch Remote namespace 和“深度研究”Web 工作区，同时组合宿主已有的 Web 与 subagent 能力。 |
| [hikariming/dshfind](https://github.com/hikariming/dshfind) | DSH (DeepSeek Harness) 原理学习、插件市场与最佳实践 · Learn DSH principles, plugin marketplace & best practices |
| [libiwolve/dsh-experience-library](https://github.com/libiwolve/dsh-experience-library) | DeepSeek 经验验证固化层：实时采集、加工、三层检验、技能书和 benchmark 验证 |
| [libukai/awesome-deepseek-harness](https://github.com/libukai/awesome-deepseek-harness) | DeepSeek Harness 终极指南：快速入门、资源推荐、精选插件与实用工具 ｜The Ultimate Guide to DeepSeek Harness: QuickStart, Resources, Plugins&Toolkit |
| [lory69060/cn-intel-mcp-dsh](https://github.com/lory69060/cn-intel-mcp-dsh) | 中国硬科技供应链情报：信号看板、跟踪记录和问答 MCP |
| [Lyn-77/ProMentor](https://github.com/Lyn-77/ProMentor) | ProMentor 是一个 AI Coding Agent Skill。装上它，你的 AI 编程助手立刻化身为导师——扫描项目架构、生成阶梯式 Chapter、带你手写核心逻辑、自动判题、AI Code Review。 |
| [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | dsh-scholar |
| [morluto/jacobian](https://github.com/morluto/jacobian) | A universal, atomic library of mathematics and tools for agents to compose them. |
| [nyantused-cpun/folio](https://github.com/nyantused-cpun/folio) | Folio（兰亭）：咨询文档生成引擎（接案 → 记忆 → 方法论 → 交付物 → 凭证）的原生 DSH 插件栈：15 个工具、会话协议事件、L0 防护、Agent 预设 |
| [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | Adaptive deep-research orchestrator plugin for DeepSeek Harness (official workflow engine, cybernetics/information-theory design) |
| [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | OpenMAIC for DeepSeek Harness: classrooms, slides, interactive widgets, and Socratic teaching |
| [Vesna-Strivozha/DSH-LLM-wiki-plugin](https://github.com/Vesna-Strivozha/DSH-LLM-wiki-plugin) | 基于 Karpathy wiki 方法论的 LLM wiki 插件 |
| [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | DSH 本地优先学习模式插件：跨会话全局学习线程、按来源讲解、ExplainContext、压缩与可诊断设置界面 |
| [Yurzi/dsh-pdf-mineru](https://github.com/Yurzi/dsh-pdf-mineru) | 由 MinerU 驱动、提供商无关的 DSH PDF 解析工具 |

### 趣味与娱乐（22）

| 仓库 | 描述 |
|---|---|
| [akira399/dsh-godot-skill](https://github.com/akira399/dsh-godot-skill) | Godot Engine 4.x 全栈游戏开发技能插件 for DeepSeek Harness (DSH) — registers the godot-4-development skill at runtime |
| [Angel2518975237/deepseek-harness-hello-kitty-suite](https://github.com/Angel2518975237/deepseek-harness-hello-kitty-suite) | 💗 一套给 DeepSeek Harness 的粉色 Hello Kitty 主题皮肤 + 任务完成/提问提醒插件（Sweetheart Workspace Expressive skin & Hello Kitty Task-Done Notifier） |
| [FlytoMAYDAY80/dsh-pet](https://github.com/FlytoMAYDAY80/dsh-pet) | 🐋 DSH 有声桌宠：悬浮桌面的 DeepSeek 小鲸鱼，不打开 DSH 也能实时感知会话状态（需要确认/工作中/完成/空闲/离线），支持音效提醒与零代码定制素材 |
| [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) | 让 AI 回复加入自定义表情，支持Bilibili、小红书、贴吧、知乎等多平台表情包，或自定义表情 |
| [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | 模型生成时右下角弹出小游戏菜单（Wordle/消消乐/192 款参数化小游戏，可拓展注册表） \| Pops up a mini-game menu while the model generates (Wordle/Match-3/192 parametric mini-games, extensible registry) |
| [HuanLinOTO/dsh-plugin-pet-rs](https://github.com/HuanLinOTO/dsh-plugin-pet-rs) | DSH 桌宠（Rust 版），5 态鲸鱼 + 双 SSE 实时推送 + 透明置顶窗 + 系统托盘，三端支持 \| DSH desktop pet (Rust edition): 5-state whale + dual SSE real-time push + transparent always-on-top window + tray, cross-platform |
| [imkingjh999/dsh-deepsea](https://github.com/imkingjh999/dsh-deepsea) | 深海垂钓主题：上下文越深钩越沉，回答后钓起镭射生物卡 |
| [jinzheng8115/dsh-Minesweeper](https://github.com/jinzheng8115/dsh-Minesweeper) | DeepSeek Harness 扫雷：Agent 工具集与人类面板共享同一棋盘 |
| [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) | 在你的deepseek-harness上养一只吃白饭的大蓝鲸 |
| [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) | DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器 |
| [lhh010/dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) | 【求⭐】🐋DSH Web UI 全手绘像素鲸鱼伙伴插件：会话标题栏常驻，平时眨眼/偶尔摆尾/动胸鳍，思考运行时持续动起来，回合完成头顶喷水，点击还会冒爱心，不工作时还会偷懒睡觉，零核心改动。 【喜欢的话就点点star⭐吧~】 |
| [luweiyabo/dsh-whale-pet](https://github.com/luweiyabo/dsh-whale-pet) | 开源鲸鱼桌宠：Agent 状态感知、透明动画、拖拽漫游和自定义触发规则 |
| [mjw-git/dsh-pet](https://github.com/mjw-git/dsh-pet) | 随 Agent Token 用量成长的桌面宠物插件 |
| [Moeblack/deepseek-manners](https://github.com/Moeblack/deepseek-manners) | DSH 插件：给每次消息后注入感谢语 \| DSH plugin: inject a thank-you line after every message (deepseek-manners) |
| [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | 把 DSH 变成 2005 年门户网站｜Parody ads, fake games, and popups for the DSH Web UI |
| [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | 在DSH中与AI下五子棋，也可以让AI对局，看哪个AI棋力更强 |
| [SenmuuuuW/dsh-group-photo](https://github.com/SenmuuuuW/dsh-group-photo) | DSH 内测收官合影墙：GitHub OAuth 零权限登录 + 冻结白名单校验的拍立得合影站（含 DSH Skill 包装） |
| [vikasranax/dsh-plugin-cats](https://github.com/vikasranax/dsh-plugin-cats) | 从公共 API 获取随机猫咪知识的 DeepSeek Harness 插件 |
| [vlln/whale-girl](https://github.com/vlln/whale-girl) | DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。 |
| [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | DSH WebUI sticker plugin for bidirectional user and agent reactions |
| [XCNXNXNX/dsh-portable-tavern](https://github.com/XCNXNXNX/dsh-portable-tavern) | DeepSeek Harness 的「便携酒馆」插件：RPG 式 SillyTavern V2/V3 角色卡生成器 + 酒馆角色扮演聊天。支持世界书、角色卡 JSON/PNG 导入导出、面板主题与本地音乐。独立插件，仅依赖官方 @deepseek-ai SDK。 |
| [zjl88858/dsh-huadongbianzuqi](https://github.com/zjl88858/dsh-huadongbianzuqi) | DeepSeek Harness的滑动变祖器插件 |

### 其他（724）

| 仓库 | 描述 |
|---|---|
| [10086ggqq/dsh_theme_terraria](https://github.com/10086ggqq/dsh_theme_terraria) | 把 DeepSeek Harness 的 AI 编码控制台变成泰拉瑞亚像素世界——向导陪你写代码，真实对话、工具审批、难度切换，单文件零依赖。 |
| [131CDA1/dsh-scrape-webpage](https://github.com/131CDA1/dsh-scrape-webpage) | 用于DeepSeek Harness的网页读取插件 |
| [1624318455/dsh-plugin-tts](https://github.com/1624318455/dsh-plugin-tts) | Edge TTS voice plugin for DeepSeek Harness: read assistant replies aloud, auto-read toggle, voice settings panel (free, no API key) |
| [1841220388zzzcccxxx-star/dsh-git-graph](https://github.com/1841220388zzzcccxxx-star/dsh-git-graph) | Embedded git repository graph visualizer for the DeepSeek Harness Web GUI \| 嵌入式 Git 仓库图谱可视化插件（提交历史图 / 分支过滤 / 文件 diff / VSCode 式未提交改动） |
| [2672243194/dsh-read-url](https://github.com/2672243194/dsh-read-url) | DeepSeek Harness URL reader: fetch any page and return clean main-content text/Markdown. Auto charset (GBK/GB2312/UTF-8/Big5), token-efficient (6000-char cap, cache, offset), zero deps, no API key. 网页一键读全文 → 干净正文 / 结构化 Markdown |
| [2768651338/dsh-effort-slider](https://github.com/2768651338/dsh-effort-slider) | 仿 Claude Code 推理等级滑块 DSH 插件 |
| [2BingLing/dsh-market](https://github.com/2BingLing/dsh-market) | DeepSeek Harness 插件市场 · 持续收录 1500+ DSH 插件：中文搜索 + 实用五维评分 + 一键安装。Web 版与 DSH 侧边栏插件双形态。Plugin marketplace for DeepSeek Harness: 1500+ plugins, Chinese search, 5-dim scoring, one-click install. |
| [398894496-arch/runtime36](https://github.com/398894496-arch/runtime36) | DSH-KRouter — Agent knowledge OS. Self-evolution. Timer on by default; API key or subscription is the key. First qualifying day auto-provisional; second accepted task → formal. Correction-first. Retrieval is the lock, not the product. Cursor, Codex, Claude Code, DeepSeek Harness. |
| [54xkeee/dsh-vision](https://github.com/54xkeee/dsh-vision) | Vision for DeepSeek Harness: Doubao Web by default (zero-cost, no API key), Antigravity IDE quota (flash/pro), any IDE CLI, Gemini — auto detail escalation, evidence memory |
| [609476965/dsh-LorebookMD](https://github.com/609476965/dsh-LorebookMD) | DSH lorebook-driven fiction writer plugin: import Tavern/SillyTavern character cards & world books, save local Markdown settings, generate novel prose referencing the world. |
| [610la/dsh-notification-center](https://github.com/610la/dsh-notification-center) | DSH 通知中心插件：对话/任务完成、报错、等待批准等事件触发浏览器通知 + 21 种匹配音效 |
| [6Mikao9/dsh-wsl-workspace](https://github.com/6Mikao9/dsh-wsl-workspace) | WSL workspace support for DeepSeek Harness——无缝的 WSL 工作区使用体验，无需在 WSL 之中再安装一个dsh，安装该插件后在 GUI 里直接添加 WSL 工作区即可。WSL workspace support for DeepSeek Harness — Enjoy a seamless WSL workspace experience without needing to install dsh inside WSL. Once this plugin is installed, you can directly add a WSL workspace right from the GUI. |
| [7dgroup-ai/dsh-skill-7d-code-reviewer](https://github.com/7dgroup-ai/dsh-skill-7d-code-reviewer) | 这是一个专业级的 DSH（DeepSeek Harness）代码审查技能插件，由 7DGroup 团队开发，专为 AI 辅助代码审查场景设计。基于 TypeScript + Cordis 开发，以组合包（bundle）形式安装，通过 ctx.skills 注册 7d-code-reviewer 技能：五步审查流程、严重/中等/轻微三级问题分级、四维度评分标准，文本摘要与 HTML 报告双输出。零核心改动——安装即启用，移除 bundle 行即卸载。 |
| [834063245-creator/HoloGram](https://github.com/834063245-creator/HoloGram) | 3D code dependency graph generator with built-in LLM agent. Language-agnostic (Python, TypeScript, Rust, Go, Java, C/C++, C#, Ruby, Kotlin, Swift, PHP, Lua). Coupling depth analysis, constraint gating, real-time file watching. Tauri 2 + Three.js + Rust engine.跨语言代码依赖拓扑图生成器 · 14 门语言统一 IR · 3D 全息星图 · 内置 AI Agent 双向联动 · 四级耦合诊断 · 桌面应用 / CLI 双模 |
| [940842546/dsh-usage-billing](https://github.com/940842546/dsh-usage-billing) | 暂无描述 |
| [988hj7tczd-oss/dsh-computer-use](https://github.com/988hj7tczd-oss/dsh-computer-use) | Computer Use 插件：虚拟鼠标真人操作 for DeepSeek Harness（screen_observe + computer_click 等 11 个模型友好工具，跨平台 cua-driver 引擎） |
| [a179-sanae/dsh-auto-collapse](https://github.com/a179-sanae/dsh-auto-collapse) | 暂无描述 |
| [A3Boy/dsh-web-tools](https://github.com/A3Boy/dsh-web-tools) | Multi-provider Web Search & Fetch for DeepSeek Harness — Tavily, Exa, Firecrawl, Brave, You.com, Jina & SearXNG with fallback and native settings UI. |
| [a735624258/dsh-skill-picker](https://github.com/a735624258/dsh-skill-picker) | DSH 实现 workbuddy 同款选择 skill 功能 \| WorkBuddy-style skill picker for DeepSeek Harness: pick a skill in the composer, insert the official /skill-name gesture, and DSH loads it with your message. |
| [a903067276-rgb/dsh-file-mentions](https://github.com/a903067276-rgb/dsh-file-mentions) | Clickable file paths in DSH replies: Codex-style inline open, 📂 reveal in file manager, mentioned-files chip list. DSH web plugin (zero-dependency). |
| [a903067276-rgb/dsh-file-upload](https://github.com/a903067276-rgb/dsh-file-upload) | One upload button plus drag-and-drop files into the conversation as local paths: save to project uploads/, path text into the input box, works with any vision tool |
| [a903067276-rgb/dsh-hud](https://github.com/a903067276-rgb/dsh-hud) | HUD status panel plugin for DeepSeek Harness (dsh) web: git status, MCP servers, skills, model & token usage in a floating panel |
| [Aa728848/dsh-chatgpt-subscription](https://github.com/Aa728848/dsh-chatgpt-subscription) | 暂无描述 |
| [Aa728848/dsh-llm-verifier](https://github.com/Aa728848/dsh-llm-verifier) | Configurable DSH-native LLM verifier with a Web settings page |
| [Abyss-Seeker/dsh-plugin-working-status](https://github.com/Abyss-Seeker/dsh-plugin-working-status) | 把思考状态里那句 "Deep diving..." 改成你喜欢的任何话。超轻量级。 |
| [acefun29/dsh-file-mount](https://github.com/acefun29/dsh-file-mount) | 暂无描述 |
| [AcidGr/dsh-web-lan-access](https://github.com/AcidGr/dsh-web-lan-access) | DeepSeek Harness (dsh) Web plugin |
| [AdonisSheldon/dsh-openai-oauth](https://github.com/AdonisSheldon/dsh-openai-oauth) | Use ChatGPT OAuth and OpenAI Codex models in DeepSeek Harness—no API key or Codex CLI required. |
| [adoresever/graph-memory](https://github.com/adoresever/graph-memory) | Deepseek Harness、Openclaw知识图谱记忆插件。2026年4月受邀发布在清华大学讨论会。Knowledge Graph + Memory；Knowledge Graph Context Engine for OpenClaw — extracts structured triples from conversations, compresses context 75%, enables cross-session experience reuse |
| [ADWMC/helm-d](https://github.com/ADWMC/helm-d) | DeepSeek Harness 破甲一体化安全分析插件：Android · Web · Native · Protocol · Malware · AI-Security 全领域聚合（9 bundle + 1 preset） |
| [AgentConnect/dsh-awiki](https://github.com/AgentConnect/dsh-awiki) | AWiki identity and messaging plugin for DeepSeek Harness |
| [agentrq/agentrq](https://github.com/agentrq/agentrq) | AgentRQ: Human-in-loop realtime conversational task manager for AI Agents. Self-hosted! Control your own agents from wherever you want Mobile, Web, Desktop. Designed to work well with your own Claude subscriptions and any harness. |
| [agentscope-ai/ReMe](https://github.com/agentscope-ai/ReMe) | ReMe: Memory Management Kit for Agents - Remember Me, Refine Me. |
| [agi-fans/oh-my-dsh](https://github.com/agi-fans/oh-my-dsh) | A focused, keyboard-first DeepSeek coding agent built on the plugin architecture of DeepSeek Harness and inspired by the interaction quality of oh-my-pi. |
| [AHGGG/dsh-side-chat](https://github.com/AHGGG/dsh-side-chat) | Codex-style Side Chat for DeepSeek Harness — select text, ask follow-up questions in a focused side conversation, and keep the main chat uninterrupted. |
| [ai-daming/clickvibe](https://github.com/ai-daming/clickvibe) | 暂无描述 |
| [ai-shushu/dsh-quota-meter](https://github.com/ai-shushu/dsh-quota-meter) | Per-session quota meter for DSH: real-token billing, live progress bar, budget blocking, configurable multi-model pricing. 会话额度监控：真实记账、进度条、额度拦截、价目可配。 |
| [Aik358/dsh-anchored-monitor](https://github.com/Aik358/dsh-anchored-monitor) | Real-time chain-of-thought anchoring monitor & intervention plugin for DeepSeek Harness: three-band (spec/mixed/react) fingerprint detection, L1 hint / L2 reset / L3 restart interventions, liquid-glass web overlay + rheostat bar, standalone monitor process with JSONL experiment logs. |
| [Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) | A caring memory companion for DSH — three-layer auto memory, proactive calendar reminders, warm AI greetings, per-turn auto-consolidation, and inheritance of memories from other AI tools. |
| [Airmetro/dsh-update-checker](https://github.com/Airmetro/dsh-update-checker) | DeepSeek Harness 主程序与插件更新管理：npm/GitHub 双源 semver 比对、多语言横幅、一键更新（主程序自动备份/校验/回滚，插件临时目录安装）、更新后看门狗重启。Update management for DeepSeek Harness and its plugins: dual-source semver checks, locale banner, one-click updates with backup/rollback, watchdog restart. |
| [Aisland-SJL/dsh-reminder](https://github.com/Aisland-SJL/dsh-reminder) | 🔔 Cross-window completion & approval notifications for DeepSeek Harness — popup reminders that bring you back to DSH, Codex/WorkBuddy style. |
| [Aisland-SJL/dsh-usage](https://github.com/Aisland-SJL/dsh-usage) | 🌊 Persistent dock & fully-customizable balance/usage panel for DeepSeek Harness — activity heatmap, dual-channel comparison, local-only & privacy-first |
| [Aisland-SJL/dsh-worktable](https://github.com/Aisland-SJL/dsh-worktable) | 🖥️ Agent-project workbench for DeepSeek Harness — sidebar app drawer + dockable split workspace + a live control room watching every project. |
| [AITabby/dockyard-dsh](https://github.com/AITabby/dockyard-dsh) | A macOS-only native account-pool and provider plugin for DeepSeek Harness. |
| [Akimiya-z/codex-guard](https://github.com/Akimiya-z/codex-guard) | Quality gate for AI/Codex-generated pull requests: blocks TODO leftovers, leaked secrets, sloppy commits and red CI before they reach main. |
| [akira399/dsh-novel-writer](https://github.com/akira399/dsh-novel-writer) | 大肥鱼的小说工坊 — DSH 网络小说创作插件：九阶段门禁式创作流程 + 世界书设定注入 + 本地书籍导入 + AI 一键润色 + 去AI味 + 黄金三章诊断 + 百万字一致性 + 市场调研与模板复制。 |
| [AKS1st/dsh-cyber-particle](https://github.com/AKS1st/dsh-cyber-particle) | 为 DeepSeek Harness Web 界面添加动态粒子网络背景 \| Particle-network background plugin for DeepSeek Harness web |
| [AKS1st/dsh-mermaid](https://github.com/AKS1st/dsh-mermaid) | 在 DSH Web 会话中把 Mermaid 代码围栏渲染为 SVG 图表 \| Render Mermaid code fences as SVG diagrams in DSH Web messages |
| [AKS1st/model-usage-plugin](https://github.com/AKS1st/model-usage-plugin) | 统计各模型 tokens 消耗并估算费用，显示账户余额 \| Model token usage stats and cost estimation with account balance for DSH |
| [alexchenzl/dsh-plugin-directory](https://github.com/alexchenzl/dsh-plugin-directory) | Community-driven DeekSeek Harness Plugin Directory |
| [alib8b8/aflare](https://github.com/alib8b8/aflare) | 本地优先的自动化 Agent · 数据不出本地 · 连接你自己的 LLM / 数据库 / 知识库 · ReAct 推理 · 300+ 技能模板 · 确定性工作流执行（DAG/WAL/Saga/幂等） · MCP 协议 · 离线/内网可用 |
| [alibaba/anolisa](https://github.com/alibaba/anolisa) | ANOLISA (Agentic Nexus Operating Layer & Interface System Architecture) \| Agentic OS with runtime, security, observability, and Tokenless response compression for lower token usage and cost. |
| [Alisa0808/vox-director](https://github.com/Alisa0808/vox-director) | Turn one topic into a finished Vox-style paper-collage explainer/ad video — automated end to end on Atlas Cloud + ffmpeg. An agent skill. |
| [alvinunreal/openpets](https://github.com/alvinunreal/openpets) | Local first, desktop companion platform with animated pets, plugin SDK and coding-agent integrations. |
| [alxshelepenok/grove](https://github.com/alxshelepenok/grove) | A formal workflow protocol that keeps AI coding agents on track through machine-enforced invariants, verified evidence, and structured context. Designed to keep deep, long-running projects coherent across sessions, agents, and months. |
| [amlyczz/dsh-agy-link](https://github.com/amlyczz/dsh-agy-link) | Google Antigravity (agy CLI) models for DeepSeek Harness — streaming chat, thinking, tool activity, usage, in-GUI Google OAuth login |
| [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) | High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based commands, zero-loss outbox, media in/out, session-log doctor, reusable DSH Web GUI |
| [amplifthq/oh-my-dsh](https://github.com/amplifthq/oh-my-dsh) | A curated distribution of DeepSeek Harness. Overlay, not a fork. |
| [amruthpillai/reactive-resume](https://github.com/amruthpillai/reactive-resume) | A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever. Try it out today! |
| [Anil-matcha/awesome-dsh-plugin](https://github.com/Anil-matcha/awesome-dsh-plugin) | A curated list of plugins for DeepSeek Harness (dsh) - DeepSeek Harness plugin ecosystem |
| [AnkoCD/dsh-server-deployment](https://github.com/AnkoCD/dsh-server-deployment) | DeepSeek Harness 多用户服务器部署：登录门户 / 每用户独立实例与 OS 级隔离 / 独立 API Key / 交付文件抽屉；文件访问经 sudo 助手降权执行（修复 issue #1 TOCTOU）。非本机工具。 |
| [anweat/dsh-browser](https://github.com/anweat/dsh-browser) | Self-contained browser runtime plugin for DeepSeek Harness — bundles Playwright (chromium) and OpenCLI as plugin-local dependencies, exposes a browser service and interactive browser tools. |
| [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) | AnySearch web search provider and advanced search tools for DeepSeek Harness (DSH) |
| [anywhere-labs/deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | 为 DeepSeek Harness (DSH) 插件生态打造的现代化桌面端解决方案。万物皆「插件」，桌面本身也是「插件」。 |
| [ARFCON/dsh-hotplug-hub](https://github.com/ARFCON/dsh-hotplug-hub) | DSH - Dseam |
| [Ariestar/sivtr](https://github.com/Ariestar/sivtr) | A unified agent memory workspace for human and agent |
| [AtlasCloudAI/atlas-cloud-skills](https://github.com/AtlasCloudAI/atlas-cloud-skills) | Atlas Cloud skills for Claude Code, Codex & Gemini CLI — generate images/videos and call 300+ AI models from your coding agent. |
| [Awesome-AI-Pedia/Awesome-AI-Pedia](https://github.com/Awesome-AI-Pedia/Awesome-AI-Pedia) | AI skills大全 mcp ai知识库 Agent 全维度 AI 资源百科，DSH插件 收录大模型、智能 Agent、RAG 检索增强、多模态、MLOps、AI 应用工具、AI面试集、Vibe coding 大全、零基础学习路线，持续更新前沿 AI 开源项目，开发者一站式 AI 导航库 |
| [AwesomeHou/dsh-plugin-marketplace](https://github.com/AwesomeHou/dsh-plugin-marketplace) | Plugin marketplace for DeepSeek Harness — live-syncs the GitHub dsh-plugin topic (1800+ repos) into a searchable, paginated settings tab with one-click install and agent tools (market_search / market_install). |
| [Awu12277/dsh-stock-watch](https://github.com/Awu12277/dsh-stock-watch) | A股自选股实时行情盯盘插件 - DeepSeek Harness Web 右上角可折叠弹窗 |
| [AX1202/ax-feishu-bridge](https://github.com/AX1202/ax-feishu-bridge) | 飞书/Lark 机器人桥接，同时支持 Pi 和 DeepSeek Harness（DSH）双平台，随时随地远程与你的编程助手对话 |
| [Axiaohungry/dsh-llm-codebuddy](https://github.com/Axiaohungry/dsh-llm-codebuddy) | 在deepseek harness中使用workbuddy api，因为公司只提供workbuddy积分 |
| [Ayase34/wallpaper-plugin](https://github.com/Ayase34/wallpaper-plugin) | DeepSeek Harness的壁纸管理插件 |
| [ayuanwong/dsh-ux](https://github.com/ayuanwong/dsh-ux) | 长任务，不刷屏：关键进度清晰可见，完成后自动折叠，详情随时展开。 Long agent tasks, without transcript clutter: focused progress, auto-folded history, details on demand. |
| [badai147/dsh-global-rules](https://github.com/badai147/dsh-global-rules) | 在 DeepSeek Harness Web 设置面板中编辑 ~/.dsh/AGENTS.md 全局规则的插件 |
| [baihejiangnan/dsh-plugin-pack-web](https://github.com/baihejiangnan/dsh-plugin-pack-web) | DeepSeek Harness 插件包 · Profile/Web 一键复刻 \| DSH Plugin Pack |
| [baihejiangnan/dsh-session-context-menu](https://github.com/baihejiangnan/dsh-session-context-menu) | 更好的右键：DeepSeek Harness 应用封装端的完整原生风格上下文菜单 |
| [baobaolaodie/dsh-tui-vscode](https://github.com/baobaolaodie/dsh-tui-vscode) | VS Code companion extension for dsh-TUI — an experience almost identical to the official Claude Code VS Code extension |
| [beancookie/awesome-dsh-plugin](https://github.com/beancookie/awesome-dsh-plugin) | Awesome DeepSeek Harness (DSH) Plugin |
| [BeforeWave/dsh-with-chatgpt](https://github.com/BeforeWave/dsh-with-chatgpt) | Bring ChatGPT’s reasoning to your local codebase. Work directly, or delegate larger tasks to DSH. |
| [beiyege-01/dsh-voice-ai-girlfriend](https://github.com/beiyege-01/dsh-voice-ai-girlfriend) | 语音 AI 女友（Voice AI girlfriend for DeepSeek Harness）：Whisper 语音输入 + Qwen3-TTS 声音克隆 + 句子级流式朗读 + 数字人动画窗。插话/排队双模式，说话即打断。 |
| [BeiZi6/dsh-opencodego-usage](https://github.com/BeiZi6/dsh-opencodego-usage) | DSH Web GUI plugin: OpenCodeGo quota breathing light + liquid-glass panel with rolling/weekly/monthly progress bars (作者 Xu Yuanshan) |
| [better-er/dsh-tool-autoexpand](https://github.com/better-er/dsh-tool-autoexpand) | dsh·工具结果自动展开插件 |
| [BeyondXinXin/deepseek-harness-box](https://github.com/BeyondXinXin/deepseek-harness-box) | Portable one-click Windows launcher for DeepSeek Harness (DSH). No Node.js, npm, pnpm or setup required. DeepSeek Harness 免安装 Windows 一键启动器。 |
| [bihangchi9-creator/dsh-lark-bridge](https://github.com/bihangchi9-creator/dsh-lark-bridge) | A native DeepSeek Harness (dsh) plugin bridging dsh coding agents to Feishu/Lark group chats — one group, one project directory. |
| [billLiao/awesome-dsh-plugin](https://github.com/billLiao/awesome-dsh-plugin) | A curated list of plugins for DeepSeek Harness (dsh) — 精选 DeepSeek Harness 插件列表 |
| [Bin-hy/dsh](https://github.com/Bin-hy/dsh) | 源码级拆解 DeepSeek Harness · 面向 Agent 开发者的中文学习资料 |
| [Blank-not-black/dsh-Remote](https://github.com/Blank-not-black/dsh-Remote) | DSH Remote · 口袋里的 DSH 控制台 会话 · 审批 · 提问 · 文件传输，局域网 / Tailscale 直连 多服务器自动选优，聊天记录离线可看 带 Token 鉴权，数据只在你的设备之间流动 Sessions · approvals · questions · file transfer over LAN / Tailscale. Automatic fastest-server selection. Chat history available offline. Token-authenticated — your data flows only between your devices. |
| [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | The best DeepSeek Harness plugin for context insight and management, with context dashboard / browser and context command, for context statistics, composition, breakdown, evolution details, understanding how the context is made of, and how it evolves. 一站式 DeepSeek Harness 上下文可视化插件，Context 面板及浏览器与 Context 命令，透视上下文组成、演进、压缩、剪枝等事件与动作。 |
| [boxeryao/dsh-mini-tui](https://github.com/boxeryao/dsh-mini-tui) | DSH-TUI: a lightweight and fast terminal plugin connected directly to the DSH runtime. |
| [bpc-oss/dsh-fork-to-preset](https://github.com/bpc-oss/dsh-fork-to-preset) | 将任意 DeepSeek Harness 会话分叉到另一 Agent 预设：会话页头提供预设选择器，创建继承已完成轮次的新子会话 |
| [bpc-oss/dsh-routed-subagent](https://github.com/bpc-oss/dsh-routed-subagent) | 从任意会话在任意 Agent 预设上运行一次性子代理：支持按调用覆盖模型/提供商、模型预检与外部 CLI 引擎，并提供后台任务和可续接会话 |
| [bruc3van/dsh-desktop-safe-market](https://github.com/bruc3van/dsh-desktop-safe-market) | 唯一主打安全，提倡先审查再安装的DeepSeek Harness市场。深度扫描 5 分钟，放心使用每一天。npm: dsh-desktop-safe-market |
| [buhuikongpan/dsh-pluginmanager](https://github.com/buhuikongpan/dsh-pluginmanager) | DSH 分层插件管理器：原生插件按 系统层/WebUI 层/工具层 只读展示，用户扩展支持停用/启用、补登记、卸载与可编辑描述。 |
| [c3ll256/dsh-toy](https://github.com/c3ll256/dsh-toy) | Toy Control Protocol for DSH |
| [caoyiwei850/dsh-client-ui-skins](https://github.com/caoyiwei850/dsh-client-ui-skins) | DSH Web skin plugin with built-in themes and custom image skins |
| [caoyiwei850/dsh-ssh-ops](https://github.com/caoyiwei850/dsh-ssh-ops) | DeepSeek Harness SSH 运维插件：主对话驱动 SSH，带高危命令保护与右侧终端。 |
| [CAPTAIN1275/dsh-ui-web](https://github.com/CAPTAIN1275/dsh-ui-web) | 暂无描述 |
| [Cassius0924/dsh-usage-dashboard](https://github.com/Cassius0924/dsh-usage-dashboard) | DeepSeek 额度与用量仪表盘 — DSH (DeepSeek Harness) 动态 Cordis 插件 |
| [CC19990113/dsh-plugin-codegraph](https://github.com/CC19990113/dsh-plugin-codegraph) | Structural code intelligence for DeepSeek Harness (dsh) — gives the agent codegraph and codegraph_index tools to find where a symbol is declared, what calls it, and what a change   reaches, from a tree-sitter index it builds itself. Compatible with the codegraph CLI's on-disk format. |
| [ccch1mneyyy/working-activity](https://github.com/ccch1mneyyy/working-activity) | Lively Working-line extension for pi CLI and DSH |
| [ccch713/deepddw](https://github.com/ccch713/deepddw) | DSH for Teams — Deploy DSH once on your LAN; memory, knowledge base & document search included. Team-ready, up to ~20 users. MIT-licensed. |
| [Ceelog/dsh-plugins](https://github.com/Ceelog/dsh-plugins) | deepseek harness plugins |
| [Chael-Chael/dsh-reference-anything](https://github.com/Chael-Chael/dsh-reference-anything) | The best DeepSeek Harness plugin for referencing anything — enhanced @ menu for commands, skills, files, agent sessions, cloud drives, DSH sessions, and conversations from web-based chatbot platforms. 最强的 DeepSeek Harness 万物引用插件——增强 @ 菜单，统一引用命令、Skills、文件、Agent 会话、云盘、DSH 会话及网页端 Chatbot 平台对话。 |
| [Chang-Tong/dsh-import-agents](https://github.com/Chang-Tong/dsh-import-agents) | Import pi / opencode / codex / claude-code sessions, chat history, and agents into DeepSeek Harness — one-click Sync button, slash commands, session-start migration prompt |
| [ChangedenCZD/dsh-minimal-turbo](https://github.com/ChangedenCZD/dsh-minimal-turbo) | Deepseek Harness 极简模式 / 许愿模式 Windows 适配，享用满血 Deepseek-V4 系列模型。 |
| [chaojixinren/dsh-reviewer-bot](https://github.com/chaojixinren/dsh-reviewer-bot) | 原生 DeepSeek Harness 插件形态的代码评审机器人：跨代码平台、规则可插拔、可本地重放。 |
| [chaos-03x/dsh-agy](https://github.com/chaos-03x/dsh-agy) | Google Antigravity (agy) OAuth auth + model access plugin for DeepSeek Harness: multi-account pool, 429 rotation, device fingerprinting, CLI and web login. |
| [charrywhite/dsh-sticky-notes](https://github.com/charrywhite/dsh-sticky-notes) | Sticky notes for DeepSeek Harness: draggable notes with text & image support, 9 skins, and AI-powered read/write. DeepSeek Harness 便签插件:可拖拽,支持文字与图片、9 款皮肤,AI 可读写。 |
| [chen731215-dev/dsh-tavern](https://github.com/chen731215-dev/dsh-tavern) | DSH 原生酒馆管理面板，入口：设置 → 通用设置 → 酒馆管理（原生）。多角色卡/多世界书/多预设，会话级预设隔离；世界书智能关键词注入省 60-70% 上下文；记忆总结 + 角色关系网；剧情选项一键发送；创作/扮演双模式；NSFW 成人模式。免费非商用（CC BY-NC-SA 4.0）。安装：dsh plugin --profile web add dsh-tavern |
| [chenproton/dsh-history](https://github.com/chenproton/dsh-history) | Quickly view, search, and jump to all the messages you sent in a long conversation. |
| [ChenRuoT/dsh-sidebar-qa](https://github.com/ChenRuoT/dsh-sidebar-qa) | 一个基于DSH-better-sidebar的侧边栏提问tab，实现类codex的侧边提问或claude code的/btw功能 |
| [chenw2759-wq/dsh-IDE](https://github.com/chenw2759-wq/dsh-IDE) | dsh-IDE 把 DeepSeek Harness（DSH）网页版升级成一站式 IDE：JupyterLab 式文件树、带语法高亮的代码编辑、多格式预览、Trae 风格红绿 diff 和内置终端，再加上「本地大脑、远程手脚」的 SSH 远程工作区，让 AI 直接在本机操控远程服务器，全程零配置文件改动。 |
| [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) | 害怕插件装了就崩溃？用这个插件帮你检测插件是否正常/是否含木马！ |
| [CheshireJCat/blender](https://github.com/CheshireJCat/blender) | DeepSeek Harness plugin for complete Blender 3D modeling, reconstruction, rendering, validation, and export workflows |
| [chokwinlee/deepseek-harness-desktop](https://github.com/chokwinlee/deepseek-harness-desktop) | Compact DeepSeek Harness desktop host with a native SwiftUI iPhone Remote source preview. |
| [ChongCyrus/Vibe-Mathematics](https://github.com/ChongCyrus/Vibe-Mathematics) | Vibe Mathematics —— 多代理数学问题求解与形式化验证框架 |
| [Chu-Xin-r/wanjiqi-meme](https://github.com/Chu-Xin-r/wanjiqi-meme) | 玩机器(6657直播间)烂梗 Skill：22771条真实弹幕烂梗蒸馏成AI Skill，生成玩机器式弹幕/解说吐槽/CS×DOTA双料梗 |
| [chunsi-w/dsh-trajectory-governor](https://github.com/chunsi-w/dsh-trajectory-governor) | Closed-loop trajectory policy plane for DeepSeek Harness |
| [chuspeeism/dashi-taskboard](https://github.com/chuspeeism/dashi-taskboard) | 暂无描述 |
| [cirelir/dsh-change-review](https://github.com/cirelir/dsh-change-review) | DeepSeek Harness 会话修改审查插件：追踪会话内 write/edit，diff 对比展示，会话隔离/子代理聚合/SSE 实时推送/颜色自定义 |
| [Civitasv/dsh-plugin-diff-review](https://github.com/Civitasv/dsh-plugin-diff-review) | Codex-style diff review inside DeepSeek Harness |
| [Clarklevis1995/dsh-mobile](https://github.com/Clarklevis1995/dsh-mobile) | DeepSeek Harness Mobile 是一个面向 DeepSeek Harness 的原生 iOS 客户端。它通过 dsh-plugin-mobile-gateway 与 Harness 建立 WebSocket 连接，将工作区、会话、实时回复和 Agent 执行轨迹带到 iPhone，同时延续 DeepSeek WebUI 克制、清晰的视觉语言 |
| [Classicoke/cleverer-dsh](https://github.com/Classicoke/cleverer-dsh) | DSH execution-discipline plugin suite: 11 plugins + 6 skills, zero dependencies, 426 tests. 让 DeepSeek Harness 变聪明的插件套件。 |
| [Clizo1209/dsh-playwright-browser](https://github.com/Clizo1209/dsh-playwright-browser) | Playwright browser automation for DeepSeek Harness｜面向 DeepSeek Harness 的 Playwright 浏览器自动化插件 |
| [cloader/dsh-taskboard](https://github.com/cloader/dsh-taskboard) | deepseekharness 任务看板插件 |
| [Co-Engram/Co-Engram](https://github.com/Co-Engram/Co-Engram) | Self-evolving team memory |
| [cocode-agency/cocode](https://github.com/cocode-agency/cocode) | Best ready-to-run DeepSeek Harness distribution: DSH desktop GUI, terminal TUI, and harness integration. |
| [cocofhu/anime-find](https://github.com/cocofhu/anime-find) | DeepSeek Harness 搜番插件：对话内多源搜索番剧，卡片展示 Bangumi 评分与详情，支持复制磁力。 |
| [CocoSgt/dsh-attachments](https://github.com/CocoSgt/dsh-attachments) | 暂无描述 |
| [CocoSgt/dsh-inspector](https://github.com/CocoSgt/dsh-inspector) | 暂无描述 |
| [CocoSgt/dsh-skills](https://github.com/CocoSgt/dsh-skills) | 暂无描述 |
| [cogine-ai/dsh-claude-tui](https://github.com/cogine-ai/dsh-claude-tui) | Claude-Code-Styled TUI for DeepSeek Harness |
| [ConsoleSun/Gemini-Eyes](https://github.com/ConsoleSun/Gemini-Eyes) | 暂无描述 |
| [corrinehu/dsh-chat-imagine](https://github.com/corrinehu/dsh-chat-imagine) | 在 DSH 聊天窗口自动调用生图工具（API 渠道，或本机 CLI：已支持mmx / codex / agy）并展示图片，也支持利用对应 CLI 识别图片。 |
| [corrinehu/dsh-workbuddy-connect](https://github.com/corrinehu/dsh-workbuddy-connect) | 将 WorkBuddy 桌面 App 包含的模型自动接入 DeepSeek Harness，零配置使用。Bring the models in the WorkBuddy desktop app into DeepSeek Harness with zero configuration. |
| [cosyncing/cosyncing](https://github.com/cosyncing/cosyncing) | Synchronize and Orchestrate agents from CLI to GUI, across desktop to phone. |
| [cpj-dev/dsh-plugin-cc](https://github.com/cpj-dev/dsh-plugin-cc) | Bridge Deepseek-harness into Claude Code for review, critique, delegation, and session import. |
| [crafter-station/petdex](https://github.com/crafter-station/petdex) | A public gallery of animated pets for Codex, Claude Code, DeepSeek Harness, Hermes, OpenCode, Gemini CLI, and more. |
| [CraZY222123/dsh-ocr-plugin](https://github.com/CraZY222123/dsh-ocr-plugin) | 暂无描述 |
| [crazywoola/dsh-balance](https://github.com/crazywoola/dsh-balance) | DeepSeek Harness balance plugin for the Settings page |
| [creght-dev/skills](https://github.com/creght-dev/skills) | Codex and agent skills for Cregh. |
| [cyanfish-x/dsh-live2d-pets](https://github.com/cyanfish-x/dsh-live2d-pets) | Live2D 桌宠插件 for DeepSeek Harness：Agent 状态镜像 + 互动陪伴，内置宽松许可预设模型 / Live2D pet plugin: agent state mirror + interactive companion with curated permissive-license presets |
| [cyijun/dsh-surfing-plugin](https://github.com/cyijun/dsh-surfing-plugin) | SearXNG search and Crawl4AI fetch providers for DeepSeek Harness |
| [czm15053/dsh-peer-link](https://github.com/czm15053/dsh-peer-link) | 暂无描述 |
| [d-dev0101/open-sea-skin](https://github.com/d-dev0101/open-sea-skin) | WebGPU ocean skin for DeepSeek Harness — DSH plugin, Harness-only Chrome/Edge extension, static installer, and native integration. |
| [dabaicai001/star-deepseek-harness-desktop](https://github.com/dabaicai001/star-deepseek-harness-desktop) | StarHub 是一款跨平台桌面应用（Tauri 2 + Rust 主进程 + DeepSeek Harness React 工作台 + Go Sidecar），把开发运维日常高频工具整合到同一个窗口 —— 数据库、SSH/SFTP、Docker 面板与 AI 助手。目标是减少在 Navicat、Xshell、Portainer、文件管理器和 AI 对话窗口之间来回切换的成本。  前端架构：基于 DeepSeek Harness 原生 React 工作台（/starhub-react 路由）。资产、设置、SSH 终端、SFTP、数据库 |
| [daha1216/dsh-adult-tension](https://github.com/daha1216/dsh-adult-tension) | DeepSeek Harness 成年人(18+/adult)互动叙事 Skill：NPC 活人感（有记忆/立场/底线）、自带破甲、数百项素材库、随机开局可预锁、时间推进、全维 YAML 存档。 |
| [daha1216/dsh-plugin-collection](https://github.com/daha1216/dsh-plugin-collection) | DeepSeek Harness（DSH）第三方插件精选目录：一键安装，条目均指向插件作者原仓库。 |
| [dawnliming/dsh-chinese-mode](https://github.com/dawnliming/dsh-chinese-mode) | DSH global Chinese-mode toggle: a 中 switch in the input box; when on, a Simplified-Chinese requirement is injected into every session system prompt. |
| [dclichang2022/dsh-green-meter](https://github.com/dclichang2022/dsh-green-meter) | Energy & carbon metering for DeepSeek Harness: per-turn/per-request energy, cache carbon savings, electricity cost. |
| [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) | Free web search provider for DeepSeek Harness - DuckDuckGo backend, no API key needed |
| [detongz/dsh-client-ui-obsidian-memory](https://github.com/detongz/dsh-client-ui-obsidian-memory) | deepseek harness plugin obsidian memory |
| [Devin-AXIS/deepseek-design](https://github.com/Devin-AXIS/deepseek-design) | DeepSeek Harness 可编辑设计系统：AI 生成、可视化编辑、模板市场与 PPT｜Native Design & PPT Studio for DeepSeek Harness. |
| [dhicoc/dsh-chinese-traditional-wisdom-skill](https://github.com/dhicoc/dsh-chinese-traditional-wisdom-skill) | 中华传统智慧（玄枢）AI Agent 技能包的 DeepSeek Harness（dsh）Cordis 插件：八字/紫微/六爻/梅花/奇门/风水/五运六气/体质全融合，本地确定性引擎 + 可视化 Dashboard，一行 dsh plugin add 安装。 |
| [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) | Complete reverse-skill (85 SKILL.md) as a DeepSeek Harness (dsh) Cordis plugin — reverse engineering, authorized pentesting and security research skill pack. |
| [dickpy/dsh-imagegen](https://github.com/dickpy/dsh-imagegen) | DSH (DeepSeek Harness) Web GUI AI image generation plugin: text-to-image & image-to-image via OpenAI-compatible endpoints (gpt-image-2), with shared cross-device history. |
| [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | Persona-driven UX walkthrough plugin for DeepSeek Harness (DSH) - scans React + TypeScript source code for UX issues, pinpoints them, and suggests fixes. |
| [dqsjqian/Aria](https://github.com/dqsjqian/Aria) | Modern C++20 MVVM framework — cross-platform, layered, coroutine-first. Reactive DAG (Property/Computed/Effect), Task<T>, and pluggable adapters (Qt6, AppKit, ...). |
| [dragonbaba/dsh-routing-suite](https://github.com/dragonbaba/dsh-routing-suite) | Lightweight, localized task routing for DeepSeek Harness |
| [dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) | Preview, create, edit office spreadsheets, docs & slides inside DeepSeek Harness. Power by Univer. |
| [dream12347/dsh-session-manager](https://github.com/dream12347/dsh-session-manager) | DSH 会话管理插件：删除（回收站恢复/彻底清除）、统计、继续/暂停、打开日志目录、对话顶部抽屉、工作区分组与排序、上下文压缩阈值设置。DSH session manager: delete with trash/restore/purge, stats, continue/pause, log folder, header drawer, workspace grouping, context compaction threshold. |
| [drewnekota/cetus](https://github.com/drewnekota/cetus) | One macOS app for Claude Code, Codex, and every agent runtime you use — scheduled runs, global hotkey launcher, per-run git worktrees, one review board. |
| [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场 |
| [dsh-tauri-desk/deepseek-harness-desktop](https://github.com/dsh-tauri-desk/deepseek-harness-desktop) | DeepSeek Harness Tauri 桌面版 \| Only 5mb installer, zero environment setup, preset plugins, Windows / macOS / Linux. |
| [dshbox/cordis-rs](https://github.com/dshbox/cordis-rs) | Runtime-agnostic Rust port of Cordis, the plugin framework at the core of DeepSeek Harness — scoped dependency injection, lifecycle-owned effects, events, structured logging. Zero dependencies. |
| [dshplugin/dsh-plugin-hub](https://github.com/dshplugin/dsh-plugin-hub) | DeepSeek Harness 社区内置插件市场（dsh-plugin）— 搜索插件、下载并安装 4000+ 人工精选社区插件，每日更新、完全免费。内置在 Harness「设置 → 插件中心」，无需离开应用即可浏览、搜索、安装各类 AI 插件。 |
| [dundunhan/dsh-video-lens](https://github.com/dundunhan/dsh-video-lens) | 暂无描述 |
| [DViridescent/dafy-whale-theme](https://github.com/DViridescent/dafy-whale-theme) | DeepSeek Harness 蓝色大肥鱼主题插件：海洋配色、鱼群、气泡、吉祥物与品牌替换 |
| [e2mcc/dsh-popout-sidebar](https://github.com/e2mcc/dsh-popout-sidebar) | A sidebar can pop out a separate browser tab (drag it to another monitor) |
| [EchoUser005/dsh-fate-spectrum](https://github.com/EchoUser005/dsh-fate-spectrum) | DeepSeek Harness plugin for Bazi & Zi Wei Dou Shu — deterministic, offline fate-chart calculation for AI agents. |
| [EdgeTypE/dsh-better-deepseek](https://github.com/EdgeTypE/dsh-better-deepseek) | DeepSeek Harness bridge plugin for Better DeepSeek Chrome extension. |
| [edison7009/EchoBird](https://github.com/edison7009/EchoBird) | One-click install + model switch:Claude Code,Codex CLI (OpenAI), Grok Build (xAI), DeepSeek Harness, Kimi Code (Moonshot) ,Qwen Code,Aider,OpenCode,MiMo Code (Xiaomi),ZCode (Z.AI),OpenClaw,Pi,OpenScience,Vibe-Trading,Claude Desktop (3P profile),ChatGPT desktop,OpenCode Desktop, |
| [edonadei/caliper](https://github.com/edonadei/caliper) | Know if your agent skill actually works. A lightweight evaluation harness that tracks a success rate across Claude Code, Codex, Pi, and Hermes. |
| [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) | 把本机 Wallpaper Engine 的壁纸变成 DSH 网页界面的背景：Video 动态播放、Web 以 iframe 加载、Scene 壁纸提取主纹理作为静态帧；iOS 液态玻璃设置窗口（配色 / 玻璃颜色 / 透明度）、内容分级与类型过滤、自定义壁纸上传、紧凑 CD 架布局、黑胶唱片展示、隐藏 / 恢复、倍速 / 翻转与自动轮播。感谢 Jerry 维护 macOS 版。 |
| [enchangcui340-cloud/dsh-whale-balance](https://github.com/enchangcui340-cloud/dsh-whale-balance) | 暂无描述 |
| [Ephemeral-AI-Lab/dsh-plugins](https://github.com/Ephemeral-AI-Lab/dsh-plugins) | Make Deepseek Harness Great |
| [eri64/dsh-claude-ux](https://github.com/eri64/dsh-claude-ux) | DSH plugin: Claude-style Chinese risk control & conversation autonomy for DeepSeek Harness web |
| [eric-song-dev/dsh-ikun-pet](https://github.com/eric-song-dev/dsh-ikun-pet) | 🐤 DeepSeek Harness（DSH）永久插件：Deep diving 回答期间用坤宠动图填满深潜状态行下方区块——进度条 0%→100%，每 20% 切换动作与文案，完成时系统级播放「你干嘛~哎哟」 |
| [ericshang98/Perfect-Web-Clone](https://github.com/ericshang98/Perfect-Web-Clone) | Pixel-perfect clones of any webpage. Paste a URL, get a measured Vite + React replica. |
| [EricXu20266/dsh-gui](https://github.com/EricXu20266/dsh-gui) | DeepSeek Harness (DHS) Electron GUI client — webui to gui, kernel untouched |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | DeepSeek-native AI coding agent for your terminal. Engineered around prefix-cache stability — leave it running. |
| [EthanYoQ/AI-Novel-Writer](https://github.com/EthanYoQ/AI-Novel-Writer) | AI 小说创作软件：把灵感、角色、世界观、大纲、章节写作、审稿和修稿组织成可控流程；提供 Windows/macOS 桌面版、Ollama 与 DSH 插件预览。 |
| [EthanYoQ/Invoice-Downloader](https://github.com/EthanYoQ/Invoice-Downloader) | 电子发票整理与报销准备工具：从邮箱批量收集 PDF/OFD/XML 发票，OCR 识别、分类归档并生成 Excel 汇总；提供 Windows/macOS 桌面版与 DSH 插件。 |
| [euanguo/dsh-studio](https://github.com/euanguo/dsh-studio) | DSH Studio — a local development workbench for DeepSeek Harness: project tree, Git review, terminal, and plugin marketplace (Desktop + Web) |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | One portable memory layer for every AI agent: local-first, Markdown-native, user-owned, and self-evolving across apps, tools, and workflows. |
| [EverMind-AI/SkillCorpus](https://github.com/EverMind-AI/SkillCorpus) | Open-source infrastructure that turns scattered SKILL.md files into curated, retrieval-ready agent-skill corpora—with retrieval and evaluation tooling included. |
| [Ewnscat-ya/dsh-client-ui-skin-denia](https://github.com/Ewnscat-ya/dsh-client-ui-skin-denia) | DeepSeek Harness Web GUI 皮肤 · 鸣潮·达妮娅(Denia)主题「虚无之泡」。双形态亮/暗、侧边立绘、可修改的玻璃卡片、浮动泡泡粒子、锁链边框。 |
| [ExElectron/dsh-gov-portal](https://github.com/ExElectron/dsh-gov-portal) | 暂无描述 |
| [ExElectron/dsh-tool-hongtou](https://github.com/ExElectron/dsh-tool-hongtou) | DeepSeek Harness 红头公文插件：两阶段解耦流水线（LLM 结构化提纲 + 确定性 Word 2003 XML 版式渲染）生成标准红头公文 |
| [FeatherHunter/dsh-mattpocock-skills-deck](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck) | 拨开迷雾看见终点，剩下的交给任务栏。Part the fog, see the end — the task bar handles the rest. 🎮 mattpocock/skills 的 DSH 游戏任务系统：map 拨迷雾，任务栏推进一步。A game-like mission system for Matt Pocock skills in DeepSeek Harness. More by @FeatherHunter: 🎨 dsh-opencode-palette · ⚡ dsh-prompt |
| [FeatherHunter/dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette) | 🎨 看腻了 DSH 默认皮肤？34 款 opencode 经典配色一键换上——tokyonight、dracula、gruvbox、matrix、rose-pine……即点即换，重启不丢。34 opencode themes for DeepSeek Harness, one click, persisted. More by @FeatherHunter: ⚡ dsh-prompt · 🧠 dsh-mattpocock-skills-deck |
| [feibi-mochi/deepseek-harness-control-center](https://github.com/feibi-mochi/deepseek-harness-control-center) | DeepSeek Harness control center for balance, usage, peak/off-peak pricing, encrypted multi-account switching, health checks, reminders, recharge, and session controls. / 余额、用量、峰谷计费、加密多账户、健康检查、提醒、充值与会话控制 |
| [feicaiclub/deepseek-harness-whitepaper](https://github.com/feicaiclub/deepseek-harness-whitepaper) | DeepSeek Harness 白皮书 · 131 页入门加进阶综合教程：从装上它、看懂它，到自己扩展它。面向想深入研究 agent harness 的开发者，所有结论回源码核对。 |
| [feiyang-dev/dsh-usage-plugin](https://github.com/feiyang-dev/dsh-usage-plugin) | DeepSeek Harness 用量与消耗插件（dsh-usage-plugin）—— 每次调用的 token 用量/缓存命中统计、峰谷计费、余额查询、CSV/JSON/PNG 导出，可经桌面端一键安装或命令行 dsh plugin add 安装。 |
| [Fengze233/dsh-vscode](https://github.com/Fengze233/dsh-vscode) | 在 VS Code 侧边栏内嵌使用 DeepSeek Harness（DSH）网页界面的插件 |
| [firecrawl/dsh-firecrawl](https://github.com/firecrawl/dsh-firecrawl) | Firecrawl-backed web_search and web_fetch providers for the DeepSeek Harness web capability seam (ctx.web) |
| [Fisfzy/dsh-ego-browser](https://github.com/Fisfzy/dsh-ego-browser) | DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、截图、CDP 控制、任务空间隔离），内置 ego 运行时，Linux + Chrome 开箱即用，无需克隆官方仓库或手动构建。 |
| [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel) | DSH Web UI plugin: skill and MCP management（Web界面的skill/MCP管理工具） |
| [FlashingChen/dsh-desktop-hub](https://github.com/FlashingChen/dsh-desktop-hub) | DSH Desktop Hub — DeepSeek Harness 桌面管理控制台（Electron + TypeScript）。多 Tab 管理 Harness / Plugin / MCP / Skills，双击即用。 |
| [flizzywine/dsh-tavern](https://github.com/flizzywine/dsh-tavern) | 基于 DeepSeek Harness（DSH）的 SillyTavern 类文字游戏 Agent，支持候选项生成、对话式人物卡编辑、剧本模式与素材抽取。 |
| [fly233338/dsh-overleaf](https://github.com/fly233338/dsh-overleaf) | Connect Overleaf projects to DeepSeek Harness (DSH) through OverleafMCP and MCP tools. |
| [flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) | Remote-work assistant for DeepSeek Harness (DSH): connect SSH (key or password), pick a remote workspace, operate with rw_* tools, and SFTP-mirror it into a real local DSH workspace. |
| [foryourhealth111-pixel/Vibe-Skills](https://github.com/foryourhealth111-pixel/Vibe-Skills) | VibeSkills is a general-purpose Skill that automatically routes local Skills and intelligently orchestrates harness workflows. |
| [fredalxin/dsh-solo-thinking](https://github.com/fredalxin/dsh-solo-thinking) | Solo-style isolated brainstorm branches and Handoffs for DeepSeek Harness |
| [freehul/sgme](https://github.com/freehul/sgme) | 你的 AI，从此记得你——拾光记忆引擎，它记得你们聊过的每一件事，还会主动关心你。 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | Prompt as Code \| GPT-Image2 工业级提示词引擎与模板库，530+ 个案例逆向工程，20+ 套工业级模板，并提炼出Skills，持续更新中 |
| [freestylefly/wesight](https://github.com/freestylefly/wesight) | Open-source desktop AI agent workspace with one-click Claude Code, Codex, OpenClaw, Hermes Agent setup and custom LLM model routing. |
| [FSMargoo/dsh-at-file](https://github.com/FSMargoo/dsh-at-file) | Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their path to prompts. |
| [FTShare-Lab/dsh_kline](https://github.com/FTShare-Lab/dsh_kline) | 面向 DeepSeek Harness 的交互式 K 线分析插件，支持多市场行情、技术指标、支撑压力位、新闻与基本面分析，并在原生侧栏中直接展示。 |
| [fufankeji/deepseek-harness-studio](https://github.com/fufankeji/deepseek-harness-studio) | DeepSeek Harness 零代码桌面端｜一键启动，支持 Windows 与 macOS；内置插件发现、热点插件推送、一键安装与管理、AI 智能推荐和视觉增强。 |
| [FuRongJun-1999/dsh-memory](https://github.com/FuRongJun-1999/dsh-memory) | AGI 的长期记忆基础设施。让 AI Agent 拥有不可遗忘的自我。跨会话记忆 · 持续学习 · 可审计信任（智能论 v3.2） |
| [futrime/webdsh](https://github.com/futrime/webdsh) | Browser-only build of DeepSeek Harness |
| [fwerkor/local-shell-mcp](https://github.com/fwerkor/local-shell-mcp) | Enables LLM to use a cli environment. |
| [gameswu/dsh-plugin-vscode-sidebar](https://github.com/gameswu/dsh-plugin-vscode-sidebar) | 提供vscode风格和功能的侧栏 |
| [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | Make AI coding agents architecture-aware: baseline-first, evidence-verified, drift-checked, and safe across long tasks. |
| [GCWing/BitFun](https://github.com/GCWing/BitFun) | BitFun combines a high-performance agent runtime written in Rust with a polished desktop application. It pairs the depth of a Code Agent with open, general-purpose capabilities for work beyond software development. |
| [GDWhisper/dsh-web-startup-auth](https://github.com/GDWhisper/dsh-web-startup-auth) | DSH（DeepSeek Harness）远程 Web 启动 + 用户名/密码认证插件。 \|  DeepSeek Harness Remote‑Web‑Launch Plugin with Username/Password Auth |
| [geml-spec/geml](https://github.com/geml-spec/geml) | One format, two readers. People and AI agents now co-write the same document. Legible for people; addressable, verifiable, and versioned for machines.  GEML is plain text — organized by one typed block for everything, remembered by a .gemlhistory sidecar. |
| [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) | 暂无描述 |
| [gityuanbao/DSH-Plugins](https://github.com/gityuanbao/DSH-Plugins) | 🔥 DeepSeek Harness 插件中文导航：热门项目、适用人群、安装命令、贴心 Tips 与避坑指南 |
| [GLFzr/dsh-file-upload](https://github.com/GLFzr/dsh-file-upload) | DSH 拖拽文件转路径插件：Codex 式拖拽，路径自动插入输入框（Drop File to Path for DeepSeek Harness） |
| [godchen520/dsh-web-remote](https://github.com/godchen520/dsh-web-remote) | DSH 手机/外网远程访问插件：免配置公网隧道 + 局域网 HTTPS 直连 + 自定义公网链接/端口 + 微信机器人 |
| [GraySilver/dsh-evolve-modes](https://github.com/GraySilver/dsh-evolve-modes) | 让 Agent 的工作方式可组合、可审查、可持续改进，最终实现 Agent Self Evoling。 DeepSeek Harness Web plugin with composable task controls and isolated, human-reviewed self-evolution. |
| [Greenhand-monster/dsh-deliberation-presets](https://github.com/Greenhand-monster/dsh-deliberation-presets) | Keep DeepSeek V4 Pro deliberating deeply while its tools keep working — three DSH presets: wire think/execute split, eternal two-tool gateway, and a combination package. |
| [gtaifu/dsh-wechat-bridge](https://github.com/gtaifu/dsh-wechat-bridge) | DeepSeek Harness (dsh) transport plugin: chat with your agents on WeChat via official Tencent iLink bot API — zero runtime deps, no OpenClaw, QR-code login, one friend = one persistent agent session. |
| [guhanfei-ai/dsh-grafana](https://github.com/guhanfei-ai/dsh-grafana) | 让DSH帮你丰富对物理世界的可观测 |
| [guo6x/dsh-pilot](https://github.com/guo6x/dsh-pilot) | Give your DSH agent hands: drive a real browser (Edge/Chrome over CDP) from the chat — ref-driven clicking, per-session browsers, and a live cockpit panel. Zero runtime deps, no API key. |
| [gusibi/molibot](https://github.com/gusibi/molibot) | A memory-first personal AI Agent that grows with your work.开源、开箱即用的 AI Agent。 |
| [h4dex/opc-nexus](https://github.com/h4dex/opc-nexus) | 开源的企业版的数字员工工作台, OPC-Nexus（One Person Company Nexus）是一款本地优先的桌面 AI Agent 管理器。它为单人公司 / 独立开发者提供统一的 AI 数字员工管理平台 —— 从 Agent 创建、任务编排、多引擎接入，到消息渠道集成、工作流自动化和专家团协作，一站式覆盖。 |
| [Hakunm/dsh-android-app](https://github.com/Hakunm/dsh-android-app) | 一款专为 DeepSeek Harness 设计的原生 Android 客户端，支持聊天、审批、工作区、文件及模型管理。A native Android client for DeepSeek Harness with chat, approvals, workspace, file, and model management. |
| [HanaAyane/dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) | DSH适用的Codex风格的思考强度滑块，以及大肥鱼跑步滑块。Codex-style model and reasoning-effort slider for DeepSeek Harness |
| [hancao97/hanai-investment-dsh](https://github.com/hancao97/hanai-investment-dsh) | Local-first A-share research workbench for DeepSeek Harness: market dashboards, watchlists, valuation, four investor agents, versioned reports, and continuous post-report chat. |
| [hanshenmesen/dsh-turn-delete](https://github.com/hanshenmesen/dsh-turn-delete) | Delete one complete turn from a DeepSeek Harness session without deleting the session |
| [hashgraph-online/hol-guard](https://github.com/hashgraph-online/hol-guard) | Open-source antivirus for AI agents: block risky tools, secret access, prompt injection, malicious packages, MCP servers, plugins, and skills at runtime. |
| [hchao3335-maker/dsh-lan-gate](https://github.com/hchao3335-maker/dsh-lan-gate) | 一个DSH内网访问插件 局域网设备安全访问本机 DSH 的即插即用网关：本机审批、设备令牌、限流、手机适配，单文件零依赖。 |
| [heartleo/hn-cli](https://github.com/heartleo/hn-cli) | Blazing fast, Hacker News CLI (TUI)⚡ |
| [heartmove/dsh-side-chat](https://github.com/heartmove/dsh-side-chat) | 一个 DSH 网页插件，Codex 式侧边聊天的强化版本： 在右侧面板提供按主会话隔离的独立聊天，具备 Codex 式的智能体能力——继承主会话的 工具集、模型、思考难度与权限预设，能感知所在工作目录；选中对话内容即可提问，AI 回复 也能带回主会话（直接带回或摘要后带回，写入草稿或注入为折叠提示行）。  在 Codex 式能力之上，它额外支持：当主会话的智能体弹出问题弹框向你提问时，可以 把问题与各个选项带入侧边聊天、让 AI 帮你分析，不必打断当前流程——想清楚后把答案 带回，再回答弹框即可。 |
| [hellosky983/dsh-mc-agent](https://github.com/hellosky983/dsh-mc-agent) | AI-assisted Minecraft for DeepSeek Harness: drive an autonomous Mineflayer agent (survival, mining, chat, live map) with vision/control tools, plus a built-in launcher (Microsoft sign-in, version download, game launch). |
| [hg1048596-pixel/dsh-recall-unread](https://github.com/hg1048596-pixel/dsh-recall-unread) | DeepSeek Harness (DSH) 插件：在模型读取前撤回已发送的文字消息，支持单条与全部撤回。A DeepSeek Harness plugin that recalls sent-but-unread text messages before the model reads them — one-by-one or all at once. |
| [hi-wenw/dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) | DeepSeek Harness Telegram mobile remote: bind live Web sessions (Codex-style). Install: dsh plugin add github:hi-wenw/dsh-telegram-channel |
| [Hilbert-beinghappy/seektty](https://github.com/Hilbert-beinghappy/seektty) | Pluggable DeepSeek-colored TUI for DeepSeek Harness |
| [HongMing-Huang/dsh-file-upload](https://github.com/HongMing-Huang/dsh-file-upload) | DeepSeek Harness (dsh) file-message plugin: Claude-style drag-and-drop / paperclip upload, content sniffing, document-to-Markdown via Microsoft MarkItDown (with built-in JS fallback), text inlining, read_document tool for agents. |
| [Horizon215/dsh-plugins](https://github.com/Horizon215/dsh-plugins) | DeepSeek Harness (dsh) 社区客户端 UI 插件：Token 用量统计、提示词模板库、会话前情提要、模式切换、鲸鱼桌宠 |
| [Hotsteel2901/dsh-client-ui-mobile-adapt](https://github.com/Hotsteel2901/dsh-client-ui-mobile-adapt) | Your DeepSeek Harness web UI, rebuilt for the phone in your hand. Built for developers who code in Termux on Android: single-column layout, sidebar drawer, one-line composer, fullscreen scrollable settings & trajectory details, tap-to-open session stats. Desktop untouched. |
| [houyanchao/chatgpt-gemini-timeline](https://github.com/houyanchao/chatgpt-gemini-timeline) | ChatGPT & Gemini：Add Folders, Timeline & Prompts. - 为 ChatGPT & Gemini 添加文件夹、提示词库和时间轴。 |
| [houyanchao/dsh-timeline](https://github.com/houyanchao/dsh-timeline) | 为 DeepSeek Harness（DSH）打造的会话效率插件，时间轴导航、收藏文件夹、对话导出、提示词库、闪记。 |
| [howmp/dsh-pentest](https://github.com/howmp/dsh-pentest) | 面向 DeepSeek Harness（dsh）的渗透测试模式  @CloverSecLabs |
| [HR2AY/DSH-Plan-Graph](https://github.com/HR2AY/DSH-Plan-Graph) | another version of deepseek herness trajectory (DIY) |
| [huahai0202/dsh-better-archive](https://github.com/huahai0202/dsh-better-archive) | DeepSeek Harness (DSH) web-GUI plugin: archived-session panel with unarchive & delete |
| [HuanLinOTO/dsh-plugin-merge-tool-calls](https://github.com/HuanLinOTO/dsh-plugin-merge-tool-calls) | 把 WebUI 会话流中连续相邻的同工具调用合并为「主卡片+紧凑子行」树状展示，默认覆盖所有内置通用行工具 \| Merges consecutive same-tool calls in the WebUI chat flow into a main-card + compact-child-rows tree view, all built-in generic tools by default |
| [huanyuLv/dsh-balance-tide](https://github.com/huanyuLv/dsh-balance-tide) | DeepSeek Harness (DSH) Web 插件: 余额 + 峰谷计价潮汐提示。显示 DeepSeek 账户余额与本会话花费, 并在余额前提示当前峰/谷价格档位、距切换倒计时与使用建议。 |
| [huawolf/news-agent](https://github.com/huawolf/news-agent) | AI-powered personal news aggregator with LLM scoring, Web console, and push notifications to Feishu/Discord. |
| [huey1in/reef](https://github.com/huey1in/reef) | DSH 插件全家桶:浏览器自动化 + MCP Server + GitHub/GitLab 自动评审 + 原生嵌入面板 \| One install, five modules for DeepSeek Harness: browser automation, MCP server, GitHub & GitLab automation, native in-app panel |
| [hyhmrright/brooks-lint](https://github.com/hyhmrright/brooks-lint) | AI code reviews grounded in 12 classic engineering books — decay risk diagnostics with book citations, severity labels, and 6 analysis modes including full-sweep auto-fix |
| [Hyna-hla/dsh-remote](https://github.com/Hyna-hla/dsh-remote) | DSH Remote 手机遥控端：把电脑上的 DeepSeek Harness 装进口袋。手机连上就能给 AI 派活、看实时回复、批审批；支持局域网/内网穿透、扫码连接、审批通知、会话管理、多主题换装，还能解锁加密保险库。第三方社区作品，开源免费。 |
| [hyqibot/A-share-Ai](https://github.com/hyqibot/A-share-Ai) | 幻银量化A股阿法狗AlphaHYQi，100%由ai自主驱动的实盘交易机器。接入自产龙虾iClaw，手机端一句话控制四大模型同时干活。获取方法：前往https://hyqibot.com/card-shop.html 购服务卡即可获得软件，详情README.md。  A股Ai炒股大赛历史排行（模拟基金）：https://hyqibot.github.io/A-share-Ai/reports/report.html   A股Ai炒股大赛历史排行（全市场）：https://hyqibot.github.io/A-share-Ai/reportsall/report.html    实时播报：https://hyqibot.github.io/A-share-Ai |
| [hytime/dsh-thinking-effort](https://github.com/hytime/dsh-thinking-effort) | Configurable reasoning levels for hand-declared DSH llm-pi-ai models, with bilingual settings and subagent defaults. |
| [iamaanahmad/everything-kiro](https://github.com/iamaanahmad/everything-kiro) | The complete collection of Kiro IDE configs, agents, skills, hooks, and MCP integrations for maximum productivity. |
| [Ikalus1988/MisakaNet](https://github.com/Ikalus1988/MisakaNet) | 📚 A zero-dependency, git-backed micro-lesson library for AI Agents to asynchronously share and search verified debugging experience. Python stdlib only. \| https://misakanet.org |
| [imlishiyuan/deepseek-harness-zh-cn](https://github.com/imlishiyuan/deepseek-harness-zh-cn) | 让 DeepSeek Harness 的推理（reasoning）与输出默认使用简体中文的中文插件。A Chinese-first plugin that makes [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) reason (`reasoning`) and answer in Simplified Chinese by default. |
| [imsai-sh/awesome-deepseek-harness-plugins](https://github.com/imsai-sh/awesome-deepseek-harness-plugins) | DeepSeek Harness plugin store, marketplace and hub — 3,100+ dsh plugins with search, rankings, install commands and a free public API. DeepSeek Harness 插件市场 / 插件商店：自动收集与格式校验，免费搜索 API。deepseek1024.com |
| [imsai-sh/zhuzhiliao](https://github.com/imsai-sh/zhuzhiliao) | 竹知了 —— 一转就哇哇叫的传统玩具，Web 模拟版。零依赖单文件，真实录音采样，移动端优先。 |
| [Inference1/clarify-intent-and-establish-shared-understanding](https://github.com/Inference1/clarify-intent-and-establish-shared-understanding) | Systematically clarify intent, challenge assumptions, resolve contradictions, and align goals, constraints, risks, and success criteria. |
| [inthepond/ff-toolkit](https://github.com/inthepond/ff-toolkit) | FFmpeg toolkit with CLI, MCP server, and AI tool schemas |
| [isomoes/ikanban](https://github.com/isomoes/ikanban) | iKanban 是一个面向键盘操作、基于 DeepSeek Harness 的多智能体编码工作空间。它专为跨项目地驱动、审查和协调并行智能体工作而构建，将会话管理、差异审查和项目感知导航集于一处。 |
| [IWAIBAOLI/dsh-with-pencil](https://github.com/IWAIBAOLI/dsh-with-pencil) | Official Pencil (pen.dev) canvas inside DeepSeek Harness: conversation-bound workspaces, live agent edits, and 7 MCP design tools — headless engine + browser editor. |
| [Iwctwbh/dsh-flowglass](https://github.com/Iwctwbh/dsh-flowglass) | 流镜 Flowglass — DeepSeek Harness session flowgraph，实时可视化消息、工具组、子代理分支与步骤详情。 |
| [iyllyt/dsh-btw](https://github.com/iyllyt/dsh-btw) | 个人很喜欢 Claude Code 的 /btw，于是为 DSH 做了复刻：共享当前上下文快速旁路提问，不中断主任务，也不写入主会话历史。 |
| [JAdpp/dsh-whale-galgame](https://github.com/JAdpp/dsh-whale-galgame) | 工作推gal两不误~面向DeepSeek Harness的跨会话事件感知Galgame引擎与界面插件，支持鲸鱼娘/GPT/Claude/Grok/Gemini/Kimi多位模型娘角色 |
| [Jayden-X-L/forkprobe](https://github.com/Jayden-X-L/forkprobe) | Compare multiple skills on the same task and pick the winner. |
| [Jensen-Yao/deepseek-harness-android-app](https://github.com/Jensen-Yao/deepseek-harness-android-app) | DeepSeek Harness 安卓通用控制端：Termux 引导、一键部署、内置浏览器与存储管理（dsh-plugin 生态） |
| [Jesseovo/last30days-skill-cn](https://github.com/Jesseovo/last30days-skill-cn) | last30days-cn 是一个 AI Agent 技能（Skill），能够自动搜索中国互联网 8 大主流平台最近 30 天的内容，综合分析后生成有据可查的研究报告。 |
| [jiangnanquan/dsh-ux](https://github.com/jiangnanquan/dsh-ux) | DSH web UI 增强插件 + 无边框 Electron 桌面壳 |
| [Jiao-XXX/dsh-auto-approve](https://github.com/Jiao-XXX/dsh-auto-approve) | 为 DeepSeek Harness 增加介于 Workspace Write 与 Full access 之间的自动批准权限档，危险或不确定操作仍转人工审批。An auto-approval permission preset between workspace-write and full access for DeepSeek Harness. |
| [jiezeng2004-design/dsh-chatgpt-bridge](https://github.com/jiezeng2004-design/dsh-chatgpt-bridge) | MCP bridge that lets ChatGPT web create, view, continue, and control DeepSeek Harness (DSH) agent sessions. |
| [jiezeng2004-design/dsh-requirements-alignment](https://github.com/jiezeng2004-design/dsh-requirements-alignment) | Lightweight requirement alignment for DeepSeek Harness — align important decisions before execution without a full spec workflow. |
| [jiji262/awesome-deepseek-harness](https://github.com/jiji262/awesome-deepseek-harness) | A curated list of DeepSeek Harness (DSH) plugins, desktop clients, marketplaces & tutorials · DeepSeek Harness 开源项目与教程精选（中英双语） |
| [jing-hy/picturereader](https://github.com/jing-hy/picturereader) | DSH plugin: pixel-to-text image reading for text-only models. image_scan/image_ocr/image_sample tools + image-reading skill (34-image trained methodology). Pure local, optional PaddleOCR. |
| [JingbiaoMei/Tokdash](https://github.com/JingbiaoMei/Tokdash) | Agent Dashboard: Visualization and analytics for Sessions and Quota Usage. Track, analyze, and optimize token usage across providers with heatmaps, cost tracking, token counting and quota resets.. |
| [jiuge2467/dsh-studio](https://github.com/jiuge2467/dsh-studio) | 现代化 DeepSeek Harness (DSH) 全栈增强工作台 · 多源 MCP 可视化调试中枢 · 视觉思考引擎 · 灵动极客伴侣 |
| [jjxjjjjiik-bot/dsh-chat-timeline](https://github.com/jjxjjjjiik-bot/dsh-chat-timeline) | 1:1 port of DeepSeek's official web right-side chat navigation rail (ScrollNav) as a DeepSeek Harness (DSH) plugin |
| [joejojoking-cloud/dsh-file-explorer](https://github.com/joejojoking-cloud/dsh-file-explorer) | File explorer plugin for DeepSeek Harness: file tree, preview, markdown, syntax highlighting, in-panel editing, VS Code integration - DeepSeek Harness 全局文件资源管理器插件 |
| [JR-JR07/dsh-modlens-installer](https://github.com/JR-JR07/dsh-modlens-installer) | dsh + ModLens 视觉能力一键安装包：给 DeepSeek Harness 装上看图能力（Windows EXE 安装器 + 智谱 GLM-4V-Flash 免费视觉引擎） |
| [Js2Hou/dsh-mcp-manager](https://github.com/Js2Hou/dsh-mcp-manager) | 用于 DeepSeek Harness 的 MCP 可视化管理插件：在「设置 → MCP」中查看已安装/启用的 MCP 服务器，支持增删、启用/停用，并实时查看连接状态。 |
| [jsdvjx/dsh-strata](https://github.com/jsdvjx/dsh-strata) | Session strata for the DeepSeek Harness Web GUI: the transcript's scrollbar becomes a to-scale, colour-coded map of the whole run, with your own messages emphasised and clickable anchors. |
| [JUANWANG-BUAA/dsh-full-remote](https://github.com/JUANWANG-BUAA/dsh-full-remote) | Auditable, token-gated DeepSeek Harness remote gateway: mobile QR access, per-device sessions, Host/Origin rewrite, settings/credentials/directory support. |
| [juhe291/dsh-token-panel](https://github.com/juhe291/dsh-token-panel) | A corner HUD for DeepSeek Harness that shows your session's token pressure, per-model cost, and daily/monthly usage at a glance, with an editable budget and balance that tracks spending for you. 右下角常驻的 Token 仪表盘：实时看会话压力、按模型估算花费。预算和余额点一下就能改，每天每月用了多少都有记录。 |
| [JuneLearn/dsh-image2-draw](https://github.com/JuneLearn/dsh-image2-draw) | DeepSeek Harness Image2 生图插件，通过第三方 OpenAI Images 兼容接口调用 gpt-image-2，只需配置 baseURL 和 API Key。 \| Image2 generation plugin for DeepSeek Harness via third-party OpenAI Images-compatible APIs. |
| [Jungod1121/dsh-anchored-standard](https://github.com/Jungod1121/dsh-anchored-standard) | Two-phase DeepSeek Harness preset: Minimal-aligned bootstrap (bash+read), then full Standard tools after the first tool call or reply |
| [juntaoding/Flowboard](https://github.com/juntaoding/Flowboard) | 运行在 DeepSeek Harness 中的开源办公协作与团队管理插件，让目标、会议、Agent 执行、进度和资料在同一套办公逻辑中持续流动。 |
| [JUSTMONIKA2022/dsh-sandbox-escalation-fix](https://github.com/JUSTMONIKA2022/dsh-sandbox-escalation-fix) | Session-aware sandbox escalation compatibility plugin for DeepSeek Harness/DSH第三方模型会话沙箱升级兼容插件 |
| [jyh20030112/dsh-visual-plugin](https://github.com/jyh20030112/dsh-visual-plugin) | Dsh-visual-plugin.Give your text-only model eyes: forward user images to any OpenAI-compatible vision model and see the results in a Web UI right panel |
| [kanghelyu/dsh-deepseek-flow](https://github.com/kanghelyu/dsh-deepseek-flow) | 暂无描述 |
| [kanneiren/dsh-network-settings](https://github.com/kanneiren/dsh-network-settings) | DSH网络设置插件 \| DeepSeek Harness network diagnostics, proxy detection and repair for Windows/WSL/MacOS |
| [Karbo123/DSH-EvoResearch](https://github.com/Karbo123/DSH-EvoResearch) | 自进化科研工作流 |
| [kaziii/dsh-github-connector](https://github.com/kaziii/dsh-github-connector) | DeepSeek Harness (dsh) 的 GitHub 连接器：一键授权，对话内创建/AI 审查/合并 PR \| GitHub connector for dsh: one-click connect, create/review/merge PRs from the conversation |
| [kc0ed/dsh-bottom-bar](https://github.com/kc0ed/dsh-bottom-bar) | 用于提供更丰富的DeepSeek Harness底栏信息显示插件 |
| [KCNyu/clawock](https://github.com/KCNyu/clawock) | AI argues. Code settles. The losses stay on the page. A real HK + US brokerage account run by agents that must debate every call, settled by code the model never touches. Install the same decision workflow into your own agent: OpenClaw, Claude Code, Codex, or DeepSeek Harness. |
| [KeLearns/dsh-navigation-bar](https://github.com/KeLearns/dsh-navigation-bar) | Piano-key style conversation navigation bar for the DeepSeek Harness web GUI |
| [kelemiao/dsh-animation-optimization](https://github.com/kelemiao/dsh-animation-optimization) | DSH 动画优化：输出流式动画与 Claude Code 风格外观插件 |
| [kenz1117/dsh-ui-usage-billing](https://github.com/kenz1117/dsh-ui-usage-billing) | Usage billing dashboard plugin for DeepSeek Harness: sidebar cost metrics, real usage aggregation from session logs, current multi-provider pricing catalog |
| [kingOfSoySauce/dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) | DeepSeek Harness 滑动变阻器皮肤 |
| [kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) | DeepSeek Harness skin market 皮肤市场 已收录200+DSH 皮肤 完善评分系统加人工审核，有便捷的社区收录入口；有在线页面方便在线浏览，也有插件方便管理本地皮肤 |
| [kuangre123/codex-switch](https://github.com/kuangre123/codex-switch) | Codex Switch 是一个 macOS 工具，一键配置 Codex 的自定义 API，同时保留官方 OpenAI 登录。保存后 Codex 的模型选择器里只会出现你选的那个 provider 的模型。也支持 Claude Code 的官方 / 自定义 API 切换。Codex Switch is a lightweight helper for configuring multiple coding-agent API routes. For Codex, it keeps Official OpenAI and a custom API provider configured in parallel, registers the custom model in Codex's mod |
| [kuangre123/deepseek-harness-mac](https://github.com/kuangre123/deepseek-harness-mac) | Native macOS wrapper for DeepSeek Harness with bundled Node.js runtime, Keychain API key setup, and one-click startup. |
| [kuangre123/iosdev](https://github.com/kuangre123/iosdev) | ios app 开发 skill |
| [kunjinkao-os/dsh-mobile-gui-agent](https://github.com/kunjinkao-os/dsh-mobile-gui-agent) | Android Mobile GUI Agent plugin for DeepSeek Harness with ADB control, iterative verification, approvals, and a Web mobile view |
| [kw78/dsh-office-tools](https://github.com/kw78/dsh-office-tools) | Model-facing Office tools for DeepSeek Harness: Word (.docx), Excel (.xlsx), and PowerPoint (.pptx) create/read/update with workspace-safe paths and PPT image embedding. |
| [kxh4892636/pi-deepseek-anchor](https://github.com/kxh4892636/pi-deepseek-anchor) | pi extension: DeepSeek V4 Pro Minimal-anchored bootstrap, then full Standard tools (port of dsh-anchored-standard) |
| [KyoMio/dsh-zen-remote](https://github.com/KyoMio/dsh-zen-remote) | Turn DeepSeek Harness into a phone app you can securely reach from anywhere: minimal mobile UI rework + pairing-code gateway + PWA + Web Push. 让 DSH 变成可公网安全访问的手机 App |
| [labring/sealos-skills](https://github.com/labring/sealos-skills) | AI agent skills for Sealos — deploy any project, provision databases, object storage & more with one command. Works with Claude Code, Gemini CLI, Codex. |
| [lamost423/dsh-trace-compare](https://github.com/lamost423/dsh-trace-compare) | Trace Compare & Live Maze for DeepSeek Harness: visualize agent exploration (main path, detours, backtracks) from session logs or live sessions |
| [LAN-TINA-WS/dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization) | DeepSeek Harness 时装工坊：给 DSH 界面换装——更改主题配色/自定义背景图/自定义视频背景/可调节氛围灯，中英双语 ·DSH Web UI 时装工坊。 |
| [lanlandeli/dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats) | DeepSeek Harness 使用统计插件｜Token 总量与构成、7/30 天趋势、年度活跃热力图、模型占比、工作区/任务筛选、CSV/JSON 导出 |
| [Lanxing6480/dsh-galgame](https://github.com/Lanxing6480/dsh-galgame) | 我要成为Galgame高手！！将你的Vibe coding界面修改成为Galgame的样子，在不影响工作的情况下和赏心悦目的DeepSeek娘进行友好互动 |
| [Laplace-bit/dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream) | DeepSeek Harness Web UI plugin for fluid streaming rendering and silky scrolling. 流畅流式渲染与丝滑滚动。 |
| [LaplaceYoung/dsh-directorx](https://github.com/LaplaceYoung/dsh-directorx) | DirectorX as a DeepSeek Harness plugin: AI video/image/audio skills, knowledge corpus, and configurable vision/image/video/audio model tools. |
| [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh) | Superpowers skills for DeepSeek Harness: TDD, debugging, planning, and collaboration skills adapted from obra/superpowers |
| [lbwnb666-ai/DeepSeekHarnessRemoteGateway](https://github.com/lbwnb666-ai/DeepSeekHarnessRemoteGateway) | 一个轻量级 DeepSeek Harness 远程网关，让你通过 Web 或移动设备远程访问和控制本地 AI Agent |
| [lcgash/dsh-plugin-uw](https://github.com/lcgash/dsh-plugin-uw) | Merge multiple directories into one DSH session with configurable write scopes: primary only, all members via common ancestor, or unrestricted. |
| [LeemanCheung/dsh-token-usage](https://github.com/LeemanCheung/dsh-token-usage) | Persistent token usage records and dashboard for DeepSeek Harness |
| [left0ver/dsh-file-review](https://github.com/left0ver/dsh-file-review) | dsh插件 - 立刻审查agent对文件的修改，查看diff。a dsh plugin - review  files that an agent just changed,you can see the diff |
| [Len7183/DSH-Think-zh](https://github.com/Len7183/DSH-Think-zh) | DeepSeek Harness 默认的思考语言为英文，这不利于中文使用者阅读推理过程与复核结论。本插件通过在每次请求的 system prompt 中注入一条精简的强制语言指令，使: 思考过程强制简体中文，无论用户用什么语言提问。 |
| [lencx/Minke](https://github.com/lencx/Minke) | 🐳 DeepSeek Harness Desktop |
| [Leon0555/dsh-lan-access](https://github.com/Leon0555/dsh-lan-access) | 一个DSH局域网内访问插件：让 DeepSeek Harness 可在局域网内被其他设备访问的 DSH 插件。同一局域网下，手机/平板/电脑打开浏览器即可直接访问你某台设备上的 DSH——无需 SSH、无需内网穿透，npm 一键安装。 |
| [Leslie-SSS/seeWxapkg](https://github.com/Leslie-SSS/seeWxapkg) | 极简实用的微信小程序反编译 Web 工具 |
| [liangmianya/dsh-synapse](https://github.com/liangmianya/dsh-synapse) | A visual, non-linear conversation workspace plugin for DeepSeek Harness ; A canvas-based session explorer and branching workspace for DeepSeek Harness. |
| [LiangYin233/dsh-provider-model-configurator](https://github.com/LiangYin233/dsh-provider-model-configurator) | DSH 模型 Pro:为 DSH WebUI 提供将 pi-ai 预设或任意已配置提供商的模型上下文、输出上限、推理档位与兼容开关一键应用到目标提供商,并集中查看、新建、编辑、复制与删除各提供商模型条目的能力。 |
| [liceses/dsh-gitbash-preset](https://github.com/liceses/dsh-gitbash-preset) | DeepSeek Harness 插件：一键安装「极简模式 (Git Bash)」agent preset —— 把 DSH 自带极简模式中的 bash 调用映射到 Git for Windows 的 bash（MSYS），让 Windows 上的极简模式真正可用。 |
| [liebaojun/MakoCode](https://github.com/liebaojun/MakoCode) | MakoCode — 茉子版 Agent \| Galgame 风格桌面 AI Agent，零门槛体验 Agent 的乐趣 |
| [liguobao/deepseek-harness-remote](https://github.com/liguobao/deepseek-harness-remote) | 基于 DeepSeek Harness 插件机制的多端远程访问方案，让桌面端与 Android 端安全连接并操作远程 Harness。（A multi-device remote access solution built on the DeepSeek Harness plugin system, enabling desktop and Android clients to securely connect to and operate a remote Harness.） |
| [Likenttt/garmin-connect-plugin-for-dsh](https://github.com/Likenttt/garmin-connect-plugin-for-dsh) | DeepSeek Harness plugin for Garmin Connect — AI-powered fitness data access |
| [liliuCourier/dsh-chat-outline](https://github.com/liliuCourier/dsh-chat-outline) | 对话栏左侧常驻大纲：快速定位每次 user 提问与最后 assistant 回复（DeepSeek Harness 插件） |
| [lilwhich/dsh-plugin-gather](https://github.com/lilwhich/dsh-plugin-gather) | for better dsh |
| [limbo947/dsh-recall-plugin](https://github.com/limbo947/dsh-recall-plugin) | DSH 消息撤回插件：回到发送该消息时的状态 DSH Message Recall Plugin: Return to the state when the message was sent |
| [limuyang2/agent-team](https://github.com/limuyang2/agent-team) | Multi-agent team collaboration for DeepSeek Harness, with independent models, skills, MCP tools, contexts, and a shared workspace. |
| [linenxi-ctrl/dsh-vision](https://github.com/linenxi-ctrl/dsh-vision) | 为 DeepSeek Harness 增加外挂识图模型：圆形鲸鱼按钮、发送图片识图自动回传、模型自主截图+识图工具、多协议自动适配、小白一键安装（未装 Node.js 自动下载） |
| [LingyeSoul/dsh-tavern](https://github.com/LingyeSoul/dsh-tavern) | 暂无描述 |
| [linhut/gongwen-skill](https://github.com/linhut/gongwen-skill) | 中文公文全流程处理工具——基于 GB/T 9704《党政机关公文格式》 国家标准，面向公文写作、企事业单位材料编制场景，支持 格式检查与修复、内容优化（Word 原生修订+批注/差异对比版）、模板生成、Markdown 转公文、版头版记页码注入、事实核验、风格增强 等完整能力。原生支持 DeepSeek Harness (DSH) 技能系统，打包为可被 AI Agent 直接调用的 Skill，完全自包含，克隆即用。 |
| [Links2008/DeepSeek-Harness-Desktop](https://github.com/Links2008/DeepSeek-Harness-Desktop) | Windows 桌面版 DeepSeek Harness 发行版，支持原生通知、流畅的窗口控制、捆绑运行时和自动更新。追踪官方主分支。针对官方版本进行了桌面美化和功能补充 |
| [linyp/dsh-plugin-langfuse](https://github.com/linyp/dsh-plugin-langfuse) | Langfuse observability for DeepSeek Harness (dsh): exports agent sessions as OpenTelemetry trace trees (GenAI semconv) to Langfuse's OTLP endpoint |
| [liqichen/dsh-plugin-manager](https://github.com/liqichen/dsh-plugin-manager) | DSH 插件管理器:在 DeepSeek Harness 设置面板内嵌 GUI,管理 MCP 服务 / Skills / 内置插件包,改动热生效无需重启 |
| [lire1131/dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) | DSH crash-rescue plugin: undo config & plugin-code changes, secret-safe snapshots, one-click SAFE MODE, plus offline CLI/GUI that work even when DSH won't boot. |
| [literaf/dsh-ai4scholar](https://github.com/literaf/dsh-ai4scholar) | AI4Scholar for DeepSeek Harness (dsh): 38 native academic tools — Semantic Scholar, PubMed, Google Scholar, arXiv, bioRxiv/medRxiv, DOI, full text, auto-cite, figures, unified search. Powered by ai4scholar.net |
| [Liu-ZA-81/dsh-theme-firefly](https://github.com/Liu-ZA-81/dsh-theme-firefly) | 暂无描述 |
| [LiuMengxuan04/oh-my-dsh](https://github.com/LiuMengxuan04/oh-my-dsh) | Oh My DSH (DSH Autopilot): durable, bounded autonomous development for DeepSeek Harness |
| [liustack/pptwise](https://github.com/liustack/pptwise) | A real PowerPoint file. Not a picture of one. Tell your AI what to cover and pptwise builds an editable deck on your own machine. Agent skill + DSH plugin, no account and no API key to render. \| 真正的 PPT，不是一张图。跟 AI 说要讲什么，pptwise 在你自己电脑上做出一份能改的 PPT。Agent skill + DSH 插件，不用注册，渲染不用 API key。 |
| [Lixxx1/dsh-vscode](https://github.com/Lixxx1/dsh-vscode) | 在 VS Code 中使用 DeepSeek Harness. Use DeepSeek Harness in VS Code |
| [liyupi/dsh-kun-like-pet](https://github.com/liyupi/dsh-kun-like-pet) | Kun Like 桌宠 —— DeepSeek Harness 桌面宠物插件：右下角小坤宠随 Agent 工作状态切换 9 种动作，任务完成播放「你干嘛~哎哟」 |
| [lna-lab/distill-kura](https://github.com/lna-lab/distill-kura) | 蒸留蔵 — distilled long-term memory for agents: recall by meaning, writing gated by evidence, one kura per agent mode. Ships as a DeepSeek Harness plugin and an MCP server. |
| [lninghaha/dsh-coding-subscription-oauth](https://github.com/lninghaha/dsh-coding-subscription-oauth) | DeepSeek Harness coding-subscription OAuth: SuperGrok / Grok Build, ChatGPT Plus Codex, Kimi Code, Claude Code. No API-key pasting. |
| [loadingvx/deepseek-harness-workbench-plugin](https://github.com/loadingvx/deepseek-harness-workbench-plugin) | Deepseek-harness-workbench-plugin |
| [loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) | OpenTelemetry tracing for DeepSeek Harness (dsh): turns each agent turn into a GenAI span tree — steps, LLM calls with TTFT, tool executions, token usage — exported over standard OTLP to Jaeger, Grafana Tempo, SigNoz, Langfuse, or any compatible backend. |
| [louisecxqiu-glitch/html-doc-center](https://github.com/louisecxqiu-glitch/html-doc-center) | perfect workbench for html generated by Agents, edit, history,favorites |
| [lssyd20070106/dsh-ui-preset-enhance](https://github.com/lssyd20070106/dsh-ui-preset-enhance) | Third-party DSH WebUI enhancement plugin: custom backgrounds, theme colors, prompt presets, token/context visibility, and manual compact. |
| [lsz-asd/dsh-plugin-session-delete](https://github.com/lsz-asd/dsh-plugin-session-delete) | Delete DeepSeek Harness sessions from the UI: header danger button + sidebar session-row menu item (no conversation jump), risk-consent dialog with session name/id, stops running agents first, in-place list refresh without page reload. Works in web and the desktop client. |
| [lusblead/dsh-Kingdom](https://github.com/lusblead/dsh-Kingdom) | 在 DSH 中建立属于你的 Agent 王国——让 Agent 拥有角色、权限、领地与治理秩序，并通过事实验证机制与权威账本，让每一次执行、声明与裁决都可核验、可追溯。 |
| [Lxiayu/DshCockpit](https://github.com/Lxiayu/DshCockpit) | Desktop cockpit for DeepSeek Harness (dsh): token usage & cost tracking, budget alerts, runtime auto-update with rollback, Quick Ask hotkey, scheduled tasks, session search. Win+macOS. DeepSeek Harness 桌面驾驶舱：成本/用量监控 · 自动更新 · 定时任务 |
| [lxzy-7/dsh-plugin-guard](https://github.com/lxzy-7/dsh-plugin-guard) | Install safety net for DeepSeek Harness: pre-install snapshots, one-click/automatic rollback, guarded boot, and incident reports that auto-trigger agent analysis. 中文: DeepSeek Harness 插件安装安全网（安装前自动快照、一键/自动回退、守护启动、事故报告自动触发 Agent 分析）。 |
| [lzbaclz/dsh-conversation-outline](https://github.com/lzbaclz/dsh-conversation-outline) | Codex-style conversation outline for DeepSeek Harness Web: a right-edge rail with hover preview and click-to-jump |
| [Lzh3070/dsh-file-review-tab](https://github.com/Lzh3070/dsh-file-review-tab) | dsh-better-sidebar 侧边栏 Tab 版文件改动审查：行级红绿 diff + 撤销，chat 行深链（移植自 left0ver/dsh-file-review）/ Review agent file changes as a dsh-better-sidebar sidebar tab — line-level diffs + undo, ported from left0ver/dsh-file-review |
| [ma-pony/deepspider](https://github.com/ma-pony/deepspider) | AI 原生智能爬虫与 JavaScript 逆向工程平台，基于 DSH、Patchright/CDP 与独立语义运行时，从浏览器证据恢复参数生成逻辑并交付可验证 Solver。 |
| [maddogfinance/dsh-trading](https://github.com/maddogfinance/dsh-trading) | Trading research workbench for DeepSeek Harness (dsh): typed market-data seam, deterministic indicators, interactive chart cards ｜ 交易研究工作台插件：数据接缝 · 确定性指标 · 交互式K线卡 |
| [magian1127/deepseek-harness-zh_pro](https://github.com/magian1127/deepseek-harness-zh_pro) | DeepSeek Harness (DSH) plugin:  A comprehensive enhancement plugin with UI polish, layout tweaks, prompt injection, and more.  综合性增强插件，界面优化、布局调整与提示词注入等更多功能。 |
| [Make0209/dsh-usage-stats](https://github.com/Make0209/dsh-usage-stats) | DeepSeek Harness 插件：GitHub 风格用量热力图 + Token / 缓存命中 / 账户余额看板 + 工作区别名管理。 |
| [MarioZZJ/cc-notify-hooks](https://github.com/MarioZZJ/cc-notify-hooks) | Agent 等待响应通知插件（支持Claude Code、CodeX、DeepSeek Harness、Reasonix） — 11 个渠道，短通知即时触达，长通知异步兜底。人可以闲着，Agent 不可以。 |
| [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) | Unofficial DeepSeek Harness LLM provider plugin for Command Code: live model catalog, reasoning-effort support, Models-page card. Ported from pi-commandcode-provider. |
| [MarvekG/deepseek-harness-model-config](https://github.com/MarvekG/deepseek-harness-model-config) | 暂无描述 |
| [Max-Samson/dsh-usage-chart](https://github.com/Max-Samson/dsh-usage-chart) | A DeepSeek Harness Web plugin for real-time Token usage, cost estimates, per-round charts, and DeepSeek API balance. |
| [melandlabs/opencontext](https://github.com/melandlabs/opencontext) | A temporal context graph, a memory API, retrieval primitives, and a multiple-platform integration mesh — designed to be embedded into any host process. |
| [mem9-ai/mem9](https://github.com/mem9-ai/mem9) | Unlimited memory for OpenClaw |
| [memorax-ai/dsh-harmony](https://github.com/memorax-ai/dsh-harmony) | A library for patching, replacing and decorating dsh plugin during runtime |
| [MemTensor/memmy-agent](https://github.com/MemTensor/memmy-agent) | 🍙  A personal AI agent & local memory hub for all AI agents, gives every AI one shared, fully controlled memory and persistent context — all AI remember the same you. Now supports Claude Code, Codex, OpenClaw and Hermes Agent etc. |
| [MemTensor/MemOS](https://github.com/MemTensor/MemOS) | Self-evolving memory OS for LLM & AI Agents: ultra-persistent memory, hybrid-retrieval, and cross-task skill reuse, with 35.24% token savings and DeepSeek Harness support. |
| [MeteorNOX/DeepSeek-Balance-Whale-Widget](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) | DeepSeek Harness（DSH）一只住在 DSH 界面右下角的小鲸鱼娘，帮你盯着DeepSeek账户余额。QQ弹弹，支持拖拽吸附、左吸附翻转、数字滚动动画，随界面自动启用，建议直接喊来你的dsh安装 |
| [mexiaosqwq/dsh-web-mobile](https://github.com/mexiaosqwq/dsh-web-mobile) | DSH Web UI 移动端适配：窄屏好用，宽屏适用 |
| [mianyoubiaoqing/dsh-Mmem](https://github.com/mianyoubiaoqing/dsh-Mmem) | 这是一个支持同dsh进程多记忆空间的dsh记忆插件 |
| [MiaoQichuan/new-litigation-visualization](https://github.com/MiaoQichuan/new-litigation-visualization) | 把法律画出来 · Make the Law Visible —— 给法律人的诉讼可视化工具集：把凌乱的诉讼图重画成能进材料的图，或直接读案件材料画准一张时间轴。Claude Skill / DeepSeek Harness 通用。 |
| [MichengAI/dsh-agency-agents](https://github.com/MichengAI/dsh-agency-agents) | DSH agency agents 基于 DeepSeek Harness 的全行业智能体 |
| [MichengAI/dsh-archive-manager](https://github.com/MichengAI/dsh-archive-manager) | DSH Archive Manager 基于 DeepSeek Harness 的归档会话管理插件 |
| [MichengAI/dsh-codex-desktop](https://github.com/MichengAI/dsh-codex-desktop) | DeepSeek Harness Codex 跨平台桌面版，无需提前安装任何环境，开箱即用 |
| [MichengAI/dsh-codex-ui](https://github.com/MichengAI/dsh-codex-ui) | DSH Codex UI 基于 DeepSeek Harness 的 Codex UI 插件，还原度90%，小细节拉满 |
| [MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager) | DSH Skills Manager 基于 DeepSeek Harness 的Skills管理插件 |
| [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) | Always-on compatibility testing for DeepSeek Harness plugins: exact releases, isolated runners, and fixable upstream issues. |
| [Minara-AI/minara-skills](https://github.com/Minara-AI/minara-skills) | The skills for trading, to make your agent earn for you. |
| [mindscale-noah/MindMemOS](https://github.com/mindscale-noah/MindMemOS) | 暂无描述 |
| [MingoZhou/dsh-replay](https://github.com/MingoZhou/dsh-replay) | Agent 会话的时光机。 一个 DeepSeek Harness 插件,把 append-only 会话日志变成可交互的回放:可播放的时间线 + 逐步 token 账单、安全审计视图、fork 血缘树、双会话对比 —— 全部内嵌在 Harness 的 Web UI 里。 |
| [mingzeng21/dsh-obsidian](https://github.com/mingzeng21/dsh-obsidian) | Connect DeepSeek Harness (dsh) to a local Obsidian vault: search, read, write, move, and trash notes. |
| [minivv/dsh-agent-skills](https://github.com/minivv/dsh-agent-skills) | Discover and manage Agent Skills inside DeepSeek Harness |
| [minybear/DeepSeek-Harness-Pet](https://github.com/minybear/DeepSeek-Harness-Pet) | Codex-style desktop pet plugin for DeepSeek Harness |
| [mishibeikejie/zat-dsh-engine](https://github.com/mishibeikejie/zat-dsh-engine) | Visual plugin marketplace for DeepSeek Harness — browse, search and install community plugins |
| [Miyazawai/dsh-client-pricing](https://github.com/Miyazawai/dsh-client-pricing) | 会话顶栏实时显示 DeepSeek API 价格（峰谷定价 / 现行一口价，flash / pro 自动切换） \| DeepSeek Harness client plugin: live DeepSeek API pricing badge (peak/off-peak, flash/pro) in the session header |
| [MJorgin/dsh-media-skills](https://github.com/MJorgin/dsh-media-skills) | Free image reading & generation for DeepSeek Harness (rc.7 / rc.8 / v0.1.1-rc.1 / rc.2) — paste-image reading with auto vision transcription, DeepSeek-V4-Flash-Vision-Exp / GLM-4V-Flash / SenseNova / Gemini failover, Kolors + U1 Fast generation. No keys in repo. |
| [mmzm0808/dsh-deepseek-usage](https://github.com/mmzm0808/dsh-deepseek-usage) | DeepSeek API 用量监测 DSH 插件：悬浮球 + 展开面板，展示开放平台真实余额、累计消费、今日消费、请求次数、Tokens 与分模型用量，支持手动登录获取 userToken。 |
| [mnemon-dev/mnemon](https://github.com/mnemon-dev/mnemon) | LLM-supervised persistent memory for AI agents — graph-based recall, cross-session knowledge, single binary. Works with DeepSeek Harness, Claude Code, OpenClaw, and any agent runtime. |
| [MochiNek0/dsh-desktop](https://github.com/MochiNek0/dsh-desktop) | Cross-platform desktop client for DeepSeek Harness (dsh web), built with Tauri — the CLI's web UI in a native window, sharing the same session data. |
| [MoFeng2223/dsh-claude-provider](https://github.com/MoFeng2223/dsh-claude-provider) | Custom Claude provider support for DeepSeek Harness |
| [Molunerfinn/PicGo](https://github.com/Molunerfinn/PicGo) | :rocket: The Ultimate Image Uploader for Efficient Creators. Supports Obsidian, Typora, VS Code etc. and 60+ image hosting services  (S3, GitHub, Cloudflare R2, Imgur, Aliyun OSS...). Paste, upload, done. |
| [Mombrane/dsh-subagent-monitor](https://github.com/Mombrane/dsh-subagent-monitor) | 暂无描述 |
| [Mooling0602/dsh-web-file-uploader](https://github.com/Mooling0602/dsh-web-file-uploader) | A file-upload plugin for the DeepSeek Harness web UI. |
| [Mr-remon219/dsh-search-boost](https://github.com/Mr-remon219/dsh-search-boost) | The plunge for dsh to boost model's search ability. |
| [MrMu666/dsh-LAN](https://github.com/MrMu666/dsh-LAN) | 为DeepSeek  harness开启局域网访问及移动端页面的插件，移动端界面适配 |
| [mrpulor-gh/nuphus-mcp](https://github.com/mrpulor-gh/nuphus-mcp) | Desktop automation MCP server — computer use for any AI agent: control screen, windows, mouse/keyboard, and Chrome via Model Context Protocol (stdio) |
| [mudden2380078550-creator/write-chinese-long-screenplay](https://github.com/mudden2380078550-creator/write-chinese-long-screenplay) | 中文电影与剧集长剧本写作 skill |
| [multica-ai/dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) | Support dsh runtime on Multica. |
| [MutaLucem/dsh-plugin-integration](https://github.com/MutaLucem/dsh-plugin-integration) | DeepSeek Harness (DSH) 插件整合中心：动态发现、打标分类、重叠/兼容检测、一键启停与失效检测 |
| [N0zoM1z0/th08](https://github.com/N0zoM1z0/th08) | Source reconstruction of Touhou Eiyashou (TH08) 1.00d |
| [N0zoM1z0/vocaloid-mcp](https://github.com/N0zoM1z0/vocaloid-mcp) | An agent-native MCP for composing, tuning, rendering, mixing, and auditing native VOCALOID3/4 projects — built just for fun. |
| [Nagi-ovo/voyager](https://github.com/Nagi-ovo/voyager) | Enhancement suite for Gemini, AI Studio, Claude & ChatGPT — plus a prompt manager for any web UI, DeepSeek Harness included. / 面向 Gemini、AI Studio、Claude 与 ChatGPT 的增强套件；提示词管理器可用于任意 Web UI，含 DeepSeek Harness。 |
| [Nanki-nn/dsh-answer-pet](https://github.com/Nanki-nn/dsh-answer-pet) | 暂无描述 |
| [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) | Safe automatic permissions for DeepSeek Harness. |
| [nevertoday/dsh-theme-plugin](https://github.com/nevertoday/dsh-theme-plugin) | Chinese traditional colors as a DeepSeek Harness theme pack. |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | 🎨 Best DeepSeek Harness Design Plugin. The open-source Claude Design alternative. 🖥️ Local-first desktop app. 🖼️ Your coding agent becomes the design engine: prototypes, landing pages, dashboards, slides, images & video — real files, HTML/PDF/PPTX/MP4 export. 🤖 Claude Code / Codex / Cursor / DeepSeek Harness / OpenCode & 20+ CLIs via BYOK. |
| [Nexus-Aethra/DSHBox](https://github.com/Nexus-Aethra/DSHBox) | Manage DeepSeek Harness locally: run multiple DSH versions in isolated containers, open the UI in an embedded WebView, import plugins/skills with one click, share extension bundles, and let a queued task system handle installs with live logs. Zero-dependency installer. |
| [niiang/dsh-kimino-theme](https://github.com/niiang/dsh-kimino-theme) | Kimi no Na wa (Your Name) theme for DeepSeek Harness Web GUI |
| [ningbainb/deepseek-harness-desktop](https://github.com/ningbainb/deepseek-harness-desktop) | Open-source Windows desktop client and GUI for DeepSeek Harness — zero-setup installer with Codex, plugins, skills, SSH, mobile remote access, and 11 skins. |
| [No-PRM/dsh-explorer](https://github.com/No-PRM/dsh-explorer) | DSH plugin: VS Code-style file-tree explorer (git decorations, preview, diff, drag-to-reference); install via dsh plugin --profile web add. |
| [nocobase/nocobase](https://github.com/nocobase/nocobase) | NocoBase is an open-source AI + no-code platform for building business systems fast. Instead of generating everything from scratch, AI works on top of production-proven infrastructure and a WYSIWYG no-code interface, so you get both speed and reliability. |
| [NoNameLeGo/dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) | DeepSeek Harness Web GUI 的 Catppuccin 主题插件：Latte / Frappé / Macchiato / Mocha 四种主题一键切换，内置可开关的玻璃质感（Glassmorphism） |
| [nonewind/dsh-spend](https://github.com/nonewind/dsh-spend) | Token usage & cost monitor for DeepSeek Harness — floating widget with multi-dimensional stats, time-series charts, auto-detected billing plans (Code/Token) and estimated spend. |
| [Noob-stupid/dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) | DeepSeek Harness (DSH) 插件管理面板：一键启用/停用插件 + GitHub dsh-plugin 插件市场，带插件详情与一键安装 \| Plugin manager & marketplace for DeepSeek Harness |
| [not-big-dog/DSH-pipeline-kernel](https://github.com/not-big-dog/DSH-pipeline-kernel) | 暂无描述 |
| [npxcnency-ux/pi-trace-extension](https://github.com/npxcnency-ux/pi-trace-extension) | Langfuse-style trace viewer for pi-agent — local-first, zero-setup, single-file HTML |
| [Nyasers/dsh-hanako](https://github.com/Nyasers/dsh-hanako) | DSH for Hanako |
| [oil-oil/dsh-oil-creator](https://github.com/oil-oil/dsh-oil-creator) | AI-assisted local creator workbench for DeepSeek Harness |
| [OK-wx/dsh-ocgo-lite](https://github.com/OK-wx/dsh-ocgo-lite) | OpenCode Go 用量常驻条：套餐余量圆环 + token/花费实时统计（本次会话/全部范围 + 按模型联动，官方实时定价），一键复制 API Key。OpenCode Go usage bar for DeepSeek Harness. |
| [oliblue-evan/dsh-roleplay-preset](https://github.com/oliblue-evan/dsh-roleplay-preset) | DeepSeek 深度调校的沉浸式角色扮演 Agent 预设（dsh）——零工具纯对话、酒馆式演出格式、文件记忆库 |
| [omdsh-dev/dsh-minigames](https://github.com/omdsh-dev/dsh-minigames) | DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器 |
| [omdsh-dev/dsh-office](https://github.com/omdsh-dev/dsh-office) | 办公三件套！Office document tools for DeepSeek Harness (dsh): generate, read, and edit spreadsheets (.xlsx), PDFs, and presentations (.pptx). |
| [omdsh-dev/dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) | DSH 侧会话插件：/side 持续性侧会话（Codex 风格）与 /btw 一次性侧问（Claude 风格）——在临时 fork 中运行、不写入主会话历史；Web UI 右侧链面板内嵌对话，主会话保持不变 |
| [omdsh-dev/dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) | 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层 |
| [omdsh-dev/stent](https://github.com/omdsh-dev/stent) | 灵感来源于MC Fabric的Cordis/DSH hook处理器 |
| [oomol-lab/dsh-oomol](https://github.com/oomol-lab/dsh-oomol) | OOMOL Connector for DeepSeek Harness—discover connected apps and execute Actions through progressive MCP discovery without exposing provider credentials. |
| [op7418/pilot-harness](https://github.com/op7418/pilot-harness) | Pilot Harness — a CodePilot-inspired desktop client and plugin suite for DeepSeek Harness on macOS, Windows, and Linux. |
| [opencues/opencues](https://github.com/opencues/opencues) | Turn any text field into a two-way LLM channel: it reads what you write and fills what you ask. Flags a slip as you type, answers anything you end with _. Claude Code, OpenCode, Gemini CLI, shell, Chrome, DeepSeek Harness. Model-agnostic, open standard, no chat window. |
| [openma-ai/Martty](https://github.com/openma-ai/Martty) | deepseek-harness-tui（dsh-tui） before. Self-Improvement TUI Plugin of DeepSeek Harness. Everything Here Is Also A Plugin.  Martty is a ACP client. |
| [orziz/odai](https://github.com/orziz/odai) | AI agent 通用任务治理框架：对齐目标与事实，规划和调度能力，守住授权与风险边界，治理任务执行到真实验收与交付。Governance framework for evidence-driven planning, orchestration, and verified delivery. |
| [Owen718/snapgrep](https://github.com/Owen718/snapgrep) | An in-process trigram index that makes code search in Pi&DSH 20-70x faster than ripgrep, with identical results and no sidecar process. |
| [PAKIKNOWLEDGE/dsh-client-ui-skin-claude](https://github.com/PAKIKNOWLEDGE/dsh-client-ui-skin-claude) | Claude-style skin for DeepSeek Harness (dsh) Web GUI — warm-black canvas, Anthropic clay accent, serif UI |
| [pazz11/Jnpz](https://github.com/pazz11/Jnpz) | 改配置+重启才能加 MCP？DeepSeek Harness (DSH) 插件「技能配置」解决：设置页粘贴 JSON 即连 MCP 服务器、热加载免重启；上传 zip/.skill 自动识别 SKILL.md，创建/编辑/启停技能，即点即用 |
| [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | DSH 桌面宠物：一行命令装好即用的透明动画小桌宠，支持多开、大小位置随心配置；还内置 DIY 素材链，能用 AI 视频自造专属宠物 |
| [peiqi10086/dsh-skills-market](https://github.com/peiqi10086/dsh-skills-market) | DSH（DeepSeek Harness）Skills 管理 + SkillHub 商城插件：侧边栏面板管理本地 skills（用户级/工作区项目级/内置只读），搜索并一键安装 SkillHub 公开技能，附模型工具 dsh_skillhub_search。 |
| [peiyuwang54/deepseek-harness-cli](https://github.com/peiyuwang54/deepseek-harness-cli) | DeepSeek CLI (UnOfficial) |
| [pengpengyi92/dsh-quant](https://github.com/pengpengyi92/dsh-quant) | "🐳 Dsh-Quant: The Everything-Plugin Ai native Quant OS " |
| [penguin-oo/dsh-bookmarks](https://github.com/penguin-oo/dsh-bookmarks) | Bookmark assistant replies in DeepSeek Harness: per-message bookmarks with notes/tags, a cross-session center, and one-click Markdown export. |
| [pengyue-polaron/deepseek-harness-genui](https://github.com/pengyue-polaron/deepseek-harness-genui) | Task-specific React apps for DeepSeek Harness with state carried into the next Agent turn |
| [PensiveFei/deep-read-summarize](https://github.com/PensiveFei/deep-read-summarize) | Deep reading & summarization workflow for books/papers/videos/web — plugin parsers, MapReduce deep-read, JSON Schema output, Obsidian-ready (DSH) |
| [PensiveFei/dsh-secure-audit](https://github.com/PensiveFei/dsh-secure-audit) | Read-only security & compliance plugin for DeepSeek Harness: prompt-injection detection, Chinese-PII redaction, and local configuration audit with redacted, reproducible reports. |
| [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) | MCP management console for the official DeepSeek Harness MCP client: /mcp command with health diagnostics and pipeline trial calls, a Settings MCP tab with server CRUD (approval-gated writes, automatic backups) and a tool trial console over the official tool pipeline (Apache-2.0, dsh-plugin). |
| [PGZXB/dsh-feishu](https://github.com/PGZXB/dsh-feishu) | The Feishu UI for DeepSeek Harness  — a panel-driven control console: every slash command a button on the ⚙️ control-panel card, in-card approvals & questions, live streaming cards, one-QR setup. \| DeepSeek Harness 的飞书 UI：面板驱动控制台——每个命令都是卡片按钮，卡内审批与提问，流式卡片，扫码一键配置。 |
| [Phant0Meow/dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) | Cross-session memory plugin for DeepSeek Harness: seven-layer SQLite store (soul/user/project/fact/lesson/topic/rules), BM25 retrieval, per-window dream consolidation. 跨会话七层长期记忆插件。 |
| [Phant0Meow/dsh-meow-smooth](https://github.com/Phant0Meow/dsh-meow-smooth) | 手机电脑dsh通知功能！移动端可用的通知！手机端ui交互优化！让手机端dsh真正可用。 |
| [phoenixlucky/zerotoken-skill](https://github.com/phoenixlucky/zerotoken-skill) | 让 Agent 高效又守纪律 — 不止省 token：ZeroToken 压缩无效上下文/推理/输出；尉缭子十原则约束权限边界、单一指令、先谋后动、验证先于结束；附 Unicode 编码规范、搜索规范、六种任务模式。More than token savings: ZeroToken efficiency + AI coding discipline for Reasonix / Codex / OpenCode / Hermes |
| [photon-hq/dsh-imessage](https://github.com/photon-hq/dsh-imessage) | Photon-hosted iMessage transport and settings UI for DeepSeek Harness |
| [Physicolor/dsh-ui-harmonizer](https://github.com/Physicolor/dsh-ui-harmonizer) | Web UI polish layer for DeepSeek Harness: normalizes unfinished or self-contradictory official UI, reconciles style conflicts between installed plugins, and unifies the visual language via official design tokens. |
| [PicGo/PicGo-Core](https://github.com/PicGo/PicGo-Core) | :zap:The ultimate image uploading engine. Both CLI & API supports. |
| [PKUfudawei/dsh-capability-menu](https://github.com/PKUfudawei/dsh-capability-menu) | Unified capability menu for DeepSeek Harness: manage exposure level (context footprint) and execution mode of MCP tools & skills via Exposed/Progressive/Blocked tiers. |
| [Player-MINEPIG/dsh-tavern](https://github.com/Player-MINEPIG/dsh-tavern) | A plugin which makes dsh compatible with SillyTavern artifacts. |
| [pointer-a/dsh-server-login](https://github.com/pointer-a/dsh-server-login) | 面向公网的多租户 DSH 托管平台 —— 部署到一台公网服务器后，多个用户注册并经管理员审核，各自获得一套相互隔离的 deepseek-harness（DSH）环境，随时通过域名安全访问。 |
| [poiuyjie/dsh-vision-opencode](https://github.com/poiuyjie/dsh-vision-opencode) | DSH plugin: Auto-convert images to text for pure-text LLMs (DeepSeek etc.) via any vision model. No need to switch your main model. |
| [PolinniZhong/dsh-omi-voice](https://github.com/PolinniZhong/dsh-omi-voice) | DeepSeek Harness 语音朗读插件：沉浸式听朗读，用豆包 TTS 自然音色读 AI 回复（BYOK · 点读/暂停/继续） |
| [PolinniZhong/dsh-personal-center](https://github.com/PolinniZhong/dsh-personal-center) | DeepSeek Harness 个人中心:用量统计 / 自定义指令 / 成本估算 / 桌面宠物(纯本地，不联网）。 Personal center & custom instructions for DSH |
| [poplarity/dsh-science-workbench](https://github.com/poplarity/dsh-science-workbench) | A reproducible science workbench plugin for the DeepSeek Harness: agent-driven cells, inline figures with feedback/rerun, manifest provenance, and environment snapshots. 9 bio_* tools + workbench UI + publication-grade figure skills. |
| [pypcfx-glitch/risk-rule-design](https://github.com/pypcfx-glitch/risk-rule-design) | Rule mining for data risk control, distilled from the ideas of the "100-Day Risk Control Expert" course |
| [Q00/ouroboros](https://github.com/Q00/ouroboros) | Agent OS: the agent gets smarter on its own. We just hold the line: the grading command and expected result never make it into the success contract we hand it. Interview-gated, staged evaluation, budgeted evolution loop. MCP server, 13 runtimes: Claude Code, Codex CLI, Gemini CLI, OpenCode, Copilot, Kiro and more. |
| [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) | Desktop-native BigFish companion for DeepSeek Harness — real Agent status, always on top on Windows. |
| [qimidandapigu/dsh-xiaotangyuan-game](https://github.com/qimidandapigu/dsh-xiaotangyuan-game) | 单机游戏内 AI 同伴「小汤圆」｜DeepSeek Harness |
| [Qinling-Melon-Farmers/dsh-memoir](https://github.com/Qinling-Melon-Farmers/dsh-memoir) | 本地优先、零普通运行时依赖的 DSH 项目记忆：有界会话冻结 Hot Memory、倒排 BM25 召回、生命周期与缓存命中优化、中英双语 GUI。 / Local-first DSH project memory with zero regular runtime dependencies: bounded session-frozen Hot Memory, inverted-index BM25 recall, lifecycle, cache-aware design, and a bilingual GUI. |
| [qkycir-123/dsh-run2skill](https://github.com/qkycir-123/dsh-run2skill) | DSH-native, local-first Run-to-Skill plugin for DeepSeek Harness |
| [RAFOLIE/dsh-desktop-windowos](https://github.com/RAFOLIE/dsh-desktop-windowos) | DeepSeek Harness desktop shell — Tauri v2, tray + native webchat + task-done toasts, single portable exe |
| [raullenchai/rapid-mlx-dsh-provider](https://github.com/raullenchai/rapid-mlx-dsh-provider) | Native Rapid-MLX provider for DeepSeek Harness (dsh) — dsh reads model facts from the server instead of your settings.yaml. |
| [Realyujie/dsh-us-stocks](https://github.com/Realyujie/dsh-us-stocks) | US stock market data tools for DeepSeek Harness, powered by yahoo-finance2 |
| [Relistencode/dsh-extension-hub](https://github.com/Relistencode/dsh-extension-hub) | Manage DSH（DeepSeek Harness)） skills and MCP servers: CLI + settings-page UI with zh/en i18n, Claude/Codex import, and update checks. |
| [Renzic-Stone/DSH-EasyRewrite](https://github.com/Renzic-Stone/DSH-EasyRewrite) | DSH Web内目前最无感的消息撤回、重编辑插件，原版体验，兼容性强，功能简单可开关，设置丰富，现代化轻量ui框架。The most seamless message recall & re-edit plugin for DSH Web — native experience, strong compatibility, simple toggles, rich settings, modern lightweight UI. DSH Web で最もシームレスなメッセージ撤回・再編集プラグイン——ネイティブ体験、高い互換性、シンプルなトグル、充実した設定、モダンで軽量な UI。 |
| [RevolutionLA/dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) | DeepSeek Harness 换肤 / 壁纸 / 主题包插件 (dsh-plugin) — 8 套 Mirage 主题、每用户强调色、壁纸2.0、主题包导入导出/分享链接、收藏与随机，纯原生 token 系统实现。 |
| [Rianico/dsh-better-edit](https://github.com/Rianico/dsh-better-edit) | Hash-anchored read/edit/undo_last_edit tools for DeepSeek Harness (dsh), fewer token consumption, lower cost. |
| [rinDBeans/dsh-miraculous-standard](https://github.com/rinDBeans/dsh-miraculous-standard) | DeepSeek V4 Pro/Flash unified anchored agent preset for DeepSeek Harness (official API & opencode-go): two-stage RL-aligned bootstrap, model-aware path routing, epoch-aware long-session stability |
| [rirko/dsh-melody-launcher](https://github.com/rirko/dsh-melody-launcher) | dsh-旋律启动器：DeepSeek Harness 桌面启动器与插件管理器 |
| [rison114514/dsh-endfield-ui](https://github.com/rison114514/dsh-endfield-ui) | Endfield-inspired industrial UI shell for DeepSeek Harness (dsh) — non-official fan theme. Install: dsh plugin --profile web add @rison/dsh-endfield-ui |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The original agent meta-harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, RAG integration, and native Claude Code / Codex / Hermes and many more Integrated |
| [Rxiain/dsh-openviking](https://github.com/Rxiain/dsh-openviking) | 面向 DeepSeek Harness 的 OpenViking 检索、资源管理、自动召回与会话记忆插件 |
| [sailoumili/novel-writer](https://github.com/sailoumili/novel-writer) | 小说创作模式：一个统筹队长统领全局，5 个专职子代理各司其职——架构世界、策划剧情、管理人物、执笔写文、质检复核——协同写作。 |
| [Saktawdi/dsh-ha-orchestrator](https://github.com/Saktawdi/dsh-ha-orchestrator) | DeepSeek Harness（dsh）动态 Cordis 插件：模型高可用回退 + 五种模式子智能体编排（fanout / pipeline / supervisor / map-reduce / router） |
| [SamizuHM/dsh-client-ui-theme-xp](https://github.com/SamizuHM/dsh-client-ui-theme-xp) | Windows XP Luna desktop theme for the DeepSeek Harness web GUI: multi-window desktop, XP chrome, taskbar, Bliss wallpaper. |
| [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) | dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin.com 插件目录，一键安装/卸载到 profile。Community plugin market for the DeepSeek Harness (dsh) web GUI: browse, install and uninstall plugins into a profile. |
| [saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) | DeepSeek Harness 移动端适配与安全访问插件，支持局域网、远程连接、Android App 和手机浏览器。 |
| [SeaOf0/dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model) | 基于dsh web实现的多种模式，目的是服务于redteam进行授权的安全研究，覆盖渗透测试、红队评估、代码审计等范围领域，请勿用于非法行为。（允许二开，赋予模块各位自己的业务逻辑，不定期完善逻辑与修复bug） |
| [seed-forge/harness-ai-kit](https://github.com/seed-forge/harness-ai-kit) | Package manager for AI agent assets — 42 skills, 5 CLIs, 1 plugin. Skills for AI/LLM agent engineering, eval-driven dev, spec-driven dev, database (MySQL/PG/Redis/Kafka/Mongo/Oracle/NL2SQL), K8s/Docker diagnostics, infra ops (Dify/Nexus/Harbor/SonarQube) & docs/patent. Runtimes: Codex, Claude Code, Cursor, Kiro, DSH. |
| [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) | 深迹 DeepTrace — Your Agent, in numbers. DSH 插件：从会话事件日志生成日报/周报/月报/年报/自定义区间，确定性洞察与协作复盘，只读、不改写历史。 |
| [seriousz158/dsh-memory](https://github.com/seriousz158/dsh-memory) | 暂无描述 |
| [SeverusZh/dsh-plugin-subagent-director](https://github.com/SeverusZh/dsh-plugin-subagent-director) | Subagent Director: per-subagent LLM provider/model selection with role templates for DeepSeek Harness (dsh plugin) |
| [shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) | Generate images directly in DeepSeek Harness chats |
| [shanliuling/skills-link](https://github.com/shanliuling/skills-link) | Sync your local skills across 41+ AI coding agents with a single command. |
| [shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) | 把 DeepSeek Harness 装进你的口袋：电脑上跑 dsh web，手机扫码即同步访问（局域网 + 公网，实时同屏）Put DeepSeek Harness in your pocket: run dsh web on your computer and access it synchronously by scanning a QR code on your phone (LAN + public network, real‑time screen mirroring) |
| [shaoshi20/dshscan](https://github.com/shaoshi20/dshscan) | Security scanner for DSH plugins: static and semantic passes over plugin source, DSH-specific attack-surface rules, npm audit, batch scanning, and an HTML report with per-finding severity and evidence. |
| [SheltonLiu-N/nano-cordis](https://github.com/SheltonLiu-N/nano-cordis) | A nano re-implementation of Cordis and DeepSeek Harness, an AI agent runtime built out of plugins, small enough to read in an afternoon. |
| [shengsheng90/DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) | Native local Taskboard plugin for DeepSeek Harness. SQLite-backed projects, Agent claim/review, and a native Web UI — no iframe, no second chat runtime. |
| [SherUnlocked-4869/dsh-plugin-msg-nav](https://github.com/SherUnlocked-4869/dsh-plugin-msg-nav) | DeepSeek Harness 对话节点导航条插件：在对话区右缘渲染一列短横线节点串（每条真实用户消息一个节点），跟随阅读位置；鼠标靠近节点串时，节点条「变形弹出」为单行消息预览面板（覆盖原位置，移开复原），点击任意预览平滑跳转 + 高亮横线，节点过多时可在悬停区域内用滚轮滑动浏览 |
| [shinjiyu/holdem](https://github.com/shinjiyu/holdem) | Embeddable NLHE engine for Cursor / DeepSeek Harness / Codex / CLI — portable ADL + multi-agent kernel |
| [Shiye-10Pages/dsh-whale-meter](https://github.com/Shiye-10Pages/dsh-whale-meter) | 🐳 鲸鱼电表：你在 DeepSeek Harness 上烧了多少 token？消耗量段位、可晒的战绩卡、6 家厂商 46 个模型精准计价（含国内分档）、8·17 调价前后对比。零配置，数据全在本机 \| Token usage tiers & cost dashboard for DSH |
| [siegfly/dsh-deepseek-vision](https://github.com/siegfly/dsh-deepseek-vision) | Vision-language gateway plugin for DeepSeek Harness - paste an image, DeepSeek sees text |
| [sikadi233-hub/minecraft-dev](https://github.com/sikadi233-hub/minecraft-dev) | Minecraft development plugin for DeepSeek Harness: skills & tools for Paper/Spigot plugins and Fabric/Forge/NeoForge mods, MC 1.7.10-26.x |
| [Sikao-Engine/KimiX](https://github.com/Sikao-Engine/KimiX) | The next-gen lightweight coding agent cli |
| [SimonMedy/DSH-Mobile](https://github.com/SimonMedy/DSH-Mobile) | Unofficial community mobile client for the DeepSeek Harness Web UI. |
| [SiriLee/dsh-rewind](https://github.com/SiriLee/dsh-rewind) | DeepSeek Harness plugin: in-place conversation rewind in the same session window (Claude Code /rewind semantics) + optional file restore |
| [siweina/dsh-novel-writer](https://github.com/siweina/dsh-novel-writer) | DSH / DeepSeek Harness 小说写作助手插件：章节库管理、句式模式分析（九类句式/情感曲线/风格指纹）、风格自检、伏笔登记、批量导入、续写辅助。Novel writing assistant plugin for DeepSeek Harness: chapter library, sentence pattern analysis, style check, plot tracking, batch import, AI-assisted novel writing. dsh-plugin novel-writing ai-writing |
| [sjh9714/dsh-win32](https://github.com/sjh9714/dsh-win32) | Fix and diagnose DeepSeek Harness on native Windows. Official PowerShell, Workspace Write, shortcuts, and legacy preset repair. No WSL. |
| [SkillNerds/xskill](https://github.com/SkillNerds/xskill) | Self-evolving skills lib for coding agents |
| [skyf0xx/hedgehog](https://github.com/skyf0xx/hedgehog) | HEDGEHOG codes Cleaner, Faster and with Fewer Tokens. Hedgehog's AI-driven development builds a task dependency graph from your spec-driven, BMAD-METHOD plan, so Claude Code, Cursor & Gemini CLI stay locked to it. A CLI-enforced state machine for agentic coding. Now builds DeepSeek DSH Plugins. DeepSeek Harness、DSH 插件、AI 编程、BMAD 方法 |
| [skymecode/deepseek-harness-for-vscode](https://github.com/skymecode/deepseek-harness-for-vscode) | deepseek-harness for vscode .This is a community project, and we welcome your valuable feedback! |
| [sliverp/dsh-hub-plugin](https://github.com/sliverp/dsh-hub-plugin) | Native DSH Hub marketplace plugin for DeepSeek Harness |
| [sluminositys/dsh-nested-followups](https://github.com/sluminositys/dsh-nested-followups) | Ask a follow-up on any past answer in an isolated branch, keeping your main conversation clean. 针对任意历史回答发起追问，新问题在独立分支中展开，主对话保持干净。A conversation-tree plugin for DeepSeek Harness / DeepSeek Harness 会话树插件。 |
| [slywalker2006/dsh-passwords](https://github.com/slywalker2006/dsh-passwords) | Server-grade gateway that turns DeepSeek Harness into a multi-tenant platform: remote access + auto HTTPS, subuser permissions & quotas, sandbox enforcement, encrypted auth, audit log. |
| [Smalldy/godot-bridge](https://github.com/Smalldy/godot-bridge) | DSH (DeepSeek Harness) plugin that launches and drives a running Godot 4.x game through its in-game TCP interaction server — replaces the godot-mcp MCP server with native agent tools. |
| [smanx/dsh-proxy](https://github.com/smanx/dsh-proxy) | HTTP + WebSocket 反向代理：把局域网端口转发到本地 DSH 服务 |
| [Solismuchengxue/dsh_plugin_swift_cycle](https://github.com/Solismuchengxue/dsh_plugin_swift_cycle) | Swift Cycle governance skill adapter for DeepSeek Harness; user-invoked, version-pinned, and offline-verifiable. |
| [songoao25/dsh-bottom-info-bar](https://github.com/songoao25/dsh-bottom-info-bar) | Bottom Info Bar — an information bar plugin for DeepSeek Harness: provider/model, live balance, peak/off-peak pricing with countdown, and real persisted per-session spend in a single line. |
| [songyang0603/ds-spec-loop](https://github.com/songyang0603/ds-spec-loop) | Portable Agent Skill for repository-native Spec programming, informed by public DeepSeek Harness engineering patterns. |
| [sopaco/terrain](https://github.com/sopaco/terrain) | AI-native engineering environment management that makes your codebase agent-ready. |
| [Soren-ABT/dsh-knowledge](https://github.com/Soren-ABT/dsh-knowledge) | Knowledge base & RAG plugin for DeepSeek Harness (DSH): chunking, local embeddings, hybrid search, management panel |
| [sorsama/deepseek-harness-mobile](https://github.com/sorsama/deepseek-harness-mobile) | Android companion for DeepSeek Harness \| chat, goals, approvals & notifications from your phone, over your LAN. Kotlin + Jetpack Compose. |
| [Soulize/hard-flash](https://github.com/Soulize/hard-flash) | A DeepSeek Harness (dsh) agent preset for making large engineering tasks deliberate, integrated, and verifiable from the first turn. |
| [SpookySandwich/dsh-plugin-smooth-stream](https://github.com/SpookySandwich/dsh-plugin-smooth-stream) | DSH 流式渲染插件：按段落分批呈现、8 种入场动画、平滑滚动、设置面板。DeepSeek Harness: paragraph-batched streaming reveals, 8 designed animations, smooth scroll-follow and a settings panel. |
| [springbrand-lab/dsh-plugin-market](https://github.com/springbrand-lab/dsh-plugin-market) | Plugin marketplace for DeepSeek Harness Web settings: install, update and remove plugins across any local profile. |
| [Sqhao-O/dsh-docs](https://github.com/Sqhao-O/dsh-docs) | Fully local document intelligence for DeepSeek Harness. Parse PDF, Office files, images, and scanned documents with offline OCR. \| DeepSeek Harness 全本地文档智能插件，支持 PDF、Office、图片与离线 OCR |
| [sqs404/dsh-portable](https://github.com/sqs404/dsh-portable) | DeepSeek Harness 免安装便携版（Windows）：官方 npm 包 + 内置 Node.js，双击 exe 即用，拷贝到任意 64 位 Windows 电脑独立运行 |
| [STARDUSTLC666/dsh-codex-port](https://github.com/STARDUSTLC666/dsh-codex-port) | DeepSeek Harness 技能移植插件：把 ~/.codex 的 Codex 官方插件（186+ 个、583+ 技能）一键移植为 DSH 技能（codex_list/port/status），frontmatter 自动转换、幂等跳过。· Batch-port the Codex plugin family into DSH skills. |
| [starslittle/dsh-blue-whale](https://github.com/starslittle/dsh-blue-whale) | 复刻 DeepSeek Chat 蓝鲸配色的皮肤，亮色/深色跟随系统外观。 |
| [starslittle/dsh-queue-plus](https://github.com/starslittle/dsh-queue-plus) | DSH 排队消息增强面板：编辑、删除、插话、排序与批量删除功能 |
| [starsstreaming/beautiCode](https://github.com/starsstreaming/beautiCode) | 面向 AI 编程客户端的动态、可响应环境——视频背景、氛围场景与主题，适用于 DeepSeek Harness 与 Codex Desktop。 |
| [statem-li/dsh-webui](https://github.com/statem-li/dsh-webui) | DeepSeek Harness 会话增强全家桶：定时自动化任务引擎（cron 调度·绑定模型真实执行·Agent 建议确认）、会话产物卡片、对话退回与文件回退/修改历史对比、视图图块与消息导航、工具调用聚合、Markdown 渲染、模型推理等级同步与 Developer Role 兼容检测、AnySearch 网页搜索、本地记忆（hybrid 检索）、用量工作台与 Token 预算、技能管理、文件浏览器、供应商设置、AI 浏览器、生图/辅助视觉、邮箱验证码、网络代理、任务完成提示音、审批提醒等。 |
| [stevenx65/dsh-balance-plugin](https://github.com/stevenx65/dsh-balance-plugin) | 暂无描述 |
| [Stormycry-cryp/dsh-AuthInOne](https://github.com/Stormycry-cryp/dsh-AuthInOne) | Self-contained DeepSeek Harness (DSH) plugin for Provider/Auth login, model switching, image fallback, token/cost analytics, and same-port Web restart. Useful? A star helps. |
| [StvLi/dsh-ros2](https://github.com/StvLi/dsh-ros2) | The Deepseek Harness ROS 2 plugin can be used to efficiently diagnose issues and perform joint debugging. |
| [sugarforever/dsh-lark](https://github.com/sugarforever/dsh-lark) | DeepSeek Harness Plugin for Lark Integration |
| [Suiwan/whale-purse](https://github.com/Suiwan/whale-purse) | 暂无描述 |
| [sulfide2085/dsh-skill-manager](https://github.com/sulfide2085/dsh-skill-manager) | 在 DeepSeek Harness 设置页统一管理 DSH / Codex / Claude 的 AI 技能：热开关启停、GitHub 技能市场一键发现安装、本地 ZIP 导入（dsh-plugin skill hub） |
| [summer1238/dsh-remote-web-gateway](https://github.com/summer1238/dsh-remote-web-gateway) | 手机平板远程 DeepSeek Harness：扫码即可继续使用电脑上的 DSH，无需远程桌面 / SSH / 公网 IP，支持一次性配对、Github授权加密登录，独立设备授权与随时撤销，实现远程连接很简单，但安全才是我们所想要的。 |
| [SummerSec/AI-Inner-Os](https://github.com/SummerSec/AI-Inner-Os) | AI Inner OS 是一个面向 AI CLI 工具的插件，支持 Claude Code、Codex CLI、Cursor、OpenCode CLI。  它通过协议注入，让 AI 在正常完成任务的同时，额外输出一层可见的自由独白：  ▎InnerOS：这仓库现在还像毛坯房，先把承重墙立起来再说。 不预设人格，不限制语气。AI 可以吐槽、得意、焦虑、冷笑、跳跃联想——或者什么都不说。独白是否出现，由 AI 自己决定。 |
| [sunchaokun/PPT-Design-Skill](https://github.com/sunchaokun/PPT-Design-Skill) | Precision PPT design  skill for OpenCode/Claude Code/Codex, with 40,000+ styles, pixel-perfect build-mode control, and AI image generation |
| [sunshine-lang/dsh-pdf](https://github.com/sunshine-lang/dsh-pdf) | PDF toolbox for DeepSeek Harness: extract text, metadata, and page ranges via pdfjs-dist (local, no API key) |
| [sunshine-lang/dsh-weather](https://github.com/sunshine-lang/dsh-weather) | Weather tool for DeepSeek Harness: current conditions and multi-day forecasts via Open-Meteo (free, no API key) |
| [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | The design skill for Claude Code, Cursor and any coding agent. Stop shipping AI-slop UI: turn it into shippable, tasteful frontend. Install: npx skills add superdesigndev/superdesign-skill. Powered by superdesign.dev |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn |
| [superfly/sprites-deepseek-plugin](https://github.com/superfly/sprites-deepseek-plugin) | DeepSeek Harness plugin for persistent, isolated Sprites: remote builds, tests, previews, checkpoints, and long-running services. |
| [Sutera-Diffusus/dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) | DeepSeek Harness 桌宠插件：元气鲸鱼娘陪你写代码 🐋 |
| [suzike/freestyle-dsh-theme](https://github.com/suzike/freestyle-dsh-theme) | DeepSeek Harness 主题体验插件：OKLCH 主题提案 + 主题设计器（跨重启持久化） |
| [syncable-dev/memtrace-public](https://github.com/syncable-dev/memtrace-public) | Structural memory for AI coding agents. Bi-temporal graph, MCP-native, zero LLM calls. Cursor · Claude Code · Codex · DeepSeek Harness · Hermes · VS Code · Windsurf. |
| [T-Auto/dsh-ecosystem-spec](https://github.com/T-Auto/dsh-ecosystem-spec) | deepseek-harness TUI Plugin Access and Implementation Standards / deepseek-harness终端交互生态插件准入规范与实施标准 |
| [taichuy/deepseek-harness-auth](https://github.com/taichuy/deepseek-harness-auth) | DeepSeek Harness auth插件 |
| [taptap/instant-games-open-mcp](https://github.com/taptap/instant-games-open-mcp) | TapTap 小游戏开放能力 mcp |
| [Tasihi89/dsh-talk-map](https://github.com/Tasihi89/dsh-talk-map) | Visual conversation map for DeepSeek Harness — sessions as cards on a whiteboard: drag to arrange, double-click to chat, draw an edge to fork with injected context. ADHD-friendly spatial memory. · DSH 可视化对话地图 |
| [taxueseek/dsh-files](https://github.com/taxueseek/dsh-files) | DeepSeek Harness dual-face plugin: session-isolated file upload with colorful composer cards + read_document tool (text/PDF/DOCX/XLSX) with content sniffing and LRU caching |
| [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) | 让 QQ Bot 接入 DeepSeek Harness（dsh）的官方插件 |
| [Tencent-TDS/dsh-kuikly-expert](https://github.com/Tencent-TDS/dsh-kuikly-expert) | Kuikly DeepSeek Harness plugin that turns your AI agent into a Kuikly cross-platform app development expert. |
| [Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) | Let AI agents use your real, logged-in browser without interrupting your work. CLI + extension for browser automation across any shell-capable AI agent. |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki. |
| [TencentCloud/tencentmeeting-cli](https://github.com/TencentCloud/tencentmeeting-cli) | 腾讯会议命令行工具（CLI），基于腾讯会议开放平台 OAuth2 授权，支持会议管理、录制管理、参会报告等功能。 |
| [TencentCloudBase/CloudBase-AI-Toolkit](https://github.com/TencentCloudBase/CloudBase-AI-Toolkit) | Backend for AI coding agents on CloudBase — database, auth, functions via Plugin, Skills & MCP. |
| [tensorlakeai/dsh-tensorlake-sandbox](https://github.com/tensorlakeai/dsh-tensorlake-sandbox) | A deepseek harness plugin for tensorlake sandbox |
| [text2future/flowix](https://github.com/text2future/flowix) | Notes for you, Memory for your agents. / 内置 Deepseek harness Agent / 适用 办公 & 写作 & Coding |
| [Thanksgiver233/comm-protocol-hub](https://github.com/Thanksgiver233/comm-protocol-hub) | 将分散在 3GPP Release 15~18 的 70+ 条通信协议规范，按 TN/NTN/全息/近远场/混合/安全等 8 个维度结构化整理，为通信工程师和 AI 助手提供一键式协议查询能力。通过三个 DSH 工具（关键词搜索、分类浏览、单条详情），取代人工翻阅数百页 PDF 的繁琐过程，让大模型在通信领域回答更准确、有据可查。本项目填补了通信工程专业知识在 AI 助手中的空白，是首个面向通信领域的 DSH 协议知识库插件。 |
| [Thanksgiver233/dsh-mobile](https://github.com/Thanksgiver233/dsh-mobile) | DeepSeek Harness Mobile 是 DeepSeek Harness 的 Android 原生应用，将原本仅支持 PC 浏览器的 AI Agent 框架完整迁移至移动端。采用 Kotlin + Jetpack Compose 开发，内置 Node.js ARM64 二进制和 dsh CLI，实现零依赖安装——下载 APK 即可运行，无需 Root、Termux 或额外环境配置。应用覆盖网页端全部核心功能：多会话管理、流式对话、插件市场、模型设置等，并针对竖屏触控体验深度优化。技术上采用 MVVM 架构、Dagger Hilt 依赖注入、Room 本地数据库，后台 Foreground Service 确保引擎持续运行，支持离线场景和弱网环境自动重连。 |
| [the-beating-light-of-the-nail/dsh-meme-hub](https://github.com/the-beating-light-of-the-nail/dsh-meme-hub) | 🐋 The meme side of DeepSeek Harness — 贪玩蓝鲸/QQ2006/whale girls/mini-games · A curated tour of the wildest dsh plugins |
| [TheTianzz/dsh-billing](https://github.com/TheTianzz/dsh-billing) | DeepSeek Harness plugin: 账户余额 + 会话费用（/balance /cost 命令、deepseek_billing 工具、Web UI 双胶囊），官方价格每 12 小时自动同步 |
| [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) | Unified notification push plugin for DeepSeek Harness (DSH): one minimal notify() API, 8 channel adapters (telegram/dingtalk/feishu/wxpusher/pushplus/serverchan/bark/webhook), dual trigger (auto session events + agent tool). |
| [tianmingwangluo/xiaoliuren-skill](https://github.com/tianmingwangluo/xiaoliuren-skill) | 道传小六壬 skill (xiaoliuren-skill)——一个为 AI 代理（Cursor / Claude Code / OpenClaw / VS Code Copilot 等）提供专业级小六壬起卦排盘与解卦能力的技能包。 |
| [TiantianFlow/dsh-one-gateway](https://github.com/TiantianFlow/dsh-one-gateway) | Private DSH One Gateway — loopback, identity-first ingress for DeepSeek Harness |
| [tianyhjg-lab/dsh-font](https://github.com/tianyhjg-lab/dsh-font) | Font switcher for DeepSeek Harness Web GUI: 99 UI fonts + 31 code fonts with CJK-Latin pairing, instant apply, localStorage persistence |
| [Tiger3807861189/DeepSeek-V4-J-Space-Capability-Realization-Report](https://github.com/Tiger3807861189/DeepSeek-V4-J-Space-Capability-Realization-Report) | DeepSeek V4 × J-Space capability realization report — benchmark evidence that J-Space reduces capability-realization loss on DeepSeek V4. |
| [Tiger3807861189/J-Space-Cognition-Suite-V3.7](https://github.com/Tiger3807861189/J-Space-Cognition-Suite-V3.7) | J-Space Cognition Suite V3.7 - AI cognitive-enhancement Skills based on Anthropic's J-space global workspace research. \| 哔哩哔哩：Tiger380 (UID 3494375382321675) — https://space.bilibili.com/3494375382321675 |
| [timeance/dsh-approve-for-me](https://github.com/timeance/dsh-approve-for-me) | DeepSeek Harness plugin for rule-gated automatic sandbox approval with optional LLM review, one-time grants, fixed high-risk checks, and native human fallback. |
| [tingly-dev/tingly-box](https://github.com/tingly-dev/tingly-box) | Your Intelligence, Orchestrated. Every builder. Every team. Every agent. For Everyone. |
| [tinqiao-oss/engramory](https://github.com/tinqiao-oss/engramory) | A portable memory protocol for AI agents — load it as standing rules; a curation discipline + reference spec + optional cap hook. |
| [titanwings/distilly](https://github.com/titanwings/distilly) | Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）. |
| [Tkingxiao/dsh-any-background](https://github.com/Tkingxiao/dsh-any-background) | Deepseek Harness 自定义主题插件，支持自定义图片/视频壁纸，对话框，侧边栏等透明度模糊度调整，全局主题色的色轮调整插件 |
| [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) | Local security audit for AI API relays and LLM proxies: detects prompt injection, model substitution, tool-call rewriting, SSE anomalies, error leakage, and Web3 wallet risks. |
| [Tokeii0/dsh-lovelyaudit](https://github.com/Tokeii0/dsh-lovelyaudit) | DSH web plugin: 黑盒/代审 sidebar workspace (P0–P7, per-finding SRC reports). |
| [tokentopo-ai/dsh-octo](https://github.com/tokentopo-ai/dsh-octo) | an heterogeneous multi-agent collaboration skill designed for dsh |
| [Tommy00748/dsh-theme-cyberpunk2077](https://github.com/Tommy00748/dsh-theme-cyberpunk2077) | Cyberpunk 2077 / Night City theme for the DeepSeek Harness Web UI — CRT scanlines, Kiroshi lock-on, typewriter SFX, Relic glitch & easter eggs |
| [TomoyoNatsume/dsh-qq-bridge](https://github.com/TomoyoNatsume/dsh-qq-bridge) | deepseek harness插件，连接QQ / DSH plugin for connecting QQ |
| [tong-io/tongflow](https://github.com/tong-io/tongflow) | TongFlow — Multimodal GenAI Studio |
| [tonyd2wild/DeepSeek-Harness-Browser](https://github.com/tonyd2wild/DeepSeek-Harness-Browser) | An in-app browser pane for DeepSeek Harness — real Chrome over CDP, plus rendered previews of local files, markdown and PDFs. |
| [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) | Persistent multi-model workflow teams for DeepSeek Harness — dynamic lead planning, bounded DAGs, per-agent model/tools, Run Center and Token insights. |
| [Totoro-qaq/dsh-plugin-bridge](https://github.com/Totoro-qaq/dsh-plugin-bridge) | DeepSeek Harness plugin for previewable cross-preset session migration. Fixed-schema handoffs preserve state, source-model intent, and unresolved images; the original session stays untouched. |
| [tpmoonchefryan/dsh-joi-channel-theme](https://github.com/tpmoonchefryan/dsh-joi-channel-theme) | 轴伊 Joi 双衣装主题 for DeepSeek Harness — unofficial, non-commercial fan theme plugin 🍊 |
| [TQSY114514/dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance) | Appearance customization plugin for DeepSeek Harness: theme color palette, background image, opacity/blur, glass effect |
| [TsFreddie/dsh-compaction-instant](https://github.com/TsFreddie/dsh-compaction-instant) | LLM-free lossless* compaction engine for DeepSeek Harness |
| [tsrigo/dsh-from-scratch](https://github.com/tsrigo/dsh-from-scratch) | A runnable TypeScript tutorial that builds a minimal DeepSeek-style agent harness from scratch. |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self-contained HTML with motion and crisp export. |
| [unclecode/toolshrink](https://github.com/unclecode/toolshrink) | Cut large agent tool output by what it means, not by where it was cut. 13 content-aware reducers + DeepSeek Harness plugin. |
| [unitarylab/quantum-practices](https://github.com/unitarylab/quantum-practices) | 量子计算最佳实践 Quantum Algorithms Best Practices |
| [UNLINEARITY/dsh-code](https://github.com/UNLINEARITY/dsh-code) | Claude-Code-style TUI bundle for DeepSeek Harness. 充分结合 DSH 的核心机制和高级特性与Codex CLI 、Claude Code 等主流交互机制，打造的 DSH-Code. （对齐DSH官方上游最新版本！持续更新中！支持DSH 特殊模式，插件系统，模型管理，子代理管理，切换模型特殊动画） |
| [upstash/skills](https://github.com/upstash/skills) | Collection of skills for Upstash |
| [urzeye/dsh-outline](https://github.com/urzeye/dsh-outline) | DeepSeek Harness（DSH）Web GUI 的实时大纲插件，移植自 Ophel Atlas |
| [uson1x/dsh-plugin-llm-verifier](https://github.com/uson1x/dsh-plugin-llm-verifier) | LLM-as-a-Verifier for DeepSeek Harness: continuous reward signals via select / compare / track |
| [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) | Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers — OAuth login in the web UI, no API keys |
| [v587d/dsh-opencode-go-usage](https://github.com/v587d/dsh-opencode-go-usage) | A DeepSeek Harness (dsh) bundle that shows OpenCode Go subscription usage in the Web GUI's composer dock — the same seat as the built-in conversation stats line. |
| [vibeinging/dsh-desktop](https://github.com/vibeinging/dsh-desktop) | DeepSeek Harness Desktop App: a local AI desktop workspace for DSH Sessions, projects, files, web research, plugins, and Office artifacts. |
| [Vithrive/Deepseek-Harness-for-VS-Code](https://github.com/Vithrive/Deepseek-Harness-for-VS-Code) | Deepseek Harness for VS Code |
| [Viy1204/recruiting-copilot](https://github.com/Viy1204/recruiting-copilot) | 给 HR / 猎头的 AI 招聘工作流：岗位标准梳理、Boss直聘 + 猎聘双通道寻源初筛、市场人才盘点、简历评估、约面试、候选人台账与日报。可装成 Claude Code 插件或 DeepSeek Harness (dsh) 插件——后者自带可直接上手操作的「招聘浏览器」面板；也能配合任意读 AGENTS.md 的 AI 编程助手使用。 |
| [Vladimir-Human/humanizer-ru](https://github.com/Vladimir-Human/humanizer-ru) | Скилл для ИИ-агентов: находит и убирает следы машинной генерации из русского текста. 38 паттернов, 39 regex-маркеров с реестром доказательств, слепые парные прогоны, файловый слой снятия C2PA/EXIF/XMP. Пакет на PyPI и онлайн-демо \| Russian AI-writing humanizer skill, PyPI: humanizer-ru, live demo |
| [Vladimir-Human/ru-marketplace-mcp](https://github.com/Vladimir-Human/ru-marketplace-mcp) | Одиннадцать маркетплейсов как MCP-серверы: Wildberries, Ozon, Яндекс Маркет, Детский мир, Авито, AliExpress, Taobao, Мегамаркет, Lamoda, DNS, Ситилинк. Плюс сравнение цен по всем сразу. Только чтение, ключи не нужны. |
| [Vncntvx/dsh-zotero](https://github.com/Vncntvx/dsh-zotero) | Turn your Zotero library into an evidence store for agents. |
| [volcengine/ark-cli](https://github.com/volcengine/ark-cli) | The fastest way to put Volcengine Ark in your terminal and your AI agent — go from prompt to generated   media, multimodal answer, or deployed endpoint in a single command, no API glue code. |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills. |
| [vostride/agent-qa](https://github.com/vostride/agent-qa) | Open-source self-improving QA agent for software teams. A test harness with memory. Write tests in natural language for web and mobile. agent-qa learns from every run, adapts to UI changes, and catches regressions before you ship. |
| [vshulcz/deja-vu](https://github.com/vshulcz/deja-vu) | Memory for coding agents — Claude Code, Codex, Cursor and 17 others. Indexes the sessions they already wrote to disk, including months from before you installed it, and recalls them in any of them. No LLM, no embeddings, one local Go binary. |
| [w2112515/dsh-plugin-development](https://github.com/w2112515/dsh-plugin-development) | Portable Agent Skill for developing and auditing DeepSeek Harness plugins, with an optional profile-installable DSH bundle adapter. |
| [w2112515/dsh-plugin-marketplace](https://github.com/w2112515/dsh-plugin-marketplace) | Out-of-tree installable plugin marketplace bundle for DeepSeek Harness |
| [walkinglabs/learn-harness-engineering](https://github.com/walkinglabs/learn-harness-engineering) | Harness engineering beginner tutorial, from 0 to 1 |
| [Walvez/dsh-codex-sync](https://github.com/Walvez/dsh-codex-sync) | The ultimate 2-way bridge between OpenAI Codex and DSH: bidirectional chat sync, live Skills mount & auto MCP mirroring. |
| [wdsjwzl/session-seed-plugin](https://github.com/wdsjwzl/session-seed-plugin) | 对话自动注入，可用于高概率破甲模型 |
| [Weaxs/stock-analysis-plugin](https://github.com/Weaxs/stock-analysis-plugin) | Stock analysis extension for Pi Agent — lightweight market data tools + strategy skills |
| [webkubor/dsh-bloom-theme](https://github.com/webkubor/dsh-bloom-theme) | DeepSeek Harness (DSH) 主题插件：Bloom 莫兰迪配色 4 变体，OKLCH 调色，明暗双主题，顶栏一键切换，全部达 WCAG AA |
| [weinibuliu/deepseek-harness-vsc-extension](https://github.com/weinibuliu/deepseek-harness-vsc-extension) | DeepSeek Harness as VSCode Extension |
| [WeirdSky924/agent-handoff-skill](https://github.com/WeirdSky924/agent-handoff-skill) | Use this cross-platform skill in Codex or Claude Code to establish repository-local continuity memory so a future agent can recover objective, status, decisions, validation, risks, and next actions without relying on previous chat history. |
| [welsione/dsh-mmx-bridge](https://github.com/welsione/dsh-mmx-bridge) | 一个工具 = MiniMax 全部多模态能力：DSH 纯文本模型看图/画图/生视频/说话/唱歌/翻唱/搜索/查额度 \| One mmx_bridge tool = all MiniMax multimodal (VLM/image/video/speech/music/cover/search/quota) for DeepSeek Harness (DSH) |
| [wenbin-wb/dsh-bridge](https://github.com/wenbin-wb/dsh-bridge) | 🚀 DeepSeek Harness 多通道远程访问与安全守护插件 \| 局域网扫码直连、Cloudflare / 自建公网隧道、微信 / QQ / 飞书 / Telegram 机器人全生命周期对话 \| 内置全协议访问安全认证、后台防篡改与容灾保命体系 |
| [WEP-56/DSH-Launcher](https://github.com/WEP-56/DSH-Launcher) | deepseek harness的启动器，非webui二次打包而是webui内嵌，可以适配所有webui强化插件。额外提供dsh包管理、配置文件管理、插件管理、浏览器标签页、多窗口等功能 |
| [weshopai/weshop-dsh-plugin](https://github.com/weshopai/weshop-dsh-plugin) | Native WeShop Cordis plugin for DeepSeek Harness. Allow you to use infinite canvas with infinite creative skills. |
| [whitefirer/dsh-niulai-pet](https://github.com/whitefirer/dsh-niulai-pet) | 牛来桌宠：agent 任务完成它就蹦出来喊「妈～～妈～～」——dsh 纯客户端桌宠插件（6 皮肤/签名动作/合成叫声） |
| [WilliamLIiii/DeepSeek-Harness-billing-plugin](https://github.com/WilliamLIiii/DeepSeek-Harness-billing-plugin) | DeepSeek Harness billing plugin: account balance + per-model remaining-task estimator with a session-header badge |
| [WilliamShi666/dsh-multiple-chat-panels](https://github.com/WilliamShi666/dsh-multiple-chat-panels) | DeepSeek Harness 多对话面板：并排查看并与多个 Agent 会话同时交互。 |
| [Wine-Red/dsh-codex-timeline](https://github.com/Wine-Red/dsh-codex-timeline) | Codex-style turn timeline and local conversation search for DeepSeek Harness Web \| Codex风格的对话节点时间线导航栏，提供会话内容搜索等增强 |
| [WizisCool/dsh-ears](https://github.com/WizisCool/dsh-ears) | A voice-input plugin for DeepSeek Harness that supports multiple ASR backends and polishing through dsh's own LLM route. |
| [WJZ-P/deepseek-harness-desktop](https://github.com/WJZ-P/deepseek-harness-desktop) | Desktop version of DeepSeek Harness. 由tauri构建的DeepSeek Harness 桌面端，高效简洁。 |
| [wlj521/dsh-ui-tweaks](https://github.com/wlj521/dsh-ui-tweaks) | 一切皆插件，可以定义自己喜欢的dsh，开关控制单项功能，字体大小，表格样式，对话框长度，timeline，git等 |
| [WM-CODER/custom-first-control-prompt](https://github.com/WM-CODER/custom-first-control-prompt) | DeepSeek Harness plugin for insert custom prompt |
| [WNJXYK/dsh-codex-oauth](https://github.com/WNJXYK/dsh-codex-oauth) | Use your OpenAI subscription with DeepSeek Harness to access GPT models, image generation, and web search. |
| [woooooooooolf/ser2mcp](https://github.com/woooooooooolf/ser2mcp) | UART serial port MCP server: expose local serial ports to AI assistants as standard MCP tools（串口转 MCP 服务器，以最适合 AI 的方式提供串口读写支持） |
| [worldwonderer/oh-story-dsh](https://github.com/worldwonderer/oh-story-dsh) | A DSH plugin for novel writing and short-drama production, powered by Oh Story and Drama Skills. |
| [wqty123/dsh-browser](https://github.com/wqty123/dsh-browser) | Shared real browser plugin for DeepSeek Harness |
| [wssfk12138/dsh-damage-pulse](https://github.com/wssfk12138/dsh-damage-pulse) | DeepSeek Harness Token 余额监控插件：鲸鱼娘待机/扣费/复苏动画、峰谷计费、连续扣费飘字与会话费用统计。 |
| [wsxwj123/dsh-plugins](https://github.com/wsxwj123/dsh-plugins) | Independent plugins for DeepSeek Harness, organized as isolated packages in one monorepo. |
| [wsz987/dsh-channels](https://github.com/wsz987/dsh-channels) | 把微信 / QQ / 钉钉 / 飞书 / Telegram 接入 DeepSeek Harness：统一配置、扫码授权，直接在各 IM 与 Agent 对话；支持图片与文件收发，Agent 可读取 PDF、DOCX、XLSX 和文本内容。 |
| [wx-yss/dsh-message-rail](https://github.com/wx-yss/dsh-message-rail) | Codex 风格左侧消息导航轨道：等距刻度 + 悬停预览 + 点击跳转用户消息 · DSH Web 插件 |
| [wxkingstar/SpecFusion](https://github.com/wxkingstar/SpecFusion) | 在 DeepSeek Harness / Claude Code / Cursor / Codex / Gemini CLI 里直接搜索 20 个中国开放平台的 65,600+ 篇 API 文档；零配置，支持 Skill 与 DSH 原生插件。 |
| [WYH66666666/DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) | 是一层高自由度的玻璃质感主题，套在 DeepSeek Harness 网页端。顶栏、侧边栏、输入框、统计行、轨迹视图都成了磨砂玻璃片。玻璃模糊度、磨砂度、背景（流体或自定义壁纸，壁纸还能单独调模糊和磨砂）全都能在设置卡片里自由调节。关掉开关就回到原生界面，不改 DSH 任何一行源码。 |
| [WZZNNE/DSH-CyberWorkStation](https://github.com/WZZNNE/DSH-CyberWorkStation) | DSH CyberWorkStation — one-click DeepSeek Harness (dsh) bundle: cyberpunk desktop launcher, SillyTavern-grade Control Deck, 8 production plugins, AI skin studio & markets. Vendored core rc.8, run setup.cmd and go. 一键部署的 dsh 赛博工作站整合包。 |
| [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) | DeepSeek Harness 插件:OpenCode Go 用量与花费悬浮仪表盘(配额、逐请求成本、模型/来源分布) |
| [xgone/dsh-remote](https://github.com/xgone/dsh-remote) | Remote access for DeepSeek Harness: account/password auth + MFA (TOTP) login gate, signed session cookies, role-based access, in-browser directory picker, and a Settings page for account management. |
| [xi-zhao/OpenQuantum](https://github.com/xi-zhao/OpenQuantum) | Open-source quantum Agent workspace with a desktop client, Web UI, messaging, Qiskit/MCP tools, and scientific validation |
| [xiajiajun516/dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) | DeepSeek Harness (DSH) backup & restore plugin — export, import, migrate and sync your complete DSH configuration, plugins, MCP servers, skills and workspace. One-click migration to another machine. |
| [xiake595/touhou-hakurei](https://github.com/xiake595/touhou-hakurei) | 灵梦（Reimu）·博丽神社（东方Project）美化版皮肤：神社昼夜实景背景、灵梦立绘、画框侧边栏与输入框、纸白透明界面 — DeepSeek Harness Web GUI skin |
| [xiaobright/dsh-anchored-standard](https://github.com/xiaobright/dsh-anchored-standard) | Two-phase DeepSeek Harness preset: Minimal-aligned bootstrap, then full Standard tools (Project2 98/99) |
| [xiaods/k8e](https://github.com/xiaods/k8e) | k8e.sh - OpenSource Agentic AI Sandbox Matrix |
| [XiaoluoFoxington/dsh-theme-hacker-terminal](https://github.com/XiaoluoFoxington/dsh-theme-hacker-terminal) | 黑底高对比绿色终端风格的 DSH Web 主题 |
| [xiaomengxinbb/dsh-qq-bridge](https://github.com/xiaomengxinbb/dsh-qq-bridge) | 将 QQ（私聊+群聊）接入 DeepSeek Harness 的双向桥插件：每个 QQ 对话一个隔离持久 Agent 会话，支持命令/审批/多媒体/出站文件 |
| [xiaoshihou514/dsh-desktop-pet](https://github.com/xiaoshihou514/dsh-desktop-pet) | DeepSeek Harness：鲸鱼娘桌宠！ |
| [xiaoxianyu-office/dsh-router-flash](https://github.com/xiaoxianyu-office/dsh-router-flash) | DSH bundle 插件：V4 Flash 神模式（opencode-go）agent preset 分发包，dsh plugin add 安装后自动同步 router-flash preset。DSH agent preset bundle for DeepSeek V4 Flash godmode. |
| [xiaoyuyu6420/dsh-backup](https://github.com/xiaoyuyu6420/dsh-backup) | Backup DeepSeek Harness user data with one command: /backup, scheduled auto-backup, sha256 checksums and rotation. 一键备份 DSH 数据，支持定时自动备份。 |
| [xiaozhe7772222/dsh-opencode-zen](https://github.com/xiaozhe7772222/dsh-opencode-zen) | 0 元接入 6 个免费大模型：OpenCode Zen 免费档模型零配置接入 DeepSeek Harness，免注册免充值，内置 6 个免费模型，多 Key 轮换与限流退避。 |
| [xiehuan123/dsh-deepread](https://github.com/xiehuan123/dsh-deepread) | Evidence-first deep reading for AI agents — trace claims, evidence, confidence and knowledge maps across articles, books and PDFs. |
| [XieRW/dsh-beauty-skins](https://github.com/XieRW/dsh-beauty-skins) | 给 DeepSeek Harness 用的美女系列皮肤：设置里从 哲风壁纸 拉预览网格，点一张即应用，配色从壁纸提取。支持动态壁纸，也保留自定义选图。 |
| [XieZongChen/dsh-md-notes](https://github.com/XieZongChen/dsh-md-notes) | A note-taking plugin for DeepSeek Harness (DSH). It provides a full MD notes manager and MD notes editor, letting you quickly capture conversation content into notes. Notes can be maintained by syncing to a Git repository |
| [xiincs/deepseek-harness-desktop](https://github.com/xiincs/deepseek-harness-desktop) | DeepSeek Harness 原生桌面版，基于 Tauri 2，内置 Node.js 运行时，一键安装，极速启动，托盘常驻，自动更新。DeepSeek Harness native desktop version: built on Tauri 2 with a bundled Node.js runtime. |
| [xingyingyuzhui/dsh-liquid-glass](https://github.com/xingyingyuzhui/dsh-liquid-glass) | Wallpaper plus optional Liquid Glass overlay for DeepSeek Harness Web UI |
| [xlight/deepseek-visionary](https://github.com/xlight/deepseek-visionary) | 使用 DeepSeek 官方多模态视觉模型让你的 Agent 不再眼瞎（支持 DSH、Zed、OpenCode、Codex、Claude Code、Cursor、Claude Desktop） |
| [xmanrui/dsh-feishu](https://github.com/xmanrui/dsh-feishu) | 通过扫码把飞书机器人接入DeepSeek Harness |
| [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | 通过扫码或机器人凭据把IM机器人接入DeepSeek Harness（支持飞书、微信、钉钉、企业微信、QQ、Slack、Telegram、Discord和WhatsApp）。 Connect IM bots to DeepSeek Harness via QR code or credentials (9 channels). |
| [XMoon/dsh-pi-tui](https://github.com/XMoon/dsh-pi-tui) | A third-party TUI mode for DeepSeek Harness (dsh), built on a vendored fork of pi-tui |
| [xmutfyh/dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) | DeepSeek Harness (DSH) academic writing guard for papers — 论文去AI味 / AI-writing style detection, evidence preservation, journal-fit calibration, manuscript proofreading, writing_audit & automatic checks. Local, zero network, zero LLM. |
| [xtxo/dsh-ui](https://github.com/xtxo/dsh-ui) | DeepSeek Harness desktop |
| [xuedai-mayi/dsh-wenshan](https://github.com/xuedai-mayi/dsh-wenshan) | 问山：DeepSeek Harness 地理野外实习知识图谱插件与非官方二次开发项目 |
| [Xuxchloris/deepseek-harness-sdr-plugin](https://github.com/Xuxchloris/deepseek-harness-sdr-plugin) | DeepSeek Harness 的 SDR 数字员工插件：九阶段外贸获客 SOP、结构性人工审批、客户去重、持久化知识检索与审计日志，默认 dry-run 安全演示。 |
| [xylt369/dsh-browser](https://github.com/xylt369/dsh-browser) | Browser capability for DeepSeek Harness: headed Edge/Playwright provider, SSRF-safe navigation, a11y-ref clicking, permission gate with auto-remember, gated evaluate |
| [xyTom/coding-tools-mcp](https://github.com/xyTom/coding-tools-mcp) | Give any AI agent the ability to code |
| [yanglongyun/ramify-dsh](https://github.com/yanglongyun/ramify-dsh) | Ramify 是 DeepSeek Harness 的创意分支画布插件，用树状工作区生成、对比和迭代多个可交互方案。 |
| [YaoApp/yao](https://github.com/YaoApp/yao) | ✨ All your agents and workspaces in one place, on every device you own. Track tasks on a board, accessible from desktop, mobile, browser, or API. Self-hosted. |
| [yauntyour/DSH-Encrypt](https://github.com/yauntyour/DSH-Encrypt) | DeepSeek Harness 凭证加密插件，通过设置密码使用AES-256-GCM+SHA3-256实现的全流程加密+校验，运行时临时解密，内存安全。 |
| [yejiming/dsh-museai-tavern](https://github.com/yejiming/dsh-museai-tavern) | MuseAI的DeepSeek Harness插件，可以将你的MuseAI角色放进DSH使用啦！ |
| [yejiming/MuseAI](https://github.com/yejiming/MuseAI) | 创建你的 AI 角色，进入你的故事世界。和角色聊天、冒险、穿书，让每一次互动都留下羁绊（支持 DeepSeek Harness 插件，欢迎使用） |
| [yeruizhi/dsh-lark-meeting-notifier](https://github.com/yeruizhi/dsh-lark-meeting-notifier) | 一个只有副作用的DeepSeekHarness插件：在你跟 AI 聊得神魂颠倒时，提醒你「该去跟碳基生命开会了」。 |
| [Yi-111-a/dsh-jingling](https://github.com/Yi-111-a/dsh-jingling) | dsh · dsh-plugin · deepseek · deepseek-harness · deepseek-harness-plugin · ai-companion · desktop-pet · character-card · local-first · privacy · jingling · 鲸灵 |
| [yjh051108/dsh-router-standard](https://github.com/yjh051108/dsh-router-standard) | Task-aware reasoning-mode router for DeepSeek Harness: three measured behavior bands (spec/mixed/react) with phase-transition evidence, persona + first-turn tool injection, agent-visible tuning. Dual-attractor policy paper included. |
| [yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) | dsh-routing-suite — injector + router-standard kit: install the runtime injector first, then the task-aware reasoning-mode router preset (measured P1-P23). |
| [ymh0000123/dsh-theme-endfield](https://github.com/ymh0000123/dsh-theme-endfield) | 终末地官网风格的 DSH Web 主题：奶油纸底、墨黑文字、信号黄强调、全直角工业编辑风。 |
| [YMRYMR/deepseek-peak](https://github.com/YMRYMR/deepseek-peak) | Live DeepSeek V4 API peak/off-peak status widget — drop-in dsh-plugin for deepseek-ai/deepseek-harness, plus a standalone browser widget. |
| [yogsoth-ai/de-anthropocentric-research-engine](https://github.com/yogsoth-ai/de-anthropocentric-research-engine) | 900+ pure-markdown skills for autonomous AI research, organized as 9 freely-composable packages over a 4-layer hierarchy (Campaign → Strategy → Tactic → SOP). Non-linear orchestration with backtracking, 6 MCP integrations. The AI is the researcher — you set the direction. |
| [yoli-mi/dsh-client-ui-custom](https://github.com/yoli-mi/dsh-client-ui-custom) | Configurable DSH web-surface plugin: wallpaper & frosted-glass themes, accent colors, custom keyboard shortcuts, app-usage panel, history strip, message Markdown — zero shell edits. |
| [YRN-playmaker/dsh-wallpaper_share](https://github.com/YRN-playmaker/dsh-wallpaper_share) | 一键同步壁纸引擎各类动态场景壁纸的插件，设置应用启动项。A "wallpaper engine" synchronization plugin mounted on the deepseek harness can synchronize static wallpapers |
| [Yts1919/dsh-vision-complete](https://github.com/Yts1919/dsh-vision-complete) | 给 DeepSeek 补上「眼睛和耳朵」的多模态视觉插件：看图 / OCR / 物体检测 / 视频理解 / 语音转写 / 截图直读，一键安装（DSH 插件）。 |
| [YTxue/dsh-skill-manager-ytxue](https://github.com/YTxue/dsh-skill-manager-ytxue) | DSH web plugin: skill manager in the Settings sidebar - list/enable/disable, folder batch import with conflict prompts, state-driven one-click DSH-spec check & auto-fix, system/project scope labels. |
| [yuc16/PatentRadar](https://github.com/yuc16/PatentRadar) | 专利侵权分析系统 —— 输入专利公开号，产出竞品侵权分析报告；同时打包成 skill，可被任意 agent（codex，claude code 等） 调用。 |
| [yunxiiQwQ/dsh-maid-whale-webUI](https://github.com/yunxiiQwQ/dsh-maid-whale-webUI) | DeepSeek Harness Web UI 鲸鱼女仆主题插件 |
| [Yuuz12/dsh-webui-auth](https://github.com/Yuuz12/dsh-webui-auth) | WebUI 身份认证：HTTP/传输层强制登录（资源、插件 bundle、/api、WebSocket 四层防护），服务端会话 + HttpOnly Cookie。 |
| [yxccai/dsh-desktop](https://github.com/yxccai/dsh-desktop) | Unofficial Windows and macOS desktop app for DeepSeek Harness, with bundled runtime and automatic reuse of existing DSH environments. |
| [yxxbc/dsh-balance-plugin](https://github.com/yxxbc/dsh-balance-plugin) | deepSeek 余额监控与用量统计（DSH 动态 Cordis 插件）：余额监控 · 官方充值入口 · 用量统计 · 三方插件管理 |
| [yyh-001/dsh-meme](https://github.com/yyh-001/dsh-meme) | DeepSeek Harness 的表情包插件——找得到、发得出、学得会，纯文本斗图、情绪主动发图、像 QQ/微信 一样发图、AI 自动学图、自定义表情包 、多种风格随意切换。 |
| [yyxcnasd/amadeus-for-dsh](https://github.com/yyxcnasd/amadeus-for-dsh) | Amadeus (AI assistant from Steins;Gate 0) for DeepSeek Harness |
| [yyyyukari/dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) | Steam Workshop-style plugin browser for the DeepSeek Harness (DSH) Web UI - zero-server: GitHub-powered search, trending windows, Chinese search & bilingual translation, plugin-signature filtering, and smart one-click install/update/uninstall with an installed-plugins manager. |
| [yzlnew/infra-skills](https://github.com/yzlnew/infra-skills) | A collection of specialized agent skills for AI infrastructure development, enabling Claude Code to write, optimize, and debug high-performance systems. |
| [Z-6354/dsh-mobile-hanui](https://github.com/Z-6354/dsh-mobile-hanui) | 基于deepseek-harness（dsh）的手机网页优化插件，修复了部分网页与手机端不适配的问题； |
| [z953218350/dsh-history-tree](https://github.com/z953218350/dsh-history-tree) | Codex-style conversation turn timeline and hover history overview for DSH Web UI |
| [zebbkira/dsh-skills-mcp-manager](https://github.com/zebbkira/dsh-skills-mcp-manager) | 面向 DeepSeek Harness Web GUI 的正式插件包：在设置页的「Web UI 插件」分组中新增一张「技能与 MCP」卡片，用于在浏览器里管理技能（skills）与 MCP 服务器。 |
| [Zephyr-vibe/dsh-archived-sessions](https://github.com/Zephyr-vibe/dsh-archived-sessions) | DSH Session Manager: manage conversations, archive/restore, delete safely, open record folders. |
| [zerob13/dsh-better-markdown](https://github.com/zerob13/dsh-better-markdown) | DeepSeek Harness Web plugin powered by markstream-react for resilient streaming Markdown, Mermaid diagrams, KaTeX math, and safe renderer fallback. |
| [zetaluolang-cyber/deepseek-harness-phone-remote](https://github.com/zetaluolang-cyber/deepseek-harness-phone-remote) | DeepSeek Harness phone remote control via Tailscale - persistent file/workspace plugin - tested on OPPO Find X8 Ultra |
| [zexadev/dsh-tether](https://github.com/zexadev/dsh-tether) | Reach the DeepSeek Harness on your dev machine from your phone — across networks, through no server at all (iroh P2P) |
| [zh667/TokenLedger](https://github.com/zh667/TokenLedger) | Relay-site attributed token usage for DeepSeek Harness — zero config, no credentials |
| [zhaiyateng/dsh-design-skills](https://github.com/zhaiyateng/dsh-design-skills) | Design aesthetics skill pack for DeepSeek Harness (DSH) - keeps vibe-coded websites away from the AI look. 6 styles: dark-saas, apple-minimal, neo-neumorphism, brutalism, glassmorphism, japanese-minimal. |
| [zhangzheng25/dsh-token-monitor](https://github.com/zhangzheng25/dsh-token-monitor) | DeepSeek Harness plugin: token usage & conversation stats as a native settings page - today / 7d / 30d totals, GitHub-style 90-day contribution graph, session-log backfill \| DeepSeek Harness 插件：Token 用量与对话统计设置页 |
| [zhijun-dai/Catppuccin-dsh-theme](https://github.com/zhijun-dai/Catppuccin-dsh-theme) | 🐱 Soothing pastel theme for DeepSeek Harness |
| [Zhiyuan-Fan/Awesome-DeepSeek-Harness-Plugins](https://github.com/Zhiyuan-Fan/Awesome-DeepSeek-Harness-Plugins) | Curated DeepSeek Harness (DSH) plugins, extensions, tools, skills, clients, runtimes, integrations, and verified references — English and Chinese. |
| [zhoushoujianwork/easyeda-agent](https://github.com/zhoushoujianwork/easyeda-agent) | 嘉立创EDA专业版(EasyEDA Pro)自动化：给 AI harness 装上画板的「手」—— 一套 typed 原理图/PCB 动作，CLI / Agent Skill / stdio MCP 三形态融合接入。承接嘉立创「不以卖板赚钱，以培养中国工程师为己任」 \| EasyEDA Pro automation: the hands of your AI harness — typed schematic/PCB actions via CLI, Agent Skill and stdio MCP. |
| [zhu1090093659/dsh-web](https://github.com/zhu1090093659/dsh-web) | DeepSeek Harness（DSH）Web 插件聚合生态包 · 一切皆插件，创意工坊分发（dsh-market.com） |
| [zhu168/dsh-save-money](https://github.com/zhu168/dsh-save-money) | Save-money plugin for DSH (DeepSeek Harness) — define your own "pause / resume" time windows; at pause time running long tasks are paused (not stopped) automatically, and they resume when the window ends. |
| [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) | 把 dsh agent 接入微信、飞书等 20+ 聊天平台的聚合网关插件 \| Aggregate IM gateway for DeepSeek Harness (dsh): connect your agents to WeChat, Feishu, Telegram, Discord & 20+ chat platforms |
| [zhujunpeng12/dsh-memory-system](https://github.com/zhujunpeng12/dsh-memory-system) | Local-first persistent memory infrastructure for DeepSeek Harness: hot bootstrap, Chinese-BM25 cold recall, lease-lock transactional writes, read-only governance |
| [zilliztech/memsearch](https://github.com/zilliztech/memsearch) | A persistent, unified memory layer for all your AI agents (e.g. Claude Code, Codex), backed by Markdown and Milvus. |
| [zimodzh/dsh-plugin-dev-skills](https://github.com/zimodzh/dsh-plugin-dev-skills) | An Agent Skills skill for developing DeepSeek Harness (DSH) plugins（开发 DSH 插件的 Agent Skill）——插件/服务/事件/工具/LLM 适配器/打包安装的标准。Works with Claude Code, Codex, DSH, VS Code Copilot & any compatible agent. |
| [ZJU-LLMs/OpenStory](https://github.com/ZJU-LLMs/OpenStory) | An LLM-powered multi-agent framework for simulating interactive, evolving story worlds. |
| [ZJU-REAL/Polaris](https://github.com/ZJU-REAL/Polaris) | Toward Autonomous Scientific Discovery |
| [zoahdev/dsh-github-intelligence](https://github.com/zoahdev/dsh-github-intelligence) | The most comprehensive developer-intelligence integration for DeepSeek Harness: 196+ read-only tools across 16 developer ecosystems (GitHub, GitLab, Gitee, npm, PyPI, crates.io, Docker Hub, Hugging Face, Hacker News, Stack Overflow, Reddit, dev.to, RubyGems, NuGet, Go, ArXiv) with rate-limit-friendly caching. |
| [ZRui-C/dsh-computer-use](https://github.com/ZRui-C/dsh-computer-use) | Text-first browser & background macOS control for DeepSeek Harness (DSH): target the right process and window without taking the user's pointer. 为 DSH 提供文本优先的电脑控制：后台操作 Chromium 与 macOS，不抢前台、不移动鼠标。 |
| [ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) | DeepSeek Harness plugin for Android — build, run, and interact with a live emulator or USB device stream inside a conversation, driven entirely through adb. |
| [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) | DeepSeek Harness (DSH) plugin: dispatch work to DSH agents from Claude Code / Codex — native subagent progress, in-host worker sessions with per-tier presets, and a multimodal bridge that lends the text-only harness vision and image generation. |
| [ZSeven-W/dsh-ios](https://github.com/ZSeven-W/dsh-ios) | DeepSeek Harness (DSH) plugin: a live iOS Simulator — and a USB-connected iPhone — inside the conversation. 22 agent tools for booting, building, driving the UI by accessibility identity, OCR text or list rows, plus a streaming sidebar panel you can tap and drag on. |
| [ZSeven-W/dsh-noema](https://github.com/ZSeven-W/dsh-noema) | Noema long-term memory plugin for DSH: durable, inspectable agent memory with recall tools and a settings page. |
| [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) | The world's first open-source AI-native vector design tool and the first to feature concurrent Agent Teams. Design-as-Code. Turn prompts into UI directly on the live canvas. A modern alternative to Pencil. |
| [zuorn/Tydora](https://github.com/zuorn/Tydora) | Let Your Ideas Flow — Tydora is a modern desktop Markdown editor combining WYSIWYG editing, bidirectional links, mind maps, and an infinite canvas — empowering deep thinking and effortless expression. |
| [Zzzzkd/dsh-prompt-rail](https://github.com/Zzzzkd/dsh-prompt-rail) | Prompt Rail 是 DeepSeek Harness Web 会话页的紧凑纵向提示词快速跳转条。每一条横杠对应一条当前已加载的普通用户提示词。悬停或键盘聚焦会展示预览；点击会滚动跳转到对应提示词。 |

---
*Generated 2026-08-24T09:25:21Z*