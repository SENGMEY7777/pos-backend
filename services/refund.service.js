const crypto = require('crypto');
const refund.Model = require('../models/refund.Model');

const findAll = async (filters) => {
    return refund.Model.findAll(filters);
};

const findById = async (id) => {
    return refund.Model.findById(id);
};

const create = async (payload) => {
    const id = 'ref_' + crypto.randomUUID().slice(0, 8);
    return refund.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await refund.Model.findById(id);
    if (!existing) {
        const error = new Error('Refund. not found');
        error.status = 404;
        throw error;
    }
    return refund.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return refund.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
