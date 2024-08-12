"use client";

import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "@/redux/store";
import Main from "./main";

export default function LandingPage() {
  return (
    <Provider store={Store}>
      <Main></Main>
    </Provider>
  );
}
