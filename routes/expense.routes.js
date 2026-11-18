const express = require('express');
const router = express.Router();
const expense.Controller = require('../controllers/expense.Controller');

router.get('/', expense.Controller.getAll);
router.get('/:id', expense.Controller.getById);
router.post('/', expense.Controller.create);
router.put('/:id', expense.Controller.update);
router.delete('/:id', expense.Controller.delete);

module.exports = router;
