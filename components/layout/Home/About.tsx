import { COLORS } from "@/utils/enum";
import { roboto, bella } from "@/utils/fonts";
import { ABOUT_INFO } from "@/utils/generic";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Heading from "../../widgets/Heading";

const About = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 5 }}>

          {/* Section Heading */}
          <Grid size={12}>
            <Heading label={"About the \n Visionary Inventor"} width="360px" />
          </Grid>

          {/* Name + Designation inline */}
          <Grid size={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                gap: { xs: 0.5, sm: 2.5 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: bella.style.fontFamily,
                  fontSize: { xs: "36px", md: "44px" },
                  color: "#1F1F1F",
                  lineHeight: 1,
                }}
              >
                {ABOUT_INFO.name}
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: "1px",
                  height: "24px",
                  backgroundColor: "#D4BFA8",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: roboto.style.fontFamily,
                  fontSize: { xs: "12px", md: "12.5px" },
                  fontWeight: 500,
                  color: "#846A4E",
                  letterSpacing: "0.4px",
                  textTransform: "uppercase",
                  lineHeight: 1.5,
                }}
              >
                {ABOUT_INFO.designation}
              </Typography>
            </Box>
          </Grid>

          {/* Divider */}
          <Grid size={12}>
            <Box sx={{ height: "1px", backgroundColor: "rgba(132,106,78,0.18)" }} />
          </Grid>

          {/* Paragraphs */}
          <Grid size={12}>
            <Stack spacing={2.5}>
              {ABOUT_INFO.paragraphs.map((paragraph, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: index === 0 ? "#1A1A1A" : COLORS.TEXT_COLOR,
                    fontSize: { xs: "14px", md: index === 0 ? "15.5px" : "15px" },
                    textAlign: "justify",
                    fontFamily: roboto.style.fontFamily,
                    fontWeight: index === 0 ? 500 : 400,
                    lineHeight: { xs: "1.72", md: "1.82" },
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default About;
