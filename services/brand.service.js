const crypto = require('crypto');
const brand.Model = require('../models/brand.Model');

const findAll = async (filters) => {
    return brand.Model.findAll(filters);
};

const findById = async (id) => {
    return brand.Model.findById(id);
};

const create = async (payload) => {
    const id = 'bra_' + crypto.randomUUID().slice(0, 8);
    return brand.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await brand.Model.findById(id);
    if (!existing) {
        const error = new Error('Brand. not found');
        error.status = 404;
        throw error;
    }
    return brand.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return brand.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
