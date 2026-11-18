const crypto = require('crypto');
const cashier.Model = require('../models/cashier.Model');

const findAll = async (filters) => {
    return cashier.Model.findAll(filters);
};

const findById = async (id) => {
    return cashier.Model.findById(id);
};

const create = async (payload) => {
    const id = 'cas_' + crypto.randomUUID().slice(0, 8);
    return cashier.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await cashier.Model.findById(id);
    if (!existing) {
        const error = new Error('Cashier. not found');
        error.status = 404;
        throw error;
    }
    return cashier.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return cashier.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
