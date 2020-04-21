const { validationResult } = require('express-validator');

export async function successResponce(req, res, message, successCode, payload) {
    return res
        .status(successCode)
        .json({
            success: true,
            message,
            data: payload,
        })
        .end();
}

export async function errorResponce(req, res, message, errorCode) {
    return res
        .status(errorCode)
        .json({
            success: true,
            message,
            errorCode,
            data: {},
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
                message: errors.array(),
                error_code: 403,
                data: {},
            })
            .end();
    }
    return next();
}
