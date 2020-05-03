const { validationResult } = require('express-validator');

export async function successResponce(req, res, message, status, payload) {
    return res
        .status(200)
        .json({
            success: true,
            status,
            message,
            payload,
        })
        .end();
}

export async function errorResponce(
    req,
    res,
    message,
    status,
    errorType = 'validation',
) {
    return res
        .status(status)
        .json({
            success: false,
            errorType,
            status,
            message,
            payload: {},
        })
        .end();
}

export async function validateRequest(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(200)
            .json({
                success: false,
                errorType: 'validation',
                message: errors.array(),
                status: 403,
                data: {},
            })
            .end();
    }
    return next();
}
