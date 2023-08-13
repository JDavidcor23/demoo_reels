import { createSlice } from "@reduxjs/toolkit";

export const editSliceSlice = createSlice({
  name: "editSlice",
  initialState: {
    state: false,
  },
  reducers: {
    setEditSlice: (state, action) => {
      state.state = action.payload;
    },
  },
});

export default editSliceSlice.reducer;

export const { setEditSlice } = editSliceSlice.actions;
