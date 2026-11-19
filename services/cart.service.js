const CartModel = require('../models/cart.model');

class CartService {
  async getCart(userId) {
    return await CartModel.getCartByUserId(userId);
  }

  async addItem(userId, itemData) {
    const { product_id, quantity } = itemData;
    return await CartModel.addItem(userId, product_id, quantity);
  }

  async removeItem(userId, cartItemId) {
    return await CartModel.removeItem(userId, cartItemId);
  }
}

module.exports = new CartService();
