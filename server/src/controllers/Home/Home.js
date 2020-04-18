import { successResponce } from '@utils/exchange';

class Home {
    static async index(req, res) {
        return successResponce(req, res, 'Reached Home Page', 202, {});
    }
}

export default Home;
