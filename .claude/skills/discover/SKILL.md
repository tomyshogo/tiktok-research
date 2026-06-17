---
name: discover
description: 工程1。TikTokで同ジャンルの「型が取れている＝再現性の高い」候補アカウントを発見し、参考投稿URLとともに候補リストを出す。/discover <account> で起動。
---
# /discover <account> — 候補アカウント発見（TikTok）

## 対象媒体
TikTok（Threadsではない）

## やること
1. `accounts/<account>/profile.md` のジャンルから検索語を組み立てる
2. サブエージェント `competitor-scanner` を起動し、Claude in Chrome でTikTokを開く
3. ジャンル関連ハッシュタグ・キーワードで直近伸びている投稿の発信者を収集
4. 各候補の直近約20投稿を確認し、フォーマットが固定化＝再現性が高いかを ○/△/× で判定
5. 候補アカウント名・代表的な伸び投稿URL・判定理由を
   `accounts/<account>/logs/<今日の日付>/00_candidates.md` に保存
6. `meta.json` に使用検索語・候補件数・日時を記録

## 出力フォーマット（00_candidates.md）
| 候補アカウント | 代表投稿URL | 型の固定度(○/△/×) | 判定理由 |

## 人の判断ポイント
どの候補を実際に参考にするかの最終目利きは人が行う。スキルは候補提示まで。

## 禁止
- 大量自動スクロール・非公開データ取得・CAPTCHA回避はしない
- CAPTCHA等が出たら停止して人に通知
