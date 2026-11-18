const express = require('express');
const router = express.Router();
const refund.Controller = require('../controllers/refund.Controller');

router.get('/', refund.Controller.getAll);
router.get('/:id', refund.Controller.getById);
router.post('/', refund.Controller.create);
router.put('/:id', refund.Controller.update);
router.delete('/:id', refund.Controller.delete);

module.exports = router;
