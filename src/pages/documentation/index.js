import React from 'react';
import Router from 'next/router';

function Documentation() {
  return (<></>);
}

Documentation.getInitialProps = async (ctx) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: '/documentation/introduction' });
    ctx.res.end();
    return null;
  }
  Router.push('/documentation/introduction');
  return null;
};

export default Documentation;
