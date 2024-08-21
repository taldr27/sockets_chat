import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
  },
});

app.get("/", (_req, res) => {
  res.send("Hello World");
});

io.on("connection", (socket) => {
  socket.on("join", (room) => {
    console.log(`User joined room: ${room}`);
    socket.join(room);
  });

  socket.on("chat", (message) => {
    io.to(message.room).emit("chat", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
