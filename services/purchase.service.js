const crypto = require('crypto');
const purchase.Model = require('../models/purchase.Model');

const findAll = async (filters) => {
    return purchase.Model.findAll(filters);
};

const findById = async (id) => {
    return purchase.Model.findById(id);
};

const create = async (payload) => {
    const id = 'pur_' + crypto.randomUUID().slice(0, 8);
    return purchase.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await purchase.Model.findById(id);
    if (!existing) {
        const error = new Error('Purchase. not found');
        error.status = 404;
        throw error;
    }
    return purchase.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return purchase.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
