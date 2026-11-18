const crypto = require('crypto');
const auth.Model = require('../models/auth.Model');

const findAll = async (filters) => {
    return auth.Model.findAll(filters);
};

const findById = async (id) => {
    return auth.Model.findById(id);
};

const create = async (payload) => {
    const id = 'aut_' + crypto.randomUUID().slice(0, 8);
    return auth.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await auth.Model.findById(id);
    if (!existing) {
        const error = new Error('Auth. not found');
        error.status = 404;
        throw error;
    }
    return auth.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return auth.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
