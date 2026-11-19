const db = require('../config/database');

class UserModel {
  async create(userData) {
    const { name, email, password, role = 'customer' } = userData;
    const [result] = await db.query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, password, role]
    );
    return result.insertId;
  }

  async findByEmail(email) {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  }

  async findById(id) {
    const [rows] = await db.query('SELECT id, name, email, role, created_at FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  async update(id, userData) {
    const { name, email } = userData;
    await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    return this.findById(id);
  }
}

module.exports = new UserModel();
