const express = require('express');
const router = express.Router();
const inventory.Controller = require('../controllers/inventory.Controller');

router.get('/', inventory.Controller.getAll);
router.get('/:id', inventory.Controller.getById);
router.post('/', inventory.Controller.create);
router.put('/:id', inventory.Controller.update);
router.delete('/:id', inventory.Controller.delete);

module.exports = router;
