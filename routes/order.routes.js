const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/', auth, OrderController.createOrder);
router.get('/', auth, OrderController.getUserOrders);
router.get('/:id', auth, OrderController.getOrderById);

module.exports = router;
