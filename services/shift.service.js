const crypto = require('crypto');
const shift.Model = require('../models/shift.Model');

const findAll = async (filters) => {
    return shift.Model.findAll(filters);
};

const findById = async (id) => {
    return shift.Model.findById(id);
};

const create = async (payload) => {
    const id = 'shi_' + crypto.randomUUID().slice(0, 8);
    return shift.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await shift.Model.findById(id);
    if (!existing) {
        const error = new Error('Shift. not found');
        error.status = 404;
        throw error;
    }
    return shift.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return shift.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
