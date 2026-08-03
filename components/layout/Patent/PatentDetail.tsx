"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";
import Link from "next/link";
import { roboto, outfit } from "@/utils/fonts";
import { PatentDetailData } from "@/utils/type";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import PatentSwiperCarousel from "./PatentSwiperCarousel";

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <Box
    sx={{
      display: "flex",
      gap: 2,
      py: 1.4,
      borderBottom: "1px solid rgba(132,106,78,0.1)",
      alignItems: "flex-start",
      justifyContent: "space-between",
    }}
  >
    <Typography
      sx={{
        fontFamily: roboto.style.fontFamily,
        fontSize: "11px",
        fontWeight: 700,
        color: "#888",
        letterSpacing: "0.8px",
        textTransform: "uppercase",
        minWidth: "120px",
        flexShrink: 0,
      }}
    >
      {label}
    </Typography>
    <Typography
      sx={{
        fontFamily: roboto.style.fontFamily,
        fontSize: "13.5px",
        fontWeight: 600,
        color: "#1A1A1A",
        textAlign: "right",
      }}
    >
      {value}
    </Typography>
  </Box>
);

const PatentDetail = ({ patent }: { patent: PatentDetailData }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleImageError = (idx: number) => {
    setFailedImages((prev) => ({ ...prev, [idx]: true }));
  };

  const isGranted = patent.status === "Granted";
  const images =
    patent.images ||
    (patent.imageUrl
      ? [{ title: "FIG. 1 Overview", caption: "Patent drawing overview", url: patent.imageUrl }]
      : []);

  return (
    <Box sx={{ backgroundColor: "#FAFAF8", minHeight: "100vh" }}>
      {/* ─── HERO BANNER ─────────────────────────────────────── */}
      <Box
        sx={{
          backgroundColor: "#111111",
          pt: "120px",
          pb: { xs: 6, md: 8 },
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(132,106,78,0.2)",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse 60% 80% at 85% 50%, rgba(132,106,78,0.22) 0%, transparent 70%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg">
          <ScrollReveal direction="up" delay={0.1}>
            {/* Breadcrumb Navigation */}
            <Stack direction="row" spacing={1.5} sx={{ mb: 3.5, alignItems: "center" }}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.45)",
                    "&:hover": { color: "#C4A882" },
                    transition: "color 0.2s",
                  }}
                >
                  Home
                </Typography>
              </Link>
              <Typography sx={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>/</Typography>
              <Link href="/patent" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.45)",
                    "&:hover": { color: "#C4A882" },
                    transition: "color 0.2s",
                  }}
                >
                  Patents
                </Typography>
              </Link>
              <Typography sx={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>/</Typography>
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#C4A882",
                }}
              >
                {patent.patentNo}
              </Typography>
            </Stack>
          </ScrollReveal>

          <Grid container spacing={{ xs: 3, md: 5 }} sx={{ alignItems: "flex-start" }}>

            <Grid size={{ xs: 12, md: 8 }}>
              {/* Status & Category Chips */}
              <Stack direction="row" spacing={1.5} sx={{ mb: 2.5, flexWrap: "wrap", gap: 1 }}>
                <Chip
                  label={isGranted ? "✓ Granted Patent" : "Pending Application"}
                  sx={{
                    backgroundColor: isGranted ? "#846A4E" : "#333",
                    color: "#FFF",
                    fontFamily: outfit.style.fontFamily,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    height: "26px",
                    borderRadius: "8px",
                    textTransform: "uppercase",
                  }}
                />
                <Chip
                  label={patent.region === "US" ? "🇺🇸 USPTO (United States)" : patent.region}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: outfit.style.fontFamily,
                    fontSize: "11px",
                    fontWeight: 500,
                    height: "26px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                />
                {patent.grantPublicationNo && (
                  <Chip
                    label={`Granted No: ${patent.grantPublicationNo}`}
                    sx={{
                      backgroundColor: "rgba(132,106,78,0.18)",
                      color: "#C4A882",
                      fontFamily: outfit.style.fontFamily,
                      fontSize: "11px",
                      fontWeight: 600,
                      height: "26px",
                      borderRadius: "8px",
                      border: "1px solid rgba(196,168,130,0.3)",
                    }}
                  />
                )}
              </Stack>

              {/* Patent Title */}
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: { xs: "22px", sm: "28px", md: "34px" },
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.25,
                  mb: 2.5,
                  letterSpacing: "-0.4px",
                }}
              >
                {patent.title}
              </Typography>

              {/* Publication / App badge */}
              <Stack direction="row" spacing={2} sx={{ alignItems: "center", flexWrap: "wrap", gap: 1.5 }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "10px",
                    px: 2,
                    py: 0.8,
                  }}
                >
                  <Typography sx={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontWeight: 700 }}>
                    Publication:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: outfit.style.fontFamily,
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#C4A882",
                    }}
                  >
                    {patent.patentNo}
                  </Typography>
                </Box>

                {patent.applicationNumber && (
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "10px",
                      px: 2,
                      py: 0.8,
                    }}
                  >
                    <Typography sx={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontWeight: 700 }}>
                      App No:
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: outfit.style.fontFamily,
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {patent.applicationNumber}
                    </Typography>
                  </Box>
                )}
              </Stack>
            </Grid>

            {/* External Links / Buttons */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={2} sx={{ pt: { xs: 1, md: 4 } }}>
                {patent.googlePatentsUrl && (
                  <Link href={patent.googlePatentsUrl} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1.5,
                        px: 3,
                        py: 1.6,
                        borderRadius: "14px",
                        backgroundColor: "#846A4E",
                        boxShadow: "0 4px 18px rgba(132,106,78,0.3)",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        "&:hover": { backgroundColor: "#6F573E", transform: "translateY(-2px)" },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: roboto.style.fontFamily,
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#FFF",
                        }}
                      >
                        View Official Google Patent ↗
                      </Typography>
                    </Box>
                  </Link>
                )}

                {patent.pdfUrl && (
                  <Link href={patent.pdfUrl} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1.5,
                        px: 3,
                        py: 1.6,
                        borderRadius: "14px",
                        backgroundColor: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        "&:hover": { borderColor: "#C4A882", backgroundColor: "rgba(255,255,255,0.1)", transform: "translateY(-2px)" },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: roboto.style.fontFamily,
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.85)",
                        }}
                      >
                        Download PDF Specification ↓
                      </Typography>
                    </Box>
                  </Link>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── MAIN CONTENT CONTAINER ────────────────────────── */}
      <Container maxWidth="lg" sx={{ pt: { xs: 5, md: 7 }, pb: { xs: 8, md: 12 } }}>
        <Stack spacing={5}>

          {/* TOP SECTION: ABSTRACT + INVENTORS/FILING INFO SIDE-BY-SIDE */}
          <Grid container spacing={{ xs: 3.5, md: 4.5 }} sx={{ alignItems: "flex-start" }}>
            {/* Left: Abstract & Highlights */}
            <Grid size={{ xs: 12, md: 7.5 }}>
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "22px",
                  p: { xs: 3.5, md: 4 },
                  border: "1px solid rgba(132,106,78,0.14)",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#846A4E",
                    mb: 1.2,
                  }}
                >
                  Abstract & Core Invention
                </Typography>
                <Box sx={{ width: 36, height: 2, backgroundColor: "#846A4E", borderRadius: "2px", mb: 2.5 }} />

                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: { xs: "14.5px", md: "16px" },
                    fontWeight: 500,
                    color: "#1F1F1F",
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  {patent.abstract}
                </Typography>

                {/* Innovation Highlights Cards */}
                {patent.summaryHighlights && patent.summaryHighlights.length > 0 && (
                  <Box sx={{ pt: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: roboto.style.fontFamily,
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: "#666",
                        mb: 1.8,
                      }}
                    >
                      Key Technical Features:
                    </Typography>
                    <Stack spacing={1.5}>
                      {patent.summaryHighlights.map((highlight, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            p: 2,
                            backgroundColor: "#FAF8F5",
                            borderRadius: "12px",
                            borderLeft: "3px solid #846A4E",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1.8,
                          }}
                        >
                          <Box
                            sx={{
                              width: 22,
                              height: 22,
                              borderRadius: "50%",
                              backgroundColor: "rgba(132,106,78,0.15)",
                              color: "#846A4E",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "11px",
                              fontWeight: 700,
                              fontFamily: outfit.style.fontFamily,
                              flexShrink: 0,
                              mt: "2px",
                            }}
                          >
                            {idx + 1}
                          </Box>
                          <Typography
                            sx={{
                              fontFamily: roboto.style.fontFamily,
                              fontSize: "13.5px",
                              color: "#2B2B2B",
                              lineHeight: 1.6,
                            }}
                          >
                            {highlight}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                )}
              </Box>
            </Grid>

            {/* Right: Inventors & Filing Metadata */}
            <Grid size={{ xs: 12, md: 4.5 }}>
              <Stack spacing={3}>
                {/* Inventors Card */}
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "22px",
                    p: 3.5,
                    border: "1px solid rgba(132,106,78,0.14)",
                    boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      color: "#846A4E",
                      mb: 2,
                    }}
                  >
                    Inventors ({patent.inventors.length})
                  </Typography>

                  <Grid container spacing={1.2}>
                    {patent.inventors.map((inv, i) => (
                      <Grid size={{ xs: 12, sm: 6, md: 12 }} key={i}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.8,
                            p: 1.2,
                            borderRadius: "10px",
                            backgroundColor: i === 0 ? "rgba(132,106,78,0.06)" : "transparent",
                            border: i === 0 ? "1px solid rgba(132,106,78,0.15)" : "none",
                          }}
                        >
                          <Box
                            sx={{
                              width: 34,
                              height: 34,
                              borderRadius: "50%",
                              backgroundColor: i === 0 ? "#846A4E" : "#EBE7E1",
                              color: i === 0 ? "#FFF" : "#555",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 700,
                              fontSize: "12px",
                              fontFamily: outfit.style.fontFamily,
                              flexShrink: 0,
                            }}
                          >
                            {inv
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: roboto.style.fontFamily,
                                fontSize: "13.5px",
                                fontWeight: i === 0 ? 700 : 500,
                                color: "#1A1A1A",
                              }}
                            >
                              {inv}
                            </Typography>
                            {i === 0 && (
                              <Typography
                                sx={{
                                  fontFamily: roboto.style.fontFamily,
                                  fontSize: "10px",
                                  fontWeight: 600,
                                  color: "#846A4E",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                Lead Inventor
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Filing Metadata */}
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "22px",
                    p: 3.5,
                    border: "1px solid rgba(132,106,78,0.14)",
                    boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      color: "#846A4E",
                      mb: 1,
                    }}
                  >
                    Filing & Authority Info
                  </Typography>

                  {patent.applicationNumber && (
                    <InfoRow label="Application No." value={patent.applicationNumber} />
                  )}
                  {patent.priorityDate && (
                    <InfoRow label="Priority Date" value={patent.priorityDate} />
                  )}
                  {patent.filingDate && (
                    <InfoRow label="Filing Date" value={patent.filingDate} />
                  )}
                  {patent.publicationDate && (
                    <InfoRow label="Published" value={patent.publicationDate} />
                  )}
                  <InfoRow
                    label="Authority"
                    value={patent.region === "US" ? "USPTO (United States)" : patent.region}
                  />
                  <InfoRow label="Legal Status" value={patent.status} />
                </Box>
              </Stack>
            </Grid>
          </Grid>

          {/* FULL WIDTH SECTION 1: PATENT DRAWINGS & FIGURES GALLERY */}
          {images.length > 0 && (
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "22px",
                p: { xs: 3.5, md: 4.5 },
                border: "1px solid rgba(132,106,78,0.14)",
                boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
              }}
            >
              <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#846A4E",
                  }}
                >
                  Patent Drawings & Schematics ({images.length} Figures)
                </Typography>
              </Stack>
              <Box sx={{ width: 36, height: 2, backgroundColor: "#846A4E", borderRadius: "2px", mb: 3 }} />

              {/* Figure Tabs selector */}
              {images.length > 1 && (
                <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}>
                  {images.map((img, idx) => (
                    <Box
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      sx={{
                        px: 2.5,
                        py: 1,
                        borderRadius: "10px",
                        cursor: "pointer",
                        backgroundColor: activeImageIdx === idx ? "#846A4E" : "#F4F0EB",
                        color: activeImageIdx === idx ? "#FFF" : "#555",
                        fontSize: "12.5px",
                        fontWeight: 600,
                        fontFamily: outfit.style.fontFamily,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          backgroundColor: activeImageIdx === idx ? "#846A4E" : "#EBE4DA",
                        },
                      }}
                    >
                      Figure {idx + 1}
                    </Box>
                  ))}
                </Stack>
              )}

              {/* Active Figure Display */}
              <Box
                sx={{
                  backgroundColor: "#F9F9F8",
                  borderRadius: "18px",
                  p: { xs: 2.5, md: 4 },
                  border: "1px solid #EBE7E1",
                  textAlign: "center",
                }}
              >
                {!failedImages[activeImageIdx] && images[activeImageIdx]?.url ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={images[activeImageIdx].url}
                    alt=""
                    onError={() => handleImageError(activeImageIdx)}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "580px",
                      objectFit: "contain",
                      borderRadius: "10px",
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      py: 5,
                      px: 3,
                      borderRadius: "14px",
                      backgroundColor: "#161B22",
                      color: "#FFFFFF",
                      border: "1px dashed rgba(196,168,130,0.4)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        backgroundColor: "rgba(132,106,78,0.2)",
                        border: "1px solid #846A4E",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C4A882"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                        <line x1="9" y1="21" x2="9" y2="9" />
                        <circle cx="15" cy="15" r="2" />
                      </svg>
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: outfit.style.fontFamily,
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#C4A882",
                      }}
                    >
                      USPTO Official Technical Blueprint Schematic
                    </Typography>
                    {patent.googlePatentsUrl && (
                      <Link href={patent.googlePatentsUrl} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                        <Chip
                          label="Open Official Drawing in Google Patents ↗"
                          clickable
                          sx={{
                            backgroundColor: "#846A4E",
                            color: "#FFF",
                            fontFamily: outfit.style.fontFamily,
                            fontWeight: 600,
                            fontSize: "12px",
                            py: 1.8,
                            px: 1,
                            borderRadius: "8px",
                            "&:hover": { backgroundColor: "#6F573E" },
                          }}
                        />
                      </Link>
                    )}
                  </Box>
                )}

                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    mt: 3,
                  }}
                >
                  {images[activeImageIdx]?.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: "13.5px",
                    color: "#666",
                    mt: 1,
                    maxWidth: "760px",
                    mx: "auto",
                    lineHeight: 1.6,
                  }}
                >
                  {images[activeImageIdx]?.caption}
                </Typography>
              </Box>
            </Box>
          )}

          {/* FULL WIDTH SECTION 2: DRAWING REFERENCE NUMERALS GRID */}
          {patent.referenceNumerals && patent.referenceNumerals.length > 0 && (
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "22px",
                p: { xs: 3.5, md: 4.5 },
                border: "1px solid rgba(132,106,78,0.14)",
                boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#846A4E",
                  mb: 1.5,
                }}
              >
                Drawing Reference Numerals
              </Typography>
              <Box sx={{ width: 36, height: 2, backgroundColor: "#846A4E", borderRadius: "2px", mb: 3 }} />

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(4, 1fr)",
                  },
                  gap: 2,
                }}
              >
                {patent.referenceNumerals.map((ref) => (
                  <Box
                    key={ref.num}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.8,
                      p: 1.6,
                      borderRadius: "12px",
                      backgroundColor: "#FAF9F6",
                      border: "1px solid #EBE7E1",
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "8px",
                        backgroundColor: "#846A4E",
                        color: "#FFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "13px",
                        fontFamily: outfit.style.fontFamily,
                        flexShrink: 0,
                      }}
                    >
                      {ref.num}
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: roboto.style.fontFamily,
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#222",
                        lineHeight: 1.35,
                      }}
                    >
                      {ref.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          {/* FULL WIDTH SECTION 3: TABS (PATENT CLAIMS & DETAILED SPECIFICATION) */}
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "22px",
              border: "1px solid rgba(132,106,78,0.14)",
              boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
              overflow: "hidden",
            }}
          >
            <Tabs
              value={activeTab}
              onChange={(_, val) => setActiveTab(val)}
              sx={{
                borderBottom: "1px solid rgba(132,106,78,0.15)",
                backgroundColor: "#FAF9F6",
                px: { xs: 2, md: 4 },
                pt: 1,
                "& .MuiTab-root": {
                  fontFamily: outfit.style.fontFamily,
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "none",
                  color: "#666",
                  py: 2,
                  px: 3,
                  "&.Mui-selected": {
                    color: "#846A4E",
                  },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#846A4E",
                  height: "3px",
                  borderRadius: "3px 3px 0 0",
                },
              }}
            >
              <Tab label={`Patent Claims (${patent.claims?.length || 0})`} />
              <Tab label="Detailed Technical Specification" />
            </Tabs>

            {/* TAB 0: PATENT CLAIMS */}
            {activeTab === 0 && (
              <Box sx={{ p: { xs: 3.5, md: 4.5 } }}>
                {patent.claims && patent.claims.length > 0 ? (
                  <Stack spacing={3}>
                    {patent.claims.map((claim) => (
                      <Box
                        key={claim.num}
                        sx={{
                          p: { xs: 3, md: 3.5 },
                          borderRadius: "16px",
                          backgroundColor: claim.isIndependent ? "#FAF7F2" : "#FFFFFF",
                          border: claim.isIndependent
                            ? "1.5px solid rgba(132,106,78,0.3)"
                            : "1px solid #EBE7E1",
                        }}
                      >
                        <Stack direction="row" spacing={1.5} sx={{ mb: 1.8, alignItems: "center" }}>
                          <Chip
                            label={`Claim ${claim.num}`}
                            size="small"
                            sx={{
                              backgroundColor: claim.isIndependent ? "#846A4E" : "#555",
                              color: "#FFF",
                              fontWeight: 700,
                              fontSize: "11px",
                              fontFamily: outfit.style.fontFamily,
                              borderRadius: "6px",
                            }}
                          />
                          <Chip
                            label={claim.isIndependent ? "Independent Claim" : "Dependent Claim"}
                            size="small"
                            sx={{
                              backgroundColor: claim.isIndependent
                                ? "rgba(132,106,78,0.12)"
                                : "rgba(0,0,0,0.05)",
                              color: claim.isIndependent ? "#846A4E" : "#666",
                              fontWeight: 600,
                              fontSize: "10.5px",
                              fontFamily: roboto.style.fontFamily,
                              borderRadius: "6px",
                            }}
                          />
                        </Stack>

                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: { xs: "14px", md: "15px" },
                            fontWeight: claim.isIndependent ? 500 : 400,
                            color: "#222",
                            lineHeight: 1.85,
                          }}
                        >
                          {claim.text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                ) : (
                  <Typography sx={{ color: "#777", fontStyle: "italic" }}>
                    Detailed patent claims specification available in official USPTO filing.
                  </Typography>
                )}
              </Box>
            )}

            {/* TAB 1: DETAILED SPECIFICATION */}
            {activeTab === 1 && (
              <Box sx={{ p: { xs: 3.5, md: 4.5 } }}>
                {patent.descriptionSections && patent.descriptionSections.length > 0 ? (
                  <Stack spacing={4}>
                    {patent.descriptionSections.map((sec, idx) => (
                      <Box key={idx}>
                        <Typography
                          sx={{
                            fontFamily: outfit.style.fontFamily,
                            fontSize: "16.5px",
                            fontWeight: 700,
                            color: "#846A4E",
                            letterSpacing: "0.5px",
                            mb: 1.5,
                          }}
                        >
                          {sec.heading}
                        </Typography>
                        <Stack spacing={2}>
                          {sec.paragraphs.map((p, pIdx) => (
                            <Typography
                              key={pIdx}
                              sx={{
                                fontFamily: roboto.style.fontFamily,
                                fontSize: "14.5px",
                                color: "#333",
                                lineHeight: 1.8,
                              }}
                            >
                              {p}
                            </Typography>
                          ))}
                        </Stack>
                      </Box>
                    ))}
                  </Stack>
                ) : (
                  <Typography sx={{ color: "#777", fontStyle: "italic" }}>
                    Full technical description available on Google Patents or official USPTO documentation.
                  </Typography>
                )}
              </Box>
            )}
          </Box>

          {/* FULL WIDTH BOTTOM ROW: TIMELINE, CLASSIFICATIONS & PRIOR ART KEYWORDS */}
          <Grid container spacing={3.5} sx={{ alignItems: "stretch" }}>
            {/* Legal Timeline */}
            {patent.legalEvents && patent.legalEvents.length > 0 && (
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    p: 3.5,
                    border: "1px solid rgba(132,106,78,0.14)",
                    boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      color: "#846A4E",
                      mb: 2.5,
                    }}
                  >
                    Patent Legal Timeline
                  </Typography>

                  <Stack spacing={2.2} sx={{ pl: 1 }}>
                    {patent.legalEvents.map((event, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          gap: 2,
                          position: "relative",
                          "&::before":
                            idx < patent.legalEvents!.length - 1
                              ? {
                                  content: '""',
                                  position: "absolute",
                                  left: "5px",
                                  top: "16px",
                                  bottom: "-12px",
                                  width: "2px",
                                  backgroundColor: "rgba(132,106,78,0.2)",
                                }
                              : {},
                        }}
                      >
                        <Box
                          sx={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: event.type === "Grant" ? "#846A4E" : "#D4BFA8",
                            border: "2px solid #FFF",
                            boxShadow: "0 0 0 2px rgba(132,106,78,0.3)",
                            mt: "4px",
                            flexShrink: 0,
                          }}
                        />
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: outfit.style.fontFamily,
                              fontSize: "11px",
                              fontWeight: 700,
                              color: "#846A4E",
                            }}
                          >
                            {event.date}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: roboto.style.fontFamily,
                              fontSize: "12.5px",
                              fontWeight: 500,
                              color: "#222",
                              mt: 0.2,
                            }}
                          >
                            {event.title}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            )}

            {/* Classifications */}
            {patent.classifications && patent.classifications.length > 0 && (
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    p: 3.5,
                    border: "1px solid rgba(132,106,78,0.14)",
                    boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      color: "#846A4E",
                      mb: 2,
                    }}
                  >
                    Classifications (CPC / IPC)
                  </Typography>

                  <Stack spacing={1.8}>
                    {patent.classifications.map((c) => (
                      <Box key={c.code}>
                        <Typography
                          sx={{
                            fontFamily: outfit.style.fontFamily,
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#846A4E",
                          }}
                        >
                          {c.code}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: "12px",
                            color: "#555",
                            lineHeight: 1.4,
                          }}
                        >
                          {c.description}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            )}

            {/* Keywords */}
            {patent.keywords && patent.keywords.length > 0 && (
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    p: 3.5,
                    border: "1px solid rgba(132,106,78,0.14)",
                    boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      color: "#846A4E",
                      mb: 2,
                    }}
                  >
                    Prior Art Keywords
                  </Typography>

                  <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                    {patent.keywords.map((kw) => (
                      <Chip
                        key={kw}
                        label={kw}
                        sx={{
                          fontFamily: roboto.style.fontFamily,
                          fontSize: "11.5px",
                          fontWeight: 500,
                          color: "#4A4A4A",
                          backgroundColor: "#FAF8F5",
                          border: "1px solid #EBE4DA",
                          borderRadius: "8px",
                          height: "28px",
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Grid>
            )}
          </Grid>

        </Stack>
      </Container>

      {/* ─── NEXT/PREV NAVIGATION & SWIPER.JS CAROUSEL ─────────────────── */}
      <PatentSwiperCarousel currentPatentId={patent.id} />
    </Box>
  );
};

export default PatentDetail;
