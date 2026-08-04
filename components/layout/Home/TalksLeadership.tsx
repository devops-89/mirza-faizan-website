"use client";

import React from "react";
import { Box, Container, Grid, Typography, Chip, Stack } from "@mui/material";
import Image from "next/image";
import Heading from "../../widgets/Heading";
import { outfit, roboto } from "@/utils/fonts";
import {
  EXPERIENCE_HEADING,
  EXPERIENCE_ITEMS,
  TALKS_BULLETS,
  TALKS_DESCRIPTION,
  TALKS_HEADING,
} from "@/utils/generic";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/ScrollReveal";

import SchoolIcon from "@mui/icons-material/School";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CampaignIcon from "@mui/icons-material/Campaign";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WorkIcon from "@mui/icons-material/Work";
import ScienceIcon from "@mui/icons-material/Science";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";
import PublicIcon from "@mui/icons-material/Public";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";

const TALKS_ICONS = [
  <SchoolIcon key="1" sx={{ color: "#846A4E", fontSize: 24 }} />,
  <FlightTakeoffIcon key="2" sx={{ color: "#846A4E", fontSize: 24 }} />,
  <CampaignIcon key="3" sx={{ color: "#846A4E", fontSize: 24 }} />,
];

const TALKS_TAGS = [
  "Mentorship & Methodology",
  "Aviation & GRIPS",
  "Keynotes & Universities",
];

const TALKS_SUBTEXTS = [
  "Guiding young innovators via Think, Analyze, Ideate, Create & Innovate framework.",
  "Presenting runway safety, avionics, and defense innovations globally.",
  "Lecturing at premier academic institutions and aerospace summits.",
];

const EXPERIENCE_ICONS = [
  <WorkspacePremiumIcon key="1" sx={{ fontSize: 18, color: "#846A4E" }} />,
  <WorkIcon key="2" sx={{ fontSize: 18, color: "#846A4E" }} />,
  <FlightTakeoffIcon key="3" sx={{ fontSize: 18, color: "#846A4E" }} />,
  <ScienceIcon key="4" sx={{ fontSize: 18, color: "#846A4E" }} />,
];

const EXPERIENCE_YEARS = [
  "2016 – Present",
  "Until 2019",
  "Aerospace Era",
  "Defense Research",
];

const CAREER_STATS = [
  {
    icon: <LocalAirportIcon sx={{ fontSize: 22, color: "#846A4E" }} />,
    value: "20+ Years",
    label: "Aerospace & Defense Leadership",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 22, color: "#846A4E" }} />,
    value: "15+ Patents",
    label: "Global Safety Innovations",
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 22, color: "#846A4E" }} />,
    value: "200+ Inventors",
    label: "Mentored to Patent Grant",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 22, color: "#846A4E" }} />,
    value: "$3.5M+",
    label: "University Scholarships Secured",
  },
];

