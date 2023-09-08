import { configureStore } from "@reduxjs/toolkit";

import IsLoggedIn from "./slices/IsLoggedIn";
import infoUser from "./slices/infoUser";
import dataVideo from "./slices/dataVideo";
import editSlice from "./slices/editSlice";
import dataRender from "./slices/dataRender";
import loaderSocket from "./slices/loaderSocket";
import loaderButtons from "./slices/loaderButtons";
import openModalUpload from "./slices/openModalUpload";
import openModalDelete from "./slices/openModalDelete";
import informationToEdit from "./slices/informationToEdit";

export default configureStore({
  reducer: {
    infoUser,
    IsLoggedIn,
    dataVideo,
    editSlice,
    dataRender,
    loaderSocket,
    loaderButtons,
    openModalUpload,
    openModalDelete,
    informationToEdit,
  },
});
