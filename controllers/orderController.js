const orderModel = require('../models/orderModel');

const createOrder = async (req, res) => {
    console.log("Request body:", req.body);

    const { customer_id, restaurant_id, items } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: 'Items are required' });
    }
    const newOrder = await orderModel.createOrder({ customer_id, restaurant_id, items })
    res.status(201).json(newOrder);
};

const getAllOrder = async (req, res) => {
    const { status } = req.query;
    const orders = await orderModel.getAllOrder(status);
    res.json(orders);
};

const getOrdersByCustomer = async (req, res) => {
    const id = req.params.id;
    const orders = await orderModel.getOrdersByCustomer(id);
    res.json(orders);
};

const getOrdersByRestaurant = async (req, res) => {
    const id = req.params.id;
    const orders = await orderModel.getOrdersByRestaurant(id);
    res.json(orders);
};

const updateStatus = async (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    const updated = await orderModel.updateOrderStatus(id, status);
    res.json(updated);
};

const deleteOrder = async (req, res) => {
    const id = req.params.id;
    await orderModel.deleteOrder(id);
    res.status(204).send();
};

module.exports = {
    createOrder,
    getAllOrder,
    getOrdersByCustomer,
    getOrdersByRestaurant,
    updateStatus,
    deleteOrder,
};