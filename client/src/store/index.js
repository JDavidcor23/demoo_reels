import { configureStore } from "@reduxjs/toolkit";

import dataRender from "./slices/dataRender";
import dataVideo from "./slices/dataVideo";
import editSlice from "./slices/editSlice";
import openModalUpload from "./slices/openModalUpload";
import openModalDelete from "./slices/openModalDelete";
import informationToEdit from "./slices/informationToEdit";

export default configureStore({
  reducer: {
    dataVideo,
    dataRender,
    editSlice,
    openModalUpload,
    openModalDelete,
    informationToEdit,
  },
});
