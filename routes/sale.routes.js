const express = require('express');
const router = express.Router();
const sale.Controller = require('../controllers/sale.Controller');

router.get('/', sale.Controller.getAll);
router.get('/:id', sale.Controller.getById);
router.post('/', sale.Controller.create);
router.put('/:id', sale.Controller.update);
router.delete('/:id', sale.Controller.delete);

module.exports = router;
