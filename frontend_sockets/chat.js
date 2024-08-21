const API_URL = "http://localhost:3000";
const socket = io(API_URL);

const $ = (selector) => document.querySelector(selector);

const username = $("#username");
const generalRoom = $("#generalRoom");
const randomRoom = $("#randomRoom");
const inputMessage = $("#inputMessage");
const chat = $("#chat");
const room = $("#room");
const rooms = $("#rooms");

let roomName = "";

const joinRoom = (selectedRoom) => {
  const usernameValue = $("#username").value;
  if (usernameValue.trim() === "") {
    alert("Please enter a username");
    return;
  }

  socket.emit("join", selectedRoom);
  rooms.style.display = "none";
  room.style.display = "block";
  roomName = selectedRoom;
};

generalRoom.addEventListener("click", () => {
  joinRoom("generalRoom");
});

randomRoom.addEventListener("click", () => {
  joinRoom("randomRoom");
});

chat.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = inputMessage.value;

  if (message.trim !== "") {
    socket.emit("chat", {
      message,
      user: username.value,
      room: roomName,
    });
  }
});

socket.on("chat", (message) => {
  const messagesList = $("#messagesList");
  const li = document.createElement("li");
  li.textContent = `${message.user}: ${message.message}`;
  messagesList.appendChild(li);
  inputMessage.value = "";
});
