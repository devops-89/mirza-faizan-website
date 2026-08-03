"use client";

import React, { useRef, useState } from "react";
import { COLORS } from "@/utils/enum";
import { outfit } from "@/utils/fonts";
import { HOME_COUNTERS } from "@/utils/generic";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AnimatedCounter from "@/components/animation/AnimatedCounter";
import { StaggerContainer, StaggerItem } from "@/components/animation/ScrollReveal";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const COUNTER_ICONS = [
  <WorkspacePremiumIcon key="1" sx={{ fontSize: { xs: 22, sm: 28, md: 32 } }} />,
  <SchoolIcon key="2" sx={{ fontSize: { xs: 22, sm: 28, md: 32 } }} />,
  <MonetizationOnIcon key="3" sx={{ fontSize: { xs: 22, sm: 28, md: 32 } }} />,
];

const InteractiveCounterCard: React.FC<{
  counter: (typeof HOME_COUNTERS)[0];
  index: number;
}> = ({ counter, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / rect.height) * 10;
    const rotateY = ((x - centerX) / rect.width) * 10;

    setMousePos({ x, y, isHovered: true });
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }));
    setRotate({ x: 0, y: 0 });
  };

  return (
    <Box
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        perspective: "1000px",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          py: { xs: 2, sm: 3, md: 3.5 },
          px: { xs: 1.5, sm: 2.5 },
          backgroundColor: "rgba(25, 23, 20, 0.65)",
          backdropFilter: "blur(16px)",
          borderRadius: { xs: "20px", sm: "24px", md: "28px" },
          border: mousePos.isHovered
            ? "1px solid rgba(229, 209, 184, 0.65)"
            : "1px solid rgba(255, 255, 255, 0.15)",
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(${
            mousePos.isHovered ? -8 : 0
          }px)`,
          transition: mousePos.isHovered
            ? "transform 0.1s ease-out, border-color 0.3s ease, box-shadow 0.3s ease"
            : "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
          boxShadow: mousePos.isHovered
            ? "0 25px 50px rgba(132, 106, 78, 0.35)"
            : "0 10px 30px rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: "1px",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(229,209,184,0.4) 50%, rgba(132,106,78,0.2) 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
          },
          // Continuous diagonal sheen sweep
          "&::after": {
            content: '""',
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background:
              "linear-gradient(60deg, transparent 40%, rgba(255, 245, 225, 0.12) 50%, transparent 60%)",
            animation: "cardLiquidSheen 5s ease-in-out infinite",
            pointerEvents: "none",
          },
          "@keyframes cardLiquidSheen": {
            "0%": { transform: "translate(-35%, -35%)" },
            "100%": { transform: "translate(35%, 35%)" },
          },
        }}
      >
        {/* Cursor Following Radial Light Spotlight */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,
            opacity: mousePos.isHovered ? 1 : 0,
            transition: "opacity 0.4s ease",
            background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(229, 209, 184, 0.28), transparent 70%)`,
          }}
        />

        <Stack
          direction="column"
          spacing={{ xs: 0.8, md: 1.2 }}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Floating Metallic Icon Badge (TranslateZ: 35px) */}
          <Box
            sx={{
              width: { xs: 38, sm: 44, md: 48 },
              height: { xs: 38, sm: 44, md: 48 },
              borderRadius: "50%",
              backgroundColor: "rgba(132, 106, 78, 0.25)",
              border: "1px solid rgba(229, 209, 184, 0.4)",
              backdropFilter: "blur(8px)",
              color: "#E5D1B8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: mousePos.isHovered
                ? "0 6px 20px rgba(229, 209, 184, 0.4)"
                : "0 4px 12px rgba(0, 0, 0, 0.15)",
              transform: mousePos.isHovered
                ? "translateZ(35px) scale(1.1)"
                : "translateZ(0px)",
              transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            {COUNTER_ICONS[index % COUNTER_ICONS.length]}
          </Box>

          {/* Stat Counter Number with Liquid Gold Gradient (TranslateZ: 25px) */}
          <Typography
            sx={{
              fontFamily: outfit.style.fontFamily,
              fontSize: { xs: 26, sm: 42, lg: 54 },
              lineHeight: 1,
              letterSpacing: "-1px",
              fontWeight: 800,
              backgroundImage:
                "linear-gradient(135deg, #FFFFFF 0%, #F5E6D3 50%, #D4BFA8 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: mousePos.isHovered
                ? "drop-shadow(0 2px 14px rgba(229, 209, 184, 0.6))"
                : "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "baseline",
              gap: 0.2,
              transform: mousePos.isHovered
                ? "translateZ(25px)"
                : "translateZ(0px)",
              transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            <AnimatedCounter value={counter.value} duration={2.2} />
            <Typography
              component="span"
              sx={{
                fontFamily: outfit.style.fontFamily,
                fontSize: "inherit",
                lineHeight: "inherit",
                letterSpacing: "inherit",
                fontWeight: 800,
                color: "inherit",
              }}
            >
              {counter.unit}
            </Typography>
          </Typography>

          {/* Label Text (TranslateZ: 15px) */}
          <Typography
            sx={{
              fontFamily: outfit.style.fontFamily,
              fontSize: { xs: 11.5, sm: 13.5, lg: 15.5 },
              fontWeight: 600,
              lineHeight: "1.3",
              color: "rgba(255, 255, 255, 0.92)",
              textAlign: "center",
              letterSpacing: "0.2px",
              transform: mousePos.isHovered
                ? "translateZ(15px)"
                : "translateZ(0px)",
              transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            {counter.label}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

const CounterCard = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          backgroundColor: "rgba(20, 18, 16, 0.55)",
          borderRadius: { xs: "0px 0px 45px 45px", md: "0px 0px 100px 100px" },
          py: { xs: 3, md: 5 },
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <StaggerContainer staggerDelay={0.15}>
            <Grid
              container
              spacing={{ xs: 1.5, sm: 2.5, md: 3.5 }}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              {HOME_COUNTERS.map((counter, index) => (
                <Grid size={4} key={index}>
                  <StaggerItem direction="up" style={{ height: "100%" }}>
                    <InteractiveCounterCard counter={counter} index={index} />
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default CounterCard;
