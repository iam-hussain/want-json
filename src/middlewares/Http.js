import compress from 'compression';
import express from 'express';
import userAgent from 'express-useragent';
import ipware from 'ipware';
import Locals from '../providers/Locals';
import Log from './Log';

class Http {
  static mount(_express) {
    Log.info("Booting the 'HTTP' middleware...");

    // Enables the request body parser
    _express.use(
      express.json({
        limit: Locals.maxUploadLimit,
      }),
    );

    _express.use(
      express.urlencoded({
        limit: Locals.maxUploadLimit,
        parameterLimit: Locals.maxParameterLimit,
        extended: false,
      }),
    );

    // Disable the x-powered-by header in response
    _express.disable('x-powered-by');

    // API requesed details in request
    _express.use(userAgent.express());

    // Enables the "gzip" / "deflate" compression for response
    _express.use(compress());

    // Client IP Address in request
    _express.use((req, res, next) => {
      // eslint-disable-next-line camelcase
      const { get_ip } = ipware();
      req.requestIp = get_ip(req);
      next();
    });

    return _express;
  }
}

export default Http;
