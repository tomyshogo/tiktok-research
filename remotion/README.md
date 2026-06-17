# remotion — TikTok動画生成（tiktok-research台本→動画）

tiktok-research の台本（`accounts/<account>/logs/<日付>/05_script_draft*.md`）を、縦型TikTok動画（1080×1920・30fps）に変換するRemotionプロジェクト。

## コンポジション
- `HinanaTuki` … hinana_tuki（第二新卒IT転職）
- `Yuzuha90` … yuzuha_90（28卒就活）

各台本は `src/remotion/<Account>/script.ts` にチャンク（1テロップ=1カット）として定義。

## 制作ルール（厳守）
1テロップ=1カットでB-rollを切替／フォント=ヒラギノ角ゴ W6（CapCut「システム」相当）／黒フチ細め・**影なし**／文字は**全部白**／**暗いフィルタ・フェードなし**／改行は自然な文節で／**顔出しなし素材のみ**／サービス名は動画内に出さない。

## セットアップ
```bash
npm install
# B-roll素材を public/broll/ に broll-1.mp4 … として配置（顔が映るものは使わない）
npm run studio     # プレビュー
npm run render -- HinanaTuki out/hinana.mp4
npm run render -- Yuzuha90  out/yuzuha.mp4
```

## 注意
- フォントはこのMacにOSインストール済みのヒラギノを直接参照。別環境で焼く場合はフォント同梱方式が必要。
- `node_modules/` `out/`（書き出し）`public/broll/`（競合参考B-roll）は .gitignore でコミット対象外。
