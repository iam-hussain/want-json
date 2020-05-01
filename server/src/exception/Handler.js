/* eslint-disable no-tabs */

import Log from '@middlewares/Log';
import {
    errorHandleResponce,
} from '@utils/exchange';

class Handler {
    /**
     * Handles all the not found routes
     */
    static notFoundHandler(_express) {
        _express.use('*', (req, res) => {
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

            Log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
            return res.json({
                error: 'Page Not Found',
            });
        });

        return _express;
    }

    /**
     * Handles your api/web routes errors/exception
     */
    static clientErrorHandler(err, req, res, next) {
        Log.error(err.stack);
        if (req.xhr) {
            return errorHandleResponce(res, 'Something went wrong!', 500);
        }
        return next(err);
    }

    /**
     * Show undermaintenance page incase of errors
     */
    static errorHandler(err, req, res, next) {
        Log.error(err.stack);
        if (req.xhr) {
            return errorHandleResponce(res, JSON.stringify(err), 500);
        }
        return next(err);
    }

    /**
     * Register your error / exception monitoring
     * tools right here ie. before "next(err)"!
     */
    static logErrors(err, req, res, next) {
        Log.error(err.stack);
        return next(err);
    }
}

export default Handler;