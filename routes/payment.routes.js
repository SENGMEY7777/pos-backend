const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/payment.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/', auth, PaymentController.processPayment);

module.exports = router;
