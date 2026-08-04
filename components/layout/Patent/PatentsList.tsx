"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Stack,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import Heading from "../../widgets/Heading";
import { roboto, outfit } from "@/utils/fonts";
import {
  US_PATENTS_GRANTED,
  SOUTH_AFRICA_PATENTS_GRANTED,
  PATENTS_PENDING,
  FILTER_PORTFOLIO_HEADING,
  PATENT_SECTIONS_METADATA,
} from "@/utils/generic";
import { PatentItem } from "@/utils/type";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PatentGridSection = ({
  title,
  subtitle,
  patents,
}: {
  title: string;
  subtitle: string;
  patents: PatentItem[];
}) => {
  if (patents.length === 0) return null;

  return (
    <Box sx={{ mb: { xs: 7, md: 10 } }}>
      <ScrollReveal direction="up" delay={0.1}>
        <Grid container spacing={3} sx={{ mb: { xs: 3.5, md: 4.5 } }}>
          <Grid size={12}>
            <Heading label={title} width="380px" />
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontSize: { xs: "13.5px", md: "15px" },
                color: "#846A4E",
                fontWeight: 600,
                mt: 1.5,
                letterSpacing: "0.2px",
              }}
            >
              {subtitle} ({patents.length} {patents.length === 1 ? "Patent" : "Patents"})
            </Typography>
          </Grid>
        </Grid>
      </ScrollReveal>

      <StaggerContainer staggerDelay={0.08} delay={0.15}>
        <Grid
          container
          columnSpacing={{ xs: 2.5, sm: 3, md: 3.5 }}
          rowSpacing={{ xs: 3, sm: 3.5, md: 4 }}
        >
          {patents.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id} sx={{ display: "flex" }}>
              <StaggerItem direction="up" distance={25} style={{ width: "100%", display: "flex" }}>
                <Link
                  href={`/patent/${item.id}`}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      p: { xs: 2, md: 2.5 },
                      backgroundColor: "transparent",
                      borderRadius: "0px",
                      border: "none",
                      borderBottom: "1px solid rgba(0,0,0,0.06)",
                      height: "100%",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      position: "relative",
                      transition: "all 0.4s ease",
                      "@keyframes shimmerLine": {
                        "0%": { backgroundPosition: "200% 0" },
                        "100%": { backgroundPosition: "-200% 0" },
                      },
                      "@keyframes pulseArrow": {
                        "0%, 100%": { transform: "translateX(0)" },
                        "50%": { transform: "translateX(3px)" },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -1,
                        left: 0,
                        width: "100%",
                        height: "1.5px",
                        background: "linear-gradient(90deg, transparent, rgba(132, 106, 78, 0.35), transparent)",
                        backgroundSize: "200% 100%",
                        animation: "shimmerLine 3.5s infinite linear",
                        opacity: 0.7,
                      },
                      "& .card-arrow": {
                        animation: "pulseArrow 2s infinite ease-in-out",
                      },
                      "&:hover": {
                        transform: "translateY(-6px)",
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0 12px 30px rgba(132, 106, 78, 0.12)",
                        borderRadius: "16px",
                        borderColor: "transparent",
                        "& .patent-title": {
                          color: "#846A4E",
                        },
                        "& .card-arrow": {
                          animation: "none",
                          transform: "translateX(6px)",
                          color: "#6F573E",
                        },
                        "& .patent-badge": {
                          color: "#846A4E",
                        },
                        "&::after": {
                          opacity: 1,
                          background: "linear-gradient(90deg, transparent, rgba(132, 106, 78, 0.6), transparent)",
                        }
                      },
                    }}
                  >
                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                          alignItems: "center",
                          mb: 2.5,
                          flexWrap: "wrap",
                          gap: 1,
                        }}
                      >
                        <Box
                          className="patent-badge"
                          sx={{
                            fontFamily: outfit.style.fontFamily,
                            fontSize: "11px",
                            fontWeight: 600,
                            color: "#888",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {item.patentNo}
                        </Box>
                        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                          <Box
                            sx={{
                              fontFamily: outfit.style.fontFamily,
                              fontSize: "10px",
                              fontWeight: 700,
                              color: "#846A4E",
                              letterSpacing: "1px",
                              textTransform: "uppercase",
                            }}
                          >
                            {item.region === "US"
                              ? "🇺🇸 US GRANTED"
                              : item.region === "South Africa"
                              ? "🇿🇦 SA GRANTED"
                              : item.region === "International"
                              ? "🌍 PENDING"
                              : "PENDING"}
                          </Box>
                        </Stack>
                      </Stack>

                      {/* Patent Title */}
                      <Typography
                        className="patent-title"
                        sx={{
                          fontFamily: roboto.style.fontFamily,
                          fontSize: { xs: "16px", md: "17.5px" },
                          fontWeight: 700,
                          color: "#181818",
                          lineHeight: 1.38,
                          letterSpacing: "-0.1px",
                          mb: 1.5,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Patent Description */}
                      {item.description && (
                        <Typography
                          sx={{
                            fontFamily: roboto.style.fontFamily,
                            fontSize: { xs: "13px", md: "14px" },
                            fontWeight: 400,
                            color: "#555555",
                            lineHeight: 1.6,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {item.description}
                        </Typography>
                      )}
                    </Box>

                    {/* Footer Row with Interactive Arrow */}
                    <Stack
                      direction="row"
                      spacing={0.8}
                      sx={{
                        alignItems: "center",
                        mt: 3,
                        pt: 2,
                        borderTop: "1px solid #F0EAE1",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: outfit.style.fontFamily,
                          fontSize: "11.5px",
                          fontWeight: 700,
                          color: "#846A4E",
                          letterSpacing: "0.6px",
                          textTransform: "uppercase",
                        }}
                      >
                        Explore Patent Specifications
                      </Typography>
                      <ArrowForwardIcon
                        className="card-arrow"
                        sx={{
                          fontSize: "15px",
                          color: "#846A4E",
                          transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                        }}
                      />
                    </Stack>
                  </Box>
                </Link>
              </StaggerItem>
            </Grid>
          ))}
        </Grid>
      </StaggerContainer>
    </Box>
  );
};

