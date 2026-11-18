const crypto = require('crypto');
const supplier.Model = require('../models/supplier.Model');

const findAll = async (filters) => {
    return supplier.Model.findAll(filters);
};

const findById = async (id) => {
    return supplier.Model.findById(id);
};

const create = async (payload) => {
    const id = 'sup_' + crypto.randomUUID().slice(0, 8);
    return supplier.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await supplier.Model.findById(id);
    if (!existing) {
        const error = new Error('Supplier. not found');
        error.status = 404;
        throw error;
    }
    return supplier.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return supplier.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
