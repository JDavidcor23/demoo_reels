import React, { useEffect } from "react";
import { Characters, Header, Programs } from "../components";
import { io } from "socket.io-client";
export const Home = () => {
  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("renders", (data) => {
      console.log("data", data);
    });
    socket.on("disconnect", () => {
      console.log("disconnected");
    });
  }, []);
  return (
    <>
      <Header />
      <Characters />
      <Programs />
    </>
  );
};
