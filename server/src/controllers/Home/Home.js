import { successResponce } from '@utils/exchange';
import DB from '@providers/Database';

class Home {
    static async index(req, res) {
        return successResponce(req, res, 'Reached Home Page', 202, {
            body: req.body,
            params: req.params,
            header: req.headers,
            query: req.query,
        });
    }

    static flush(req, res) {
        DB.reSync();
        return successResponce(req, res, 'DB flushed', 202, {});
    }
}

export default Home;
