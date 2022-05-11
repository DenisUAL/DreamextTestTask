import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
  },
  reducers: {
    startLoading: (state) => {
      console.log("start loading")
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

export const loadingState = (state) => state.ui.loading;

export const { startLoading, stopLoading } = uiSlice.actions;

export default uiSlice.reducer;
