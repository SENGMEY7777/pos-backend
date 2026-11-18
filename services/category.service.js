const crypto = require('crypto');
const category.Model = require('../models/category.Model');

const findAll = async (filters) => {
    return category.Model.findAll(filters);
};

const findById = async (id) => {
    return category.Model.findById(id);
};

const create = async (payload) => {
    const id = 'cat_' + crypto.randomUUID().slice(0, 8);
    return category.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await category.Model.findById(id);
    if (!existing) {
        const error = new Error('Category. not found');
        error.status = 404;
        throw error;
    }
    return category.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return category.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
