import React from "react";
import { Composition } from "remotion";
import { HinanaVideo } from "./remotion/Hinana/HinanaVideo";
import { CHUNKS as HINANA_CHUNKS, FPS as HINANA_FPS } from "./remotion/Hinana/script";
import { YuzuhaVideo } from "./remotion/Yuzuha/YuzuhaVideo";
import { CHUNKS as YUZUHA_CHUNKS, FPS as YUZUHA_FPS } from "./remotion/Yuzuha/script";
import { sumFrames } from "./remotion/shared/captions";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HinanaTuki"
        component={HinanaVideo}
        durationInFrames={sumFrames(HINANA_CHUNKS)}
        fps={HINANA_FPS}
        width={1080}
        height={1920}
      />
      <Composition
        id="Yuzuha90"
        component={YuzuhaVideo}
        durationInFrames={sumFrames(YUZUHA_CHUNKS)}
        fps={YUZUHA_FPS}
        width={1080}
        height={1920}
      />
    </>
  );
};
