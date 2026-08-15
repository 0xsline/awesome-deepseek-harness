<div>
  <p align="center">
    <img width="100%" alt="Agent = Model + Harness — DSH エコシステムをつなぐ光るクジラ" src="assets/media/awesome-deepseek-harness-banner.png">
  </p>
</div>

<p align="center">
  <a href="README.md">简体中文</a> · <a href="README_EN.md">English</a> · 日本語
</p>

<p align="center">
  DeepSeek Harness の究極ガイド：資料、チュートリアル、プラグイン、ツール<br>
</p>

<p align="center">
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
  <a href="https://github.com/topics/dsh-plugin"><img src="https://img.shields.io/badge/GitHub-dsh--plugin-0969da?style=flat-square" alt="GitHub topic: dsh-plugin"></a>
  <a href="https://github.com/libukai/awesome-deepseek-harness/stargazers"><img src="https://img.shields.io/github/stars/libukai/awesome-deepseek-harness?style=flat-square" alt="GitHub Stars"></a>
  <a href="https://github.com/libukai/awesome-deepseek-harness/issues"><img src="https://img.shields.io/badge/Issues-welcome-brightgreen.svg?style=flat-square" alt="Issues welcome"></a>
</p>

本プロジェクトは「量より質」を重視し、DeepSeek Harness に関する優れた資料を厳選して収集することで、AI 実務者とともにより豊かな Agent エコシステムを築くことを目指しています。

