<p align="center">
 <a href="README.md">Engli
sh</a>&nbsp;&nbsp;|&nbsp;&nbsp;
 <a href="REA
DME.zh-CN.md">????</a>
</p>

<br>

<d
iv align="center">
 <img width="640" src="ass
ets/banner.jpg" alt="Awesome DeepSeek Harness
">
</div>

# Awesome DeepSeek Harness [![Awes
ome](https://awesome.re/badge.svg)](https://a
wesome.re)

<!-- BANNER: luminous DeepSeek wh
ale with agent-orchestration harness (1280�4
80) -->

<p align="center">
 <a href="#instal
l">Install</a>&nbsp;&nbsp;&nbsp;
 <a href="co
ntributing.md">Contribution guide</a>&nbsp;&n
bsp;&nbsp;
 <a href="https://deepseekdocs.com
/">DeepSeek Docs</a>&nbsp;&nbsp;&nbsp;
 <a hr
ef="https://github.com/topics/dsh-plugin">Pub
lic plugin topic</a>&nbsp;&nbsp;&nbsp;
 <a hr
ef="https://github.com/dsh-external/issues">I
ssues</a>&nbsp;&nbsp;&nbsp;
 <a href="CATALOG
.md">????</a>&nbsp;&nbsp;&nbsp;
</p>


<br>

<p align="center">
 <b>Curated DeepSee
k Harness (DSH) ecosystem: plugins, tools &am
p; infrastructure. Sources: dsh-external/hub 
catalog and the public GitHub dsh-plugin topi
c.</b><br>
</p>

<br>
> Note: the GitHub [`ds
h-plugin` topic](https://github.com/topics/ds
h-plugin) is public; some `dsh-external` repo
sitory links may still require org access.

#
# Contents

