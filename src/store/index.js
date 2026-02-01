import { configureStore, createSlice } from "@reduxjs/toolkit";

const landingSlice = createSlice({
  name: "landing",
  initialState: { slideIndex: 0 },
  reducers: {
    SET_SLIDE_INDEX: (state, action) => {
      state.slideIndex = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    landing: landingSlice.reducer,
  },
});
