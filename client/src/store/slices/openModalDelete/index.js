import { createSlice } from "@reduxjs/toolkit";

export const openModalDeleteSlice = createSlice({
  name: "openModalDelete",
  initialState: {
    state: false,
  },
  reducers: {
    setOpenModalDelete: (state, action) => {
      state.state = action.payload;
    },
  },
});

export default openModalDeleteSlice.reducer;

export const { setOpenModalDelete } = openModalDeleteSlice.actions;
