const express = require('express');
const router = express.Router();
const brand.Controller = require('../controllers/brand.Controller');

router.get('/', brand.Controller.getAll);
router.get('/:id', brand.Controller.getById);
router.post('/', brand.Controller.create);
router.put('/:id', brand.Controller.update);
router.delete('/:id', brand.Controller.delete);

module.exports = router;
