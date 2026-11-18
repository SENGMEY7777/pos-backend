const crypto = require('crypto');
const user.Model = require('../models/user.Model');

const findAll = async (filters) => {
    return user.Model.findAll(filters);
};

const findById = async (id) => {
    return user.Model.findById(id);
};

const create = async (payload) => {
    const id = 'use_' + crypto.randomUUID().slice(0, 8);
    return user.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await user.Model.findById(id);
    if (!existing) {
        const error = new Error('User. not found');
        error.status = 404;
        throw error;
    }
    return user.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return user.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
