"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import hero from "@/images/hero.jpg";
import { bella, roboto, signika } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { HERO_INFO } from "@/utils/generic";
import CounterCard from "./CounterCard";
import { motion, Variants } from "framer-motion";
import TypewriterInline from "@/components/animation/TypewriterInline";
import ShinyText from "@/components/animation/ShinyText";

const HERO_SUFFIXES = [
  "Technology Visionary shaping the future of aviation safety and AI in aerospace.",
  "Founder of DiscoverSTEM mentoring 200+ young global inventors.",
  "Pioneer of GRIPS runway safety technology recognized by NASA & FAA.",
];

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <Box>
      <Container maxWidth="xl" sx={{ mb: 3, px: { xs: 1.5, sm: 3 } }}>
        <Box
          sx={{
            backgroundImage: `url(${hero.src})`,
            minHeight: { xs: "580px", md: "100vh" },
            width: "100%",
            mt: { xs: 1.5, sm: 3 },
            borderRadius: {
              xs: "0px 0px 45px 45px",
              md: "0px 0px 100px 100px",
            },
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(25, 25, 25, 0.42)",
              minHeight: { xs: "580px", md: "100vh" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              borderRadius: {
                xs: "0px 0px 45px 45px",
                md: "0px 0px 100px 100px",
              },
              pt: { xs: 10, md: 0 },
            }}
          >
            <Container sx={{ textAlign: "right", px: { xs: 2, sm: 3 } }}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants}>
                  <Typography
                    sx={{
                      fontFamily: bella.style.fontFamily,
                      fontSize: { xs: 72, sm: 130, md: 170, lg: 210 },
                      color: COLORS.WHITE,
                      lineHeight: { xs: "70px", sm: "110px", md: "150px" },
                    }}
                  >
                    {HERO_INFO.greeting}
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    sx={{
                      fontFamily: signika.style.fontFamily,
                      lineHeight: { xs: "48px", sm: "75px", md: "100px" },
                      fontSize: { xs: 38, sm: 65, md: 85, lg: 110 },
                      fontWeight: 700,
                      color: COLORS.WHITE,
                    }}
                  >
                    {HERO_INFO.meetTitle}
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography
                    sx={{
                      fontFamily: signika.style.fontFamily,
                      lineHeight: { xs: "48px", sm: "75px", md: "100px" },
                      fontSize: { xs: 38, sm: 65, md: 85, lg: 110 },
                      fontWeight: 700,
                      color: COLORS.WHITE,
                    }}
                  >
                    <ShinyText text={HERO_INFO.nameTitle} speed={3.5} shimmerColor="#FFFFFF" />
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <TypewriterInline
                    prefixTitles={["Aerospace Scientist", "Inventor"]}
                    suffixes={HERO_SUFFIXES}
                    typingSpeed={50}
                    deletingSpeed={22}
                    pauseDuration={2500}
                  />
                </motion.div>
              </motion.div>
            </Container>
            <CounterCard />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;

