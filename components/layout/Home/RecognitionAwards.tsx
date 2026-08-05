"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Heading from "../../widgets/Heading";
import { bella, roboto, outfit } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import {
  RECOGNITION_AUTHOR,
  RECOGNITION_BULLETS,
  RECOGNITION_HEADING,
  RECOGNITION_LOGOS,
  RECOGNITION_QUOTE,
} from "@/utils/generic";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/ScrollReveal";

const RecognitionAwards: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        {/* Row 1: Header on Left, Quote & Signature on Right */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: { xs: 3, md: 4 },
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {/* Left: Title & Brown Line */}
          <Grid size={{ xs: 12, md: 5 }}>
            <ScrollReveal direction="right" delay={0.1}>
              <Heading label={RECOGNITION_HEADING} width="300px" />
            </ScrollReveal>
          </Grid>

          {/* Right: Quote & Cursive Signature */}
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "flex-start", md: "flex-end" },
              pt: { xs: 0, md: 1 },
            }}
          >
            <ScrollReveal direction="left" delay={0.15}>
              <Box sx={{ width: "100%", textAlign: { xs: "left", md: "right" } }}>
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontStyle: "italic",
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: "1.6",
                    color: "#2B2B2B",
                    fontWeight: 400,
                    mb: 1,
                    letterSpacing: "-0.2px",
                    whiteSpace: { md: "nowrap" },
                  }}
                >
                  {RECOGNITION_QUOTE}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: bella.style.fontFamily,
                    fontSize: { xs: "34px", md: "42px" },
                    color: "#1F1F1F",
                    lineHeight: 1.1,
                    pr: { xs: 0, md: 0.5 },
                  }}
                >
                  {RECOGNITION_AUTHOR}
                </Typography>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>

        {/* Row 2: Bullet Points List below Header */}
        <StaggerContainer staggerDelay={0.1} delay={0.2}>
          <Box
            component="ul"
            sx={{ mb: { xs: 4, md: 5 }, mt: { xs: 2, md: 3 }, pl: 2, m: 0 }}
          >
            {RECOGNITION_BULLETS.map((bullet, idx) => (
              <StaggerItem key={idx} direction="up" distance={15}>
                <Typography
                  component="li"
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: { xs: "14px", md: "15px" },
                    lineHeight: "1.7",
                    color: "#2C2C2C",
                    fontWeight: 400,
                    mb: 1.2,
                  }}
                >
                  {bullet}
                </Typography>
              </StaggerItem>
            ))}
          </Box>
        </StaggerContainer>

        {/* Brand Logos Swiper Carousel */}
        <ScrollReveal direction="up" delay={0.3}>
          <Typography
            sx={{
              fontFamily: outfit.style.fontFamily,
              fontSize: "14px",
              fontWeight: 700,
              color: "#846A4E",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textAlign: "center",
              mb: { xs: 3, md: 4 },
              mt: { xs: 2, md: 0 }
            }}
          >
            Recognized By
          </Typography>
          <Box
            sx={{
              pt: { xs: 1, md: 2 },
              "& .swiper-wrapper": {
                transitionTimingFunction: "linear !important",
              },
            }}
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              loop={true}
              speed={4000}
              spaceBetween={60}
              slidesPerView={5}
              breakpoints={{
                0: {
                  slidesPerView: 2.2,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 2.8,
                  spaceBetween: 30,
                },
                600: {
                  slidesPerView: 3.5,
                  spaceBetween: 40,
                },
                900: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 60,
                },
              }}
              style={{ width: "100%", padding: "10px 0" }}
            >
              {[
                ...RECOGNITION_LOGOS,
                ...RECOGNITION_LOGOS,
                ...RECOGNITION_LOGOS,
              ].map((logo, index) => (
                <SwiperSlide key={`${logo.id}-${index}`}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: { xs: 65, md: 90 },
                      width: "100%",
                      px: 1,
                    }}
                  >
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={220}
                      height={85}
                      style={{
                        objectFit: "contain",
                        maxHeight:
                          logo.id === "nasa"
                            ? "62px"
                            : logo.id.includes("battelle")
                              ? "32px"
                              : "44px",
                        width: "auto",
                        maxWidth: "100%",
                      }}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
};

export default RecognitionAwards;

