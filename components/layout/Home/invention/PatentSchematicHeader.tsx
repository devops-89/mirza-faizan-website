"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { outfit } from "@/utils/fonts";

interface PatentSchematicHeaderProps {
  patentId?: string;
  category?: string;
}

export const PatentSchematicHeader: React.FC<PatentSchematicHeaderProps> = ({
  patentId,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "185px", sm: "195px", md: "200px" },
        overflow: "hidden",
        backgroundColor: "#161616",
        background:
          "radial-gradient(circle at 70% 30%, #2A2520 0%, #141414 70%)",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Technical Grid Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* SVG Technical Vector Schematics */}
      <Box
        className="project-img"
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
        }}
      >
        {patentId === "US20220390615A1" && (
          /* GRIPS Radar Runway Schematic */
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
            <line
              x1="20"
              y1="50"
              x2="120"
              y2="50"
              stroke="#846A4E"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <rect
              x="35"
              y="42"
              width="70"
              height="16"
              rx="3"
              stroke="#D4BFA8"
              strokeWidth="1.5"
              fill="rgba(132,106,78,0.15)"
            />
            <circle
              cx="70"
              cy="50"
              r="32"
              stroke="rgba(212,191,168,0.4)"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />
            <circle
              cx="70"
              cy="50"
              r="44"
              stroke="rgba(132,106,78,0.25)"
              strokeWidth="1"
            />
            <circle cx="82" cy="44" r="3" fill="#E5D1B8" />
            <path d="M70 50 L95 32" stroke="#E5D1B8" strokeWidth="1.5" />
          </svg>
        )}

        {patentId === "US20210269158A1" && (
          /* UV Aircraft Disinfection Ray Schematic */
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
            <rect
              x="30"
              y="30"
              width="80"
              height="40"
              rx="6"
              stroke="#846A4E"
              strokeWidth="1.5"
              fill="rgba(132,106,78,0.1)"
            />
            <path
              d="M40 20 L40 30 M70 15 L70 30 M100 20 L100 30"
              stroke="#E5D1B8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="35"
              y1="50"
              x2="105"
              y2="50"
              stroke="#D4BFA8"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <circle
              cx="70"
              cy="50"
              r="8"
              fill="rgba(229,209,184,0.2)"
              stroke="#E5D1B8"
              strokeWidth="1.2"
            />
          </svg>
        )}

        {patentId === "US20210269997A1" && (
          /* Oil Spill Cleanup Vessel Roller Wave Schematic */
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
            <path
              d="M20 65 Q 40 55, 60 65 T 100 65 T 140 65"
              stroke="#846A4E"
              strokeWidth="1.5"
            />
            <path
              d="M10 75 Q 35 68, 60 75 T 110 75"
              stroke="rgba(132,106,78,0.5)"
              strokeWidth="1"
            />
            <rect
              x="45"
              y="32"
              width="50"
              height="26"
              rx="13"
              stroke="#D4BFA8"
              strokeWidth="1.8"
              fill="rgba(212,191,168,0.12)"
            />
            <circle cx="70" cy="45" r="7" fill="#E5D1B8" />
          </svg>
        )}

        {patentId === "US20230324680A1" && (
          /* Assistive Gesture Interface Node Schematic */
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
            <circle
              cx="70"
              cy="50"
              r="16"
              stroke="#E5D1B8"
              strokeWidth="1.8"
              fill="rgba(132,106,78,0.2)"
            />
            <path
              d="M40 50 Q 55 35, 70 35 T 100 50"
              stroke="#846A4E"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M30 50 Q 50 20, 70 20 T 110 50"
              stroke="rgba(212,191,168,0.3)"
              strokeWidth="1"
            />
            <circle cx="70" cy="50" r="5" fill="#FFFFFF" />
          </svg>
        )}

        {patentId === "US20240087440A1" && (
          /* Aquatic Pool Sonar Submersion Safety Schematic */
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
            <rect
              x="25"
              y="25"
              width="90"
              height="50"
              rx="8"
              stroke="#846A4E"
              strokeWidth="1.5"
              fill="rgba(25,25,25,0.6)"
            />
            <circle cx="70" cy="50" r="14" stroke="#D4BFA8" strokeWidth="1.5" />
            <circle
              cx="70"
              cy="50"
              r="24"
              stroke="rgba(229,209,184,0.35)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle cx="70" cy="50" r="4" fill="#E5D1B8" />
          </svg>
        )}

        {patentId === "US11464462B1" && (
          /* Drug Abuse Bio-Sweat Sensor Wristband Schematic */
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
            <rect
              x="42"
              y="22"
              width="56"
              height="56"
              rx="14"
              stroke="#D4BFA8"
              strokeWidth="1.8"
              fill="rgba(132,106,78,0.18)"
            />
            <circle
              cx="70"
              cy="50"
              r="12"
              stroke="#E5D1B8"
              strokeWidth="1.5"
              fill="rgba(229,209,184,0.1)"
            />
            <path
              d="M60 50 L66 56 L80 42"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Box>

      {/* Floating Patent ID Badge (Top Left) */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          backdropFilter: "blur(8px)",
          px: 1.4,
          py: 0.5,
          borderRadius: "8px",
          border: "1px solid rgba(229, 209, 184, 0.3)",
        }}
      >
        <Typography
          sx={{
            fontFamily: outfit.style.fontFamily,
            fontSize: "11px",
            fontWeight: 700,
            color: "#E5D1B8",
            letterSpacing: "0.4px",
          }}
        >
          {patentId || "US PATENT"}
        </Typography>
      </Box>

      {/* Floating Status Pill (Top Right) */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 2,
          backgroundColor: "#846A4E",
          px: 1.2,
          py: 0.4,
          borderRadius: "6px",
        }}
      >
        <Typography
          sx={{
            fontFamily: outfit.style.fontFamily,
            fontSize: "9.5px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          US GRANTED
        </Typography>
      </Box>
    </Box>
  );
};

export default PatentSchematicHeader;