const PatentsList = () => {
  const [activeTab, setActiveTab] = useState<"ALL" | "US" | "SA" | "PENDING">(
    "ALL",
  );
  const [searchQuery, setSearchQuery] = useState("");

  const matchesQuery = (patent: PatentItem, query: string) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase().trim();
    return (
      patent.patentNo.toLowerCase().includes(q) ||
      patent.title.toLowerCase().includes(q) ||
      (patent.description && patent.description.toLowerCase().includes(q)) ||
      (patent.status && patent.status.toLowerCase().includes(q))
    );
  };

  const filteredPatentsDataMap: Record<"US" | "SA" | "PENDING", PatentItem[]> = {
    US: (US_PATENTS_GRANTED as PatentItem[]).filter((p) => matchesQuery(p, searchQuery)),
    SA: (SOUTH_AFRICA_PATENTS_GRANTED as PatentItem[]).filter((p) => matchesQuery(p, searchQuery)),
    PENDING: (PATENTS_PENDING as PatentItem[]).filter((p) => matchesQuery(p, searchQuery)),
  };

  const totalPatentsCount =
    filteredPatentsDataMap.US.length +
    filteredPatentsDataMap.SA.length +
    filteredPatentsDataMap.PENDING.length;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header Controls & Search + Filter Bar */}
      <ScrollReveal direction="up" delay={0.1}>
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Grid
            container
            spacing={2.5}
            sx={{ alignItems: "center", mb: { xs: 3, md: 4 } }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontFamily: outfit.style.fontFamily,
                  fontSize: { xs: "22px", md: "28px" },
                  fontWeight: 700,
                  color: "#181818",
                }}
              >
                {FILTER_PORTFOLIO_HEADING}
              </Typography>
            </Grid>

            {/* Search Input Box */}
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search patent title, number, or keyword..."
                variant="outlined"
                size="small"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "#846A4E", fontSize: "20px" }} />
                      </InputAdornment>
                    ),
                    endAdornment: searchQuery ? (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          onClick={() => setSearchQuery("")}
                          aria-label="Clear search"
                        >
                          <ClearIcon sx={{ color: "#888888", fontSize: "18px" }} />
                        </IconButton>
                      </InputAdornment>
                    ) : null,
                    sx: {
                      backgroundColor: "#FFFFFF",
                      borderRadius: "14px",
                      fontSize: "14px",
                      fontFamily: roboto.style.fontFamily,
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                      border: "1px solid #EBE6DF",
                      "& fieldset": { border: "none" },
                      "&:hover fieldset": { border: "none" },
                      "&.Mui-focused fieldset": { border: "1px solid #846A4E" },
                    },
                  },
                }}
              />
            </Grid>
          </Grid>

          {/* Filter Category Tabs */}
          <Grid container spacing={1.2}>
            {[
              { key: "ALL", label: `All Patents (${totalPatentsCount})` },
              { key: "US", label: `US Granted (${filteredPatentsDataMap.US.length})` },
              {
                key: "SA",
                label: `South Africa (${filteredPatentsDataMap.SA.length})`,
              },
              { key: "PENDING", label: `Pending (${filteredPatentsDataMap.PENDING.length})` },
            ].map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <Grid size={{ xs: 6, sm: "auto" }} key={tab.key}>
                  <Button
                    onClick={() => setActiveTab(tab.key as any)}
                    fullWidth
                    sx={{
                      fontFamily: outfit.style.fontFamily,
                      fontSize: { xs: "11px", sm: "12.5px", md: "13.5px" },
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#FFFFFF" : "#555555",
                      backgroundColor: isActive ? "#846A4E" : "#FAF9F6",
                      border: isActive
                        ? "1px solid #846A4E"
                        : "1px solid #EBE7E1",
                      borderRadius: "12px",
                      px: { xs: 1, sm: 2.2, md: 2.8 },
                      py: { xs: 0.8, sm: 0.8, md: 1 },
                      whiteSpace: "nowrap",
                      textAlign: "center",
                      justifyContent: "center",
                      textTransform: "none",
                      boxShadow: isActive
                        ? "0 4px 14px rgba(132, 106, 78, 0.25)"
                        : "none",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        backgroundColor: isActive ? "#6F573E" : "#FFFFFF",
                        borderColor: "#846A4E",
                        color: isActive ? "#FFFFFF" : "#846A4E",
                      },
                    }}
                  >
                    {tab.label}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </ScrollReveal>

      {/* Empty State when Search Query has no matches */}
      {totalPatentsCount === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            sx={{
              py: 8,
              px: 3,
              textAlign: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              border: "1px solid #EBE6DF",
              boxShadow: "0 6px 20px rgba(0,0,0,0.02)",
            }}
          >
            <SearchOffIcon sx={{ fontSize: 48, color: "#846A4E", opacity: 0.7, mb: 1.5 }} />
            <Typography
              sx={{
                fontFamily: outfit.style.fontFamily,
                fontSize: "20px",
                fontWeight: 700,
                color: "#1A1A1A",
                mb: 1,
              }}
            >
              No Patents Found
            </Typography>
            <Typography
              sx={{
                fontFamily: roboto.style.fontFamily,
                fontSize: "14px",
                color: "#666666",
                mb: 3,
                maxWidth: 450,
                mx: "auto",
              }}
            >
              No patent matched &ldquo;{searchQuery}&rdquo;. Try adjusting your search query or reset the filter.
            </Typography>
            <Button
              onClick={() => {
                setSearchQuery("");
                setActiveTab("ALL");
              }}
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: "#846A4E",
                color: "#FFFFFF",
                borderRadius: "20px",
                px: 3,
                py: 1,
                fontFamily: outfit.style.fontFamily,
                fontWeight: 600,
                textTransform: "none",
                "&:hover": { backgroundColor: "#6F573E" },
              }}
            >
              Clear Search & Show All
            </Button>
          </Box>
        </motion.div>
      ) : (
        /* Patent Sections with AnimatePresence */
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${searchQuery}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {PATENT_SECTIONS_METADATA.map((section) => {
              if (activeTab !== "ALL" && activeTab !== section.id) return null;
              return (
                <PatentGridSection
                  key={section.id}
                  title={section.title}
                  subtitle={section.subtitle}
                  patents={filteredPatentsDataMap[section.id]}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}
    </Container>
  );
};

export default PatentsList;


