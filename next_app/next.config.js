const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');

module.exports = withFonts(withCSS(withLess({
   enableSvg: true,
   webpack(config, options) {
     return config;
   }
 }
))); 