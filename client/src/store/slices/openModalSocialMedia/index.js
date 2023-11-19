import { createSlice } from "@reduxjs/toolkit";

export const openModalSocialMediaSlice = createSlice({
  name: "openModalSocialMedia",
  initialState: {
    state: false,
  },
  reducers: {
    setOpenModalSocialMedia: (state, action) => {
      state.state = action.payload;
    },
  },
});

export default openModalSocialMediaSlice.reducer;

export const { setOpenModalSocialMedia } = openModalSocialMediaSlice.actions;
