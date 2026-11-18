const crypto = require('crypto');
const report.Model = require('../models/report.Model');

const findAll = async (filters) => {
    return report.Model.findAll(filters);
};

const findById = async (id) => {
    return report.Model.findById(id);
};

const create = async (payload) => {
    const id = 'rep_' + crypto.randomUUID().slice(0, 8);
    return report.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await report.Model.findById(id);
    if (!existing) {
        const error = new Error('Report. not found');
        error.status = 404;
        throw error;
    }
    return report.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return report.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
