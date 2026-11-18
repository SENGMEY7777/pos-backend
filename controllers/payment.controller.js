const payment.Service = require('../services/payment.Service');

const getAll = async (req, res, next) => {
    try {
        const data = await payment.Service.findAll(req.query);
        return res.status(200).json({ success: true, count: data.length, data });
    } catch (error) {
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const item = await payment.Service.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ success: false, message: 'Payment. not found' });
        }
        return res.status(200).json({ success: true, data: item });
    } catch (error) {
        return next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const created = await payment.Service.create(req.body);
        return res.status(201).json({ success: true, message: 'Payment. created successfully', data: created });
    } catch (error) {
        return next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const updated = await payment.Service.update(req.params.id, req.body);
        return res.status(200).json({ success: true, message: 'Payment. updated successfully', data: updated });
    } catch (error) {
        return next(error);
    }
};

const deleteItem = async (req, res, next) => {
    try {
        await payment.Service.delete(req.params.id);
        return res.status(200).json({ success: true, message: 'Payment. deleted successfully' });
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
