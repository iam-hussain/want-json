/* eslint-disable no-param-reassign */
import fs from 'fs';
import path from 'path';
import Log from '../../middlewares/Log';
import Locals from '../../providers/Locals';

import { successResponce } from '../../utils/exchange';
import payloadModule from '../../helper/payload';

export default class Payload {
  static async generatePayloadSiteMap(req, res, next) {
    try {
      await payloadModule.getAll({}, { attributes: ['url', 'updatedAt'] }).then((data) => {
        const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="http://www.w3.org/1999/xhtml"
        >
        
    ${data.map((payload) => (`
            <url>
              <loc>${Locals.url}/view/${payload.url}</loc>
              <lastmod>${new Date(payload.updatedAt).toISOString()}</lastmod>
            </url>
            `))
    .join('')}
      
        </urlset>
          `;

        fs.writeFileSync(path.resolve('./public/sitemap/payload_sitemap.xml'), sitemap);
        Log.info('Payload Sitemap generated...');
      });

      return successResponce(req, res, 'Generated', 202, {});
    } catch (_error) {
      return next(_error);
    }
  }
}
