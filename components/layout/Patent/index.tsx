"use client";

import React from "react";
import { Box } from "@mui/material";
import PatentsHero from "./PatentsHero";
import PatentsList from "./PatentsList";
import GetInTouch from "../Home/GetInTouch";

const Patent = () => {
  return (
    <Box>
      <PatentsHero />
      <PatentsList />
      <GetInTouch />
    </Box>
  );
};

export default Patent;
