import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

const Heading = ({ label, width }: { label: string; width?: string }) => {
  return (
    <Grid container>
      <Grid size={4}>
        <Typography
          sx={{
            fontSize: "45px",
            fontWeight: 600,
            lineHeight: "55px",
            fontFamily: roboto.style.fontFamily,
            width: width,
          }}
        >
          {label}
        </Typography>
        <Divider
          sx={{
            width: 100,
            borderColor: COLORS.DIVIDER_COLOR,
            borderWidth: 2,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Heading;
