import { createSlice } from "@reduxjs/toolkit";

export const informationToEditSlice = createSlice({
  name: "informationToEdit",
  initialState: {
    id: "",
    img: "",
    programs: [],
    title: "",
    type: "",
  },
  reducers: {
    setInformationToEdit: (state, action) => {
      state.id = action.payload.id;
      state.img = action.payload.img;
      state.programs = action.payload.programs;
      state.title = action.payload.title;
      state.type = action.payload.type;
    },
  },
});

export default informationToEditSlice.reducer;

export const { setInformationToEdit } = informationToEditSlice.actions;
