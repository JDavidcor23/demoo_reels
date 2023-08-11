import { createSlice } from "@reduxjs/toolkit";

export const dataRenderSlice = createSlice({
  name: "dataRender",
  initialState: {
    data: [],
  },
  reducers: {
    setDataRenderSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default dataRenderSlice.reducer;

export const { setDataRenderSlice } = dataRenderSlice.actions;
