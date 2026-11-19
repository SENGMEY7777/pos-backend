const db = require('../config/database');

class ProductModel {
  async findAll(filters) {
    let query = 'SELECT * FROM products WHERE 1=1';
    const params = [];
    if (filters.category_id) {
      query += ' AND category_id = ?';
      params.push(filters.category_id);
    }
    const [rows] = await db.query(query, params);
    return rows;
  }

  async findById(id) {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  }

  async create(productData) {
    const { name, description, price, stock, category_id, image_url } = productData;
    const [result] = await db.query(
      'INSERT INTO products (name, description, price, stock, category_id, image_url) VALUES (?, ?, ?, ?, ?, ?)',
      [name, description, price, stock, category_id, image_url]
    );
    return this.findById(result.insertId);
  }

  async update(id, productData) {
    const { name, description, price, stock, category_id, image_url } = productData;
    await db.query(
      'UPDATE products SET name = ?, description = ?, price = ?, stock = ?, category_id = ?, image_url = ? WHERE id = ?',
      [name, description, price, stock, category_id, image_url, id]
    );
    return this.findById(id);
  }

  async delete(id) {
    await db.query('DELETE FROM products WHERE id = ?', [id]);
    return true;
  }
}

module.exports = new ProductModel();
