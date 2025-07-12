const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');


router.get('/customers', customerController.getCustomer);
router.post('/customers', customerController.createCustomer);
router.put('/customer/:id', customerController.updateCustomer);
router.delete('/customer/:id', customerController.deleteCustomer);

module.exports = router