import express from "express";
import cors from "cors";
import productRouter from "./features/product/product.routes.js";
import userRouter from "./features/users/user.routes.js";
import cartRouter from "./features/cart/cart.routes.js";

const server = express();

server.use(express.urlencoded({ extended: true })); // Add this

// add swagger configuration
// server.use("/api-docs", swagger.serve, swagger.setup(apiDoc));

// CORS middleware

const corsOption = {
  origin: "http://127.0.0.1:5500/index.html",
};
server.use(cors(corsOption));
// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET");
//   res.header("Access-Control-Allow-Headers", "*");
//   next();
// });

// Product Routes
server.use("/api/products", productRouter);

//User Routes
server.use("/api/users", userRouter);

// cart routes
server.use("/api/cart", cartRouter);

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
