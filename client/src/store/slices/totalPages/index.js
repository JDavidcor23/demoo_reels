import { createSlice } from "@reduxjs/toolkit";

export const totalPagesSliceSlice = createSlice({
  name: "totalPages",
  initialState: {
    totalPagesImage: 0,
    totalPagesVideo: 0,
  },
  reducers: {
    setTotalPagesSlice: (state, action) => {
      state.totalPagesImage = action.payload.totalPagesImage;
      state.totalPagesVideo = action.payload.totalPagesVideo;
    },
  },
});

export default totalPagesSliceSlice.reducer;

export const { setTotalPagesSlice } = totalPagesSliceSlice.actions;
