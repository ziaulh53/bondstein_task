import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  isAuthenticate: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
      state.isAuthenticate = true;
    },
  },
});

export const { loginReducer } = authSlice.actions;
export default authSlice