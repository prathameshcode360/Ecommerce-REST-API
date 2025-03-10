import express from "express";
import productRouter from "./features/product/product.routes.js";
import userRouter from "./features/users/user.routes.js";
import jwtAuth from "./middlewares/jwtAuth.middleware.js";

const server = express();
server.use(express.urlencoded({ extended: true })); // Add this

// Product Routes
server.use("/api/products", productRouter);

//User Routes
server.use("/api/users", userRouter);

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
