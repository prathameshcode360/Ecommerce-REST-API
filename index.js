import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Welcome to node js server");
});

server.listen(3200, () => {
  console.log("Server is running on the port 3200");
});
