import React from "react";
import { ChunkScene } from "../shared/ChunkScene";
import { roundedFamily } from "../shared/fonts";
import { CHUNKS, POOL } from "./script";

// hinana_tuki：全編B-roll＋中央テロップ（参考動画の編集）。フォント=M PLUS Rounded 1c。
export const HinanaVideo: React.FC = () => (
  <ChunkScene
    chunks={CHUNKS}
    pool={POOL}
    fontFamily={roundedFamily}
    fontSize={62}
    overlay={0.46}
  />
);
