const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const Dotenv = require('dotenv-webpack');

module.exports = withFonts(withCSS({
  enableSvg: true,
  webpack(config, { isServer }) {
    if (isServer) {
      // eslint-disable-next-line global-require
      require('./scripts/generate-sitemap');
    }
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
  env: {
    APP_SECRET: process.env.APP_SECRET || '1242#$%$^%!@@$!%*(%^jnadkjcn',
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3000/web/',
    PAYLOAD_URL: process.env.PAYLOAD_URL || 'http://localhost:3000/api/',
    CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'admin@wantjson.com',
    APP_URL: process.env.APP_URL || 'http://localhost:3000',
    GA_TRAKING_ID: process.env.GA_TRAKING_ID || 'UA-xxxxxxxxx-1',
    APP_NAME: process.env.APP_NAME || 'wantJSON',
  },
}));
