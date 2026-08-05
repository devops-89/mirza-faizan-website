import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { motion } from "framer-motion";
import { outfit, roboto } from "@/utils/fonts";

interface PatentEmptyStateProps {
  searchQuery: string;
  onClear: () => void;
}

export const PatentEmptyState = ({ searchQuery, onClear }: PatentEmptyStateProps) => {
  return (
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
        <SearchOffIcon
          sx={{ fontSize: 48, color: "#846A4E", opacity: 0.7, mb: 1.5 }}
        />
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
          No patent matched &ldquo;{searchQuery}&rdquo;. Try adjusting your
          search query or reset the filter.
        </Typography>
        <Button
          onClick={onClear}
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
  );
};
