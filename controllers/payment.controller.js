const PaymentService = require('../services/payment.service');

class PaymentController {
  async processPayment(req, res, next) {
    try {
      const result = await PaymentService.processPayment(req.user.id, req.body);
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PaymentController();
