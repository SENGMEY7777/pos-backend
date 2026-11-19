const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.get('/stats', auth, role('admin'), AdminController.getDashboardStats);
router.patch('/orders/:id/status', auth, role('admin'), AdminController.updateOrderStatus);

module.exports = router;
