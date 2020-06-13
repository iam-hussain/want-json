/**
 * Define App Locals & Configs
 */
import * as path from 'path';
import * as dotenv from 'dotenv';

class Locals {
  static config() {
    dotenv.config({ path: path.join(__dirname, '../../.env') });
    const env = process.env.NODE_ENV || 'develoment';
    const port = process.env.PORT || 3000;
    const url = process.env.APP_URL || `http://localhost:${port}`;
    const root = path.join(__dirname, '../..');
    const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || '50mb';
    const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || '5000';

    const appSecret = process.env.APP_SECRET || '1242#$%$^%!@@$!%*(%^jnadkjcn';
    const jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;

    const apiBaseURL = process.env.API_BASE_URL || 'http://localhost:3000/web/';
    const payloadURL = process.env.PAYLOAD_URL || 'http://localhost:3000/api/';
    const contactEmail = process.env.CONTACT_EMAIL || 'admin@wantjson.com';

    const name = process.env.APP_NAME || 'wantJSON';
    const description = process.env.APP_DESCRIPTION
      || 'wantJSON is a free online REST API that you can use whenever you need some fake data.';
    const isCORSEnabled = !(
      !process.env.CORS_ENABLED || process.env.CORS_ENABLED === 'false'
    );

    const db = {
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'wantjson',
      host: process.env.DB_HOST || 'localhost',
      dialect: process.env.DB_DIALECT || 'mysql',

      // eslint-disable-next-line no-console
      logging: !process.env.DB_LOGGING || process.env.DB_LOGGING === 'false' ? false : console.log,
    };

    const mailSender = process.env.MAIL_SENDER || 'wantJSON.com <support@wantjson.com>';

    const aws = {
      region: process.env.AWS_REGION || 'us-west-2',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'XXXX',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'XXXX/XXXX',
    };

    const GATrakingID = process.env.GA_TRAKING_ID || 'UA-xxxxxxxxx-1';

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
      apiBaseURL,
      payloadURL,
      contactEmail,
      aws,
      mailSender,
      GATrakingID,
    };
  }
}

export default Locals.config();
