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
}

let products = [
  new ProductModel(1, "Product 1", 1000, "books"),
  new ProductModel(2, "Product 2", 1500, "electroincs"),
  new ProductModel(3, "Product 3", 2000, "books"),
  new ProductModel(3, "Product 4", 2500, "electronics"),
];
