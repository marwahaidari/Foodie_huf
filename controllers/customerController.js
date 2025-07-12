const customerModel = require('../models/customerController');

const getCustomer = async (req, res) => {
    const customers = await customerModel.getAllCustomer();
    res.json(customers);
};


const createCustomer = async (req, res) => {
    const { name, phone } = req.body;
    const newCustomer = await customerModel.addCustomer({ name, phone })
    res.status(201).json(newCustomer)
};


const updateCustomer = async (req, res) => {
    const id = req.params.id;
    const { name, phone } = req.body;
    const updated = await customerModel.updateCustomer(id, { name, phone });
    res.json(updated)
};

const deleteCustomer = async (req, res) => {
    const id = req.params.id;
    await customerModel.deleteCustomer(id);
    res.status(204).send();
};

module.exports = {
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};