import { successResponce, errorResponce } from '@utils/exchange';
import userModule from '@helper/user';
import hashingUtil from '../../utils/hashing';
import authyModule from '../../helper/auth';

export default class Auth {
    static async signUp(req, res) {
        try {
            const created = await userModule.create(req.body, req.requestIp);
            return successResponce(req, res, 'User joinded successfully!', 202, {
                body: req.body,
                ip: req.requestIp,
                create: created,
            });
        } catch (err) {
            return errorResponce(req, res, 'Error', 200);
        }
    }

    static async signIn(req, res) {
        const userData = await userModule.getWithPrivateData({ email: req.body.email });
        const verifyReturn = await hashingUtil.verifyPasswordHash(userData, req.body.password);
        if (verifyReturn) {
            const userPublicData = await userModule.getWithPublicData({ email: req.body.email });
            const authToken = await authyModule.createAuth(req, userPublicData.id);
            userPublicData.token = authToken.hash;
            return successResponce(req, res, 'User logged in successfully!', 202, userPublicData);
        }
        return errorResponce(req, res, 'Unable to login this user!', 500);
    }

    static async signOut(req, res) {
        await authyModule.updateAuth(req.params.hash, 'inactive');
        return successResponce(req, res, 'User logged out successfully!', 202, {});
    }
}
