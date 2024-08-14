"use client";

import * as React from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "@/components/ui/AppAppBar";
import LogoCollection from "@/components/ui/LogoCollection";
import Footer from "@/components/ui/Footer";
import FAQ from "@/components/ui/FAQ";
import Pricing from "@/components/ui/Pricing";
import Highlights from "@/components/ui/Highlights";
import Testimonials from "@/components/ui/Testimonials";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setLangAsync } from "@/redux/reducers/language";
import Loading from "@/components/ui/Loading";
import getLPTheme from "../getLPTheme";
import { persistor, RootState, Store } from "@/redux/store";

export default function ShoppingPage() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const languageStatus: string = useSelector(
    (state: RootState) => state.language.status
  );
  const languageDirection: string = useSelector(
    (state: RootState) => state.language.direction
  );
  const dispatch = useDispatch<any>();

  React.useEffect(() => {
    dispatch(setLangAsync());
  }, []);

  return languageStatus === "loading" ? (
    <Loading></Loading>
  ) : (
    <ThemeProvider theme={LPtheme}>
      <div dir={languageDirection}>
        <CssBaseline />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Box sx={{ bgcolor: "background.default" }}></Box>
      </div>
    </ThemeProvider>
  );
}
