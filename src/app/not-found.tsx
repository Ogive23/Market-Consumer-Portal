"use client";

import AppAppBar from "@/components/ui/AppAppBar";
import { createTheme, ThemeProvider } from "@mui/material";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/static/lottie/404.json";

const defaultTheme = createTheme();

export default function NotFound() {
  return (
    <div
      style={{
        width: "100%",
        height: window.innerHeight,
        placeContent: "center",
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Lottie
          animationData={groovyWalkAnimation}
          loop={true}
          style={{ height: window.innerHeight / 2 }}
        />
      </ThemeProvider>
    </div>
  );
}
