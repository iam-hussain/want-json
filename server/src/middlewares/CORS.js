/**
 * Enables the CORS
 */

import cors from 'cors';

import Locals from '@providers/Locals';
import Log from './Log';

class CORS {
    static mount(_express) {
    // Check if CORS is enabled
        if (Locals.isCORSEnabled) {
            Log.info("Booting the 'CORS' middleware...");
            _express.use(cors());
        }
        return _express;
    }
}

export default CORS;
