const user.Service = require('../services/user.Service');

const getAll = async (req, res, next) => {
    try {
        const data = await user.Service.findAll(req.query);
        return res.status(200).json({ success: true, count: data.length, data });
    } catch (error) {
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const item = await user.Service.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ success: false, message: 'User. not found' });
        }
        return res.status(200).json({ success: true, data: item });
    } catch (error) {
        return next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const created = await user.Service.create(req.body);
        return res.status(201).json({ success: true, message: 'User. created successfully', data: created });
    } catch (error) {
        return next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const updated = await user.Service.update(req.params.id, req.body);
        return res.status(200).json({ success: true, message: 'User. updated successfully', data: updated });
    } catch (error) {
        return next(error);
    }
};

const deleteItem = async (req, res, next) => {
    try {
        await user.Service.delete(req.params.id);
        return res.status(200).json({ success: true, message: 'User. deleted successfully' });
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
