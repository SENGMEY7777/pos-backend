const crypto = require('crypto');
const sale.Model = require('../models/sale.Model');

const findAll = async (filters) => {
    return sale.Model.findAll(filters);
};

const findById = async (id) => {
    return sale.Model.findById(id);
};

const create = async (payload) => {
    const id = 'sal_' + crypto.randomUUID().slice(0, 8);
    return sale.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await sale.Model.findById(id);
    if (!existing) {
        const error = new Error('Sale. not found');
        error.status = 404;
        throw error;
    }
    return sale.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return sale.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
