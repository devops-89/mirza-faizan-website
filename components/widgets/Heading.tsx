import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

const Heading = ({ label, width, lightText }: { label: string; width?: string; lightText?: boolean }) => {
  return (
    <Grid container>
      <Grid size={12}>
        <Typography
          sx={{
            fontSize: { xs: "26px", sm: "34px", md: "42px" },
            fontWeight: 700,
            lineHeight: { xs: "33px", sm: "42px", md: "50px" },
            fontFamily: roboto.style.fontFamily,
            maxWidth: { xs: "100%", sm: width || "auto" },
            color: lightText ? "#FFFFFF" : "#1F1F1F",
            whiteSpace: "pre-line",
          }}
        >
          {label}
        </Typography>
        <Divider
          sx={{
            width: 75,
            borderColor: COLORS.DIVIDER_COLOR,
            borderWidth: 2,
            mt: 2,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Heading;
