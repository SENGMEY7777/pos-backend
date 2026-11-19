const db = require('../config/database');

class OrderModel {
  async createOrder(userId, totalAmount, items) {
    const connection = await db.getConnection();
    try {
      await connection.beginTransaction();
      const [orderResult] = await connection.query(
        'INSERT INTO orders (user_id, total_amount, status) VALUES (?, ?, ?)',
        [userId, totalAmount, 'pending']
      );
      const orderId = orderResult.insertId;

      for (const item of items) {
        await connection.query(
          'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
          [orderId, item.product_id, item.quantity, item.price]
        );
      }
      await connection.commit();
      connection.release();
      return orderId;
    } catch (error) {
      await connection.rollback();
      connection.release();
      throw error;
    }
  }

  async findByUserId(userId) {
    const [rows] = await db.query('SELECT * FROM orders WHERE user_id = ?', [userId]);
    return rows;
  }

  async findById(orderId) {
    const [orders] = await db.query('SELECT * FROM orders WHERE id = ?', [orderId]);
    if (orders.length === 0) return null;
    const [items] = await db.query('SELECT * FROM order_items WHERE order_id = ?', [orderId]);
    return { ...orders[0], items };
  }

  async updateStatus(orderId, status) {
    await db.query('UPDATE orders SET status = ? WHERE id = ?', [status, orderId]);
    return this.findById(orderId);
  }
}

module.exports = new OrderModel();
