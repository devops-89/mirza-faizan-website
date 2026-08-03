"use client";

import React, { useRef } from "react";
import { Box, Container, Typography, Stack, Grid, IconButton } from "@mui/material";
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
    (p) => p.id === currentPatentId || p.patentNo?.includes(currentPatentId)
  );

  const safeIndex = currentIndex !== -1 ? currentIndex : 0;
  const prevIndex = (safeIndex - 1 + ALL_PATENTS.length) % ALL_PATENTS.length;
  const nextIndex = (safeIndex + 1) % ALL_PATENTS.length;

  const prevPatent = ALL_PATENTS[prevIndex];
  const nextPatent = ALL_PATENTS[nextIndex];

  return (
    <Box
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        backgroundColor: "#FAF8F5",
        borderTop: "1px solid #EBE6DF",
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
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #EBE6DF",
                  borderRadius: "20px",
                  p: { xs: 3, md: 3.5 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: "#846A4E",
                    boxShadow: "0 18px 40px rgba(132, 106, 78, 0.14)",
                    transform: "translateY(-4px)",
                    "& .prev-icon": {
                      transform: "translateX(-6px)",
                      color: "#6F573E",
                    },
                  },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center", mb: 1.5 }}
                >
                  <ArrowBackIcon
                    className="prev-icon"
                    sx={{
                      fontSize: "18px",
                      color: "#846A4E",
                      transition: "all 0.3s ease",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: outfit.style.fontFamily,
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#846A4E",
                      letterSpacing: "1.2px",
                      textTransform: "uppercase",
                    }}
                  >
                    Previous Patent
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: { xs: "15px", md: "17px" },
                    fontWeight: 700,
                    color: "#181818",
                    lineHeight: 1.35,
                    mb: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {prevPatent.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: outfit.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#666666",
                  }}
                >
                  {prevPatent.patentNo} •{" "}
                  {prevPatent.region === "US"
                    ? "🇺🇸 USPTO"
                    : prevPatent.region === "South Africa"
                    ? "🇿🇦 South Africa CIPC"
                    : prevPatent.region}
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
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #EBE6DF",
                  borderRadius: "20px",
                  p: { xs: 3, md: 3.5 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "right",
                  transition: "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: "#846A4E",
                    boxShadow: "0 18px 40px rgba(132, 106, 78, 0.14)",
                    transform: "translateY(-4px)",
                    "& .next-icon": {
                      transform: "translateX(6px)",
                      color: "#6F573E",
                    },
                  },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center", justifyContent: "flex-end", mb: 1.5 }}
                >
                  <Typography
                    sx={{
                      fontFamily: outfit.style.fontFamily,
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#846A4E",
                      letterSpacing: "1.2px",
                      textTransform: "uppercase",
                    }}
                  >
                    Next Patent
                  </Typography>
                  <ArrowForwardIcon
                    className="next-icon"
                    sx={{
                      fontSize: "18px",
                      color: "#846A4E",
                      transition: "all 0.3s ease",
                    }}
                  />
                </Stack>

                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: { xs: "15px", md: "17px" },
                    fontWeight: 700,
                    color: "#181818",
                    lineHeight: 1.35,
                    mb: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {nextPatent.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: outfit.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#666666",
                  }}
                >
                  {nextPatent.patentNo} •{" "}
                  {nextPatent.region === "US"
                    ? "🇺🇸 USPTO"
                    : nextPatent.region === "South Africa"
                    ? "🇿🇦 South Africa CIPC"
                    : nextPatent.region}
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
                    style={{ textDecoration: "none", height: "100%", display: "block" }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "20px",
                        border: "1px solid #EBE6DF",
                        overflow: "hidden",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)",
                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
                        "&:hover": {
                          transform: "translateY(-6px)",
                          borderColor: "#846A4E",
                          boxShadow: "0 18px 40px rgba(132, 106, 78, 0.14)",
                          "& .slide-arrow": {
                            transform: "translateX(4px)",
                            color: "#6F573E",
                          },
                        },
                      }}
                    >
                      {/* Image or Card Header */}
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: "175px",
                          backgroundColor: "#161616",
                          flexShrink: 0,
                          overflow: "hidden",
                        }}
                      >
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          <Box
                            sx={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background:
                                "radial-gradient(circle at 50% 50%, #2A2520 0%, #141414 70%)",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: outfit.style.fontFamily,
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "#E5D1B8",
                                letterSpacing: "1px",
                              }}
                            >
                              {item.id}
                            </Typography>
                          </Box>
                        )}

                        {/* Country Flag Badge */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            backgroundColor: "rgba(18, 18, 18, 0.85)",
                            backdropFilter: "blur(8px)",
                            px: 1.2,
                            py: 0.4,
                            borderRadius: "6px",
                            border: "1px solid rgba(229, 209, 184, 0.35)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: outfit.style.fontFamily,
                              fontSize: "10px",
                              fontWeight: 700,
                              color: "#E5D1B8",
                            }}
                          >
                            {regionBadge}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Card Body */}
                      <Box
                        sx={{
                          p: 3,
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: outfit.style.fontFamily,
                              fontSize: "11px",
                              fontWeight: 700,
                              color: "#846A4E",
                              letterSpacing: "0.5px",
                              mb: 0.8,
                            }}
                          >
                            {item.patentNo || item.id}
                          </Typography>

                          <Typography
                            sx={{
                              fontFamily: roboto.style.fontFamily,
                              fontSize: "15px",
                              fontWeight: 700,
                              color: "#181818",
                              lineHeight: 1.35,
                              mb: 1.2,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              height: "40px",
                            }}
                          >
                            {item.title}
                          </Typography>

                          {item.description && (
                            <Typography
                              sx={{
                                fontFamily: roboto.style.fontFamily,
                                fontSize: "12.5px",
                                color: "#666666",
                                lineHeight: 1.5,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                height: "38px",
                              }}
                            >
                              {item.description}
                            </Typography>
                          )}
                        </Box>

                        <Stack
                          direction="row"
                          spacing={0.5}
                          sx={{
                            alignItems: "center",
                            mt: 2.5,
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
                              fontSize: "14px",
                              color: "#846A4E",
                              transition: "all 0.3s ease",
                            }}
                          />
                        </Stack>
                      </Box>
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
