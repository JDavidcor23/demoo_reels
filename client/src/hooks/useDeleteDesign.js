import { useState } from "react";
import { stateOfEdit } from "../constants";
import { setDataRenderSlice } from "../store/slices/dataRender";
import { useSocketIo } from "./useSocketIo";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalDelete } from "../store/slices/openModalDelete";

export const useDeleteDesign = () => {
  const [loaderDelete, setLoaderDelete] = useState(stateOfEdit.NOTHING_ACTION);

  const dispatch = useDispatch();

  const { id, type } = useSelector((state) => state.informationToEdit);

  const openModalDelete = useSelector((state) => state.openModalDelete.state);

  const { socket } = useSocketIo(import.meta.env.VITE_BACKEND);

  const deleteDesign = () => {
    try {
      setLoaderDelete(stateOfEdit.LOADING);
      const data = { id, type };
      socket.emit("deleteDesign", data);
      setLoaderDelete(stateOfEdit.SUCCESS);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        socket.emit("getDBrenders");
        socket.on("getRenders", async (newData) => {
          return new Promise((resolve) => {
            dispatch(setDataRenderSlice([]));

            dispatch(setDataRenderSlice(newData));

            resolve();
          }).then(() => {
            dispatch(setOpenModalDelete(false));
          });
        });
      }, 1800);
    }
  };

  return { deleteDesign, loaderDelete };
};
