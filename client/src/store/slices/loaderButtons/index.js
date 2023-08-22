import { createSlice } from "@reduxjs/toolkit";

export const loaderButtonsSlice = createSlice({
  name: "loaderButtons",
  initialState: {
    state: false,
  },
  reducers: {
    setLoaderButtons: (state, action) => {
      state.state = action.payload;
    },
  },
});

export default loaderButtonsSlice.reducer;

export const { setLoaderButtons } = loaderButtonsSlice.actions;
