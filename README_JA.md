<div>
  <p align="center">
    <img width="100%" alt="Awesome DeepSeek Harness — DSH エコシステムをつなぐ光るクジラ" src="assets/media/awesome-deepseek-harness-banner.png">
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
  - [クローズドベータ体験](#クローズドベータ体験)
  - [コミュニティでの議論](#コミュニティでの議論)
- [サードパーティクライアント](#サードパーティクライアント)
  - [デスクトップアプリとディストリビューション](#デスクトップアプリとディストリビューション)
  - [ターミナル・モバイル・Web 体験](#ターミナルモバイルweb-体験)
- [厳選プラグイン](#厳選プラグイン)
  - [ワークフローと Agent](#ワークフローと-agent)
  - [コンテキスト・Session・入力](#コンテキストsession入力)
  - [ブラウザ・ビジョン・インターフェース](#ブラウザビジョンインターフェース)
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
- [# dsh-plugin](https://github.com/topics/dsh-plugin)：GitHub 上の DSH プラグインプロジェクト
- [DeepSeek Discord](https://discord.gg/Ycq5dCaS4)：中国語を中心とする公式 Discord コミュニティ
- ["DeepSeek Harness"](https://x.com/search?q=%22DeepSeek%20Harness%22%20OR%20dsh-plugin&src=typed_query&f=live)：DSH に関する X のリアルタイム検索結果

中国語の DeepSeek Harness コミュニティにも参加できます。QR コードから WeCom アシスタントを追加し、参加フォームに回答すると、確認後にグループへ招待されます。

<table>
  <thead>
    <tr>
      <th align="center">WeCom アシスタント</th>
      <th align="center">参加フォーム</th>
      <th align="center">WeChat 公式アカウント</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><img src="https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/master/assets/community-wecom-assistant.png" alt="DeepSeek Harness WeCom アシスタントの QR コード" width="180" height="180"></td>
      <td align="center"><a href="https://trtgsjkv6r.feishu.cn/share/base/form/shrcnIt5twSVdLGD52KJBckGCgg"><img src="https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/master/assets/community-wecom-survey.png" alt="DeepSeek Harness コミュニティ参加フォームの QR コード" width="180" height="180"></a></td>
      <td align="center"><img src="https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/master/assets/community-wechat-official-account.png" alt="DeepSeek Harness チーム WeChat 公式アカウントの QR コード" width="180" height="180"></td>
    </tr>
  </tbody>
</table>

## コミュニティリソース

### 解説とチュートリアル

| ガイド | 形式 | 内容 |
| --- | --- | --- |
| [DeepSeek Harness を解剖する](https://xueai.app/slides/learn.html#dsh-1.html) | インタラクティブなソース解説 | Session、コンテキスト、ツール、サンドボックス、Code Mode、Subagent などの主要メカニズムを解説。一部はログインが必要 |
| [DeepSeek Harness ゼロから入門](https://yanhua1010.github.io/dsh-harness-tutorial/) | 中国語チュートリアルと Demo | 原理、ソース解説、8 個の Demo、`mini-harness` 学習プロジェクトを収録。`0.1.0-rc.6` ベース |

### クローズドベータ体験

以下の記事は、DSH のクローズドベータ参加者やプラグイン作者によるものです。公式ドキュメントでは扱われていないソースレベルの実践、プラグイン開発、初期コミュニティの体験を補完します。

| 記事 | WeChat アカウント | 一次情報と注目点 |
| --- | --- | --- |
| [Vibe Coding から Vibe Assembly へ：DeepSeek Harness 公式 Agent Loop を自作版に置き換えた](https://mp.weixin.qq.com/s?src=11&timestamp=1786637084&ver=6902&signature=AmuyYYqPuPbw5G2jpJYbyn32WfqGpqQ5LFXWFbkahd791Xoyf5AHdeO0xALhXn7HBVWBPHrcKBA1-73Hzux4HNsbi3QRok89GJsW7GadbXAn4MMl5xxa9D7BZYd98ISQ&new=1) | 自然膨胀 | 作者はベータ招待を受け、Agent Loop を置き換えるアセンブラーを開発したと説明。自己申告による 76 ラウンドの比較実験と Vibe Assembly に関する考察を含む。関連プロジェクト：[TT-Wang/sliceagent](https://github.com/TT-Wang/sliceagent) |
| [DeepSeek Harness クローズドベータ技術解説：アーキテクチャ、エコシステム、タスクエンジン、運用](https://mp.weixin.qq.com/s?src=11&timestamp=1786636586&ver=6902&signature=5qBFaqg8tUoHqeaARYXZXqQR7TIhm6-A8hTn1l89K7fBYg75lM9%2AgkvFwRsFlpuNZxkOLFMp3Pz5RC0FXAVb5kSFba2A1f6OHfmA3Eb08bNBQi330OvXQaffRB2FKNI%2A&new=1) | cookbook之杂七杂八 | 作者は 10 日以上にわたりベータ版スナップショットを追跡し、補助ツールを開発したと説明。Cordis イベント、Session Log、Surface、コンテキスト圧縮、永続化、運用を扱う。関連プロジェクト：[fakechris/dsh-track](https://github.com/fakechris/dsh-track) |
| [DeepSeek Harness は想像力を最も満たす Agent Harness かもしれない](https://mp.weixin.qq.com/s?src=11&timestamp=1786636558&ver=6902&signature=ea1xi1hCFVZn4aDcUyC1SuFiyIr7xADTcQK%2AM1YmlXj2ffHZ6-ensj06csdXXayjppWFX00kyH8C7vTtl9EOEyfXLnWFmffmcqMmFAfdi8NApznAvYLtb11iP8%2AHjpgE&new=1) | GTOC | 作者はベータ参加と Humanize の移植について説明。TUI と比べた Web UI のエコシステム価値、Plugin と Skill の違い、Trajectory タイムライン、プロダクト化の可能性を論じる。関連プロジェクト：[zevorn/dsh-humanize](https://github.com/zevorn/dsh-humanize) |
| [DSH クローズドベータに参加して感じたこと](https://mp.weixin.qq.com/s?src=11&timestamp=1786637135&ver=6902&signature=f2kUSJauxSlkVXP-gNNPIRTnOpnLFlErLe4br99jXqa5DQMhCDnbDWewbtAMfQ6VIMH0W6Ac95tZ4VyWhtAVyNZawkPrsAw5igtwqPl5lNxNl8Mhd9tbuMK3IW%2AAvojR&new=1) | 减AI | 作者はベータへの参加を明記し、[dsh-ads](https://github.com/Nagi-ovo/dsh-ads)、[dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize)、[dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) を公開。初期プラグイン作者がエコシステムをどう捉えていたかを知る資料として有用 |

### コミュニティでの議論

公式資料で触れられていない背景や実践の詳細を補う、十分な論述、実践情報、一次的な背景を含む公開長文投稿です。

| 投稿 | 作者と背景 | 概要 |
| --- | --- | --- |
| [初期参加者の視点から DSH を理解する](https://x.com/jiayuan_jy/status/2087911060154314963) | [Jiayuan (JY) Zhang](https://x.com/jiayuan_jy) · 2026-08-13。作者は 1 か月早くリポジトリに参加したと説明 | DSH を、実際に動作する Coding Agent と Agent 開発フレームワークの両方として捉える。「LEGO の車」で Everything is a Plugin を説明し、Runtime の自己拡張、自己進化ソフトウェアの原型、現在の成熟度、関数型プログラミング的な特徴を論じる |
| [Agent Runtime / Agent OS の視点から DSH を理解する](https://x.com/anion_ex/status/2087910193783025853) | [Anionex](https://x.com/anion_ex) · 2026-08-13。クローズドベータ参加者、プラグイン作者 | モデル、ツール、ポリシー、ストレージ、コンテキスト、インターフェース、Loop の合成可能性から DSH を説明し、Agent による Runtime の限定的な観測と制御された自己拡張を論じる |

## サードパーティクライアント

以下のプロジェクトは、単一ツールの機能ではなく、独立した UI、配布形態、またはプロダクト化された構成を提供します。

> **分類について：** ディストリビューションや Fork は、完全な DSH Runtime を直接再利用、変更、再パッケージ化するため、`dsh plugin` ではインストールできず、プラグインには分類されません。独立クライアントは Web、RPC、ACP、または専用ブリッジプラグインを通じて DSH に接続します。いずれも Harness エコシステムの重要な構成要素です。

### デスクトップアプリとディストリビューション

| プロジェクト | プラットフォーム／形態 | 説明 |
| --- | --- | --- |
| [TinyWhale](https://github.com/aimierbear/TinyWhale) | macOS · Electron · ディストリビューション Fork | `deepseek-ai/deepseek-harness` を直接 Fork して独立デスクトップシェルを追加。既存 Web UI に接続するか、完全な `dsh web` Runtime を起動するため、プラグインではない |
| [Oh-DSH-Desktop](https://github.com/hust-open-atom-club/oh-dsh-desktop) | macOS · Electron | DSH Runtime、Node.js、PTY、ワークスペースツール、プラグインマーケットのプレビューを同梱した拡張可能なワークベンチ |
| [DSH Desktop](https://github.com/dataelement/dsh-desktop) | macOS / Windows · Electron | ローカル Harness、ワークスペース、ランダムポート、Profile、プラグイン、Session を管理するクロスプラットフォームデスクトップクライアント |
| [dsh-launcher](https://github.com/Ruler4396/dsh-launcher) | Windows · WebView2 | サイレント起動、独立ウィンドウ、ポータブルパッケージ、MSI を提供する軽量ランチャー |

### ターミナル・モバイル・Web 体験

| プロジェクト | 種類 | 説明 |
| --- | --- | --- |
| [dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) | TUI Bundle | Claude Code 風の全画面ターミナル、ストリーミング状態、コンテキスト計器、Session のロールバック |
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
- [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file)：入力欄の `@file` でワークスペース内のファイルを検索し、内容を添付。
- [dsh-message-edit](https://github.com/Moeblack/dsh-message-edit)：ブランチ型メッセージ編集、再試行、再生成、バージョンタイムライン。
- [dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio)：システムプロンプト断片を編集し、リアルタイムプレビューを表示。
- [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind)：永続的な Change Ledger に基づき、会話とワークスペース状態を巻き戻す。

### ブラウザ・ビジョン・インターフェース

- [dsh-browser](https://github.com/Lum1104/dsh-browser)：DSH から現在のブラウザページを直接操作できる Chrome サイドバー拡張。
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit)：画像 Q&A、長いスクリーンショットの OCR、UI 再現、Grounding、ピクセル比較。
- [dsh-computer-use](https://github.com/Anionex/dsh-computer-use)：Accessibility を優先し、古い観測を拒否し、アプリ・Session・操作単位で権限を管理するネイティブ macOS Computer Use Bundle。現在は初期 `0.1.0` で、ソースチェックアウトからインストールする必要がある。
- [modlens](https://github.com/liustack/modlens)：画像の貼り付けとモデルルーティングによってテキスト専用モデルに視覚能力を与える。ワークスペース画像を独立したビジョンツールで処理する方式とは異なる選択肢。
- [dsh-better-browser](https://github.com/titanwings/dsh-better-browser)：外部 Kimi WebBridge を通じてログイン状態を保持した実ブラウザを操作し、タスクごとにタブ Session を管理。WebBridge は別途インストールして実行する必要がある。
- [dsh-web-review](https://github.com/CanglongCl/dsh-web-review)：DSH 内で Web ページをプレビューし、要素を選択して selector、アクセシブル名、変更意図を送信。実際のフロントエンド変更 Eval スイートを含むが、現在リポジトリにライセンス表記はない。
- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar)：ファイル、ターミナル、Git、Subagent、サードパーティ Tab を統合するサイドバーワークベンチ。
- [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil)：DSH 内で OpenPencil デザインをプレビュー、編集。
- [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize)：会話ストリーム内にサンドボックス化されたインタラクティブ HTML カードを生成。
- [dsh-notification](https://github.com/omdsh-dev/dsh-notification)：タスク結果とキーワードに応じて設定できるデスクトップ通知。
- [dsh-share](https://github.com/hellodigua/dsh-share)：DSH の会話内容をワンクリックで生成・共有。

### テーマとスキン

- [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale)：DSH Web GUI 向けクジラ娘テーマ集。現在はホットプラグ対応の `maid-atelier` Web Client Bundle を含み、`dsh plugin --profile web add ...` でインストール・削除できる。ライセンスは **CC BY-NC-SA 4.0** で、商用利用は禁止。

## 外部連携

- [Nowledge Mem](https://mem.nowledge.co/integrations/deepseek-harness)：DSH に Working Memory、プロンプト時の検索、MCP ツール、Session キャプチャを追加。外部製品 Nowledge Mem と `nmem` CLI に依存するため、オープンソースプラグインとは分けて評価するのが適切。
- [dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime)：Multica と DSH を接続する初期段階の Runtime ブリッジ。現在パッケージは `private`、`UNLICENSED` とされ、インストールと配布の境界は未整備。

## 開発ツール

- [dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check)：Manifest、Patch、ビルド上の落とし穴、ディレクトリ掲載状況を検査。
- [dsh-suite](https://whyihaveyou.github.io/dsh-suite/)：中国語・英語対応の DSH エコシステム索引。プラグイン検索、`create-dsh-plugin` スキャフォールダー、基本的な互換性メタデータを提供。まだ初期段階で、互換性検査は静的な依存関係比較が中心。インストールと設定組み立ての検証は未完成。
- [deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp)：他の Agent が MCP 経由で DSH プラグインを発見、検査、インストール、呼び出し可能にする。インストールと Runtime はデフォルトで無効で、`--allow-install` / `--allow-runtime` を明示的に有効化した場合のみ、それぞれの副作用が発生する。
- [dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture)：モデル API へ送信する Payload を取得・保存し、リクエスト組み立てのデバッグに利用。
- [dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool)：Monaco エディターでサンドボックス化された JavaScript ツールを作成・管理。
- [dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode)：Web UI から現在のワークスペースを VS Code で直接開く。

## 謝辞

DeepSeek Harness チーム、Cordis コミュニティ、初期クローズドベータ開発者、そして公開ドキュメント、プラグイン、クライアント、実践知、エコシステム索引に貢献してくださった皆さまに感謝します。

[![梁進化スライダー：現在の状態は梁聖。クリックして完全なインタラクティブ版を開く](assets/media/liang-intensity-calibrator-card-liangsheng-v2.png)](https://lichtspektrum.github.io/liang-intensity-calibrator/)
