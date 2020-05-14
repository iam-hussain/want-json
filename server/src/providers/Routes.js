import Log from '@middlewares/Log';

import rootRouter from '@routes/index';
import webRouter from '@routes/WebAPI';

class Routes {
    static mountWeb(_express) {
        Log.info('Routes :: Mounting Web Routes...');
        _express.use('/web/', webRouter);
        _express.use('/', rootRouter);
        return _express;
    }
}

export default Routes;
