const crypto = require('crypto');
const order.Model = require('../models/order.Model');

const findAll = async (filters) => {
    return order.Model.findAll(filters);
};

const findById = async (id) => {
    return order.Model.findById(id);
};

const create = async (payload) => {
    const id = 'ord_' + crypto.randomUUID().slice(0, 8);
    return order.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await order.Model.findById(id);
    if (!existing) {
        const error = new Error('Order. not found');
        error.status = 404;
        throw error;
    }
    return order.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return order.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
