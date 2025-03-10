import express from "express";
import ProductController from "./product.controller.js";

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get("/filter", productController.filterProduct);
productRouter.get("/", productController.getProducts);
productRouter.post("/addproduct", productController.addProduct);
productRouter.post("/rate", productController.rateProduct);
productRouter.get("/:id", productController.getOneProduct);

export default productRouter;
