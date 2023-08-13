const http = require("http");
const express = require("express");
const {
  getDataRender,
  getDataVideo,
  addDemoReel,
  addRender,
  deleteRender,
  deleteVideo,
  updateVideo,
  updateRender,
} = require("./functions/index.js");
require("./db.js");

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

  socket.on("getDBemoReels", async () => {
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
      } catch (error) {
        throw new Error(error);
      }
    }

    if (data.type === "demo_reel") {
      try {
        await deleteVideo(data.id);
      } catch (error) {
        throw new Error(error);
      }
    }
  });

  socket.on("updateDesign", async (data) => {
    if (data.type === "render") {
      try {
        const newData = await updateRender(data.id, data);
        socket.emit("updatedData", newData);
      } catch (error) {
        throw new Error(error);
      }
    }

    if (data.type === "demo_reel") {
      try {
        const newData = await updateVideo(data.id, data);
        socket.emit("updatedData", newData);
      } catch (error) {
        throw new Error(error);
      }
    }
  });
});

server.listen(3000);
