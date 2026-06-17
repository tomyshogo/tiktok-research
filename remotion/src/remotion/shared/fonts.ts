// CapCutの「システム」フォント（Apple端末）＝ヒラギノ角ゴシック本体で完全一致。
// 参考動画は中字＋細フチ＝W6相当。W8(最太)は太すぎたのでW6に変更。
export const systemFamily =
  '"Hiragino Sans W6", "ヒラギノ角ゴシック W6", "Hiragino Sans", "ヒラギノ角ゴシック", sans-serif';

// 後方互換（過去の参照名）
export const roundedFamily = systemFamily;
export const maruFamily = systemFamily;

// 参考動画のテロップ：白文字＋細め黒フチ＋ソフト影（丸ゴシック）。
export const outlinedText = (opts: {
  fontFamily: string;
  fontSize: number;
  color?: string;
  stroke?: number;
}): React.CSSProperties => ({
  fontFamily: opts.fontFamily,
  fontSize: opts.fontSize,
  // ウェイトはW6家名で決まるため faux-bold を避けて normal にする
  fontWeight: "normal",
  color: opts.color ?? "#ffffff",
  WebkitTextStroke: `${opts.stroke ?? 3.5}px #161616`,
  paintOrder: "stroke",
  // 影なし（にじみで丸く柔らかく見えるのを防ぎ、シャープに）
  textShadow: "none",
  lineHeight: 1.34,
});
