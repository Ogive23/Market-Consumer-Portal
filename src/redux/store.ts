import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../redux/reducers/language";

export const Store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

// Define RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
