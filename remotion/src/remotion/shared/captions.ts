export type Chunk = {
  text: string; // \n で改行可
  hl?: boolean; // 強調色（黄）
  frames: number; // 表示フレーム数
  broll?: string; // 背景B-roll名（未指定ならpoolから巡回）
};

export const sumFrames = (chunks: Chunk[]) =>
  chunks.reduce((a, c) => a + c.frames, 0);
