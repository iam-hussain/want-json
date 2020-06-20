const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
  baseUrl: 'https://wantjson.com',
  pagesDirectory: path.resolve('./src/pages'),
  targetDirectory: path.resolve('./public/static/'),
});
