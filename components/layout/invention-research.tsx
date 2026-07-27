"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";
import Heading from "../widgets/Heading";
import { roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { ProjectItem } from "@/utils/type";
import {
  COLUMN_1_PROJECTS,
  COLUMN_2_PROJECTS,
  COLUMN_3_PROJECTS,
  INVENTION_RESEARCH_DESCRIPTION,
  INVENTION_RESEARCH_HEADING,
} from "@/utils/generic";

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: project.height,
        overflow: "hidden",
        borderRadius: 0,
        cursor: "pointer",
        "&:hover .project-img": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        className="project-img"
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.5s ease-in-out",
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

      {/* Overlay Title Box */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: 20,
          maxWidth: "70%",
          backgroundColor: "#F2EFEA",
          px: 3,
          pt: 4.5,
          pb: 2.2,
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)",
          pointerEvents: "none",
        }}
      >
        <Typography
          sx={{
            fontFamily: roboto.style.fontFamily,
            fontWeight: 700,
            fontSize: { xs: "12px", md: "13px" },
            lineHeight: "1.35",
            color: "#1C1C1C",
            letterSpacing: "0.4px",
            textTransform: "uppercase",
          }}
        >
          {project.title}
        </Typography>
      </Box>
    </Box>
  );
};

const InventionResearch: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        {/* Header Row */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: { xs: 4, md: 7 },
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Heading label={INVENTION_RESEARCH_HEADING} width="380px" />
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
              pt: { xs: 1, md: 0 },
            }}
          >
            <Box sx={{ maxWidth: 450, position: "relative" }}>
              <Box
                sx={{
                  //   mb: 0.5,
                  ml: -6.5,
                  display: "flex",
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
                  fontSize: { xs: "14px", md: "15px" },
                  lineHeight: "1.6",
                  color: COLORS.TEXT_COLOR || "#252525",
                  fontWeight: 400,
                }}
              >
                {INVENTION_RESEARCH_DESCRIPTION}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* 3-Column Bento Masonry Grid */}
        <Grid container spacing={3}>
          {/* Column 1 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3}>
              {COLUMN_1_PROJECTS.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </Stack>
          </Grid>

          {/* Column 2 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3}>
              {COLUMN_2_PROJECTS.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </Stack>
          </Grid>

          {/* Column 3 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3}>
              {COLUMN_3_PROJECTS.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InventionResearch;
