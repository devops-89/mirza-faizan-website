import { Box } from "@mui/material";
import React from "react";
import Header from "./widgets/Header";
import Footer from "./widgets/Footer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default LayoutWrapper;
