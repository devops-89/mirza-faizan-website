"use client";
import { Box, Container } from "@mui/material";
import React from "react";
import { usePathname } from "next/navigation";
import { COLORS } from "@/utils/enum";
import { outfit, roboto } from "@/utils/fonts";

const Header = () => {
  const pathname = usePathname();
  const headerLinks = [
    {
      label: "About",
      url: "/",
    },
    {
      label: "Patents",
      url: "/patents",
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(18, 18, 18, 0.45)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "32px",
          p: "4px",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
        }}
      >
        {headerLinks.map((link, index) => {
          const isActive = pathname === link.url;
          return (
            <Box
              key={index}
              component="a"
              href={link.url}
              sx={{
                color: isActive ? "#000000" : "#FFFFFF",
                backgroundColor: isActive ? "#FFFFFF" : "transparent",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.8px",
                fontFamily: outfit.style.fontFamily,
                textTransform: "uppercase",
                padding: "8px 22px",
                borderRadius: "24px",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
                cursor: "pointer",
                boxShadow: isActive ? "0 2px 8px rgba(0, 0, 0, 0.15)" : "none",
                "&:hover": {
                  color: isActive ? "#000000" : "#FFFFFF",
                  backgroundColor: isActive
                    ? "#FFFFFF"
                    : "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {link.label}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Header;
