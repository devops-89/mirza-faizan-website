"use client";

import React, { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { outfit, roboto } from "@/utils/fonts";
import {
  US_PATENTS_GRANTED,
  SOUTH_AFRICA_PATENTS_GRANTED,
  PATENTS_PENDING,
} from "@/utils/generic";
import { PatentDetailData } from "@/utils/type";

// Swiper JS Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

// Combine all patents into a master collection
const ALL_PATENTS: PatentDetailData[] = [
  ...(US_PATENTS_GRANTED as PatentDetailData[]),
  ...(SOUTH_AFRICA_PATENTS_GRANTED as PatentDetailData[]),
  ...(PATENTS_PENDING as PatentDetailData[]),
];

interface PatentSwiperCarouselProps {
  currentPatentId: string;
}

export const PatentSwiperCarousel: React.FC<PatentSwiperCarouselProps> = ({
  currentPatentId,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Find index of current patent
  const currentIndex = ALL_PATENTS.findIndex(
    (p) => p.id === currentPatentId || p.patentNo?.includes(currentPatentId),
  );

  const safeIndex = currentIndex !== -1 ? currentIndex : 0;
  const prevIndex = (safeIndex - 1 + ALL_PATENTS.length) % ALL_PATENTS.length;
  const nextIndex = (safeIndex + 1) % ALL_PATENTS.length;

  const prevPatent = ALL_PATENTS[prevIndex];
  const nextPatent = ALL_PATENTS[nextIndex];

  return (
    <Box
      sx={{
        pt: { xs: 8, md: 5 },
        pb: { xs: 8, md: 12 },
        backgroundColor: "#1C1A18", // Dark elegant background, not black
        borderTop: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>

        {/* ─── SWIPER JS CAROUSEL HEADER ───────────────────────────────────── */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "flex-end" },
            mb: 6,
            gap: 3,
            mt: { xs: 12, md: 20 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: outfit.style.fontFamily,
                fontSize: "12px",
                fontWeight: 700,
                color: "#846A4E",
                letterSpacing: "3px",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Explore All Inventions
            </Typography>
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontSize: { xs: "28px", md: "40px" },
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
              }}
            >
              US & International Patents Showcase
            </Typography>
          </Box>

          {/* Custom Swiper Controls */}
          <Stack direction="row" spacing={2}>
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              sx={{
                width: "48px",
                height: "48px",
                backgroundColor: "#FFFFFF",
                color: "#181818",
                boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                "&:hover": {
                  backgroundColor: "#846A4E",
                  color: "#FFFFFF",
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              sx={{
                width: "48px",
                height: "48px",
                backgroundColor: "#FFFFFF",
                color: "#181818",
                boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                "&:hover": {
                  backgroundColor: "#846A4E",
                  color: "#FFFFFF",
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Box
          sx={{
            "& .swiper": {
              overflow: "visible",
            },
            "& .swiper-slide": {
              height: "auto",
            },
          }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {ALL_PATENTS.map((item) => {
              const isUS = item.region === "US";
              const isZA = item.region === "South Africa";
              const regionBadge = isUS
                ? "🇺🇸 US GRANTED"
                : isZA
                  ? "🇿🇦 SOUTH AFRICA"
                  : "PATENT APP";

              return (
                <SwiperSlide key={item.id}>
                  <Link
                    href={`/patent/${item.id}`}
                    style={{
                      textDecoration: "none",
                      display: "block",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "24px",
                        p: { xs: 3, sm: 4 },
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        position: "relative",
                        overflow: "hidden",
                        border: "1px solid rgba(0,0,0,0.04)",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.04)",
                        transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
                          borderColor: "rgba(132, 106, 78, 0.2)",
                          "& .cta-arrow": {
                            backgroundColor: "#181818",
                            color: "#FFFFFF",
                            transform: "translateX(4px)",
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {/* Badges */}
                        <Stack
                          direction="row"
                          spacing={1.5}
                          sx={{ mb: 3, flexWrap: "wrap", gap: 1.5 }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "#F4F4F4",
                              px: 1.8,
                              py: 0.8,
                              borderRadius: "100px",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: outfit.style.fontFamily,
                                fontSize: "11px",
                                fontWeight: 700,
                                color: "#181818",
                                letterSpacing: "0.5px",
                              }}
                            >
                              {item.patentNo || item.id}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              backgroundColor: "#846A4E",
                              px: 1.8,
                              py: 0.8,
                              borderRadius: "100px",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: outfit.style.fontFamily,
                                fontSize: "11px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                letterSpacing: "0.5px",
                              }}
                            >
                              {regionBadge}
                            </Typography>
                          </Box>
                        </Stack>

                        {/* Title */}
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#181818",
                            lineHeight: 1.3,
                            mb: 2,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: "52px",
                          }}
                        >
                          {item.title}
                        </Typography>

                        {/* Description */}
                        {item.description && (
                          <Typography
                            sx={{
                              fontFamily: roboto.style.fontFamily,
                              fontSize: "14px",
                              color: "#666666",
                              lineHeight: 1.6,
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              mb: 4,
                            }}
                          >
                            {item.description}
                          </Typography>
                        )}
                      </Box>

                      {/* Footer CTA */}
                      <Stack
                        direction="row"
                        sx={{
                          alignItems: "center",
                          justifyContent: "space-between",
                          mt: "auto",
                          pt: 3,
                          borderTop: "1px solid #F0F0F0",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: outfit.style.fontFamily,
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#181818",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                          }}
                        >
                          View Details
                        </Typography>
                        <Box
                          className="cta-arrow"
                          sx={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            backgroundColor: "#F4F4F4",
                            color: "#181818",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <ArrowForwardIcon sx={{ fontSize: "16px" }} />
                        </Box>
                      </Stack>
                    </Box>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default PatentSwiperCarousel;
