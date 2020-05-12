import {
    successResponce,
} from '@utils/exchange';
import Sequelize from 'sequelize';
import payloadModule from '../../helper/payload';
import pageCalculation from '../../utils/page';

const { Op } = Sequelize;
export default class Explore {
    static async readAll(req, res, next) {
        try {
            let whereIs = {
                status: 'active',
                visibility: 'public',
            };
            if (req.body.search) {
                const searchData = {
                    [Op.or]: [{
                        title: {
                            [Op.like]: `%${req.body.search}%`,
                        },
                    }, {
                        description: {
                            [Op.like]: `%${req.body.search}%`,
                        },
                    }],
                };

                whereIs = { ...whereIs, ...searchData };
            }
            const totalItems = await payloadModule.countBy(whereIs);
            req.body.limit = req.body.limit || 10;
            const page = await pageCalculation(req.body, totalItems);
            const storeData = await payloadModule.getAll(whereIs, {
                offset: page.offset,
                limit: page.limit,
            });
            return successResponce(
                req,
                res,
                'All our payload fetched successfully',
                202,
                storeData, {
                    page,
                },
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
