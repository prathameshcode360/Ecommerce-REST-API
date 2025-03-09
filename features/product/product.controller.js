import ProductModel from "./product.model.js";

export default class ProductController {
  getProducts(req, res) {
    try {
      const products = ProductModel.getAll();
      return res.status(200).send({ products });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }

  addProduct(req, res) {
    try {
      console.log(req.body);
      const { name, price, image, category } = req.body;
      const newProduct = ProductModel.add(name, price, image, category);
      return res
        .status(201)
        .send({ msg: "New product added successfully", newProduct });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }

  getOneProduct(req, res) {
    try {
      const id = Number(req.params.id); // Convert id to a number
      const product = ProductModel.getById(id);
      if (product) {
        return res.status(200).send({ product });
      } else {
        return res.status(404).send({ msg: "Product not found" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }
}
