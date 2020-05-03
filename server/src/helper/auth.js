import hashingUtil from '@utils/hashing';
import DB from '@providers/Database';

export default class authyModule {
    static async getAuthData(hash) {
        const returnData = await DB.models.Auth.findOne({
            where: {
                hash,
            },
            include: [
                {
                    model: DB.models.User,
                    as: 'logger',
                    attributes: ['id', 'email'],
                },
            ],
        });
        return returnData;
    }

    static async createAuth(payLoad, userID) {
        const returnData = await DB.models.Auth.create({
            hash: await hashingUtil.authHashGenerator(),
            ip: payLoad.requestIp.clientIp,
            useragent: payLoad.useragent,
            user_id: userID,
        });
        return returnData;
    }

    static async updateAuth(hash, status) {
        const returnData = await DB.models.Auth.update(
            {
                status,
            },
            {
                where: {
                    hash,
                },
            },
        );
        return returnData;
    }
}
