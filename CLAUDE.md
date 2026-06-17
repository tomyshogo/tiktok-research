# このリポジトリについて
TikTokアフィリの準備フェーズ（リサーチ〜台本下書き）を自動化する基盤。
複数アカウントを accounts/<account>/ で管理し、各アカウントの準備を半自動で回す。

## 絶対ルール
- ログは必ず accounts/<account>/logs/<YYYY-MM-DD>/ に置く
- Threadsはログイン済みChromeで「見える範囲を読む」のみ。スクレイピング・CAPTCHA回避はしない
- 投稿・送信・課金など外部に影響する操作は絶対に自動実行せず、人に確認する
- 人が握る判断（工程1の目利き・工程2の解釈・工程4の接続点）は埋めず、候補提示に留める
- 実績の捏造・誇大訴求・ステマ的誘導文は生成しない

## 媒体の使い分け（取り違え厳禁）
- 悩みの収集　→ Threads
- 競合の構成・流行り → TikTok

## 工程の定義と対象媒体
1 候補アカウント発見【TikTok】 = /discover
2 伸びた理由の解剖【TikTok】   = /analyze
3 悩み収集【Threads】          = /research
4 悩み×案件マッチング（4a メリット抽出 = /offer、接続は人が確定）
5 流行り構成の観測【TikTok】   = /trend
6 台本化                        = /script
横断サマリ                      = /summary

## ファイル命名規約（logs/<日付>/ 配下）
00_candidates / 01_threads_raw / 02_pain_points / 03_competitor /
04a_offer_merits / 04_matching / 05_script_draft / meta.json

## 新規アカウント追加手順
accounts/_template を accounts/<新handle>/ にコピーし、profile.md を埋めるだけ。
スキルは全アカ共通なので増設不要。
