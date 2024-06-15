import { useDispatch, useSelector } from "react-redux";
import { setDataVideoSlice } from "../store/slices/dataVideo";
import { setDataRenderSlice } from "../store/slices/dataRender";
import { setLoaderSocket } from "../store/slices/loaderSocket";
import { setTotalPagesSlice } from "../store/slices/totalPages";

export const useGetCardsInformation = () => {
  const dispatch = useDispatch();

  const loaderSocket = useSelector((state) => state.loaderSocket.state);

  const getRender = (socket, limit, offset) => {
    if (socket) {
      const data = { limit, offset };
      dispatch(setLoaderSocket(true));
      socket.emit("getDBRenders", data);
      socket.on("getRenders", (data) => {
        dispatch(setLoaderSocket(false));
        dispatch(setDataRenderSlice([]));
        dispatch(setDataRenderSlice(data));
      });
    }
  };

  const getDemoReel = (socket, limit, offset) => {
    if (socket) {
      const data = { limit, offset };
      dispatch(setLoaderSocket(true));
      socket.emit("getDBDemoReels", data);
      dispatch(setDataVideoSlice([]));
      socket.on("getDemoReels", (data) => {
        dispatch(setLoaderSocket(false));
        dispatch(setDataVideoSlice(data));
      });
    }
  };

  const getRenderByUserId = (socket, id) => {
    if (socket) {
      dispatch(setLoaderSocket(true));
      socket.emit("getDBRendersByUserId", id);
      dispatch(setDataRenderSlice([]));
      socket.on("getRendersByUserId", (data) => {
        dispatch(setLoaderSocket(false));
        dispatch(setDataRenderSlice(data));
      });
    }
  };

  const getDemoReelByUserId = (socket, id) => {
    if (socket) {
      dispatch(setLoaderSocket(true));
      socket.emit("getDBDemoReelsByUserId", id);
      dispatch(setDataVideoSlice([]));
      socket.on("getDemoReelsByUserId", (data) => {
        dispatch(setLoaderSocket(false));
        dispatch(setDataVideoSlice(data));
      });
    }
  };

  const getCalculateTotalPagesDataRender = (socket, limit) => {
    if (socket) {
      socket.emit("calculateTotalPagesDataRender", limit);
      socket.on("totalPages", (totalPages) => {
        dispatch(
          setTotalPagesSlice({
            totalPagesImage: totalPages,
            totalPagesVideo: 0,
          })
        );
      });
    }
  };

  const functionsCardsInformation = {
    getRender,
    getDemoReel,
    getRenderByUserId,
    getDemoReelByUserId,
    getCalculateTotalPagesDataRender,
  };

  return { functionsCardsInformation, loaderSocket };
};
