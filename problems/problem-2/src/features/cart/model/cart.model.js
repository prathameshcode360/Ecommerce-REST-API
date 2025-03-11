// Please don't change the pre-written code
// Import the necessary modules here

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  const newItem = new cartModel(userId, productId, quantity);
  cartItems.push(newItem);
  return cartItems;
};

export const removeFromCart = (userId, cartItemId) => {
  const index = cartItems.findIndex(
    (item) => item.userId == userId && item.id == cartItemId
  );
  if (index >= 0) {
    const deletedItem = cartItems.splice(index, 1)[0]; // Remove and store deleted item
    return deletedItem;
  }
  return null;
};
