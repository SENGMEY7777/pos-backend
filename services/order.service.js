const CartModel = require('../models/cart.model');
const OrderModel = require('../models/order.model');

class OrderService {
  async createOrder(userId, orderData) {
    const cartItems = await CartModel.getCartByUserId(userId);
    if (cartItems.length === 0) {
      const err = new Error('Cart is empty');
      err.statusCode = 400;
      throw err;
    }
    const totalAmount = cartItems.reduce((sum, item) => sum + Number(item.total), 0);
    const orderId = await OrderModel.createOrder(userId, totalAmount, cartItems);
    await CartModel.clearCart(userId);
    return await OrderModel.findById(orderId);
  }

  async getUserOrders(userId) {
    return await OrderModel.findByUserId(userId);
  }

  async getOrderById(orderId, user) {
    const order = await OrderModel.findById(orderId);
    if (!order) {
      const err = new Error('Order not found');
      err.statusCode = 404;
      throw err;
    }
    if (user.role !== 'admin' && order.user_id !== user.id) {
      const err = new Error('Forbidden');
      err.statusCode = 403;
      throw err;
    }
    return order;
  }
}

module.exports = new OrderService();
