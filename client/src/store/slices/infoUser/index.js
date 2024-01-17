import { createSlice } from "@reduxjs/toolkit";

export const infoUserSlice = createSlice({
  name: "infoUser",
  initialState: {
    _id: "",
    social_media: [],
    profile_img: "",
    username: "",
    description: "",
    email: "",
  },
  reducers: {
    setInfoUser: (state, action) => {
      state._id = action.payload._id;
      state.social_media = action.payload.social_media;
      state.profile_img = action.payload.profile_img;
      state.username = action.payload.username;
      state.description = action.payload.description;
      state.email = action.payload.email;
    },
  },
});

export default infoUserSlice.reducer;

export const { setInfoUser } = infoUserSlice.actions;
