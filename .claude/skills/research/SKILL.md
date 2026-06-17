---
name: research
description: 工程3。Threadsに絞ってターゲットの深い悩みを収集し、表層と本音の2層で言語化する。/research <account> で起動。
---
# /research <account> — Threads悩みリサーチ

## 対象媒体
Threads（悩みの収集のみ。競合構成はここでは扱わない）

## やること
1. `accounts/<account>/profile.md` のThreads検索クエリ群を読む
2. サブエージェント `threads-collector` を起動し、Claude in Chrome でThreadsを開く
3. 各クエリで検索画面を開き、表示中の投稿本文を取得（見える範囲をスクロールしながら上位N件）
4. 案件・ジャンルに関係する「本音の悩み」だけをフィルタ
5. 原文を `accounts/<account>/logs/<今日の日付>/01_threads_raw.md` に保存
6. 表層の悩みと、その奥にある本音の2層に要約し `02_pain_points.md` に出力
7. `meta.json` に使用クエリ・取得件数・日時を記録

## 出力フォーマット（02_pain_points.md）
- 表層の悩み（例：転職したい）
- その奥にある本音（例：今の自分を否定されたくない）
- 根拠となった原文の引用（短く）

## 人の判断ポイント
「本音」の言語化が的を射ているかを確認・微修正。

## 禁止
- スクレイピング・CAPTCHA回避・非公開データ取得はしない
- ログイン済みセッションで見える範囲を読むのみ。CAPTCHA等が出たら停止して通知
