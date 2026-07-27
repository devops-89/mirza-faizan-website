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
import { outfit, roboto } from "@/utils/fonts";
import { FOOTER_QUOTE } from "@/utils/generic";

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
            gap: { xs: 2.5, sm: 4 },
            mb: 4,
          }}
        >
          <IconButton
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            sx={{
              color: "#FFFFFF",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              "&:hover": { opacity: 0.8, transform: "scale(1.1)" },
            }}
          >
            <FacebookIcon sx={{ fontSize: 26 }} />
          </IconButton>

          <IconButton
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            sx={{
              color: "#FFFFFF",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              "&:hover": { opacity: 0.8, transform: "scale(1.1)" },
            }}
          >
            <XIcon sx={{ fontSize: 22 }} />
          </IconButton>

          <IconButton
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            sx={{
              color: "#FFFFFF",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              "&:hover": { opacity: 0.8, transform: "scale(1.1)" },
            }}
          >
            <InstagramIcon sx={{ fontSize: 26 }} />
          </IconButton>

          <IconButton
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{
              color: "#FFFFFF",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              "&:hover": { opacity: 0.8, transform: "scale(1.1)" },
            }}
          >
            <LinkedInIcon sx={{ fontSize: 26 }} />
          </IconButton>

          <IconButton
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google"
            sx={{
              color: "#FFFFFF",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              "&:hover": { opacity: 0.8, transform: "scale(1.1)" },
            }}
          >
            <GoogleIcon sx={{ fontSize: 22 }} />
          </IconButton>

          <IconButton
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            sx={{
              color: "#FFFFFF",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              "&:hover": { opacity: 0.8, transform: "scale(1.1)" },
            }}
          >
            <YouTubeIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>

        {/* Subtitle / Category Label */}
        <Typography
          sx={{
            fontFamily: outfit.style.fontFamily,
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "2.5px",
            color: "rgba(255, 255, 255, 0.75)",
            textAlign: "center",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          DISCOVER NEXT
        </Typography>

        {/* Main Quote Text */}
        <Typography
          sx={{
            fontFamily: outfit.style.fontFamily,
            fontSize: { xs: "17px", sm: "21px", md: "25px" },
            fontWeight: 500,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.45,
            maxWidth: 1100,
            mx: "auto",
            mb: 4,
            px: 2,
            whiteSpace: { md: "nowrap" },
          }}
        >
          {FOOTER_QUOTE}
        </Typography>

        {/* Scroll To Top Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
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
            height: { xs: 110, sm: 140, md: 160 },
            mx: "auto",
            mt: 1,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/footer.png"
            alt="Globe Pattern Art"
            fill
            sizes="(max-width: 1200px) 100vw, 820px"
            style={{ objectFit: "cover", objectPosition: "bottom center" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
