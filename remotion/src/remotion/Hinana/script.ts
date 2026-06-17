import { Chunk } from "../shared/captions";

// hinana_tuki（第二新卒IT転職）2026-06-17台本をチャンク化。
// 編集は参考動画（hinana_tuki本人の伸び投稿）準拠＝全編B-roll＋中央テロップ・1テロップ1カット・絵文字。
// 顔なしB-rollのみ使用（broll-6/9/10は人物・顔のため不使用）。

export const FPS = 30;

// 各チャンク＝1カット（背景B-rollを切り替え）。frames=表示尺。
export const CHUNKS: Chunk[] = [
  { text: "転職また繰り返しちゃう人、\nいますか？", frames: 70, broll: "broll-8" },
  { text: "それ、\n忍耐力がないからじゃない📝", hl: true, frames: 62, broll: "broll-8" },
  { text: "私もそう。合わなくて辞めて、\n焦って次決めて…", frames: 80, broll: "broll-5" },
  { text: "また続かなくて…\nそれを一人で繰り返してた", frames: 74, broll: "broll-4" },
  { text: "でも続かないの、\n性格のせいじゃなかった", frames: 64, broll: "broll-2" },
  { text: "求人は見てるのに\n“合う条件”を整理せず⚠️", frames: 76, broll: "broll-5" },
  { text: "勢いで応募してただけ", frames: 56, broll: "broll-4" },
  { text: "❌続かない人\n一人で焦って選ぶ／勢いで応募", frames: 82, broll: "broll-1" },
  { text: "⭕️続く人\n合う条件を先に整理／相談して選ぶ", hl: true, frames: 90, broll: "broll-7" },
  { text: "私は“続く人”側に回るために", frames: 58, broll: "broll-8" },
  { text: "進め方から一緒に見てくれる\n無料の相談先に頼った", hl: true, frames: 92, broll: "broll-5" },
  { text: "勢いと我慢の二択が、\n消えた", frames: 60, broll: "broll-2" },
  { text: "“続けられそう”と思える\n所に進めた✨", hl: true, frames: 70, broll: "broll-7" },
  { text: "繰り返してたのが嘘みたい", frames: 56, broll: "broll-3" },
  { text: "同じく繰り返してる人へ", frames: 52, broll: "broll-8" },
  { text: "プロフから無料で\nまず相談だけでも👇", hl: true, frames: 66, broll: "broll-4" },
];

// 未指定チャンク用フォールバック
export const POOL = ["broll-8", "broll-4", "broll-5", "broll-2", "broll-7"];

export const HASHTAGS = "#未経験転職 #第二新卒 #20代転職 #転職 #IT事務";
