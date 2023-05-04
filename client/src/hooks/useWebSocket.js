import { useState } from "react";
import { dataRender as renders } from "../data/dataRender";
import { dataVideo as videos } from "../data/dataVideo";
// import { io } from "socket.io-client";

export const useWebSocket = () => {
  const [dataRender, setDataRender] = useState([]);
  const [dataVideo, setDataVideo] = useState([]);

  // const socket = io("http://localhost:3000");

  const getRender = () => {
    setDataRender(renders);
    // socket.on("renders", (data) => {
    //   setDataRender(data);
    // });
  };

  const getDemoReel = () => {
    setDataVideo(videos);
    // socket.on("demo_reels", (data) => {
    //   console.log(data);
    //   setDataVideo(data);
    // });
  };

  const addRender = (data) => {
    // socket.emit("addRender", data);
    // socket.on("newRender", (data) => {
    //   setDataRender([...dataRender, data]);
    // });
  };

  const addDemoReel = (data) => {
    // socket.emit("addDemoReel", data);
    // socket.on("newDemoReel", (data) => {
    //   setDataVideo([...dataVideo, data]);
    // });
  };

  const disconnect = () => {
    // socket.disconnect();
  };

  return {
    dataRender,
    dataVideo,
    getDemoReel,
    getRender,
    addRender,
    addDemoReel,
    disconnect,
  };
};
