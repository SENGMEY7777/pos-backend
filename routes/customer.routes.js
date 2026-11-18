const express = require('express');
const router = express.Router();
const customer.Controller = require('../controllers/customer.Controller');

router.get('/', customer.Controller.getAll);
router.get('/:id', customer.Controller.getById);
router.post('/', customer.Controller.create);
router.put('/:id', customer.Controller.update);
router.delete('/:id', customer.Controller.delete);

module.exports = router;
