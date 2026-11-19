const db = require('../config/database');

class CategoryModel {
  async findAll() {
    const [rows] = await db.query('SELECT * FROM categories');
    return rows;
  }

  async findById(id) {
    const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
    return rows[0];
  }

  async create(categoryData) {
    const { name, description } = categoryData;
    const [result] = await db.query('INSERT INTO categories (name, description) VALUES (?, ?)', [name, description]);
    return this.findById(result.insertId);
  }
}

module.exports = new CategoryModel();
