import { successResponce } from '@utils/exchange';
import storeModule from '../../helper/store';

export default class Store {
    static async readStore(req, res) {
        const storeData = await storeModule.getPayload({ where: req.param.name });
        return successResponce(req, res, 'Reached Store Page', 202, storeData);
    }

    static async readKey(req, res) {
        const storeData = await storeModule.getPayload({ where: req.param.name });
        return successResponce(req, res, 'Reached Store Page', 202, storeData);
    }

    static async pushInKey(req, res) {
        return successResponce(req, res, 'Reached Store Page', 202, {
            body: req.body,
            param: req.params,
        });
    }

    static async deleteOneInKey(req, res) {
        return successResponce(req, res, 'Reached Store Page', 202, {
            body: req.body,
            param: req.params,
        });
    }
}
