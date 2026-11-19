const db = require('../config/database');

class CartModel {
  async getCartByUserId(userId) {
    const [rows] = await db.query(
      `SELECT ci.id as cart_item_id, p.id as product_id, p.name, p.price, ci.quantity, (p.price * ci.quantity) as total
       FROM cart_items ci
       JOIN carts c ON ci.cart_id = c.id
       JOIN products p ON ci.product_id = p.id
       WHERE c.user_id = ?`,
      [userId]
    );
    return rows;
  }

  async findOrCreateCart(userId) {
    let [carts] = await db.query('SELECT * FROM carts WHERE user_id = ?', [userId]);
    if (carts.length === 0) {
      const [result] = await db.query('INSERT INTO carts (user_id) VALUES (?)', [userId]);
      return result.insertId;
    }
    return carts[0].id;
  }

  async addItem(userId, productId, quantity) {
    const cartId = await this.findOrCreateCart(userId);
    const [existing] = await db.query('SELECT * FROM cart_items WHERE cart_id = ? AND product_id = ?', [cartId, productId]);
    if (existing.length > 0) {
      const newQty = existing[0].quantity + quantity;
      await db.query('UPDATE cart_items SET quantity = ? WHERE id = ?', [newQty, existing[0].id]);
    } else {
      await db.query('INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)', [cartId, productId, quantity]);
    }
    return this.getCartByUserId(userId);
  }

  async removeItem(userId, cartItemId) {
    await db.query('DELETE FROM cart_items WHERE id = ?', [cartItemId]);
    return this.getCartByUserId(userId);
  }

  async clearCart(userId) {
    const cartId = await this.findOrCreateCart(userId);
    await db.query('DELETE FROM cart_items WHERE cart_id = ?', [cartId]);
  }
}

module.exports = new CartModel();
