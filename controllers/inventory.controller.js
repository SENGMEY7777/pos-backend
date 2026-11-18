const inventory.Service = require('../services/inventory.Service');

const getAll = async (req, res, next) => {
    try {
        const data = await inventory.Service.findAll(req.query);
        return res.status(200).json({ success: true, count: data.length, data });
    } catch (error) {
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const item = await inventory.Service.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ success: false, message: 'Inventory. not found' });
        }
        return res.status(200).json({ success: true, data: item });
    } catch (error) {
        return next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const created = await inventory.Service.create(req.body);
        return res.status(201).json({ success: true, message: 'Inventory. created successfully', data: created });
    } catch (error) {
        return next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const updated = await inventory.Service.update(req.params.id, req.body);
        return res.status(200).json({ success: true, message: 'Inventory. updated successfully', data: updated });
    } catch (error) {
        return next(error);
    }
};

const deleteItem = async (req, res, next) => {
    try {
        await inventory.Service.delete(req.params.id);
        return res.status(200).json({ success: true, message: 'Inventory. deleted successfully' });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: deleteItem,
};
