import localFont from "next/font/local";

const sans = localFont({
  src: [
    { path: "./fonts/geist-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/geist-medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--cable-home-sans",
  display: "swap",
});
const serif = localFont({
  src: [
    { path: "./fonts/cormorant-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/cormorant-italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--cable-home-serif",
  display: "swap",
});
export const homeFontVars = sans.variable + " " + serif.variable;
