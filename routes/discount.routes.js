const express = require('express');
const router = express.Router();
const discount.Controller = require('../controllers/discount.Controller');

router.get('/', discount.Controller.getAll);
router.get('/:id', discount.Controller.getById);
router.post('/', discount.Controller.create);
router.put('/:id', discount.Controller.update);
router.delete('/:id', discount.Controller.delete);

module.exports = router;
