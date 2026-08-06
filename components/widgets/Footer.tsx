"use client";

import React from "react";
import { Box, Container, Typography, IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import NorthIcon from "@mui/icons-material/North";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { outfit, bella } from "@/utils/fonts";
import { FOOTER_SUBTITLE } from "@/utils/generic";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: "https://x.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <svg
        width="18"
        height="18"
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8.932 8.932 0 0 1 12 9a8.932 8.932 0 0 1 7.162 4.44L24 9.5z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l6.5 3.27z" />
      </svg>
    ),
  },
];

const FLOATING_PARTICLES = [
  { size: 3, top: "15%", left: "10%", duration: 4, delay: 0 },
  { size: 2, top: "25%", left: "85%", duration: 5, delay: 1.2 },
  { size: 4, top: "60%", left: "5%", duration: 6, delay: 0.5 },
  { size: 2, top: "75%", left: "90%", duration: 7, delay: 2.5 },
  { size: 3, top: "40%", left: "20%", duration: 5, delay: 1.8 },
  { size: 4, top: "85%", left: "50%", duration: 4.5, delay: 0.7 },
];

const Footer = () => {
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
        position: "relative",
        background:
          "radial-gradient(circle at 50% 100%, #1a1613 0%, #080706 70%, #000000 100%)",
        color: "#ffffff",
        overflow: "hidden",
        pt: { xs: 8, md: 14 },
        pb: { xs: 6, md: 0 },
        borderTop: "1px solid rgba(255,255,255,0.03)",
      }}
    >
      {/* ==================== BACKGROUND ANIMATIONS ==================== */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "800px",
          background:
            "radial-gradient(ellipse at top, rgba(197, 160, 89, 0.08) 0%, rgba(0,0,0,0) 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {FLOATING_PARTICLES.map((particle, pIdx) => (
        <motion.div
          key={pIdx}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: particle.top,
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: "50%",
            backgroundColor: "#E5C483",
            boxShadow: `0 0 ${particle.size * 4}px #E5C483`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}

      {/* ==================== CONTENT CONTAINER ==================== */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          // minHeight: { xs: "70vh", md: "85vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Main Quote */}
        <ScrollReveal direction="up" delay={0.2}>
          <Box
            sx={{
              position: "relative",
              maxWidth: 900,
              mx: "auto",
              textAlign: "center",
              mb: 8,
              px: { xs: 2, md: 4 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Georgia, 'Times New Roman', Times, serif", // Classic elegant serif
                fontSize: { xs: "28px", sm: "36px", md: "40px" },
                fontWeight: 400,
                color: "#EBEBEB",
                textAlign: "center",
                lineHeight: 1.3,
                letterSpacing: "0.5px",
                position: "relative",
                zIndex: 1,
                textShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }}
            >
              “Innovation is not about complex machines; it's about{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background:
                    "linear-gradient(to right, #F5E5C9 0%, #C5A059 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  paddingRight: "4px",
                }}
              >
                simplifying life and saving lives
              </span>
              .”
            </Typography>
            <Typography
              sx={{
                fontFamily: bella.style.fontFamily,
                fontSize: { xs: "32px", sm: "40px", md: "48px" },
                color: "#C5A059",
                textAlign: "center",
                mt: 3,
                py: 1,
                lineHeight: 1.5,
                textShadow: "0 5px 15px rgba(0,0,0,0.3)",
              }}
            >
              - Mirza Faizan
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Social Media Links */}
        <ScrollReveal direction="up" delay={0.3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
              mb: 10,
            }}
          >
            {SOCIAL_LINKS.map((item) => (
              <Tooltip key={item.name} title={item.name} arrow placement="top">
                <motion.div
                  whileHover={{ y: -8, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <IconButton
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      backgroundColor: "transparent",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      color: "#A09A94",
                      transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                      "&:hover": {
                        backgroundColor: "rgba(197, 160, 89, 0.1)",
                        color: "#E5C483",
                        borderColor: "rgba(197, 160, 89, 0.4)",
                        boxShadow: "0 0 30px rgba(197, 160, 89, 0.2)",
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </motion.div>
              </Tooltip>
            ))}
          </Box>
        </ScrollReveal>

        {/* Scroll To Top Button (Minimalist Line) */}
        <ScrollReveal direction="up" delay={0.4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mb: 4,
              cursor: "pointer",
              "&:hover .scroll-arrow": {
                transform: "translateY(-6px)",
                color: "#E5C483",
              },
              "&:hover .scroll-line": {
                height: "40px",
                backgroundColor: "#E5C483",
              },
            }}
            onClick={scrollToTop}
          >
            <NorthIcon
              className="scroll-arrow"
              sx={{
                fontSize: 18,
                color: "#888",
                mb: 1,
                transition: "all 0.3s ease",
              }}
            />
            <Box
              className="scroll-line"
              sx={{
                width: "1px",
                height: "24px",
                backgroundColor: "#444",
                transition: "all 0.3s ease",
              }}
            />
            <Typography
              sx={{
                mt: 1.5,
                fontFamily: outfit.style.fontFamily,
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "2px",
                color: "#666",
                textTransform: "uppercase",
              }}
            >
              Top
            </Typography>
          </Box>
        </ScrollReveal>
      </Container>

      {/* Bottom Globe / Dome Art Graphic */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 1000,
          height: { xs: 150, sm: 220, md: 280 },
          mx: "auto",
          mt: -4,
          pointerEvents: "none",
          zIndex: 0,
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 90%, transparent 100%)",
          "& img": {
            objectFit: "cover",
            objectPosition: "top center",
            filter: "contrast(1.1) brightness(0.9) grayscale(20%)",
            opacity: 0.7,
          },
        }}
      >
        <Image
          src="/images/footer.png"
          alt="Globe Pattern Art"
          fill
          sizes="(max-width: 1200px) 100vw, 1000px"
        />
        {/* Overlay gradient to fade it nicely into the bottom */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #000000 0%, transparent 60%)",
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
