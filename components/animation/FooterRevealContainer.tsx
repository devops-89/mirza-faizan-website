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
  const [footerHeight, setFooterHeight] = useState<number>(450);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    updateHeight();
    const timer = setTimeout(updateHeight, 500); // Re-check after image load

    window.addEventListener("resize", updateHeight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateHeight);
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

  return (
    <Box ref={containerRef} sx={{ position: "relative", minHeight: "100vh" }}>
      <Header />

      {/* Main Content Body (Layered above footer with zIndex: 2) */}
      <Box
        component="main"
        sx={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "#FFFFFF",
          mb: `${footerHeight}px`,
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
        }}
      >
        {children}
      </Box>

      {/* Fixed Under-Page Reveal Footer (zIndex: 1) */}
      <Box
        ref={footerRef}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        <motion.div style={{ opacity, y, scale, width: "100%" }}>
          <Footer />
        </motion.div>
      </Box>
    </Box>
  );
};

export default FooterRevealContainer;
