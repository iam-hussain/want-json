import Log from '../middlewares/Log';

import systemRouter from '../routes/System';
import payloadRouter from '../routes/PayloadAPI';
import webRouter from '../routes/WebAPI';

export default function Routes(_express) {
  Log.info('Routes :: Mounting Web Routes...');
  _express.use('/web', webRouter);
  _express.use('/api', payloadRouter);
  _express.use('/system', systemRouter);
  return _express;
}
