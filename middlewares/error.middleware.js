const notFoundHandler = (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
};

const errorHandler = (err, req, res, next) => {
    const status = err.statusCode || err.status || 500;
    const payload = {
        success: false,
        message: err.message || 'Internal Server Error',
    };
    if (err.errors) {
        payload.errors = err.errors;
    }
    if (process.env.NODE_ENV !== 'production' && status >= 500 && err.stack) {
        payload.stack = err.stack;
    }
    res.status(status).json(payload);
};

module.exports = {
    notFoundHandler,
    errorHandler,
};
