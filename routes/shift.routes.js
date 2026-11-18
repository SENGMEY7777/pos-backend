const express = require('express');
const router = express.Router();
const shift.Controller = require('../controllers/shift.Controller');

router.get('/', shift.Controller.getAll);
router.get('/:id', shift.Controller.getById);
router.post('/', shift.Controller.create);
router.put('/:id', shift.Controller.update);
router.delete('/:id', shift.Controller.delete);

module.exports = router;
