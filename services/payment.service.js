const crypto = require('crypto');
const payment.Model = require('../models/payment.Model');

const findAll = async (filters) => {
    return payment.Model.findAll(filters);
};

const findById = async (id) => {
    return payment.Model.findById(id);
};

const create = async (payload) => {
    const id = 'pay_' + crypto.randomUUID().slice(0, 8);
    return payment.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await payment.Model.findById(id);
    if (!existing) {
        const error = new Error('Payment. not found');
        error.status = 404;
        throw error;
    }
    return payment.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return payment.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
