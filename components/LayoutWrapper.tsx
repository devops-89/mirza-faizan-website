import React from "react";
import FooterRevealContainer from "./animation/FooterRevealContainer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return <FooterRevealContainer>{children}</FooterRevealContainer>;
};

export default LayoutWrapper;
