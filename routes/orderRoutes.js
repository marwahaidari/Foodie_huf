const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/orders', orderController.createOrder);
router.get('/orders', orderController.getAllOrder);
router.get('/customers/:id/orders', orderController.getOrdersByCustomer);
router.get('/restaurant/:id/orders', orderController.getOrdersByRestaurant); // اختیاری
router.put('/orders/:id/status', orderController.updateStatus);
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;
