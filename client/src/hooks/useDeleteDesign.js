import { useState } from "react";
import { stateOfEdit } from "../constants";
import { setDataRenderSlice } from "../store/slices/dataRender";
import { useSocketIo } from "./useSocketIo";
import { useDispatch } from "react-redux";

export const useDeleteDesign = () => {
  const [loaderDelete, setLoaderDelete] = useState(stateOfEdit.NOTHING_ACTION);

  const dispatch = useDispatch();

  const { socket } = useSocketIo(import.meta.env.VITE_BACKEND);

  const deleteDesign = (id, type, changeFalseDelete) => {
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
            changeFalseDelete();
          });
        });
      }, 1800);
    }
  };

  return { deleteDesign, loaderDelete };
};
