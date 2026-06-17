---
name: offer
description: 工程4a。案件LP・条件から強み/訴求点を抽出し、各メリットが解きうる悩みの仮説タグを付ける。/offer <account> で起動。
---
# /offer <account> — 案件メリット抽出

## 対象
案件LP・条件（悩みと繋ぐ前の素材づくり）

## やること
1. `accounts/<account>/profile.md` の案件LP URL・条件を読む
2. この案件の強み・訴求点・他社との差を箇条書きで列挙
3. 各メリットに「どんな悩みを解きうるか」の仮説タグを付ける
4. `accounts/<account>/logs/<今日の日付>/04a_offer_merits.md` に保存

## 出力フォーマット
| メリット | 内容 | 解きうる悩み（仮説タグ） |

## 人の判断ポイント
列挙メリットの取捨選択。誇大・虚偽の訴求は除外（CLAUDE.mdのルール準拠）。
