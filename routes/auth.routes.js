const express = require('express');
const router = express.Router();
const auth.Controller = require('../controllers/auth.Controller');

router.get('/', auth.Controller.getAll);
router.get('/:id', auth.Controller.getById);
router.post('/', auth.Controller.create);
router.put('/:id', auth.Controller.update);
router.delete('/:id', auth.Controller.delete);

module.exports = router;
