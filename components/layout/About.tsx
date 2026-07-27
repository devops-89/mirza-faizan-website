import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Heading from "../widgets/Heading";

const About = () => {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 9 },
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
            <Stack spacing={3} sx={{ mt: { xs: 2, md: 3 } }}>
              <Typography
                sx={{
                  color: COLORS.TEXT_COLOR || "#383838",
                  fontSize: { xs: "14px", md: "16px" },
                  textAlign: "justify",
                  fontFamily: roboto.style.fontFamily,
                  fontWeight: 400,
                  lineHeight: { xs: "1.65", md: "1.75" },
                  width: "100%",
                }}
              >
                Mirza Faizan is an Indian American aerospace scientist,
                inventor, and entrepreneur recognized for his pioneering
                contributions to aviation safety. He is best known for
                developing GRIPS (Ground Reality Information Processing System)
                — an advanced ground-based anti-collision system designed to
                prevent runway accidents and save countless lives.
              </Typography>

              <Typography
                sx={{
                  color: COLORS.TEXT_COLOR || "#383838",
                  fontSize: { xs: "14px", md: "16px" },
                  textAlign: "justify",
                  fontFamily: roboto.style.fontFamily,
                  fontWeight: 400,
                  lineHeight: { xs: "1.65", md: "1.75" },
                  width: "100%",
                }}
              >
                With over two decades of experience in aerospace research, AI
                integration, and systems innovation, Mirza’s work bridges
                engineering excellence with social impact. His vision lies in
                transforming how technology enhances human safety and
                operational intelligence across the aviation ecosystem.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
