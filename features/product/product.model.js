import UserModel from "../users/user.model.js";

export default class ProductModel {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  static getAll() {
    return products;
  }

  static add(name, price, category) {
    const newProduct = new ProductModel(
      products.length + 1,
      name,
      price,
      category
    );
    products.push(newProduct);
    return newProduct;
  }

  static getById(id) {
    return products.find((product) => product.id == id);
  }

  static filter(minPrice, maxPrice, category) {
    const result = products.filter((product) => {
      return (
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!category || product.category == category)
      );
    });
    return result;
  }
  static rate(userId, productId, rating) {
    // 1.check user is valid or not
    const user = UserModel.getAll().find((u) => u.id == userId);
    if (!user) {
      return "user not found";
    }
    // 2.check product is valid or not
    const product = products.find((p) => p.id == productId);
    if (!product) {
      return "Product not found";
    }
    // 3.check rating array is present or not
    if (!product.ratings) {
      product.ratings = [];
    }
    // 4.check existing rating for the user
    const findExistingRatingIndex = product.ratings.findIndex(
      (r) => r.userId == userId
    );
    if (findExistingRatingIndex >= 0) {
      product.ratings[findExistingRatingIndex].rating = rating;
      return "rating updated sucessfully";
    } else {
      product.ratings.push({ userId, productId, rating });
      return "rating added sucessfully";
    }
  }
}

let products = [
  new ProductModel(1, "Product 1", 1000, "books"),
  new ProductModel(2, "Product 2", 1500, "electroincs"),
  new ProductModel(3, "Product 3", 2000, "books"),
  new ProductModel(3, "Product 4", 2500, "electronics"),
];
