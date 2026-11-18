const crypto = require('crypto');
const customer.Model = require('../models/customer.Model');

const findAll = async (filters) => {
    return customer.Model.findAll(filters);
};

const findById = async (id) => {
    return customer.Model.findById(id);
};

const create = async (payload) => {
    const id = 'cus_' + crypto.randomUUID().slice(0, 8);
    return customer.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await customer.Model.findById(id);
    if (!existing) {
        const error = new Error('Customer. not found');
        error.status = 404;
        throw error;
    }
    return customer.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return customer.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
