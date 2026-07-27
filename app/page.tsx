import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import Home from "@/components/layout/Home";

export default function HomePage() {
  return (
    <Box>
      <Home />
    </Box>
  );
}
