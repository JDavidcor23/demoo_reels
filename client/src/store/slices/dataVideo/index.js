import { createSlice } from "@reduxjs/toolkit";

export const dataVideoSlice = createSlice({
  name: "dataVideo",
  initialState: {
    data: [],
  },
  reducers: {
    setDataVideoSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default dataVideoSlice.reducer;

export const { setDataVideoSlice } = dataVideoSlice.actions;
