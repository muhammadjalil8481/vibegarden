import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userId: "",
  token: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("action", action.payload);
      state.user = action.payload;
      state.userId = action.payload?._id;
    },
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    logoutUser: (state) => {
      state.user = "";
      state.userId = "";
      state.token = "";
    },
  },
});

export const { setUser, saveToken, logoutUser } = userSlice.actions;
export default userSlice.reducer;
