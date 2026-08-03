"use client";

import React, { useId } from "react";

interface BorderBeamProps {
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  beamLength?: number; // Percentage of card perimeter (e.g. 25-40%)
  rx?: number | string;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  duration = 6,
  borderWidth = 1.5,
  colorFrom = "#D4BFA8",
  colorTo = "#846A4E",
  delay = 0,
  beamLength = 30,
  rx = 16,
}) => {
  const id = useId().replace(/:/g, "");
  const gradientId = `beam-grad-${id}`;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        pointerEvents: "none",
        zIndex: 3,
        overflow: "hidden",
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorFrom} stopOpacity="1" />
            <stop offset="50%" stopColor={colorTo} stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Animated glowing border stroke */}
        <rect
          x="0.75"
          y="0.75"
          width="calc(100% - 1.5px)"
          height="calc(100% - 1.5px)"
          rx={rx}
          ry={rx}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={borderWidth}
          pathLength="100"
          strokeDasharray={`${beamLength} ${100 - beamLength}`}
          style={{
            animation: `border-beam-spin-${id} ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
          }}
        />
      </svg>
      <style>{`
        @keyframes border-beam-spin-${id} {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BorderBeam;
