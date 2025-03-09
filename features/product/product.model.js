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
}

let products = [
  new ProductModel(1, "Product 1", 200, "Books"),
  new ProductModel(2, "Product 2", 100, "Books"),
  new ProductModel(3, "Product 3", 250, "Books"),
];
