import express from "express";
import ArtPieceController from "./controller.js";

const router = express.Router();
const controller = new ArtPieceController();

router.post("/add", controller.create);
router.get("/", controller.get);
router.get("/:id", controller.getOne);
router.put("/update/:id", controller.update);
router.delete("/delete/:id", controller.delete);

export default router;
