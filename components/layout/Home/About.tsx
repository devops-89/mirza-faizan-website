import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { ABOUT_INFO } from "@/utils/generic";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Heading from "../../widgets/Heading";

const About = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Section Heading */}
          <Grid size={12}>
            <Heading label={"About the \n Visionary Inventor"} width="360px" />
          </Grid>

          {/* Description Paragraphs */}
          <Grid size={12}>
            <Stack spacing={2.5} sx={{ mt: { xs: 2, md: 3 } }}>
              <Box sx={{ mb: 0.5 }}>
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: { xs: "20px", md: "24px" },
                    fontWeight: 700,
                    color: "#1F1F1F",
                    lineHeight: 1.2,
                    mb: 0.5,
                  }}
                >
                  {ABOUT_INFO.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: roboto.style.fontFamily,
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 600,
                    color: "#846A4E",
                    letterSpacing: "0.2px",
                  }}
                >
                  {ABOUT_INFO.designation}
                </Typography>
              </Box>

              {ABOUT_INFO.paragraphs.map((paragraph, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: COLORS.TEXT_COLOR || "#383838",
                    fontSize: { xs: "14px", md: "15.5px" },
                    textAlign: "justify",
                    fontFamily: roboto.style.fontFamily,
                    fontWeight: 400,
                    lineHeight: { xs: "1.65", md: "1.75" },
                    width: "100%",
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
