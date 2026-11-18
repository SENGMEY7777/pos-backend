const express = require('express');
const router = express.Router();
const supplier.Controller = require('../controllers/supplier.Controller');

router.get('/', supplier.Controller.getAll);
router.get('/:id', supplier.Controller.getById);
router.post('/', supplier.Controller.create);
router.put('/:id', supplier.Controller.update);
router.delete('/:id', supplier.Controller.delete);

module.exports = router;
