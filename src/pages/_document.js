/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const metaData = {
  description: 'Create a custom API in some seconds with GET, POST, PUT, DELETE methods, With static and dynamic API every developer and tester can do CURD (Create, Update, Read, Delete) operations.',
  site_name: 'getJSON.io',
  creator: 'ZaHuPro@GitHub',
  'image-1200x630': `${process.env.APP_URL}/static/metaImg-1200x630.png`,
  'image-600x314': `${process.env.APP_URL}/static/metaImg-600x314.png`,
  'image-180x110': `${process.env.APP_URL}/static/metaImg-180x100.png`,
};
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content={metaData.description} />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content={metaData.title} />
          <meta name="og:description" property="og:description" content={metaData.description} />
          <meta property="og:site_name" content={metaData.site_name} />
          <meta property="og:url" content={process.env.APP_URL} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={metaData.title} />
          <meta name="twitter:description" content={metaData.description} />
          <meta name="twitter:site" content={metaData.site_name} />
          <meta name="twitter:creator" content={metaData.creator} />
          <meta property="og:image" content={metaData['image-1200x630']} />
          <meta name="twitter:image" content={metaData['image-1200x630']} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image" content={metaData['image-600x314']} />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="314" />
          <meta property="og:image" content={metaData['image-180x110']} />
          <meta property="og:image:width" content="180" />
          <meta property="og:image:height" content="110" />
          <link rel="icon" href="/static/favicon.ico" />
          <link rel="apple-touch-icon" href="/static/favicon.ico" />
          {/* {this.props.styleTags} */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
