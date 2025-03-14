import express from "express";
import UserController from "./user.controller.js";

const userRouter = express.Router();

const userController = new UserController();
userRouter.get("/", userController.getUsers);
userRouter.post("/signup", userController.signup);
userRouter.post("/signin", userController.signin);

export default userRouter;
