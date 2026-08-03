"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none" | "scale";
  duration?: number;
  delay?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
  width?: "fit-content" | "100%";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  duration = 0.6,
  delay = 0,
  distance = 30,
  once = true,
  className,
  style,
  width = "100%",
}) => {
  const getVariants = (): Variants => {
    let initialX = 0;
    let initialY = 0;
    let initialScale = 1;

    switch (direction) {
      case "up":
        initialY = distance;
        break;
      case "down":
        initialY = -distance;
        break;
      case "left":
        initialX = distance;
        break;
      case "right":
        initialX = -distance;
        break;
      case "scale":
        initialScale = 0.9;
        break;
      case "none":
        break;
    }

    return {
      hidden: {
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: initialScale,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1] as const, // Smooth cubic-bezier
        },
      },
    };
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      className={className}
      style={{ width, ...style }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delay?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  delay = 0,
  once = true,
  className,
  style,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      className={className}
      style={{ width: "100%", ...style }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale";
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, direction = "up", distance = 25, className, style }) => {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      scale: direction === "scale" ? 0.92 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} style={style}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
