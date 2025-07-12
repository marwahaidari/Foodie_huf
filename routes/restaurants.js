const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/', restaurantController.getRestaurants);
router.post('/', restaurantController.addRestaurant);
router.put('/', restaurantController.updateRestaurant);
router.delete('/', restaurantController.deleteRestaurant);

module.exports = router