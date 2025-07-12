const restaurantModel = require('../models/restaurantModel');

exports.getRestaurants = async (req, res) => {
    const restaurants = await restaurantModel.getAllRestaurant();
    res.json(restaurants);
};

exports.addRestaurant = async (req, res) => {
    const { name, location } = req.body;
    const newRestaurant = await restaurantModel.createRestaurant(name, location)
    res.status(201).json(newRestaurant);
};

exports.updateRestaurant = async (req, res) => {
    const { id } = req.params;
    const { name, location } = req.body;
    const update = await restaurantModel.updateRestaurant(id, name, location);
    res.json(update);
};
exports.deleteRestaurant = async (req, res) => {
    const { id } = req.params;
    await restaurantModel.deleteRestaurant(id);
    res.status(204).send();
}