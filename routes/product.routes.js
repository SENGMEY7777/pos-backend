const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');
const validate = require('../middlewares/validate.middleware');
const { productSchema } = require('../validators/product.validator');

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);
router.post('/', auth, role('admin'), validate(productSchema), ProductController.create);
router.put('/:id', auth, role('admin'), validate(productSchema), ProductController.update);
router.delete('/:id', auth, role('admin'), ProductController.delete);

module.exports = router;
