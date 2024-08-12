"use client";

import * as React from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AppAppBar from "@/components/ui/AppAppBar";
import getLPTheme from "./getLPTheme";
import LogoCollection from "@/components/ui/LogoCollection";
import Footer from "@/components/ui/Footer";
import FAQ from "@/components/ui/FAQ";
import Pricing from "@/components/ui/Pricing";
import Highlights from "@/components/ui/Highlights";
import Testimonials from "@/components/ui/Testimonials";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Store } from "@/redux/store";

export default function LandingPage() {
  // const [locale, setLocale] = React.useState<String>("ar");
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // const toggleLanguageMode = () => {
  //   setLocale((prev) => (prev === "ar" ? "en" : "ar"));
  // };

  return (
    <Provider store={Store}>
      <ThemeProvider theme={LPtheme}>
        {/* <div dir={locale == "ar" ? "rtl" : "ltr"}> */}
        <CssBaseline />
        <AppAppBar
          mode={mode}
          // language={locale}
          toggleColorMode={toggleColorMode}
          // toggleLanguageMode={toggleLanguageMode}
        />
        <Hero />
        <Box sx={{ bgcolor: "background.default" }}>
          <LogoCollection />
          <Features />
          <Divider />
          <Testimonials />
          <Divider />
          <Highlights />
          <Divider />
          <Pricing />
          <Divider />
          <FAQ />
          <Divider />
          <Footer />
        </Box>
        {/* </div> */}
      </ThemeProvider>
    </Provider>
  );
}
