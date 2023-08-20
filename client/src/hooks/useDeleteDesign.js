import { useState } from "react";
import { stateOfEdit } from "../constants";
import { setDataRenderSlice } from "../store/slices/dataRender";
import { useSocketIo } from "./useSocketIo";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalDelete } from "../store/slices/openModalDelete";
import { setInformationToEdit } from "../store/slices/informationToEdit";
import { setDataVideoSlice } from "../store/slices/dataVideo";

export const useDeleteDesign = () => {
  const [loaderDelete, setLoaderDelete] = useState(stateOfEdit.NOTHING_ACTION);

  const dispatch = useDispatch();

  const { id, type } = useSelector((state) => state.informationToEdit);

  const { socket } = useSocketIo(import.meta.env.VITE_BACKEND);

  const getRenders = () => {
    socket.emit("getDBrenders");
    socket.on("getRenders", async (newData) => {
      return new Promise((resolve) => {
        dispatch(setDataRenderSlice([]));

        dispatch(setDataRenderSlice(newData));

        resolve();
      }).then(() => {
        dispatch(setOpenModalDelete(false));
        dispatch(setInformationToEdit({ id: "" }));
      });
    });
  };

  const getDemoRenders = () => {
    socket.emit("getDBdemoReels");
    socket.on("getDemoReels", async (data) => {
      console.log("data", data);
      return new Promise((resolve) => {
        dispatch(setDataVideoSlice([]));

        dispatch(setDataVideoSlice(data));

        resolve();
      }).then(() => {
        dispatch(setOpenModalDelete(false));
        dispatch(setInformationToEdit({ id: "" }));
      });
    });
  };

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
        if (type === "render") {
          getRenders();
        }
        if (type === "demo_reel") {
          getDemoRenders();
        }
      }, 1800);
    }
  };

  return { deleteDesign, loaderDelete };
};
