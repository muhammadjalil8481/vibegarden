import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: "",
};

const signUpUserSlice = createSlice({
  name: "signUpUser",
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { signUpUser, setError } = signUpUserSlice.actions;
export default signUpUserSlice.reducer;
