const CartService = require('../services/cart.service');

class CartController {
  async getCart(req, res, next) {
    try {
      const cart = await CartService.getCart(req.user.id);
      res.status(200).json({ success: true, data: cart });
    } catch (error) {
      next(error);
    }
  }

  async addItem(req, res, next) {
    try {
      const cart = await CartService.addItem(req.user.id, req.body);
      res.status(200).json({ success: true, data: cart });
    } catch (error) {
      next(error);
    }
  }

  async removeItem(req, res, next) {
    try {
      const cart = await CartService.removeItem(req.user.id, req.params.itemId);
      res.status(200).json({ success: true, data: cart });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CartController();
