"use client";

import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { roboto, outfit } from "@/utils/fonts";
import { PatentItem } from "@/utils/type";

interface FeaturedPatentsProps {
  patents: PatentItem[];
}

export const FeaturedPatents = ({ patents }: FeaturedPatentsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // We show 2 items at a time in desktop
  const itemsPerPage = 2;
  const maxIndex = Math.max(0, patents.length - itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  if (!patents || patents.length === 0) return null;

  return (
    <Box sx={{ mb: { xs: 6, md: 10 }, mt: { xs: 2, md: 1 } }}>
      <Stack
        direction="row"
        sx={{ mb: 4, justifyContent: "space-between", alignItems: "flex-end" }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            cursor: currentIndex > 0 ? "pointer" : "default",
            opacity: currentIndex > 0 ? 1 : 0.3,
          }}
          onClick={handlePrev}
        >
          <ArrowBackIcon sx={{ fontSize: "16px", color: "#846A4E" }} />
          <Typography
            sx={{
              fontFamily: outfit.style.fontFamily,
              fontSize: "12px",
              fontWeight: 600,
              color: "#846A4E",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Previous
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            cursor: currentIndex < maxIndex ? "pointer" : "default",
            opacity: currentIndex < maxIndex ? 1 : 0.3,
          }}
          onClick={handleNext}
        >
          <Typography
            sx={{
              fontFamily: outfit.style.fontFamily,
              fontSize: "12px",
              fontWeight: 600,
              color: "#846A4E",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Next
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: "16px", color: "#846A4E" }} />
        </Stack>
      </Stack>

      <Box sx={{ overflow: "hidden", width: "100%" }}>
        <Stack
          direction="row"
          spacing={{ xs: 4, md: 8 }}
          sx={{
            transition: "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
            transform: `translateX(calc(-${(currentIndex * 100) / itemsPerPage}% - ${currentIndex * 32}px))`,
          }}
        >
          {patents.map((item) => (
            <Box
              key={item.id}
              sx={{
                flex: `0 0 calc(${100 / itemsPerPage}% - 32px)`,
                minWidth: { xs: "100%", md: `calc(50% - 32px)` },
              }}
            >
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: { xs: "24px", md: "28px" },
                  fontWeight: 700,
                  color: "#181818",
                  lineHeight: 1.3,
                  letterSpacing: "-0.5px",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
