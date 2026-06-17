---
name: analyze
description: 工程2。指定したTikTok競合投稿を解剖し、フック・構成・CTA・リンク種別・コメント頻出ワードを分析、参考URLを記録する。/analyze <account> で起動。
---
# /analyze <account> — 競合TikTok投稿の解剖

## 対象媒体
TikTok（深掘り型。URL指定の個別投稿）

## 入口
`00_candidates.md`（/discoverの出力）または profile.md の参考アカウント／伸び投稿URL

## やること
1. サブエージェント `competitor-scanner` で Claude in Chrome を使い TikTok を開く
2. 候補／参考投稿URLを開く
3. 冒頭フック・構成の順序・CTA・概要欄やプロフのリンク種別を分解
4. コメント欄を読み、視聴者が刺さったポイント・頻出ワードを集計（消費者の言葉を拾う）
5. 複数投稿の構成を重ねて共通パターン（＝勝ち型）を抽出
6. 分解結果・頻出ワード・参考にした投稿URL一覧を
   `accounts/<account>/logs/<今日の日付>/03_competitor.md` に保存

## 出力に必ず含める
- フック例 / 構成の順序 / CTAの型
- 貼っているリンクの種別
- コメント頻出ワード（集計）
- 参考投稿URL一覧（似た投稿が手元に残る）

## 人の判断ポイント
「なぜ伸びたか」の本質解釈、参考アカウントの最終的な目利き。
