import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import About from "./About";
import InventionResearch from "./invention-research";
import RecognitionAwards from "./RecognitionAwards";
import TalksLeadership from "./TalksLeadership";
import WhatWorldSays from "./WhatWorldSays";
import GetInTouch from "./GetInTouch";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <About />
      <InventionResearch />
      <RecognitionAwards />
      <TalksLeadership />
      <WhatWorldSays />
      <GetInTouch />
    </Box>
  );
};

export default Home;
