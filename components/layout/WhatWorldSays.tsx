"use client";

import React, { useRef } from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import Heading from "../widgets/Heading";
import { outfit, roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import {
  WORLD_SAYS_HEADING,
  WORLD_SAYS_DESCRIPTION,
  TESTIMONIALS,
} from "@/utils/generic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "swiper/css";
import "swiper/css/navigation";

const WhatWorldSays: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Row */}
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
            <Heading label={WORLD_SAYS_HEADING} width="320px" />
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
                maxWidth: 580,
                textAlign: "justify",
              }}
            >
              World has praised <strong>Mr.Mirza Faizan</strong> for his
              exceptional creativity, clear vision, and ability to transform
              ideas into impactful, user-focused digital experiences.
            </Typography>
          </Grid>
        </Grid>

        {/* Content Row: Navigation & Vector on Left, Swiper Carousel on Right */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{ alignItems: "flex-start" }}
        >
          {/* Left Column: Swiper Nav Controls + Decorative Vector */}
          <Grid size={{ xs: 12, md: 2.5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                pt: { xs: 0, md: 2 },
              }}
            >
              {/* Navigation Arrows */}
              <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
                <IconButton
                  onClick={() => swiperRef.current?.slidePrev(600)}
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#8C6F52",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#735A43",
                    },
                    boxShadow: "0 4px 12px rgba(140, 111, 82, 0.25)",
                  }}
                >
                  <ArrowBackIcon fontSize="small" />
                </IconButton>

                <IconButton
                  onClick={() => swiperRef.current?.slideNext(600)}
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#4A3E31",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#362D23",
                    },
                    boxShadow: "0 4px 12px rgba(74, 62, 49, 0.25)",
                  }}
                >
                  <ArrowForwardIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Decorative Vector Arrow */}
              <Box
                sx={{
                  position: "relative",
                  width: 85,
                  height: 65,
                  ml: 9,
                  mt: 4.5,
                  display: { xs: "none", md: "block" },
                }}
              >
                <Image
                  src="/images/worldsays/Vector.png"
                  alt="Decorative Arrow"
                  fill
                  sizes="85px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Swiper Carousel */}
          <Grid size={{ xs: 12, md: 9.5 }} sx={{ overflow: "hidden" }}>
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Autoplay]}
              slidesPerView={1.1}
              spaceBetween={20}
              loop={true}
              speed={600}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.6,
                  spaceBetween: 24,
                },
                900: {
                  slidesPerView: 2.2,
                  spaceBetween: 28,
                },
              }}
              style={{ paddingBottom: "45px", paddingTop: "10px" }}
            >
              {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map(
                (item, index) => (
                  <SwiperSlide
                    key={`${item.id}-${index}`}
                    style={{ height: "auto" }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "12px",
                        pt: 2.5,
                        px: 3,
                        pb: 2.8,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        position: "relative",
                        border: "1px solid #EFEFEF",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 10px 28px rgba(0, 0, 0, 0.06)",
                        },
                      }}
                    >
                      {/* Card Content Top + Body */}
                      <Box>
                        {/* Top Header Row */}
                        <Grid
                          container
                          spacing={1}
                          sx={{
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                          }}
                        >
                          <Grid size={{ xs: 12, sm: 7.5 }}>
                            <Typography
                              sx={{
                                fontFamily: roboto.style.fontFamily,
                                fontSize: { xs: "15px", md: "17px" },
                                fontWeight: 700,
                                color: "#1F1F1F",
                                lineHeight: "1.3",
                                mb: 0.8,
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: roboto.style.fontFamily,
                                fontSize: "13.5px",
                                fontWeight: 500,
                                color: "#846A4E",
                              }}
                            >
                              {item.location}
                            </Typography>
                          </Grid>

                          <Grid
                            size={{ xs: 12, sm: 4.5 }}
                            sx={{
                              display: "flex",
                              flexDirection: { xs: "row", sm: "column" },
                              justifyContent: {
                                xs: "space-between",
                                sm: "flex-end",
                              },
                              alignItems: { xs: "center", sm: "flex-end" },
                              mt: { xs: 1, sm: 0 },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: roboto.style.fontFamily,
                                fontSize: "12px",
                                color: "#9E9E9E",
                                mb: { xs: 0, sm: 0.8 },
                                fontWeight: 400,
                              }}
                            >
                              {item.daysAgo}
                            </Typography>
                            <Box
                              sx={{
                                position: "relative",
                                width: 32,
                                height: 28,
                              }}
                            >
                              <Image
                                src="/images/worldsays/quote.png"
                                alt="Quote mark"
                                fill
                                sizes="32px"
                                style={{ objectFit: "contain" }}
                              />
                            </Box>
                          </Grid>
                        </Grid>

                        {/* Divider Line */}
                        <Box
                          sx={{
                            width: "100%",
                            height: "1px",
                            backgroundColor: "#F0F0F0",
                            my: 1.8,
                          }}
                        />

                        {/* Card Body Quote */}
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: { xs: "13.5px", md: "14.5px" },
                            lineHeight: "1.65",
                            color: "#757575",
                            fontWeight: 400,
                          }}
                        >
                          {item.quote}
                        </Typography>
                      </Box>

                      {/* Bottom Right Decorative Border Graphic */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          width: 30,
                          height: 30,
                          pointerEvents: "none",
                        }}
                      >
                        <Image
                          src="/images/worldsays/Border.png"
                          alt="Border decoration"
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                    </Box>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWorldSays;
