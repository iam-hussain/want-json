import Log from '@middlewares/Log';

import rootRouter from '@routes/index';
import webRouter from '@routes/Web';
// import storeRouter from '@routes/Store';

class Routes {
    static mountWeb(_express) {
        Log.info('Routes :: Mounting Web Routes...');
        _express.use('/', rootRouter);
        _express.use('/web/', webRouter);
        // _express.use('/store/', storeRouter);
        return _express;
    }
}

export default Routes;
