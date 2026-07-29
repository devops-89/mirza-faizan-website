"use client";

import React, { useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Chip,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Heading from "../../widgets/Heading";
import { outfit, roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import {
  WORLD_SAYS_HEADING,
  WORLD_SAYS_DESCRIPTION,
  TESTIMONIALS,
} from "@/utils/generic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WhatWorldSays: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 14 },
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 50%, #F5F0EA 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Ambient Circles */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(132, 106, 78, 0.06) 0%, rgba(255, 255, 255, 0) 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(132, 106, 78, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Category Pill Tag */}
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
              GLOBAL ENDORSEMENTS & ACCOLADES
            </Typography>
          </Box>
        </Box>

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
            <Heading label={WORLD_SAYS_HEADING} width="340px" />
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontSize: { xs: "14.5px", md: "16px" },
                lineHeight: 1.7,
                color: "#524B42",
                fontWeight: 400,
                maxWidth: 540,
                textAlign: { xs: "left", md: "right" },
                mb: { xs: 2, md: 3 },
              }}
            >
              {WORLD_SAYS_DESCRIPTION}
            </Typography>

            {/* Navigation Buttons Row */}
            <Stack direction="row" spacing={1.5}>
              <IconButton
                aria-label="Previous Testimonial"
                onClick={() => swiperRef.current?.slidePrev(600)}
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#FFFFFF",
                  color: "#846A4E",
                  border: "1.5px solid #EBE6DF",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  "&:hover": {
                    backgroundColor: "#846A4E",
                    color: "#FFFFFF",
                    borderColor: "#846A4E",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(132, 106, 78, 0.3)",
                  },
                }}
              >
                <ArrowBackIcon fontSize="small" />
              </IconButton>

              <IconButton
                aria-label="Next Testimonial"
                onClick={() => swiperRef.current?.slideNext(600)}
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#846A4E",
                  color: "#FFFFFF",
                  border: "1.5px solid #846A4E",
                  boxShadow: "0 4px 16px rgba(132, 106, 78, 0.25)",
                  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  "&:hover": {
                    backgroundColor: "#6F573E",
                    borderColor: "#6F573E",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(111, 87, 62, 0.35)",
                  },
                }}
              >
                <ArrowForwardIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Swiper Carousel Section */}
        <Box
          sx={{
            position: "relative",
            overflow: "visible",
            "& .swiper": { overflow: "visible !important" },
            "& .swiper-wrapper": { overflow: "visible !important" },
          }}
        >
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            speed={700}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.6,
                spaceBetween: 24,
              },
              960: {
                slidesPerView: 2.3,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 2.7,
                spaceBetween: 32,
              },
            }}
            style={{ paddingBottom: "60px", paddingTop: "16px" }}
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
                      borderRadius: "20px",
                      p: { xs: 3, md: 3.5 },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      position: "relative",
                      border: "1px solid #EBE6DF",
                      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
                      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "4px",
                        height: "100%",
                        backgroundColor: "#846A4E",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 16px 36px rgba(132, 106, 78, 0.12)",
                        borderColor: "#D8CDBF",
                        "&::before": {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    {/* Top Quote Icon Header */}
                    <Box sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 38,
                          height: 38,
                          borderRadius: "10px",
                          backgroundColor: "rgba(132, 106, 78, 0.08)",
                          border: "1px solid rgba(132, 106, 78, 0.16)",
                          color: "#846A4E",
                        }}
                      >
                        <FormatQuoteIcon sx={{ fontSize: "22px" }} />
                      </Box>
                    </Box>

                    {/* Main Quote Text */}
                    <Typography
                      sx={{
                        fontFamily: roboto.style.fontFamily,
                        fontSize: { xs: "14.5px", md: "15.5px" },
                        lineHeight: 1.65,
                        color: "#2C2621",
                        fontWeight: 400,
                        flex: 1,
                        mb: 2.5,
                      }}
                    >
                      &ldquo;{item.quote}&rdquo;
                    </Typography>

                    {/* Footer Row: Endorser Details */}
                    <Box
                      sx={{
                        pt: 2,
                        borderTop: "1px solid #F0EAE1",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: outfit.style.fontFamily,
                          fontSize: { xs: "15px", md: "16px" },
                          fontWeight: 700,
                          color: "#181818",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={0.5}
                        sx={{ alignItems: "center", mt: 0.6 }}
                      >
                        <LocationOnIcon
                          sx={{ fontSize: "14px", color: "#846A4E" }}
                        />
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#846A4E",
                          }}
                        >
                          {item.location}
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default WhatWorldSays;

