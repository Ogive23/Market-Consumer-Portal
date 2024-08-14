import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";
import {
  defaultDirection,
  defaultLang,
  directions,
  supportedLangs,
} from "../../config/i18nConfig";
import en from "../../../public/static/translations/en.json";
import ar from "../../../public/static/translations/ar.json";
import { RootState, Store } from "@/redux/store"; // Use RootState type

interface InitialState {
  step: number;
  previousSteps: Array<number>;
}

const initialState = {
  step: 0,
  previousSteps: [0],
} as InitialState;

export const common = createSlice({
  name: "common",
  initialState,
  reducers: {
    changeStep: (state, action) => {
      state.step = action.payload.pageIndex;
      window.history.pushState(null, "", action.payload.route);
      window.history.replaceState({ clearForwardHistory: true }, "", "");
      state.previousSteps.push(action.payload);
    },
    back: (state) => {
      console.log("back");
      console.log("length = " + state.previousSteps.length);
      console.log(state.step);
      if (state.previousSteps.length == 1) {
        return;
      }
      state.previousSteps.pop();
      state.step = state.previousSteps[state.previousSteps.length - 1];
    },
  },
});

export const { changeStep } = common.actions;
export const { back } = common.actions;

export default common.reducer;
