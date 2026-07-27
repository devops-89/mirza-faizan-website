import { Roboto, Signika } from "next/font/google";
import localFont from "next/font/local";

export const bella = localFont({
  src: "../public/fonts/Bella-Script.otf",
  weight: "400",
  variable: "--font-bella",
});

export const signika = Signika({
  weight: "variable",
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: "variable",
  subsets: ["latin"],
});
