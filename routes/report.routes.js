const express = require('express');
const router = express.Router();
const report.Controller = require('../controllers/report.Controller');

router.get('/', report.Controller.getAll);
router.get('/:id', report.Controller.getById);
router.post('/', report.Controller.create);
router.put('/:id', report.Controller.update);
router.delete('/:id', report.Controller.delete);

module.exports = router;
