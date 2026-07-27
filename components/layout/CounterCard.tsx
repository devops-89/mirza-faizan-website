import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const COUNTERS = [
  {
    value: "23",
    unit: "k",
    label: "Social Followers",
  },
  {
    value: "12",
    unit: "m",
    label: "Email Subscribers",
  },
  {
    value: "82",
    unit: "+",
    label: "Patents",
  },
];

const CounterCard = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          backgroundColor: "rgba(25, 25, 25, 0.42)",
          borderRadius: "0px 0px 100px 100px",
          py: { xs: 3, md: 4 },
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            {COUNTERS.map((counter, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Typography
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: { xs: 48, sm: 64, lg: 78 },
                      lineHeight: 1,
                      letterSpacing: "-1.95px",
                      fontWeight: 400,
                      color: COLORS.WHITE,
                      whiteSpace: "nowrap",
                      display: "flex",
                      alignItems: "baseline",
                      gap: 0.5,
                    }}
                  >
                    {counter.value}
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: roboto.style.fontFamily,
                        fontSize: "inherit",
                        lineHeight: "inherit",
                        letterSpacing: "inherit",
                        fontWeight: 400,
                        color: COLORS.WHITE,
                      }}
                    >
                      {counter.unit}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: roboto.style.fontFamily,
                      fontSize: { xs: 14, sm: 16, lg: 18 },
                      fontWeight: 400,
                      lineHeight: "24px",
                      color: COLORS.WHITE,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {counter.label}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CounterCard;
