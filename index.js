import express from "express";
import router from "./problems/problem-1/src/features/artPiece/routes.js";

const server = express();

server.use(express.urlencoded({ extended: true }));

server.use("/api/artpieces", router);

// Default route
server.get("/", (req, res) => {
  res.send("Welcome to Node.js server");
});

// Handle undefined routes
server.use((req, res) => {
  res.status(404).send({ msg: "Route not found" });
});

// Start server
server.listen(3200, () => {
  console.log("Server is running on port 3200");
});
