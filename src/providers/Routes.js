import Log from '../middlewares/Log';

import rootRouter from '../routes/index';
import webRouter from '../routes/WebAPI';

export default function Routes(_express) {
  Log.info('Routes :: Mounting Web Routes...');
  _express.use('/web', webRouter);
  _express.use('/api', rootRouter);
  return _express;
}
