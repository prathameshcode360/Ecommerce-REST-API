import UserModel from "../users/user.model.js";

export default class CartModel {
  constructor(cartId, productId, quantity) {
    this.cartId = cartId;
    this.productId = productId;
    this.quantity = quantity;
  }

  static getItems(userId) {
    return cartItems[userId] || "No cart items";
  }

  static add(userId, productId, quantity) {
    // check user is valid or not
    const user = UserModel.getAll().find((u) => u.id == userId);
    if (!user) {
      return "user not found";
    }

    if (!cartItems[userId]) {
      cartItems[userId] = [];
    }
    const newItem = new CartModel(
      cartItems[userId].length + 1,
      productId,
      quantity
    );
    cartItems[userId].push(newItem);
    return { msg: "product added in cart", CartItem: newItem };
  }

  static update(userId, productId, quantity) {
    // Check if user has a cart
    if (!cartItems[userId]) {
      return "No cart items found for this user";
    }

    // Find product index in user's cart
    const productIndex = cartItems[userId].findIndex(
      (item) => item.productId == productId
    );

    if (productIndex >= 0) {
      // Update quantity
      cartItems[userId][productIndex].quantity = quantity;
      return "Cart item updated successfully";
    }

    return "Product not found in cart";
  }
  static deleteCart(userId) {
    if (!cartItems[userId]) {
      return "No cart items found for this user";
    } else {
      delete cartItems[userId];
      return "User cart deleted sucessfully";
    }
  }
  static deleteCartItem(userId, productId) {
    if (!cartItems[userId]) {
      return "No cart items found for this user";
    }

    // Product index dhundna
    const productIndex = cartItems[userId].findIndex(
      (item) => item.productId == productId
    );

    if (productIndex >= 0) {
      cartItems[userId].splice(productIndex, 1);
      return "Cart item deleted successfully";
    } else {
      return "Product not found in cart";
    }
  }
}

var cartItems = {};
