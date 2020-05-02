import authModule from '../../helper/auth';
import { errorResponce } from '../exchange';

export default async function storeAuthorization(req, res, next) {
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
                    userData: authyData,
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
