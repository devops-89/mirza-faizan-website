import { Box } from "@mui/material";
import React from "react";
import Header from "../widgets/Header";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export default LayoutWrapper;
