import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";
import { defaultLang, supportedLangs } from "../../config/i18nConfig";
import en from "../../../public/static/translations/en.json";
import ar from "../../../public/static/translations/ar.json";

interface InitialState {
  lang: string;
  supportedLangs: object;
  translations: object;
}

const initialState = {
  lang: defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: {
    ar: ar,
    en: en,
  },
} as InitialState;

export const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLang: (state, action) => {
      //   console.log("xD", action.payload);
      state.lang = action.payload;
    },
  },
});

export const selectTranslations = (state: any) => {
  console.log(state.language.translations[state.language.lang]);
  return state.language.translations[state.language.lang];
};

export const { setLang } = language.actions;

export default language.reducer;
