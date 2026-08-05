import React from "react";
import { Box, Grid, Typography, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { outfit, roboto } from "@/utils/fonts";
import { FILTER_PORTFOLIO_HEADING } from "@/utils/generic";

interface TabOption {
  key: string;
  label: string;
}

interface PatentFilterBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  activeTab: string;
  setActiveTab: (val: string) => void;
  tabs: TabOption[];
}

export const PatentFilterBar = ({
  searchQuery,
  setSearchQuery,
  activeTab,
  setActiveTab,
  tabs,
}: PatentFilterBarProps) => {
  return (
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
                    <SearchIcon
                      sx={{ color: "#846A4E", fontSize: "20px" }}
                    />
                  </InputAdornment>
                ),
                endAdornment: searchQuery ? (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear search"
                    >
                      <ClearIcon
                        sx={{ color: "#888888", fontSize: "18px" }}
                      />
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
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <Grid size={{ xs: 6, sm: "auto" }} key={tab.key}>
              <Button
                onClick={() => setActiveTab(tab.key)}
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
  );
};
