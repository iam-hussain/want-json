import Log from './middlewares/Log';
import Server from './providers/Server';
import DB from './providers/Database';

Log.info('DB :: Booting @ Master...');
DB.init();

Log.info('Server :: Booting @ Master...');
Server();
