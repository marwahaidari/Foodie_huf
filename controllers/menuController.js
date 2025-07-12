const menuModel = require('../models/menuModel');

const getMenu = async (req, res) => {
    const restaurantId = req.params.id;
    const items = await menuModel.getMenuByRestaurant(restaurantId)
    res.json(items);
};

const createMenuItem = async (req, res) => {

    const restaurant_id = req.params.id;
    const { name, price, is_available } = req.body;
    const newItem = await menuModel.addMenuItem({
        restaurant_id,
        name,
        price,
        is_available: is_available ?? true
    });
    res.status(201).json(newItem)
};

const updateMenuItem = async (req, res) => {
    const id = req.params.id;
    const { name, price, is_available } = req.body;
    const updated = await menuModel.updateMenuItem(id, { name, price, is_available });
    res.json(updated);
};

const deleteMenuItem = async (req, res) => {
    const id = req.params.id;
    await menuModel.deleteMenuItem(id);
    res.status(204).send();
};

const getPopularItems = async (req, res) => {
    const items = await menuModel.getPopularMenuItems();
    res.json(items);
};


module.exports = {
    getMenu,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
    getPopularItems,

}