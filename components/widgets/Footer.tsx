"use client";

import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import NorthIcon from "@mui/icons-material/North";
import { outfit } from "@/utils/fonts";
import { FOOTER_QUOTE, FOOTER_SUBTITLE } from "@/utils/generic";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "X",
    url: "https://x.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Google",
    url: "https://google.com",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
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
        <ScrollReveal direction="up" delay={0.1}>
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
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.16, y: -4, rotate: 4 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
              >
                <IconButton
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  sx={{
                    width: { xs: 44, sm: 48, md: 52 },
                    height: { xs: 44, sm: 48, md: 52 },
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.14)",
                    border: "1px solid rgba(255, 255, 255, 0.28)",
                    backdropFilter: "blur(10px)",
                    color: "#FFFFFF",
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    "&:hover": {
                      backgroundColor: "#FFFFFF",
                      color: "#80654A",
                      borderColor: "#FFFFFF",
                      boxShadow: "0 12px 28px rgba(0, 0, 0, 0.22)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>
        </ScrollReveal>

        {/* Subtitle / Category Label */}
        <ScrollReveal direction="up" delay={0.15}>
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
        </ScrollReveal>

        {/* Main Quote Text */}
        <ScrollReveal direction="up" delay={0.2}>
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
        </ScrollReveal>

        {/* Scroll To Top Button */}
        <ScrollReveal direction="scale" delay={0.25}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { xs: 2.5, md: 3 },
            }}
          >
            <motion.div whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
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
                  },
                }}
              >
                <NorthIcon sx={{ fontSize: 18, color: "#80654A" }} />
              </IconButton>
            </motion.div>
          </Box>
        </ScrollReveal>

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

