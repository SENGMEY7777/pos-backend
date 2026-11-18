const crypto = require('crypto');
const dashboard.Model = require('../models/dashboard.Model');

const findAll = async (filters) => {
    return dashboard.Model.findAll(filters);
};

const findById = async (id) => {
    return dashboard.Model.findById(id);
};

const create = async (payload) => {
    const id = 'das_' + crypto.randomUUID().slice(0, 8);
    return dashboard.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await dashboard.Model.findById(id);
    if (!existing) {
        const error = new Error('Dashboard. not found');
        error.status = 404;
        throw error;
    }
    return dashboard.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return dashboard.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
