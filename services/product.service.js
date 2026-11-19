const ProductModel = require('../models/product.model');

class ProductService {
  async findAll(filters) {
    return await ProductModel.findAll(filters);
  }

  async findById(id) {
    const product = await ProductModel.findById(id);
    if (!product) {
      const err = new Error('Product not found');
      err.statusCode = 404;
      throw err;
    }
    return product;
  }

  async create(productData) {
    return await ProductModel.create(productData);
  }

  async update(id, productData) {
    await this.findById(id);
    return await ProductModel.update(id, productData);
  }

  async delete(id) {
    await this.findById(id);
    return await ProductModel.delete(id);
  }
}

module.exports = new ProductService();
