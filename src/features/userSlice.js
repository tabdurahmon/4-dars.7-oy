import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "user",
  isAuthredy: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    isAuthChange: (state) => {
      state.isAuthredy = true;
    },
  },
});

export const { isAuthChange, login, logOut } = userSlice.actions;

export default userSlice.reducer;
