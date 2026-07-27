import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

const Heading = ({ label, width }: { label: string; width?: string }) => {
  return (
    <Grid container>
      <Grid size={12}>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "45px" },
            fontWeight: 700,
            lineHeight: { xs: "40px", md: "52px" },
            fontFamily: roboto.style.fontFamily,
            width: width || "auto",
            color: "#1E1E1E",
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
