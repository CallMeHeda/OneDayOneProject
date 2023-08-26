const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000;

io.on("connection", (socket) => {
  // when the client emits 'user joined', this listens and executes
  socket.on("join", (data) => {
    console.log(data.friendsId);
    socket.join(data.friendsId);
    // we tell the client to execute 'user joined'
    socket.broadcast.to(data.friendsId).emit("user joined");
  });

  socket.on("message", (data) => {
    // io.in & io.to are the same (From what I understand from the documentation)
    io.to(data.friendsId).emit("new message", {
      user: data.user,
      message: data.message,
    });
  });
});

server.listen(port, () => {
  console.log(`listening on *: ${port}`);
});
