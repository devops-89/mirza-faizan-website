"use client";

import React, { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";

export const FooterRevealContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    updateDimensions();
    const timer = setTimeout(updateDimensions, 500); // Re-check after image load

    window.addEventListener("resize", updateDimensions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Track scroll position when approaching bottom of container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });

  // Motion transforms: opacity fade-in, upward translate, & scale reveal
  const opacity = useTransform(scrollYProgress, [0, 0.85], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 0.85], [-50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.85], [0.96, 1]);

  // Only enable reveal effect if we have measured the heights and the footer fits in the screen
  const isReveal = windowHeight > 0 && footerHeight < windowHeight;

  return (
    <Box ref={containerRef} sx={{ position: "relative", minHeight: "100vh" }}>
      <Header />

      {/* Main Content Body */}
      <Box
        component="main"
        sx={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          mb: isReveal ? `${footerHeight}px` : 0,
          boxShadow: isReveal ? "0 20px 50px rgba(0, 0, 0, 0.15)" : "none",
        }}
      >
        {children}
      </Box>

      {/* Footer Container */}
      <Box
        ref={footerRef}
        sx={{
          position: isReveal ? "fixed" : "relative",
          bottom: isReveal ? 0 : "auto",
          left: 0,
          right: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        {isReveal ? (
          <motion.div style={{ opacity, y, scale, width: "100%" }}>
            <Footer />
          </motion.div>
        ) : (
          <Footer />
        )}
      </Box>
    </Box>
  );
};

export default FooterRevealContainer;
