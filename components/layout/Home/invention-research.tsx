"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Heading from "../../widgets/Heading";
import { outfit, roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { ProjectItem } from "@/utils/type";
import {
  COLUMN_1_PROJECTS,
  COLUMN_2_PROJECTS,
  COLUMN_3_PROJECTS,
  INVENTION_RESEARCH_DESCRIPTION,
  INVENTION_RESEARCH_HEADING,
} from "@/utils/generic";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PATENT_LINK_MAP: Record<string, string> = {
  "ground-reality": "/patent/US20220390615A1",
  apparatus: "/patent/US20230324680A1",
  aircraft: "/patent/US20210269158A1",
  "iot-based": "/patent/US20240087440A1",
  "smart-rescue": "/patent/US20230069173A1",
  biodegradable: "/patent/US20210086970A1",
};

const ALL_PROJECTS: ProjectItem[] = [
  COLUMN_1_PROJECTS[0], // Ground Reality
  COLUMN_2_PROJECTS[0], // Aircraft Tracking
  COLUMN_3_PROJECTS[0], // Smart Rescue
  COLUMN_1_PROJECTS[1], // Apparatus
  COLUMN_2_PROJECTS[1], // IoT Based
  COLUMN_3_PROJECTS[1], // Biodegradable
];

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const targetLink = PATENT_LINK_MAP[project.id] || "/patent";

  return (
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
          borderRadius: "20px",
          border: "1px solid #EBE6DF",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
          transition: "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "4px",
            height: "100%",
            backgroundColor: "#846A4E",
            opacity: 0,
            transition: "opacity 0.3s ease",
            zIndex: 3,
          },
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 18px 40px rgba(132, 106, 78, 0.14)",
            borderColor: "#D8CDBF",
            "&::before": {
              opacity: 1,
            },
            "& .project-img": {
              transform: "scale(1.06)",
            },
            "& .view-link": {
              color: "#6F573E",
              transform: "translateX(4px)",
            },
          },
        }}
      >
        {/* Top Image Container */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "190px", sm: "200px", md: "205px" },
            overflow: "hidden",
            backgroundColor: "#F5F0EA",
            flexShrink: 0,
          }}
        >
          <Box
            className="project-img"
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </Box>

          {/* Floating Category Badge */}
          {project.category && (
            <Box
              sx={{
                position: "absolute",
                top: 14,
                left: 14,
                zIndex: 2,
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(8px)",
                px: 1.5,
                py: 0.5,
                borderRadius: "30px",
                border: "1px solid rgba(255, 255, 255, 0.6)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: outfit.style.fontFamily,
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#846A4E",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                {project.category}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Card Content Body */}
        <Box
          sx={{
            p: { xs: 2.5, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {/* Title - Fixed height to ensure identical line alignment */}
            <Typography
              sx={{
                fontFamily: outfit.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: "15px", md: "16px" },
                lineHeight: 1.35,
                color: "#181818",
                mb: 1.2,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                height: { xs: "40px", md: "44px" },
              }}
            >
              {project.title}
            </Typography>

            {/* Description - Fixed height to ensure identical card sizes */}
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

          {/* Action Link Footer */}
          <Stack
            className="view-link"
            direction="row"
            spacing={0.6}
            sx={{
              alignItems: "center",
              mt: 2,
              pt: 1.8,
              borderTop: "1px solid #F0EAE1",
              color: "#846A4E",
              transition: "all 0.3s ease",
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
  );
};

const InventionResearch: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 14 },
        backgroundColor: "#FAF8F5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Top Category Badge */}
        <Box sx={{ mb: 1.5 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "rgba(132, 106, 78, 0.08)",
              px: 2,
              py: 0.75,
              borderRadius: "50px",
              border: "1px solid rgba(132, 106, 78, 0.18)",
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#846A4E",
              }}
            />
            <Typography
              sx={{
                fontFamily: outfit.style.fontFamily,
                fontSize: { xs: "11px", sm: "12px" },
                fontWeight: 700,
                color: "#846A4E",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
              }}
            >
              INVENTIONS & INNOVATIONS
            </Typography>
          </Box>
        </Box>

        {/* Header Row */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: { xs: 5, md: 7 },
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Heading label={INVENTION_RESEARCH_HEADING} width="400px" />
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
              pt: { xs: 1, md: 0 },
            }}
          >
            <Box sx={{ maxWidth: 500, position: "relative" }}>
              <Box
                sx={{
                  ml: { xs: 0, md: -6.5 },
                  mb: 1,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/invention/Vector.png"
                  alt="Arrow indicator"
                  width={60}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: { xs: "14.5px", md: "16px" },
                  lineHeight: 1.7,
                  color: "#524B42",
                  fontWeight: 400,
                  textAlign: { xs: "left", md: "justify" },
                }}
              >
                {INVENTION_RESEARCH_DESCRIPTION}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Unified 3-Column Equal Height Grid */}
        <Grid container spacing={{ xs: 2.5, md: 3.5 }} sx={{ alignItems: "stretch" }}>
          {ALL_PROJECTS.map((proj) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={proj.id} sx={{ display: "flex" }}>
              <ProjectCard project={proj} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InventionResearch;


