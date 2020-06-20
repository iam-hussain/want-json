import React from 'react';
import Router from 'next/router';
import { PageFromStart } from '../../components/Layout/Page';
import { getMethod } from '../../utils/Integration';
import ViewPayload from '../../components/Payload';

function Edit({ payload }) {
  return (
    <PageFromStart>
      <ViewPayload payload={payload} onlyPublic />
    </PageFromStart>
  );
}

Edit.getInitialProps = async (ctx) => {
  const { url } = ctx.query;
  const myPayload = await getMethod(`explore/${url}`);

  if (!myPayload.success && ctx.res) {
    ctx.res.writeHead(302, { Location: '/explore' });
    ctx.res.end();
    return null;
  }
  if (!myPayload.success) {
    Router.push('/explore');
  }
  return { payload: myPayload.payload };
};

export default Edit;
