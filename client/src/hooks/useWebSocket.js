import { useState } from "react";
import { io } from "socket.io-client";

export const useWebSocket = () => {
  const [dataRender, setDataRender] = useState([]);
  const [loaderSocket, setLoaderSocket] = useState(false);
  const [dataVideo, setDataVideo] = useState([]);

  const socket = io("http://localhost:3000");

  const getRender = () => {
    socket.emit("getDBrenders");
    socket.on("getRenders", (data) => {
      setDataRender(data);
    });
  };

  const getDemoReel = () => {
    socket.on("getDBemoReels");
    socket.on("getDemoReels", (data) => {
      setDataVideo(data);
    });
  };

  const addRender = (data) => {
    try {
      setLoaderSocket(true);
      socket.emit("addRender", data);
      socket.on("newRender", (data) => {
        setDataRender([...dataRender, data]);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoaderSocket(false);
    }
  };

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
      socket.on("idDeleted", (data) => {
        if (data.type === "render") {
          setDataRender(dataRender.filter((item) => item.id !== data.id));
        }

        if (data.type === "demo_reel") {
          setDataVideo(dataVideo.filter((item) => item.id !== data.id));
        }
      });
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
