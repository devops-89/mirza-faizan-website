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
        // backgroundColor: "#FAF8F5",
        // borderTop: "1px solid #EBE6DF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* ─── PREVIOUS / NEXT QUICK NAVIGATION CARDS ─────────────────────── */}
        <Grid container spacing={3} sx={{ mb: { xs: 8, md: 10 } }}>
          {/* Previous Patent Card */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Link
              href={`/patent/${prevPatent.id}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: { xs: 2, md: 3 },
                  height: "100%",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    "& .prev-icon": {
                      transform: "translateX(-8px)",
                    },
                    "& .nav-title": {
                      color: "#846A4E",
                    },
                  },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center", mb: 1.5 }}
                >
                  <ArrowBackIcon
                    className="prev-icon"
                    sx={{
                      fontSize: "18px",
                      color: "#846A4E",
                      transition:
                        "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: outfit.style.fontFamily,
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#846A4E",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    Previous
                  </Typography>
                </Stack>

                <Typography
                  className="nav-title"
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: { xs: "16px", md: "20px" },
                    fontWeight: 600,
                    color: "#181818",
                    lineHeight: 1.3,
                    transition: "color 0.3s ease",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {prevPatent.title}
                </Typography>
              </Box>
            </Link>
          </Grid>

          {/* Next Patent Card */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Link
              href={`/patent/${nextPatent.id}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "right",
                  p: { xs: 2, md: 3 },
                  height: "100%",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    "& .next-icon": {
                      transform: "translateX(8px)",
                    },
                    "& .nav-title": {
                      color: "#846A4E",
                    },
                  },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{
                    alignItems: "center",
                    justifyContent: "flex-end",
                    mb: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: outfit.style.fontFamily,
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#846A4E",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    Next
                  </Typography>
                  <ArrowForwardIcon
                    className="next-icon"
                    sx={{
                      fontSize: "18px",
                      color: "#846A4E",
                      transition:
                        "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    }}
                  />
                </Stack>

                <Typography
                  className="nav-title"
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: { xs: "16px", md: "20px" },
                    fontWeight: 600,
                    color: "#181818",
                    lineHeight: 1.3,
                    transition: "color 0.3s ease",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {nextPatent.title}
                </Typography>
              </Box>
            </Link>
          </Grid>
        </Grid>

        {/* ─── SWIPER JS CAROUSEL HEADER ───────────────────────────────────── */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            mb: 4,
            gap: 2,
            mt: 20,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: outfit.style.fontFamily,
                fontSize: "11px",
                fontWeight: 700,
                color: "#846A4E",
                letterSpacing: "2px",
                textTransform: "uppercase",
                mb: 0.8,
              }}
            >
              EXPLORE ALL INVENTIONS
            </Typography>
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontSize: { xs: "22px", md: "26px" },
                fontWeight: 700,
                color: "#181818",
              }}
            >
              US & International Patents Showcase
            </Typography>
          </Box>

          {/* Custom Swiper Controls */}
          <Stack direction="row" spacing={1.5}>
            <IconButton
              onClick={() => swiperRef.current?.slidePrev()}
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2D9CC",
                color: "#846A4E",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                "&:hover": {
                  backgroundColor: "#846A4E",
                  borderColor: "#846A4E",
                  color: "#FFFFFF",
                },
                transition: "all 0.25s ease",
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              onClick={() => swiperRef.current?.slideNext()}
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2D9CC",
                color: "#846A4E",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                "&:hover": {
                  backgroundColor: "#846A4E",
                  borderColor: "#846A4E",
                  color: "#FFFFFF",
                },
                transition: "all 0.25s ease",
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
        </Stack>

        {/* ─── SWIPER JS CAROUSEL SLIDER ──────────────────────────────────── */}
        <Box
          sx={{
            "& .swiper": {
              overflow: "visible",
            },
          }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 24,
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
                <SwiperSlide key={item.id} style={{ height: "auto" }}>
                  <Link
                    href={`/patent/${item.id}`}
                    style={{
                      textDecoration: "none",
                      height: "100%",
                      display: "block",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "20px",
                        border: "1px solid #EBE6DF",
                        p: { xs: 2.8, sm: 3.2 },
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        position: "relative",
                        overflow: "hidden",
                        transition:
                          "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)",
                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background:
                            "linear-gradient(90deg, #846A4E 0%, #D4BFA8 50%, #846A4E 100%)",
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                        },
                        "&:hover": {
                          transform: "translateY(-6px)",
                          borderColor: "#846A4E",
                          boxShadow: "0 18px 40px rgba(132, 106, 78, 0.14)",
                          "&::before": {
                            opacity: 1,
                          },
                          "& .slide-arrow": {
                            transform: "translateX(4px)",
                            color: "#6F573E",
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
                        {/* Header Row: Patent ID Badge & Region Badge */}
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 2,
                            flexWrap: "wrap",
                            gap: 1,
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "rgba(132, 106, 78, 0.08)",
                              px: 1.5,
                              py: 0.6,
                              borderRadius: "8px",
                              border: "1px solid rgba(132, 106, 78, 0.18)",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: outfit.style.fontFamily,
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#846A4E",
                                letterSpacing: "0.4px",
                              }}
                            >
                              {item.patentNo || item.id}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              backgroundColor: "#FAF8F5",
                              px: 1.2,
                              py: 0.5,
                              borderRadius: "6px",
                              border: "1px solid #EBE4DA",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: outfit.style.fontFamily,
                                fontSize: "10.5px",
                                fontWeight: 700,
                                color: "#665C52",
                              }}
                            >
                              {regionBadge}
                            </Typography>
                          </Box>
                        </Stack>

                        {/* Patent Title */}
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#181818",
                            lineHeight: 1.4,
                            mb: 1.5,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            height: "45px",
                          }}
                        >
                          {item.title}
                        </Typography>

                        {/* Patent Description */}
                        {item.description && (
                          <Typography
                            sx={{
                              fontFamily: roboto.style.fontFamily,
                              fontSize: "13px",
                              color: "#666666",
                              lineHeight: 1.55,
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              height: "60px",
                              mb: 2,
                            }}
                          >
                            {item.description}
                          </Typography>
                        )}
                      </Box>

                      {/* Footer CTA */}
                      <Stack
                        direction="row"
                        spacing={0.8}
                        sx={{
                          alignItems: "center",
                          pt: 1.8,
                          borderTop: "1px solid #F0EAE1",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: outfit.style.fontFamily,
                            fontSize: "11.5px",
                            fontWeight: 700,
                            color: "#846A4E",
                            letterSpacing: "0.4px",
                            textTransform: "uppercase",
                          }}
                        >
                          View Patent Details
                        </Typography>
                        <ArrowForwardIcon
                          className="slide-arrow"
                          sx={{
                            fontSize: 15,
                            color: "#846A4E",
                            transition: "transform 0.3s ease, color 0.3s ease",
                          }}
                        />
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
