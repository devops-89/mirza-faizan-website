import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Heading from "../../widgets/Heading";
import { roboto } from "@/utils/fonts";
import { PatentItem } from "@/utils/type";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/ScrollReveal";
import { PatentCard } from "./PatentCard";

interface PatentGridSectionProps {
  title: string;
  subtitle: string;
  patents: PatentItem[];
  isAlternate?: boolean;
}

export const PatentGridSection = ({
  title,
  subtitle,
  patents,
  isAlternate = false,
}: PatentGridSectionProps) => {
  if (patents.length === 0) return null;

  return (
    <Box sx={{ mb: { xs: 0, md: 0 } }}>
      <ScrollReveal direction="up" delay={0.1}>
        <Grid container spacing={3} sx={{ mb: { xs: 3.5, md: 4.5 } }}>
          <Grid size={12}>
            <Heading label={title} width="380px" />
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontSize: { xs: "13.5px", md: "15px" },
                color: "#846A4E",
                fontWeight: 600,
                mt: 1.5,
                letterSpacing: "0.2px",
              }}
            >
              {subtitle} ({patents.length}{" "}
              {patents.length === 1 ? "Patent" : "Patents"})
            </Typography>
          </Grid>
        </Grid>
      </ScrollReveal>

      <StaggerContainer staggerDelay={0.08} delay={0.15}>
        <Grid
          container
          columnSpacing={{ xs: 2.5, sm: 3, md: 3.5 }}
          rowSpacing={{ xs: 3, sm: 3.5, md: 4 }}
        >
          {patents.map((item) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={item.id}
              sx={{ display: "flex" }}
            >
              <StaggerItem
                direction="up"
                distance={25}
                style={{ width: "100%", display: "flex" }}
              >
                <PatentCard item={item} />
              </StaggerItem>
            </Grid>
          ))}
        </Grid>
      </StaggerContainer>
    </Box>
  );
};
