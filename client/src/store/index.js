import { configureStore } from "@reduxjs/toolkit";

import dataVideo from "./slices/dataVideo";
import editSlice from "./slices/editSlice";
import dataRender from "./slices/dataRender";
import loaderSocket from "./slices/loaderSocket";
import openModalUpload from "./slices/openModalUpload";
import openModalDelete from "./slices/openModalDelete";
import informationToEdit from "./slices/informationToEdit";

export default configureStore({
  reducer: {
    dataVideo,
    editSlice,
    dataRender,
    loaderSocket,
    openModalUpload,
    openModalDelete,
    informationToEdit,
  },
});
