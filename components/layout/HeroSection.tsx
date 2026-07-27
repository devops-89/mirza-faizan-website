import { Box, colors, Container, Grid, Typography } from "@mui/material";
import React from "react";
import hero from "@/images/hero.jpg";
import { bella, roboto, signika } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import CounterCard from "./CounterCard";
const HeroSection = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ mb: 3 }}>
        <Box
          sx={{
            backgroundImage: `url(${hero.src})`,
            height: "100vh",
            width: "100%",
            mt: 3,
            borderRadius: "0px 0px 100px 100px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(25, 25, 25, 0.42)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              borderRadius: "0px 0px 100px 100px",
            }}
          >
            <Container sx={{ textAlign: "right" }}>
              <Typography
                sx={{
                  fontFamily: bella.style.fontFamily,
                  fontSize: 288,
                  color: COLORS.WHITE,
                  lineHeight: "200px",
                }}
              >
                Hello there,
              </Typography>
              <Typography
                sx={{
                  fontFamily: signika.style.fontFamily,
                  lineHeight: "109px",
                  fontSize: 129,
                  fontWeight: 700,
                  color: COLORS.WHITE,
                }}
              >
                Meet
              </Typography>
              <Typography
                sx={{
                  fontFamily: signika.style.fontFamily,
                  lineHeight: "109px",
                  fontSize: 129,
                  fontWeight: 700,
                  color: COLORS.WHITE,
                }}
              >
                Mr.Mirza Faizan.
              </Typography>
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontWeight: 700,
                  fontSize: 22,
                  color: COLORS.WHITE,
                  mb: 3,
                }}
              >
                Aerospace Scientist | Inventor | Technology Visionary shaping
                the future of aviation safety and AI in aerospace.
              </Typography>
            </Container>
            <CounterCard />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
