import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import InventionResearch from "./invention-research";
import RecognitionAwards from "./RecognitionAwards";
import TalksLeadership from "./TalksLeadership";
import WhatWorldSays from "./WhatWorldSays";
import GetInTouch from "./GetInTouch";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <InventionResearch />
      <RecognitionAwards />
      <TalksLeadership />
      <WhatWorldSays />
      <GetInTouch />
    </div>
  );
};

export default Home;
