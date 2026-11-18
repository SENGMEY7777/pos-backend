const express = require('express');
const router = express.Router();
const purchase.Controller = require('../controllers/purchase.Controller');

router.get('/', purchase.Controller.getAll);
router.get('/:id', purchase.Controller.getById);
router.post('/', purchase.Controller.create);
router.put('/:id', purchase.Controller.update);
router.delete('/:id', purchase.Controller.delete);

module.exports = router;
