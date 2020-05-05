import authModule from '../../helper/auth';
import { errorResponce } from '../exchange';

async function validateAuth(req) {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return {
                success: false,
                msg: 'No authorization is found in header',
                type: 'token_required',
                userData: {},
            };
        }
        if (authorization.split(' ').length > 1) {
            const hash = authorization.split(' ')[1];
            const authyData = await authModule.getAuthData(hash);
            if (authyData.id) {
                return {
                    success: true,
                    msg: 'User found',
                    userData: authyData.logger,
                };
            }
        }
        return {
            success: false,
            msg: 'Invalid authorization is found in header',
            type: 'invalid_token',
            userData: {},
        };
    } catch (_error) {
        return {
            success: false,
            msg: 'Unknown error on authorization',
            type: 'token_error',
            userData: {},
        };
    }
}

export async function shouldBeLoggedIn(req, res, next) {
    const authorizationData = await validateAuth(req);
    if (!authorizationData.success) {
        return errorResponce(req, res, authorizationData.msg, 300, authorizationData.type);
    }
    req.userData = authorizationData.userData;
    req.userID = authorizationData.userData.id;
    return next();
}

export async function mightBeLoggedIn(req, res, next) {
    const authorizationData = await validateAuth(req);
    if (authorizationData.success) {
        req.userData = authorizationData.userData;
        req.userID = authorizationData.userData.id;
    }
    return next();
}

export async function shouldNotLoggedIn(req, res, next) {
    if (req.headers.authorization) {
        return errorResponce(req, res, 'Authorization is found in header', 300, 'token_not_required');
    }
    return next();
}
