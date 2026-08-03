"use client";

import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { ProjectItem } from "@/utils/type";
import {
  COLUMN_1_PROJECTS,
  COLUMN_2_PROJECTS,
  COLUMN_3_PROJECTS,
  US_PATENTS_GRANTED,
} from "@/utils/generic";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/ScrollReveal";
import InventionHeader from "./invention/InventionHeader";
import ProjectCard from "./invention/ProjectCard";

const FEATURED_PATENTS: ProjectItem[] = [
  COLUMN_1_PROJECTS[0], // GRIPS (US20220390615A1)
  COLUMN_2_PROJECTS[0], // Aircraft Tray UV Disinfection (US20210269158A1)
  COLUMN_3_PROJECTS[0], // Ocean Oil Spill Recovery (US20210269997A1)
  COLUMN_1_PROJECTS[1], // Assistive Tech (US20230324680A1)
  COLUMN_2_PROJECTS[1], // Pool IoT Safety (US20240087440A1)
  COLUMN_3_PROJECTS[1], // Drug Abuse Prevention Wearable (US11464462B1)
];

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
        {/* Section Header */}
        <InventionHeader />

        {/* 3-Column Equal Height Grid with Stagger Animation */}
        <StaggerContainer staggerDelay={0.12} delay={0.25}>
          <Grid
            container
            spacing={{ xs: 2.5, md: 3.5 }}
            sx={{ alignItems: "stretch" }}
          >
            {US_PATENTS_GRANTED.slice(0, 6).map((proj) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={proj.id}
                sx={{ display: "flex" }}
              >
                <StaggerItem
                  direction="up"
                  distance={30}
                  style={{ width: "100%", display: "flex" }}
                >
                  <ProjectCard project={proj} />
                </StaggerItem>
              </Grid>
            ))}
          </Grid>
        </StaggerContainer>
      </Container>
    </Box>
  );
};

export default InventionResearch;
