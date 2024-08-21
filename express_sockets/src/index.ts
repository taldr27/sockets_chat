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
  socket.on("chat", (message) => {
    io.emit("chat", message);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
