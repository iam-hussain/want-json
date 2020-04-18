import hashingUtil from '@utils/hashing';
import DB from '@providers/Database';

export default class authyModule {
    static async getAuthData(hashkey) {
        const returnData = await DB.models.LoginToken.findOne({
            where: {
                hashkey,
            },
        });
        return returnData;
    }

    static async createAuth(payLoad, userID) {
        const returnData = await DB.models.LoginToken.create({
            hashkey: hashingUtil.authHashGenerator(),
            ip: payLoad.requestIp.clientIp,
            useragent: payLoad.useragent,
            logger: userID,
        });
        return returnData;
    }


    static async updateAuth(hashkey, status) {
        const returnData = await DB.models.LoginToken.update({
            status,
        }, {
            where: {
                hashkey,
            },
        });
        return returnData;
    }
}
