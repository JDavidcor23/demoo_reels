import { createSlice } from "@reduxjs/toolkit";

export const IsLoggedIn = createSlice({
  name: "IsLoggedIn",
  initialState: {
    data: false,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setIsLoggedIn } = IsLoggedIn.actions;

export default IsLoggedIn.reducer;
