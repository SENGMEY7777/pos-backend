const crypto = require('crypto');
const discount.Model = require('../models/discount.Model');

const findAll = async (filters) => {
    return discount.Model.findAll(filters);
};

const findById = async (id) => {
    return discount.Model.findById(id);
};

const create = async (payload) => {
    const id = 'dis_' + crypto.randomUUID().slice(0, 8);
    return discount.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await discount.Model.findById(id);
    if (!existing) {
        const error = new Error('Discount. not found');
        error.status = 404;
        throw error;
    }
    return discount.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return discount.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
