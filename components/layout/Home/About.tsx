import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Heading from "../../widgets/Heading";

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
                  Mirza Faizan
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
                  Founder & Chief Innovation Facilitator, DiscoverSTEM-USA
                </Typography>
              </Box>

              <Typography
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
                Mirza Faizan is an internationally recognized aerospace
                scientist, inventor and innovation educator with extensive
                experience in aerospace, defence and mission-critical systems.
              </Typography>

              <Typography
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
                He is the inventor of the Ground Reality Information Processing
                System (GRIPS), an advanced runway safety technology designed to
                prevent runway incursions, runway excursions and detect foreign
                object debris in real time.
              </Typography>

              <Typography
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
                His work has been recognized by experts from NASA, the U.S. Army
                Missile Research, Development & Engineering Center, and the U.S.
                Air Force. He has also been invited to evaluate research
                outcomes from leading global research and innovation labs such
                as NASA, MIT Lincoln Lab, Defence Threat Reduction Agency,
                Sandia National Lab-USA, Lawrence Livermore National Lab-USA,
                Argonne National Lab-USA, Oak Ridge National Lab-USA etc. as a
                judge for the prestigious R&D 100 Awards.
              </Typography>

              <Typography
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
                Under his mentorship, over 1000 school students have filed
                patent applications, with over 450 students’ patents granted,
                making DiscoverSTEM one of the world’s leading school innovation
                ecosystems focused on intellectual property creation by young
                innovators.
              </Typography>

              <Typography
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
                He is a recipient of the George Washington Honor Medal, a US
                national award for revolutionizing education in the United
                States. In March 2025, Texas House of Representatives passed
                House Resolution HR-403 and honor and recognize his contribution
                in Innovation, Research and Entrepreneurship in the State of
                Texas.
              </Typography>

              <Typography
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
                Mr. Faizan is a serial innovator with over 50 patents granted
                and over 52 patents pending in the United States. He is a US
                citizen and resides in Dallas, Texas with his family. He will
                personally lead this training and mentor participating teachers.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
