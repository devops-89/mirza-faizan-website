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
            {subtitle} ({patents.length} Patents)
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 2.5, sm: 3, md: 3.5 }}
        rowSpacing={{ xs: 3, sm: 3.5, md: 4 }}
      >
        {patents.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id} sx={{ display: "flex" }}>
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
                p: { xs: 3, md: 3.5 },
                background: "linear-gradient(145deg, #FFFFFF 0%, #FAF8F5 100%)",
                borderRadius: "22px",
                border: "1px solid #EBE6DF",
                height: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
                transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "5px",
                  height: "100%",
                  backgroundColor: "#846A4E",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                },
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  transform: "translateY(-6px)",
                  boxShadow: "0 18px 40px rgba(132, 106, 78, 0.15)",
                  borderColor: "#D3C7B5",
                  "&::before": {
                    opacity: 1,
                  },
                },
              }}
            >
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Header Row: Patent ID Badge & Status Pill */}
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2.2,
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "rgba(132, 106, 78, 0.08)",
                      px: 1.4,
                      py: 0.6,
                      borderRadius: "8px",
                      border: "1px solid rgba(132, 106, 78, 0.18)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: outfit.style.fontFamily,
                        fontSize: { xs: "11.5px", md: "12.5px" },
                        fontWeight: 700,
                        color: "#846A4E",
                        letterSpacing: "0.4px",
                      }}
                    >
                      {item.patentNo}
                    </Typography>
                  </Box>

                  <Chip
                    label={item.status}
                    size="small"
                    sx={{
                      backgroundColor:
                        item.status === "Granted" ? "#846A4E" : "#1A1A1A",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: "10px",
                      letterSpacing: "0.5px",
                      fontFamily: outfit.style.fontFamily,
                      height: "22px",
                      borderRadius: "6px",
                      textTransform: "uppercase",
                      px: 0.5,
                    }}
                  />
                </Stack>

                {/* Patent Title */}
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: { xs: "15px", md: "16.5px" },
                    fontWeight: 600,
                    color: "#181818",
                    lineHeight: 1.4,
                    letterSpacing: "-0.1px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.title}
                </Typography>

                {/* Patent Description */}
                {item.description && (
                  <Typography
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: { xs: "12.5px", md: "13.5px" },
                      fontWeight: 400,
                      color: "#666666",
                      lineHeight: 1.5,
                      mt: 1.5,
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

              {/* Footer: View details */}
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#846A4E",
                  letterSpacing: "0.3px",
                  mt: 2.5,
                }}
              >
                View Details →
              </Typography>
            </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const PatentsList = () => {
  const [activeTab, setActiveTab] = useState<"ALL" | "US" | "SA" | "PENDING">(
    "ALL",
  );

  const totalPatentsCount =
    US_PATENTS_GRANTED.length +
    SOUTH_AFRICA_PATENTS_GRANTED.length +
    PATENTS_PENDING.length;

  const patentsDataMap: Record<"US" | "SA" | "PENDING", PatentItem[]> = {
    US: US_PATENTS_GRANTED as PatentItem[],
    SA: SOUTH_AFRICA_PATENTS_GRANTED as PatentItem[],
    PENDING: PATENTS_PENDING as PatentItem[],
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header Controls & Filter Bar */}
      <Box sx={{ mb: { xs: 5, md: 7 } }}>
        <Grid
          container
          spacing={3}
          sx={{ alignItems: "center", mb: { xs: 3, md: 4 } }}
        >
          <Grid size={12}>
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
        </Grid>

        {/* Filter Category Tabs */}
        <Grid container spacing={1.2}>
          {[
            { key: "ALL", label: `All Patents (${totalPatentsCount})` },
            { key: "US", label: `US Granted (${US_PATENTS_GRANTED.length})` },
            {
              key: "SA",
              label: `South Africa (${SOUTH_AFRICA_PATENTS_GRANTED.length})`,
            },
            { key: "PENDING", label: `Pending (${PATENTS_PENDING.length})` },
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

      {/* Patent Sections */}
      {PATENT_SECTIONS_METADATA.map((section) => {
        if (activeTab !== "ALL" && activeTab !== section.id) return null;
        return (
          <PatentGridSection
            key={section.id}
            title={section.title}
            subtitle={section.subtitle}
            patents={patentsDataMap[section.id]}
          />
        );
      })}
    </Container>
  );
};

export default PatentsList;
