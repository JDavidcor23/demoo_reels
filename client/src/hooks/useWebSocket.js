import { useRef, useState } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setDataRenderSlice } from "../store/slices/dataRender";
import { setDataVideoSlice } from "../store/slices/dataVideo";

export const useWebSocket = () => {
  const dispatch = useDispatch();

  const dataRender = useSelector((state) => state.dataRender.data);

  const dataVideo = useSelector((state) => state.dataVideo.data);

  const [loaderSocket, setLoaderSocket] = useState(false);

  const socket = io("http://localhost:3000");

  const getRender = () => {
    socket.emit("getDBrenders");
    socket.on("getRenders", (data) => {
      dispatch(setDataRenderSlice([]));
      dispatch(setDataRenderSlice(data));
    });
  };

  const getDemoReel = () => {
    socket.on("getDBemoReels");
    socket.on("getDemoReels", (data) => {
      dispatch(setDataVideoSlice([]));
      dispatch(setDataVideoSlice(data));
    });
  };

  const addRender = async (data) => {
    // try {
    // setLoaderSocket(true);
    socket.emit("addRender", data);
    socket.on("newRender", (data) => {
      alert("Render agregado", data.type);
      // setDataRender([...dataRender, data]);
    });
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoaderSocket(false);
    // }
  };
  // Configurar el receptor para "newRender" fuera de socket.on("addRender", ...)

  const addDemoReel = (data) => {
    try {
      setLoaderSocket(true);
      socket.emit("addDemoReel", data);
      socket.on("newDemoReel", (data) => {
        setDataVideo([...dataVideo, data]);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoaderSocket(false);
    }
  };

  const deleteDesignSocket = async (id, type) => {
    try {
      setLoaderSocket(true);
      const data = { id, type };
      socket.emit("deleteDesign", data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoaderSocket(false);
    }
  };

  const updateDesignSocket = async (data) => {
    try {
      setLoaderSocket(true);
      socket.emit("updateDesign", data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoaderSocket(false);
    }
  };

  const disconnect = () => {
    socket.disconnect();
  };

  return {
    dataRender,
    dataVideo,
    getDemoReel,
    loaderSocket,
    deleteDesignSocket,
    getRender,
    addRender,
    addDemoReel,
    updateDesignSocket,
    disconnect,
  };
};
