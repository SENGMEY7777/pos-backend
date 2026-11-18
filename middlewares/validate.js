const validate = (schemas = {}) => (req, res, next) => {
    const errors = [];
    for (const target of ['params', 'query', 'body']) {
        if (!schemas[target]) continue;
        const { error, value } = schemas[target].validate(req[target], {
            abortEarly: false,
            stripUnknown: true,
        });
        if (error) {
            errors.push(...error.details.map((d) => ({
                location: target,
                field: d.path.join('.'),
                message: d.message.replace(/"/g, ''),
            })));
        } else {
            req[target] = value;
        }
    }
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors,
        });
    }
    next();
};

module.exports = validate;
module.exports.validate = validate;
