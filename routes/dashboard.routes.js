const express = require('express');
const router = express.Router();
const dashboard.Controller = require('../controllers/dashboard.Controller');

router.get('/', dashboard.Controller.getAll);
router.get('/:id', dashboard.Controller.getById);
router.post('/', dashboard.Controller.create);
router.put('/:id', dashboard.Controller.update);
router.delete('/:id', dashboard.Controller.delete);

module.exports = router;
