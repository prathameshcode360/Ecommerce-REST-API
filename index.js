import express from "express";
import bodyParser from "body-parser";
import productRouter from "./features/product/product.routes.js";

const server = express();

// Middleware to parse JSON request body
server.use(bodyParser.json());

// Product Routes
server.use("/api/products", productRouter);

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
