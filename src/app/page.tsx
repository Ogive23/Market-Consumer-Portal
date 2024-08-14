"use client";

import * as React from "react";
import { Provider } from "react-redux";
import { persistor, Store } from "@/redux/store";
import BackgroundPage from "./background";
import { PersistGate } from "redux-persist/integration/react";

export default function LandingPage() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <BackgroundPage></BackgroundPage>
      </PersistGate>
    </Provider>
  );
}
