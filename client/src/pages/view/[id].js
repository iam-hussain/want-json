import React from 'react';
import Page from '../../Components/Layout/Page';
import { getMethod } from '../../utils/Integration';
import ViewPayload from '../../Components/Payload';

function Edit({ payload }) {
  return (
    <Page>
      <ViewPayload payload={payload} />
    </Page>
  );
}

Edit.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const myPayload = await getMethod(`explore/${id}`);
  if (!myPayload.success) {
    ctx.res.writeHead(302, { Location: '/explore' });
    ctx.res.end();
    return null;
  }
  return { payload: myPayload.payload };
};

export default Edit;
