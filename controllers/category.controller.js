const CategoryService = require('../services/category.service');

class CategoryController {
  async getAll(req, res, next) {
    try {
      const categories = await CategoryService.findAll();
      res.status(200).json({ success: true, data: categories });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const category = await CategoryService.create(req.body);
      res.status(201).json({ success: true, data: category });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CategoryController();
