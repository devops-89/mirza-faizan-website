"use client";

import { roboto, bella } from "@/utils/fonts";
import { ABOUT_INFO } from "@/utils/generic";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Heading from "../../widgets/Heading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import ScrollWordReveal from "@/components/animation/ScrollWordReveal";

const About = () => {
  return (
    <Box
      sx={{
        pt: { xs: 4, md: 6 },
        pb: { xs: 8, md: 12 },
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Section Heading */}
          <Grid size={12}>
            <ScrollReveal direction="up" delay={0.1}>
              <Heading label={"About the \n Visionary Inventor"} width="360px" />
            </ScrollReveal>
          </Grid>

          {/* Name + Designation inline */}
          <Grid size={12}>
            <ScrollReveal direction="up" delay={0.2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  gap: { xs: 0.5, sm: 2.5 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: bella.style.fontFamily,
                    fontSize: { xs: "36px", md: "46px" },
                    color: "#1F1F1F",
                    lineHeight: 1,
                  }}
                >
                  {ABOUT_INFO.name}
                </Typography>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    width: "1px",
                    height: "26px",
                    backgroundColor: "#D4BFA8",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: { xs: "12.5px", md: "13.5px" },
                    fontWeight: 600,
                    color: "#846A4E",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    lineHeight: 1.5,
                  }}
                >
                  {ABOUT_INFO.designation}
                </Typography>
              </Box>
            </ScrollReveal>
          </Grid>

          {/* Divider */}
          <Grid size={12}>
            <ScrollReveal direction="scale" delay={0.25}>
              <Box sx={{ height: "1px", backgroundColor: "rgba(132,106,78,0.18)" }} />
            </ScrollReveal>
          </Grid>

          {/* Paragraphs */}
          <Grid size={12}>
            <Stack spacing={3.5}>
              {ABOUT_INFO.paragraphs.map((paragraph, index) => (
                <ScrollWordReveal
                  key={index}
                  text={paragraph}
                  sx={{
                    color: index === 0 ? "#111111" : "#282828",
                    fontSize: {
                      xs: "16px",
                      sm: "17.5px",
                      md: index === 0 ? "19.5px" : "18px",
                    },
                    textAlign: "left",
                    fontFamily: roboto.style.fontFamily,
                    fontWeight: index === 0 ? 500 : 400,
                    lineHeight: { xs: 1.75, md: 1.82 },
                    letterSpacing: "-0.1px",
                  }}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
