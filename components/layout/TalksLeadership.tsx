"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";
import Heading from "../widgets/Heading";
import { outfit, roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import {
  EXPERIENCE_HEADING,
  EXPERIENCE_ITEMS,
  TALKS_BULLETS,
  TALKS_DESCRIPTION,
  TALKS_HEADING,
} from "@/utils/generic";

const TalksLeadership: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        {/* Top Header Row */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: { xs: 5, md: 7 },
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Heading label={TALKS_HEADING} width="390px" />
          </Grid>

          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
              pt: { xs: 1, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontSize: { xs: "14px", md: "15px" },
                lineHeight: "1.65",
                color: COLORS.TEXT_COLOR || "#252525",
                fontWeight: 400,
                maxWidth: 680,
                textAlign: { xs: "left", md: "justify" },
              }}
            >
              {TALKS_DESCRIPTION}
            </Typography>
          </Grid>
        </Grid>

        {/* Main 2-Column Content Row */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{ alignItems: "flex-start" }}
        >
          {/* Left Column: Talks Bullets + Experience & Collaborations */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            {/* Top Subsection: Talks Bullets */}
            <Box component="ul" sx={{ pl: 2.5, m: 0, mb: { xs: 4, md: 7 } }}>
              {[
                <>
                  Featured Talks (TEDx, University Lectures,
                  <Box
                    component="br"
                    sx={{ display: { xs: "none", md: "inline" } }}
                  />{" "}
                  Panels)
                </>,
                <>
                  Innovation Mentorship
                  <Box
                    component="br"
                    sx={{ display: { xs: "none", md: "inline" } }}
                  />{" "}
                  Initiative
                </>,
                <>
                  Advisory Roles &
                  <Box
                    component="br"
                    sx={{ display: { xs: "none", md: "inline" } }}
                  />{" "}
                  Collaborations
                </>,
              ].map((bullet, idx) => (
                <Typography
                  component="li"
                  key={idx}
                  sx={{
                    fontFamily: outfit.style.fontFamily,
                    fontSize: { xs: "14.5px", sm: "16.5px", md: "24px" },
                    fontWeight: 400,
                    lineHeight: { xs: "1.4", md: "1.5" },
                    color: "#222222",
                    letterSpacing: "-0.4px",
                    mb: { xs: 2.5, md: 4 },
                    "&::marker": {
                      fontSize: { xs: "12px", md: "18px" },
                    },
                  }}
                >
                  {bullet}
                </Typography>
              ))}
            </Box>

            {/* Bottom Subsection: Experience & Collaborations */}
            <Box>
              <Heading label={EXPERIENCE_HEADING} width="340px" />

              <Box
                component="ul"
                sx={{ mt: { xs: 3, md: 5.5 }, pl: 2.5, m: 0 }}
              >
                {EXPERIENCE_ITEMS.map((item, idx) => (
                  <Typography
                    component="li"
                    key={idx}
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: { xs: "13.5px", md: "14.5px" },
                      lineHeight: "1.65",
                      color: "#2C2C2C",
                      textAlign: "justify",
                      mb: { xs: 1.4, md: 1.6 },
                      "&::marker": {
                        fontSize: "10px",
                      },
                    }}
                  >
                    <strong>{item.role}</strong> –{" "}
                    {item.role.includes("Inventor") ? (
                      <>
                        Ground Reality Information Processing System (
                        <strong>GRIPS</strong>)
                      </>
                    ) : item.role.includes("Educator") ? (
                      <>
                        Advocating innovation and <strong>STEM</strong>{" "}
                        education for youth.
                      </>
                    ) : (
                      item.description
                    )}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Mirza Faizan Image */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 480, sm: 600, md: 680 },
                borderRadius: { xs: "24px", md: "32px" },
                overflow: "hidden",
                mt: { xs: 0, md: "-30px" },
              }}
            >
              <Image
                src="/images/talk/Mirza-faizan.png"
                alt="Mirza Faizan"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TalksLeadership;
