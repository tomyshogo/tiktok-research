import React from "react";
import { AbsoluteFill, random } from "remotion";

// 顔出しなし系の質感づけ。軽いフィルムグレイン。
export const Grain: React.FC<{ opacity?: number }> = ({ opacity = 0.06 }) => {
  const dots = Array.from({ length: 80 });
  return (
    <AbsoluteFill style={{ opacity, pointerEvents: "none" }}>
      {dots.map((_, i) => {
        const x = random(`gx${i}`) * 1080;
        const y = random(`gy${i}`) * 1920;
        const s = random(`gs${i}`) * 3 + 1;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: s,
              height: s,
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// 上下ビネット（テロップ可読性UP）。
export const Vignette: React.FC<{ strength?: number }> = ({ strength = 0.5 }) => (
  <AbsoluteFill
    style={{
      background: `linear-gradient(180deg, rgba(0,0,0,${strength}) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 62%, rgba(0,0,0,${strength}) 100%)`,
    }}
  />
);
