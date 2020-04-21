/* eslint-disable camelcase */
import DB from '@providers/Database';
import hashingUtil from '@utils/hashing';

export default class UserModule {
    static async existCheck(where) {
        return (
            (await DB.models.User.count({
                where,
            })) > 0
        );
    }

    static countBy(where) {
        return DB.models.User.count({
            where,
        });
    }

    static async getWithPublicData(where) {
        const returnData = await DB.models.User.findOne({
            where,
            attributes: ['id', 'email'],
        }).then((userIs) => (userIs.id ? userIs.dataValues : {}));
        return returnData;
    }

    static async getWithPrivateData(where) {
        const returnData = await DB.models.User.findOne({
            where,
        }).then((userIs) => (userIs.id ? userIs.dataValues : {}));
        return returnData;
    }

    static async create(payLoad, requestIp) {
        const hashed = await hashingUtil.createPasswordHash(payLoad.password);
        const returnData = await DB.models.User.create({
            email: payLoad.email,
            userName: payLoad.userName,
            password: hashed.password,
            salt: hashed.salt,
            joinedIP: requestIp.clientIp,
        });
        return returnData;
    }

    static async update(where, payLoad) {
        const returnData = await DB.models.User.update(payLoad, {
            where,
        });
        return returnData;
    }
}
