import { createSlice } from "@reduxjs/toolkit";

export const openModalDeleteSocialMediaSlice = createSlice({
  name: "openModalDeleteSocialMedia",
  initialState: {
    state: false,
  },
  reducers: {
    setOpenModalDeleteSocialMedia: (state, action) => {
      state.state = action.payload;
    },
  },
});

export default openModalDeleteSocialMediaSlice.reducer;

export const { setOpenModalDeleteSocialMedia } =
  openModalDeleteSocialMediaSlice.actions;
