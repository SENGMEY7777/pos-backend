const express = require('express');
const router = express.Router();
const payment.Controller = require('../controllers/payment.Controller');

router.get('/', payment.Controller.getAll);
router.get('/:id', payment.Controller.getById);
router.post('/', payment.Controller.create);
router.put('/:id', payment.Controller.update);
router.delete('/:id', payment.Controller.delete);

module.exports = router;
