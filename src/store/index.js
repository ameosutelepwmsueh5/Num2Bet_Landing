import { configureStore } from "@reduxjs/toolkit";
import { LandingReducer } from "reducers/Index";

export const store = configureStore({
  reducer: {
    landing: LandingReducer,
  },
});
