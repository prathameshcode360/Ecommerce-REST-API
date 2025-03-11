import CartModel from "./cart.model.js";

export default class CartController {
  addToCart(req, res) {
    try {
      const { userId, productId, quantity } = req.body;
      const result = CartModel.add(userId, productId, quantity);
      if (result) {
        return res.send({ msg: result });
      }
    } catch (error) {
      console.log("Error in addToCart", error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }
  getCartItems(req, res) {
    const userId = req.params.userId;
    const cartItems = CartModel.getItems(userId);
    return res.status(200).send({ cartItems });
  }

  updateCartItem(req, res) {
    try {
      const { userId, productId, quantity } = req.body;
      const result = CartModel.update(userId, productId, quantity);
      return res.send(result);
    } catch (error) {
      console.log("Update Error:", error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }
  deleteCart(req, res) {
    try {
      const userId = req.params.userId;
      const result = CartModel.deleteCart(userId);
      return res.send(result);
    } catch (error) {
      console.log("Delete Cart Error:", error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }
  deleteCartItem(req, res) {
    try {
      const userId = req.params.userId;
      const productId = req.params.productId;
      const result = CartModel.deleteCartItem(userId, productId);
      return res.send(result);
    } catch (error) {
      console.log("Delete Cart Item Error:", error);
      return res.status(500).send({ msg: "Internal server error" });
    }
  }
}
