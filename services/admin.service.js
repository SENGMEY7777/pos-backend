const db = require('../config/database');
const OrderModel = require('../models/order.model');

class AdminService {
  async getStats() {
    const [usersCount] = await db.query('SELECT COUNT(*) as count FROM users');
    const [productsCount] = await db.query('SELECT COUNT(*) as count FROM products');
    const [ordersCount] = await db.query('SELECT COUNT(*) as count FROM orders');
    return {
      users: usersCount[0].count,
      products: productsCount[0].count,
      orders: ordersCount[0].count
    };
  }

  async updateOrderStatus(orderId, status) {
    return await OrderModel.updateStatus(orderId, status);
  }
}

module.exports = new AdminService();
