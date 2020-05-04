import React from 'react';
import { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

function MyDocument({ styleTags }) {
  return (
    <html lang="en">
      <Head>{styleTags}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  );
}

MyDocument.getInitialProps = async ({ renderPage }) => {
  const sheet = new ServerStyleSheet();
  const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
  const styleTags = sheet.getStyleElement();
  return { ...page, styleTags };
};

export default MyDocument;
