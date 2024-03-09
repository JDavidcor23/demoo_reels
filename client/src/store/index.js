import { configureStore } from "@reduxjs/toolkit";

import infoUser from "./slices/infoUser";
import dataVideo from "./slices/dataVideo";
import editSlice from "./slices/editSlice";
import IsLoggedIn from "./slices/IsLoggedIn";
import dataRender from "./slices/dataRender";
import loaderSocket from "./slices/loaderSocket";
import loaderButtons from "./slices/loaderButtons";
import openModalUpload from "./slices/openModalUpload";
import openModalDelete from "./slices/openModalDelete";
import informationToEdit from "./slices/informationToEdit";
import openModalSocialMedia from "./slices/openModalSocialMedia";
import openModalDeleteSocialMedia from "./slices/openModalDeleteSocialMedia";

export default configureStore({
  reducer: {
    infoUser,
    dataVideo,
    editSlice,
    dataRender,
    IsLoggedIn,
    loaderSocket,
    loaderButtons,
    openModalUpload,
    openModalDelete,
    informationToEdit,
    openModalSocialMedia,
    openModalDeleteSocialMedia,
  },
});
