"use client";
import { Box } from "@mui/material";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { outfit } from "@/utils/fonts";
import { motion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const headerLinks = [
    {
      label: "About",
      url: "/",
    },
    {
      label: "Patents",
      url: "/patent",
    },
  ];

  return (
    <motion.div
      initial={{ y: -60, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: "fixed",
        top: "24px",
        left: "50%",
        zIndex: 1000,
        width: "auto",
        maxWidth: 380,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(18, 18, 18, 0.55)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "32px",
          p: "4px",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
          position: "relative",
        }}
      >
        {headerLinks.map((link, index) => {
          const isActive =
            pathname === link.url || (link.url === "/patent" && pathname.startsWith("/patent"));

          return (
            <Box
              key={index}
              component={Link}
              href={link.url}
              sx={{
                position: "relative",
                color: isActive ? "#000000" : "#FFFFFF",
                textDecoration: "none",
                fontSize: { xs: "12px", sm: "13px" },
                fontWeight: 700,
                letterSpacing: "0.8px",
                fontFamily: outfit.style.fontFamily,
                textTransform: "uppercase",
                padding: { xs: "6px 18px", sm: "8px 24px" },
                borderRadius: "24px",
                transition: "color 0.25s ease",
                whiteSpace: "nowrap",
                cursor: "pointer",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  color: isActive ? "#000000" : "#FFFFFF",
                  opacity: isActive ? 1 : 0.85,
                },
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeHeaderPill"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#FFFFFF",
                    borderRadius: "24px",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                    zIndex: -1,
                  }}
                />
              )}
              {link.label}
            </Box>
          );
        })}
      </Box>
    </motion.div>
  );
};

export default Header;

