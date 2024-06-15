import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

export const useSocketIo = (url) => {
  const [socket, setSocket] = useState(null);

  const dataVideo = useSelector((state) => state.dataVideo.data);

  const totalPages = useSelector((state) => state.totalPages);

  const dataRender = useSelector((state) => state.dataRender.data);

  useEffect(() => {
    const newSocket = io(url);
    setSocket(newSocket);
  }, [url]);

  return { socket, dataVideo, dataRender, totalPages };
};
