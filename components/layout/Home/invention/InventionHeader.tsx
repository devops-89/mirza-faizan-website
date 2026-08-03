"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Heading from "@/components/widgets/Heading";
import { outfit, roboto } from "@/utils/fonts";
import {
  INVENTION_RESEARCH_DESCRIPTION,
  INVENTION_RESEARCH_HEADING,
} from "@/utils/generic";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const InventionHeader: React.FC = () => {
  return (
    <>
      {/* Top Category Badge */}
      <ScrollReveal direction="up" delay={0.1}>
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
      </ScrollReveal>

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
          <ScrollReveal direction="right" delay={0.15}>
            <Heading label={INVENTION_RESEARCH_HEADING} width="400px" />
          </ScrollReveal>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            pt: { xs: 1, md: 0 },
          }}
        >
          <ScrollReveal direction="left" delay={0.2}>
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
          </ScrollReveal>
        </Grid>
      </Grid>
    </>
  );
};

export default InventionHeader;
