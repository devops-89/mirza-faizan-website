import React from "react";
import Header from "./widgets/Header";
import Footer from "./widgets/Footer";
import { Box } from "@mui/material";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box component="main" sx={{ flex: 1, backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column", width: "100%" }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default LayoutWrapper;
