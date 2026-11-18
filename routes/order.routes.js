const express = require('express');
const router = express.Router();
const order.Controller = require('../controllers/order.Controller');

router.get('/', order.Controller.getAll);
router.get('/:id', order.Controller.getById);
router.post('/', order.Controller.create);
router.put('/:id', order.Controller.update);
router.delete('/:id', order.Controller.delete);

module.exports = router;