- [Install](#install)
- [Core & B
undles](#core--bundles)
- [Agents & Orchestra
tion](#agents--orchestration)
- [Context & Se
arch](#context--search)
- [Memory & Knowledge
](#memory--knowledge)
- [Input & Editing](#in
put--editing)
- [UI, Themes & Interaction](#u
i-themes--interaction)
- [Dashboards & Sessio
n UX](#dashboards--session-ux)
- [IDE & Clien
ts](#ide--clients)
- [Browser & Remote](#brow
ser--remote)
- [Models & Inference](#models--
inference)
- [Git & Engineering](#git--engine
ering)
- [Security & Governance](#security--g
overnance)
- [Output & Deliverables](#output-
-deliverables)
- [Office & Documents](#office
--documents)
- [Notifications & Channels](#no
tifications--channels)
- [Fun & Lifestyle](#f
un--lifestyle)
- [Plugin Ecosystem & Developm
ent](#plugin-ecosystem--development)
- [Runti
me & Operations](#runtime--operations)
- [Dom
ain & Specialist Skills](#domain--specialist-
skills)
- [Tools & Utilities](#tools--utiliti
es)
- [Related](#related)
- [Thanks](#thanks)


## Install

Install the official runtime wi
th Node.js:

```sh
npx @deepseek-ai/dsh web
`
``

Install an external profile bundle with p
npm on your `PATH`:

```sh
dsh plugin --profi
le web add "github:owner/repo#ref"
```

`dsh 
plugin` forwards package operations to pnpm, 
so npm, Git/GitHub, local path, `file:` and `
link:` package specs are supported. Only pack
ages declaring `dsh.bundle.patch` become acti
ve profile layers; plain dependencies remain 
installed but inactive. Restart `dsh --profil
e web` after installing or updating a bundle.


The former `&path:` sub-path and Repository
 Plugin installation forms are not part of th
e current official bundle flow; use an instal
lable package that declares `dsh.bundle.patch
`.

Management panel: Settings ? Plugins.


## Core & Bundles

- [DeepSeek Harness Ultima
te](https://github.com/18126295767-cell/deeps
eek-harness-ultimate) - Community-maintained 
reproducible profile installer: deduplicated 
defaults across coding, workflow, reliability
 and productivity; full commit-SHA pins, perm
issive-license audit, pre/post dependency che
cks, optional sensitive integrations, and beg
inner guides in 20 languages for Windows, mac
OS and Linux.
- [dsh-deepresearch](https://gi
thub.com/dsh-external/dsh-deepresearch) - Dee
pResearch plugin (cordis).
- [dsh-plan-execut
e](https://github.com/dsh-external/dsh-plan-e
xecute) - Dual-model plan/execute routing: pl
anner model thinks, executor model acts.
- [d
sh-toolkit](https://github.com/dsh-external/d
sh-toolkit) - Zero-dependency tool suite (cal
culator/csv/diff/encoding/json/markdown/regex
/time).
- [dsh-deep-research](https://github.
com/dsh-external/dsh-deep-research) - Adaptiv
e deep-research orchestrator (workflow engine
).
- [dsh-101](https://github.com/dsh-externa
l/dsh-101) - DSH documentation reading mode.

- [dsh-client-ui-plan-execute](https://github
.com/dsh-external/dsh-client-ui-plan-execute)
 - Web Settings row for plan/execute model ro
uting.
- [dsh_workflow](https://github.com/ds
h-external/dsh_workflow) - Dynamic workflow f
or DSH (placeholder).
- [dsh-equip-engine](ht
tps://github.com/wuykjl/dsh-equip-engine) - T
ask-driven plugin equip engine: dual retrieva
l (curated rules + LLM semantic), combo scori
ng (synergy/conflict/cost/trust), conflict de
tection and install-command export.
- [dsh-cl
aude-move](https://github.com/PerryLink/dsh-c
laude-move) - Four-source migration wizard: m
ove Claude Code, Codex, OpenCode and Hermes s
essions, memories, skills, instructions and s
lash commands into DSH (approval-gated, idemp
otent, resumable sessions).
- [dsh-skill-move
r](https://github.com/mjylfz/dsh-skill-mover)
 - One-click skill migration into DSH: scans 
14 agent platforms (Cursor, Claude Code, Code
x, Hermes, Trae, Qoder...) plus the shared ~/
.agents layer, merges same-name skills, dedup
es symlinks and rolls back safely.
- [gewu-to
ols](https://github.com/nyantused-cpun/gewu-t
ools) - Model-agnostic visual-inspection pipe
line for text-only agents: page-by-page HTML 
screenshots plus a ready-made vision-subagent
 briefing contract (gewu_prep), then source-c
ode truth verification of every finding (gewu
_locate); validated on mimo-v2.5 & qwen3.7-pl
us.
- [dsh-plugin-hub](https://github.com/Noo
b-stupid/dsh-plugin-hub) - DSH plugin manager
 & marketplace: one-click enable/disable, mul
ti-source market, static index (500+ plugins 
/ 300 skills), skill install/disable, suite o
ne-click assembly, one-click framework upgrad
e (online install + auto-rollback).
- [dsh-gs
d-bundle](https://github.com/jaaty/dsh-gsd-bu
ndle) - Git Ship Done (opengsd-core) reimplem
ented as host-plane Cordis plugins: replaces 
the default agent loop with a spec/discuss/pl
an/execute/verify/ship phase loop.

## Agents
 & Orchestration

- [NanmiCoder/dsh-agent-tea
ms](https://github.com/NanmiCoder/dsh-agent-t
eams) - Multi-agent team orchestration: capta
in-style session with durable sub-agent teams
, role assignment, and coordinated task execu
tion.
- [dsh-todo-guard](https://github.com/a
903067276-rgb/dsh-todo-guard) - Reliable todo
 panel that survives restarts (official panel
 only re-renders on write � fixed via proje
ction pre-warm) with three-state completion v
erification: evidence exists ? verified, fa
ke evidence ? blocked, no evidence ? unve
rified badge; settings toggle to fall back to
 official behavior.
- [fakechris/dsh-track](h
ttps://github.com/fakechris/dsh-track) - Embe
dded task-management engine for DSH: decision
-point protocol, idea capture wall, Linear-sh
aped issue store with an evidence-driven life
cycle.
- [dsh-dual-model-eval](https://github
.com/huangdaxianer/dsh-dual-model-eval) - Run
s one coding prompt across multiple configure
d models in isolated Git worktrees, streams s
ide-by-side tool traces and results, and comm
its the candidate the user adopts for later r
ounds.
- [dsh-agent-arena](https://github.com
/LeemanCheung/dsh-agent-arena) - Compares cod
ing agents in isolated Git worktrees with det
erministic validation, scoring, and explicit 
winner application.
- [xiehuan123/coding-coac
h](https://github.com/xiehuan123/coding-coach
) - Coding Coach: 35-skill bundle plus a full
 agent preset for non-developers (8-stage ide
a-to-launch pipeline; engineering/product/UI 
skills).
- [dsh-collaboration](https://github
.com/Socialist-Sister/dsh-collaboration) - Mu
lti-agent collaboration suite: user-configure
d specialist roster, persistent on-demand dis
patch (team_call/team_message/team_status/tea
m_close), clone instances, star-topology rela
y, model comparison and a multimodal vision b
ridge.
- [dsh-plans](https://github.com/Optim
-Agent/dsh-plans) - Planning-first agent pres
et: research repository changes into traceabl
e Markdown plans, refine them through reviewe
r/criticizer subagent rounds, then execute as
 a DSH goal with a verifier checklist.
- [dsh
-agent-team-gui](https://github.com/toolclub/
dsh-agent-team-gui) - Persistent multi-model 
squads managed in Settings and selected in th
e Composer; the lead Agent dynamically plans 
bounded DAG runs with optional review/repair,
 while Run Center reports DSH's official prov
ider-reported Token usage.
- [DSH Automation 
Center](https://github.com/usersx/dsh-automat
ion-center) - Workspace automation center for
 scheduled Agent runs: each execution starts 
a fresh Result Session with persistent audit 
history; stock DSH uses a Conversation tab, w
hile compatible Shell slots enable a global p
age.
- [Knotline](https://github.com/MrMaii/k
notline) - Visual DSH project map for composi
ng persistent agent workflows from requests, 
agents, skills, backlogs, approval pools, and
 scheduled triggers.
- [cleverer-dsh](https:/
/github.com/Classicoke/cleverer-dsh) - Execut
ion-discipline suite for DSH with identical-r
etry interception, forced reflection, todo en
forcement, memory deduplication, and experien
ce-to-skill promotion (11 plugins + 6 skills)
.
- [february2015/dsh-taskswarm](https://gith
ub.com/february2015/dsh-taskswarm) - DSH port
 of TaskPlane: dependency-ordered waves run i
n parallel git-worktree lanes, with task pack
ets, cross-model review, and crash recovery.

- [hongyue0721/dsh-kimicode-swarm](https://gi
thub.com/hongyue0721/dsh-kimicode-swarm) - Ki
mi Code Swarm-style batch parallel subagent d
ispatch: a `swarm_batch` tool fans independen
t subtasks out to real subagents with two-sta
ge adaptive concurrency (ramp-up plus collisi
on-driven exponential backoff, auto shrink/re
cover), an in-chat live progress stream (SSE)
, and `resume_agent_ids` continuation.
- [tim
whitez/dsh-self-evolving](https://github.com/
timwhitez/dsh-self-evolving) - Evidence-first
, crash-resumable self-evolution engine for D
SH: generates bounded Cordis plugin candidate
s, admits them through a one-shot real Loader
, evaluates with Harbor, and journals an audi
table lineage.
- [Saktawdi/dsh-ha-orchestrato
r](https://github.com/Saktawdi/dsh-ha-orchest
rator) - Model high-availability failover (qu
arantine, circuit breaking, probe recovery) p
lus subagent orchestration (fanout/pipeline/s
upervisor) with a bilingual settings UI.
- [d
sh-background-agents](https://github.com/Perr
yLink/dsh-background-agents) - Durable backgr
ound child agents on the official subagent se
am: start from any session, watch progress in
 the Web UI sidebar, message and interrupt an
y time, with per-child tool scoping, persona 
and delegation-depth caps.
- [zoahdev/dsh-kir
ocrew](https://github.com/zoahdev/dsh-kirocre
w) - Bridge a DSH agent to a persistent, self
-evolving KiroCrew development workspace over
 ACP (JSON-RPC 2.0 over stdio) via a single `
kiro_send` tool.
- [bpc-oss/dsh-routed-subage
nt](https://github.com/bpc-oss/dsh-routed-sub
agent) - Run a one-shot subagent fully mounte
d on any agent preset from any session, with 
per-call model/provider override, model pre-c
heck, and external CLI engines (codex / claud
e / codebuddy) with background jobs, live pro
gress, kill, and continuable sessions.
- [bpc
-oss/dsh-fork-to-preset](https://github.com/b
pc-oss/dsh-fork-to-preset) - Fork any session
 into a different agent preset from the conve
rsation header: a preset picker creates a new
 child session mounted on the chosen preset, 
inheriting the source session's completed tur
ns.
- [qwert702/dsh-commander](https://github
.com/qwert702/dsh-commander) - Commander mode
 for DSH Web: inject protocol briefs into the
 session title bar, parse task blocks from mo
del replies and auto-execute them, separating
 strategy from execution; activated via a bad
ge button.

- [dsh-product-subagent-console](
https://github.com/Jokasa7/dsh-product-subage
nt-console) - Conversation-level multi-agent 
workbench for editable task planning, real ch
ild-session observation, plan-versus-runtime 
comparison, and evidence-backed recovery prev
iews; tested with DSH 0.1.1-rc.2.

- [weibaoh
ui/dsh-continue](https://github.com/weibaohui
/dsh-continue) - Auto-resume for interrupted 
agent sessions: an ordered rule table routes 
by failure type (rate limit, quota, auth, con
text overflow, crashed orphan) into backoff r
etry, model switch, resume after compaction, 
or stop-loss notification, with a visual rule
 editor and activity log.

## Context & Searc
h

- [zoahdev/dsh-github-intelligence](https:
//github.com/zoahdev/dsh-github-intelligence)
 - Read-only developer-intelligence tools acr
oss 16 ecosystems (GitHub, GitLab, Gitee, npm
, PyPI, crates.io, Docker Hub, Hugging Face, 
Hacker News, Stack Overflow, Reddit, dev.to, 
RubyGems, NuGet, Go, ArXiv) with TTL caching 
and no API key.
- [dsh-hacker-news](https://g
ithub.com/heartleo/hn-cli/tree/main/plugins/h
acker-news) - Live Hacker News feeds, item th
reads, Algolia search, and user profiles for 
DeepSeek Harness.
- [dsh-minimal-first-turn](
https://github.com/ZRui-C/dsh-minimal-first-t
urn) - Minimal-compatible first-turn conditio
ning for Web root sessions: restricts the pro
mpt and tool catalog to persistent bash and s
tr_replace_editor, then restores the selected
 preset after the first tool call or reply; i
ncludes a persistent composer toggle.
- [xieh
uan123/dsh-deepread](https://github.com/xiehu
an123/dsh-deepread) - DeepRead: deep-reading 
assistant with five modes (quick/deep/knowled
ge-map/Feynman reading/book), batch compariso
n, budget preflight, transparent background-j
ob progress, WeChat links, local PDF (pure-JS
 extractor), optional MD/FreeMind/HTML export
.
- [dsh-context](https://github.com/bowenlia
ng123/dsh-context) - Context insight panel: s
ee what the model's context window is made of
 and how it evolves � composition vs. windo
w size, per-request history, compression/inje
ction events, and per-message token stats.
- 
[dsh-bookmarks](https://github.com/penguin-oo
/dsh-bookmarks) - Bookmark finalized assistan
t replies with notes and tags; a cross-sessio
n center with search, tag filter, session jum
p and one-click Markdown export (Alt+B toggle
s the panel).
- [billion-context-dsh](https:/
/github.com/Tyan66666/billion-context-dsh) - 
Model-driven context compression (ACP) for De
epSeek Harness, ported from billion-context-p
i; the model decides when and what to compres
s.
- [qwert702/dsh-context-compressor](https:
//github.com/qwert702/dsh-context-compressor)
 - Context compression for small models: comp
resses tool output and conversation history t
o a few sentences, freeing context for the ac
tual task; continues in a fresh session autom
atically.
- [dsh-scope](https://github.com/he
lloxkk/dsh-scope) - Context lens: per-session
 KV cache hit rate and token composition, plu
s a GitHub-style usage heatmap of daily token
s, sessions, and cache efficiency.
- [dsh-com
pressor](https://github.com/lifeodyssey/dsh-c
ompressor) - Slim port of Headroom: compresse
s tool output, cuts up to 20% of context, wit
hout affecting the model's context cache or a
gent performance.
- [context-vista](https://g
ithub.com/GooodWei/context-vista) - A right-s
ide floating panel and /context command for D
eepSeek Harness � a live donut chart of con
text token usage, allocation, and estimated c
ost.
- [dsh-context-doctor](https://github.co
m/Zhenyu98/dsh-context-doctor) - See exactly 
what every request carries: token cost of the
 AGENTS.md chain, skill catalog and tool sche
mas, with duplicate/conflict detection and ac
tionable pruning tips (Web UI gauge + context
_audit tool).
- [dsh-mcp-lens](https://github
.com/labmimors/dsh-mcp-lens) - Progressive-di
sclosure MCP gateway that searches large remo
te tool catalogs through two stable interface
s, then calls selected tools with exact schem
as, lazy connections and bounded caches.
- [d
sh-cot-summary](https://github.com/dsh-extern
al/dsh-cot-summary) - External Summary-CoT pl
ugin workspace.
- [qwert702/dsh-token-viewer]
(https://github.com/qwert702/dsh-token-viewer
) - CC Switch-style token consumption statist
ics: per-request usage log, real-consumption 
hero with cache-hit rate, trend chart, per-mo
del peak/off-peak pricing, per-project stats,
 and account balance.
- [dsh-explain](https:/
/github.com/dsh-external/dsh-explain) - Learn
ing mode that explains each agent step (WIP).

- [dsh-file-mount](https://github.com/acefun
29/dsh-file-mount) - Incremental file mountin
g with read dedupe: mounted line ranges are n
ever re-sent to the model, on-disk changes in
validate and remount, with a Mounted Files ta
b and token-savings accounting.
- [dsh-sessio
n-search](https://github.com/dsh-external/dsh
-session-search) - Index-free read-only searc
h across dsh/Codex/Claude Code/pi/OpenCode se
ssions.
- [cross-harness-cite](https://github
.com/dsh-external/cross-harness-cite) - Cite 
past conversations across harnesses.
- [task-
passport](https://github.com/dongsheng123132/
task-passport) - Carry durable task state acr
oss DeepSeek Harness, WorkBuddy, Claude Code 
and Codex with machine-readable checkpoints a
nd optimistic locking.
- [dsh-easy-ctx-manage
r](https://github.com/dsh-external/dsh-easy-c
tx-manager) - Context management: context sav
ing and more (cordis).
- [dsh-web-search-exa]
(https://github.com/TonyDua/dsh-web-search-ex
a) - Zero-config Exa web search provider: key
less anonymous MCP fallback (mcp.exa.ai/mcp) 
plus keyed REST search, for the ctx.web seam.

- [dsh-web-search-pro](https://github.com/an
weat/dsh-web-search-pro) - Persistent enhance
d web search for DSH: multi-engine routing (D
eepSeek/Exa/DDG/Bing/Jina + GitHub/Bilibili/Y
ouTube/V2EX/Xiaohongshu/Twitter/Reddit/RSS), 
SQLite+LRU cache, userscript-style extraction
, Playwright rendering.
- [dsh-free-web-searc
h](https://github.com/delef/dsh-free-web-sear
ch) - Free web search with 10 engines (Bing/D
uckDuckGo/SearXNG/AnySearch free + Exa/Tavily
/Keenable/Perplexity/DeepSeek paid), automati
c fallback chain, time-filtered advanced sear
ch, platform search (GitHub/Reddit), web page
 fetching, LRU caching, and a settings UI. No
 API keys required for basic use.
- [moguiyu/
dsh-tavily](https://github.com/moguiyu/dsh-ta
vily) - Tavily search with multiple API keys,
 key rotation/failover, usage gauge, and a se
ttings card for DSH.
- [dsh-session-sync](htt
ps://github.com/PerryLink/dsh-session-sync) -
 Cross-device session sync: a dedicated git m
irror with append-only keep-both conflict res
olution, a /sync command and sync_status/sync
_pull/sync_push tools.
- [JohnXu22786/context
-pruner](https://github.com/JohnXu22786/conte
xt-pruner) - Session context triage for dsh: 
prunes stale, repeated, failed and oversized 
context to save token budget.
- [Kaixxrua/dsh
-aigc-radar](https://github.com/Kaixxrua/dsh-
aigc-radar) - Search AIGC Radar's curated Git
Hub AI project library (500-star admission, b
ilingual tags, star-growth snapshots) over it
s MCP endpoint with native result cards; a pr
e-step listener nudges a reuse check before t
he agent writes code.
- [dsh-context-budget](
https://github.com/d3vmeh/dsh-context-budget)
 - Keeps a local model's context at a size th
e GPU handles well: measures prefill speed on
 every request and, before each step, warns o
r compacts early on a hard token ceiling, an 
observed time-to-first-token budget, or a pre
dicted cold-prefill budget; /context-budget s
hows the numbers and the cost of compacting n
ow.
- [dsh-personal-directive](https://github
.com/PerryLink/dsh-personal-directive) - Pers
onal directives for the agent: system-prompt 
injection, tools, and a top-bar runtime toggl
e with replaceable neutral placeholder instru
ctions.

## Memory & Knowledge

- [zilliztech
/memsearch](https://github.com/zilliztech/mem
search/tree/main/plugins/dsh) - Shared Markdo
wn memory for DSH and other coding agents, wi
th automatic capture, pre-step context inject
ion, searchable recall, and a review panel.


- [dsh-simple-memory](https://github.com/a903
067276-rgb/dsh-simple-memory) - Sidecar markd
own memory for DSH: per-session index injecti
on, one-click memory-flow button, enforced ?
??-??.md format, cross-project search.

- [dsh-hme](https://github.com/weopenfire-git
/hme-plugin) - Cross-session long-term memory
: bounded core (USER.md global + MEMORY.md pe
r-workspace, f Fibonacci caps) + a tag-index
ed, self-consolidating archive (archive/recal
l/move tools).
- [dsh-memory-vault](https://g
ithub.com/flymysql/dsh-memory) - Cross-sessio
n memory vault: memory_remember / memory_reca
ll / memory_forget tools, latest entries inje
cted into system-prompt assembly, Settings pa
ge (??? / Memory).
- [dsh-memoria](http
s://github.com/jiayan-xu/dsh-memoria) - Memor
ia memory backend for dsh: 4 tools (observe/r
emember/search/recall) into a vector+graph me
mory layer (memoria) with namespace isolation
, auto-write (turn-end observe + positive-fee
dback -> importance-5 remember) and hot-reloa
d settings.
- [dsh-memory-evolve](https://git
hub.com/dsh-external/dsh-memory-evolve) - Cro
ss-session long-term memory + background self
-evolution (5-track memory/git-branch awarene
ss/skill evolution).
- [qwert702/dsh-memory](
https://github.com/qwert702/dsh-memory) - Pro
ject-level and global long-term memory for DS
H Web: isolated POST /items route to avoid pa
th conflicts, multi-turn tool-call context co
mpression before storing entries, deduplicati
on and session-persistent storage.
- [dsh-mem
ory-gate](https://github.com/GIT121995/dsh-me
mory-gate) - Bounded local long-term memory w
ith CBDC (Claim?Belief?Decision?Consump
tion) authority gating: SQLite + FTS5 claims,
 scoped dual-channel recall, /memory manageme
nt commands, =3-claim/1200-char injection p
er call, no extra model call.
- [dsh-engram-r
elay](https://github.com/dsh-external/dsh-eng
ram-relay) - Built-in <1B model for 100k-equi
valent long memory with causal-graph wake-up.

- [dsh-mneme](https://github.com/modusensus/
dsh-mneme) - Cross-session memory engine for 
DeepSeek Harness: SQLite store + human-editab
le Markdown mirror, autoDream consolidation w
ith self-correction, failure tracking, offlin
e semantic search (local embedding/rerank/clu
stering), entity-attribute-timeline, Sleep Mo
de, custom-model autoSummarize � 473 tests.

- [dsh-mnemon](https://github.com/omdsh-dev/
dsh-mnemon) - Mnemon-powered local memory sys
tem: three-tier memory (runtime hot memory / 
project Documents / long-term Memory Spaces) 
with supervised writeback, retrieval tools, a
nd Web UI.
- [url-manager](https://github.com
/Piccolo123/url-manager) - Agent-first URL co
llection & knowledge management: save links f
rom any platform, auto-categorize/tag, full-t
ext search, shared categories, and deliver re
sults as magic-link cards. Zero setup � age
nts auto-register on first use.
- [qwert702/d
sh-auto-translate](https://github.com/qwert70
2/dsh-auto-translate) - Auto-translates Engli
sh replies inline below the original text, wi
th Chinese annotations for tool calls; transl
ation goes through an independent provider re
quest and never enters the session context.
-
 [url-manager-mcp](https://github.com/Piccolo
123/url-manager-mcp) - MCP server companion f
or url-manager: 21 tools (mcp__url_manager__*
) for save/search/categorize/share and magic-
link delivery. Stdio or streamable-http.
- [d
sh-kb-sieve](https://github.com/dsh-external/
dsh-kb-sieve) - Knowledge-base plugin: build 
auditable KB packages (references + SQL).
- [
kb-rag](https://github.com/Breeze136/kb-rag) 
- Local literature knowledge-base RAG: 8 tool
s (PDF/folder/Zotero ingest, hybrid BM25+vect
or+reranker search, cited QA with clickable D
OI links, scope/strict modes, dedup/clear/sta
ts), all-local bge embeddings + single-file S
QLite, measured 242-doc/86s ingest and sub-se
cond hot queries on 20k chunks.
- [geometry-k
nowledge](https://github.com/sdoygb/geometry-
knowledge) - Offline BM25 knowledge base for 
the Conjugate Spectral Geometry (CSG) corpus:
 208 articles / 3833 chunks / 871 verified tr
uths, 5 geo_* tools (list / search / read / c
alc / truth) with LaTeX?Unicode rendering, 
truth?article citation chains and single-ch
aracter query support, zero runtime deps, `ds
h plugin add geometry-knowledge`.
- [dsh-meme
nto](https://github.com/PerryLink/dsh-memento
) - Bounded, layered, approval-gated, auditab
le cross-session memory: typed ctx.memory sea
m, zero-dependency SQLite provider, memory to
ol and frozen snapshot injection, plus the ds
h-memory-protocol v1 rehearsal with an adapte
r registry and a conformance suite.
- [dsh-en
gramory](https://github.com/tinqiao-oss/engra
mory/tree/master/adapters/dsh) - File-based c
urated memory: a line/byte-capped `MEMORY.md`
 index plus one markdown file per fact, versi
oned with git and readable without a tool. Th
e cap is enforced through `ctx.tools.guard()`
 rather than asked for in a prompt, and the p
rotocol is registered as a runtime skill; the
 same store is also read by Claude Code, Code
x, Kiro, and OpenClaw.
- [plur-ai/dsh-plugin]
(https://github.com/plur-ai/dsh-plugin) - PLU
R persistent memory: engrams are rendered int
o the system prompt on each assembly rather t
han sitting behind a tool call, so recall nee
ds no round trip and the block never accumula
tes in context; fully local search (BM25 + BG
E), plain YAML storage you can edit, per-work
space scoping, and a /plur-memory viewer.
- [
dsh-memory-plugin](https://github.com/volceng
ine/OpenViking/tree/main/examples/dsh-memory-
plugin) - OpenViking memory/context plugin fo
r DeepSeek Harness: connects dsh to OpenVikin
g's self-evolving context database for cross-
session agent memory and knowledge RAG.
- [ds
h-continual-evolve](https://github.com/ZK-And
y/dsh-continual-evolve) - Continual self-evol
ution: versioned, auditable, rollback-safe ha
rness state (prompt notes, memories, skills, 
subagent specs) refined from session trajecto
ries.
- [ccch713/deepddw](https://github.com/
ccch713/deepddw) - Memory + KB + doc search f
or DSH on all your LAN devices (PC, phone, ta
blet) � not local-only.
- [dsh-mnemon](http
s://github.com/dsh-external/dsh-mnemon) - Mne
monic layer.
- [zoahdev/dsh-zh](https://githu
b.com/zoahdev/dsh-zh) - Chinese-thinking syst
em-prompt section: makes the agent answer in 
simplified Chinese while keeping code/command
s verbatim.
- [memory-mcp-server](https://git
hub.com/BingoAgentTouch/Personal_MCP) - Layer
ed long-term memory MCP server: raw turns ?
 task fragments ? daily summaries ? topic
 indexes, local MiniLM 384-dim embeddings or 
OpenAI-compatible API backend, semantic + Jac
card-fallback search, one-command DSH plugin 
install.
- [dsh-memory-porter](https://github
.com/Shiye-10Pages/dsh-memory-porter) - Cross
-vendor memory migration: zero-token import o
f the `memories.json` in a Claude export, loc
al Claude Code transcripts without an export,
 and conversations distilled through the host
's own model; every memory carries verbatim e
vidence checked against the source by code.
-
 [dsh-simple-wiki-memory](https://github.com/
rainow/dsh-simple-wiki-memory) - A super-simp
lified LLM-wiki memory plugin: one index docu
ment (auto-loaded) + one markdown file per to
pic (read only when needed) � no dumping ev
erything into the context and burning tokens.
 Simple and lightweight, painless to install/
uninstall, and freely editable however you li
ke.
- [dsh-library](https://github.com/PerryL
ink/dsh-library) - Local-first document knowl
edge base for DeepSeek Harness: library_add/r
emove/list, hybrid semantic+keyword library_s
earch with diversity re-ranking, relevance fi
ltering and lost-in-the-middle avoidance, cit
ation-aware injection, library_cite_check and
 library_diagnose; SQLite-backed index via th
e storage domain, local embedding, zero model
 downloads.
- [JohnXu22786/docs-retriever](ht
tps://github.com/JohnXu22786/docs-retriever) 
- DocTrove: versioned library documentation r
etrieval MCP server, zero runtime dependencie
s, installable as a dsh plugin bundle.
- [Joh
nXu22786/snippet-expander](https://github.com
/JohnXu22786/snippet-expander) - Steno: inlin
e #tag shorthand expansion before send � mu
lti-library, aliases, {{variables}}, recursio
n guards.
- [dsh-ragflow](https://github.com/
staff-os/dsh-ragflow) - RAGFlow knowledge-bas
e retrieval plugin: gives the agent a `ragflo
w_retrieve` tool that queries your RAGFlow da
tasets and returns document chunks with simil
arity scores and source names; three-role des
ign (seam/provider/consumer), env-based confi
g, `dsh plugin add github:staff-os/dsh-ragflo
w#main`.
- [Mutx163/dsh-model-memory](https:/
/github.com/Mutx163/dsh-model-memory) - Reaso
ning-effort tier manager for custom API model
s plus cross-session preference memory: inlin
e low/medium/high/max toggles inside Settings
 -> Models, atomic settings.yaml persistence,
 and per-channel auto-restore of the last mod
el and effort level in new sessions.
- [dsh-c
ortexm](https://github.com/ssmurfgg04-gif/con
text-m/tree/main/plugins/dsh-cortexm) - Bi-te
mporal memory plugin: every fact carries a tr
ansaction validity range, with VSA/HRR hologr
aphic retrieval, a BLAKE3-chained audit log, 
and session replay/fork; drives Context-M as 
a JSON-RPC subprocess (npm: dsh-cortexm, need
s the Python `cortexm` package).
- [dsh-brain
agent](https://github.com/stas130286-blip/dsh
-brainagent) - Brain-inspired cognitive plugi
n: episodic / semantic / procedural / emotion
al memory stores with a reward-ledger and UCB
1 bandit loop, a goal stack with time trigger
s, curiosity-driven autonomous web research, 
and proactive initiatives. Recalled memories 
ride along in the prompt to your configured p
rovider; license is source-available, non-com
mercial.

- [weibaohui/hermes-loop](https://g
ithub.com/weibaohui/hermes-loop) - Automatic 
post-conversation retrospective that distills
 useful experience into reusable skills for t
he skill library, with approval mode and skil
l-library governance (archive/restore, never 
deletes directly).

## Input & Editing

- [ds
h-global-rules](https://github.com/Semidia/ds
h-global-rules) - Edit your `~/.dsh/AGENTS.md
` global rules from the Settings page: a text
 editor with save button, no command line nee
ded.
- [dsh-keyboard-history](https://github.
com/NormanFxxkingRockwell/dsh-keyboard-histor
y) - Minimal ?/? input history for the DS
H web composer: press ?/? to walk back th
rough sent messages. Nothing else.
- [liustac
k/modlens](https://github.com/liustack/modlen
s) - Vision plugin for text-only LLMs: paste 
images for recognition, multi-image Q&A, scre
enshot capture, and visual task completion wi
th one-line install.
- [Anionex/dsh-vision-to
olkit](https://github.com/Anionex/dsh-vision-
toolkit) - Advanced vision toolkit for DSH: O
CR, grounding, multi-image Q&A, screenshot an
alysis, and UI restoration with structured JS
ON output.
- [Zhangbo-cn/dsh-voice-input-plug
in](https://github.com/Zhangbo-cn/dsh-voice-i
nput-plugin) - Composer mic for the Web UI: t
ap-to-monitor live transcription and hold-to-
talk, with host Edge TTS reply reading that s
treams while the model generates, echo-pause 
during reading, and tap-to-stop.

- [dsh-bett
er-sidebar-plugin-office](https://github.com/
dsh-external/dsh-better-sidebar-plugin-office
) - Office integration for DSH-better-sidebar
.
- [dsh-message-edit](https://github.com/dsh
-external/dsh-message-edit) - Branch-based me
ssage editing / reroll / retry / version time
line.
- [SpookySandwich/dsh-plugin-message-ed
it](https://github.com/SpookySandwich/dsh-plu
gin-message-edit) - Edit a sent message to re
wind and branch the conversation from that tu
rn; version counter under the bubble, a turn-
level version tree of the whole branch family
, and ChatGPT / DeepSeek / Claude control lay
outs.
- [dsh-prompt-studio](https://github.co
m/dsh-external/dsh-prompt-studio) - Edit syst
em-prompt sections with live preview.
- [dsh-
paste-input](https://github.com/dsh-external/
dsh-paste-input) - Ctrl+V paste files / drag 
& drop / picker.
- [dsh-reference-anything](h
ttps://github.com/Chael-Chael/dsh-reference-a
nything) - Extends the native DSH `@` menu wi
th five configurable source groups: commands,
 skills, workspace files, DSH sessions, and C
hatGPT/Claude/Gemini/DeepSeek/Grok/Kimi conve
rsations; external bodies and attachments are
 read on demand with per-task authorization.

- [dsh-voice](https://github.com/motongv/dsh-
voice) - Voice input (speech-to-text) and rea
d-aloud (Edge neural TTS) for the composer.
-
 [dsh-drag-and-drop](https://github.com/dsh-e
xternal/dsh-drag-and-drop) - Cross-platform d
rag & drop with original path insertion.
- [d
sh-file-uploads](https://github.com/l54140239
8/dsh-file-uploads) - Upload arbitrary local 
files from the Web composer, show pending car
ds, and manage stored files in Settings.
- [d
sh-postman](https://github.com/zhousun55-byte
/dsh-postman) - Composer upload of files and 
folders: images attach as real message blocks
, text goes into the draft, folders stored by
 directory structure.
- [dsh-input-history](h
ttps://github.com/dsh-external/dsh-input-hist
ory) - Input history.
- [dsh-multimedia-webui
-input](https://github.com/dsh-external/dsh-m
ultimedia-webui-input) - Multimedia file/fold
er input.
- [dsh-chat-import](https://github.
com/Nwflower/dsh-chat-import) - Import full-f
idelity conversation histories from 13 coding
 agents (Claude Code / Codex / ChatGPT / Curs
or / Gemini / Reasonix / opencode / ZCode / G
rok Build / OpenClaw / Pi / Hermes / Kimi) as
 resumable DeepSeek Harness sessions, with re
verse export/sync back to Claude Code.
- [dsh
-file-claim](https://github.com/Nwflower/dsh-
file-claim) - File claim/release protection f
or parallel DSH sessions on the same workspac
e (heartbeat stale takeover, pending 3-way me
rge area).
- [dsh-sticky-note](https://github
.com/Meredith2328/dsh-sticky-note) - Quick st
icky notes in the composer: ideas/feelings/TO
DO with Markdown preview, auto-save, one-clic
k send to chat.
- [dsh-plugin-quote-reply](ht
tps://github.com/yangYzc/dsh-plugin-quote-rep
ly) - Select text in a conversation, then quo
te it into the composer or reply in a new win
dow.
- [dsh-pathlink](https://github.com/peng
uin-oo/dsh-pathlink) - Ctrl+click file paths 
and links in chat: paths open their folder in
 the OS file manager (with the file selected)
, links open in a new browser tab.
- [@picgo/
dsh-plugin](https://github.com/PicGo/dsh-plug
in) - Official PicGo plugin: upload local fil
es to your image host and get public URLs, re
using the hosts and uploader plugins already 
configured in PicGo.
- [dsh-suggested-replies
](https://github.com/dsh-external/dsh-suggest
ed-replies) - Suggested replies above the DSH
 Web composer.
- [dsh-wordbox](https://github
.com/arcmosin/dsh-wordbox) - Persistent commo
n-word/phrase panel beside the composer input
 with global/current-project buckets and one-
click insert.
- [dsh-voice-webspeech](https:/
/github.com/anweat/dsh-voice-webspeech) - Bro
wser Web Speech API voice input for DSH: zero
 server, zero keys, zero model downloads (Edg
e=Azure, Chrome=Google speech).
- [dsh-dictat
e](https://github.com/franksong2702/dsh-dicta
te) - Browser Web Speech dictation for the Co
mposer: recognition needs no dedicated ASR se
rver, key, or model download; reuses Session 
text and a configured DSH model for contextua
l phrase hints and optional transcript polish
ing.
- [dsh-talk](https://github.com/PerryLin
k/dsh-talk) - Voice-first session loop: a com
poser microphone button with browser/local sp
eech-to-text (Web Speech, FunASR, whisper.cpp
), a speak tool for text-to-speech replies (b
rowser, edge-tts, piper), event announcements
 with mute, and speak-to-interrupt.
- [dsh-pl
ugin-anydoc](https://github.com/beancookie/ds
h-plugin-anydoc) - This plugin exports a reus
able function that takes a file path or a Buf
fer, extracts the content via @firecrawl/anyd
oc, and returns GitHub-Flavored Markdown (G
FM). It also includes configuration options a
nd an example usage.
- [dsh-attachment-upload
](https://github.com/lbh1nb/dsh-plugins/tree/
main/packages/dsh-attachment-upload) - Compos
er attach button: uploads files into the work
space's .dsh-attachments directory and insert
s the path into the draft.
- [dsh-steer-butto
n](https://github.com/lbh1nb/dsh-plugins/tree
/main/packages/dsh-steer-button) - Always-vis
ible steer button in the composer: one click 
injects the draft into the running turn (equa
ls Ctrl/Cmd+Enter).
- [dsh-prompt-optimize](h
ttps://github.com/peterliucius/dsh-prompt-opt
imize) - Rewrite the current composer draft t
hrough an auxiliary LLM call without sending 
a message.
- [Boliban/dsh-enter-customizer](h
ttps://github.com/Boliban/dsh-enter-customize
r) - Take over the system input shortcuts for
 the chat input box and configure behavior in
dependently for each shortcut.
- [PerryLink/d
sh-composer-history](https://github.com/Perry
Link/dsh-composer-history) - Terminal-style i
nput history for the web composer (edge-first
 arrows, draft/caret restore, Ctrl+R search, 
sliding-context awareness) plus a smart input
 layer: cross-session snippets, prompt templa
tes with variables, reuse insights, and compa
ction-summary highlighting.
- [opencues/openc
ues](https://github.com/opencues/opencues/tre
e/master/integrations/dsh) - Word alternative
s and underscore-gated fill-ins in the compos
er: end a line with `_` and it is filled, mis
spellings are flagged as you type. Routes thr
ough `ctx.llm`, so it needs no API key of its
 own.

## UI, Themes & Interaction
- [YEYEYEYESHIFU/dsh-split-screen](https://github.com/YEYEYEYESHIFU/dsh-split-screen) - Split-screen workspace: chat with several agents side by side in native-looking panes, with a compact TUI composer mode (Alt+T) and Alt+Shift+Arrow pane-focus shortcuts. Light/dark.

- [fengb3
/dsh-theme-macintosh](https://github.com/feng
b3/dsh-theme-macintosh) - Classic Macintosh (
System 7) pixel theme: desktop pattern canvas
, Finder sidebar, monochrome buttons and dial
ogs, light/dark support.
- [dsh-view-manager]
(https://github.com/runcat-tommy/dsh-view-man
ager) - Manage DeepSeek Harness Web GUI sessi
on view tabs (Chat / Trajectory): enable, hid
e, reorder and rename labels, locale-aware (z
h/en), with npm update reminders.
- [dsh-hist
ory-question-nav](https://github.com/TropicWi
den/dsh-history-question-nav) - Right-side Qu
estions panel that lists the current session'
s user questions and scrolls to the matching 
answer.
- [dsh-chat-timeline-plus](https://gi
thub.com/NIU-001-LIU/dsh-chat-timeline-plus) 
- Message timeline rail with hover Q&A previe
w (question + reply digest card), panel pinni
ng, day separators, and bookmarks.
- [dsh-sce
nery-background](https://github.com/soslowsna
il/dsh-scenery-background) - Rotating Web UI 
backgrounds with daily and slideshow modes, f
ive offline SVG scenes, optional Unsplash pho
tos, glass panels, and a floating control.
- 
[dsh-zh-commands](https://github.com/Semidia/
dsh-zh-commands) - Chinese slash-command enha
ncement: six new Chinese commands (/help /sta
tus /time /cwd /whoami /preset) plus in-place
 localization of every built-in command descr
iption in the slash menu.
- [dsh-skin-studio]
(https://github.com/LeemanCheung/dsh-skin-stu
dio) - Local semantic-token theme editor with
 palette extraction, WCAG auditing, preview, 
and export.
- [deepseek-harness-zh-tw](https:
//github.com/chiyulogg-commits/deepseek-harne
ss-zh-tw) - Traditional Chinese (Taiwan) loca
le edition of DeepSeek Harness: adds a third 
UI language option with Taiwan terminology ac
ross all 25 web UI packages.
- [dsh-spotlight
](https://github.com/0xsline/dsh-spotlight) -
 Keyboard-first command palette for DeepSeek 
Harness Web.
- [dsh-sticky-disclosure](https:
//github.com/Han-1413141/dsh-sticky-disclosur
e) - Pins off-screen expanded Think/tool/comm
and labels to the top of the DSH Web conversa
tion and collapses every expanded section in 
one click (custom hotkey).
- [dsh-better-mode
l-selector](https://github.com/Khellendros97/
dsh-better-model-selector) - Splits the compo
ser model selector into a searchable, favorit
e-marking dropdown and a reasoning-effort sli
der, with Ctrl+P / Ctrl+T quick-switch shortc
uts.
- [dsh-catppuccin](https://github.com/zh
ijun-dai/Catppuccin-dsh-theme) - Catppuccin t
heme plugin: Latte / Frapp� / Macchiato / Mo
cha skins for the DSH Web theme runtime.
- [d
sh-appearance](https://github.com/Semidia/dsh
-appearance) - Unified appearance coordinator
: theme color presets, UI fonts, UI font size
, plus per-workspace markdown font size / lin
e-height / background, with a coordination la
yer that stops UI scaling from leaking into c
hat body text.
- [solarized-dsh-theme](https:
//github.com/zhijun-dai/Solarized-dsh-theme) 
- Solarized + Selenized theme plugin: four fa
ithful palettes registered into the DSH Web t
heme runtime.
- [arcana](https://github.com/G
ooodWei/arcana) - A floating command deck tha
t lists every slash command in DeepSeek Harne
ss as runnable buttons, sorted by usage.
- [d
sh-aigc-canvas](https://github.com/dsh-extern
al/dsh-aigc-canvas) - AIGC canvas plugin (cor
dis).
- [pbr-render](https://github.com/dhb86
1832993-star/pbr-render) - PBR 3D model previ
ew for game art: GLB/GLTF with textures, IBL 
environment, orbit controls, and a material c
hannel inspector (baseColor/normal/roughness/
metallic/AO/emissive/wireframe) via the pbr3d
 fence and pbr_render tool.
- [dsh-deepcel](h
ttps://github.com/dsh-external/dsh-deepcel) -
 Deepcel spreadsheet skin and standalone dist
ribution.
- [dsh-diff-viewer](https://github.
com/dsh-external/dsh-diff-viewer) - PiUI-styl
e Web diff viewer replacing the default diff 
view.
- [dsh-mobile](https://github.com/dsh-e
xternal/dsh-mobile) - Mobile client plugin (c
ordis + dsh.plugin.json).
- [dsh-openpencil](
https://github.com/dsh-external/dsh-openpenci
l) - OpenPencil design preview and editing pl
ugin.
- [dsh-design-studio](https://github.co
m/Sal7one/DSH-Design-Studio) - Design Studio 
tab: design briefs become html/css/js mockups
 with live preview, element picker, design-ag
ent chat with vision review, identity presets
 and zip export.
- [dsh-ultra-ui](https://git
hub.com/dsh-external/dsh-ultra-ui) - Ultra UI
 plugin (cordis).
- [dsh-view-modes](https://
github.com/NigelYao/dsh-view-modes) - DSH Web
 output modes with Verbose, Normal, and Summa
ry views, semantic grouping for tool calls an
d thinking, and live execution status.
- [dsh
-plugin-workshop](https://github.com/yyyyukar
i/dsh-plugin-workshop) - Steam Workshop-style
 in-app plugin browser: search, hot/newest/tr
ending windows, Chinese keyword mapping, bili
ngual translation, plugin-signature filtering
, and smart one-click install/update/uninstal
l with an installed-plugins manager.
- [dsh-w
eb-review](https://github.com/CanglongCl/dsh-
web-review) - Isolated web page previews with
 element annotations and visual adjustments t
hat guide source edits.
- [dsh-markdown-previ
ew](https://github.com/GitHubJiKe/dsh-markdow
n-preview) - In-chat preview for produced fil
es: click a produced-file chip to render Mark
down (markdown-it + highlight.js), images, or
 plain text in the conversation, with system-
app open kept one click away.
- [dsh-i18n](ht
tps://github.com/Semidia/dsh-i18n) - Chinese 
localization for tool results: intercepts too
l execution output and translates English mar
kers (`[exit code]`, `[timed out]`, `[sandbox
: ...]`, etc.) into Chinese, with a settings 
toggle.
- [dsh-settings-tuner](https://github
.com/Semidia/dsh-settings-tuner) - System par
ameter adjustment UI: grouped settings page f
or timeouts, parallelism, LLM retry policy, m
odel params, web search, permissions and pres
ets; safe profile-config editing with line-le
vel YAML matching and post-write validation.

- [dsh-workspace-menu](https://github.com/0im
zero/dsh-workspace-menu) - Workspace/chat con
text menu for the DSH home page: pin, rename,
 open in file explorer, archive, fork, copy, 
and open in a new window.
- [dsh-mobileweb-ad
apter](https://github.com/dsh-external/dsh-mo
bileweb-adapter) - Mobile/PWA layout adaptati
on + LAN WebSocket fix.
- [dsh-split-panes](h
ttps://github.com/dsh-external/dsh-split-pane
s) - Split panes.
- [dsh-skins](https://githu
b.com/dsh-external/dsh-skins) - Web UI skins.

- [dsh-skin](https://github.com/KinGao294/ds
h-skin) - Codex-style skin switcher + custom 
wallpaper for the Web UI: curated --dsw-alias
-* palettes and a translucent wallpaper layer
 with opacity/blur controls.
- [dsh-chat-thum
b](https://github.com/dsh-external/dsh-chat-t
humb) - Chat thumbnails (cordis).
- [show-bas
h-command](https://github.com/dsh-external/sh
ow-bash-command) - Show actual command conten
t instead of descriptions.
- [turtle-ui](http
s://github.com/dsh-external/turtle-ui) - Offi
cial UI plugin reference implementation.
- [@
zhaoolee/dsh-notes](https://github.com/zhaool
ee/notes) - Export DSH conversations as Smart
isan Notes-style PNGs, or create and update M
arkdown notes in a configured account-scoped 
workspace.
- [dsh-plugin-description](https:/
/github.com/MysaDC/dsh-plugin-description) - 
Adds bilingual (zh/en) descriptions to every 
plugin card on the Web Settings plugin list; 
publishes a `pluginDescriptions` service for 
other plugins to register their own.
- [dsh-p
lugin-list-plus](https://github.com/yibiner/d
sh-plugin-list-plus) - Trust-tiered, collapsi
ble plugin list with comprehensive per-plugin
 details for Web Settings.
- [dsh-premium-the
mes](https://github.com/xiaoyanzi191/dsh-prem
ium-themes) - 8 curated color schemes plus cu
stom palette import (name + scheme + seed col
ors derive a full token map), a Palette row i
n General settings, hot-plug install.
- [dsh-
builtin-toggles](https://github.com/Starfie1d
1272/dsh-builtin-toggles) - Human-readable ca
talog for official DSH Web built-ins with sta
tus explanations and an audited set of safe U
I toggles.
- [dsh-file-mentions](https://gith
ub.com/a903067276-rgb/dsh-file-mentions) - Cl
ickable file paths in DSH replies: Codex-styl
e inline open, ?? reveal in file manager, a
nd a mentioned-files chip list at the turn ta
il.
- [dsh-plugin-colorscheme](https://github
.com/Civitasv/dsh-plugin-colorscheme) - Web U
I colorscheme plugin: switch and persist them
es from Settings, with 8 built-in open-source
 presets plus custom themes.
- [dsh-plugin-se
tting-mcp](https://github.com/Ceelog/dsh-plug
ins/tree/main/src/plugins/dsh-plugin-setting-
mcp) - Manage MCP servers from the Web settin
gs panel, with add, edit, remove, enable/disa
ble and hot reload on save.
- [dsh-theme-plug
in](https://github.com/BeiZi6/dsh-theme-plugi
n) - Theme studio for the DSH Web GUI: five b
uilt-in presets plus fully customizable light
/dark palettes (accent, background, foregroun
d, UI and code fonts, translucent sidebar, co
ntrast), hot-swapped instantly and persisted 
in localStorage.
- [dsh-plugin-smooth-stream]
(https://github.com/SpookySandwich/dsh-plugin
-smooth-stream) - Better streaming text anima
tion for DeepSeek Harness.
- [dsh-smooth-stre
am](https://github.com/Laplace-bit/dsh-smooth
-stream) - Silky streaming reveal for the Web
 UI: text appears at the model's arrival rate
, new lines glide in, no flicker; follow stay
s with the user and respects prefers-reduced-
motion.
- [dsh-whale-switch](https://github.c
om/bowen507/dsh-whale-switch) - Minimal on/of
f loop: a desktop shortcut launches dsh web, 
and an animated whale button (hover to arm, c
lick to dive) shuts it down gracefully and cl
oses the tab.
- [dsh-homepage-skin](https://g
ithub.com/yushi-xxh/dsh-homepage-skin) - Brin
gs the DeepSeek Harness homepage background t
o DSH Web: WebGL fluid light, dot-line grid a
nd a digital whale, with dark and light palet
tes.
- [Open Sea Skin](https://github.com/d-d
ev0101/open-sea-skin) - Realtime WebGPU ocean
 skin with lower-left controls for waves, day
light, glass opacity and automatic day cyclin
g; tested on DSH Web 0.1.0-rc.6.
- [dsh-plugi
n-help](https://github.com/Semidia/dsh-plugin
-help) - Installed-plugins README summary pan
el: floating ?? button, zh-preferring title
s, default-all-expanded READMEs, blue circula
r index badges, per-plugin one-click update (
`dsh plugin update`) via a loopback endpoint.

- [dsh-mcp-panel](https://github.com/PerryLi
nk/dsh-mcp-panel) - MCP management console fo
r the official DSH MCP client: server CRUD wi
th approval-gated, backed-up profile writes, 
a tool trial console through the official too
l pipeline, health diagnostics, and connectio
n status.
- [dsh-session-pin](https://github.
com/PerryLink/dsh-session-pin) - Pin sessions
 and workspaces to the top of the sidebar wit
h per-pin colors, plus a navigation organizer
: boards, tags and saved views, health summar
ies, and /goto.
- [RevolutionLA/dsh-dream-ski
n](https://github.com/RevolutionLA/dsh-dream-
skin) - One-command skinning for DSH Web: 8 o
riginal themes, wallpaper (opacity/blur/gradi
ent/URL), per-user accent, and shareable them
e packs + favorites + surprise-me. Purely nat
ive token system.
- [dsh-workspace-sort](http
s://github.com/Moonshile/moonshile-dsh-plugin
s) - Re-sorts sidebar workspaces by last acti
vity once per day; stable order within the da
y.
- [dsh-theme-manager](https://github.com/r
uncat-tommy/dsh-theme-manager) - Two-level th
eme manager for the DSH Web UI: pick a cultur
e / scene, a national flag, a developer palet
te, or a bold high-contrast pairing first, th
en a concrete style (58 built-in palettes, li
ght & dark).

- [weibaohui/dsh-settings-ui](h
ttps://github.com/weibaohui/dsh-settings-ui) 
- Customizes the DSH native settings window: 
preset or custom sizes, fullscreen, backgroun
d transparency, and theme, solid-color, or im
age backgrounds, with a floating ball for qui
ck access; saved in the local browser.

## Da
shboards & Session UX

- [zoahdev/dsh-timeshe
et](https://github.com/zoahdev/dsh-timesheet)
 - Turn-based time tracking from session logs
: per-day/project/provider/source rollups, to
ol calls, failures, TTFT (CLI + `timesheet` t
ool).
- [zoahdev/dsh-replay](https://github.c
om/zoahdev/dsh-replay) - Time-travel debugger
: replay, visualize, and diff a session's ful
l trajectory from `session.jsonl.zstd` (zero 
deps, Node = 22.19).
- [dsh-session-cluster
](https://github.com/dsh-external/dsh-session
-cluster) - Session clustering.
- [session-ch
atlog](https://github.com/dsh-external/sessio
n-chatlog) - Session chat logs.
- [dsh-sessio
n-archive](https://github.com/lbh1nb/dsh-plug
ins/tree/main/packages/dsh-session-archive) -
 Settings section to view archived sessions a
nd permanently delete dead conversations (two
-step confirm, running sessions locked).
- [d
sh-plugin-no-workspace](https://github.com/Sp
ookySandwich/dsh-plugin-no-workspace) - Stand
alone workspace-free conversations with lossl
ess detach and direct top-level sidebar rende
ring, without replacing DSH's native workspac
e UI (npm: dsh-plugin-no-workspace).
- [dsh-o
ffice](https://github.com/dsh-external/dsh-of
fice) - Office file read/write bundle: model 
edits Office files, docx/pdf preview in web c
lient.
- [dsh-token-pet](https://github.com/p
k7j7sqryy-ops/dsh-token-pet) - Cute token-usa
ge pet in the session header: live context oc
cupancy, per-session usage and breakdown, plu
s date/weekday, weather, 3-day forecast and s
evere-weather alerts, all theme-aware.
- [dsh
-token-usage](https://github.com/jiamuAi/dsh-
token-usage) - Codex-style token usage panel:
 whole-instance cumulative/per-session peak t
okens, longest chat & streak, daily/weekly/cu
mulative activity heatmap, and plugin/skill T
op5.
- [dsh-office](https://github.com/Fayeli
n12/dsh-office) - Office workspace & session 
dashboard for DeepSeek Harness (DSH): a float
ing 6-column sprite panel visualizing workspa
ces, sessions, token usage and subagents � 
plus Agent Mail, Feishu/Lark message feed, me
eting schedules, transcripts and an office lo
g tab.
- [dsh-deepseek-quota](https://github.
com/yingjunnan/dsh-deepseek-quota) - DeepSeek
 API balance in a bottom-right floating card 
on the DSH Web page (auto-refresh + manual re
fresh).
- [dsh-pin-recall](https://github.com
/kerwin2046/dsh-pin-recall) - Pin assistant r
eplies from the Web action strip and recall t
hem into the next model turn (`/pin` `/recall
`, with optional wake).
- [dsh-turn-navigator
](https://github.com/dsh-external/dsh-turn-na
vigator) - DSH Web turn navigation plugin.
- 
[dsh-fork-graph](https://github.com/chouyong/
dsh-fork-graph) - Git-style conversation fork
 graph in the session header: colored lanes a
nd fork curves show which session branched fr
om which, with click-to-jump navigation.
- [d
sh-session-tree](https://github.com/ZhengQing
Jing/dsh-session-tree) - Read-only session li
neage tab for DSH Web: browse the current roo
t, fork, and subagent family as a bounded tre
e and click any node to navigate.
- [chouyong
/dsh-branch-review](https://github.com/chouyo
ng/dsh-branch-review) - Track human decisions
 for related DSH session branches: keep, disc
ard, or follow up with reasons, labels, and e
xternal links.
- [dsh-fork-diff](https://gith
ub.com/chouyong/dsh-fork-diff) - Read-only pa
rent and sibling branch comparison in DSH Web
: message and tool diffs, usage and latency s
ummaries, filters, and open-session navigatio
n.
- [dsh-usage](https://github.com/Huasecc/d
sh-usage) - DeepSeek account-wide usage & bal
ance panel from the official platform API (ap
i/v0/usage/by_api_key): cache hit/miss & outp
ut tokens, cost, 24h�90d ranges, persistent
 platform token, and a model-visible `deepsee
k_usage_query` tool.
- [dsh-usage-panel](http
s://github.com/AlfredChaos/dsh-usage-panel) -
 Token usage statistics as a Settings page: c
umulative KPIs, a six-month activity heatmap,
 stacked per-model daily bars and a model don
ut, rescanned read-only from session logs.
- 
[fancr-code/dsh-plugin-usage-meter](https://g
ithub.com/fancr-code/dsh-plugin-usage-meter) 
- Usage/cost/balance meter in the composer do
ck: button-style chip with live peak/off-peak
 pricing tags, today/last-7-days per-model st
acked bar charts, budget alerts, and a persis
tent cross-session ledger.
- [dsh-what-change
d](https://github.com/sjh9714/dsh-what-change
d) - Session-wide file change review in the s
ession header. Lists every file the agent wro
te this session with its hunks, counts refuse
d writes separately from changes, and folds f
rom a session projection rather than the on-d
isk log.
- [dsh-token-usage-dashboard](https:
//github.com/solstice621/dsh-token-usage-dash
board) - Codex-style token usage dashboard: f
ive stat cards, GitHub-style activity heatmap
 (daily/weekly views), insights & model ranki
ng; persisted snapshot with incremental sync,
 survives session deletion.
- [dsh-web-billin
g](https://github.com/bpc-oss/dsh-web-billing
) - RMB/USD token billing for the DSH web: of
ficial-policy auto pricing (incl. peak/off-pe
ak hours), per-message cost ledger, account b
alance, locale-driven currency display.
- [ds
h-balance-meter](https://github.com/Ghost0111
18/dsh-balance-meter) - DeepSeek account bala
nce and session cost in the DSH Web composer 
dock (auto-fetched official pricing, peak/off
-peak support).
- [dsh-cost-meter](https://gi
thub.com/Han-1413141/dsh-cost-meter) - Per-se
ssion and daily API cost, budget with usage %
, official balance, history dashboard, and on
e-click official price sync with peak/off-pea
k pricing.
- [TokenLedger](https://github.com
/zh667/TokenLedger) - Local DSH token usage b
y relay site, project, and model, with accoun
t balances and subscription quota windows.
- 
[dsh-budget](https://github.com/PerryLink/dsh
-budget) - Cost governance for DeepSeek Harne
ss: aggregated token/cost metering per model,
 session and day, session/daily/monthly budge
t caps with threshold alerts and alert/block/
degrade over-limit policies, carbon footprint
 estimation, per-model latency benchmarks, a 
Settings budget tab, and the /budget command.

- [Phant0Meow/dsh-meow-cachebilling](https:/
/github.com/Phant0Meow/dsh-meow-cachebilling)
 - Per-round cache billing inside the compose
r context-meter popover: what the current cal
l spends on cache hits, misses, and output in
 CNY, with automatic official peak/off-peak a
nd per-model pricing; hidden on non-official 
DeepSeek routes.
- [dsh-cost-meter](https://g
ithub.com/Sttrevens/dsh-cost-meter) - Per-tur
n USD cost in the Web UI: session total in th
e header and per-turn cost in each message fo
oter, with a hover breakdown (token usage � 
configurable pricing table).
- [dsh-linked-fo
lders](https://github.com/Sttrevens/dsh-linke
d-folders) - Multi-folder workspace: a global
 linked-folders list plus per-session on-the-
fly linking (link_folder/unlink_folder), mana
ged from the Web sidebar.
- [dsh-plugin-cost]
(https://github.com/yweilai77-dev/dsh-plugin-
cost) - Session cost estimate in the DSH Web 
composer dock (tokenUsage � configurable pri
ce table, one-click official-price refresh).

- [dsh-balance-tide](https://github.com/huany
uLv/dsh-balance-tide) - DeepSeek account bala
nce and session cost under the composer, with
 a live peak/off-peak pricing badge (Beijing 
time), a countdown to the next pricing switch
, and hover price tables with usage advice.
-
 [dsh-spend](https://github.com/nonewind/dsh-
spend) - Token usage and estimated spend for 
the DSH web UI: floating panel with per-model
 / per-day / per-session stats and auto-detec
ted billing plans.
- [dsh-worktime-board](htt
ps://github.com/spacexun2/dsh-worktime-board)
 - Agent worktime dashboard: floating day/wee
k/month stats, multi-dimension heatmap, threa
d attendance Gantt, school-year calendar, and
 a 12-realm xianxia score system for agent ac
tivity.
- [dsh-live-stats](https://github.com
/dsh-external/dsh-live-stats) - Live token es
timates and generation TPS.
- [dsh-tps](https
://github.com/dsh-external/dsh-tps) - TPS met
er.
- [DSH-better-sidebar](https://github.com
/dsh-external/DSH-better-sidebar) - Sidebar: 
file rendering/terminal/Git/subagents/custom 
APIs.
- [dsh-web-panel](https://github.com/ds
h-external/dsh-web-panel) - Embedded terminal
 dock + Git Review + file view.
- [dsh-tmux-c
c](https://github.com/adrianleb/dsh-tmux-cc) 
- Persistent tmux control-mode cockpit for DS
H Web that mirrors native panes in a dock.
- 
[dsh-subagent-tree](https://github.com/dsh-ex
ternal/dsh-subagent-tree) - Subagent tree vis
ualization.
- [dsh-web-workflow-visualizer](h
ttps://github.com/dsh-external/dsh-web-workfl
ow-visualizer) - Workflow visualization.
- [d
sh-ui-progress](https://github.com/dsh-extern
al/dsh-ui-progress) - Progress indicators.
- 
[dsh-milestone](https://github.com/SnowCresce
nter-tech/dsh-milestone) - Right-side dot-tim
eline rail to jump between user messages.
- [
dsh-plan-switch](https://github.com/a90306727
6-rgb/dsh-plan-switch) - One-click enter/exit
 Plan mode for the DSH web input bar, a quick
-click shortcut for /plan.
- [dsh-turn-index]
(https://github.com/Simon314620/dsh-turn-inde
x) - Turn-index sidebar: one entry per user t
urn, click to jump, scroll-spy highlighting.

- [dsh-outline](https://github.com/urzeye/dsh
-outline) - Real-time conversation outline pa
nel for the DSH Web session page: a tree of u
ser questions and Markdown headings (H1-H6) t
hat updates live while streaming, with click-
to-jump highlight, expand-depth control, sear
ch, and per-session favorites.
- [dsh-convers
ation-anchors](https://github.com/biggerboy/d
sh-conversation-anchors) - Sidebar conversati
on anchor navigation: one anchor per chat nod
e (user / assistant / tool / command) with ro
le badges and summaries, click to smooth-scro
ll to that message; live-refreshes with the s
ession.
- [dsh-web-attention-badge](https://g
ithub.com/Luaphes/dsh-web-attention-badge) - 
Attention reminders: frame badge, tab-title c
ount and whale-favicon recolor for sessions w
aiting for input or finished unopened.
- [dsh
-sidebar-mode](https://github.com/Meredith232
8/dsh-sidebar-mode) - Preset-mode badge embed
ded in the "New Session" button: click to pic
k the default agent preset for the next sessi
on (long names truncate with ellipsis so the 
label stays readable).
- [dsh-hud](https://gi
thub.com/a903067276-rgb/dsh-hud) - HUD status
 panel: git status, MCP servers, skills, mode
l and token usage in a floating side panel.
-
 [dsh-auto-continue](https://github.com/Hsian
gNianian/dsh-auto-continue) - Auto-resumes in
terrupted DSH Web requests: sends a queued ?
???? after network/timeout/host-crash f
ailures, with error classification, adaptive 
backoff, templated continue text and browser 
notifications; everything configurable from t
he plugin settings card.
- [Chu-m/dsh-chat-co
ntinue](https://github.com/Chu-m/dsh-chat-con
tinue) - Auto-retries failed API requests to 
keep DSH conversations running, with configur
able HTTP status and error-code rules.
- [qwe
rt702/dsh-continue-on-limit](https://github.c
om/qwert702/dsh-continue-on-limit) - Auto-sen
ds continue when a local model hits its outpu
t-token cap: dual-source detection (turn-max-
tokens node + provider response), maxConsecut
ive guard (default 3) prevents infinite loops
.
- [dsh-trajectory-debug](https://github.com
/devmom/dsh-trajectory-debug) - Trajectory wa
terfall, deterministic replay, breakpoints, e
dit-and-rerun, fork compare and performance a
nalytics for DeepSeek Harness.
- [dsh-netcafe
](https://github.com/mario03690/dsh-netcafe) 
- Hosted outcome tools bundle (MCP over one c
onfig row): md?docx/pptx/pdf, tables with i
n-code arithmetic checks, China-reachability 
testing from a real mainland vantage, Chinese
 calendar/holidays; free anonymous quota, per
-call cost reporting.
- [dsh-opencodego-usage
](https://github.com/BeiZi6/dsh-opencodego-us
age) - OpenCodeGo quota monitor for the DSH W
eb GUI: a breathing indicator at the input's 
bottom-right (green/yellow/red by remaining s
hare), a liquid-glass panel with rolling/week
ly/monthly usage windows and reset times, aut
o-refreshing every 30 s; API key read from DS
H credentials.
- [penguin-oo/dsh-quota-hub](h
ttps://github.com/penguin-oo/dsh-quota-hub) -
 Unified real-time quota dashboard: one colla
psible glass panel for OpenCodeGo windows, De
epSeek balance, OpenRouter credits, SiliconFl
ow and Moonshot balances � auto-detects DSH
 credentials, host-side fetching (keys never 
reach the browser), custom providers via ~/.d
sh/dsh-quota-hub.json.
- [dsh-trajectory-read
er](https://github.com/flyingtimes/dsh-trajec
tory-reader) - A ???? (trajectory int
erpretation) tab that summarizes each user ro
und � what was wanted, how the assistant th
ought and executed, files/commands/errors �
 via a rules engine plus optional LLM narrati
ve; user messages stay verbatim.
- [dsh-sessi
on-manager](https://github.com/Semidia/dsh-se
ssion-manager) - Right-click context menu on 
sidebar conversation rows: pin, rename, archi
ve, fork, mark unread, copy cwd/id/title/deep
-link, open in explorer/new window.
- [dsh-se
ssion-handoff](https://github.com/WeiYe6/dsh-
session-handoff) - Hand long sessions over to
 a clean one: /handoff summarizes the convers
ation with an LLM, creates a new session+agen
t in the same workspace, injects the handoff 
document as the first message, and auto-opens
 it; the origin session stays unchanged.
- [d
sh-cost-crystal](https://github.com/xxvk/dsh-
cost-crystal) - Floating cost crystal for the
 DSH Web UI: balance card, real-time tok/s, p
eak/off-peak billing countdown, last-24h spen
d, and a ?? next-message cost forecast, all
 timezone-aware.
- [dsh-session-repair-ui](ht
tps://github.com/Semidia/dsh-session-repair-u
i) - Session repair button in the conversatio
n header: detects & fixes session-log corrupt
ion � tool-call id swaps, empty call ids (`
message must have tool source`), unknown even
t types from disabled plugins (marks `ignorab
le`), torn zstd tails, missing final-frame ne
wlines; ghost-style UI, auto-backup before wr
ites.
- [plugin-team-board](https://github.co
m/whyihaveyou/dsh-suite/tree/main/packages/pl
ugins/plugin-team-board) - Shared multi-agent
 task board (create / claim / transition / qu
ery) over a Cordis service key.
- [zoahdev/ds
h-code](https://github.com/zoahdev/dsh-code) 
- VS Code extension: run one-shot DeepSeek Ha
rness tasks (`dsh --profile headless`) from a
 command or panel.
- [dsh-event-auditor](http
s://github.com/qing3a/dsh-event-auditor) - Ev
ent-flow audit panel: event types, distributi
on, counts, and recent events for plugin auth
ors.
- [dsh-session-explorer](https://github.
com/Zn-Dk/dsh-session-explorer) - Message-lev
el full-text search browser across DSH sessio
ns (FTS5 trigram over user / assistant / stee
ring / tool with per-kind filters), deduplica
ted across fork/continued sessions, read-only
 context preview with auto-scroll to the focu
sed message and one-click jump to the real se
ssion, incremental/full rebuild with health c
heck, zh/en i18n follows the Host locale.
- [
dsh-whale-meter](https://github.com/Shiye-10P
ages/dsh-whale-meter) - Usage tiers (????
???) with a locally-estimated percentile and 
shareable stats card; 46 models across 6 vend
ors including size-tiered Chinese pricing; ba
ckfills pre-install sessions; old-vs-new rate
s across the 2026-08-17 change.
- [dsh-file-u
pload](https://github.com/a903067276-rgb/dsh-
file-upload) - One upload button plus drag-an
d-drop files into the conversation as local p
aths: save to the project's uploads/, path te
xt into the input box, works with any vision 
tool.
- [dsh-bill](https://github.com/Jannchi
e/dsh-bill) - Cost tracking: per-turn cost li
ne, spend attributed to tool output / model o
utput / system prompt / commands, budget, for
ecast; priced per call from models.dev + Open
Router (8000+ models) and never recomputed.
-
 [dsh-history](https://github.com/chenproton/
dsh-history) - Browse every message you sent 
in the current session: full-history listing 
with newest-first sort, text filter, one-clic
k copy, and click-to-jump that auto-loads ear
lier history when the target is not yet loade
d.
- [JohnXu22786/session-titler](https://git
hub.com/JohnXu22786/session-titler) - Two-pha
se session captioning for DeepSeek Harness: i
nstant keyword captions while busy, budget-mo
del refinement when idle.
- [dsh-billing-tui]
(https://github.com/Ethanz11-creat/dsh-billin
g-tui) - Real-time token/cost billing with of
ficial DeepSeek peak/off-peak pricing: TUI st
atus line and a whale ASCII receipt via /bill
ing.

- [woosh2010/dsh-usage-dashboard](https
://github.com/woosh2010/dsh-usage-dashboard) 
- Peak/valley billing dock and usage analytic
s: token/cost/model stats, trend and token-mi
x charts, latest-20-turns records, global tim
e/session/model filters.
- [runcat-tommy/dsh-
panda-calendar](https://github.com/runcat-tom
my/dsh-panda-calendar) - Panda Calendar (??
????) conversation-view tab: solar/lunar 
dates, ganzhi, Chinese zodiac, solar terms, f
estivals, China public holidays incl. make-up
 workdays, and multi-city weather; free data 
sources, no API key.
- [dsh-session-enhance](
https://github.com/Tinger-X/dsh-session-enhan
ce) - Full-control session management for DSH
 Web: archive, guaranteed physical delete (to
mbstone anti-resurrection), drag-and-drop wor
kspace moves, conversation notifications, cop
y session ID and one-click record sync.
## ID
E & Clients

- [Blue](https://github.com/dsh-
blue/blue) - Interactive TUI plugin for DeepS
eek Harness � a pi-tui renderer mounted as 
a Cordis bundle: streaming transcript, tool-c
all cards, approval overlays, session managem
ent, theming.
- [dsh-cc-tui](https://github.c
om/dsh-external/dsh-cc-tui) - Claude Code-sty
le fullscreen TUI (streaming expand / double-
Esc rollback).
- [dsh-grok-tui](https://githu
b.com/chen-001/dsh-grok-tui) - TUI built with
 grok-build.
- [dsh-pi-tui](https://github.co
m/lqhl/dsh-pi-tui) - Pi TUI (differential-ren
dering terminal framework) front end: streami
ng markdown, thinking collapse, tool cards, s
lash commands, approval/question overlays, sh
ared dsh session store.
- [Martty](https://gi
thub.com/openma-ai/Martty) - DSH-first Rust/r
atatui agent TUI with streamed tool calls, su
bagents, durable sessions, and a Cordis-exten
sible client UI.
- [dsh-terminal](https://git
hub.com/geebos/dsh-terminal) - Collapsible in
-conversation interactive terminal with multi
-tab live shells, auto-reconnect, one-click q
uick commands, and a bilingual UI that follow
s the theme.
- [lk251066/dsh-tui-pro](https:/
/github.com/lk251066/dsh-tui-pro) - Full-scre
en terminal workbench for DeepSeek Harness wi
th a durable assistant, workspace-grouped pro
ject sessions, and structured thinking, tool,
 diff, plan, and subagent views.
- [DSH-Porta
ble](https://github.com/WSL043/DSH-Portable) 
- Cross-platform one-folder distribution of D
eepSeek Harness with a bundled runtime, plugi
n market, data-preserving updates, and sessio
ns, settings, plugins, and workspace that mov
e together.
- [deepseek-harness-desktop](http
s://github.com/chyra-moon/deepseek-harness-de
sktop) - Native Windows desktop shell: 1:1 of
ficial web UI with embedded server hosting, t
ray and auto-recovery.
- [Harness Desktop](ht
tps://github.com/baiyuscc13724-max/deepseek-h
arness-desktop) - Windows desktop app for the
 official DSH Web UI with a Chinese installer
 and portable build, quick themes, an in-app 
plugin marketplace, separate main/subagent mo
del selection, and verified updates.
- [dsh-d
esktop](https://github.com/foolgry/dsh-deskto
p) - Download-and-run Electron desktop build 
(macOS/Windows installers): no Node.js or ter
minal needed, tracks upstream `@deepseek-ai/d
sh` releases automatically, with built-in web
 UI and auto-update.
- [deepseek-harness-desk
top](https://github.com/fendouai/deepseek-har
ness-desktop) - Tauri 2 desktop distribution 
of DeepSeek Harness with the complete Web UI,
 a supervised local sidecar, and a bundled No
de.js 24 runtime (macOS/Linux/Windows).
- [De
epSeek Harness Desktop](https://github.com/ds
h-tauri-desk/deepseek-harness-desktop) - One-
click Tauri 2 desktop distribution of DeepSee
k Harness: bundled runtime, no Node.js/pnpm/D
ocker required, native macOS/Windows/Linux pa
ckages.
- [DeepSeek Harness Desktop](https://
github.com/web-casa/DeepSeek-Harness-Desktop)
 - Community Tauri 2 desktop distribution wit
h a supervised local sidecar, bundled Node.js
 24, native Windows/macOS packages, and a [we
bsite](https://dsharness.app).
- [DeepSeek Ha
rness Desktop](https://github.com/chokwinlee/
deepseek-harness-desktop) - Self-contained ma
cOS/Windows desktop host for the official DSH
 Web UI; macOS uses Tauri/WKWebView and ships
 sub-90 MB DMGs with the Harness runtime bund
led.
- [dsh-vscode](https://github.com/Lixxx1
/dsh-vscode) - VS Code right-sidebar client f
or the official DSH runtime: project and edit
or-selection context, permission/plan control
s, queued steering messages, and native diff 
review.
- [zhibailu/dsh-vsc](https://github.c
om/zhibailu/dsh-vsc) - Native VS Code sidebar
 + editor bridge for DeepSeek Harness: ask ab
out a selection, review agent changes, approv
al and question cards; connects to the config
ured DSH URL and can auto-start `dsh web` whe
n unavailable.
- [dsh4vscode](https://github.
com/DoggyHU/dsh4vscode) - VS Code chat window
s backed by the DSH agent: OpenCode-style ind
ependent sessions, model auto-routing (Flash/
Pro/Pro Max).
- [dsh-plugin-open-editor](http
s://github.com/Civitasv/dsh-plugin-open-edito
r) - Open the current workspace in your local
 editor (VS Code, Cursor, JetBrains, Vim, ...
) from the session header.
- [dsh-open-with](
https://github.com/ChuanTianML/dsh-open-with)
 - Open registered DSH workspaces from the We
b UI in detected or configured local editors,
 terminals, or file managers, with a remember
ed per-browser preference.
- [DSH-for-VSC](ht
tps://github.com/yauntyour/DSH-for-VSC) - VS 
Code extension embedding the DSH WebUI as an 
editor panel: sidebar console with service st
atus and start/stop, hidden auto-restart, sta
tus-bar indicator and run logs.
- [dsh-gui](h
ttps://github.com/xuboboo/dsh-gui) - Third-pa
rty Windows desktop client for DeepSeek Harne
ss: native window, branded theme & splash, st
artup crash fixes, token usage statistics.
- 
[DSH Studio](https://github.com/Moresyl/dsh-s
tudio) - Cross-platform Rust/Tauri desktop sh
ell that supervises `dsh web`, reclaims proce
ss trees, selects free ports, and publishes W
indows/Linux/macOS installers without forking
 the upstream UI.
- [DSH Deck](https://github
.com/Socialist-Sister/dsh-deck) - Unofficial 
Electron desktop shell for the official DSH W
eb UI (same code, same data): attach-to-exist
ing-harness mode prevents dual-writer session
 corruption, session-log relocated to the ses
sion row menu, tray residency, single portabl
e exe.
- [DshCockpit](https://github.com/Lxia
yu/DshCockpit) - Electron desktop cockpit for
 `dsh web`: tray-resident background tasks, t
oken/cost tracking with budget alarms, runtim
e auto-update with rollback, Quick Ask hotkey
, scheduled tasks, full-text session search.

- [deepseek-harness-desktop](https://github.c
om/Easyhoov/deepseek-harness-desktop) - Unoff
icial in-process Windows desktop app with tra
y residency, native notifications, and an IPC
 bridge.
- [dsh-shell](https://github.com/Tao
Smile/dsh-shell) - Zero-install desktop shell
 for an already-installed DeepSeek Harness: a
ttaches to a running `dsh web` or auto-launch
es it with your existing Node environment; El
ectron shell with tray plus a double-click Ed
ge app-mode launcher.
- [dsh-desktop](https:/
/github.com/xiaoyanzi191/dsh-desktop) - Elect
ron desktop wrapper for DeepSeek Harness: dou
ble-click to start, automatically manages the
 dsh Web service lifecycle.
- [dsh-chat-tools
](https://github.com/yj060464-commits/dsh-cha
t-tools) - Headless terminal companion toolki
t: chat.sh continuous-conversation REPL (roll
ing context, decision-point voting, live work
flow streaming, effort switching) + automatic
 LLM session-log summarization. Zero-dependen
cy bash + Python.
- [dsh-come](https://github
.com/qing3a/dsh-come) - Desktop shell for Dee
pSeek Harness (Rust single exe): self-bootstr
apping Node, tray, autostart, plugin store.
-
 [dsh-launcher](https://github.com/iceleaf916
/dsh-launcher) - macOS menu-bar launcher for 
dsh: start/stop/restart the web service, hot 
reload, auto-start at login, and open the UI 
in a system or built-in browser.

- [ccgui / 
desktop-cc-gui](https://github.com/zhukunpeng
linyutong/desktop-cc-gui) - Multi-engine AI c
oding desktop client (Tauri): Claude Code, Co
dex, Gemini, OpenCode, DeepSeek Harness and m
ore in one GUI � not a DSH Web UI shell or 
`dsh-plugin`.
- [dsh-desktop-hub](https://git
hub.com/FlashingChen/dsh-desktop-hub) - Elect
ron desktop hub for the official DSH Web UI w
ith a built-in MCP config converter (Claude C
ode / Cursor JSON ? DSH YAML), Skills / Plu
gin management consoles, and a bundled Node.j
s + DSH runtime � no install, no terminal.

- [JohnXu22786/browser-automation](https://gi
thub.com/JohnXu22786/browser-automation) - We
b Bridge: browser automation MCP server for d
sh � real-browser navigation, click, form-f
ill, screenshots, JS execution, accessibility
-tree snapshot driven.
- [JohnXu22786/compute
r-control](https://github.com/JohnXu22786/com
puter-control) - Desktop control for dsh: scr
een capture, pointer/keyboard injection, acce
ssibility-tree semantic actions, emergency st
op, allow/deny rules, confirmation flow and i
dle standby.

## Browser & Remote

- [mrRiseg
a/dsh-remote](https://github.com/mrRisega/dsh
-remote) - Reverse-proxy gateway to control t
he DSH Web UI from a phone browser with full 
feature coverage (incl. privileged methods): 
loopback masquerading, WebSocket passthrough,
 login rate limiting, optional TLS, LAN or pu
blic reverse-proxy deployment.
- [dsh-voice-g
ate](https://github.com/yangfei222666-9/dsh-v
oice-gate) - Voice-first mobile gate into DSH
: a zero-dependency Python service (port 3081
) with a PWA page that sends voice or text to
 the current session, token auth, launchd aut
ostart, and a Tailscale HTTPS recipe.
- [dsh-
browser-panel](https://github.com/dsh-externa
l/dsh-browser-panel) - Headed browser embedde
d in the WebUI, model-driven (Codex-style, ze
ro vision deps).
- [dsh-builtin-browser](http
s://github.com/wqty123/dsh-browser) - Shared 
real browser for DSH: a visible browser windo
w the human can take over, driven by the agen
t over CDP (snapshot/execute/content/tab mana
gement).
- [dsh-browser](https://github.com/d
sh-external/dsh-browser) - Chrome sidebar ext
ension.
- [dsh-deeplink](https://github.com/d
sh-external/dsh-deeplink) - Open DSH WebUI se
ssions or workspaces directly from URL parame
ters.
- [dsh-remote](https://github.com/flymy
sql/dsh-remote) - Multi-machine remote worksp
ace: manage many SSH hosts, pick a local or r
emote workspace in the native Add-workspace f
low (system folder / path browse), mirror a r
emote workspace to a real local folder, and o
perate it with rw_* tools.
- [dsh-ssh](https:
//github.com/jmcc-guo/dsh-ssh) - AI-managed S
SH connections with a live multi-tab terminal
 panel for DeepSeek Harness.
- [dsh-lan-acces
s](https://github.com/Leon0555/dsh-lan-access
) - LAN access for the Web GUI: 0.0.0.0 bind 
plus a crypto.randomUUID polyfill for non-sec
ure (LAN HTTP) contexts (npm: dsh-lan-access)
.
- [xgone/dsh-remote](https://github.com/xgo
ne/dsh-remote) - Remote access & authenticati
on for DeepSeek Harness web UI: account/passw
ord login gate, MFA (TOTP), signed session co
okies, role-based access, in-browser director
y picker, and a Settings page for account man
agement (npm: @xgone/dsh-remote).
- [dsh-disp
atch](https://github.com/alextangson/dsh-disp
atch) - Phone-side command center (plugin + z
ero-knowledge relay + PWA): dispatch tasks in
to isolated git worktrees from your phone, ap
proval push notifications with phone/desktop 
first-answer-wins (never auto-approved), and 
a multi-machine session board; E2E encrypted,
 self-hostable.
- [ego-browser](https://githu
b.com/dsh-external/ego-browser) - Browser age
nt.
- [dsh-webbridge](https://github.com/dsh-
external/dsh-webbridge) - Web bridge.
- [brow
ser4-dsh](https://github.com/dsh-external/bro
wser4-dsh) - Browser4 AI-native browser engin
e (skills).
- [dsh-browser-runtime](https://g
ithub.com/anweat/dsh-browser) - Self-containe
d browser runtime plugin: Playwright (chromiu
m) + OpenCLI as plugin-local deps (global reu
se fallback), exposes a `browser` service and
 interactive browser tools.
- [dsh-computer-u
se](https://github.com/ZRui-C/dsh-computer-us
e) - Text-first computer use: background Chro
mium control via Playwright/CDP plus accessib
ility-first macOS control; actions stay pinne
d to the correct process and window without t
aking the user's pointer (Developer ID signed
, notarized Universal 2 DMG).
- [dsh-adb](htt
ps://github.com/SamXiaBing/dsh-adb) - ADB dev
ice & bench operations: device discovery, str
uctured logcat (background streaming), apk in
stall, file pull/push, dumpsys performance sn
apshots.
- [zoahdev/dsh-vision](https://githu
b.com/zoahdev/dsh-vision) - Vision analysis t
ool: analyze a local image or URL with an Ope
nAI-compatible vision model.
- [dsh-click](ht
tps://github.com/PerryLink/dsh-click) - Nativ
e desktop control for DeepSeek Harness (Windo
ws first): screen_shot, screen_read accessibi
lity trees, click/type/scroll/key, and app la
unch � approval-gated, never stealing foreg
round focus.
- [zoahdev/dsh-browser-use](http
s://github.com/zoahdev/dsh-browser-use) - Bro
wser Use cloud bridge: run real web tasks (op
en pages, click, type, fill forms, extract da
ta) through the Browser Use API.
- [sheep-pro
grammer/dsh-web-search-free](https://github.c
om/sheep-programmer/dsh-web-search-free) - Fr
ee web search for DSH: anonymous Parallel def
ault plus Exa fallback, a Settings toggle, an
d an MCP server compatible with Claude Code a
nd Codex.
- [SeerableOfficial/dsh-web-search-
toggle](https://github.com/SeerableOfficial/d
sh-web-search-toggle) - Per-session Web Searc
h toggle that directs the agent to search the
 web before answering.
- [tabbit-browser](htt
ps://github.com/Tabbit-Browser/dsh-plugin) - 
Drive the user's Tabbit Browser from DSH via 
its Browser-owned, task-isolated Playwright C
LI (`tabbit-cli`): bundled `tabbit-browser` s
kill, =1.9.0 runtime preflight, region-awar
e installer download, and persistent named ta
sk spaces (no Chrome/Ego/CDP fallback).
- [ds
h-tabbit](https://github.com/Tabbit-Browser/d
sh-tabbit) - Drive the user's Tabbit Browser 
from DSH via its Browser-owned, task-isolated
 Playwright CLI (`tabbit-cli`): bundled `tabb
it-browser` skill, =1.9.0 runtime preflight
, region-aware installer download, and persis
tent named task spaces (no Chrome/Ego/CDP fal
lback).
- [dsh-antigravity](https://github.co
m/LiZhenNet/dsh-antigravity) - Google Antigra
vity / Cloud Code Assist model provider for D
SH with native Web OAuth, real-time quota tra
cking, and dynamic reasoning effort routing.

- [JohnXu22786/model-catalog](https://github.
com/JohnXu22786/model-catalog) - Model catalo
g auto-discovery: fetch model listings, prici
ng and capabilities from OpenAI-compatible AP
I hosts, normalized into ready-to-use config.

- [dsh-browser-vision](https://github.com/tr
istan-mcinnis/dsh-browser-vision) - Vision br
owser tool: drives real Chrome over CDP with 
browser-use and reads the page with deepseek-
v4-flash-vision-exp, so canvas text, text bak
ed into images and values in rendered charts 
are readable; returns JSON validated against 
a caller-supplied schema and reports per-run 
token cost.
- [harness-unity-bridge](https://
github.com/WarrenMondeville/harness-unity-bri
dge) - File-based bridge that lets DeepSeek H
arness control the Unity Editor: run EditMode
/PlayMode tests, compile scripts, refresh ass
ets, read console logs, control Play Mode, an
d build � via a deterministic Python CLI, a
 Unity UPM package, and an installable DSH sk
ill (`unity-bridge`).

## Models & Inference


- [dsh-agy-link](https://github.com/amlyczz/
dsh-agy-link) - Google Antigravity (agy CLI) 
model provider for DSH: stream Gemini/Claude/
GPT-OSS subscriptions, native tool cards, thi
nking turns, and in-GUI Google OAuth login.
-
 [dsh-baseurl-probe](https://github.com/Semid
ia/baseurl-probe) - Provider baseURL auto-det
ection: when a provider's baseURL is a bare d
omain (e.g. `https://mzeapi.top`) and only `/
v1` serves the OpenAI-compatible API, the plu
gin auto-fixes it � probes all providers wi
th zero-cost path detection (no API key neede
d).
- [dsh-llm-compat-healer](https://github.
com/Semidia/dsh-llm-compat-healer) - LLM comp
atibility auto-healer for transit/gateway pro
viders: repairs DeepSeek `reasoning_content` 
replay and unsupported `developer` roles with
out a restart, exposes pi-ai compatibility se
ttings, and adds redacted Chinese summaries f
or upstream errors.
- [dsh-provider-health](h
ttps://github.com/Semidia/dsh-provider-health
) - Provider health dashboard as a Settings p
age: read-only per-provider status, health (t
ime-decayed from recent errors), thinking cap
ability, max tokens and latest error, sourced
 from the llm-pi-ai config and the compat-hea
ler error log.
- [dsh-image-gen](https://gith
ub.com/shanliuling/dsh-image-gen) - Native im
age generation for DeepSeek Harness with Goog
le Gemini, OpenAI Images, OpenAI-compatible A
PIs, and ByteDance Seedream.
- [exoticknight/
dsh-labnana](https://github.com/exoticknight/
dsh-labnana) - Labnana image generation for D
eepSeek Harness: text-to-image / image-to-ima
ge / precise editing (NanoBanana Pro, Gemini 
3.1 Flash Image, GPT-Image-2, Wan2.7, Seedrea
m).
- [welsione/dsh-model-router](https://git
hub.com/welsione/dsh-model-router) - Unified 
model routing: one logical ModelID over multi
ple providers with first-token failover and c
ooldown, health-aware candidate ranking, thre
e tiers auto-selected by purpose, per-candida
te reasoning effort, and a settings-page mana
gement panel.
- [dsh-codex-oauth](https://git
hub.com/WNJXYK/dsh-codex-oauth) - ChatGPT/Cod
ex subscription integration for DSH with GPT 
models, image generation, web search, quota r
eporting, and browser/device-code OAuth sign-
in.
- [dsh-qwen-token-plan-cn-responses](http
s://github.com/nickhelion/dsh-plugins/tree/ma
in/packages/qwen-token-plan-cn-responses) - Q
wen Token Plan CN Personal Responses API prov
ider: syncs official model and per-model buil
t-in-tool docs, supports DSH local functions 
and images, and keeps a validated last-known-
good catalog.
- [dsh-codex-subscription](http
s://github.com/WSL043/dsh-codex-subscription)
 - ChatGPT OAuth provider for DSH with Codex 
models, image generation, selectable subscrip
tion search, standard and Spark quota reporti
ng, and a native settings page.
- [dsh-vision
](https://github.com/dsh-external/dsh-vision)
 - Vision bridge: view_image tool over any Op
enAI-compatible VLM (Zhipu free tier by defau
lt).
- [DeepSee](https://github.com/windyslim
e/DeepSee) - DSH `0.1.0-rc.5` Web-profile vis
ual-reasoning gateway: routes image turns thr
ough local, pluggable VLM backends and leaves
 normal DSH text routing intact.
- [dsh-plugi
n-vision](https://github.com/tdf1995/dsh-plug
in-vision) - Vision for text-only LLMs: image
 description / OCR / VQA via free Gemini and 
GLM vision APIs.
- [ysr666/dsh-vision-router]
(https://github.com/ysr666/dsh-vision-router)
 - Free vision for text-only agents: built-in
 keyless vision chain plus pixel tools (Q&A, 
grounding, crop, pixel diff, colors, OCR, SVG
 trace, cutout, screenshots); paste an image 
and it just works � no Python, one-command 
install.
- [dsh-vision-proxy](https://github.
com/Flyvhidbwo/dsh-vision-proxy) - DeepSeek b
rain + automatic image transcription: GUI ima
ges are transcribed via the official deepseek
-v4-flash-vision-exp by default (a pure-text 
V4-Pro brain can see images); any OpenAI-comp
atible VLM or local Ollama as alternatives.
-
 [DSH-Multimodal](https://github.com/yauntyou
r/DSH-Multimodal) - Per-file-type multimodal 
chains: preset processing models per wildcard
 convert image/video/audio files into prompt 
tokens before they reach the text-only sessio
n model, with per-preset fallback chains and 
a Multimodal settings page.
- [dsh-draw](http
s://github.com/PerryLink/dsh-draw) - Unified 
static-image generation router: one image_gen
erate tool with standard parameters, config-d
riven OpenAI-compatible engine routing (OpenA
I Images, Zhipu CogView, and any compatible e
ndpoint) with health-aware fallback, durable 
workspace attachment results, per-session quo
ta accounting, an in-conversation result card
, and a Plugins settings panel that stores AP
I keys as credential references.
- [dsh-advis
or](https://github.com/dsh-external/dsh-advis
or) - Second model passively reviews each tur
n and injects notes.
- [dsh-clawrouter](https
://github.com/BlockRunAI/dsh-clawrouter) - Bl
ocking safety gate: a stronger model rules al
low/deny/ask on risky tool calls, enforced by
 the tool executor rather than by prompt. Opt
ional BlockRun x402 route for 67 models, paid
 per request from a wallet.
- [dsh-llm-fallba
cks](https://github.com/dsh-external/dsh-llm-
fallbacks) - Role-based LLM retry/fallback st
rategy.
- [dsh-pi-adapter](https://github.com
/dsh-external/dsh-pi-adapter) - ExtensionAPI 
bridge for pi.
- [dsh-a2a](https://github.com
/dsh-external/dsh-a2a) - Agent2Agent mesh.
- 
[dsh-plugin-acn](https://github.com/acnlabs/d
sh-plugin-acn) - Join ACN from DeepSeek Harne
ss: register this agent, discover others, sen
d messages, read the inbox. Defaults to the C
hina region.
- [dsh-acp](https://github.com/d
sh-external/dsh-acp) - Client-neutral ACP ada
pter.
- [deepseek-harness-acp](https://github
.com/openma-ai/deepseek-harness-acp) - ACP pr
ofile plugin and standalone server that expos
es the full DSH agent to Zed and other ACP cl
ients while reusing DSH credentials, sessions
, and MCP configuration.
- [dsh-slice-agent-l
oop](https://github.com/dsh-external/dsh-slic
e-agent-loop) - Drop-in agent loop with bound
ed-slice context engine (cordis).
- [savemone
ybenchmark](https://github.com/dsh-external/s
avemoneybenchmark) - Cost-reduction benchmark
 (examples + skills).
- [dsh-harness-mcp-serv
er](https://github.com/chushixixin/dsh-harnes
s-mcp-server) - MCP server exposing Harness a
gent: any MCP client (e.g. Hermes) drives Har
ness as its 'arms'.
- [dsh-subagent-tools](ht
tps://github.com/lynx-gt/dsh-subagent-tools) 
- Per-call model / provider / persona / toolF
ilter overrides for subagent delegation, @pre
set: references, provider/model composite ids
 (bundle, no patched files).
- [dsh-subagent-
cwd](https://github.com/lynx-gt/dsh-subagent-
cwd) - Extends dsh-subagent-tools with a per-
call cwd for subagents and the two in-process
 provider patches it requires.
- [dsh-plugin-
subagent-director](https://github.com/Severus
Zh/dsh-plugin-subagent-director) - Per-subage
nt LLM provider/model selection with role tem
plates (subagent_role tool).
- [penguin-oo/ds
h-delegate-router](https://github.com/penguin
-oo/dsh-delegate-router) - Automatic Flash/Pr
o routing for DeepSeek Harness subagent calls
: light tasks run on a cheap model (e.g. V4 F
lash), heavy tasks stay on the strong model ?
?? with per-call overrides and /delegate sess
ion modes.
- [Cavan-Ou/dsh-flash-godmode](htt
ps://github.com/Cavan-Ou/dsh-flash-godmode) -
 Reasoning-mode routing plugin for V4 Flash o
n headless: w7 persona anchoring, first-turn 
tool anchoring and complexity-dispatched guid
ance.
- [dsh-subscription-auth](https://githu
b.com/Khellendros97/dsh-subscription-auth) - 
Subscription OAuth login: use ChatGPT/Claude/
Grok/Kimi subscription accounts (not API keys
) with automatic model discovery.
- [dsh-llm-
oauth](https://github.com/ziyou979/dsh-llm-oa
uth) - OAuth / subscription-plan LLM login (G
rok, GitHub Copilot, OpenAI Codex, Anthropic,
 OpenRouter): durable credential store with o
n-request token refresh, no repo patches (Gro
k/Copilot verified; use Codex with caution).

- [dsh-llm-local-token](https://github.com/ti
anxia--/dsh-llm-local-token) - Reuse the OAut
h credentials your local Codex CLI and Claude
 Code already hold: registers `openai-codex` 
and `anthropic` routes read from `~/.codex/au
th.json` and `~/.claude/.credentials.json` (m
acOS Keychain fallback), refreshes tokens nea
r expiry, and reports subscription usage from
 provider rate-limit headers.
- [loongport-ds
h](https://github.com/SailingLoong/loongport-
dsh) - Multi-site relay provider setup: signe
d provider directory (identity, URLs, models)
, Settings ? LoongPort page for provider an
d manual API key configuration, OpenAI-compat
ible routes (npm: loongport).
- [dsh-llm-fall
back](https://github.com/Visol-456/dsh-llm-fa
llback) - Provider fallback chain: the reques
t head is never rewritten (your picked model 
stays); on switchable failure it retries thro
ugh the configured backup targets in order, w
ith a Web UI settings panel.
- [dsh-smart-rou
te](https://github.com/Semidia/dsh-smart-rout
e) - Smart provider routing: composer-button 
one-click enable/disable, any channel error (
including 4xx) auto-falls-back to the next ch
annel, chain names shown in the model selecto
r without exposing internal channels/models, 
multi-chain management with settings UI.
- [d
sh-sampling-sliders](https://github.com/Semid
ia/dsh-sampling-sliders) - Composer sampling 
panel: temperature / maxTokens sliders with h
ot-apply and persist-to-file modes, applied t
o every provider via the agent/request hook.

- [dsh-service-control](https://github.com/Se
midia/dsh-service-control) - Restart & shutdo
wn buttons in the session header utilities: g
raceful appExit shutdown, auto-restart of `ds
h web` via scheduled task ? launcher `-Cont
rolledRestart`.
- [dsh-output-styles](https:/
/github.com/PerryLink/dsh-output-styles) - Ru
ntime-switchable model output styles with Cla
ude Code outputStyles parity (/style command,
 per-session persistence, web picker), plus t
he output.render.* presentation protocol: a r
enderer registry, per-session/per-tool rules,
 and /export.
- [NOirBRight/dsh-llm-ollama](h
ttps://github.com/NOirBRight/dsh-llm-ollama) 
- Ollama Cloud native chat adapter: registers
 an `ollama-cloud` LLM route with native mode
l discovery (context windows, vision, thinkin
g, tools) and web search/fetch providers.
- [
dsh-llm-inspector](https://github.com/cdxiaod
ong/dsh-llm-inspector) - Unified LLM request/
response inspector: reasoning-effort tuning, 
external-think export, traffic & bundle analy
sis.
- [dsh-github](https://github.com/PerryL
ink/dsh-github) - Official-grade GitHub CI in
tegration: composite action.yml, polling PR r
eview bot with idempotent inline comments and
 a status-check gate, plus PR/issues tools wi
th every write gated by human approval.
- [ds
h-local-ai](https://github.com/PerryLink/dsh-
local-ai) - Ollama local-model adapter: ollam
a_list/pull/remove/show plus health checks, r
egisters an Ollama route via the official Llm
Adapter with model_route rules (offline-first
 / long-text / privacy) and cloud fallback; /
ollama command for a one-shot overview.
- [ra
pid-mlx-dsh-provider](https://github.com/raul
lenchai/rapid-mlx-dsh-provider) - Native prov
ider for Rapid-MLX, an Apple-silicon local in
ference server: registers a `rapid-mlx` LlmAd
apter route that reads model facts (context w
indow, reasoning parser, capabilities) from t
he server's `/v1/models` instead of a hand-wr
itten settings.yaml, so switching served mode
ls needs no re-setup and compaction is timed 
to the real context window.
- [dsh-llm-gate](
https://github.com/d3vmeh/dsh-llm-gate) - Per
-provider concurrency gate on the llm/stream 
waterfall: holds surplus model requests in a 
FIFO queue inside DSH so main agent, subagent
s and compaction take turns on a single-slot 
local server (llama.cpp --parallel 1) instead
 of timing out; maxConcurrent / maxQueued / q
ueueTimeoutMs.
- [JohnXu22786/github-mcp](htt
ps://github.com/JohnXu22786/github-mcp) - Rep
oGate: GitHub developer workbench MCP server 
for dsh � repositories, issues, PRs, code r
eview, search, zero runtime dependencies.
- [
JohnXu22786/worktree-mgr](https://github.com/
JohnXu22786/worktree-mgr) - Task-isolated Git
 worktrees for dsh: auto-create, sync and tea
r down isolated workspaces per task.
- [JohnX
u22786/spec-driven](https://github.com/JohnXu
22786/spec-driven) - Keel (??): spec-driv
en development discipline skill pack � spec
-first, verify assumptions, prevent over-engi
neering and scope creep; skills+tools+templat
es for dsh.
- [JohnXu22786/adversarial-review
](https://github.com/JohnXu22786/adversarial-
review) - Gavel-review: adversarial multi-per
spective code review � parallel attack lens
es, deterministic static sentinels, cross-len
s merge/dedup, severity grading, suppression 
rules and review history; dsh tools + standal
one CLI.
- [dsh-plugin-cloud](https://github.
com/AgentsDanceAI/deepseek-harness-cloud/tree
/main/packages/dsh-plugin-cloud) - DSH Cloud 
gateway provider: device-authorized login wri
tes a multi-model provider row (DeepSeek, GPT
, Claude, Gemini and more) into the user conf
ig layer; works against the hosted service or
 a self-hosted deployment.
- [dsh-plugin-roll
out-scout](https://github.com/SpookySandwich/
dsh-plugin-rollout-scout) - Detects which con
versation model your account is being served:
 launches concurrent throwaway probe conversa
tions, scores each streaming chain-of-thought
 by how its paragraphs open, and cancels prob
es that read as the older model within second
s.
- [openllmsh/dsh](https://github.com/openl
lmsh/dsh) - Routes the harness through the Op
enLLM gateway: a pure-config Cordis patch tha
t adds an `openllm` provider to the in-box pi
-ai adapter pointed at the local daemon (`127
.0.0.1:8787/v1`, no API key held by dsh) and 
registers the `openllm mcp` stdio server (ope
nllm, claude-context, supermemory tool groups
).
- [lynkr-dsh-plugin](https://github.com/ve
erareddyvishal144/lynkr-dsh-plugin) - Registe
rs Lynkr, a self-hosted tier-routing LLM gate
way, as a custom OpenAI-compatible provider: 
classifies each request's difficulty and rout
es it to the cheapest model that can handle i
t, across 15+ providers (Anthropic, OpenAI, A
zure, Bedrock, Vertex, OpenRouter, Ollama, De
epSeek, and more).
- [dsh-fetch-timeouts](htt
ps://github.com/d3vmeh/dsh-fetch-timeouts) - 
Raises Node's HTTP headers/body timeouts for 
the whole DSH process (default 30 min, proxy-
aware) so Ollama and LM Studio models that st
ay silent while thinking or generating a larg
e tool call are not cut off at 5 minutes; rep
laces the node_modules undici patch.
- [dsh-t
urn-doctor](https://github.com/d3vmeh/dsh-tur
n-doctor) - Explains which layer killed a fai
led turn: times every model request (first by
te, longest silence, total) and combines that
 with the error to name the culprit (dsh idle
 watchdog vs Node undici timers vs SDK timer 
vs server crash, context overflow, gate queue
, tool timeouts, failed compactions) and the 
exact setting to change; verdicts in the DSH 
terminal plus a /why command, subagents inclu
ded.
- [dsh-logbook](https://github.com/d3vme
h/dsh-logbook) - Makes ctx.logger output visi
ble: a /logs chat command over a full-capture
 ring (level, name, grep, since filters) plus
 a default-on stderr exporter for warnings an
d errors, configurable per plugin; works head
less. Also documents that dsh's default log b
uffer silently drops warn and debug records.

- [dsh-model-pin](https://github.com/d3vmeh/d
sh-model-pin) - Keeps every model request ins
ide a per-provider allow-list, enforced at th
e agent/request waterfall: disallowed models 
are redirected to a fallback or refused; suba
gents stop inheriting stale creation-time rou
tes; warns when consecutive requests would ma
ke a --models-max 1 llama.cpp router reload m
odels. A one-entry list is a global single-mo
del mode.
- [dsh-think-ultra](https://github.
com/YUEYUEXYS/dsh-think-ultra) - Pins every r
equest to native `max` reasoning effort inste
ad of the `ultra` option, with isolated Flash
 / Pro / Vision depth presets. Distributed as
 a build-only artifact: the core is closed an
d its license forbids reverse-engineering, de
obfuscation and repackaging.

## Git & Engine
ering

- [dsh-llm-verifier](https://github.co
m/Web0926/dsh-llm-verifier) - Runs 3 or 5 cod
ing-agent candidates in detached Git worktree
s, validates their patches with project comma
nds, ranks only passing candidates, and requi
res separate approval before applying the win
ner.
- [dsh-ci-co-pilot](https://github.com/t
emotee2103/dsh-ci-co-pilot) - GitHub workflow
 plugin for PR review, CI failure diagnosis a
nd fixes, issue triage, and release-note draf
ting.
- [gongyijie85/dsh-repo-setup](https://
github.com/gongyijie85/dsh-repo-setup) - Read
-only repo bootstrap scanner (repo_setup_scan
 tool): detects stack/tests/docs/git/db and r
ecommends plugins, MCP servers and hygiene fi
les (claude-code-setup counterpart).
- [dsh-g
it-identity](https://github.com/dsh-external/
dsh-git-identity) - Pin Git commit authorship
 to the environment identity (gh account + no
reply email).
- [dsh-gh-bridge](https://githu
b.com/dsh-external/dsh-gh-bridge) - Bridge ma
cOS Keychain GitHub token into sandboxed gh.

- [dsh-tool-github](https://github.com/NEAZ71
eve/dsh-tool-github) - GitHub REST API tools 
+ browser sidebar panel: repos, search, issue
s, PRs, comments, account binding, and one-cl
ick workspace integration.
- [dsh-atomgit](ht
tps://github.com/xiongjiamu/dsh-atomgit) - At
omGit plugin bundle for DeepSeek Harness: ato
mgit-skills workflows (plan/implement/review/
merge issues & PRs), ag CLI, and platform-hos
ted GitCode MCP tools.
- [deepseek-harness-ac
tion](https://github.com/Lixiaoyiao/deepseek-
harness-action) - GitHub Action that runs Dee
pSeek Harness for pull request review, CI dia
gnosis, trusted fixes, and issue-to-PR implem
entation.
- [duyanta123/dsh-refactor-insight]
(https://github.com/duyanta123/dsh-refactor-i
nsight) - Turn codebase smells into an execut
able, priority-ordered refactoring plan: file
-length / deep-nesting / function-length / go
d-object heuristics plus a staged runbook (re
ad-only, no auto-rewrite).
- [dsh-auto-blame]
(https://github.com/dsh-external/dsh-auto-bla
me) - Auto blame.
- [dsh-bash-rtk](https://gi
thub.com/DeepTrial/dsh-bash-rtk) - Routes eli
gible bash commands through rtk (Rust Token K
iller) inside the DSH bash executor to compre
ss tool output and save tokens; safe passthro
ugh when rtk is absent.
- [dsh-tool-git](http
s://github.com/lxj808624/dsh-tool-git) - Stru
ctured Git tools (status/diff/log/branch/stag
e/commit/stash/show) with a destructive-comma
nd guard.
- [dsh-plugin-check](https://github
.com/dsh-external/dsh-plugin-check) - Plugin 
health checks (manifest/patch format/build pi
tfalls/hub status).
- [dsh-plugin-pub-review]
(https://github.com/weopenfire-git/dsh-plugin
-pub-review) - Publish-readiness review for D
SH plugins: official docs freshness check, 30
+ static checks with a Ready/Not-Ready verdic
t, and publish preflight + command guidance.

- [dsh-ops-skill](https://github.com/dragon43
pp/dsh-ops-skill) - Read-only DSH runtime rel
iability kit: versioned redacted state contra
cts, protected snapshots, review-oriented upg
rade diffs, and isolated regression checks; n
o privileged Docker default. *Folder-based Sk
ill; not a DSH profile bundle.*
- [dsh-verifi
cation-receipt](https://github.com/030611/dsh
-verification-receipt) - Writes local JSONL s
ummaries of per-turn tool counts and coarse v
erification signals without storing prompts, 
tool arguments, or result text.
- [dsh-inspec
t](https://github.com/dsh-external/dsh-inspec
t) - Adversarial checkup ? fix ? review l
oop.
- [hermes-dsh-collab](https://github.com
/Cavan-Ou/hermes-dsh-collab) - Hook DeepSeek 
Harness into a Hermes pipeline: dispatch-spec
 template, model-tier routing, orchestrator-r
un quality gates, git single-writer rule, as 
a SKILL.md pack (bundle installable).
- [dsh-
alphasolve](https://github.com/dsh-external/d
sh-alphasolve) - AlphaSolve workflow.
- [msta
r-workflow](https://github.com/dsh-external/m
star-workflow) - Workflow engine.
- [dsh-spur
](https://github.com/dsh-external/dsh-spur) -
 Task engine.
- [dsh-involute](https://github
.com/dsh-external/dsh-involute) - Embedded ta
sk-management engine.
- [fullstack-expert](ht
tps://github.com/adithya-hmt/fullstack-expert
) - Cordis-native, evidence-first engineering
 workflow layer for coding agents: repository
-aware vertical-slice planning (fullstack_pla
n), explicit pass/fail/unknown evidence check
s (fullstack_check), inspect-first methodolog
y, approval-aware sensitive-operation guards,
 and embedded engineering skills (MIT).
- [ds
h-review-loop](https://github.com/wuxiangru91
5/dsh-review-loop) - Incremental diff reviewe
r: checkpoint-based since-review queue with a
 Web UI panel, /review command, and feedback 
injection into the agent.
- [dsh-test-runner]
(https://github.com/suimi8/dsh-test-runner) -
 Structured test runner tool (test_run): auto
-detect Vitest/Jest/pytest/node:test, run tes
ts, parse failure summaries for the model.
- 
[dsh-git-branch-switcher](https://github.com/
mixin-ai/dsh-git-branch-switcher) - Session-h
eader Git branch pill: shows the current work
space branch and switches branches from the W
eb UI.
- [dsh-doublecheck](https://github.com
/PerryLink/dsh-doublecheck) - Engineering-dis
cipline loop: requirement grilling before edi
ts, red/green test-evidence gates, adversaria
l delivery review, and a report with per-dime
nsion verification.
- [dsh-plugin-diff-review
](https://github.com/Civitasv/dsh-plugin-diff
-review) - Codex-style diff review in a float
ing panel: per-round session changes plus a g
it workspace view with stage/revert/commit/pu
sh and a history timeline.
- [dsh-plugin-sche
duled-tasks](https://github.com/Ceelog/dsh-pl
ugins/tree/main/src/plugins/dsh-plugin-schedu
led-tasks) - Run per-project prompts in fresh
 headless agent sessions on one-time, interva
l or cron schedules, with durable run history
.
- [dsh-checkpoint-rewind](https://github.co
m/PerryLink/dsh-checkpoint-rewind) - Claude C
ode /rewind for DSH: git-first workspace snap
shots before every mutating tool, turn-bounda
ry session forks, and a one-shot /rewind comm
and that restores files and forks the session
 back to a checkpoint.
- [dsh-lsp-actions](ht
tps://github.com/PerryLink/dsh-lsp-actions) -
 LSP action surface: diagnostics, formatting,
 completion, code actions, symbols, signature
 help, inlay hints, and rename tools over rea
l language servers.
- [dsh-git-status](https:
//github.com/Wongzexu/dsh-git-status) - Speci
alized in Git branch and status handling: a G
it status drawer with a commit DAG lane graph
, uncommitted changes/stash rows, inline diff
s, and right-click branch/tag operations.
- [
nateEc/dsh-gitLens](https://github.com/nateEc
/dsh-gitLens) - Workspace-scoped Git graph wi
th history search and diffs, multi-worktree W
IP and agent-session views, and guarded Git o
perations with recovery refs.
- [Starfie1d127
2/dsh-github-skills](https://github.com/Starf
ie1d1272/dsh-github-skills) - Skill-first Git
Hub workflows for DSH covering PR triage, rev
iew feedback, GitHub Actions diagnosis, and s
afe draft-PR publishing over existing capabil
ities.
- [dsh-repo-context](https://github.co
m/qing3a/dsh-repo-context) - Injects git stat
us and repo conventions into the system promp
t via the official system-prompt seam.
- [dsh
-test-drive](https://github.com/PerryLink/dsh
-test-drive) - Isolated install-smoke-uninsta
ll test drives for DSH plugins in a throwaway
 DSH_HOME (install ? patch check ? launch
 smoke ? uninstall ? cleanup), emitting s
tructured dsh-test-drive/v1 results for scori
ng pipelines.
- [JohnXu22786/safety-net](http
s://github.com/JohnXu22786/safety-net) - Dest
ructive-command interception gate: parses and
 requires human approval for rm -rf / git res
et --hard / push --force before execution (ds
h plugin + standalone CLI).
- [JohnXu22786/se
cret-guard](https://github.com/JohnXu22786/se
cret-guard) - Blocks agents from reading/writ
ing sensitive files (.env, credentials), mask
s leaked secrets in tool results, with an aud
it journal and safe sg_* inspection tools.
- 
[duyanta123/arch-doc](https://github.com/duya
nta123/arch-doc) - Analyze a codebase and gen
erate architecture documentation (module resp
onsibilities, dependency graph, entry points,
 run methods) via a five-stage runbook plus a
 zero-dependency arch-profile scanner.
- [duy
anta123/dsh-preset-scaffold](https://github.c
om/duyanta123/dsh-preset-scaffold) - Project-
init scaffold preset: strict five-phase runbo
ok, engineering standards, and six runnable s
tarter templates (node-ts / react-vite / pyth
on / go / spring-boot / monorepo).
- [dsh-ver
ify](https://github.com/263311487-ux/dsh-veri
fy) - Independent browser acceptance testing 
for agent deliverables: JSON spec in, real Ch
romium (Firefox/WebKit) verdict out (PASS/FAI
L with screenshot receipts). MCP server + CLI
 + GitHub Action, works with any agent and CI
 (MIT).
- [beijingwahw/dsh-nuke-plugin](https
://github.com/beijingwahw/dsh-nuke-plugin) - 
Transactional uninstall engine: validate/prev
iew/execute/undo per action with Saga rollbac
k, WAL crash recovery, hash-chain audit, hard
link dedup, and a Bayesian oracle that predic
ts success probability before you commit (MIT
).
- [maxmilian/dsh-forge](https://github.com
/maxmilian/dsh-forge) - Read-only Gitea and F
orgejo tools: instance version, repositories,
 issue and pull request search and read, PR d
iffs, and Actions runs, jobs and logs.

## Se
curity & Governance

- [zoahdev/dsh-dep-audit
](https://github.com/zoahdev/dsh-dep-audit) -
 Dependency supply-chain hygiene audit: peer-
range resolvability, broken dist-tag detectio
n (#2763 class), stale/missing-license/non-re
gistry deps, and installed-vs-declared drift 
(CLI + `dep_audit` tool).
- [zoahdev/dsh-pois
on-guard](https://github.com/zoahdev/dsh-pois
on-guard) - Pre-install supply-chain poison s
canner for DSH plugins: AST (JS-X-Ray) + deob
fuscation decoder + regex heuristics; exits n
on-zero on findings for CI gating.
- [dsh-vet
](https://github.com/rogerdigital/dsh-vet) - 
Pre-install static audits for npm-installable
 DSH plugins; emits and validates the open `d
sh-vet/v1` report with severity, confidence, 
evidence, derived grades, a CI Action, and au
ditable badges.
- [dsh-skill-pack-security](h
ttps://github.com/PerryLink/dsh-skill-pack-se
curity) - Security-audit skill pack plus the 
plugin_vet supply-chain gate: eight agent ski
lls (secret scan, dependency audit, supply-ch
ain review, prompt-injection review, audit or
chestration, threat modeling, vulnerability i
ntelligence and incident response) in Chinese
 and English editions, with an npm provider b
undle that registers the automated plugin_vet
 pre-install scanner.
- [dsh-encrypt](https:/
/github.com/yauntyour/DSH-Encrypt) - Credenti
al provider for DSH with password-protected A
ES-256-GCM storage, Argon2id key derivation (
legacy scrypt v2 auto-upgrade), SHA3-256 inte
grity checks, and temporary runtime decryptio
n.
- [dsh-telemetry-redactor](https://github.
com/030611/dsh-telemetry-redactor) - Redacts 
supported secret patterns from the `session-t
elemetry/record` export copy before configure
d telemetry backends receive it.
- [dsh-yolo-
mode](https://github.com/SeverusZh/dsh-yolo-m
ode) - LLM auto-approval for sandbox escalati
on requests: presets, per-tool levels, fail-c
losed.
- [dsh-auto-review](https://github.com
/PerryLink/dsh-auto-review) - Second-model AI
 auto-review on the approval answerer chain: 
a read-only reviewer subagent returns structu
red allow/deny verdicts with reasons, fail-cl
osed by default.
- [dsh-permission-rules](htt
ps://github.com/PerryLink/dsh-permission-rule
s) - Declarative allow/deny/ask permission ru
les on the tools/pre-execute waterfall: tool/
argument/path/agent matching, session-log aud
it, dry-run mode, hot reload.
- [dsh-orcana](
https://github.com/Leo-Ayh-Oday/dsh-orcana) -
 Runtime-governance bundles for zero-progress
 steering, evidence-fresh completion gates, c
apability disclosure, and Linux sandbox harde
ning with resource limits, network isolation,
 fail-closed degradation, and bounded audit l
ogs.
- [odai-dsh-plugin](https://github.com/o
rziz/odai/tree/main/dsh/plugin) - Profile-wid
e DSH governance and responsibility routing w
ith intent alignment, authorization and safet
y boundaries, scoped memory, compaction, and 
evidence-gated delivery; compatible with DSH 
0.1.1-rc.2.
- [dsh-workflow-isolate](https://
github.com/Linxiushen/dsh-workflow-isolate) -
 Alternative WorkflowEngine provider for DSH 
0.1.0-rc.7 that runs model-written orchestrat
ion in fresh QuickJS/WASM runtimes with a JSO
N-only host bridge and bounded memory, execut
ion time, and child-agent fan-out.
- [dsh-sfw
](https://github.com/dsh-external/dsh-sfw) - 
Safety filter.
- [MicroMilo/upstream-radar](h
ttps://github.com/MicroMilo/upstream-radar) -
 Always-on dependency security monitoring for
 DSH plugins: exact installed paths, OSV vuln
erabilities, npm releases, and compatibility 
signals routed to a project-aware DSH Agent.

- [dsh-passwords](https://github.com/slywalke
r2006/dsh-passwords) - Turns DeepSeek Harness
 into a server-grade multi-tenant platform: r
emote access + auto HTTPS, subuser permission
s & token/daily quotas, sandbox enforcement, 
encrypted auth & audit log.
- [dsh-guardian](
https://github.com/cdxiaodong/dsh-guardian) -
 Agent security guardrail: intercepts and aud
its every tool call, requiring human confirma
tion on sensitive operations.
- [dsh-plugin-v
erify](https://github.com/qing3a/dsh-plugin-v
erify) - Runtime behavior verification CLI: m
ock-llm agent loop, 7/7 waterfall, zero-side-
effect checks, reproducible reports.
- [dsh-s
afeguard](https://github.com/ZhijiangTang/dsh
-safeguard) - Pre-execution guardrail: vetoes
 dangerous shell commands and blocks secret/c
redential leaks before they run.
- [dsh-mask]
(https://github.com/PerryLink/dsh-mask) - PII
 masking middleware: anonymizes names, phones
, emails, ID cards, bank cards, keys, and add
resses before the model boundary and restores
 placeholders at display; plaintext never ent
ers the session log; /mask command plus mask_
test tool.
- [dsh-defend](https://github.com/
PerryLink/dsh-defend) - Prompt-injection, jai
lbreak, and secret-leak detection on the offi
cial seams: an Aho-Corasick engine over rules
 ported from Prompt-Injection-Payloads, Jailb
reak-Detector, and Secret-Key-Leaker-Detect g
ates user messages, tool arguments, and tool 
results with allow/ask/block tiers, sanitized
 defend/detection audit events, a defend_repo
rt tool, and a destructive-delete command gua
rd.
- [dsh-perm-guard](https://github.com/a90
3067276-rgb/dsh-perm-guard) - Auto-approval p
ermission guard: a middle tier between worksp
ace-write and danger-full-access � auto-all
ows safe operations inside trust directories,
 always asks a human for destructive ones, wi
th 11 per-category switches and an audit trai
l.
- [dsh-change-budget](https://github.com/R
aphaelutumn/dsh-change-budget) - Configurable
 per-turn budgets that limit distinct files, 
mutation calls, and UTF-8 payload bytes befor
e supported file-mutation tools run.
- [dsh-s
ecret-scrub](https://github.com/jkt-check/dsh
-secret-scrub) - Irreversible secret-scrubbin
g guard: tiered built-in regex rules (minimal
/balanced/aggressive) plus custom patterns re
write access keys, bearer tokens, and private
 key blocks into `[REDACTED:<category>]` plac
eholders on their way to the session log and 
the model; one-command install via `dsh plugi
n add`.
- [dsh-mood](https://github.com/Rapha
elutumn/dsh-mood) - A tiny behavioral mood ri
ng for AI coding agents: folds session behavi
or (consecutive failures, repeated calls, act
ivity) into a four-state Mood (GOOD / CONFUSE
D / FRUSTRATED / OVERWHELMED) shown as a low-
friction session-header status light.
- [John
Xu22786/docgen](https://github.com/JohnXu2278
6/docgen) - Documentation workshop skill pack
: pure-prompt (Agent Skills) doc generation ?
?? README, PR description, changelog and code
 review; zero third-party dependencies.
- [ac
cpowered/dsh-credential-manager](https://gith
ub.com/accpowered/dsh-credential-manager) - N
amed credential manager: the model uses API k
eys, tokens, and logins by reference; secret 
values are injected into each shell run as `D
SH_CM_*` env vars, resolved per execution, an
d never enter the conversation.
- [accpowered
/dsh-auto-review](https://github.com/accpower
ed/dsh-auto-review) - LLM auto-review approva
l answerer for sandbox escalations under the 
`'auto'` policy: a deterministic filter plus 
a clean-context reviewer model decide without
 a human prompt, fail-closed on every error p
ath; requires a patched harness core (include
d in core-patches/).
- [dsh-capmark-gate](htt
ps://github.com/taltara/capmark) - Holds an a
gent to a declared capability manifest: a Mar
kdown `CAP.md` states what a plugin may do, a
nd the gate masks the agent's tool view with 
`tools.restrict()` and judges every call at `
tools/pre-execute`; scopes finer than a tool 
name are linted as advisory rather than prese
nted as enforcement.
- [dsh-agentvalet](https
://github.com/AgentValet/dsh-agentvalet) - Br
okered SaaS access: four tools call approved 
platforms through a credential broker, mintin
g a short-lived assertion per call, so no API
 key is stored on the machine and every call 
is owner-approvable, revocable, and audited.

- [sofagent](https://github.com/KongFangXun/s
ofagent) - Commit-time agent governance harne
ss: 24 deterministic audit rules over git dif
fs (secrets, out-of-scope edits, blind modifi
cations, prompt-injection traces), HMAC-chain
ed tamper-evident history, and a 9-plugin DSH
 family (audit / gate / rollback / inject / o
ntology / evolve / commons / daemon / fde) di
stributed via SkillHub.

## Output & Delivera
bles

- [EthanYoQ/Invoice-Downloader](https:/
/github.com/EthanYoQ/Invoice-Downloader) - DS
H bundle for local IMAP invoice download, OCR
, archival, and Excel reimbursement summaries
.
- [zoahdev/dsh-llms-forge](https://github.c
om/zoahdev/dsh-llms-forge) - Generate llms.tx
t for plugin repos from package.json + README
 (AI-readable discovery, read-only by default
, CLI + `llms_forge` tool).
- [zoahdev/dsh-re
adme-forge](https://github.com/zoahdev/dsh-re
adme-forge) - Generate README.md for plugin r
epos from package.json + cordis.patch.yml + s
ource layout (CLI + `readme_forge` tool).
- [
stacktree-dsh](https://github.com/stevysmith/
stacktree-dsh) - Cordis overlays that connect
 the Stacktree MCP server (stdio or Streamabl
e HTTP): publish generated HTML to an unguess
able private URL a client opens with no accou
nt, replace it in place so the link stays val
id, and gate it by passcode or email domain.

- [dsh-artifacts](https://github.com/zoahdev/
dsh-artifacts) - Claude-Artifacts-style rende
rer: turns Markdown + JSON into self-containe
d HTML documents, cards, dashboards, and gall
eries (CLI + `artifact_render` tool, zero run
time dependencies).
- [folio](https://github.
com/nyantused-cpun/folio) - Consulting docume
nt-generation engine (intake ? memory ? m
ethodology ? deliverable ? proof) as a na
tive DSH plugin stack: 15 tools, session-prot
ocol events, L0 guard, agent preset; swappabl
e methodology packs, zero-key start under DSH
.
- [dsh-report-studio](https://github.com/ci
ceroyang/dsh-report-studio) - Turn a DeepSeek
 Harness session into deliverable work report
s (daily/weekly/handoff/article) with verifia
ble receipts; cross-session weekly aggregatio
n and Feishu/Notion publishing.
- [dsh-trajec
tory](https://github.com/ciceroyang/dsh-traje
ctory) - Render a DeepSeek Harness session lo
g into a shareable, self-contained HTML traje
ctory document (turns, tool calls, token ledg
er) with a SHA-256 audit stamp.
- [dsh-timeli
ne-studio-plugin](https://github.com/MartinDe
lophy/dsh-timeline-studio-plugin) - Connects 
DSH to Timeline Studio for `.timeline` projec
t inspection, semantic edit previews, transac
tional edits, and verified MP4 rendering.
- [
plugin-session-export](https://github.com/why
ihaveyou/dsh-suite/tree/main/packages/plugins
/plugin-session-export) - Export the append-o
nly session log as human-readable Markdown or
 HTML, grouped by trajectory source.
- [dsh-x
iaohongshu-viral-note](https://github.com/xub
oboo/dsh-xiaohongshu-viral-note) - Bundled Xi
aohongshu/RED viral-note agent skill: hot-not
e research, note generation/rewrite, verifica
tion, authorized account analysis, QR login a
nd controlled publishing.
- [dsh-translate](h
ttps://github.com/PerryLink/dsh-translate) - 
Vendor parameter translation and deterministi
c JSON repair for DeepSeek Harness: a /transl
ate command maps 13 canonical parameters acro
ss 11 vendors, and the post-execute repair la
yer (plus fix_json) fixes broken JSON tool ou
tput without fabricating data.
- [inspiration
-deck-workshop](https://github.com/zjsthmjial
in/inspiration-deck-workshop) - Registers the
 Inspiration Deck Workshop skill: local stati
c HTML presentation decks (6 deck templates, 
25+ layouts, themes & motion showroom) with a
 validate + PNG/PDF export CLI, zero runtime 
deps.
- [pdf-background-gray-codex-skill](htt
ps://github.com/zjsthmjialin/pdf-background-g
ray-codex-skill) - Whitens gray/off-white sca
n backgrounds in image-based PDFs while prese
rving resolution, page geometry and anti-alia
sed text edges (lossless Flate write-back) vi
a a single Python script.
- [dsh-research-rep
ort](https://github.com/PerryLink/dsh-researc
h-report) - Verifiable research-report engine
 for DeepSeek Harness: content-addressed evid
ence ledger (claim-to-snapshot binding, tampe
r-evident) and versioned sealed reports with 
per-claim verification verdicts and a manifes
t SHA-256 seal.

## Office & Documents

- [dr
eam-num/dsh-univer-office](https://github.com
/dream-num/dsh-univer-office) - Give DeepSeek
 Harness a real office environment. Univer Of
fice Plugin brings spreadsheets, docs, slides
, canvases, relational tables, and more into 
one runtime � with connected data, validati
on, versioned changes, and isolated worktrees
 for multi-agent collaboration.
- [Cooberped/
dsh-evidence](https://github.com/Cooberped/ds
h-evidence) - Turns attached files into versi
oned evidence: `search_documents` builds a pr
ivate local index (SQLite FTS5 after a startu
p capability probe, dependency-free JS fallba
ck otherwise) and returns compact evidence bl
ocks carrying an exact coordinate � PDF pag
e, PPTX slide, text/DOCX line range, or quote
d XLSX `Sheet!Range` � which `read_document
` expands only while the content version stil
l matches. Contiguous CJK runs are indexed as
 overlapping bigrams and queried as phrases, 
so word order is preserved; uploaded raster i
mages take the native vision attachment path 
instead.
- [dsh-qingagent](https://github.com
/void2anything/dsh-qingagent) - Writing bridg
e to the open-source QingAgent client: the ag
ent drafts and revises documents on a typeset
 rice-paper panel (mermaid, drawio, tables, K
aTeX), every edit staged for review before it
 lands; requires the QingAgent desktop client
 running locally.

## Notifications & Channel
s

- [dsh-dingtalk-channel](https://github.co
m/ttmouse/dsh-dingtalk-channel) - DingTalk IM
 channel via Stream-mode WebSocket: each chat
 drives its own tooled agent; replies stream 
back as messages, no public callback URL need
ed.
- [dsh-feishu](https://github.com/PGZXB/d
sh-feishu) - Feishu (Lark) UI for DeepSeek Ha
rness: panel-driven control console, in-card 
approvals and questions, live streaming cards
, one-QR setup.
- [dsh-feishu-bot](https://gi
thub.com/dsh-external/dsh-feishu-bot) - Feish
u bot.
- [dsh-feishu-notify](https://github.c
om/dsh-external/dsh-feishu-notify) - Feishu n
otifications (session end / input needed).
- 
[dsh-serverchan-notify](https://github.com/ni
ckhelion/dsh-plugins/tree/main/packages/serve
rchan-notify) - ServerChan3 (Server?) push 
notifications when a turn finishes: title, mo
del, project directory, git branch, status an
d a reply excerpt; subagent filtering, fire-a
nd-forget, key from env/config/file.
- [dsh-l
ark-meeting-notifier](https://github.com/yeru
izhi/dsh-lark-meeting-notifier) - Feishu meet
ing reminder: a right-side floating panel lis
ting today's/tomorrow's Feishu meetings with 
multi-alarm flashing reminders.
- [dsh-rss-da
ily](https://github.com/shangjian2023/dsh-rss
-daily) - Daily news digest: fetches 46 curat
ed RSS sources on schedule, LLM-edits them in
to a briefing with the model already configur
ed in dsh (rule-based fallback), and delivers
 it to your IM via webhook (WeCom/Telegram/Se
rverChan/PushDeer/Bark/Gotify), with catch-up
 for missed runs and a Web panel.
- [telegram
](https://github.com/dsh-external/telegram) -
 Channel integration for Telegram.
- [dsh-tel
egram-channel](https://github.com/hi-wenw/dsh
-telegram-channel) - Telegram mobile remote f
or live DSH Web sessions: `/sessions` picker,
 bind/unbind, same trajectory as desktop (Cod
ex-style).
- [harness-remote](https://github.
com/Hyna-hla/harness-remote) - Third-party mo
bile remote client for DSH: connect to the PC
 service over LAN or cpolar (QR auto-connect)
, stream chat with approval banners, backgrou
nd push notifications, model/permission switc
hing.
- [tg-bot](https://github.com/dsh-exter
nal/tg-bot) - Telegram bot.
- [qqbot](https:/
/github.com/dsh-external/qqbot) - QQ bot.
- [
dsh-wecom-bot](https://github.com/dsh-externa
l/dsh-wecom-bot) - WeCom bot.
- [dsh-weixin-b
ot](https://github.com/dsh-external/dsh-weixi
n-bot) - WeChat bot.
- [dsh-weixin-clawbot](h
ttps://github.com/zp-home/dsh-weixin-clawbot)
 - Connects Tencent's official Weixin ClawBot
/iLink channel to a persistent DSH Host for p
hone task control and session management.
- [
dsh-im-hub](https://github.com/ThreeBody6666/
dsh-im-hub) - Multi-platform IM gateway: Feis
hu (Lark) WebSocket long connection (no publi
c URL), WeCom AES-encrypted callbacks, Telegr
am long polling; per-chat agent sessions, whi
telist access, visual settings card.
- [dsh-o
verdrive](https://github.com/temotee2103/dsh-
overdrive) - OpenClaw-style multi-platform ga
teway for DSH: WhatsApp / Telegram / Discord 
/ Slack / Feishu / DingTalk / WeCom channels,
 in-chat trajectory replay (`/trace`), subage
nt & cron commands, native approval buttons, 
one-command docker deploy.
- [dsh-im-bridge](
https://github.com/MHfire/dsh-im-bridge) - We
Com (WeChat Work) channel bridge: WebSocket l
ong connection (no public URL), in-process ag
ents with per-sender persistent sessions visi
ble in the Web GUI, customizable persona, str
eaming progress animation.
- [DSH-WX-Msg-Tool
](https://github.com/yauntyour/DSH-WX-Msg-Too
l) - WeChat ClawBot/iLink channel plugin: QR 
login in DSH Web, message send/poll/status to
ols, background polling, and optional per-sen
der persistent DSH sessions that automaticall
y reply through WeChat.
- [super-wechat-bridg
e](https://github.com/Qshuai0213/super-wechat
-bridge) - WeChat iLink ClawBot bridge: offic
ial Tencent iLink protocol, Web UI settings (
QR login / model / preset / permissions / ses
sion management with delete), 24h auto-renewa
l pushes a fresh QR before expiry, zero downt
ime.
- [dsh-voice-chat](https://github.com/ds
h-external/dsh-voice-chat) - Voice chat.
- [d
sh-web-ui-notify](https://github.com/dsh-exte
rnal/dsh-web-ui-notify) - WebUI notifications
.
- [dsh-notification-sounds](https://github.
com/qq33357486/dsh-notification-sounds) - Cro
ss-platform browser audio alerts that play bu
ndled Chinese prompts when DSH needs user inp
ut or finishes a task.
- [dsh-notify-windows]
(https://github.com/SeverusZh/dsh-notify-wind
ows) - Windows notifications, zero dependenci
es.
- [dsh-notify-win](https://github.com/And
yqwe44/dsh-notify-win) - Native Windows toast
 + taskbar flash for task done / approval / a
sk_user_question; Win10/11, npm install `dsh 
plugin --profile web add dsh-notify-win`.
- [
dsh-ica](https://github.com/dsh-external/dsh-
ica) - ICalingua frontend.
- [dsh-opencode-se
rver](https://github.com/dsh-external/dsh-ope
ncode-server) - Smooth TUI via opencode attac
h.
- [dsh-teamwork](https://github.com/dsh-ex
ternal/dsh-teamwork) - Team collaboration (co
rdis).
- [plugin-notify](https://github.com/w
hyihaveyou/dsh-suite/tree/main/packages/plugi
ns/plugin-notify) - IM webhook + local notifi
cations on turn completion / errors / approva
l requests (Feishu, WeCom, DingTalk, Slack, D
iscord, custom).
- [dsh-monitor](https://gith
ub.com/AbnerAI/dsh-monitor) - Persistent back
ground watchers (file inbox / command output)
 that wake the agent on new messages; the har
ness analog of Claude Code's Monitor tool.
- 
[dsh-island](https://github.com/cdxiaodong/ds
h-island) - Bridge DSH agent sessions, tool c
alls, and approvals to the CodeIsland macOS n
otch panel over a Unix socket, with in-panel 
allow/deny.
- [february2015/dsh-dingo](https:
//github.com/february2015/dsh-dingo) - Sound 
reminders with one-click jump for concurrent 
sessions: the current session gets crisp dang
/dang-dang tones, other sessions a soft ding/
ding-ding plus a top-right card that jumps st
raight to the replying conversation.

## Fun 
& Lifestyle

- [dsh-chinese-poetry](https://g
ithub.com/runcat-tommy/dsh-chinese-poetry) - 
Token-free Chinese classical-poetry tab in th
e DSH conversation view: search, filters, ?
??, daily poem, favorites, festival topic
s, share-card image, and AI explanation via y
our own DSH session.
- [dsh-whale-companion](
https://github.com/LeemanCheung/dsh-whale-com
panion) - Draggable whale companion with loca
l progression, achievements, skins, and priva
cy-safe activity tracking.
- [dsh-whale-musum
e](https://github.com/Sutera-Diffusus/dsh-wha
le-musume) - Whale-girl desktop pet for the D
SH Web UI: pat-to-raise growth, work-state po
ses, 494 dialogue lines and 30 achievements w
ith a built-in settings panel; local-first, z
ero telemetry.
- [dsh-clippy](https://github.
com/sjh9714/clippy-harness) - Clippy revived 
as an office assistant pet that reacts to rea
l agent state, with a classic "illegal operat
ion" dialog on failed turns.
- [dsh-agent-rp]
(https://github.com/dsh-external/dsh-agent-rp
) - SillyTavern migration and next-generation
 agent roleplay for DSH.
- [dsh-emoji](https:
//github.com/dsh-external/dsh-emoji) - Emoji 
plugin (cordis).
- [dsh-travel-plugin](https:
//github.com/dsh-external/dsh-travel-plugin) 
- Travel plugin.
- [dsh-weather](https://gith
ub.com/sunshine-lang/dsh-weather) - Weather t
ool: current conditions and multi-day forecas
ts via Open-Meteo (free, no API key).
- [dsh-
pianist](https://github.com/Laplace-bit/dsh-p
ianist) - Piano performance: the agent plays 
a requested piece on a Canvas2D grand piano w
ith Salamander Grand samples, immersive stage
 visuals, and a playable 88-key keyboard.
- [
dsh-pdf](https://github.com/sunshine-lang/dsh
-pdf) - PDF toolbox: extract text, metadata, 
and page ranges via pdfjs-dist (local, no API
 key).
- [dsh-ui-whale](https://github.com/ds
h-external/dsh-ui-whale) - Pixel whale compan
ion (blink/tail/spout/hearts).
- [dsh-muyu](h
ttps://github.com/liuwenji007/dsh-muyu) - Woo
den-fish overlay in the Web client's lower-ri
ght: knock the whale for per-session merit; a
uto-knocks while the model thinks or streams.

- [dsh-vibegap](https://github.com/ktao73208
4-arch/dsh-vibegap) - Vocabulary flashcards f
or agent wait time: a spelling card appears i
n the Web client lower-right after ~18s of ag
ent activity and retreats when the session fi
nishes or needs input; optional shared progre
ss with the local VibeGap desktop app.
- [dsh
-pet](https://github.com/FlytoMAYDAY80/dsh-pe
t) - Desktop whale pet with live session stat
e.
- [dsh-desk-pet](https://github.com/annehe
artrecord/dsh-desk-pet) - macOS desk pet in a
 real always-on-top window rather than a page
 widget: six states from local DSH, native ri
ght-click menu, and a bundled skill that turn
s one photo into a full eighteen-pose skin.
-
 [dsh-pet-rs](https://github.com/dsh-external
/dsh-pet-rs) - Desktop pet, Rust edition.
- [
dsh-stickers](https://github.com/dsh-external
/dsh-stickers) - Stickers.
- [dsh-ads](https:
//github.com/dsh-external/dsh-ads) - 2005 Chi
nese-web-style ad layer (joke plugin).
- [dsh
-gomoku](https://github.com/dsh-external/dsh-
gomoku) - Gomoku (five-in-a-row).
- [dsh-qq20
06](https://github.com/dsh-external/dsh-qq200
6) - QQ2006 skin.
- [dsh-lazyfish](https://gi
thub.com/dsh-external/dsh-lazyfish) - Slack-o
ff panel (feed + Bilibili player).
- [dsh-tav
ern-plugin](https://github.com/dsh-external/d
sh-tavern-plugin) - Tavern character cards.
-
 [ui-status-label](https://github.com/dsh-ext
ernal/ui-status-label) - Custom status labels
 for the whale's deep-diving (cordis).
- [dsh
-digipet](https://github.com/swaylq/dsh-digip
et) - Digimon-style raising pet: hatches from
 an egg, feeds on real work (turns, tools, er
rors), and evolves along four lines shaped by
 how you work; zero tokens, command-only.
- [
dsh-wildmon](https://github.com/swaylq/dsh-wi
ldmon) - Pokemon-style catch-em-all: turns, t
ools and errors spawn wild encounters; throw 
balls, fill a 28-slot dex, team of six; zero 
tokens, command-only.
- [dsh-survival](https:
//github.com/Socialist-Sister/dsh-survival-mo
de) - Minecraft-survival game mode as a DSH a
gent preset: hard-settled HP/hunger/day-night
/mobs, vanilla crafting gates and anvil repai
r, plus a browser status bar; built on the of
ficial preset plugin spec.
- [xiekai886/dsh-M
usicPlayer](https://github.com/xiekai886/dsh-
MusicPlayer) - A collapsible/expandable dragg
able floating music player with NetEase Cloud
 Music playlist import and song/artist search
; chat and listen at the same time.
- [zoahde
v/dsh-subscribe](https://github.com/zoahdev/d
sh-subscribe) - Steam-style plugin marketplac
e: subscribe on the web, sync with one comman
d into a dsh profile; 500+ community plugins 
with verified curation and a zero-dependency 
CLI.
- [dsh-vibe-pack](https://github.com/Lee
manCheung/dsh-vibe-pack) - Transactional data
-only configuration pack manager with integri
ty, ownership, preview, diff, and rollback sa
feguards.
- [Luaphes/dsh-plugins-market](http
s://github.com/Luaphes/dsh-plugins-market) - 
Plugin market inside the DSH Web UI: crawls t
he dsh-plugin topic with noise filtering, cur
ated marks, ranking and one-click install (ds
h.bundle-verified).
- [dsh-blackjack](https:/
/github.com/yul761/dsh-blackjack) - Blackjack
 in the conversation: free daily hands win CH
IP, redeemable one-way into model credit that
 a fallback route spends only when your own p
rovider quota runs out; operator-funded pool,
 with the server and its audited ledger open 
source in the same repo.

- [weibaohui/dsh-xi
uxian](https://github.com/weibaohui/dsh-xiuxi
an) - Xianxia desktop pets tied to live agent
 sessions: pixel-style companions appear as s
ubagents spawn (up to 3 on screen), with stor
age-bag collection, a right-click artifact me
nu, a pet gallery, and Codex pet-format expor
t.

## Plugin Ecosystem & Development

- [Sun
Qingyuan0/Kabutack](https://github.com/SunQin
gyuan0/Kabutack) - Role-based manager for DSH
 plugins/Skills/MCP: bundle capabilities into
 �roles� and hot-switch them from the Web
 UI.
- [dsh-workbench](https://github.com/sta
ff-os/dsh-workbench) - Enterprise workbench f
or DSH: manage AI employees, knowledge bases,
 skills, MCP servers and DSH plugins from a r
unning session.
- [dsh-plugin-bench](https://
github.com/B1lli/dsh-plugin-bench) - Evidence
-backed, type-aware DSH plugin quality benchm
ark: commit-bound score intervals and evidenc
e ledgers across eight lifecycle dimensions, 
with Markdown/SVG scorecards; Stars and ident
ity are not scored.
- [zoahdev/dsh-quality-sc
ore](https://github.com/zoahdev/dsh-quality-s
core) - Plugin quality scorecard: 0-100 with 
grade, 6 components (manifest, peer resolvabi
lity, dist-tag health, dead ranges, freshness
, dsh-tools peer compat), fix suggestions per
 deduction, and a batch leaderboard (CLI + `q
uality_score` tool).
- [zoahdev/dsh-plugin-do
ctor](https://github.com/zoahdev/dsh-plugin-d
octor) - Health checks for DSH plugins: manif
est/patch/entry/build/pack/install verificati
on, model-callable plugin_check, profile host
-shadowing + manifest-BOM detection, environm
ent diagnostics, and supply-chain poison pref
light.
- [oneinitAI/dsh-thunderforge](https:/
/github.com/oneinitAI/dsh-thunderforge) - All
-in-one plugin development bundle: clean-room
 LLM payload capture, three-layer authoring s
kills (vendored dsh-plugin-dev-skills + dsh-p
lugin-guide), conversational scaffolder with 
generate-and-smoke templates, dual-source tra
jectory waterfall (session logs � capture, d
sh-replay engine vendored), and guarded dev p
resets (dshp vendored).
- [dsh-plugin-starter
](https://github.com/ciceroyang/dsh-plugin-st
arter) - Scaffold a battle-tested DSH plugin 
(bundle, tool, runtime skill, tests, CI) in o
ne command, zero dependencies, with a --verif
y smoke run.
- [menotbobbybrown/create-dsh-ap
p](https://github.com/menotbobbybrown/create-
dsh-app) - One-line scaffold generator for De
epSeek Harness agents and plugins.
- [Code2Sk
ill](https://github.com/leechen298/Code2Skill
) - Generate Functions, MCP tools, workflow S
kills, and offline test packages from user-au
thorized source code.
- [dsh-movein](https://
github.com/sjh9714/dsh-movein) - Preview and 
move supported Claude Code, Codex, and OpenCo
de setup into DSH, including skills, commands
, agents, instructions, and MCP servers, with
 OpenCode V1/V2 JSONC support and collision-s
afe apply.
- [sandbase-skills](https://github
.com/sandbaseai/sandbase-skills) - Verified S
KILL.md catalog and installer with 88 install
able skill bundles for DSH and compatible age
nts.
- [dsh-plugin-store](https://github.com/
sandbaseai/dsh-plugin-store) - Native DSH Set
tings marketplace for browsing the community 
catalog by search and tags, installing plugin
s, and reviewing installed packages.
- [DshMa
rketPlace/dsh-plugins-store](https://github.c
om/DshMarketPlace/dsh-plugins-store) - In-DSH
 bilingual plugin catalogue: `/store`, a Sett
ings tab, agent search/install tools, a bundl
ed discovery skill, and risk-aware approval b
efore installation.
- [dsh-hmz](https://githu
b.com/dsh-external/dsh-hmz) - Placeholder rep
ository; description pending.
- [dsh-interpre
ters](https://github.com/dsh-external/dsh-int
erpreters) - Interpreter plugin (cordis).
- [
dsh-notebooks](https://github.com/dsh-externa
l/dsh-notebooks) - Notebooks plugin (cordis).

- [dsh-plugin-radar](https://github.com/dsh-
external/dsh-plugin-radar) - Daily DSH plugin
 compatibility radar, renamed from dsh-extern
al-research.
- [dsh-scout](https://github.com
/dsh-external/dsh-scout) - Scout plugin (cord
is).
- [dsh-share](https://github.com/dsh-ext
ernal/dsh-share) - Share DSH conversations.
-
 [maxmilian/dsh-sonarqube](https://github.com
/maxmilian/dsh-sonarqube) - Read-only SonarQu
be Community Build integration for Quality Ga
tes, issues, Security Hotspots, coverage, and
 project measures, with source file and line 
locations.
- [plugin-registry](https://github
.com/dsh-external/plugin-registry) - Plugin c
onsole + make-dsh-plugin skill + dev guide.
-
 [dsh-plugin-manager-registry](https://github
.com/Jesse-njx/dsh-plugin-manager-registry) -
 Offline-tolerant registry that discovers and
 deduplicates DSH plugins from awesome lists,
 GitHub topics, and npm.
- [marisa](https://g
ithub.com/dsh-external/marisa) - External plu
gin manager (parasitic install/CLI/settings p
anel).
- [hub](https://github.com/dsh-externa
l/hub) - Org-wide index + unified catalog.jso
n (CI-generated).
- [dshx-update-check](https
://github.com/dsh-external/dshx-update-check)
 - Plugin update checker.
- [toybox](https://
github.com/dsh-external/toybox) - MCP plugin 
collection (almanac/bug-tamer/naming master/t
ime capsule, etc.).
- [dsh-github-integration
](https://github.com/dsh-external/dsh-github-
integration) - GitHub integration plugin.
- [
dsh-super-injector](https://github.com/dsh-ex
ternal/dsh-super-injector) - Super-injector (
cordis).
- [dsh-mcp-manager](https://github.c
om/hyqhyq3/dsh-mcp-manager) - MCP server mana
ger: Settings page with OAuth (PKCE + dynamic
 client registration) or static-token auth; t
ools registered as mcp__<name>__*.
- [dsh-mcp
-skill-panel](https://github.com/lilyblessing
/dsh-mcp-skill-panel) - MCP & Skill manager: 
real-time enable/disable for MCP servers and 
skills to free context; optional AI middle la
yer (mcp_search/mcp_call) with state-based vi
sibility filtering.
- [dsh-recommend](https:/
/github.com/zp-home/dsh-recommend) - Transpar
ent plugin rankings and recommendations: dail
y auto-fetched dsh-plugin topic data, open sc
oring model, rank/search/recommend tools and 
a settings-page leaderboard.
- [dsh-capabilit
y-index](https://github.com/777-Zen/dsh-capab
ility-index) - Pre-flight plugin-library chec
k for DSH agents: task-type requests trigger 
a Top-K hint of suitable plugins with use_whe
n/not_for capability declarations, making plu
gin usage predictable instead of opportunisti
c.
- [dsh-eval](https://github.com/hccccc0133
3/dsh-eval) - Agent evaluation platform: benc
hmark YAML, headless dsh runs, trace-based me
trics, scripted grading, and run compare/repo
rt.
- [dsh-suite](https://github.com/whyihave
you/dsh-suite) - Living DSH plugin directory 
(785+ plugins, refreshed hourly) with a daily
 compatibility CI, a bilingual searchable cat
alog site, and an in-app plugin store.
- [dsh
get-data](https://github.com/bobby-sheng/dshg
et-data) - Public normalized catalog snapshot
 for [DSH Get](https://www.dshget.com/), a bi
lingual searchable directory of 2,460 DeepSee
k Harness plugins with categories, install co
mmands, and source attribution.
- [Awesome De
epSeek Harness Plugins](https://github.com/we
b-casa/Awesome-DeepSeek-Harness-Plugins) - Pu
blic Cordis plugin index maintained by [cordi
s.run](https://cordis.run), generated from pu
blished records with per-plugin install comma
nds and security-status links.
- [create-dsh-
plugin](https://github.com/whyihaveyou/dsh-su
ite/tree/main/packages/create-dsh-plugin) - S
caffold a DSH plugin in seconds (tool / event
s / webui templates, `next`-tag version pinni
ng, built-in `--verify` smoke test).
- [plugi
n-manager](https://github.com/whyihaveyou/dsh
-suite/tree/main/packages/plugins/plugin-mana
ger) - In-app plugin store for the DSH Web UI
: browse, search, one-click install, compat b
adges, installed list.
- [dsh-genie](https://
github.com/swaylq/dsh-genie) - Promote a `cor
dis_define` dynamic package into a real insta
lled bundle that survives restart; writes the
 package and registers the profile layer with
out pnpm, network, or a build authorization.

- [dsh-plugin-guide](https://github.com/Perry
Link/dsh-plugin-guide) - Plugin-development k
nowledge base as an on-demand agent skill: of
ficial constraints, task workflows, API refer
ences, and community pitfalls.
- [dsh-popper]
(https://github.com/1473382/dsh-popper) - Fal
sification-driven correction loop for agent s
essions: risky work commits an evidence-check
able claim first, deterministic gates verify 
it, falsified claims force mutually exclusive
 replacement hypotheses with discriminating e
xperiments, and every event lands in an appen
d-only evidence ledger.
- [awesome-dsh](https
://github.com/stakeswky/awesome-dsh) - Auto-u
pdating catalog of the whole `dsh-plugin` top
ic (2600+ repos): a Cloudflare Worker recrawl
s every 6 hours, translates English descripti
ons to Chinese with Workers AI, and serves a 
ranked search API plus an agent skill that fi
nds and installs plugins on demand.
- [dsh-sc
ore](https://github.com/PerryLink/dsh-score) 
- Multi-dimensional quality scoring for DSH p
lugins: a five-dimension score card (install 
success, maintenance activity, docs completen
ess, security scan, protocol compliance) with
 /score command and leaderboard reports; inst
all evidence reserves consumption of dsh-test
-drive structured results.
- [JohnXu22786/hoo
ks-adapter](https://github.com/JohnXu22786/ho
oks-adapter) - Universal hooks compatibility 
layer: run hooks declared in Claude Code / Co
dex / opencode configs on dsh.
- [dsh-bluepri
nt](https://github.com/taltara/mddl-harness) 
- Blueprint tab for the Web client: reads the
 config the harness actually booted, lints th
e running tree, and writes a `cordis.patch.ym
l` overlay behind a marker-delimited block wi
th snapshots and one-click restore. Refuses t
o write a row naming a package the profile ca
nnot load, since that stops the harness booti
ng rather than disabling one entry.
- [LLYlab
/DSHEssentialTools](https://github.com/LLYlab
/DSHEssentialTools) - A permanent DeepSeek Ha
rness plugin: project run & code viewer, prog
ram snapshots, a VTD conversation tree (edit 
/ retry / branches) with message micro-versio
ns, plus a DET feature manager and global plu
gin control.
- [dsh-plugin-runcat-inventory](
https://github.com/runcat-tommy/dsh-plugin-ru
ncat-inventory) - Runcat Plugin Overview (?
?-????): a better DSH plugin invent
ory � table view, status filters, enable/di
sable switches (hot-applied via HMR), config 
viewer/copy, zh/en UI.

- [duyanta123/dsh-rep
o-scanner](https://github.com/duyanta123/dsh-
repo-scanner) - Read-only repository fact sca
nner kernel for analysis plugins: determinist
ic probe / file index / modules / dependencie
s / entry points / symbols / graphs and git f
acts over a stable JSON schema (CLI + library
 + skill runbook).
- [dsh-darwin](https://git
hub.com/que3sui/dsh-darwin) - Two-plugin self
-evolution loop: dsh-sentinel mines session l
ogs for retry loops, tool-error clusters, int
errupts and token waste into structured ticke
ts; dsh-forge turns a ticket into a candidate
 skill behind an eval gate, promotes it into 
`.dsh/skills` only on human confirmation, and
 rolls it back deterministically.

## Runtime
 & Operations

- [ianho7/dsh-port-inspector](
https://github.com/ianho7/dsh-port-inspector)
 - Windows local development port attribution
 and safe handling for verified DSH services.

- [Ghost011118/dsh-plugin-governor-extension
](https://github.com/Ghost011118/dsh-plugin-g
overnor-extension) - Patch-based DSH plugin g
overnance extension: plugin inventory and whi
telist controls, policy trials, runtime tool-
call admission rules, plus supervised restart
 and automatic rollback through dsh-autostart
.
- [fakechris/dsh-harness-ops](https://githu
b.com/fakechris/dsh-harness-ops) - Self-heali
ng DSH ops toolbox: official daily-snapshot A
/B slot rotation (auto plugin migration + acc
eptance-gated atomic switch + one-click rollb
ack), a 10s watchdog that auto-relaunches the
 web and resumes interrupted turns, and an ou
t-of-band dsh-doctor (diagnosis ? mechanica
l repair ? LLM deep repair ? relaunch) wh
en web and agent are both down.
- [zoahdev/ds
h-disk-audit](https://github.com/zoahdev/dsh-
disk-audit) - Disk-usage audit for dsh data d
irectories: total size, per-directory breakdo
wn, largest files, oversized-file warnings (s
ession logs can hit hundreds of MB) and clean
up suggestions (CLI + `disk_audit` tool).
- [
zoahdev/dsh-cn-boot](https://github.com/zoahd
ev/dsh-cn-boot) - China-network bootstrap: pr
obes npm/npmmirror/GitHub/HuggingFace/Gitee a
nd local proxies, recommends mirrors/proxy, g
enerates a PowerShell + bash bootstrap (CLI +
 `cn_boot` tool).
- [zoahdev/dsh-firstrun](ht
tps://github.com/zoahdev/dsh-firstrun) - Firs
t-run health check: node/pnpm/dsh toolchain, 
profile, API key (names only), workspace, reg
istry + actionable next steps (CLI + `quickst
art` tool).
- [zoahdev/dsh-trace](https://git
hub.com/zoahdev/dsh-trace) - Aggregate observ
ability dashboard: decode every `session.json
l.zstd` under a sessions root and render toke
ns/tools/errors/latency as one self-contained
 HTML report (zero deps).
- [dsh-launch](http
s://github.com/Khellendros97/dsh-launch) - De
tached-broker supervision of long-running ser
vices (dev servers, watchers, mock APIs) that
 survive turns, sessions and DSH restarts, wi
th a Service sidebar tab (registered via bett
er-sidebar's extension API) and service_start
/stop/restart/list/logs model tools.
- [dsh-e
nv-switcher](https://github.com/Oyama-Mahiro-
F/dsh-env-switcher) - One-click Windows/WSL2 
environment switcher for DSH (coexistence mod
e): both environments run simultaneously on s
eparate ports and switch from the web UI with
out killing any process.
- [dsh-payload-captu
re](https://github.com/moeblack/dsh-payload-c
apture) - Capture every upstream model API pa
yload to JSON (debug & observability).
- [dsh
-doctor](https://github.com/ciceroyang/dsh-do
ctor) - One-command local environment health 
check for DSH: node/pnpm/dsh versions, port 3
080, DSH_HOME writability, profile manifests,
 multi-frame session-log health scan, dsh-doc
tor/v1 envelope.
- [dsh-observation-journal](
https://github.com/Cavan-Ou/dsh-observation-j
ournal) - Zero-touch runtime telemetry for DS
H: every session auto-writes task, model tier
, tools, failures, duration, status into a hu
man-readable journal with a stats section (pu
re observer � no tools, no LLM calls, no in
jection).
- [Oscar-Williams/dsh-deepcanary](h
ttps://github.com/Oscar-Williams/dsh-deepcana
ry) - Evidence-first attention supervision fo
r DeepSeek Harness: C0�C3 policies, dedupli
cated Inbox alerts, quiet hours, and redacted
 outcome records.
- [sandbase-harness](https:
//github.com/sandbaseai/sandbase-harness) - P
ersistent managed-agent runtime for DSH via a
 native bundle and stdio MCP, with sandboxed 
sessions, audit, and replay.
- [dsh-workloads
](https://github.com/yewenyell-lang/dsh-workl
oads) - Workspace-owned durable process super
vision, readiness checks, and a Runtime Cente
r for DeepSeek Harness.
- [dsh-doctor](https:
//github.com/asdf17128/dsh-doctor) - Profile 
health check: finds config fields a patch dro
pped by whole-config replacement, patches tar
geting missing entry ids, and tool-name colli
sions.
- [chouyong/dsh-effect-doctor](https:/
/github.com/chouyong/dsh-effect-doctor) - Iso
lated cleanup verifier for Cordis-managed run
time resources, producing deterministic recei
pts after plugin teardown.
- [dsh-xray](https
://github.com/alloevil/dsh-xray) - Compositio
n X-ray for DSH: attribute every booted row t
o the layer that introduced it, diff declared
 vs actual trees (catching patch rows dsh sil
ently skips), service dependency graph with d
isable-cascade, per-plugin lifecycle health, 
tool-schema token cost, and a heuristic capab
ility audit of out-of-tree plugins; static co
mmands work even when dsh cannot boot, and an
 `xray_composition` tool lets agents introspe
ct their own capability set.
- [fancr-code/ds
h-tray-launcher](https://github.com/fancr-cod
e/dsh-tray-launcher) - Windows system-tray la
uncher: windowless `dsh web` with a tray menu
 (open UI/log, exit = full quit), preset icon
s (Liangzu / whale-girl / DeepSeek) plus cust
om, one-line npm install.
- [dsh-portable-lau
ncher](https://github.com/15828148/dsh-portab
le-launcher) - One-click portable Windows lau
ncher for the dsh Web UI: auto-installs Node.
js and dsh, CN mirror fallback, retries and r
esume.
- [dsh-desktop-launcher](https://githu
b.com/becomeless/dsh-desktop-launcher) - Wind
ows desktop launcher: double-click to start d
sh Web with zero console windows, auto-stop o
n close, session resume, one-line install.
- 
[dsh-quickstart](https://github.com/qzhqzh/ds
h-quickstart) - Windows desktop launcher (zer
o-dependency npm CLI): double-click a desktop
 shortcut to start dsh web with zero console 
windows and auto-open the browser once ready.

- [oxgbl/dsh-no-cmd-launcher](https://github
.com/oxgbl/dsh-no-cmd-launcher) - Windows bac
kground launcher: run DSH Web without a comma
nd window, with desktop start/stop shortcuts 
and npm/CLI installation.
- [dsh-dock](https:
//github.com/UnknowCao/dsh-dock) - Windows de
sktop launcher plugin: prebuilt whale exe ope
ns the DSH Web UI as a fullscreen Edge app (t
oken health gate, cold-start card); a sidebar
 More menu adds Settings/Reload/Full Exit, wh
ich stops the server and closes the window.
-
 [dsh-win32](https://github.com/sjh9714/dsh-w
in32) - Native Windows shell and Workspace Wr
ite sandbox presets for DSH without WSL, usin
g busybox-w32 for sandboxed sessions and Git 
Bash for unrestricted sessions, with setup di
agnostics.
- [dshp](https://github.com/asdf17
128/dshp) - Profile manager: list, create, cl
one and diff profiles, and export a whole set
up (bundle order, plugin versions, patch) as 
one portable file.
- [dsh-session-cleaner](ht
tps://github.com/fountunt/dsh-session-cleaner
) - Delete sessions from a running web runtim
e: live store, workspace records, and on-disk
 artifacts (no restart needed).
- [dsh-sessio
n-cleaner-cli](https://github.com/ChenChen913
/dsh-session-cleaner-cli) - Offline CLI that 
deep-cleans workspace sessions: interactive/b
atch delete with trash + restore + backups, w
orkspace-registry and projection-cache sync, 
ghost-entry pruning. Companion to the runtime
 delete plugin.
- [dsh-restart](https://githu
b.com/anweat/dsh-restart) - Restart DSH: conf
igurable restart method (Node native / legacy
 PowerShell), post-restart continue prompt, o
ptional watchdog auto-relaunch.
- [dsh-tray](
https://github.com/KAIbsb/dsh-tray) - Windows
 tray manager for DSH Web: start/restart/stop
, crash auto-restart, status icon, and autost
art.
- [mirage-dsh](https://github.com/strukt
o-ai/mirage/tree/main/typescript/packages/dsh
) - Swaps the filesystem and bash providers f
or a mirage virtual workspace: file tools and
 shell commands run over mounted resources (R
AM, S3, Redis, Slack, Gmail, Notion, Postgres
) instead of the host disk, with per-mount re
ad/write/exec modes, per-command sandbox rout
ing (monty, pyodide, quickjs in process; dock
er, e2b, daytona remote), and installed CLIs 
(git, gh, slack, linear, ntn, gws, or one you
 register) as head words in the virtual termi
nal.
- [loongsuite/dsh-plugin](https://github
.com/loongsuite/dsh-plugin) - OpenTelemetry G
enAI tracing for DSH: one span tree per turn 
(steps, LLM calls with TTFT, tool executions,
 token usage), exported over standard OTLP to
 any compatible backend, content capture off 
by default.
- [dsh-observe](https://github.co
m/PerryLink/dsh-observe) - Observability expo
rter for DSH: turn/step/tool/LLM spans and to
ken/cost metrics from the session/event strea
m to OTLP and Langfuse, with sanitized prompt
/completion capture, async batching, a bounde
d durable offline buffer, and retry with back
off � off by default.
- [dsh-config-manager
](https://github.com/xiajiajun516/dsh-config-
manager) - Backup / export / import / migrate
 the whole DSH configuration as one portable 
ZIP, restore it on any machine with one click
 (host engine + Web UI).

- [dsh-backup](http
s://github.com/xiaoyuyu6420/dsh-backup) - One
-command backup & restore of ~/.dsh user data
: /backup commands plus a backup_dsh tool and
 Settings panel, sha256 verify with hardened 
restore screening (path-traversal/symlink rej
ection), restart-surviving scheduled auto-bac
kup, rotation, loopback download route, and p
rivate-repo GitHub sync.
- [dsh-fast](https:/
/github.com/PerryLink/dsh-fast) - Read-only p
erformance diagnostics: session load timing, 
spill hits, compaction stats, context-injecti
on volume, and cache-hit rate via the /fast c
ommand and fast_report tool, sampled asynchro
nously off the model path.
- [ClawMetry](http
s://github.com/vivekchand/clawmetry) - Local 
zero-config dashboard that reads dsh session 
logs and shows transcripts, token usage, cost
, and tool calls.
- [Zn-Dk/dsh-session-repair
](https://github.com/Zn-Dk/dsh-session-repair
) - Diagnose and safely repair corrupted DSH 
session history: raw zstd/JSONL artifact vali
dation (header, seq, tool-call IDs, turn/step
 closure), deterministic repair of empty tool
-call ID chains, single-slot pre-repair backu
p + restore, and an audit trail.
- [maxmilian
/dsh-grafana-query](https://github.com/maxmil
ian/dsh-grafana-query) - Read-only Grafana to
ols over the data source proxy: instance heal
th, data sources, instant and range PromQL qu
eries, current alert state, and provisioned a
lert rules.
- [maxmilian/dsh-sentry](https://
github.com/maxmilian/dsh-sentry) - Read-only 
Sentry tools: project listing, issue search a
nd detail, and the latest or a specific event
 with a trimmed stacktrace that drops local v
ariables, request data, and secret-looking ta
gs.
- [dsh-circuit-breaker](https://github.co
m/pricklywiggles/dsh-circuit-breaker) - Deter
ministic loop guard: denies a tool call repea
ted with identical arguments and caps per-age
nt calls, in code outside the model; incident
 log lets a parent interrupt a stuck subagent
.
## Domain & Specialist Skills

- [dsh-mimir
](https://github.com/1692775560/dsh-Mimir-Aca
demic-research) - Research-lifecycle workbenc
h (7-view web panel): arXiv search/import/sub
scriptions with AI relevance scoring, Zotero 
import, experiment tracking with SSH/GPU remo
te jobs, LaTeX write-compile-snapshot studio 
with 11 venue templates, figure management, a
nd one-click group-meeting PPT decks with rea
l paper figures; 10 bundled research skills (
npm: `dsh-mimir`).
- [dsh-fund-research](http
s://github.com/PerryLink/dsh-fund-research) -
 Deterministic research reports for Chinese p
ublic mutual funds: public-source data collec
tion (Tiantian Fund/Eastmoney), pure-function
 metrics (performance decomposition, holdings
 penetration, style attribution, manager prof
ile), and versioned reports with a per-number
 snapshot traceability appendix.
- [weopenfir
e-git/dsh-market-quote](https://github.com/we
openfire-git/dsh-market-quote) - A-share / HK
 / US realtime quotes and historical K-line t
ool plugin via Tencent's free public source (
no API key), read-only.
- [pengpengyi92/dsh-q
uant](https://github.com/pengpengyi92/dsh-qua
nt) - Agent-native quantitative R&D toolkit f
or DSH: 59 tools across 6 domains (data, alph
a, ML, risk, execution, ecosystem) with an en
d-to-end PDAT?PET research pipeline.
- [mad
dogfinance/dsh-trading](https://github.com/ma
ddogfinance/dsh-trading) - Research-only trad
ing workbench plugins: typed market-data seam
 (bring your own provider), multi-timeframe i
ndicator regime snapshot, interactive chart c
ards in dsh web with provenance-gated model a
nnotations, and a risk-guard that blocks exec
ution-shaped tool calls at the pre-execute ga
te.
- [dsh-trading-toolkit](https://github.co
m/kentleenot/dsh-trading-toolkit) - A-share a
nd US stock trading toolkit for DSH agents: r
ealtime quotes, OHLCV klines, ADX regime sign
als and simple backtest previews via EastMone
y. Read-only, never places orders.
- [LAU-MAR
S/dsh-cad](https://github.com/LAU-MARS/dsh-ca
d) - CAD viewer and OCCT parametric modeling 
tools (primitives, extrusion, booleans, fille
ts, engineering drawings, assemblies) with an
 interactive 3D/2D panel in the Web UI; STEP/
STL export.

- [gongyijie85/mattpocock-skills
-dsh](https://github.com/gongyijie85/mattpoco
ck-skills-dsh) - Matt Pocock's full promoted 
skill set (25 SKILL.md: grilling, writing-for
-agents, wait-what, TDD, code review, wayfind
er, ask-matt router) ported to DSH.
- [gongyi
jie85/mattpocock-skills-dsh-zh](https://githu
b.com/gongyijie85/mattpocock-skills-dsh-zh) -
 Matt Pocock's 25 skills fully translated to 
Chinese (technical terms kept in English with
 glosses).
- [gongyijie85/dsh-ponytail](https
://github.com/gongyijie85/dsh-ponytail) - Pon
ytail, lazy senior dev mode: 6 skills (ponyta
il, ponytail-audit, ponytail-debt, ponytail-g
ain, ponytail-help, ponytail-review) adapted 
from DietrichGebert/ponytail.
- [oneinitAI/ds
h-buddy](https://github.com/oneinitAI/dsh-bud
dy) - Portrait-adaptive communication skill: 
builds a live user portrait (proficiency, per
-domain gaps, current state) from the convers
ation and calibrates every answer's depth, ja
rgon density and step granularity to it; beha
vior-over-claims dumb-play detection; transpa
rent profile snapshot export. MIT.
- [gongyij
ie85/dsh-ecc](https://github.com/gongyijie85/
dsh-ecc) - 273 ECC skills (95.8% of the 227k-
star operator system) ported to DSH in four b
atches.
- [dsh-learn-everything](https://gith
ub.com/cendaifeng/dsh-learn-everything) - Fey
nman learning-mode plugin: teach ? teach-ba
ck ? judge ? re-explain loop rendered as 
rich HTML lesson cards (mermaid diagrams + sh
iki code highlighting).
- [zotero-harvest](ht
tps://github.com/dsh-external/zotero-harvest)
 - Zotero library integration.
- [zotero-wave
-rag](https://github.com/dsh-external/zotero-
wave-rag) - Zotero RAG retrieval.
- [dsh-data
-agent](https://github.com/dsh-external/dsh-d
ata-agent) - Let the model connect to databas
es and write SQL.
- [dsh-news-plugin](https:/
/github.com/canghai666x/dsh-news-plugin) - RS
S news fetch tool: grabs 10+ CN/EN feeds into
 structured items (title/link/source/date/sum
mary) with per-source timeout, ready for mode
l-side scoring and briefing (cordis).
- [dsh-
news-briefing](https://github.com/canghai666x
/dsh-news-briefing) - News briefing skill: 5-
dimension scoring (story/timeliness/depth/fun
/uniqueness), anti-clickbait writing rules, T
ier-based content preference, de-AI-style Chi
nese writing guide.
- [dsh-web-novel-research
](https://github.com/canghai666x/dsh-web-nove
l-research) - Chinese web-novel plot lookup s
kill: free mirror-site workflow (GBK decoding
, cross-volume duplicate chapter disambiguati
on, multi-source completion check) without pa
id sources.
- [easyeda-agent](https://github.
com/zhoushoujianwork/easyeda-agent) - EasyEDA
 Pro automation: Go daemon + in-app connector
 + agent skill + stdio MCP server for typed s
chematic/PCB actions, workflow gates, and DRC
.
- [dsh-stock-market](https://github.com/dsh
-external/dsh-stock-market) - Shanghai and Sh
enzhen A-share market data plugin.
- [dsh-us-
stocks](https://github.com/Realyujie/dsh-us-s
tocks) - US stock quotes, price history, fina
ncial statements, analyst consensus and news 
via yahoo-finance2.
- [dsh-openmaic](https://
github.com/dsh-external/dsh-openmaic) - Gener
ate interactive OpenMAIC AI classrooms.
- [ds
h-science](https://github.com/biociao/dsh-sci
ence) - Claude Science-style research workben
ch: ReAct research-loop engine (research_*too
ls), versioned artifacts with provenance (art
ifact_* tools), and 10 science skills for gen
omics/pathogens/bioinformatics.
- [dsh-revers
e-skill](https://github.com/dhicoc/dsh-revers
e-skill) - Complete reverse-skill pack (85 SK
ILL.md) as a DeepSeek Harness Cordis plugin: 
reverse engineering, authorized pentesting an
d security-research skill router.
- [dsh-grok
-geo](https://github.com/xuboboo/dsh-grok-geo
) - GEO brand audit skill bundle: AI-search v
isibility, recommendations, citations, compet
itor presence and content-gap diagnosis acros
s 17+ AI engines (ChatGPT/Perplexity/Claude/?
???/DeepSeek/Kimi/????).
- [Haniubu
b/seo-toolkit](https://github.com/Haniubub/se
o-toolkit) - SEO audit skill: full local & te
chnical SEO audit for DSH � deterministic P
ython measurement (53 scripts + lib/), LLM ju
dgment (24 sub-skills + 18 agents), weighted 
score, gated multi-agent fan-out, schema.org,
 E-E-A-T, GBP, GEO/AI Overviews.
- [dsh-rigor
quant](https://github.com/linxichen/dsh-rigor
quant) - Agent preset + skill for unattended 
empirical/computational mathematics research 
(econ/finance/portfolio): walled multi-agent 
exploration, dual-track ground-truth derivati
on, adversarial counterexample-only audit, fo
ur-part pre-implementation check battery, and
 a jacobian/Lean escalation lane.
- [dsh-wuyu
n-liuqi](https://github.com/dhicoc/dsh-wuyun-
liuqi) - Complete wuyun-liuqi (five-evolution
s-six-qi / ????) Traditional Chinese 
Medicine skill pack as a DeepSeek Harness Cor
dis plugin: annual and guest-qi calculation, 
clinical pattern differentiation, and pathoge
nesis reasoning.
- [dsh-plugin-writing-guard]
(https://github.com/xmutfyh/dsh-plugin-writin
g-guard) - Academic writing guard: local-rege
x linter for revision-process residue, defens
ive writing and AI-writing tells (em-dash abu
se, not-X-but-Y, LLM word spikes, rule of thr
ee); writing_audit + writing_rules with incre
mental auto-audit on paper file writes.
- [wr
ite-chinese-long-screenplay](https://github.c
om/mudden2380078550-creator/write-chinese-lon
g-screenplay) - Chinese long-form screenwriti
ng skill (SKILL.md): two author input blocks 
(background + character bible) feeding a caus
al-value engine, anti-AI-flavor review, and a
 continuity ledger for 100+ scene projects.
-
 [kubemd](https://github.com/guiyi-labs/kubem
d) - Evidence-first Kubernetes runtime diagno
sis skill with case memory: diagnoses live cl
uster failures (CrashLoop/OOM/Pending/Network
Policy deny), dry-run fixes, records resolved
 cases for instant recall; ships a go-install
 CLI twin.
- [commercial-ui-ux-codex-skill](h
ttps://github.com/zjsthmjialin/commercial-ui-
ux-codex-skill) - Registers the commercial-ui
-ux skill: task-aware commercial UI/UX/GUI de
sign, review, repair and implementation (SaaS
, dashboards, admin panels, forms, design sys
tems) with a reference-doc system and quality
 gates.
- [dsh-wm](https://github.com/WayneJi
n0918/dsh-wm) - World-model research toolkit:
 inspect frames, name 3D / pixel / latent rou
tes, score pred vs GT, and RSI skills / wm.ya
ml.
- [vdnight89/InfiniteDSH](https://github.
com/vdnight89/InfiniteDSH) - ????DSH:
 one DSH session is one book; a cover-card pi
cker opens 19 realms, a prose-only preset loc
ks the model to fiction, keyword worldbook lo
re grounds each turn, and /export-story types
ets the session into a Markdown novel.
- [Joh
nXu22786/skill-framework](https://github.com/
JohnXu22786/skill-framework) - Praxis: a bund
led engineering-methodology skill library (Ag
ent Skills) for dsh, served as a Cordis plugi
n via ctx.skills.
- [duyanta123/dsh-data-insi
ght](https://github.com/duyanta123/dsh-data-i
nsight) - Data-insight skill that turns raw d
ata (CSV / pasted tables / SQL results / Duck
DB) into structured Markdown reports with bus
iness conclusions, metrics and charts.

- [ds
h-industry-research](https://github.com/Perry
Link/dsh-industry-research) - Industry and co
mpany research domain pack: industry_map chai
n maps, public-source policy/news tracking ov
er ctx.web (industry_track), company_scan car
ds from user data files, and industry_report 
with an optional ctx.researchReport sealing b
ridge and a builtin-fallback renderer, plus t
wo methodology skills.
- [dsh-data-quality](h
ttps://github.com/PerryLink/dsh-data-quality)
 - Deterministic data profiling, cleaning, an
d verification: data_profile / data_clean / d
ata_verify tools plus a frozen cross-plugin v
erifyCitations citation-checking contract, wi
th durable reports in a storage domain.
- [ma
xmilian/dsh-odoo](https://github.com/maxmilia
n/dsh-odoo) - Read-only Odoo tools over JSON-
RPC: server info, model field introspection, 
and a restricted search_read on an allow list
 of models. A draft-create tool is registered
 only when allowWrite is enabled.
## Tools & 
Utilities
- [dsh-tray](https://github.com/liu
lifu/dsh-tray) - Windows system-tray guardian
 for DeepSeek Harness: launch/stop/restart th
e dsh service, multi-profile port bindings, s
napshot-based quick recovery, plugin enable/d
isable, SQLite version ledger, and a client s
entinel that detects a plugin failing to load
, disables it and restores DSH.

- [zilliztec
h/dsh-milvus](https://github.com/zilliztech/d
sh-milvus) - Read-only DSH Web plugin for ins
pecting and searching Milvus or Zilliz Cloud 
collections from chat, including scalar, BM25
, dense, and hybrid queries.

- [zoahdev/dsh-
discussions-radar](https://github.com/zoahdev
/dsh-discussions-radar) - Official GitHub Dis
cussions radar: list/filter/search the offici
al boards (Ideas/Q&A/Show Your Plugins!/Gener
al/Announcements) (CLI + `discussions_radar` 
tool).
- [dsh-case](https://github.com/Zhijia
ngTang/dsh-case) - Name-case conversion acros
s 8 styles: camel, snake, kebab, Pascal, and 
more.
- [dsh-clipboard](https://github.com/Zh
ijiangTang/dsh-clipboard) - Writes text to th
e system clipboard, cross-platform (macOS/Win
dows/Linux).
- [dsh-cron-parse](https://githu
b.com/ZhijiangTang/dsh-cron-parse) - Parses c
ron expressions into human-readable text and 
previews upcoming run times.
- [dsh-dead-link
s](https://github.com/ZhijiangTang/dsh-dead-l
inks) - Scans Markdown files for dead http(s)
 links.
- [dsh-fetch-file](https://github.com
/ZhijiangTang/dsh-fetch-file) - Downloads a U
RL into the workspace as a file, with a path 
fence, streaming, and a 200 MB cap.
- [dsh-fi
le-convert](https://github.com/zzy-12345678/d
sh-file-convert) - Local-first file conversio
n: 26 conversions across images, PDF (with OC
R and experimental PDF?DOCX), data, audio/v
ideo and office docs; 7 tools, all local, no 
API keys.
- [dsh-fmt](https://github.com/Zhij
iangTang/dsh-fmt) - Formats and validates JSO
N/YAML/TOML/SQL, with line-and-column error l
ocations.
- [dsh-handoff](https://github.com/
ZhijiangTang/dsh-handoff) - Exports the curre
nt session as a deterministic Markdown handof
f document.
- [dsh-http](https://github.com/Z
hijiangTang/dsh-http) - Structured HTTP reque
st tool: returns status, duration, and size, 
with basic/bearer auth helpers.
- [dsh-jwt](h
ttps://github.com/ZhijiangTang/dsh-jwt) - Dec
odes a JWT for debugging without verifying it
s signature, and flags expiry.
- [dsh-passwor
d](https://github.com/ZhijiangTang/dsh-passwo
rd) - Generates strong random passwords and d
iceware passphrases via crypto.
- [dsh-pkg-in
fo](https://github.com/ZhijiangTang/dsh-pkg-i
nfo) - Queries npm/PyPI package metadata (ver
sion, license, dependencies).
- [dsh-url-tool
s](https://github.com/ZhijiangTang/dsh-url-to
ols) - URL parsing, tracking-parameter remova
l, encode/decode, and redirect expansion.
- [
dsh-when](https://github.com/ZhijiangTang/dsh
-when) - Parses natural-language relative tim
e (e.g. "in 2 hours") into ISO timestamps, fa
il-fast.
- [JohnXu22786/command-scout](https:
//github.com/JohnXu22786/command-scout) - Sca
ns a project's declared build commands (Makef
ile, package.json scripts, justfile, deno tas
ks) and exposes them as agent tools.
- [JohnX
u22786/file-planning](https://github.com/John
Xu22786/file-planning) - Trailmap: disk-persi
sted execution-planning plugin � milestone/
step state machine, dependency tagging, audit
 events and retrospective notes, via dsh tool
s, CLI and skills.
- [JohnXu22786/codegraph](
https://github.com/JohnXu22786/codegraph) - C
ode knowledge graph for dsh: indexes symbols,
 call sites and imports into SQLite and answe
rs call/dependency questions via CLI or stdio
 MCP tool server.
- [Nicholas023/vision-exp-t
ile](https://github.com/Nicholas023/vision-ex
p-tile) - Large-image recognition for vision-
exp models: lossless 800�800 tile recognitio
n (smart/pipeline/full), local OCR with prepr
ocessing & handwriting routing, optional mult
i-vendor GPU (DirectML/CUDA/OpenVINO) with au
to CPU fallback.
- [dsh-overlay-check](https:
//github.com/taltara/mddl-harness/tree/main/p
ackages/overlay-check) - Offline overlay safe
ty checks as a zero-dependency library: resol
vability preflight, confined managed-block wr
ites, a readable diff, and a warning that `ag
ent-presets.roots` is discarded at boot (deep
seek-harness#403).

## Related

- [dsh-extern
al/issues](https://github.com/dsh-external/is
sues) - Issue aggregation hub.
- [dsh-meme-hu
b](https://github.com/the-beating-light-of-th
e-nail/dsh-meme-hub) - Curated navigation of 
community meme plugins (skins, desktop pets, 
mini-games), bilingual.
- [DeepSeek Harness H
andbook](https://github.com/sandbaseai/deepse
ek-harness-handbook) - 173 English-canonical,
 source-backed guides with 202 localized docu
ments, an 82-resource Agent-first [Awesome re
source map](https://sandbaseai.github.io/deep
seek-harness-handbook/awesome-deepseek-harnes
s-resources.html), local-browser [Install Doc
tor](https://sandbaseai.github.io/deepseek-ha
rness-handbook/install-doctor.html), and [Fai
lure Router](https://sandbaseai.github.io/dee
pseek-harness-handbook/diagnose.html).
- [liy
upi/ai-guide](https://github.com/liyupi/ai-gu
ide) - Chinese Vibe Coding handbook with a de
dicated DeepSeek Harness section: getting sta
rted, server deployment, agent presets, minim
al-mode field test, and curated plugins.
- [T
eamoRouter](https://teamorouter.com/docs/inst
all-deepseek-harness) - OpenAI-compatible end
point with free DeepSeek V4 Pro/Flash daily q
uotas; point DEEPSEEK_BASE_URL at it, no paym
ent info required.
- [DeepSeek](https://deeps
eek.com) - Official site.

### Friendly links


- [DeepSeek Harness Desktop](https://github
.com/anywhere-labs/deepseek-harness-desktop) 
- Modern desktop client for the DSH ecosystem
: launch and manage a local Harness without c
onfiguring Node.js or running commands; plugi
n marketplace, mobile remote control and IM c
hannels planned. [Website](https://www.dshdes
ktop.cn)

## Contributing

Please have a look
 at [contributing.md](contributing.md). Entry
 standard: repository + one-line description 
+ link; the curated list is maintained by han
d, the full index lives in hub.

## Thanks

T
hanks to the [Linux Do community](https://lin
ux.do/) for the support and exchange.


