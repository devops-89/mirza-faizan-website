"use client";

import React, { Fragment, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { Typography, TypographyProps } from "@mui/material";

const START_OPACITY = 0.3;
const SPREAD = 0.88;
const WORD_DURATION = 0.15;

export interface WordProgressRange {
  start: number;
  end: number;
}

function getWordProgressRange(index: number, count: number): WordProgressRange {
  const start = count <= 1 ? 0 : (index / (count - 1)) * SPREAD;
  return {
    start,
    end: Math.min(1, start + WORD_DURATION),
  };
}

function getWordOpacity(
  progress: number,
  { start, end }: WordProgressRange,
  startOpacity = START_OPACITY
): number {
  if (progress <= start) return startOpacity;
  if (progress >= end) return 1;

  const wordProgress = (progress - start) / (end - start);
  return startOpacity + (1 - startOpacity) * wordProgress;
}

function Word({
  children,
  progress,
  index,
  count,
  reducedMotion,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  count: number;
  reducedMotion: boolean;
}) {
  const range = getWordProgressRange(index, count);
  const opacity = useTransform(progress, (latest) => getWordOpacity(latest, range));

  return (
    <motion.span
      style={
        reducedMotion
          ? undefined
          : {
              opacity,
              display: "inline-block",
              transition: "color 0.2s ease",
            }
      }
    >
      {children}
    </motion.span>
  );
}

interface ScrollWordRevealProps extends TypographyProps {
  text: string;
}

export const ScrollWordReveal: React.FC<ScrollWordRevealProps> = ({
  text,
  sx,
  ...typographyProps
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 25%"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} style={{ display: "inline" }}>
      <Typography sx={sx} {...typographyProps}>
        {words.map((word, i) => (
          <Fragment key={i}>
            <Word
              progress={scrollYProgress}
              index={i}
              count={words.length}
              reducedMotion={reducedMotion}
            >
              {word}
            </Word>
            {i < words.length - 1 && " "}
          </Fragment>
        ))}
      </Typography>
    </div>
  );
};

export default ScrollWordReveal;
