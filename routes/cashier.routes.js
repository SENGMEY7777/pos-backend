const express = require('express');
const router = express.Router();
const cashier.Controller = require('../controllers/cashier.Controller');

router.get('/', cashier.Controller.getAll);
router.get('/:id', cashier.Controller.getById);
router.post('/', cashier.Controller.create);
router.put('/:id', cashier.Controller.update);
router.delete('/:id', cashier.Controller.delete);

module.exports = router;
