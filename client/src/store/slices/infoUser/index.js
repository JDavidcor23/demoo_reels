import { createSlice } from "@reduxjs/toolkit";

export const infoUserSlice = createSlice({
  name: "infoUser",
  initialState: {
    _id: "64ed07da5ad49196ce0bc41c",
    social_media: [],
    profile_img:
      "https://res.cloudinary.com/dbtk64lp4/image/upload/v1678822603/jorgito23diaz6_siberian_husky_3d_pixar_style_render_3d_hd_b95a39ab-ae8b-4d09-8594-f42e35e81de5_-_Copy_tvfcfn.png",
    username: "",
    description: "",
  },
  reducers: {
    setInfoUser: (state, action) => {
      state._id = action.payload._id;
      state.social_media = action.payload.social_media;
      state.profile_img = action.payload.profile_img;
      state.username = action.payload.username;
      state.description = action.payload.description;
    },
  },
});

export default infoUserSlice.reducer;

export const { setInfoUser } = infoUserSlice.actions;
