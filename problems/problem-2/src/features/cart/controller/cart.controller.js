// Please don't change the pre-written code
// Import the necessary modules here

import { addToCart, removeFromCart } from "../model/cart.model";

export const addToCartController = (req, res) => {
  const userId = req.userId;
  const { productId, quantity } = req.query;
  const cartItems = addToCart(userId, productId, quantity);
  return res.status(201).send({ success: true, item: cartItems });
};

export const removeFromCartController = (req, res) => {
  const userId = req.userId;
  const { itemId } = req.params;
  const deletedItem = removeFromCart(userId, itemId);

  if (deletedItem) {
    return res.status(200).send({
      success: true,
      deletedCartItem: {
        userId: deletedItem.userId,
        cartItemId: deletedItem.id,
        productId: deletedItem.productId,
        quantity: deletedItem.quantity,
      },
    });
  }

  return res.status(403).send({ success: false, msg: "Operation not allowed" });
};
