import { createSlice } from "@reduxjs/toolkit";

export const informationToEditSlice = createSlice({
  name: "informationToEdit",
  initialState: {
    id: "",
    img: "",
    programs: [],
    title: "",
    video: "",
    type: "",
  },
  reducers: {
    setInformationToEdit: (state, action) => {
      state.id = action.payload.id;
      state.img = action.payload.img;
      state.programs = action.payload.programs;
      state.title = action.payload.title;
      state.type = action.payload.type;
      state.video = action.payload.video;
    },
  },
});

export default informationToEditSlice.reducer;

export const { setInformationToEdit } = informationToEditSlice.actions;
