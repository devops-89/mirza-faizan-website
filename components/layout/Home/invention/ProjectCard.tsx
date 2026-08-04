"use client";

import React, { useRef, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { outfit, roboto } from "@/utils/fonts";
import { ProjectItem } from "@/utils/type";
import PatentSchematicHeader from "./PatentSchematicHeader";

export const ProjectCard: React.FC<{ project: ProjectItem }> = ({
  project,
}) => {
  const targetLink = project.id ? `/patent/${project.id}` : "/patent";

  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / rect.height) * 12;
    const rotateY = ((x - centerX) / rect.width) * 12;

    setMousePos({ x, y, isHovered: true });
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }));
    setRotate({ x: 0, y: 0 });
  };

  return (
    <Box
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        perspective: "1200px",
        width: "100%",
        height: "100%",
      }}
    >
      <Link
        href={targetLink}
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
            width: "100%",
            height: "100%",
            flex: 1,
            backgroundColor: "#FFFFFF",
            borderRadius: "24px",
            border: "1px solid #EBE6DF",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: mousePos.isHovered
              ? "0 30px 60px rgba(132, 106, 78, 0.22)"
              : "0 6px 20px rgba(0, 0, 0, 0.03)",
            transformStyle: "preserve-3d",
            transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(${
              mousePos.isHovered ? -8 : 0
            }px)`,
            transition: mousePos.isHovered
              ? "transform 0.1s ease-out, box-shadow 0.3s ease"
              : "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "4px",
              height: "100%",
              backgroundColor: "#846A4E",
              borderRadius: "24px 0 0 24px",
              opacity: mousePos.isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
              zIndex: 10,
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "24px",
              pointerEvents: "none",
              zIndex: 8,
              opacity: mousePos.isHovered ? 1 : 0,
              transition: "opacity 0.4s ease",
              background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(225, 205, 175, 0.25), transparent 70%)`,
            }}
          />

          {/* Top Image or Schematic Header with 3D Z-Lift */}
          {project.image ? (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "220px", sm: "240px", md: "260px" },
                borderRadius: "24px 24px 0 0",
                overflow: "hidden",
                backgroundColor: "#FAF9F6",
                borderBottom: "1px solid #EBE6DF",
                flexShrink: 0,
                transformStyle: "preserve-3d",
                transform: mousePos.isHovered
                  ? "translateZ(45px)"
                  : "translateZ(0px)",
                transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                boxShadow: mousePos.isHovered
                  ? "0 12px 30px rgba(0,0,0,0.12)"
                  : "none",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transform: mousePos.isHovered ? "scale(1.08)" : "scale(1)",
                  transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
                }}
              >
                <Image
                  src={project.image.src}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </Box>

              {/* Floating Patent ID Badge (TranslateZ: 75px) */}
              <Box
                sx={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  zIndex: 9,
                  backgroundColor: "rgba(18, 18, 18, 0.88)",
                  backdropFilter: "blur(10px)",
                  px: 1.5,
                  py: 0.6,
                  borderRadius: "8px",
                  border: "1px solid rgba(229, 209, 184, 0.45)",
                  boxShadow: mousePos.isHovered
                    ? "0 8px 20px rgba(0,0,0,0.4)"
                    : "0 2px 8px rgba(0,0,0,0.15)",
                  transform: mousePos.isHovered
                    ? "translateZ(75px)"
                    : "translateZ(0px)",
                  transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
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
                  {project.patentId || "US PATENT"}
                </Typography>
              </Box>

              {/* Floating Status Pill (TranslateZ: 75px) */}
              <Box
                sx={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  zIndex: 9,
                  backgroundColor: "#846A4E",
                  px: 1.3,
                  py: 0.5,
                  borderRadius: "6px",
                  boxShadow: mousePos.isHovered
                    ? "0 8px 20px rgba(132, 106, 78, 0.4)"
                    : "0 2px 6px rgba(0,0,0,0.15)",
                  transform: mousePos.isHovered
                    ? "translateZ(75px)"
                    : "translateZ(0px)",
                  transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
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
          ) : (
            <PatentSchematicHeader
              patentId={project.patentId}
              category={project.category}
            />
          )}

          {/* Card Content Body (TranslateZ: 25px) */}
          <Box
            sx={{
              p: { xs: 2.5, md: 3 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              transformStyle: "preserve-3d",
              transform: mousePos.isHovered
                ? "translateZ(25px)"
                : "translateZ(0px)",
              transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
              {/* Category Tag */}
              {project.category && (
                <Typography
                  sx={{
                    fontFamily: outfit.style.fontFamily,
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#846A4E",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    mb: 0.8,
                  }}
                >
                  {project.category}
                </Typography>
              )}

              {/* Title */}
              <Typography
                sx={{
                  fontFamily: outfit.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: "15px", md: "16px" },
                  lineHeight: 1.35,
                  color: mousePos.isHovered ? "#000000" : "#181818",
                  mb: 1.2,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  height: { xs: "40px", md: "44px" },
                  transition: "color 0.2s ease",
                }}
              >
                {project.title}
              </Typography>

              {/* Description */}
              {project.description && (
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: { xs: "12.5px", md: "13.5px" },
                    lineHeight: 1.5,
                    color: "#666666",
                    fontWeight: 400,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    height: { xs: "56px", md: "62px" },
                  }}
                >
                  {project.description}
                </Typography>
              )}
            </Box>

            {/* Action Link Footer (TranslateZ: 35px) */}
            <Stack
              direction="row"
              spacing={0.6}
              sx={{
                alignItems: "center",
                mt: 2,
                pt: 1.8,
                borderTop: "1px solid #F0EAE1",
                color: mousePos.isHovered ? "#6F573E" : "#846A4E",
                transform: mousePos.isHovered
                  ? "translateZ(35px) translateX(6px)"
                  : "translateZ(0px) translateX(0px)",
                transition: "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: outfit.style.fontFamily,
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.4px",
                  textTransform: "uppercase",
                }}
              >
                View Patent Details
              </Typography>
              <ArrowForwardIcon sx={{ fontSize: "14px" }} />
            </Stack>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default ProjectCard;