> このプロジェクトが役に立ったら、ぜひ ⭐ を付けてください。Agent に関する実践的な情報は、X の [@李不凯正在研究](https://x.com/libukai) でも発信しています。

## 目次

- [目次](#目次)
- [クイックスタート](#クイックスタート)
  - [Web UI の起動](#web-ui-の起動)
  - [ソースから実行](#ソースから実行)
  - [Python SDK の使用](#python-sdk-の使用)
  - [プラグインのインストール](#プラグインのインストール)
- [公式リソース](#公式リソース)
  - [パッケージと連携](#パッケージと連携)
  - [ソースリポジトリ](#ソースリポジトリ)
  - [公式ドキュメント](#公式ドキュメント)
  - [コミュニティ](#コミュニティ)
- [コミュニティリソース](#コミュニティリソース)
  - [解説とチュートリアル](#解説とチュートリアル)
  - [コミュニティでの議論](#コミュニティでの議論)
- [サードパーティクライアント](#サードパーティクライアント)
  - [デスクトップアプリとディストリビューション](#デスクトップアプリとディストリビューション)
  - [ターミナル・モバイル・Web 体験](#ターミナルモバイルweb-体験)
- [厳選プラグイン](#厳選プラグイン)
  - [ワークフローと Agent](#ワークフローと-agent)
  - [コンテキスト・Session・入力](#コンテキストsession入力)
  - [ブラウザ・ビジョン・インターフェース](#ブラウザビジョンインターフェース)
  - [サンドボックスと実行](#サンドボックスと実行)
  - [テーマとスキン](#テーマとスキン)
- [外部連携](#外部連携)
- [開発ツール](#開発ツール)
- [謝辞](#謝辞)

## クイックスタート

[DeepSeek Harness](https://deepseek.com/harness/)（DSH または `dsh`）は、DeepSeek AI が公開しているオープンソースの Agent Harness プロジェクトです。[Cordis](https://github.com/cordiverse/cordis) を基盤とし、**Everything is a Plugin（すべてがプラグイン）**というアーキテクチャを採用しています。モデルアダプター、ツール、Session ログ、インターフェース、Agent Loop は、すべてプラグインツリーを通じて組み合わせたり置き換えたりできます。

### Web UI の起動

[Node.js](https://nodejs.org/) 22.19.x または 24+（24+ を推奨）をインストールしてから、次を実行します。

```bash
npx @deepseek-ai/dsh web
```

デフォルトでは `http://127.0.0.1:3080` にアクセスします。**Settings → Models** でモデルサービスを設定すると、Session を作成できます。詳しくは[公式クイックスタート](https://deepseek-harness.github.io/deepseek-harness/guide/quickstart)と[モデルサービス設定](https://deepseek-harness.github.io/deepseek-harness/guide/providers)を参照してください。

### ソースから実行

```bash
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness
pnpm install
pnpm run build
pnpm dsh web
```

### Python SDK の使用

公式 Python SDK では、同梱 Runtime を通じて Harness をプログラムから呼び出せるため、システム側に Node.js を用意する必要はありません。現在は Python 3.10+ が必要です。対応状況とプラットフォーム制限については、[公式 Python SDK ガイド](https://deepseek-harness.github.io/deepseek-harness/guide/python-sdk)を参照してください。

```bash
python -m venv .venv
. .venv/bin/activate
python -m pip install deepseek-harness-sdk
```

### プラグインのインストール

`web` と `headless` はディストリビューションに組み込まれた Profile です。外部プラグインは、`dsh.bundle` を宣言する Bundle として対象 Profile に追加されます。

```bash
dsh plugin --profile web add <package-or-git-spec>
dsh --profile web --dump-config
```

Git リポジトリからインストールする場合は、commit を固定し、事前にインストールスクリプトを確認してください。pnpm では依存パッケージのビルドスクリプトに明示的な許可が必要になることがあります。このコードは Agent サンドボックスの外で実行されます。詳細は[公式プラグインのパッケージ化・インストールガイド](https://deepseek-harness.github.io/deepseek-harness/develop/basic/publish)を参照してください。

## 公式リソース

公式プロジェクトは、オープンソースリポジトリ、関連論文、充実したリファレンスドキュメントを提供し、開発者コミュニティを継続的に運営しています。

### パッケージと連携

- [@deepseek-ai/dsh](https://www.npmjs.com/package/@deepseek-ai/dsh)：公式 CLI と Web UI の npm 起動パッケージ
- [deepseek-harness-sdk](https://pypi.org/project/deepseek-harness-sdk/)：DSH をプログラムから利用するための公式 Python SDK

### ソースリポジトリ

- [GitHub](https://github.com/deepseek-ai/deepseek-harness)：ソースコード、Issue、リリース、コントリビューター
- [Paper](https://github.com/cordiverse/paper)：Cordis ベースのプロダクトアーキテクチャを詳しく解説する論文

### 公式ドキュメント

- [中国語公式サイト](https://deepseek.com/harness/)：プロダクトの位置付けと主要コンセプト
- [ドキュメント](https://deepseek-harness.github.io/deepseek-harness/guide/quickstart)：利用方法、プラグイン開発、アーキテクチャリファレンスの入口

### コミュニティ

- [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions)：質問、利用者同士の交流、提案
- [DeepSeek Discord](https://discord.gg/Ycq5dCaS4)：中国語を中心とする公式 Discord コミュニティ
- ["DeepSeek Harness"](https://x.com/search?q=%22DeepSeek%20Harness%22%20OR%20dsh-plugin&src=typed_query&f=live)：DSH に関する X のリアルタイム検索結果
- [# dsh-plugin](https://github.com/topics/dsh-plugin)：GitHub 上の DSH プラグインプロジェクト

## コミュニティリソース

### 解説とチュートリアル

| ガイド | 形式 | 内容 |
| --- | --- | --- |
| [DeepSeek Harness ゼロから入門](https://yanhua1010.github.io/dsh-harness-tutorial/) | 中国語チュートリアルと Demo | 原理、ソース解説、8 個の Demo、`mini-harness` 学習プロジェクトを収録 |
| [DeepSeek Harness：起動から分解まで](https://github.com/alchaincyf/deepseek-harness-orange-book) | 中国語の実践電子書 | PDF、EPUB、HTML で公開。完全なシステムプロンプト、129 行のデフォルト起動マニフェスト、3 件の生セッションログを収録 |
| [DeepSeek Harness を解剖する](https://xueai.app/slides/learn.html#dsh-1.html) | インタラクティブなソース解説 | Session、コンテキスト、ツール、サンドボックス、Code Mode、Subagent などの主要メカニズムを解説 |
| [Cordis は何をしているか：DeepSeek Harness から見る](https://blog.antinomie.org) | 中国語のアーキテクチャ短文 | プラグイン作者の視点から Cordis のメンタルモデルを説明し、複雑さがシステム内部へ移ることを論じる |
| [DeepSeek Harness ハンドブック](https://github.com/Electricitysheep/dsh-handbook) | 中国語・英語のマニュアル | インストール、プラグイン開発、セキュリティ、コストまで 14 章。オンライン版、PDF、実行可能な例を収録。内容は CC BY-NC-SA 4.0 で、`0.1.0-rc.6` を基準とする |

### コミュニティでの議論

公式資料で触れられていない背景や実践の詳細を補う、十分な論述、実践情報、一次的な背景を含む公開長文投稿です。

| 投稿 | 作者と背景 | 概要 |
| --- | --- | --- |
| [初期参加者の視点から DSH を理解する](https://x.com/jiayuan_jy/status/2087911060154314963) | [Jiayuan (JY) Zhang](https://x.com/jiayuan_jy)。作者は 1 か月早くリポジトリへのアクセス権を得たと説明 | DSH を、実際に動作する Coding Agent と Agent 開発フレームワークの両方として捉える。「LEGO の車」で Everything is a Plugin を説明し、Runtime の自己拡張、自己進化ソフトウェアの原型、現在の成熟度、関数型プログラミング的な特徴を論じる |
| [Agent Runtime / Agent OS の視点から DSH を理解する](https://x.com/anion_ex/status/2087910193783025853) | [Anionex](https://x.com/anion_ex)。クローズドベータ参加者、プラグイン作者 | モデル、ツール、ポリシー、ストレージ、コンテキスト、インターフェース、Loop の合成可能性から DSH を説明し、Agent による Runtime の限定的な観測と制御された自己拡張を論じる |
| [DeepSeek Harness を一晩試し、『Minecraft』方式で Claude Code に挑むと感じた理由](https://www.pingwest.com/a/316436) | 品玩。公開初夜のメディア観察 | DSH 本体、プラグイン、ディレクトリ、ディストリビューションを Minecraft の Vanilla、Mod、CurseForge、Modpack にたとえ、初夜の互換性と安全性の議論を記録 |
| [ソースから DSH と Codex を対照する：宣言的プラグイン vs 差し替え可能な Agent Loop](https://x.com/grapeot/status/2088019011561005382) | [鴨哥](https://x.com/grapeot)。ソースを読んだうえで Codex と行単位で対照。展開版は [yage.ai](https://yage.ai/share/dsh-deep-analysis-20260813.html) | Codex の宣言的プラグインと DSH のプロセス内命令的プラグインを対比し、日常のコーディングに Cordis の複雑さは不要だと論じる。構造上の唯一の利点は、Agent Loop 自体をホットスワップできることであり、自己進化する Harness のための物理スロットになる |

## サードパーティクライアント

以下のプロジェクトは、単一ツールの機能ではなく、独立した UI、配布形態、またはプロダクト化された構成を提供します。

> **分類について：** ディストリビューションや Fork は、完全な DSH Runtime を直接再利用、変更、再パッケージ化するため、`dsh plugin` ではインストールできず、プラグインには分類されません。独立クライアントは Web、RPC、ACP、または専用ブリッジプラグインを通じて DSH に接続します。いずれも Harness エコシステムの重要な構成要素です。

### デスクトップアプリとディストリビューション

| プロジェクト | プラットフォーム／形態 | 説明 |
| --- | --- | --- |
| [DeepSeek Harness Desktop (anywhere-labs)](https://github.com/anywhere-labs/deepseek-harness-desktop) | macOS (Apple Silicon) / Windows · Electron · 初期段階 | 公式 Runtime と Web UI を、ローカルサービスのライフサイクル管理、システムトレイ、デスクトップウィンドウとともにパッケージ化。現在は `v0.1.0` で、プラグインマーケット、モバイル遠隔操作、Channels はまだ計画段階 |
| [DeepSeek Harness Desktop (steven-kid)](https://github.com/steven-kid/deepseek-harness-desktop) | macOS / Windows / Linux · Electron · 初期段階 | 公式 Web UI を維持する最小構成のシェル。ランダムなループバックポート、Electron サンドボックス、`contextIsolation` を採用し、各プラットフォームの配布物で起動スモークテストを実施。macOS 版は未公証、Windows 版は商用コード署名なし |
| [DeepSeek Harness Desktop App](https://github.com/vibeinging/deepseek-harness-desktop-app) | macOS / Windows · Electron · 初期ワークベンチ | 同じ DSH Runtime 経路にプロジェクト、Git Worktree、ブラウザ、Canvas、Site、Office 成果物を追加。現在は `v0.0.1` で、インストールパッケージの実機検証はまだ初期段階 |
| [TinyWhale](https://github.com/aimierbear/TinyWhale) | macOS · Electron · ディストリビューション Fork | `deepseek-ai/deepseek-harness` を直接 Fork して独立デスクトップシェルを追加。既存 Web UI に接続するか、完全な `dsh web` Runtime を起動するため、プラグインではない |
| [Oh-DSH](https://github.com/hust-open-atom-club/oh-dsh) | macOS / Linux / Windows · コミュニティディストリビューション | DSH、Node.js、ローカル機能を Desktop、Web、TUI の 3 形態にパッケージし、段階別インストーラーと統一 `ohdsh` ランチャーを提供 |
| [DSH Desktop](https://github.com/dataelement/dsh-desktop) | macOS / Windows · Electron | ローカル Harness、ワークスペース、ランダムポート、Profile、プラグイン、Session を管理するクロスプラットフォームデスクトップクライアント |
| [dsh-launcher](https://github.com/Ruler4396/dsh-launcher) | Windows · WebView2 | サイレント起動、独立ウィンドウ、ポータブルパッケージ、MSI を提供する軽量ランチャー |

### ターミナル・モバイル・Web 体験

| プロジェクト | 種類 | 説明 |
| --- | --- | --- |
| [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | TUI Bundle | Claude Code 風の全画面ターミナル、ストリーミング状態、コンテキスト計器、Session のロールバック |
| [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | TUI Bundle | Tianshu から発展した完全なターミナル操作レイヤー。状態は DSH Session イベントストリームから取得 |
| [dsh-tui](https://github.com/openguardrails/dsh-tui) | TUI Bundle · 初期段階 | ローカル DeepSeek とオフライン実行に対応。活発に開発中で、移植前のテストスイートはまだ動作していない |
| [Orbis](https://github.com/icodesign/orbis) | モバイル遠隔操作 · Beta | DSH プラグインによりデバイスのペアリング、エンドツーエンド暗号化転送、複数デバイスのリアルタイム更新を実現 |
| [dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | Web UI コレクション | タスクボード、Git Graph、モバイル UI、スキン、ペット、実行統計などのコンポーネントを収録 |
| [dsh-web](https://github.com/Tom6814/dsh-web) | Docker Web · 初期段階 | Docker で完全な Web UI、ワークスペース、プラグインマーケットを展開。開発は急速に進んでおり、設定と Session を永続化するにはデータボリュームのマウントが必要 |

> 掲載されていることは、署名済み、公証済み、自己完結型、本番利用可能であることを意味しません。各プロジェクトの README と Releases で最新状況を確認してください。

## 厳選プラグイン

### ワークフローと Agent

- [dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit)：時刻、エンコーディング、JSON、計算、CSV、正規表現、Markdown、Diff などの決定論的ツール集。
- [dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research)：DSH 向けの適応型ディープリサーチオーケストレーター。
- [dsh-101](https://github.com/bill9109/dsh-101)：DSH 内で公式ドキュメントを読み、理解するための学習モード。
- [dsh-auto-approval](https://github.com/Andy8647/dsh-auto-approval)：ルールとモデルでツール呼び出しを分類し、`allow / deny` の自動承認判断を返す。
- [mstar-harness](https://github.com/btspoony/mstar-harness)：Skill 駆動の Harness / Loop Engineering ワークフロープラグイン。
- [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams)：DSH に Agent Teams 機能を追加。
- [dsh-automation](https://github.com/titanwings/dsh-automation)：新しいルート Agent と Session で独立タスクをスケジュール実行し、定義の改訂履歴、実行履歴、明示的なワークスペースと権限境界を保持。
- [dsh-plannotator](https://github.com/titanwings/dsh-plannotator)：Agent の計画をセクションごとに注釈し、構造化フィードバックを送信。下書き分離、バージョン固定、古い計画の拒否に対応。
- [dsh-record-replay](https://github.com/humblebanana/dsh-record-replay)：macOS デスクトップワークフローを記録して Skill を生成。現在は Xcode Command Line Tools と、別途用意した `open-record-replay` のローカルソースが必要。

### コンテキスト・Session・入力

- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor)：AGENTS.md、Skill ディレクトリ、ツール Schema のコンテキスト Token コストと競合を監査。
- [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve)：Session をまたぐ記憶、バックグラウンド進化、ブランチ認識機能。
- [dsh-noema](https://github.com/ZSeven-W/dsh-noema)：ローカル優先の Noema 長期記憶を DSH に接続し、作業前の想起、設定ページでの管理、Codex / Claude Code / Cursor などからの既存記憶インポートに対応。MIT、`0.1.0-rc.1`。DSH `0.1.0-rc.6` で検証済みだが新しいため初期段階。
- [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file)：入力欄の `@file` でワークスペース内のファイルを検索し、内容を添付。
- [dsh-message-edit](https://github.com/Moeblack/dsh-message-edit)：ブランチ型メッセージ編集、再試行、再生成、バージョンタイムライン。
- [dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio)：システムプロンプト断片を編集し、リアルタイムプレビューを表示。
- [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind)：永続的な Change Ledger に基づき、会話とワークスペース状態を巻き戻す。
- [dsh-compaction-instant](https://github.com/KitDoesIt/dsh-compaction-instant)：LLM 要約を決定論的コンパイルに置き換え、`recall` / `search` で圧縮された内容を復元。内蔵 compactor の置換には npm alias が必要で、Runtime への比較的深い変更となる。

### ブラウザ・ビジョン・インターフェース

- [dsh-browser](https://github.com/Lum1104/dsh-browser)：DSH から現在のブラウザページを直接操作できる Chrome サイドバー拡張。
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit)：画像 Q&A、長いスクリーンショットの OCR、UI 再現、Grounding、ピクセル比較。
- [dsh-computer-use](https://github.com/Anionex/dsh-computer-use)：Accessibility を優先し、古い観測を拒否し、アプリ・Session・操作単位で権限を管理するネイティブ macOS Computer Use Bundle。現在は初期 `0.1.0` で、ソースチェックアウトからインストールする必要がある。
- [modlens](https://github.com/liustack/modlens)：画像の貼り付けとモデルルーティングによってテキスト専用モデルに視覚能力を与える。ワークスペース画像を独立したビジョンツールで処理する方式とは異なる選択肢。
- [ModSearch](https://github.com/liustack/modsearch)：DSH に Web 検索、X 検索、ページ本文取得を追加し、構造化された根拠を返す。MIT、`v5.4.2`。検索経路によって外部 CLI、ログイン、API Key、Quota、各サービス規約への対応が必要。
- [dsh-better-browser](https://github.com/titanwings/dsh-better-browser)：外部 Kimi WebBridge を通じてログイン状態を保持した実ブラウザを操作し、タスクごとにタブ Session を管理。WebBridge は別途インストールして実行する必要がある。
- [dsh-web-review](https://github.com/CanglongCl/dsh-web-review)：DSH 内で Web ページをプレビューし、要素を選択して selector、アクセシブル名、変更意図を送信。実際のフロントエンド変更 Eval スイートを含むが、現在リポジトリにライセンス表記はない。
- [dsh-mcp-apps](https://github.com/sugarforever/dsh-mcp-apps)：DSH Web を MCP Apps Host にし、CSP と Permission Policy を備えた sandbox iframe で対話アプリを表示。MIT、`v0.1.1` だが新しいため初期段階。
- [dsh-genui](https://github.com/omdsh-dev/dsh-genui)：返信内にチャート、フォーム、Mermaid、3D Scene などを描画し、操作 Event をモデルへ返す。MIT、正式 Release はなく主に Git から導入するため初期段階。
- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar)：ファイル、ターミナル、Git、Subagent、サードパーティ Tab を統合するサイドバーワークベンチ。
- [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil)：DSH 内で OpenPencil デザインをプレビュー、編集。
- [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize)：会話ストリーム内にサンドボックス化されたインタラクティブ HTML カードを生成。
- [dsh-notification](https://github.com/omdsh-dev/dsh-notification)：タスク結果とキーワードに応じて設定できるデスクトップ通知。
- [dsh-share](https://github.com/hellodigua/dsh-share)：DSH の会話内容をワンクリックで生成・共有。

### サンドボックスと実行

- [sandbox-micro](https://github.com/omdsh-dev/sandbox-micro)：fail-closed な microsandbox microVM 能力を提供。導入後も Provider とモデル向け Tool は個別に明示有効化するまで無効で、プラットフォーム検査に失敗しても無制限の Host 実行へフォールバックしない。テストディレクトリはあるが正式 Release はなく、`package.json` は BSD-3-Clause を宣言する一方でルートに `LICENSE` ファイルがないため初期段階。

### テーマとスキン

- [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale)：DSH Web GUI 向けクジラ娘テーマ集。現在はホットプラグ対応の `maid-atelier` Web Client Bundle を含み、`dsh plugin --profile web add ...` でインストール・削除できる。ライセンスは **CC BY-NC-SA 4.0** で、商用利用は禁止。

## 外部連携

- [Ollama](https://github.com/ollama/ollama/blob/main/docs/integrations/deepseek-harness.mdx)：Ollama 公式が提供する起動方法であり、DeepSeek 公式の配布物ではない。`ollama launch dsh` で DSH の導入と起動、Ollama モデル選択、Web 検索設定を行う。独立設定は `~/.ollama/launch/dsh/settings.yaml` に保存され、`~/.dsh/settings.yaml` は変更しない。現在は Developer Preview と明記されている。
- [Sealos Skills](https://github.com/labring/sealos-skills)：Sealos チームが保守する DSH Profile Bundle。アプリのデプロイ、データベース、オブジェクトストレージなど、8 個のクラウドネイティブ Skill を提供。実際の利用では外部の Sealos Cloud リソースを変更するため、アカウントと関連認証情報が必要。ログイン時には `~/.sealos/kubeconfig` へ書き込み、一部のフローではサンドボックス権限の緩和が必要。`package.json` は MIT を宣言しているが、現在リポジトリのルートに `LICENSE` ファイルはない。
- [Nowledge Mem](https://mem.nowledge.co/integrations/deepseek-harness)：DSH に Working Memory、プロンプト時の検索、MCP ツール、Session キャプチャを追加。外部製品 Nowledge Mem と `nmem` CLI に依存するため、オープンソースプラグインとは分けて評価するのが適切。
- [Open Design](https://github.com/nexu-io/open-design)：構造化 Streaming、モデル検出、Cancel、Session 再開に対応する DSH ネイティブ Runtime Adapter を備えた Local-first のオープンソースデザインアプリ。Apache-2.0 で、通常のプラグインではなく大規模な独立製品。
- [dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime)：Multica と DSH を接続する初期段階の Runtime ブリッジ。現在パッケージは `private`、`UNLICENSED` とされ、インストールと配布の境界は未整備。
- [dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot)：ローカル DSH を Feishu / Lark に接続し、ストリーミングカード、ワークスペース、Session 復元、承認を提供。AGPL-3.0 で、アプリ認証情報はモード `600` で保護されたローカルの平文設定に保存される。
- [dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot)：Tencent が管理する QQ Bot プラグイン。QR Code 連携、Private/Group Session の分離、再起動後の復元に対応。MIT、`0.1.0` で、連携時に認証情報をローカル Profile へ保存する。

## 開発ツール

- [dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check)：Manifest、Patch、ビルド上の落とし穴、ディレクトリ掲載状況を検査。
- [dsh-fail-logger](https://github.com/Areium/dsh-fail-logger)：ツール失敗を秘匿化、重複排除、分類し、機械管理の Skill 記録へ蓄積。問題を記録するだけで、挙動を自動変更しない。
- [deepseek-harness-action](https://github.com/Lixiaoyiao/deepseek-harness-action)：GitHub Actions 上で DSH による PR Review、CI 診断、自動修正、Issue → PR を実行。書き込み権限はデフォルトで無効で、検証は認証情報を持たないコンテナで行う。
- [Awesome DSH Plugins Radar](https://github.com/AdamPlatin123/awesome-dsh-plugins)：発見、静的、Compile、Runtime の信号を分離して表示する自動互換性レーダー。MIT、データ変動が速く Release もなく、「Runtime で利用可能」は Security Audit や品質保証ではないため初期段階。
- [dsh-suite](https://whyihaveyou.github.io/dsh-suite/)：中国語・英語対応の DSH エコシステム索引。プラグイン検索、`create-dsh-plugin` スキャフォールダー、基本的な互換性メタデータを提供。まだ初期段階で、互換性検査は静的な依存関係比較が中心。インストールと設定組み立ての検証は未完成。
- [deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp)：他の Agent が MCP 経由で DSH プラグインを発見、検査、インストール、呼び出し可能にする。インストールと Runtime はデフォルトで無効で、`--allow-install` / `--allow-runtime` を明示的に有効化した場合のみ、それぞれの副作用が発生する。
- [dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture)：モデル API へ送信する Payload を取得・保存し、リクエスト組み立てのデバッグに利用。
- [dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool)：Monaco エディターでサンドボックス化された JavaScript ツールを作成・管理。
- [dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode)：Web UI から現在のワークスペースを VS Code で直接開く。
- [dsh-movein](https://github.com/sjh9714/dsh-movein)：1 コマンドで Claude Code の Skill、MCP、hooks、グローバル指示を DSH へ移行。デフォルトはドライラン。`CLAUDE.md` は DSH がネイティブに読み、Session 履歴は対象外。MIT。DSH `0.1.0-rc.6` で検証済みだが新しいため初期段階。

## 謝辞

DeepSeek Harness チーム、Cordis コミュニティ、初期クローズドベータ開発者、そして公開ドキュメント、プラグイン、クライアント、実践知、エコシステム索引に貢献してくださった皆さまに感謝します。

[![梁進化スライダー：現在の状態は梁聖。クリックして完全なインタラクティブ版を開く](assets/media/liang-intensity-calibrator-card-liangsheng-v2.png)](https://lichtspektrum.github.io/liang-intensity-calibrator/)
