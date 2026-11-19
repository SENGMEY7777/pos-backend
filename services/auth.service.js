const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const env = require('../config/env');

class AuthService {
  async register(userData) {
    const existing = await UserModel.findByEmail(userData.email);
    if (existing) {
      const err = new Error('Email already in use');
      err.statusCode = 400;
      throw err;
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const userId = await UserModel.create({ ...userData, password: hashedPassword });
    const user = await UserModel.findById(userId);
    const token = jwt.sign({ id: user.id, role: user.role }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
    return { user, token };
  }

  async login(credentials) {
    const user = await UserModel.findByEmail(credentials.email);
    if (!user) {
      const err = new Error('Invalid email or password');
      err.statusCode = 401;
      throw err;
    }
    const isMatch = await bcrypt.compare(credentials.password, user.password);
    if (!isMatch) {
      const err = new Error('Invalid email or password');
      err.statusCode = 401;
      throw err;
    }
    const token = jwt.sign({ id: user.id, role: user.role }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
    const { password, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, token };
  }
}

module.exports = new AuthService();
