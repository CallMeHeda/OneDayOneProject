const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("join", () => {
    // socket.join();
    socket.broadcast.emit("ready-to-get-state");
  });

  socket.on("canvas-state", (state) => {
    socket.broadcast.emit("state-from-server", state);
  });

  socket.on("isDrawing", (data) => {
    socket.broadcast.emit("isDrawing", data);
  });

  socket.on("clear", () => {
    io.emit("clear");
    console.log("clear");
  });
});

server.listen(3001, () => {
  console.log("listening on 3001");
});
