import React from "react";
import {
  AbsoluteFill,
  Sequence,
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { Chunk } from "./captions";
import { outlinedText } from "./fonts";

// 参考動画（hinana_tuki本人の伸び投稿）の編集を踏襲：
// 「テロップが変わるたびにB-rollを1カット切り替える」＝1チャンク=1カット。
// テロップは白＋細め黒フチ・角ゴ・画面中央・短い口語＋絵文字。
// 暗いフィルタ（オーバーレイ/ビネット）なし・テキストのフェードなし。

const BrollCut: React.FC<{ src: string; durationInFrames: number }> = ({
  src,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  // カット頭で軽く寄る（参考動画のテンポ）
  const scale = interpolate(frame, [0, Math.min(14, durationInFrames)], [1.06, 1.0], {
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ backgroundColor: "#000", overflow: "hidden" }}>
      <OffthreadVideo
        src={staticFile(`broll/${src}.mp4`)}
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale})`,
        }}
      />
    </AbsoluteFill>
  );
};

const ChunkText: React.FC<{
  chunk: Chunk;
  color: string;
  hlColor: string;
  fontSize: number;
  fontFamily: string;
}> = ({ chunk, color, hlColor, fontSize, fontFamily }) => {
  const lines = chunk.text.split("\n");
  return (
    <AbsoluteFill
      style={{ justifyContent: "center", alignItems: "center", padding: "0 90px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          textAlign: "center",
        }}
      >
        {lines.map((l, i) => (
          <div
            key={i}
            style={outlinedText({
              fontFamily,
              fontSize,
              color: chunk.hl ? hlColor : color,
              stroke: 3.5,
            })}
          >
            {l}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// チャンク列を、1チャンク=1B-rollカットで流す（参考動画の編集）。
export const ChunkScene: React.FC<{
  chunks: Chunk[];
  pool: string[];
  fontFamily: string;
  fontSize?: number;
  color?: string;
  hlColor?: string;
  overlay?: number;
  startIndex?: number;
  grainOpacity?: number;
}> = ({
  chunks,
  pool,
  fontFamily,
  fontSize = 60,
  color = "#fff",
  hlColor = "#ffffff", // 強調も含め全テキスト白で統一
  startIndex = 0,
}) => {
  let acc = 0;
  return (
    <AbsoluteFill>
      {chunks.map((c, i) => {
        const from = acc;
        acc += c.frames;
        const src = c.broll ?? pool[(startIndex + i) % pool.length];
        return (
          <Sequence key={i} from={from} durationInFrames={c.frames}>
            <BrollCut src={src} durationInFrames={c.frames} />
            <ChunkText
              chunk={c}
              color={color}
              hlColor={hlColor}
              fontSize={fontSize}
              fontFamily={fontFamily}
            />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
