import { successResponce } from '@utils/exchange';
import userModule from '@helper/user';

export default class Auth {
    static async signUp(req, res) {
        // const created = await userModule.create(req.body, req.requestIp);
        return successResponce(req, res, 'Reached Home Page', 202, {
            body: req.body,
            ip: req.requestIp,
        });
    }

    static async signIn(req, res) {
        return successResponce(req, res, 'Reached Home Page', 202, {});
    }

    static async signOut(req, res) {
        return successResponce(req, res, 'Reached Home Page', 202, {});
    }
}
