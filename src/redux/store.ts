import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../redux/reducers/language";

export const Store = configureStore({
  reducer: {
    language: languageReducer,
  },
});
