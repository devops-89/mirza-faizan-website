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
import { COLORS } from "@/utils/enum";
import Heading from "@/components/widgets/Heading";

const InnovationsPatent = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Box sx={{ width: "50%" }}>
            <Heading label="Inventions & Research Projects" width="400px" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default InnovationsPatent;
