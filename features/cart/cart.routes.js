import express from "express";
import CartController from "./cart.controller.js";

const cartRouter = express.Router();

const cartController = new CartController();

cartRouter.post("/add", cartController.addToCart);
cartRouter.get("/:userId", cartController.getCartItems);
cartRouter.post("/update", cartController.updateCartItem);
cartRouter.delete("/deleteCart/:userId", cartController.deleteCart);
cartRouter.delete(
  "/deleteCartItem/:userId/:productId",
  cartController.deleteCartItem
);

export default cartRouter;
