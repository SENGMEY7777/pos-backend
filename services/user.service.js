const UserModel = require('../models/user.model');

class UserService {
  async findById(id) {
    const user = await UserModel.findById(id);
    if (!user) {
      const err = new Error('User not found');
      err.statusCode = 404;
      throw err;
    }
    return user;
  }

  async update(id, userData) {
    return await UserModel.update(id, userData);
  }
}

module.exports = new UserService();
