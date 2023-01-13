import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userId: null,
  token: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.userId = action.payload?._id;
    },
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.userId = null;
      state.token = null;
    },
  },
});

export const { setUser, saveToken, logoutUser } = userSlice.actions;
export default userSlice.reducer;
