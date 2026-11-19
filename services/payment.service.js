const OrderModel = require('../models/order.model');

class PaymentService {
  async processPayment(userId, paymentData) {
    const { order_id, payment_method } = paymentData;
    const order = await OrderModel.findById(order_id);
    if (!order) {
      const err = new Error('Order not found');
      err.statusCode = 404;
      throw err;
    }
    if (order.user_id !== userId) {
      const err = new Error('Forbidden');
      err.statusCode = 403;
      throw err;
    }
    await OrderModel.updateStatus(order_id, 'paid');
    return { success: true, message: 'Payment processed successfully', order_id, payment_method };
  }
}

module.exports = new PaymentService();
