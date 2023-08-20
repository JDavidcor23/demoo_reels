import { useDispatch } from "react-redux";
import { setDataVideoSlice } from "../store/slices/dataVideo";
import { setDataRenderSlice } from "../store/slices/dataRender";

export const useGetCardsInformation = () => {
  const dispatch = useDispatch();
  const getRender = (socket) => {
    if (socket) {
      socket.emit("getDBrenders");
      socket.on("getRenders", (data) => {
        dispatch(setDataRenderSlice([]));
        dispatch(setDataRenderSlice(data));
      });
    }
  };

  const getDemoReel = (socket) => {
    if (socket) {
      socket.emit("getDBdemoReels");
      socket.on("getDemoReels", (data) => {
        dispatch(setDataVideoSlice([]));
        dispatch(setDataVideoSlice(data));
      });
    }
  };

  const functionsCardsInformation = {
    getRender,
    getDemoReel,
  };

  return { functionsCardsInformation };
};
