const express = require('express');
const router = express.Router();
const product.Controller = require('../controllers/product.Controller');

router.get('/', product.Controller.getAll);
router.get('/:id', product.Controller.getById);
router.post('/', product.Controller.create);
router.put('/:id', product.Controller.update);
router.delete('/:id', product.Controller.delete);

module.exports = router;
