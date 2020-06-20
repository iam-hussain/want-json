/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';
import globby from 'globby';
import Log from '../src/middlewares/Log';
import Locals from '../src/providers/Locals';

(async () => {
  const pages = await globby([
    'src/pages/**/*{.js,.mdx}',
    '!src/pages/_*.js',
    '!src/pages/api',
  ]);

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
  >
  
  ${pages
    .filter((each) => !each.includes('['))
    .map((page) => {
      const pagePath = page
        .replace('src/', '')
        .replace('pages/', '')
        .replace('.js', '')
        .replace('.mdx', '');
      const route = pagePath === '/index' ? '' : pagePath;

      return `
      <url>
        <loc>${Locals.url}/${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      `;
    })
    .join('')}

  </urlset>
    `;

  fs.writeFileSync(path.resolve('./public/sitemap/page_sitemap.xml'), sitemap);
  Log.info('Page Sitemap generated...');
})();
