<div align="center">

# Awesome DeepSeek Harness (dsh)

**万物皆可插件。Everything is a Plugin.**

面向 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)(`dsh`)生态的精选项目合集——插件、工具、技能与资源。dsh 是 DeepSeek AI 开源的 agent harness,基于 [Cordis](https://github.com/cordiverse/cordis) 构建。

[English](README.md) | 中文

[浏览可搜索的插件目录](https://awesome-deepseekharness.github.io/awesome-deepseek-harness/zh/) · [English site](https://awesome-deepseekharness.github.io/awesome-deepseek-harness/)

[官方仓库](https://github.com/deepseek-ai/deepseek-harness) · [官方网站](https://deepseek.com/harness) · [Discord](https://discord.gg/Ycq5dCaS4) · [官方讨论区](https://github.com/deepseek-ai/deepseek-harness/discussions) · [dsh-plugin 话题](https://github.com/topics/dsh-plugin) · [官方动态跟踪](https://github.com/awesome-deepseekharness/deepseek-official-tracker)

</div>

<p align="center">
  <a href="https://github.com/awesome-deepseekharness/awesome-deepseek-harness"><img src="https://img.shields.io/github/stars/awesome-deepseekharness/awesome-deepseek-harness?style=social" alt="GitHub stars"></a>
  <a href="https://github.com/awesome-deepseekharness/awesome-deepseek-harness/fork"><img src="https://img.shields.io/github/forks/awesome-deepseekharness/awesome-deepseek-harness?style=social" alt="GitHub forks"></a>
  <img src="https://img.shields.io/github/last-commit/awesome-deepseekharness/awesome-deepseek-harness" alt="last commit">
  <a href="CONTRIBUTING.zh.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome"></a>
  <a href="https://github.com/topics/dsh-plugin"><img src="https://img.shields.io/badge/topic-dsh--plugin-ff7a45" alt="dsh-plugin topic"></a>
</p>

> ⭐ **这个列表帮你省了 1 小时找插件？点个 Star 吧 — 2 秒钟，却是对所有插件作者最大的支持。**
> 先收藏，下次少找一次。你的 ⭐ 也是社区持续整理这份目录的动力。目前 **43 → 100 颗星是第一里程碑（还差 57）**。想接收仓库动态，请在 GitHub 的 Watch 菜单中选择通知类型。
>
> **把好项目分享出去：** 你做/喜欢的插件在列表里？分享原始仓库，让更多人有机会发现它。[一键分享到 X](https://twitter.com/intent/tweet?text=Awesome%20DeepSeek%20Harness%20%E2%80%94%20%E4%B8%87%E7%89%A9%E7%9A%86%E5%8F%AF%E6%8F%92%E4%BB%B6%20%E2%9A%A1%20%E7%B2%BE%E9%80%89%20dsh%20%E6%8F%92%E4%BB%B6%E3%80%81%E5%B7%A5%E5%85%B7%E4%B8%8E%E6%8A%80%E8%83%BD&url=https://github.com/awesome-deepseekharness/awesome-deepseek-harness&hashtags=dsh,deepseek) · [分享到 Reddit](https://www.reddit.com/submit?url=https://github.com/awesome-deepseekharness/awesome-deepseek-harness&title=Awesome%20DeepSeek%20Harness%20%E2%80%94%20%E4%B8%87%E7%89%A9%E7%9A%86%E5%8F%AF%E6%8F%92%E4%BB%B6%E7%B2%BE%E9%80%89) · [去 Discord 讨论](https://discord.gg/Ycq5dCaS4) · [复制链接](https://github.com/awesome-deepseekharness/awesome-deepseek-harness)
>
> *小提示：配上动图/演示的 README 往往更容易被关注。给仓库打上 `dsh-plugin` 便于被发现，Star 本列表也方便下次找到它。*

## 什么是 dsh?

这是独立的社区维护目录，不是 DeepSeek 官方产品。可以从[可搜索的目录网站](https://awesome-deepseekharness.github.io/awesome-deepseek-harness/zh/)开始：选择分类、对比项目说明，再打开原始仓库查看安装方法与兼容性要求。结构化内容可通过 [catalog.json](https://awesome-deepseekharness.github.io/awesome-deepseek-harness/catalog.json) 和 [llms.txt](https://awesome-deepseekharness.github.io/awesome-deepseek-harness/llms.txt) 获取。

DeepSeek Harness 是 DeepSeek AI 开源的 agent harness。它的核心哲学是 **everything is a plugin(万物皆可插件)**:模型适配器、工具注册表、会话日志、权限模型,甚至 agent loop 本身都是可替换的插件,「没有需要打补丁的特权核心」。运行时基于 [Cordis](https://github.com/cordiverse/cordis)(时空可组合性元框架)构建。

| 模式 | 说明 |
| --- | --- |
| **Standard** | 完整编码 agent:文件编辑、shell、文件/网页搜索、skills、规划、目标、子代理、工作流 |
| **Code** | Standard 全部能力 + 通过 Code Mode SDK 以 TypeScript 程序组合多步操作 |
| **Minimal** | 双工具编码 agent(持久 bash + str_replace_editor),用于模型基准评测 |
| **Creator** | 运行时检查、内存内插件实验、组合新模式,用于编写自定义 agent 预设 |

> ⚠️ **开发者预览版**:官方明确警告将有破坏性兼容变更,API 与插件契约可能会变化。

---

## 📦 插件(核心内容)

> 想上架自己的插件?给仓库打上 [`dsh-plugin`](https://github.com/topics/dsh-plugin) 话题标签即可被发现。

### 🛍️ 插件市场与发现

| 项目 | 说明 | ⭐ |
| --- | --- | --- |
| [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) | DSH 内置插件市场:浏览、搜索、一键安装 | 3887 |
| [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) | 在 DSH Web GUI 中一键浏览、安装与更新全部 GitHub `dsh-plugin` 插件 | 165 |
| [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) | 帮 DSH 搜索、安装并验证插件的 Skill | 172 |
| [AdamPlatin123/dsh-plugin-radar](https://github.com/AdamPlatin123/dsh-plugin-radar) | 自动扫描 dsh 插件候选的前部索引仓库(Radar) | 1492 |
| [LaplaceYoung/oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) | 700+ 插件,只通过扩展接缝注册,不改 agent-loop 骨架 | 58 |

### 👁️ 视觉插件

让纯文本模型「看得见」——DSH 生态最热门的品类。

| 项目 | 说明 | ⭐ |
| --- | --- | --- |
| [liustack/modlens](https://github.com/liustack/modlens) | 全网第一个 DSH 视觉插件:粘贴图片即得结构化 JSON 证据(OCR、版面、语义) | 3962 |
| [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | 带意图的图片问答、长截图 OCR、UI 还原、grounding、pixel diff、Artifacts、Web UI | 880 |
| [Anionex/agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) | 纯文本模型的视觉工具箱与技能:多图理解、图片问答、前端 UI 还原、GUI 自动化 | 1202 |
| [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | 内置免费视觉链(无需 key)+ 像素级视觉工具,一键安装,无需 Python | 1099 |
| [QwenLM/Qwen-MM-Plugins](https://github.com/QwenLM/Qwen-MM-Plugins) | 让任意 agent harness 具备多模态能力(跨 harness) | 2817 |

### 🌐 Web 与浏览器

| 项目 | 说明 | ⭐ |
| --- | --- | --- |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) | Agent 工具目录：按任务检索约 2600 个外部接口（SEO/富化/抓取），查看价格后直接调用 | 1400 |
| [liustack/modsearch](https://github.com/liustack/modsearch) | DSH 的 web 插件:问网页或 X,拿回结构化 JSON 证据(搜索、抓取、引用) | 478 |
| [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) | Chrome 侧边栏扩展,让 DSH 直接操控浏览器——无需视觉能力 | 648 |
| [taxueseek/argo](https://github.com/taxueseek/argo) | 为 agent 打造的搜索工具:中/英/学术/代码/购物/金融/新闻/百科 | 123 |
| [CorsenAI/deepseek-harness-connector](https://github.com/CorsenAI/deepseek-harness-connector) | Chrome 扩展 + 本地 companion 插件：让一个精确的 DSH 会话只读取和操作你明确附加的 Chrome 标签页（在你自己已登录的配置文件里）——21 个浏览器动作，敏感字段在页面内先脱敏，仅走 127.0.0.1；通过 `dsh plugin --profile web add` 从 Release tarball 安装 | 0 |

### 🧠 记忆插件

| 项目 | 说明 | ⭐ |
| --- | --- | --- |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking/tree/main/examples/dsh-memory-plugin) | 面向 DSH 的 OpenViking 记忆与上下文插件：pre-step 自动召回与画像注入、会话捕获、`viking://` 防护及 recall/write 记忆工具 | 37172 |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight/tree/main/hindsight-integrations/coding-agents) | 会学习的 Agent 长期记忆：自动召回/沉淀项目记忆、知识页、深度反思、按仓库隔离 | 23595 |
| [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) | 上下文洞察面板：仪表盘 + `/context` 命令 + 浏览器，管理分类组成、演进趋势与压缩/注入事件 | 1375 |
| [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | 跨会话长期记忆 + 后台自我进化:五轨记忆、git 分支感知、技能自我进化、四轨待办 | 305 |
| [adoresever/graph-memory](https://github.com/adoresever/graph-memory) | 知识图谱记忆:从对话抽取三元组,上下文压缩 75%,跨会话经验复用 | 620 |
| [mnemon-dev/mnemon](https://github.com/mnemon-dev/mnemon) | LLM 监督的持久记忆:图召回、跨会话知识,单二进制,兼容 DSH/Claude Code/OpenClaw | 574 |
| [tinqiao-oss/engramory](https://github.com/tinqiao-oss/engramory) | 可移植的 agent 记忆协议:常驻规则加载、策展纪律 + 参考规范 | 190 |
| [text2future/flowix](https://github.com/text2future/flowix) | 给你笔记、给 agent 记忆 | 413 |
| [Ariestar/sivtr](https://github.com/Ariestar/sivtr) | 人与 agent 的统一记忆工作区 | 269 |
| [hardes11/dsh-squeeze-command](https://github.com/hardes11/dsh-squeeze-command) | 手动、面向预算的上下文压缩:对话模型圈定要总结的范围,廉价 flash 级路由生成检查点摘要;`dsh plugin add dsh-squeeze-command` | 1 |
| [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) | dsh 有界分层、审批门控、可审计的跨会话记忆，支持冻结快照注入（`dsh plugin --profile web add dsh-memento` 安装） | 90 |
| [Sev7eEn7/dsh-sieve](https://github.com/Sev7eEn7/dsh-sieve) | 为 DSH 0.2.1-alpha.1 过滤工具输出、裁剪陈旧上下文并按需披露技能。 安装：`dsh plugin --profile headless add dsh-sieve@0.1.0`。 | 64 |
| [lo2589/knowledge_database](https://github.com/lo2589/knowledge_database) | 在对话里点一句就成为右栏知识树里的一张卡；Ctrl 拖框把多句合成一张卡，每张卡都能跳回原句，整棵树可导出 Markdown、Mermaid、JSON、PDF。需先按仓库说明跑 `setup.sh`（Python 3.11 + FastNode）。安装：`./setup.sh` 后跑 `./dsh-install.sh`。 | 0 |
| [OakcoderX/solopup-memory](https://github.com/OakcoderX/solopup-memory) | 面向DSH的MIT文字记忆公开测试版，保留原话来源、项目范围与修订历史；`dsh plugin --profile desktop add solopup-memory@0.21.0-beta.2 --ignore-scripts` | 1 |
| [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | 任务状态护照 + 离线 TaskPack 交接：有版本的任务状态留在本地，交接时打包成单文件离线包，另一台机器或另一个 harness 直接落地，机器级事实在打包时降级为未证；安装 `dsh plugin --profile web add task-passport@0.3.2` | 10 |

### 🎨 Web UI、皮肤与桌面宠物

| 项目 | 说明 | ⭐ |
| --- | --- | --- |
| [zhu1090093659/dsh-web](https://github.com/zhu1090093659/dsh-web) | DSH Web UI 插件与皮肤合集:任务看板、git 图、右侧面板、移动端 UI、宠物、实时 token 统计、皮肤中心 | 9270 |
| [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | DSH Web「鲸鱼娘」皮肤系列(深海女仆工坊) | 2077 |
| [vlln/whale-girl](https://github.com/vlln/whale-girl) | DSH Web GUI 桌面宠物插件(QQ 宠物形态):可拖拽/投喂/玩耍 | 322 |
| [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | 侧边栏完整工作台:文件渲染编辑/终端/Git/子代理,支持三方扩展页面 | 3593 |
| [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | 选中批注插件:选文字→批注→随消息发送 | 116 |
| [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | 把 DSH 变成 2005 年门户网站:恶搞广告、小游戏与弹窗 | 624 |
| [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | 在 DSH 对话中生成交互式可视化卡片 | 258 |
| [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | GenUI:内联交互式 UI 组件(layout、图表、表单、mermaid、3D)+ 动作事件回环 | 450 |
| [pengyue-polaron/deepseek-harness-genui](https://github.com/pengyue-polaron/deepseek-harness-genui) | Code-first React+TS 任务应用：内联/Canvas/全屏/localhost 渲染，交互状态可供后续轮次读取 | 109 |
| [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | OpenPencil 设计预览与编辑插件 | 169 |
| [zizaiwo/dsh_plugins](https://github.com/zizaiwo/dsh_plugins) | dsh 侧边栏会话分类插件：零配置接管官方工作区浏览器，按自定义分类文件夹管理会话（拖拽归类/分类内建会话/每工作区独立） | 0 |
| [lcsdg/dsh-quick-prompts](https://github.com/lcsdg/dsh-quick-prompts) | 输入框上方的快捷指令胶囊栏：按分类存常用 prompt，橙色高亮占位符，两栏管理，分类记忆按会话独立持久化 | 1 |
| [Moonshile/moonshile-dsh-plugins](https://github.com/Moonshile/moonshile-dsh-plugins) | 侧边栏工作区每日按最近活动排序一次，当天顺序稳定 | 2 |
| [weibaohui/dsh-gaokao](https://github.com/weibaohui/dsh-gaokao) | 梦回高三：桌面小黑板高考倒计时（双击收成竖条），AI 干活时随机抽背知识点卡；`dsh plugin add @weibaohui/dsh-gaokao` 即装 | 2 |
| [weibaohui/dsh-fireworks](https://github.com/weibaohui/dsh-fireworks) | 烟花庆祝引擎：agent 编程时在对话窗口上空放烟花（开场/回合/工具/里程碑/收工/失败各成卡组），token 用量决定大小与绚烂程度；`dsh plugin add @weibaohui/dsh-fireworks` 即装 | 0 |
| [12we21/cute-fat-fish-pet](https://github.com/12we21/cute-fat-fish-pet) | DSH Web UI 的 Q 版蓝发小女仆桌宠：106 个手绘透明动画、桌面漫步、本地 Ollama 或 DSH 在线模型陪聊，可选看屏幕吐槽（`dsh plugin add github:12we21/cute-fat-fish-pet#path:/src` 即装） | 1 |
| [VictorKozachek/dsh-user-code-block](https://github.com/VictorKozachek/dsh-user-code-block) | DSH 用户消息中的代码块：语法高亮、复制按钮与单色模式，`dsh plugin --profile desktop add dsh-user-code-block` 即装 | 1 |
| [weibaohui/dsh-sidebar-tidy](https://github.com/weibaohui/dsh-sidebar-tidy) | 侧栏收纳：把「新会话」下方被各插件塞满的入口行——全局面板行、插件入口行（自家/第三方一律识别）、底部入口——统统收进一个菜单按钮，点开二级菜单原样触发各入口；想常驻的加名称白名单即可，侧栏折叠成窄轨时按钮自动变纯图标。`dsh plugin add @weibaohui/dsh-sidebar-tidy` 即装 | 0 |
| [mengge237/dsh-composer-ease](https://github.com/mengge237/dsh-composer-ease) | dsh-composer-ease：给 DSH Web 输入框加一个补全提示框，另带括号与引号配对、选中环绕；除此之外不改界面 | 0 |
| [dongsheng123132/dsh-move-up](https://github.com/dongsheng123132/dsh-move-up) | 工作区菜单里加一项「移到最上面」，经宿主 workspace 注册表只调整一次顺序——没有收藏、固定置顶或自动重排；通过 `dsh plugin --profile desktop add dsh-move-up@0.3.0` 安装 | 0 |

### 🖥️ TUI 与桌面端

| 项目 | 说明 | ⭐ |
| --- | --- | --- |
| [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Claude Code 风格全屏交互终端插件:像素鲸鱼顶栏、思考流式展开、双击 Esc 回滚、TPS 仪表 | 3030 |
| [shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) | 手机远程访问 Web 界面：扫码直连局域网/公网隧道，实时同屏、移动端适配 | 1123 |
| [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | 交互式终端 UI + harness 工作流:增加 TDD、证据门、视觉图像模块 | 276 |
| [anywhere-labs/dsh-desktop](https://github.com/anywhere-labs/dsh-desktop) | 为 DSH 生态打造的现代化桌面端体验 | 32280 |
| [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | DSH 社区发行版:TUI、桌面端与 Web UI 三种形态统一,分层安装 | 315 |
| [vibeinging/deepseek-harness-desktop-app](https://github.com/vibeinging/deepseek-harness-desktop-app) | 本地 AI 桌面工作区:Sessions、项目、文件、网页研究、插件、Office 工件 | 584 |
| [ChisaAlter/WhaleIsle](https://github.com/ChisaAlter/WhaleIsle) | DSH Web UI 的 Electron 桌面壳,支持主题与背景图 | 200 |
| [Ruler4396/dsh-launcher](https://github.com/Ruler4396/dsh-launcher) | Windows 轻量启动器:开机静默自启 + WebView2 窗口 | 206 |
| [Jensen-Yao/dsh-plus-plus](https://github.com/Jensen-Yao/dsh-plus-plus) | Windows WPF 桌面控制台：一键启停 dsh web、手机入口（同一 Wi-Fi/自定义域名/Tailscale）、防火墙放行、存储位置管理与实时日志，深浅双主题 | 1 |

### 🧩 工具、工作流与预设

| 项目 | 说明 | ⭐ |
| --- | --- | --- |
| [dryw/dsh-egm](https://github.com/dryw/dsh-egm) | 面向 DSH 的 Elephant-Goldfish Model：由具备项目上下文的 Elephant 起草设计规范，再由全新上下文、只读权限的 Goldfish 审查设计。安装：`dsh plugin --profile web add dsh-egm`（npm：`dsh-egm`）。 | 6 |
| [flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) | DSH 的 SSH 远程工作区：多主机项目并行、文件浏览与编辑、递归搜索、终端、Git 差异，以及 Agent 远程编辑、构建与测试；可选 IDE 布局。 | 286 |
| [leoan698-tom/dsh-sessivra](https://github.com/leoan698-tom/dsh-sessivra) | Sessivra：拖拽 DSH 会话自由分屏、调宽，拖入输入框插入原生 @ 引用；收回子会话产物，验收后继续任务。预发布；Windows / DSH 0.2.1-rc.5。安装：`dsh plugin --profile web add dsh-plugin-sessivra@0.3.0-dev.26`。 | 1 |
| [Q00/ouroboros](https://github.com/Q00/ouroboros/tree/main/integrations/dsh-plugin) | 纯配置包，经 MCP 挂载 Ouroboros，提供 36 个访谈/Seed/执行/评估/演化工作流工具 | 5839 |
| [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) | 9 渠道 IM 接入：飞书/微信/钉钉/企微/QQ/Slack/TG/Discord/WhatsApp，扫码或凭据接入 | 1307 |
| [zh667/TokenLedger](https://github.com/zh667/TokenLedger) | 侧边栏用量面板：按中转站归因 Token，今日/本月/累计+热力图，支持 New API/Sub2API/官方余额 | 199 |
| [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | 让 AI 帮你连数据库、写 SQL | 194 |
| [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | 把 13 家 coding agent 的对话历史导入为可续聊的 DSH 会话，支持导出回 Claude Code | 162 |
| [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) | 多渠道通知与手机控制：一个 `notify()` 接 27 渠道，事件推送、手机审批/提问 | 104 |
| [zhengjy01/dsh-wps](https://github.com/zhengjy01/dsh-wps) | 经官方金山 SkillHub MCP 的 WPS / 金山文档云文档集成（mcp__wps__*）。 | 1 |
| [xiaobright/dsh-anchored-standard](https://github.com/xiaobright/dsh-anchored-standard) | 两阶段 DSH 预设:先 Minimal 对齐启动,再补全 Standard 工具 | 3817 |
| [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | 把 DSH 一次性多 Agent 调度升级为可生成/保存/治理/观察/恢复的 Workflow 层 | 123 |
| [jerryxff26-alt/delivery-board](https://github.com/jerryxff26-alt/delivery-board) | 仓内交付看板（人与 Agent 共用）：阶段流水线、交接留痕、软 WIP、客户周报、Timeline；DSH 插件 + 独立 `npx dsh-delivery-board` | 3 |
| [liceses/dsh-gitbash-preset](https://github.com/liceses/dsh-gitbash-preset) | 一键安装「极简模式 (Git Bash)」预设,让 Windows 极简模式真正可用 | 131 |
| [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Codex 风格 `@file` 引用:在 composer 中搜索工作区文件并附加内容 | 512 |
| [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | 从 Web GUI 直接在 VS Code 打开 DSH 工作区目录 | 53 |
| [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | 回合完成桌面通知,支持按结果类型与关键词规则 | 84 |
| [radres/dsh-plugin-call-me](https://github.com/radres/dsh-plugin-call-me) | 给你的真实手机打电话：`call_me` / `text_me` 工具，另可在运行结束或等待审批时来电，口头回答转写后回到会话。需要付费的 /call-me 手机应用（iPhone、Android）。安装：`dsh plugin --profile web add github:radres/dsh-plugin-call-me` | 8 |
| [pitetow/dsh-notify-on-complete](https://github.com/pitetow/dsh-notify-on-complete) | 零依赖桌面通知:运行结束/提问/审批时提醒 | 4 |
| [hxyz486/dsh-archived-conversations](https://github.com/hxyz486/dsh-archived-conversations) | 在设置页查看、恢复与删除归档会话 | 6 |
| [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | 对话与代码状态回退,基于持久化 Change Ledger | 115 |
| [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | 自进化插件:session 内热挂载/卸载 Cordis 插件,重启自动恢复 | 11 |
| [Francis-Xavier-code/dsh-balance-plugin](https://github.com/Francis-Xavier-code/dsh-balance-plugin) | DeepSeek 余额监控与用量统计 + 官方充值入口 | 61 |
| [Cassius0924/dsh-usage-dashboard](https://github.com/Cassius0924/dsh-usage-dashboard) | DeepSeek 额度与用量仪表盘 | 9 |
| [dustinmoon78/dsh-usage-stats](https://github.com/dustinmoon78/dsh-usage-stats) | DSH 用量统计：聚合会话 token 用量（总览/按模型/按天）+ 单价费用估算 + 设置页展示 | 0 |
| [null5069/dsh-better-stats](https://github.com/null5069/dsh-better-stats) | DSH Web 输入框增强统计条：官方 CNY 计价（峰谷时段、分模型）、实时结算、LLM/工具实时计时、余额直连、预算预警 | 1 |
| [WinnieJQ/dsh-conversation-cost](https://github.com/WinnieJQ/dsh-conversation-cost) | 会话标题栏的按对话费用徽章：按官方峰谷单价逐步计价，悬停卡片实时显示 ¥/$ 与 token 明细；`dsh plugin --profile web add dsh-conversation-cost` 安装 | 0 |
| [devacc8/dsh-billing-badge](https://github.com/devacc8/dsh-billing-badge) | 输入框统计行里、原生缓存命中读数之后的计费时段与账户余额：高峰/非高峰圆点与切换倒计时，点击展开面板，按接口返回的货币拆分总额、赠送与充值；`dsh plugin --profile web add dsh-billing-badge` | 0 |
| [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams 多代理协作插件 | 1633 |
| [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) | Skill 驱动的 Harness/Loop 工程工作流 Agent 插件 | 59 |
| [weshopai/weshop-dsh-plugin](https://github.com/weshopai/weshop-dsh-plugin) | 原生 WeShop 插件:无限画布 + 无限创意技能 | 12 |
| [morluto/jacobian](https://github.com/morluto/jacobian) | 纯数学工具:搜索例子与反例、精确计算、独立验证 | 192 |
| [thedeveloper256/dsh-model-router](https://github.com/thedeveloper256/dsh-model-router) | 基于角色的模型路由:规划者(根 agent)跑 deepseek-v4-pro,委派执行子 agent 跑 deepseek-v4-flash;附带 prompt 段与 `pro-flash-routing` 技能 | 2 |
| [nautahakk/jev-codex-router](https://github.com/nautahakk/jev-codex-router) | 在 DSH 中通过 Jev 自动选择 Codex 模型和推理强度，支持模型上限与高强度审批阈值 | 0 |
| [zhengjy01/dsh-task-dispatcher](https://github.com/zhengjy01/dsh-task-dispatcher) | 滴答清单每日任务分发器：定时拉取今日到期任务、变更感知 flomo+macOS 通知、可选无头会话自动执行、工作区选择、Web 任务看板 | 1 |
| [zhengjy01/dsh-vercel-mcp](https://github.com/zhengjy01/dsh-vercel-mcp) | Vercel MCP 连接：官方 OAuth 2.0 流程对接 mcp.vercel.com，暴露 Vercel 平台工具 mcp__vercel__* | 0 |
| [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) | dsh 第二模型审批：只读评审子代理在动作执行前返回带理由的结构化 allow/deny 裁决，默认故障关闭（`dsh plugin --profile web add dsh-auto-review` 安装） | 169 |
| [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) | dsh 声明式权限规则：按 allow/deny 规则门控工具、路径与命令（`dsh plugin --profile web add dsh-permission-rules` 安装） | 115 |
| [PerryLink/dsh-reach](https://github.com/PerryLink/dsh-reach) | 将 DSH 的审批卡与提问卡推送到 IM 渠道（先微信）并在聊天中作答，带逐渠道安全与开放推送服务 | 0 |
| [PerryLink/dsh-ticktick](https://github.com/PerryLink/dsh-ticktick) | TickTick（滴答清单）任务桥：会话页头部任务面板与精选代理工具，走官方 TickTick MCP 端点 | 0 |
| [zhengjy01/dsh-qqbot-panel](https://github.com/zhengjy01/dsh-qqbot-panel) | 官方 @tencent-connect/dsh-qqbot 插件的可视化 Web 设置面板（凭据、访问模式/白名单、工作区选择、扫码绑定）。 | 0 |
| [zhengjy01/dsh-updater](https://github.com/zhengjy01/dsh-updater) | 跟踪 DSH 官方版本并一键更新：npm dist-tags + GitHub 更新说明、逐版本更新点与分级风险清单，安装交给分离助手做 rename 原子备份、校验与失败自动回滚（`dsh plugin --profile web add @zhengjunyao/dsh-updater`） | 0 |
| [zhengjy01/dsh-restart](https://github.com/zhengjy01/dsh-restart) | DeepSeek Harness 一键重启：网页重启按钮与 `dsh_restart` Agent 工具把重启交给独立 helper，页面自动重连，新宿主启动失败时由恢复控制台显示启动错误（`dsh plugin --profile web add @zhengjunyao/dsh-restart`） | 0 |
| [zhengjy01/dsh-zsxq](https://github.com/zhengjy01/dsh-zsxq) | 知识星球（zsxq）集成：基于非官方 Web API 的 Cookie / 扫码登录，提供星球列表、主题列表、主题详情、搜索、发布、评论、点赞等 agent 工具，附 Web 设置面板。 | 0 |
| [zhengjy01/dsh-skill-recommender](https://github.com/zhengjy01/dsh-skill-recommender) | 会话画像驱动的开源 skill 推荐器：扫描本地 DSH / Codex / Claude 会话，构建加权画像（主题 / 工具 / 任务 / 项目），按可调匹配指数推荐合适的 skill。 | 0 |
| [zhengjy01/dsh-goofish-mcp](https://github.com/zhengjy01/dsh-goofish-mcp) | 闲鱼（Goofish）只读监控：驱动 goofish-cli MCP 服务器，暴露搜索、商品详情、在售列表、会话历史、类目识别等只读工具，写操作全部过滤。 | 0 |
| [zhengjy01/dsh-npm](https://github.com/zhengjy01/dsh-npm) | npm registry 管理：查询包信息、列出全部版本、搜索包，以及带可选 token 注入的 publish / deprecate，附 Web 设置面板。 | 0 |
| [zhengjy01/dsh-backup-migrator](https://github.com/zhengjy01/dsh-backup-migrator) | 插件环境备份与迁移：把各 profile 的插件清单、插件配置与本地源插件 tgz 打包备份进 git 仓库，换新机器一键还原。 | 0 |
| [zhengjy01/dsh-feishu-mcp](https://github.com/zhengjy01/dsh-feishu-mcp) | 飞书（Lark）OpenAPI MCP 连接：桥接官方 @larksuiteoapi/lark-mcp，以 mcp__feishu__* 暴露 IM、多维表格、云文档、日历、云盘 API，支持 OAuth 用户令牌。 | 0 |
| [zhengjy01/dsh-aliyun-mcp](https://github.com/zhengjy01/dsh-aliyun-mcp) | 阿里云 OpenAPI MCP 连接：通过官方 OpenAPI MCP 代理的静态凭据模式，以 mcp__aliyun__* 暴露 ECS / OSS / DNS / 函数计算等 API。 | 0 |
| [hanshengcc/callai-seo-mcp](https://github.com/hanshengcc/callai-seo-mcp) | 通过 CallAI MCP 服务器为 DSH 提供实时 SEO 数据：Google/Bing SERP（含 AI Overview 引用源）、关键词搜索量与难度、竞品排名与关键词差距、外链、页面体检，以 mcp__callai__* 暴露并附带 SEO 技能；需按量计费的 API key（`dsh plugin --profile web add @callaiapi/seo`） | 0 |
| [weibaohui/dsh-flow](https://github.com/weibaohui/dsh-flow) | 执行流程图：把会话执行过程画成纵向节点流（回合/用户/助手/工具/审批/重试/压缩），SSE 实时追加、自动跟随滚动；`dsh plugin add @weibaohui/dsh-flow` 即装 | 0 |
| [yeruizhi/dsh-ask-user-timeout](https://github.com/yeruizhi/dsh-ask-user-timeout) | 给 `ask_user_question` 加有界等待：无人渲染提问时（页签关闭 / 切后台 / mux 掉线），到可配置超时（默认 10 分钟）后返回结构化、模型可见的 `ASK_TIMEOUT`，循环不再无限“进行中”；复用官方 `timeout-policy` 守卫的 `deadline()` 原语（`dsh plugin --profile web add git+https://github.com/yeruizhi/dsh-ask-user-timeout.git`） | 0 |
| [zhengjy01/dsh-wechat-clawbot](https://github.com/zhengjy01/dsh-wechat-clawbot) | 微信 ClawBot 桥接：扫码登录悬浮球把消息桥接到 agent 会话，复用 context_token 支持窗口外主动推送（lubaiUwU/DSH-WeChatClawBot 的维护分支；`dsh plugin --profile web add dsh-wechat-clawbot`）。 | 0 |
| [0xRabit/dsh-crypto-portfolio](https://github.com/0xRabit/dsh-crypto-portfolio) | 自托管加密资产仪表盘：BTC、EVM（73 条链）、Solana、狗狗币、艾达币、Hyperliquid、五家交易所与代币化股票统一视图，含可分享 PNG 卡片、可调阈值的资产健康度报告、逐数据源连通性测试与零依赖趋势图（`dsh plugin --profile web add dsh-crypto-portfolio` 安装） | 2 |
| [shiyan688/dsh-novel-craft](https://github.com/shiyan688/dsh-novel-craft) | 小说创作工作台：读候选稿点 👍/👎，标注被压成可复用的写作规律，只有规律进写稿上下文（`dsh plugin --profile web add dsh-novel-craft` 安装） | 5 |
| [IORT-DOIT/dsh-meeting-room](https://github.com/IORT-DOIT/dsh-meeting-room) | DSH 会议室：多个会话（AI 或人）加入同一房间、围着「会议目标」讨论，内置记录员读完整记录起草《会议结果》供你审核发布，与会者写的文件自动收进房间「附件/」，工具授权可在会议室面板里直接批（13 个 `room_*` 工具、8 个配置键；安装：`git clone` 后 `install_bundle link:<路径>`） | 1 |
| [ff66ccff/dsh-ATN](https://github.com/ff66ccff/dsh-ATN) | 面向 DeepSeek Harness 的自适应拓扑多智能体预设，提供点对点通信、共享白板、任务交接和实时网络可视化。 Install: `dsh plugin --profile web add dsh-atn@0.4.1`. | 2 |
| [lcestou/dsh-oh-my-claude](https://github.com/lcestou/dsh-oh-my-claude) | 把已登录的 Claude Code CLI 作为 dsh 原生模型提供方，用订阅额度干活、无需 API key：实时模型列表、按会话恢复、审批中转、图片、记忆/回退/变更面板，以及远程 SSH 主机上的工作区。`dsh plugin --profile web add dsh-oh-my-claude` | 10 |
| [luobosibing2/dsh-jev-plugin](https://github.com/luobosibing2/dsh-jev-plugin) | 原生 DSH 插件：TypeSafe Jev 决策层负责技能/文件筛选、任务监督、工具输出过滤与审批辅助——12 项功能独立配置、默认全部关闭（经 DSH Web 插件管理器用 GitHub 地址安装） | 203 |
| [klarkxy/dsh-plugins#dsh-dev-index](https://github.com/klarkxy/dsh-plugins/tree/main/plugins/dsh-dev-index) | 在 DSH 插件页阅读官方文档；创造模式检索文档、查询插件 npm 元数据。安装：`dsh plugin --profile web add @klarkxy/dsh-dev-index`。 | 7 |
| [lo2589/deepseek-harness-media](https://github.com/lo2589/deepseek-harness-media) | DSH 网页版输入框旁的一排按钮：不改 YAML 切换模型提供方（GLM、MiniMax、OpenAI、Claude、本地 Ollama），截图，上传图片/SVG/文本文件，把图片交给视觉模型读，另有会话媒体面板和历史搜索。安装：`dsh plugin --profile web add file:./dsh-provider-quick-config`。 | 4 |
| [skyjjgw/dsh-version-guard](https://github.com/skyjjgw/dsh-version-guard) | 记录插件版本与 profile 配置快照，在 DSH 无法启动时通过独立恢复页回退到已知可用配置。 | 1 |
| [weibaohui/dsh-favorites](https://github.com/weibaohui/dsh-favorites) | 会话收藏夹：把任意会话收藏进浏览器收藏夹式的管理面板——左侧会话行一键收藏/星标，主面板支持文件夹分门别类、备注、自定义显示名、一键继续会话、Fork 新会话、会话基本统计，外加一张清晰展示会话派生关系的 fork 关系图。`dsh plugin add @weibaohui/dsh-favorites` 即装 | 1 |
| [JeffTsuiCUG/dsh-connect-minimaxcode](https://github.com/JeffTsuiCUG/dsh-connect-minimaxcode) | 把本机已登录的 MiniMax Code 桌面 App（国内版）接入 DSH，也可用插件自带的 OAuth 2.0 设备码登录（PKCE，插件不接触密码）：Anthropic Messages 兼容、模型目录实时拉取、每日签到，积分余额与到期信息跟随所选模型显示在输入框工具行，并保留在插件页面。非官方插件，依赖 MiniMax 客户端的非公开接口，仅供学习研究。安装：`dsh plugin --profile desktop add dsh-connect-minimaxcode` | 0 |
| [caishengshuo/beforewrite](https://github.com/caishengshuo/beforewrite) | Host 插件：在 agent 覆盖文件之前自动留下上一版，`time_machine` 一条命令列出快照、看 diff、回滚，`rm` 或 `sed -i` 之前也能手动打点。安装：`git clone` 后 `plugin_manager(action="install_bundle", target="<路径>")` | 1 |
| [01men/ybkkasi](https://github.com/01men/ybkkasi) | 自托管 AI 基础设施的资产治理控制台：把 MCP 服务 / Skill / Agent / AI 应用 / 模型渠道 / 存储登记进同一台账，带逐工具权限点、部门 x Agent x Skill 三维成本归因、依赖拓扑与只追加审计日志。以 `web` profile 插件树挂载（29 个插件包、450 条 REST 路由、86 个 MCP 工具，MIT）。安装：`dsh plugin --profile web add github:01men/ybkkasi` | 67 |
| [lengrufeng2008/dsh-science-legion](https://github.com/lengrufeng2008/dsh-science-legion) | DSH 分层多智能体科研战役：8 个技能覆盖数学/物理/天文/工程/生物医药证据，共享黑板、独立验证、群狼/迂回战术、token 闸门、10 道已知答案评测；6-agent pilot 抓到并修正了评测答案键错误（`dsh plugin --profile web add github:lengrufeng2008/dsh-science-legion`） | 0 |
| [lengrufeng2008/dsh-code-intel](https://github.com/lengrufeng2008/dsh-code-intel) | 通过本地 language server 的只读语义代码导航：定义、引用、工作区符号、诊断、hover、rename 预览；6 个原生工具，不用 embedding/托管索引，6/6 测试 | 0 |
| [jjjjjjjjnnjnn/dsh-triage](https://github.com/jjjjjjjjnnjnn/dsh-triage) | 装前判断与事后归因：点名哪一行被准入拒绝、哪个模块 import 失败、哪个能力声明了却从未注册；独立探针带可复算证据。只读，不做装/卸，不作安全背书 | 1 |
| [tommy00748-tech/dsh-native-notifications](https://github.com/tommy00748-tech/dsh-native-notifications) | 由 DSH 自己弹出的原生桌面通知（待授权、等待作答、任务完成、出错、需要登录），归属 DSH 应用、点击回到会话，提示音可选预设或自定义。安装：`dsh plugin --profile web add github:tommy00748-tech/dsh-native-notifications` | 0 |

### 📚 Skills 与技能包

| 项目 | 说明 | ⭐ |
| --- | --- | --- |
| [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | 数字生命 1.0:将离别化为温暖 Skill | 24710 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | 架构/工作流/时序/数据流/生命周期图:自包含 HTML,带动画与清晰导出 | 61772 |
| [hyhmrright/brooks-lint](https://github.com/hyhmrright/brooks-lint) | 以 12 本经典工程书为基础的 AI 代码审查:衰减风险诊断、6 种分析模式 | 1474 |
| [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) | 让编码 agent 具备架构意识:基线优先、证据验证、漂移检查 | 1185 |
| [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | 设计技能:告别 AI-slop UI,产出可交付的精致前端 | 556 |
| [yogsoth-ai/de-anthropocentric-research-engine](https://github.com/yogsoth-ai/de-anthropocentric-research-engine) | 面向 agent 的研究引擎：给定方向后自行完成文献综合、空白验证、假设形成与实验设计；执行前先审批计划，证据不足时退回文献；纯 markdown | 505 |
| [Minara-AI/minara-skills](https://github.com/Minara-AI/minara-skills) | 交易技能包:让 agent 帮你赚钱 | 345 |
| [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) | HarmonyOS NEXT (API 12+) 开发专家指导 | 347 |
| [alaliqing/claude-paper](https://github.com/alaliqing/claude-paper) | 跨 agent 论文工具:快速摘要、深度学习材料、代码演示、本地阅读器 | 336 |
| [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) | 85 个 SKILL.md 的逆向工程/安全研究技能包(Cordis 插件) | 138 |
| [Lyn-77/ProMentor](https://github.com/Lyn-77/ProMentor) | AI 编程导师:项目架构扫描、阶梯式 Chapter、手写核心逻辑、自动判题 | 74 |
| [Jayden-X-L/forkprobe](https://github.com/Jayden-X-L/forkprobe) | 同一任务对比多个 skill,选出胜者 | 72 |
| [Mikuzjc/dsh-office-for-mso](https://github.com/Mikuzjc/dsh-office-for-mso) | DSH ↔ Microsoft Office 桥接技能：操控已打开的 Word/Excel/PowerPoint（33 动作、AI 编排、Office 插件） | 2 |
| [suyukun/dsh-tech-selection](https://github.com/suyukun/dsh-tech-selection) | 面向任意 AI Agent 的技术选型研究协议（DSH/Claude/Cursor/Codex 通用）：T1-T6 信源分级、质量门禁、量化权衡、可追溯结论 | 0 |
| [morluto/rea](https://github.com/morluto/rea) | 用 agent 逆向任何东西:从应用行为到原生二进制 | 404 |
| [reliable-ly0411/babeldoc-pdf-translate](https://github.com/reliable-ly0411/babeldoc-pdf-translate) | 面向 DSH 的 BabelDOC PDF 翻译技能，同时提供 Codex 插件封装：双语输出、自定义术语及本地排版；安装到 `.dsh/skills/babeldoc-pdf-translate` | 0 |
| [zabuxie/vc-voice-train-skill](https://github.com/zabuxie/vc-voice-train-skill) | RVC 音色训练技能：数据集体检、修复 RVC 20240604 归一化缺陷（静默输出宽带噪声）、客观音质验收（平坦度/谐波/频段）、40k/32k 全流程、云 GPU 训练 SOP | 10 |

### 🚀 集成 DSH 的应用与运行时

| 项目 | 说明 | ⭐ |
| --- | --- | --- |
| [Devin-AXIS/iPolloWork](https://github.com/Devin-AXIS/iPolloWork) | 自进化 agent 运行时 AI 工作区,集成 DSH 子代理委派与双插件生态 | 6007 |
| [whiteguo233/OpenBiliClaw](https://github.com/whiteguo233/OpenBiliClaw) | 本地私有内容发现 Agent:B站/小红书/抖音/YouTube/X/知乎/Reddit/微博(支持 DSH 插件) | 3299 |
| [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | 开源 CMA 兼容 agent 运行时:MCP 工具、沙箱会话、审计回放,含原生 DSH bundle | 645 |
| [hellowind777/helloagents](https://github.com/hellowind777/helloagents) | 自主高级智能伙伴:持续工作直到完成实现与验证 | 705 |
| [yejiming/MuseAI](https://github.com/yejiming/MuseAI) | 创建 AI 角色、进入故事世界(支持 DSH 插件) | 644 |
| [ctxrs/ctx](https://github.com/ctxrs/ctx) | 即时回忆:搜索本机 agent 会话历史——agent 会话版的 git blame | 1107 |
| [strukto-ai/mirage](https://github.com/strukto-ai/mirage) | 业界首个面向 AI agent 的统一虚拟文件系统 | 3629 |
| [junhoyeo/tokscale](https://github.com/junhoyeo/tokscale) | 终端跟踪 AI 编码 agent 的 token 用量,全球排行榜 | 5428 |
| [xiufengsun/TokenTracker](https://github.com/xiufengsun/TokenTracker) | 31 种编码工具的本地 token 与成本跟踪(含 DSH),有原生应用 | 1606 |
| [JingbiaoMei/Tokdash](https://github.com/JingbiaoMei/Tokdash) | Sessions 与配额的可视化分析:热力图、成本追踪 | 72 |
| [EthanYoQ/Invoice-Downloader](https://github.com/EthanYoQ/Invoice-Downloader) | 用于本地 IMAP 发票下载、OCR 识别、归档和 Excel 报销汇总的 DSH bundle | 415 |
| [SuperJJ007/papermachine](https://github.com/SuperJJ007/papermachine) | 基于 DeepSeek Harness 的桌面数据分析应用，在本机运行 Python 和 R，支持检查执行步骤及追溯图表和表格的来源。 | 59 |
| [pavel-logachev/dsh-mobile](https://github.com/pavel-logachev/dsh-mobile) | DSH 原生 Android 应用 + 宿主插件：手机查看所有项目会话、发送照片/文件、引导智能体、回答其提问；扫码配对，Wi-Fi/Tailscale，无需云端 | 1 |

---

## 🧱 核心基础设施

| 项目 | 说明 | ⭐ |
| --- | --- | --- |
| [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | 官方仓库:Everything is a Plugin | 104.5k |
| [cordiverse/cordis](https://github.com/cordiverse/cordis) | 时空可组合性元框架——DSH 背后的插件运行时 | 8488 |
| [cordiverse/paper](https://github.com/cordiverse/paper) | *A Programming Paradigm for Spatiotemporal Composability*(Cordis 设计论文) | — |
| [@deepseek-ai/dsh](https://www.npmjs.com/package/@deepseek-ai/dsh) | 官方 npm 包:`npx @deepseek-ai/dsh web` 快速启动 | — |
| [create-dsh-plugin](https://www.npmjs.com/package/create-dsh-plugin) | 秒级脚手架 DSH 插件(tool/events/webui 模板 + 内置验证) | — |

## 🎓 学习资源

| 项目 | 说明 | ⭐ |
| --- | --- | --- |
| [Electricitysheep/dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) | DSH 从 0 到 1 深度手册:安装/插件开发/性能调优/实测案例(中英 PDF) | 776 |
| [pingfanfan/hello-dsh](https://github.com/pingfanfan/hello-dsh) | 零基础插件开发教程「万物皆可插件」:含 22 个中文技能实例 | 94 |
| [omdsh-dev/dsh-plugin-dev](https://github.com/omdsh-dev/dsh-plugin-dev) | DSH 插件开发踩坑档案:cordis 双副本、tsconfig 三件套、Windows junction、多帧 zstd 等实测记录 | 15 |
| [hikariming/dshfind](https://github.com/hikariming/dshfind) | DSH 原理学习、插件市场与最佳实践 | 258 |
| [DeepWiki: deepseek-harness](https://deepwiki.com/deepseek-ai/deepseek-harness) | 官方仓库的 DeepWiki 自动文档 | — |
| [deepseekagent.io 指南](https://deepseekagent.io/guides/deepseek-harness) | dsh 安装与架构指南(社区) | — |
| [RaulLazaro/dsh-server-setup](https://github.com/RaulLazaro/dsh-server-setup) | VPS 生产部署:systemd、dsh-proxy 插件、Basic Auth、Pangolin 隧道、23 插件栈 | 1 |
| [dseek.app dsh CLI 指南](https://dseek.app/cli) | 非官方 dsh 速查：`npx @deepseek-ai/dsh web`、Node.js 版本要求、headless profile 与插件命令，来源为官方仓库与 npm 页面(社区) | — |
| [DSH Learn](https://dshlearn.com) | 英文 dsh 学习站：入门指南、MCP 配置、插件安装、社区扩展目录，以及版本/新闻跟踪，内容标注来源(社区) | — |

**官方文档:** [development.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/development.md) · [architecture.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md) · [cordis-primer](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/cordis-primer.md) · [cordis-tutorial](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/cordis-tutorial/index.md)(7 篇插件教程) · [cookbook](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/cookbook) · [capability-seams](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/capability-seams.md)

## 🤝 社区

- [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions) — 反馈与讨论
- [Discord](https://discord.gg/Ycq5dCaS4) — DeepSeek Harness 官方社区
- [dsh-plugin 话题](https://github.com/topics/dsh-plugin) — 给插件仓库打这个话题以便被发现

## 🔗 友链

- [DeepSeek Official Tracker](https://github.com/awesome-deepseekharness/deepseek-official-tracker) — 自动跟踪 DeepSeek 官方新闻/变更日志/发布/npm 更新(GitHub Actions 每 6 小时)

---

## ⭐ Star 历史与社区增长

<!-- star-history:start -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/star-history/star-history-dark.svg">
  <img alt="Star history" src="assets/star-history/star-history-light.svg">
</picture>
<!-- star-history:end -->

> **社区势头：** 我们正朝 100 Stars 迈进，随着关注度提升，部分受关注的插件 *可能* 会在本列表/站点内获得置顶或额外曝光（例如小范围精选区），不做确定性承诺，仅作为社区偏好的参考以持续优化收录。[去 GitHub 点 Star](https://github.com/awesome-deepseekharness/awesome-deepseek-harness) · [关注 DeepSeek 官方](https://x.com/deepseek_ai) · [加入 Discord](https://discord.gg/Ycq5dCaS4)

<sub>图表由 GitHub Action（`narayann7/star-history-action`）自托管，每 6 小时及有新 Star 时刷新。原 `api.star-history.com/svg` 因 [GitHub stargazers 接口限制](https://star-history.com/blog/github-stargazer-api-restriction) 已失效。若图片为空，请等待首次工作流运行或[查看交互式图表](https://star-history.com/#awesome-deepseekharness/awesome-deepseek-harness&Date)。</sub>

## 贡献

发现了好项目?欢迎[提交 PR](CONTRIBUTING.zh.md)或提 Issue。收录标准:与 DSH 相关、可安装可用、有明确用途。

> 💡 **PR 24h 内合并秘籍：** 严格按新的 [PR 模板](.github/pull_request_template.md) + [贡献指南](CONTRIBUTING.zh.md) 清单来（双语条目、正确分类、已验证安装、`dsh-plugin` topic）。格式规范的 PR 会自动打 label 并优先评审。若 48 小时内无人评审，欢迎在 PR 里友善地 @`hdjekuue` 或其他维护者。

*本列表持续更新。星标数截止 2026-09-14。*

## License

[CC0-1.0](LICENSE) — 公共领域,随意使用。
