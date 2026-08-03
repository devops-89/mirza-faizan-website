"use client";

import React, { useState, useEffect } from "react";
import { Typography, TypographyProps } from "@mui/material";

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  typographyProps?: TypographyProps;
  sx?: any;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseDuration = 2400,
  typographyProps,
  sx,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const currentFullText = texts[textIndex % texts.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentFullText.length) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Hold full text before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        // Move to next string after deletion
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  const displayedText = texts[textIndex % texts.length].substring(0, charIndex);

  return (
    <Typography
      {...typographyProps}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "flex-end",
        minHeight: { xs: "28px", sm: "32px", md: "36px" },
        ...sx,
      }}
    >
      <span>{displayedText}</span>
      <span
        style={{
          display: "inline-block",
          width: "2.5px",
          height: "1.15em",
          backgroundColor: "#E5D1B8",
          marginLeft: "4px",
          borderRadius: "1px",
          animation: "typewriter-blink 0.85s step-end infinite",
        }}
      />
      <style>{`
        @keyframes typewriter-blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Typography>
  );
};

export default TypewriterText;
