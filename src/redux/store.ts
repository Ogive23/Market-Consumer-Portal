import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import languageReducer from "../redux/reducers/language";
import storage from "redux-persist/lib/storage";
import commonReducer from "../redux/reducers/common";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  language: languageReducer,
  common: commonReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  // Using getDefaultMiddleware directly
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Optional: Configure as needed
    }).concat(),
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return Store;
};

export const createPreloadedState = (
  customState: Partial<RootState>
): PreloadedState<RootState> => {
  return {
    language: { ...Store.getState().language, ...customState.language },
    common: { ...Store.getState().common, ...customState.common },
  };
};

// Define RootState and AppDispatch types from the store itself
export type AppDispatch = typeof Store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof Store.getState>;
export const persistor = persistStore(Store);
