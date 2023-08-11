import { configureStore } from "@reduxjs/toolkit";

import dataRender from "./slices/dataRender";
import dataVideo from "./slices/dataVideo";
import informationToEdit from "./slices/informationToEdit";

export default configureStore({
  reducer: {
    dataVideo,
    dataRender,
    informationToEdit,
  },
});
