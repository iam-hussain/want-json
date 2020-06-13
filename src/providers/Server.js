/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import express from 'express';
import next from 'next';
import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import Bootstrap from '../middlewares/Kernel';
import Log from '../middlewares/Log';
import Locals from './Locals';
import Routes from './Routes';
import { errorResponce } from '../utils/exchange';

export default function erverInit() {
  const { port } = Locals;
  const nextApp = next({ dev: Locals.env !== 'production' });
  const handle = nextApp.getRequestHandler();

  nextApp.prepare().then(() => {
    let expressApp = express();
    expressApp = Bootstrap(expressApp);
    expressApp = Routes(expressApp);

    expressApp.get('*', (req, res) => {
      if (req.xhr) {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        Log.error(`Path '${req.originalUrl}' not found [IP: '${ip}']!`);
        return errorResponce(req, res, 'URL not found from server', 404, 'server');
      }
      return handle(req, res);
    });

    expressApp.use((err, req, res, next) => {
      Log.error(err.stack);
      return errorResponce(req, res, 'Unexpected error from server', 500, 'server');
    });
    if (Locals.env !== 'production') {
      expressApp.listen(port, (_error) => {
        if (_error) {
          // eslint-disable-next-line no-console
          return console.log('Error: ', _error);
        }
        Log.info(`Server :: Running @ ${port}`);
        // eslint-disable-next-line no-console
        return console.log(
          '\x1b[33m%s\x1b[0m',
          `Server :: Running @ 'http://localhost:${port}'`,
        );
      });
    } else {
      const options = {
        cert: fs.readFileSync(path.resolve('./ssl/cert.crt')),
        ca: fs.readFileSync(path.resolve('./ssl/bundle.ca-bundle')),
        key: fs.readFileSync(path.resolve('./ssl/key.key')),
      };

      https.createServer(options, expressApp).listen(port, (_error) => {
        if (_error) {
          // eslint-disable-next-line no-console
          return console.log('Error: ', _error);
        }
        // eslint-disable-next-line no-console
        return console.log(
          '\x1b[33m%s\x1b[0m',
          `Server with SSL :: Running @ 'http://localhost:${port}'`,
        );
      });

      http.createServer((req, res) => {
        res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
        res.end();
      }).listen(80);
    }
  });
}
