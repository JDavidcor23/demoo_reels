import { createSlice } from "@reduxjs/toolkit";

export const openModalUploadSlice = createSlice({
  name: "openModalUpload",
  initialState: {
    state: false,
  },
  reducers: {
    setOpenModalUpload: (state, action) => {
      state.state = action.payload;
    },
  },
});

export default openModalUploadSlice.reducer;

export const { setOpenModalUpload } = openModalUploadSlice.actions;
