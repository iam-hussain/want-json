import { successResponce } from '@utils/exchange';
import hashingUtil from '@utils/hashing';
import payloadModule from '../../helper/payload';
import payloadUtils from '../../utils/payload';
import pageCalculation from '../../utils/page';

export default class Payload {
    static async readAll(req, res, next) {
        try {
            const totalItems = await payloadModule.countBy({
                user_id: req.userID,
                status: 'active',
            });
            const page = await pageCalculation(req.query, totalItems);
            const payloadData = await payloadModule.getAll({
                user_id: req.userID,
                status: 'active',
            }, {
                offset: page.offset,
                limit: page.limit,
                order: [
                    ['updatedAt', 'DESC'],
                ],
            });
            return successResponce(
                req,
                res,
                'All our payload fetched successfully',
                202,
                payloadData,
                { page },
            );
        } catch (_error) {
            return next(_error);
        }
    }

    static async readAllDeleted(req, res, next) {
        try {
            const totalItems = await payloadModule.countBy({
                user_id: req.userID,
                status: 'inactive',
            });
            const page = await pageCalculation(req.query, totalItems);
            const payloadData = await payloadModule.getAll({
                user_id: req.userID,
                status: 'inactive',
            }, {
                offset: page.offset,
                limit: page.limit,
                order: [
                    ['updatedAt', 'DESC'],
                ],
            });
            return successResponce(
                req,
                res,
                'All our payload fetched successfully',
                202,
                payloadData,
                { page },
            );
        } catch (_error) {
            return next(_error);
        }
    }

    static async read(req, res, next) {
        try {
            const payloadData = await payloadModule.get({
                id: req.params.id,
                user_id: req.userID,
            });
            return successResponce(
                req,
                res,
                'Your payload fetched successfully',
                202,
                payloadData,
            );
        } catch (_error) {
            return next(_error);
        }
    }

    static async create(req, res, next) {
        try {
            const data = await payloadUtils.validIt(req.body.data, req.body.type);
            const createData = await payloadModule.create(req.body, req.userID, data);
            return successResponce(req, res, 'Payload created successfully', 202, {
                id: createData.id,
                title: createData.title,
                url: createData.url,
                data: createData.data,
            });
        } catch (_error) {
            return next(_error);
        }
    }

    static async update(req, res, next) {
        try {
            const payloadOriginal = await payloadModule.get({ id: req.params.id });
            req.body.hash = payloadOriginal.visibility === req.body.visibility
                ? payloadOriginal.hash
                : await hashingUtil.payloadHashGenerator(req.body.title);
            const data = await payloadUtils.validIt(req.body.data, req.body.type);
            const updateData = await payloadModule.update(
                {
                    id: req.params.id,
                    user_id: req.userID,
                },
                req.body,
                data,
            );
            return successResponce(
                req,
                res,
                'Payload updated successfully',
                202,
                updateData,
            );
        } catch (_error) {
            return next(_error);
        }
    }

    static async delete(req, res, next) {
        try {
            const statusUpdateData = await payloadModule.statusUpdate(
                {
                    id: req.params.id,
                    user_id: req.userID,
                },
                'inactive',
            );
            return successResponce(
                req,
                res,
                'Payload deleted successfully',
                202,
                statusUpdateData,
            );
        } catch (_error) {
            return next(_error);
        }
    }

    static async restore(req, res, next) {
        try {
            const statusUpdateData = await payloadModule.statusUpdate(
                {
                    id: req.params.id,
                    user_id: req.userID,
                },
                'active',
            );
            return successResponce(
                req,
                res,
                'Payload restored successfully',
                202,
                statusUpdateData,
            );
        } catch (_error) {
            return next(_error);
        }
    }
}
