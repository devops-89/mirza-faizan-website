import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { roboto, outfit } from "@/utils/fonts";
import { PatentItem } from "@/utils/type";
import Image from "next/image";

interface PatentCardProps {
  item: PatentItem;
  isDarkTheme?: boolean;
}

export const PatentCard = ({ item, isDarkTheme = false }: PatentCardProps) => {
  return (
    <Link
      href={`/patent/${item.id}`}
      style={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          p: { xs: 2, md: 2.5 },
          backgroundColor: "transparent",
          borderRadius: isDarkTheme ? "16px" : "0px",
          border: isDarkTheme ? "1px solid rgba(255,255,255,0.06)" : "none",
          borderBottom: isDarkTheme ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
          height: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          transition: "all 0.4s ease",
          "@keyframes shimmerLine": {
            "0%": { backgroundPosition: "200% 0" },
            "100%": { backgroundPosition: "-200% 0" },
          },
          "@keyframes pulseArrow": {
            "0%, 100%": { transform: "translateX(0)" },
            "50%": { transform: "translateX(3px)" },
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -1,
            left: 0,
            width: "100%",
            height: "1.5px",
            background:
              "linear-gradient(90deg, transparent, rgba(132, 106, 78, 0.35), transparent)",
            backgroundSize: "200% 100%",
            animation: "shimmerLine 3.5s infinite linear",
            opacity: 0.7,
          },
          "& .card-arrow": {
            animation: "pulseArrow 2s infinite ease-in-out",
          },
          "&:hover": {
            transform: "translateY(-6px)",
            backgroundColor: isDarkTheme ? "#1E2022" : "#FFFFFF",
            boxShadow: isDarkTheme ? "0 12px 30px rgba(0,0,0, 0.4)" : "0 12px 30px rgba(132, 106, 78, 0.12)",
            borderRadius: "16px",
            borderColor: isDarkTheme ? "rgba(132, 106, 78, 0.4)" : "transparent",
            "& .patent-title": {
              color: isDarkTheme ? "#D4B895" : "#846A4E",
            },
            "& .card-arrow": {
              animation: "none",
              transform: "translateX(6px)",
              color: isDarkTheme ? "#D4B895" : "#6F573E",
            },
            "& .patent-badge": {
              color: "#846A4E",
            },
            "&::after": {
              opacity: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(132, 106, 78, 0.6), transparent)",
            },
          },
        }}
      >
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {item.image && (
            <Box
              sx={{
                width: "100%",
                height: "160px",
                position: "relative",
                mb: 2.5,
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          )}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
              mb: 2.5,
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Box
              className="patent-badge"
              sx={{
                fontFamily: outfit.style.fontFamily,
                fontSize: "11px",
                fontWeight: 600,
                color: "#888",
                transition: "color 0.3s ease",
              }}
            >
              {item.patentNo}
            </Box>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Box
                sx={{
                  fontFamily: outfit.style.fontFamily,
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#846A4E",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {item.region === "US"
                  ? "🇺🇸 US GRANTED"
                  : item.region === "South Africa"
                    ? "🇿🇦 SA GRANTED"
                    : item.region === "International"
                      ? "🌍 PENDING"
                      : "PENDING"}
              </Box>
            </Stack>
          </Stack>

          {/* Patent Title */}
          <Typography
            className="patent-title"
            sx={{
              fontFamily: roboto.style.fontFamily,
              fontSize: { xs: "16px", md: "17.5px" },
              fontWeight: 700,
              color: isDarkTheme ? "#FFFFFF" : "#181818",
              lineHeight: 1.38,
              letterSpacing: "-0.1px",
              mb: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              transition: "color 0.3s ease",
            }}
          >
            {item.title}
          </Typography>

          {/* Patent Description */}
          {item.description && (
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontSize: { xs: "13px", md: "14px" },
                fontWeight: 400,
                color: isDarkTheme ? "#A0A0A0" : "#555555",
                lineHeight: 1.6,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.description}
            </Typography>
          )}
        </Box>

        {/* Footer Row with Interactive Arrow */}
        <Stack
          direction="row"
          spacing={0.8}
          sx={{
            alignItems: "center",
            mt: 3,
            pt: 2,
            borderTop: "1px solid #F0EAE1",
          }}
        >
          <Typography
            sx={{
              fontFamily: outfit.style.fontFamily,
              fontSize: "11.5px",
              fontWeight: 700,
              color: isDarkTheme ? "#D4B895" : "#846A4E",
              letterSpacing: "0.6px",
              textTransform: "uppercase",
            }}
          >
            Explore Patent Specifications
          </Typography>
          <ArrowForwardIcon
            className="card-arrow"
            sx={{
              fontSize: "15px",
              color: isDarkTheme ? "#D4B895" : "#846A4E",
              transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          />
        </Stack>
      </Box>
    </Link>
  );
};
