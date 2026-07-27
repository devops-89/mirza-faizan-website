import { COLORS } from "@/utils/enum";
import { outfit } from "@/utils/fonts";
import { HOME_COUNTERS } from "@/utils/generic";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const CounterCard = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          backgroundColor: "rgba(25, 25, 25, 0.42)",
          borderRadius: { xs: "0px 0px 45px 45px", md: "0px 0px 100px 100px" },
          py: { xs: 2.5, md: 4 },
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {HOME_COUNTERS.map((counter, index) => (
              <Grid size={4} key={index}>
                <Stack
                  direction="column"
                  spacing={{ xs: 0.5, md: 1 }}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: outfit.style.fontFamily,
                      fontSize: { xs: 26, sm: 42, lg: 56 },
                      lineHeight: 1,
                      letterSpacing: "-1px",
                      fontWeight: 500,
                      color: COLORS.WHITE,
                      whiteSpace: "nowrap",
                      display: "flex",
                      alignItems: "baseline",
                      gap: 0.2,
                    }}
                  >
                    {counter.value}
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: outfit.style.fontFamily,
                        fontSize: "inherit",
                        lineHeight: "inherit",
                        letterSpacing: "inherit",
                        fontWeight: 500,
                        color: COLORS.WHITE,
                      }}
                    >
                      {counter.unit}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: outfit.style.fontFamily,
                      fontSize: { xs: 11, sm: 13, lg: 15 },
                      fontWeight: 400,
                      lineHeight: "1.3",
                      color: "rgba(255, 255, 255, 0.9)",
                      textAlign: "center",
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
