const OrderService = require('../services/order.service');

class OrderController {
  async createOrder(req, res, next) {
    try {
      const order = await OrderService.createOrder(req.user.id, req.body);
      res.status(201).json({ success: true, data: order });
    } catch (error) {
      next(error);
    }
  }

  async getUserOrders(req, res, next) {
    try {
      const orders = await OrderService.getUserOrders(req.user.id);
      res.status(200).json({ success: true, data: orders });
    } catch (error) {
      next(error);
    }
  }

  async getOrderById(req, res, next) {
    try {
      const order = await OrderService.getOrderById(req.params.id, req.user);
      res.status(200).json({ success: true, data: order });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OrderController();
