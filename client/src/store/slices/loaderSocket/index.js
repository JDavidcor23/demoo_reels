import { createSlice } from "@reduxjs/toolkit";

export const loaderSocketSlice = createSlice({
  name: "loaderSocket",
  initialState: {
    state: false,
  },
  reducers: {
    setLoaderSocket: (state, action) => {
      state.state = action.payload;
    },
  },
});

export default loaderSocketSlice.reducer;

export const { setLoaderSocket } = loaderSocketSlice.actions;
