/* eslint-disable camelcase */
import DB from '@providers/Database';
import hashingUtil from '@utils/hashing';

export default class UserModule {
    static async existCheck(where) {
        return (
            (await DB.models.Store.count({
                where,
            })) > 0
        );
    }

    static countBy(where) {
        return DB.models.User.count({
            where,
        });
    }

    static async getPayload(where) {
        const returnData = await DB.models.Store.findOne({
            where,
            attributes: ['payload'],
        }).then((storeIs) => (storeIs.id ? storeIs.dataValues : {}));
        return returnData;
    }

    static async get(where) {
        const returnData = await DB.models.Store.findOne({
            where,
        }).then((storeIs) => (storeIs.id ? storeIs.dataValues : {}));
        return returnData;
    }

    static async getAll(where) {
        const returnData = await DB.models.Store.findAll({
            where,
        }).then((storeIs) => (storeIs.id ? storeIs.dataValues : {}));
        return returnData;
    }

    static async create(body, jsonObject, userID) {
        const hash = await hashingUtil.storeHashGenerator(body.title);
        const returnData = await DB.models.User.create({
            title: body.title,
            payload: jsonObject,
            hash,
            owner: userID,
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
