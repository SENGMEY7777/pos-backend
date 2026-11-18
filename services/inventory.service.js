const crypto = require('crypto');
const inventory.Model = require('../models/inventory.Model');

const findAll = async (filters) => {
    return inventory.Model.findAll(filters);
};

const findById = async (id) => {
    return inventory.Model.findById(id);
};

const create = async (payload) => {
    const id = 'inv_' + crypto.randomUUID().slice(0, 8);
    return inventory.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await inventory.Model.findById(id);
    if (!existing) {
        const error = new Error('Inventory. not found');
        error.status = 404;
        throw error;
    }
    return inventory.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return inventory.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
