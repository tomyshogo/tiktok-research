import { Chunk } from "../shared/captions";

// yuzuha_90（★28卒・大学3年/サマーインターン期）2026-06-17台本①〈主軸〉をチャンク化。
// 角度: 出遅れ・何から始めればいい・スペック思い込み → 一歩目を軽く（無料の適性検査だけ）。
// 編集は参考動画準拠＝全編B-roll＋中央テロップ・1テロップ1カット・絵文字。
// ⚠️NG: 煽らない・焦らせない・「手遅れ」「甘え」と言わない。サービス名は出さない。顔なしB-rollのみ。

export const FPS = 30;

export const CHUNKS: Chunk[] = [
  { text: "就活、何から始めればいいか\n分からなくて止まってる28卒、\nいますか？", frames: 86, broll: "broll-8" },
  { text: "出遅れたって、\nまだ全然間に合うよ🌱", hl: true, frames: 64, broll: "broll-2" },
  { text: "私もそう。\n何から手をつければいいか\n分からなくて、止まってた", frames: 90, broll: "broll-4" },
  { text: "スペックない自分が動いても\n無駄な気がして…", frames: 76, broll: "broll-5" },
  { text: "でも動けないの、\n能力でも出遅れでもなかった", frames: 70, broll: "broll-2" },
  { text: "“最初の一歩が重すぎる”＋\n“すごい経験ないと通らない”\nって思い込みだけ⚠️", hl: true, frames: 96, broll: "broll-8" },
  { text: "本当はスペックじゃなく\n相性で見てもらえる", frames: 70, broll: "broll-3" },
  { text: "だから一歩目を軽くした。", frames: 56, broll: "broll-4" },
  { text: "まず無料の適性検査で\n“向いてる方向”だけ知る", hl: true, frames: 84, broll: "broll-5" },
  { text: "プロフや動画を置けば、\n向こうから声もかかる", frames: 80, broll: "broll-5" },
  { text: "完璧な準備から\n始めなくてよかった", frames: 64, broll: "broll-7" },
  { text: "方向が見えたら、\n止まってた就活が動き出した✨", hl: true, frames: 78, broll: "broll-7" },
  { text: "何から始めればいいか\n分からない人へ", frames: 58, broll: "broll-2" },
  { text: "プロフから無料で\n適性検査だけでも👇", hl: true, frames: 64, broll: "broll-8" },
  { text: "一歩目は、それで十分。", frames: 56, broll: "broll-2" },
];

export const POOL = ["broll-8", "broll-4", "broll-5", "broll-2", "broll-7"];

export const HASHTAGS = "#28卒 #28卒就活 #サマーインターン #就活 #28卒と繋がりたい";
