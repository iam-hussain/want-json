/* eslint-disable no-tabs */
import express from 'express';

import Log from '@middlewares/Log';
import Bootstrap from '@middlewares/Kernel';
import ExceptionHandler from '@middlewares/Handler';
import Locals from './Locals';
import Routes from './Routes';

class Express {
    /**
	 * Initializes the express server
	 */
    constructor() {
        this.express = express();
        this.mountMiddlewares();
        this.mountRoutes();
    }

    mountMiddlewares() {
        this.express = Bootstrap.init(this.express);
    }

    mountRoutes() {
        this.express = Routes.mountWeb(this.express);
    }

    init() {
        const { port } = Locals;
        // Registering Exception / Error Handlers
        this.express = ExceptionHandler.notFoundHandler(this.express);
        this.express.use(ExceptionHandler.errorHandler);

        // Start the server on the specified port
        this.express.listen(port, (_error) => {
            if (_error) {
                // eslint-disable-next-line no-console
                return console.log('Error: ', _error);
            }
            Log.info(`Server :: Running @ ${port}`);
            // eslint-disable-next-line no-console
            return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
        });
    }
}

export default new Express();
