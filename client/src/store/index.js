import { configureStore } from "@reduxjs/toolkit";

import informationToEdit from "./slices/informationToEdit";

export default configureStore({
  reducer: {
    informationToEdit,
  },
});
