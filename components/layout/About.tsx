import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{ height: "auto", py: 5 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={4}>
            <Typography
              sx={{
                fontSize: "45px",
                fontWeight: 600,
                lineHeight: "55px",
                fontFamily: roboto.style.fontFamily,
              }}
            >
              About the Visionary Inventor
            </Typography>
            <Divider
              sx={{
                width: 100,
                borderColor: COLORS.DIVIDER_COLOR,
                borderWidth: 2,
              }}
            />
          </Grid>
          <Grid size={12}>
            <Stack spacing={2} sx={{ mt: 4 }}>
              <Typography
                sx={{
                  color: COLORS.TEXT_COLOR,
                  fontSize: "15px",
                  textAlign: "justify",
                  fontFamily: roboto.style.fontFamily,
                  fontWeight: 400,
                  lineHeight: "26.5px",
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
                  color: COLORS.TEXT_COLOR,
                  fontSize: "15px",
                  textAlign: "justify",
                  fontFamily: roboto.style.fontFamily,
                  fontWeight: 400,
                  lineHeight: "26.5px",
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
