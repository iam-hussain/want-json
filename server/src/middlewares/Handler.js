/* eslint-disable no-tabs */

import Log from '@middlewares/Log';
import { errorResponce } from '@utils/exchange';

class Handler {
    /**
   * Handles all the not found routes
   */
    static notFoundHandler(_express) {
        _express.use('*', (req, res) => {
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            Log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
            return errorResponce(req, res, 'URL not found from server', 404, 'server');
        });

        return _express;
    }

    /**
   * Show undermaintenance page incase of errors
   */

    // eslint-disable-next-line no-unused-vars
    static errorHandler(err, req, res, next) {
        Log.error(err.stack);
        return errorResponce(req, res, 'Unexpected error from server', 500, 'server');
    }
}

export default Handler;
