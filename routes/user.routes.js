const express = require('express');
const router = express.Router();
const user.Controller = require('../controllers/user.Controller');

router.get('/', user.Controller.getAll);
router.get('/:id', user.Controller.getById);
router.post('/', user.Controller.create);
router.put('/:id', user.Controller.update);
router.delete('/:id', user.Controller.delete);

module.exports = router;
