const crypto = require('crypto');
const product.Model = require('../models/product.Model');

const findAll = async (filters) => {
    return product.Model.findAll(filters);
};

const findById = async (id) => {
    return product.Model.findById(id);
};

const create = async (payload) => {
    const id = 'pro_' + crypto.randomUUID().slice(0, 8);
    return product.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await product.Model.findById(id);
    if (!existing) {
        const error = new Error('Product. not found');
        error.status = 404;
        throw error;
    }
    return product.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return product.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
