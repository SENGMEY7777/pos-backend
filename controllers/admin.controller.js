const AdminService = require('../services/admin.service');

class AdminController {
  async getDashboardStats(req, res, next) {
    try {
      const stats = await AdminService.getStats();
      res.status(200).json({ success: true, data: stats });
    } catch (error) {
      next(error);
    }
  }

  async updateOrderStatus(req, res, next) {
    try {
      const order = await AdminService.updateOrderStatus(req.params.id, req.body.status);
      res.status(200).json({ success: true, data: order });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AdminController();
