import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";
import { defaultLang, supportedLangs } from "../../config/i18nConfig";
import en from "../../../public/static/translations/en.json";
import ar from "../../../public/static/translations/ar.json";
import { RootState } from "@/redux/store"; // Use RootState type

interface InitialState {
  status: string;
  lang: string;
  supportedLangs: object;
  translations: object;
}

const initialState = {
  status: "loading",
  lang: defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: {
    ar: ar,
    en: en,
  },
} as InitialState;

export const setLangAsync = createAsyncThunk(
  "language/setLangAsync",
  async (lang, { getState, dispatch }) => {
    await new Promise((r) => setTimeout(r, 2000));

    const resolvedLang =
      window.localStorage.getItem("language") ||
      (getState() as RootState).language.lang;
    dispatch(language.actions.setLang(resolvedLang));
    return resolvedLang;
  }
);

export const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      window.localStorage.setItem("language", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLangAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(setLangAsync.fulfilled, (state, action) => {
      state.lang = action.payload;
      state.status = "idle";
    });
  },
});

export const selectTranslations = (state: any) => {
  return state.language.translations[state.language.lang];
};

export const { setLang } = language.actions;

export default language.reducer;
