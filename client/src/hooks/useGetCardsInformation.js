import { useDispatch, useSelector } from "react-redux";
import { setDataVideoSlice } from "../store/slices/dataVideo";
import { setDataRenderSlice } from "../store/slices/dataRender";
import { setLoaderSocket } from "../store/slices/loaderSocket";

export const useGetCardsInformation = () => {
  const dispatch = useDispatch();

  const loaderSocket = useSelector((state) => state.loaderSocket.state);

  const getRender = (socket) => {
    if (socket) {
      dispatch(setLoaderSocket(true));
      socket.emit("getDBrenders");
      socket.on("getRenders", (data) => {
        dispatch(setLoaderSocket(false));
        dispatch(setDataRenderSlice([]));
        dispatch(setDataRenderSlice(data));
      });
    }
  };

  const getDemoReel = (socket) => {
    if (socket) {
      dispatch(setLoaderSocket(true));
      socket.emit("getDBdemoReels");
      socket.on("getDemoReels", (data) => {
        dispatch(setLoaderSocket(false));
        dispatch(setDataVideoSlice([]));
        dispatch(setDataVideoSlice(data));
      });
    }
  };

  const functionsCardsInformation = {
    getRender,
    getDemoReel,
  };

  return { functionsCardsInformation, loaderSocket };
};
