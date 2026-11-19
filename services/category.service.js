const CategoryModel = require('../models/category.model');

class CategoryService {
  async findAll() {
    return await CategoryModel.findAll();
  }

  async create(categoryData) {
    return await CategoryModel.create(categoryData);
  }
}

module.exports = new CategoryService();
