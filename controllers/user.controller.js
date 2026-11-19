const UserService = require('../services/user.service');

class UserController {
  async getProfile(req, res, next) {
    try {
      const user = await UserService.findById(req.user.id);
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req, res, next) {
    try {
      const updated = await UserService.update(req.user.id, req.body);
      res.status(200).json({ success: true, data: updated });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
