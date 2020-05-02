import Log from '@middlewares/Log';

import rootRouter from '@routes/index';
import webRouter from '@routes/WebAPI';

class Routes {
    static mountWeb(_express) {
        Log.info('Routes :: Mounting Web Routes...');
        _express.use('/', rootRouter);
        _express.use('/web/', webRouter);
        return _express;
    }
}

export default Routes;
