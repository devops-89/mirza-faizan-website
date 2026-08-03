"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { roboto } from "@/utils/fonts";

interface TextMorphProps {
  texts: string[];
  interval?: number;
}

export const TextMorph: React.FC<TextMorphProps> = ({
  texts,
  interval = 3600,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        minHeight: { xs: "54px", sm: "48px", md: "52px" },
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(4px)" }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ width: "100%", textAlign: "right" }}
        >
          <Typography
            sx={{
              fontFamily: roboto.style.fontFamily,
              fontWeight: 700,
              fontSize: { xs: "15px", sm: "19px", md: "23px" },
              color: "#F6EBDD",
              textAlign: "right",
              lineHeight: 1.45,
              letterSpacing: "0.3px",
              textShadow: "0 2px 12px rgba(0, 0, 0, 0.5)",
            }}
          >
            {texts[currentIndex]}
          </Typography>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default TextMorph;
