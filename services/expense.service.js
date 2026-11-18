const crypto = require('crypto');
const expense.Model = require('../models/expense.Model');

const findAll = async (filters) => {
    return expense.Model.findAll(filters);
};

const findById = async (id) => {
    return expense.Model.findById(id);
};

const create = async (payload) => {
    const id = 'exp_' + crypto.randomUUID().slice(0, 8);
    return expense.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await expense.Model.findById(id);
    if (!existing) {
        const error = new Error('Expense. not found');
        error.status = 404;
        throw error;
    }
    return expense.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return expense.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
