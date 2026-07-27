"use client";

import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import NorthIcon from "@mui/icons-material/North";
import { outfit } from "@/utils/fonts";
import { FOOTER_QUOTE, FOOTER_SUBTITLE } from "@/utils/generic";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: <FacebookIcon sx={{ fontSize: { xs: 21, md: 26 } }} />,
  },
  {
    name: "X",
    url: "https://x.com",
    icon: <XIcon sx={{ fontSize: { xs: 18, md: 22 } }} />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <InstagramIcon sx={{ fontSize: { xs: 21, md: 26 } }} />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: <LinkedInIcon sx={{ fontSize: { xs: 21, md: 26 } }} />,
  },
  {
    name: "Google",
    url: "https://google.com",
    icon: <GoogleIcon sx={{ fontSize: { xs: 18, md: 22 } }} />,
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: <YouTubeIcon sx={{ fontSize: { xs: 23, md: 28 } }} />,
  },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#80654A",
        color: "#FFFFFF",
        pt: { xs: 6, md: 8 },
        pb: 0,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Social Media Icons Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 1.5, sm: 3.5, md: 4 },
            mb: { xs: 3, md: 4 },
          }}
        >
          {SOCIAL_LINKS.map((item) => (
            <IconButton
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              sx={{
                color: "#FFFFFF",
                p: { xs: 0.8, md: 1 },
                transition: "transform 0.2s ease, opacity 0.2s ease",
                "&:hover": { opacity: 0.8, transform: "scale(1.1)" },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>

        {/* Subtitle / Category Label */}
        <Typography
          sx={{
            fontFamily: outfit.style.fontFamily,
            fontSize: { xs: "11px", md: "12px" },
            fontWeight: 600,
            letterSpacing: { xs: "2px", md: "2.5px" },
            color: "rgba(255, 255, 255, 0.75)",
            textAlign: "center",
            textTransform: "uppercase",
            mb: { xs: 1.5, md: 2 },
          }}
        >
          {FOOTER_SUBTITLE}
        </Typography>

        {/* Main Quote Text */}
        <Typography
          sx={{
            fontFamily: outfit.style.fontFamily,
            fontSize: { xs: "16px", sm: "20px", md: "25px" },
            fontWeight: 500,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: { xs: 1.5, md: 1.45 },
            maxWidth: { xs: "100%", md: 1100 },
            mx: "auto",
            mb: { xs: 3, md: 4 },
            px: { xs: 1.5, md: 2 },
            whiteSpace: { md: "nowrap" },
          }}
        >
          {FOOTER_QUOTE}
        </Typography>

        {/* Scroll To Top Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 2.5, md: 3 },
          }}
        >
          <IconButton
            onClick={scrollToTop}
            aria-label="Scroll to top"
            sx={{
              width: 44,
              height: 30,
              borderRadius: "20px",
              backgroundColor: "#FFFFFF",
              color: "#80654A",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#F7F5F2",
                transform: "translateY(-3px)",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <NorthIcon sx={{ fontSize: 18, color: "#80654A" }} />
          </IconButton>
        </Box>

        {/* Bottom Globe / Dome Art Graphic */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 820,
            height: { xs: 110, sm: 180, md: 160 },
            mx: "auto",
            mt: 1,
            pointerEvents: "none",
            "& img": {
              objectFit: { xs: "contain !important", md: "cover !important" },
              objectPosition: "bottom center !important",
            },
          }}
        >
          <Image
            src="/images/footer.png"
            alt="Globe Pattern Art"
            fill
            sizes="(max-width: 1200px) 100vw, 820px"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
