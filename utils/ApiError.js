class ApiError extends Error {
    constructor(statusCode, message, errors = null) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode;
        if (errors) this.errors = errors;
    }
}

module.exports = ApiError;
