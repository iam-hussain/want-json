const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://wantjson.com',
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: 'public/static/',
});
