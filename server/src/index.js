const http = require("http");
const express = require("express");
const {
  login,
  signup,
  getUser,
  addRender,
  editProfile,
  addDemoReel,
  deleteVideo,
  updateVideo,
  updateRender,
  getDataVideo,
  deleteRender,
  getDataRender,
  getDemoReelByUserId,
  getDataRenderByUserId,
  calculateTotalPagesDataRender,
} = require("./functions/index.js");
const { verifyToken } = require("./functions/jwt/index.js");
const { returnError } = require("./helpers/errorCode.js");
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
      socket.emit("token", null);
      socket.emit("error", returnError(error.message));
    }
  });

  socket.on("signup", async (data) => {
    try {
      const token = await signup(data);
      socket.emit("token", token);
    } catch (error) {
      socket.emit("token", null);
      socket.emit("error", returnError(error.message));
    }
  });

  socket.on("editProfile", async (data) => {
    try {
      const userUpdated = await editProfile(data);
      socket.emit("token", userUpdated);
    } catch (error) {
      socket.emit("error", error.message);
    }
  });
  
  socket.on("calculateTotalPagesDataRender", async (limit) => {
    try {
      const totalPages = await calculateTotalPagesDataRender(limit);
      socket.emit("totalPages", totalPages);
    } catch (error) {
      socket.emit("error", error.message);
    }
  });

  socket.on("getDBRenders", async (data) => {
    try {
      const renders = await getDataRender(data.limit, data.offset);
      socket.emit("getRenders", renders);
    } catch (error) {
      socket.emit("error", error.message);
    }
  });

  socket.on("getDBDemoReels", async () => {
    // authenticateJWT(socket, async () => {
    try {
      const data = await getDataVideo();
      socket.emit("getDemoReels", data);
    } catch (error) {
      socket.emit("error", error.message);
    }
    // });
  });

  socket.on("addRender", async (data) => {
    try {
      const newData = await addRender(data);
      socket.emit("newRender", newData);
    } catch (error) {
      socket.emit("error", error.message);
    }
  });

  socket.on("addDemoReel", async (data) => {
    try {
      const newData = await addDemoReel(data);
      socket.emit("newDemoReel", newData);
    } catch (error) {
      socket.emit("error", error.message);
    }
  });

  socket.on("deleteDesign", async (data) => {
    if (data.type === "render") {
      try {
        await deleteRender(data.id);
      } catch (error) {
        socket.emit("error", error.message);
      }
    }

    if (data.type === "demo_reel") {
      try {
        await deleteVideo(data.id);
      } catch (error) {
        socket.emit("error", error.message);
      }
    }
  });

  socket.on("updateDesign", async (data) => {
    if (data.type === "render") {
      try {
        const newData = await updateRender(data.id, data);
        socket.emit("updatedData", newData);
      } catch (error) {
        socket.emit("error", error.message);
      }
    }

    if (data.type === "demo_reel") {
      try {
        const newData = await updateVideo(data.id, data);
        socket.emit("updatedData", newData);
      } catch (error) {
        socket.emit("error", error.message);
      }
    }
  });

  socket.on("getUser", async (id) => {
    try {
      const userData = await getUser(id);
      socket.emit("getUser", userData);
    } catch (error) {
      socket.emit("error", error.message);
    }
  });

  socket.on("getDBRendersByUserId", async (id) => {
    try {
      const userData = await getDataRenderByUserId(id);
      socket.emit("getRendersByUserId", userData);
    } catch (error) {
      socket.emit("error", error.message);
    }
  });

  socket.on("getDBDemoReelsByUserId", async (id) => {
    try {
      const userData = await getDemoReelByUserId(id);
      socket.emit("getDemoReelsByUserId", userData);
    } catch (error) {
      socket.emit("error", error.message);
    }
  });
});

server.listen(3000);
