const express = require('express');
const router = express.Router();
const category.Controller = require('../controllers/category.Controller');

router.get('/', category.Controller.getAll);
router.get('/:id', category.Controller.getById);
router.post('/', category.Controller.create);
router.put('/:id', category.Controller.update);
router.delete('/:id', category.Controller.delete);

module.exports = router;
