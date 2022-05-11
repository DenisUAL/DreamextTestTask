import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    // users: [],
    dbInteractionInProgress: false,
  },
  reducers: {
    signUserIn: (state, action) => {
      state.loggedIn = true;
    },
    signUserOut: (state, action) => {
      state.loggedIn = false;
    },
    startDBInteraction: (state, action) => {
      state.dbInteractionInProgress = true;
    },
    stopDBInteraction: (state, action) => {
      state.dbInteractionInProgress = false;
    },
  },
});
export const selectLoggedInStatus = (state) => state.auth.loggedIn;
export const selectDBInteractionStatus = (state) =>
  state.auth.dbInteractionInProgress;
export const selectUsers = (state) => state.auth.users;
export const {
  signUserIn,
  signUserOut,
  startDBInteraction,
  stopDBInteraction,
} = authSlice.actions;

export default authSlice.reducer;
