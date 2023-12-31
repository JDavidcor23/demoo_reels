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
      socket.emit("getDBRenders");
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
      socket.emit("getDBDemoReels");
      socket.on("getDemoReels", (data) => {
        dispatch(setLoaderSocket(false));
        dispatch(setDataVideoSlice([]));
        dispatch(setDataVideoSlice(data));
      });
    }
  };

  const getRenderByUserId = (socket, id) => {
    if (socket) {
      dispatch(setLoaderSocket(true));
      socket.emit("getDBRendersByUserId", id);
      socket.on("getRendersByUserId", (data) => {
        dispatch(setLoaderSocket(false));
        dispatch(setDataRenderSlice([]));
        dispatch(setDataRenderSlice(data));
      });
    }
  };

  const getDemoReelByUserId = (socket, id) => {
    if (socket) {
      dispatch(setLoaderSocket(true));
      socket.emit("getDBDemoReelsByUserId", id);
      socket.on("getDemoReelsByUserId", (data) => {
        dispatch(setLoaderSocket(false));
        dispatch(setDataVideoSlice([]));
        dispatch(setDataVideoSlice(data));
      });
    }
  };

  const functionsCardsInformation = {
    getRender,
    getDemoReel,
    getRenderByUserId,
    getDemoReelByUserId,
  };

  return { functionsCardsInformation, loaderSocket };
};
