import React from "react";
import { ChunkScene } from "../shared/ChunkScene";
import { maruFamily } from "../shared/fonts";
import { CHUNKS, POOL } from "./script";

// yuzuha_90（28卒）：全編B-roll＋中央テロップ。フォント=Zen Maru Gothic（柔らかめ）。
export const YuzuhaVideo: React.FC = () => (
  <ChunkScene
    chunks={CHUNKS}
    pool={POOL}
    fontFamily={maruFamily}
    fontSize={56}
    overlay={0.5}
  />
);
