const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const Dotenv = require('dotenv-webpack');

module.exports = withFonts(withCSS({
  enableSvg: true,
  webpack(config) {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  },
  env: {
    APP_SECRET: process.env.APP_SECRET,
    API_BASE_URL: process.env.API_BASE_URL,
    PAYLOAD_URL: process.env.PAYLOAD_URL,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  },
}));
