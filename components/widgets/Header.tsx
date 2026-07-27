"use client";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { usePathname } from "next/navigation";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";

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
    <Box>
      <Container maxWidth="xs">
        <Grid container>
          <Grid
            size={2}
            sx={{
              position: "fixed",
              top: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1000,
            }}
          >
            <Box
              sx={{
                width: "auto",
                minWidth: 290,
                height: 56,
                borderRadius: "36px",
                backgroundColor: "rgba(25, 25, 25, 0.4)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                px: 1,
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
                      color: isActive ? COLORS.BLACK : COLORS.WHITE,
                      backgroundColor: isActive ? COLORS.WHITE : "transparent",
                      textDecoration: "none",
                      fontSize: "23px",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontFamily: roboto.style.fontFamily,
                      lineHeight: "normal",
                      textTransform: "uppercase",
                      padding: "4px 24px",
                      borderRadius: "36px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        opacity: isActive ? 1 : 0.8,
                      },
                    }}
                  >
                    {link.label}
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
