const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cart.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/', auth, CartController.getCart);
router.post('/', auth, CartController.addItem);
router.delete('/:itemId', auth, CartController.removeItem);

module.exports = router;
