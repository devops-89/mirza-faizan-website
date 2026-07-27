import { Box, Container, Typography } from "@mui/material";
import React from "react";
import hero from "@/images/hero.jpg";
import { bella, roboto, signika } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { HERO_INFO } from "@/utils/generic";
import CounterCard from "./CounterCard";

const HeroSection = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ mb: 3, px: { xs: 1.5, sm: 3 } }}>
        <Box
          sx={{
            backgroundImage: `url(${hero.src})`,
            minHeight: { xs: "580px", md: "100vh" },
            width: "100%",
            mt: { xs: 1.5, sm: 3 },
            borderRadius: {
              xs: "0px 0px 45px 45px",
              md: "0px 0px 100px 100px",
            },
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(25, 25, 25, 0.42)",
              minHeight: { xs: "580px", md: "100vh" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              borderRadius: {
                xs: "0px 0px 45px 45px",
                md: "0px 0px 100px 100px",
              },
              pt: { xs: 10, md: 0 },
            }}
          >
            <Container sx={{ textAlign: "right", px: { xs: 2, sm: 3 } }}>
              <Typography
                sx={{
                  fontFamily: bella.style.fontFamily,
                  fontSize: { xs: 72, sm: 130, md: 170, lg: 210 },
                  color: COLORS.WHITE,
                  lineHeight: { xs: "70px", sm: "110px", md: "150px" },
                }}
              >
                {HERO_INFO.greeting}
              </Typography>
              <Typography
                sx={{
                  fontFamily: signika.style.fontFamily,
                  lineHeight: { xs: "48px", sm: "75px", md: "100px" },
                  fontSize: { xs: 38, sm: 65, md: 85, lg: 110 },
                  fontWeight: 700,
                  color: COLORS.WHITE,
                }}
              >
                {HERO_INFO.meetTitle}
              </Typography>
              <Typography
                sx={{
                  fontFamily: signika.style.fontFamily,
                  lineHeight: { xs: "48px", sm: "75px", md: "100px" },
                  fontSize: { xs: 38, sm: 65, md: 85, lg: 110 },
                  fontWeight: 700,
                  color: COLORS.WHITE,
                }}
              >
                {HERO_INFO.nameTitle}
              </Typography>
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: 14, sm: 16, md: 18 },
                  color: COLORS.WHITE,
                  mb: 3,
                  maxWidth: { xs: "100%", md: "80%" },
                  ml: "auto",
                }}
              >
                {HERO_INFO.subtitle}
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
