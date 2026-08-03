"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
  className,
  style,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  // Extract numeric and non-numeric parts (e.g. "17+" -> number: 17, suffix: "+", or "150+" -> 150, "+")
  const numericMatch = value.match(/\d+/);
  const targetNum = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const prefix = numericMatch ? value.substring(0, numericMatch.index) : "";
  const suffix = numericMatch ? value.substring(numericMatch.index! + numericMatch[0].length) : value;

  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!isInView || targetNum === 0) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out quad formula
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.floor(easedProgress * targetNum);

      setDisplayCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayCount(targetNum);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, targetNum, duration]);

  if (!numericMatch) {
    return <span className={className} style={style}>{value}</span>;
  }

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {isInView ? displayCount : 0}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
