"use client";

import React from "react";
import { Box, SxProps, Theme } from "@mui/material";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  shimmerColor?: string;
  sx?: SxProps<Theme>;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 3.5,
  shimmerColor = "#FFFFFF",
  sx,
}) => {
  return (
    <Box
      component="span"
      sx={{
        position: "relative",
        display: "inline-block",
        color: "#FFFFFF",
        backgroundImage: disabled
          ? "none"
          : `linear-gradient(110deg, #F5E6D3 0%, #F5E6D3 35%, ${shimmerColor} 46%, #FFFFFF 50%, ${shimmerColor} 54%, #F5E6D3 65%, #F5E6D3 100%)`,
        backgroundSize: "220% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: disabled ? "inherit" : "transparent",
        filter: "drop-shadow(0 2px 14px rgba(255, 232, 209, 0.45))",
        animation: disabled
          ? "none"
          : `shinyTextSweep ${speed}s ease-in-out infinite`,
        "@keyframes shinyTextSweep": {
          "0%": {
            backgroundPosition: "200% 0",
          },
          "100%": {
            backgroundPosition: "-200% 0",
          },
        },
        ...sx,
      }}
    >
      {text}
    </Box>
  );
};

export default ShinyText;