const TalksLeadership: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 9, md: 14 },
        backgroundColor: "#FAF9F5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Radial Gradient Mesh */}
      <Box
        sx={{
          position: "absolute",
          top: "-150px",
          right: "-100px",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(132, 106, 78, 0.07) 0%, rgba(250, 249, 245, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-100px",
          left: "-80px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(132, 106, 78, 0.05) 0%, rgba(250, 249, 245, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* ==================== SECTION HEADER ==================== */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{
            mb: { xs: 6, md: 8 },
            alignItems: "stretch",
          }}
        >
          {/* Left Header Title */}
          <Grid size={{ xs: 12, md: 5 }}>
            <ScrollReveal direction="right" delay={0.1}>
              <Box>
                <Chip
                  icon={
                    <AutoAwesomeIcon
                      sx={{
                        fontSize: "14px !important",
                        color: "#846A4E !important",
                      }}
                    />
                  }
                  label="KEYNOTE SPEAKER & INVENTOR"
                  sx={{
                    mb: 2.5,
                    backgroundColor: "#F2EBE1",
                    color: "#735B40",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "1.2px",
                    px: 0.5,
                    height: "28px",
                    borderRadius: "8px",
                    border: "1px solid #E5D9C8",
                    fontFamily: outfit.style.fontFamily,
                  }}
                />
                <Heading label={TALKS_HEADING} width="400px" />
                <Typography
                  sx={{
                    mt: 2,
                    fontFamily: roboto.style.fontFamily,
                    fontSize: { xs: "14px", md: "15px" },
                    color: "#6B6359",
                    lineHeight: 1.7,
                  }}
                >
                  Empowering the next generation of global pioneers through ground-breaking aerospace research, global keynotes, and STEM innovation frameworks.
                </Typography>
              </Box>
            </ScrollReveal>
          </Grid>

          {/* Right Header Highlight Quote Card */}
          <Grid size={{ xs: 12, md: 7 }}>
            <ScrollReveal direction="left" delay={0.15}>
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  p: { xs: 3, md: 4 },
                  borderRadius: "24px",
                  border: "1px solid #EBE3D5",
                  boxShadow: "0 12px 35px rgba(132, 106, 78, 0.07)",
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 16px 45px rgba(132, 106, 78, 0.12)",
                    borderColor: "#D9CBBA",
                  },
                }}
              >
                {/* Decorative Quote Icon Watermark */}
                <FormatQuoteIcon
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 20,
                    fontSize: { xs: 60, md: 80 },
                    color: "#F4EEE5",
                    transform: "rotate(180deg)",
                    zIndex: 0,
                  }}
                />

                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "20px",
                      backgroundColor: "#FAF5EE",
                      border: "1px solid #EBE1D2",
                      mb: 2,
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
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        color: "#846A4E",
                        textTransform: "uppercase",
                      }}
                    >
                      5-Step Innovation Methodology
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: { xs: "14.5px", md: "16px" },
                      lineHeight: "1.75",
                      color: "#2C2825",
                      fontWeight: 400,
                    }}
                  >
                    As the founder of <strong>DiscoverSTEM</strong>, Mirza Faizan regularly guides young innovators using his trademarked 5-step methodology: <em>Think, Analyze, Ideate, Create, and Innovate</em>.
                  </Typography>

                  {/* Impact Quick Stats Banner */}
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1.5, sm: 3 }}
                    sx={{ mt: 3, pt: 2.5, borderTop: "1px dashed #EAE2D5" }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: "10px",
                          backgroundColor: "#F2EBE1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <EmojiEventsIcon sx={{ fontSize: 20, color: "#846A4E" }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: outfit.style.fontFamily,
                            fontSize: "16px",
                            fontWeight: 800,
                            color: "#1F1F1F",
                            lineHeight: 1.1,
                          }}
                        >
                          200+
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: "11.5px",
                            color: "#7A7267",
                          }}
                        >
                          Young Inventors Mentored
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: "10px",
                          backgroundColor: "#F2EBE1",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <SchoolIcon sx={{ fontSize: 20, color: "#846A4E" }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: outfit.style.fontFamily,
                            fontSize: "16px",
                            fontWeight: 800,
                            color: "#1F1F1F",
                            lineHeight: 1.1,
                          }}
                        >
                          $3.5M+
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: "11.5px",
                            color: "#7A7267",
                          }}
                        >
                          University Scholarships
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>

        {/* ==================== BAND 1: TALKS & KEY ENGAGEMENTS ==================== */}
        <Grid
          container
          spacing={{ xs: 6, md: 7 }}
          sx={{ alignItems: "center", mb: { xs: 9, md: 12 } }}
        >
          {/* Left Column: 3 Key Engagement Cards */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  px: 1.2,
                  py: 0.4,
                  borderRadius: "6px",
                  backgroundColor: "#846A4E",
                  color: "#FFFFFF",
                  fontFamily: outfit.style.fontFamily,
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "1px",
                }}
              >
                01
              </Box>
              <Typography
                sx={{
                  fontFamily: outfit.style.fontFamily,
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                  color: "#846A4E",
                  textTransform: "uppercase",
                }}
              >
                Key Engagements & Mentorship
              </Typography>
            </Box>

            <StaggerContainer staggerDelay={0.12} delay={0.2}>
              <Stack spacing={2.5}>
                {TALKS_BULLETS.map((bullet, idx) => (
                  <StaggerItem key={idx} direction="up" distance={20}>
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "20px",
                        p: { xs: 2.5, md: 3 },
                        border: "1px solid #EBE3D5",
                        boxShadow: "0 4px 20px rgba(132, 106, 78, 0.04)",
                        position: "relative",
                        overflow: "hidden",
                        transition: "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 14px 36px rgba(132, 106, 78, 0.12)",
                          borderColor: "#C5B299",
                          "& .talk-icon-box": {
                            backgroundColor: "#846A4E",
                            color: "#FFFFFF",
                            "& svg": { color: "#FFFFFF" },
                          },
                          "& .arrow-icon": {
                            opacity: 1,
                            transform: "translateX(0)",
                          },
                        },
                      }}
                    >
                      {/* Left Accent Strip */}
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: "4px",
                          backgroundColor: "#846A4E",
                          borderRadius: "4px 0 0 4px",
                        }}
                      />

                      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2.5 }}>
                        <Box
                          className="talk-icon-box"
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "14px",
                            backgroundColor: "#F7F2EA",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "all 0.3s ease",
                            border: "1px solid #EBE1D2",
                          }}
                        >
                          {TALKS_ICONS[idx]}
                        </Box>

                        <Box sx={{ flexGrow: 1, pr: 2 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              mb: 0.8,
                              flexWrap: "wrap",
                              gap: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: outfit.style.fontFamily,
                                fontSize: { xs: "17px", md: "19px" },
                                fontWeight: 700,
                                color: "#1F1F1F",
                                lineHeight: 1.3,
                              }}
                            >
                              {bullet.replace("\n", " ")}
                            </Typography>

                            <Chip
                              label={TALKS_TAGS[idx]}
                              size="small"
                              sx={{
                                backgroundColor: "#F2EBE1",
                                color: "#735B40",
                                fontSize: "10.5px",
                                fontWeight: 700,
                                height: "24px",
                                borderRadius: "6px",
                                border: "1px solid #E5D9C8",
                                fontFamily: outfit.style.fontFamily,
                              }}
                            />
                          </Box>

                          <Typography
                            sx={{
                              fontFamily: roboto.style.fontFamily,
                              fontSize: { xs: "13.5px", md: "14px" },
                              color: "#666056",
                              lineHeight: 1.55,
                            }}
                          >
                            {TALKS_SUBTEXTS[idx]}
                          </Typography>
                        </Box>

                        <ArrowForwardIcon
                          className="arrow-icon"
                          sx={{
                            fontSize: 18,
                            color: "#846A4E",
                            opacity: 0,
                            transform: "translateX(-8px)",
                            transition: "all 0.3s ease",
                            alignSelf: "center",
                            display: { xs: "none", sm: "block" },
                          }}
                        />
                      </Box>
                    </Box>
                  </StaggerItem>
                ))}
              </Stack>
            </StaggerContainer>
          </Grid>

          {/* Right Column: Keynote Speaker Photo Frame */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <ScrollReveal direction="scale" delay={0.25} duration={0.8}>
              <Box sx={{ position: "relative" }}>
                {/* Backing Ambient Glow */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "-20px",
                    left: "-20px",
                    right: "-20px",
                    bottom: "-20px",
                    borderRadius: "36px",
                    background:
                      "radial-gradient(circle, rgba(132, 106, 78, 0.15) 0%, rgba(0,0,0,0) 70%)",
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                />

                {/* Main Image Container */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 440, sm: 500, md: 520 },
                    borderRadius: { xs: "28px", md: "36px" },
                    overflow: "hidden",
                    boxShadow: "0 24px 60px rgba(25, 20, 15, 0.16)",
                    border: "1px solid #E5DACB",
                    zIndex: 1,
                    "&:hover img": {
                      transform: "scale(1.04)",
                    },
                  }}
                >
                  <Image
                    src="/images/talk/Mirza-faizan.png"
                    alt="Mirza Faizan - Keynote Speaker & Aerospace Scientist"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                      transition:
                        "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                    priority
                  />

                  {/* Overlay Gradient */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(12,12,12,0.85) 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Top Floating Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      backgroundColor: "rgba(255, 255, 255, 0.92)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.8)",
                      borderRadius: "14px",
                      px: 2,
                      py: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: "#846A4E",
                        boxShadow: "0 0 10px #846A4E",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: outfit.style.fontFamily,
                        fontSize: "12px",
                        fontWeight: 800,
                        color: "#2C251E",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Aviation & Defense Speaker
                    </Typography>
                  </Box>

                  {/* Bottom Glassmorphic Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                      right: 20,
                      backgroundColor: "rgba(18, 16, 14, 0.82)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.16)",
                      borderRadius: "20px",
                      p: { xs: 2, md: 2.5 },
                      color: "#FFFFFF",
                      boxShadow: "0 12px 36px rgba(0, 0, 0, 0.35)",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        mb: 0.8,
                      }}
                    >
                      <Box
                        sx={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          backgroundColor: "rgba(132, 106, 78, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid rgba(229, 209, 184, 0.4)",
                        }}
                      >
                        <CampaignIcon sx={{ fontSize: 18, color: "#F0E1CE" }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: outfit.style.fontFamily,
                            fontSize: "12px",
                            fontWeight: 800,
                            letterSpacing: "1.2px",
                            color: "#E8D3B9",
                            textTransform: "uppercase",
                          }}
                        >
                          GLOBAL KEYNOTE SPEAKER
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.6)",
                          }}
                        >
                          Aerospace & Defense Summits
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: roboto.style.fontFamily,
                        fontSize: { xs: "12.5px", md: "13.5px" },
                        color: "rgba(255, 255, 255, 0.92)",
                        lineHeight: 1.45,
                      }}
                    >
                      Mentored <strong style={{ color: "#F5E4CE" }}>200+ Young Inventors</strong> & generated over <strong style={{ color: "#F5E4CE" }}>$3.5M+</strong> in university scholarships.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>

        {/* ==================== BAND 2: EXPERIENCE & PROFESSIONAL JOURNEY ==================== */}
        <Box>
          <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                px: 1.2,
                py: 0.4,
                borderRadius: "6px",
                backgroundColor: "#846A4E",
                color: "#FFFFFF",
                fontFamily: outfit.style.fontFamily,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "1px",
              }}
            >
              02
            </Box>
            <Typography
              sx={{
                fontFamily: outfit.style.fontFamily,
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "1.5px",
                color: "#846A4E",
                textTransform: "uppercase",
              }}
            >
              Career & Professional Journey
            </Typography>
          </Box>

          <ScrollReveal direction="up" delay={0.1}>
            <Heading label={EXPERIENCE_HEADING} width="360px" />
          </ScrollReveal>

          <Grid
            container
            spacing={{ xs: 5, md: 7 }}
            sx={{ mt: 1, alignItems: "stretch" }}
          >
            {/* Left Column: Career Timeline Items */}
            <Grid size={{ xs: 12, md: 6.5 }}>
              <StaggerContainer staggerDelay={0.12} delay={0.2}>
                <Box
                  sx={{
                    position: "relative",
                    pl: { xs: 3.5, sm: 4.5 },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 14,
                      bottom: 14,
                      left: { xs: "14px", sm: "18px" },
                      width: "3px",
                      background:
                        "linear-gradient(to bottom, #846A4E 0%, #D4C3A3 70%, rgba(132,106,78,0.15) 100%)",
                      borderRadius: "2px",
                    },
                  }}
                >
                  {EXPERIENCE_ITEMS.map((item, idx) => (
                    <StaggerItem key={idx} direction="up" distance={15}>
                      <Box
                        sx={{
                          position: "relative",
                          mb: idx === EXPERIENCE_ITEMS.length - 1 ? 0 : 3.5,
                        }}
                      >
                        {/* Timeline Node Badge */}
                        <Box
                          sx={{
                            position: "absolute",
                            left: { xs: "-35px", sm: "-41px" },
                            top: "4px",
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            backgroundColor: "#FFFFFF",
                            border: "3px solid #846A4E",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(132, 106, 78, 0.2)",
                            zIndex: 2,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: "#846A4E",
                              transform: "scale(1.15)",
                              "& svg": { color: "#FFFFFF" },
                            },
                          }}
                        >
                          {EXPERIENCE_ICONS[idx]}
                        </Box>

                        {/* Card Box */}
                        <Box
                          sx={{
                            backgroundColor: "#FFFFFF",
                            p: { xs: 2.5, md: 3 },
                            borderRadius: "18px",
                            border: "1px solid #EBE3D5",
                            boxShadow: "0 3px 14px rgba(132, 106, 78, 0.04)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              borderColor: "#846A4E",
                              boxShadow: "0 8px 25px rgba(132, 106, 78, 0.1)",
                              backgroundColor: "#FAF7F2",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              mb: 0.8,
                              flexWrap: "wrap",
                              gap: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: outfit.style.fontFamily,
                                fontSize: { xs: "16px", md: "17.5px" },
                                fontWeight: 700,
                                color: "#1F1F1F",
                                lineHeight: 1.3,
                              }}
                            >
                              {item.role}
                            </Typography>

                            <Chip
                              label={EXPERIENCE_YEARS[idx]}
                              size="small"
                              sx={{
                                backgroundColor: "#FAF3E8",
                                color: "#846A4E",
                                fontSize: "10px",
                                fontWeight: 700,
                                height: "22px",
                                borderRadius: "6px",
                                border: "1px solid #EAD8C3",
                                fontFamily: outfit.style.fontFamily,
                              }}
                            />
                          </Box>

                          <Typography
                            sx={{
                              fontFamily: roboto.style.fontFamily,
                              fontSize: { xs: "13px", md: "14px" },
                              color: "#666056",
                              lineHeight: 1.5,
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </StaggerItem>
                  ))}
                </Box>
              </StaggerContainer>
            </Grid>

            {/* Right Column: Aerospace & Innovation Impact Spotlight Card */}
            <Grid size={{ xs: 12, md: 5.5 }}>
              <ScrollReveal direction="up" delay={0.25}>
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "24px",
                    p: { xs: 3, md: 4 },
                    border: "1px solid #EBE3D5",
                    boxShadow: "0 12px 35px rgba(132, 106, 78, 0.06)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.2,
                        mb: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: "12px",
                          backgroundColor: "#F4EFE6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid #E5DACB",
                        }}
                      >
                        <VerifiedIcon sx={{ fontSize: 22, color: "#846A4E" }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: outfit.style.fontFamily,
                            fontSize: "16px",
                            fontWeight: 800,
                            color: "#1F1F1F",
                            lineHeight: 1.2,
                          }}
                        >
                          Aerospace & Innovation Legacy
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: "12px",
                            color: "#7A7267",
                          }}
                        >
                          Milestones & Technical Achievements
                        </Typography>
                      </Box>
                    </Box>

                    {/* 2x2 Impact Stats Grid */}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                        gap: 2,
                        mb: 3,
                      }}
                    >
                      {CAREER_STATS.map((stat, sIdx) => (
                        <Box
                          key={sIdx}
                          sx={{
                            p: 2,
                            borderRadius: "16px",
                            backgroundColor: "#FAF6EF",
                            border: "1px solid #EAE0D0",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Box sx={{ mb: 1 }}>{stat.icon}</Box>
                          <Typography
                            sx={{
                              fontFamily: outfit.style.fontFamily,
                              fontSize: { xs: "18px", md: "20px" },
                              fontWeight: 800,
                              color: "#1F1F1F",
                              lineHeight: 1.1,
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: roboto.style.fontFamily,
                              fontSize: "11.5px",
                              color: "#666056",
                              mt: 0.5,
                              lineHeight: 1.3,
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Core Organizations & Legacy Summary */}
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: "16px",
                        backgroundColor: "#FAF9F5",
                        border: "1px dashed #E0D5C5",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: outfit.style.fontFamily,
                          fontSize: "12px",
                          fontWeight: 700,
                          letterSpacing: "1px",
                          color: "#846A4E",
                          textTransform: "uppercase",
                          mb: 1,
                        }}
                      >
                        Institutional Footprint
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: roboto.style.fontFamily,
                          fontSize: "13px",
                          color: "#554F47",
                          lineHeight: 1.6,
                        }}
                      >
                        Mirza Faizan has led high-impact engineering & defense research at <strong>DRDO</strong>, <strong>Satyam Computers</strong>, <strong>Honeywell</strong>, <strong>Airbus-France</strong>, and <strong>Capgemini</strong>, before dedicating his full focus to training future innovators via <strong>DiscoverSTEM</strong>.
                      </Typography>
                    </Box>
                  </Box>

                  {/* Bottom Inspirational Motto */}
                  <Box
                    sx={{
                      mt: 3,
                      pt: 2.5,
                      borderTop: "1px solid #EBE3D5",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#846A4E",
                        boxShadow: "0 0 8px #846A4E",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: roboto.style.fontFamily,
                        fontSize: "12.5px",
                        fontStyle: "italic",
                        color: "#776F64",
                      }}
                    >
                      “Bridging high-altitude aerospace engineering with grassroots youth innovation.”
                    </Typography>
                  </Box>
                </Box>
              </ScrollReveal>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TalksLeadership;
