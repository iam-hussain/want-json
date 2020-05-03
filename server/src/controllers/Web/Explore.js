import { successResponce } from '@utils/exchange';
import payloadModule from '../../helper/payload';

export default class Explore {
    static async readAll(req, res, next) {
        try {
            const storeData = await payloadModule.getAll({
                status: 'active',
                visibility: 'public',
            });
            return successResponce(
                req,
                res,
                'All our payload fetched successfully',
                202,
                storeData,
            );
        } catch (_error) {
            return next(_error);
        }
    }

    static async read(req, res, next) {
        try {
            const storeData = await payloadModule.get({
                id: req.params.id,
                status: 'active',
                visibility: 'public',
            });
            return successResponce(
                req,
                res,
                'Your payload fetched successfully',
                202,
                storeData,
            );
        } catch (_error) {
            return next(_error);
        }
    }
}
