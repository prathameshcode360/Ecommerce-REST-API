import express from "express";
import fileUpload from "../../middlewares/fileupload.middleware.js";
import ProductController from "./product.controller.js";

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get("/", productController.getProducts);
productRouter.post(
  "/addproduct",
  fileUpload.single("image"),
  productController.addProduct
);
productRouter.get("/:id", productController.getOneProduct);

export default productRouter;
