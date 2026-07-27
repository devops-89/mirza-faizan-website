"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { outfit, roboto, signika, bella } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

const PatentsHero = () => {
  return (
    <Container maxWidth="xl" sx={{ mb: 3, px: { xs: 1.5, sm: 3 } }}>
      <Box
        sx={{
          backgroundColor: "#191919",
          color: "#FFFFFF",
          mt: { xs: 1.5, sm: 3 },
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 10 },
          borderRadius: { xs: "0px 0px 45px 45px", md: "0px 0px 90px 90px" },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: bella.style.fontFamily,
              fontSize: { xs: 65, sm: 110, md: 160, lg: 180 },
              color: COLORS.WHITE,
              lineHeight: 1.05,
              mb: 1,
            }}
          >
            Patents
          </Typography>

          <Typography
            sx={{
              fontFamily: signika.style.fontFamily,
              fontSize: { xs: 20, sm: 32, md: 46 },
              fontWeight: 700,
              color: "#846A4E",
              mb: 2,
            }}
          >
            52 Total Patent Filings
          </Typography>

          <Typography
            sx={{
              fontFamily: roboto.style.fontFamily,
              fontSize: { xs: "13.5px", sm: "15px", md: "16px" },
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: 750,
              mx: "auto",
              lineHeight: 1.7,
              px: { xs: 1.5, sm: 2 },
            }}
          >
            Mirza Faizan is a serial innovator whose mission-critical aerospace
            safety systems, AI analytics, biotech, and assistive technologies
            have produced groundbreaking patented inventions across the United
            States and internationally.
          </Typography>

          {/* Stats Counters */}
          <Grid
            container
            spacing={{ xs: 1.5, sm: 2.5, md: 3 }}
            sx={{
              mt: { xs: 3, sm: 4.5, md: 5 },
              justifyContent: "center",
              alignItems: "stretch",
              maxWidth: { md: "720px" },
              mx: "auto",
            }}
          >
            {[
              { num: "31", label: "US Patents Granted" },
              { num: "12", label: "South Africa Granted" },
              { num: "9", label: "US Patents Pending" },
            ].map((stat, i) => (
              <Grid size={{ xs: 4, sm: 4, md: 3.5 }} key={i}>
                <Box
                  sx={{
                    p: { xs: 1.2, sm: 1.8, md: 2 },
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    borderRadius: { xs: "14px", sm: "16px", md: "18px" },
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: outfit.style.fontFamily,
                      fontSize: { xs: "22px", sm: "28px", md: "34px" },
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    {stat.num}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: outfit.style.fontFamily,
                      fontSize: { xs: "10px", sm: "11.5px", md: "13px" },
                      color: "rgba(255, 255, 255, 0.75)",
                      lineHeight: 1.25,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      minHeight: { xs: "24px", sm: "28px", md: "32px" },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default PatentsHero;
