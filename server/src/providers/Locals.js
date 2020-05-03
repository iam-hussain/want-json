/**
 * Define App Locals & Configs
 */
import * as path from 'path';
import * as dotenv from 'dotenv';

class Locals {
    static config() {
        dotenv.config({ path: path.join(__dirname, '../../.env') });
        const env = process.env.NODE_ENV || 'develoment';
        const port = process.env.PORT || 4040;
        const url = process.env.APP_URL || `http://localhost:${port}`;
        const root = path.join(__dirname, '../..');
        const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || '50mb';
        const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || '5000';

        const appSecret = process.env.APP_SECRET || '1242#$%$^%!@@$!%*(%^jnadkjcn';
        const jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;

        const name = process.env.APP_NAME || 'getJSON';
        const description = process.env.APP_DESCRIPTION
      || 'getJSON is a free online REST API that you can use whenever you need some fake data.';
        const isCORSEnabled = !(
            !process.env.CORS_ENABLED || process.env.CORS_ENABLED === 'false'
        );

        const db = {
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_DATABASE || 'getjson',
            host: process.env.DB_HOST || 'localhost',
            dialect: process.env.DB_DIALECT || 'mysql',

            // eslint-disable-next-line no-console
            logging: !process.env.DB_LOGGING || process.env.DB_LOGGING === 'false' ? false : console.log,
        };

        const mailgun = {
            sender: process.env.MAIL_SENDER || 'getJSON.io <admin@getjosn.io>',
            api_key: process.env.MAILGUN_API_KEY || '',
            domain: process.env.MAILGUN_DOMAIN || '',
        };

        return {
            env,
            name,
            port,
            url,
            root,
            description,
            isCORSEnabled,
            maxUploadLimit,
            maxParameterLimit,
            db,
            appSecret,
            jwtExpiresIn,
            mailgun,
        };
    }
}

export default Locals.config();
