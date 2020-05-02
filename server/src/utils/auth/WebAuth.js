import authModule from '../../helper/auth';
import { errorResponce } from '../exchange';

async function validateAuth(req) {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return {
                success: false,
                msg: 'No authorization is found in header',
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
            userData: {},
        };
    } catch (_error) {
        return {
            success: false,
            msg: 'Unknown error on authorization',
            userData: {},
        };
    }
}


export async function shouldBeLoggedIn(req, res, next) {
    const authorizationData = await validateAuth(req);
    if (!authorizationData.success) {
        return errorResponce(req, res, authorizationData.msg, 300, 'token');
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
        return errorResponce(req, res, 'Authorization is found in header', 300, 'token');
    }
    return next();
}
