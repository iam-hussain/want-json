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
