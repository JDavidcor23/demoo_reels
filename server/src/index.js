import http from "http";
import express from "express";
import {
  getDataRender,
  getDataVideo,
  addDemoReel,
  addRender,
  deleteRender,
  deleteVideo,
} from "./functions/index.js";
import "./db.js";

const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  },
});

io.on("connection", async (socket) => {
  socket.on("getDBrenders", async () => {
    try {
      const data = await getDataRender();
      socket.emit("getRenders", data);
    } catch (error) {
      throw new Error(error);
    }
  });

  socket.emit("getDBemoReels", async () => {
    try {
      const data = await getDataVideo();
      socket.emit("getDemoReels", data);
    } catch (error) {
      throw new Error(error);
    }
  });

  socket.on("addRender", async (data) => {
    try {
      const newData = await addRender(data);
      socket.emit("newRender", newData);
    } catch (error) {
      throw new Error(error);
    }
  });

  socket.on("addDemoReel", async (data) => {
    try {
      const newData = await addDemoReel(data);
      socket.emit("newDemoReel", newData);
    } catch (error) {
      throw new Error(error);
    }
  });

  socket.on("deleteDesign", async (data) => {
    if (data.type === "render") {
      try {
        await deleteRender(data.id);
        socket.emit("idDeleted", {
          id: data.id,
          type: data.type,
        });
      } catch (error) {
        throw new Error(error);
      }
    }

    if (data.type === "demo_reel") {
      try {
        await deleteVideo(data.id);
        socket.emit("idDeleted", {
          id: data.id,
          type: data.type,
        });
      } catch (error) {
        throw new Error(error);
      }
    }
  });
});

server.listen(3000);
