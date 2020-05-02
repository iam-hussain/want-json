/* eslint-disable camelcase */
import DB from '@providers/Database';
import hashingUtil from '@utils/hashing';
import payloadUtils from '../utils/payload';

export default class PayloadModule {
    static async existCheck(where) {
        return (
            (await DB.models.Payload.count({
                where,
            })) > 0
        );
    }

    static countBy(where) {
        return DB.models.Payload.count({
            where,
        });
    }

    static async getPayload(where) {
        const returnData = await DB.models.Payload.findOne({
            where,
            attributes: ['data'],
        }).then((payLoad) => (payLoad || {}));
        return returnData;
    }

    static async get(where) {
        const returnData = await DB.models.Payload.findOne({
            where,
            attributes: {
                exclude: ['user_id'],
            },
        }).then((payLoad) => (payLoad.id ? payLoad : {}));
        return returnData;
    }

    static async getFullData(where) {
        const returnData = await DB.models.Payload.findOne({
            where,
        }).then((payLoad) => (payLoad.id ? payLoad : {}));
        return returnData;
    }

    static async getAll(where) {
        const returnData = await DB.models.Payload.findAll({
            where,
            attributes: {
                exclude: ['user_id'],
            },
        }).then((payLoad) => (payLoad.length > 0 ? payLoad : []));
        return returnData;
    }

    static async create(body, userID, data) {
        const hash = await hashingUtil.payloadHashGenerator(body.title);
        const url = await payloadUtils.urlMaker(body.title);
        const returnData = await DB.models.Payload.create({
            url,
            title: body.title,
            description: body.description,
            keywords: body.keywords,
            data,
            hash,
            type: body.type,
            visibility: body.visibility,
            user_id: userID,
        });
        return returnData;
    }

    static async update(where, body, data) {
        const url = await payloadUtils.urlMaker(body.title);
        const returnData = await DB.models.Payload.update({
            url,
            title: body.title,
            description: body.description,
            keywords: body.keywords,
            data,
            type: body.type,
            visibility: body.visibility,
        }, {
            where,
        });
        return returnData;
    }

    static async statusUpdate(where, status) {
        const returnData = await DB.models.Payload.update({
            status,
        }, {
            where,
        });
        return returnData;
    }
}
