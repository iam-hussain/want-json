import { successResponce } from '@utils/exchange';
import storeModule from '../../helper/store';

export default class Store {
    static async readAll(req, res) {
        const storeData = await storeModule.getAll({ user_id: req.userData.id });
        return successResponce(req, res, 'Reached Store Page', 202, storeData);
    }

    static async read(req, res) {
        const storeData = await storeModule.getPayload({ title: req.param.name, user_id: req.userData.id });
        return successResponce(req, res, 'Reached Store Page', 202, storeData);
    }

    static async create(req, res) {
        const createData = storeModule.create(req.body, req.body.payload, req.userData.id);
        return successResponce(req, res, 'Reached Store Page', 202, {
            body: req.body,
            param: req.params,
            user: req.userData,
            // createData,
        });
    }

    static async update(req, res) {
        return successResponce(req, res, 'Reached Store Page', 202, {
            body: req.body,
            param: req.params,
        });
    }

    static async delete(req, res) {
        return successResponce(req, res, 'Reached Store Page', 202, {
            body: req.body,
            param: req.params,
        });
    }
}
