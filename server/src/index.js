const http = require("http");
const express = require("express");
const {
  signup,
  getDataRender,
  getDataVideo,
  addDemoReel,
  addRender,
  deleteRender,
  deleteVideo,
  updateVideo,
  updateRender,
  login,
  editProfile,
} = require("./functions/index.js");
const { verifyToken } = require("./functions/jwt/index.js");
require("./db.js");

const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  },
});

function authenticateJWT(socket) {
  const token = socket.handshake.auth.token;
  try {
    if (verifyToken(token)) {
      return;
    }
  } catch (error) {
    throw new Error(error);
  }
}

io.on("connection", async (socket) => {
  socket.on("login", async (data) => {
    try {
      const userInfoAndToken = await login(data);
      socket.emit("token", userInfoAndToken);
    } catch (error) {
      socket.emit("error", error);
    }
  });

  socket.on("signup", async (data) => {
    try {
      const token = await signup(data);
      socket.emit("token", token);
    } catch (error) {
      socket.emit("error", error);
    }
  });

  socket.on("editProfile", async (data) => {
    try {
      await editProfile(data);
      return true;
    } catch (error) {
      socket.emit("error", error);
    }
  });

  socket.on("getDBrenders", async () => {
    try {
      const data = await getDataRender();
      socket.emit("getRenders", data);
    } catch (error) {
      socket.emit("error", error);
    }
  });

  socket.on("getDBdemoReels", async () => {
    // authenticateJWT(socket, async () => {
    try {
      const data = await getDataVideo();
      socket.emit("getDemoReels", data);
    } catch (error) {
      socket.emit("error", error);
    }
    // });
  });

  socket.on("addRender", async (data) => {
    try {
      const newData = await addRender(data);
      socket.emit("newRender", newData);
    } catch (error) {
      socket;
    }
  });

  socket.on("addDemoReel", async (data) => {
    try {
      const newData = await addDemoReel(data);
      socket.emit("newDemoReel", newData);
    } catch (error) {
      socket;
    }
  });

  socket.on("deleteDesign", async (data) => {
    if (data.type === "render") {
      try {
        await deleteRender(data.id);
      } catch (error) {
        socket;
      }
    }

    if (data.type === "demo_reel") {
      try {
        await deleteVideo(data.id);
      } catch (error) {
        socket;
      }
    }
  });

  socket.on("updateDesign", async (data) => {
    if (data.type === "render") {
      try {
        const newData = await updateRender(data.id, data);
        socket.emit("updatedData", newData);
      } catch (error) {
        socket;
      }
    }

    if (data.type === "demo_reel") {
      try {
        const newData = await updateVideo(data.id, data);
        socket.emit("updatedData", newData);
      } catch (error) {
        socket;
      }
    }
  });
});

server.listen(3000);
