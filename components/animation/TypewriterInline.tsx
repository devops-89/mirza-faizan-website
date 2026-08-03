"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

interface TypewriterInlineProps {
  prefixTitles?: string[];
  suffixes: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const TypewriterInline: React.FC<TypewriterInlineProps> = ({
  prefixTitles = ["Aerospace Scientist", "Inventor"],
  suffixes,
  typingSpeed = 50,
  deletingSpeed = 22,
  pauseDuration = 2400,
}) => {
  const [suffixIndex, setSuffixIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!suffixes || suffixes.length === 0) return;

    const currentFullText = suffixes[suffixIndex % suffixes.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentFullText.length) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
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
        setIsDeleting(false);
        setSuffixIndex((prev) => (prev + 1) % suffixes.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, suffixIndex, suffixes, typingSpeed, deletingSpeed, pauseDuration]);

  const currentTypedSuffix = suffixes[suffixIndex % suffixes.length].substring(0, charIndex);

  return (
    <Typography
      sx={{
        fontFamily: roboto.style.fontFamily,
        fontWeight: 700,
        fontSize: { xs: 13.5, sm: 16, md: 18 },
        color: COLORS.WHITE,
        mb: 3,
        mt: 1.5,
        maxWidth: { xs: "100%", md: "85%" },
        ml: "auto",
        textAlign: "right",
        lineHeight: 1.6,
      }}
    >
      {prefixTitles.map((title, i) => (
        <React.Fragment key={i}>
          <Box component="span" sx={{ color: "#FFFFFF", fontWeight: 700 }}>
            {title}
          </Box>
          <Box component="span" sx={{ color: "#D4BFA8", mx: { xs: 0.6, sm: 1 }, fontWeight: 300 }}>
            |
          </Box>
        </React.Fragment>
      ))}

      {/* Suffix with typewriter animation */}
      <Box component="span" sx={{ color: "#E5D1B8", fontWeight: 500 }}>
        {currentTypedSuffix}
      </Box>
      <Box
        component="span"
        sx={{
          display: "inline-block",
          width: "2.5px",
          height: "1.1em",
          backgroundColor: "#E5D1B8",
          ml: 0.6,
          verticalAlign: "middle",
          borderRadius: "1px",
          animation: "inline-cursor-blink 0.85s step-end infinite",
        }}
      />
      <style>{`
        @keyframes inline-cursor-blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Typography>
  );
};

export default TypewriterInline;
