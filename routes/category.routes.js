const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.get('/', CategoryController.getAll);
router.post('/', auth, role('admin'), CategoryController.create);

module.exports = router;
