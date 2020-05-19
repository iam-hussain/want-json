import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Page from '../../../../components/Layout/Page';
import { SubHeadingComp } from '../../../../components/Basic/Text';
import { getMethod } from '../../../../utils/Integration';
import ViewPayload from '../../../../components/Payload';

function Edit({ payload }) {
  const router = useRouter();

  const syncLogout = (event) => {
    if (event.key === 'logout') {
      router.push('/login');
    }
  };

  useEffect(() => {
    window.addEventListener('storage', syncLogout);
    return () => {
      window.removeEventListener('storage', syncLogout);
    };
  }, []);

  return (
    <Page>
      <SubHeadingComp margin="28px 0px 0px" back="/dashboard/payload" title="View Payload" />
      <ViewPayload payload={payload} />
    </Page>
  );
}

Edit.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const myPayload = await getMethod(`explore/${id}`);
  if (!myPayload.success && ctx.res) {
    ctx.res.writeHead(302, { Location: '/explore' });
    ctx.res.end();
    return null;
  }
  if (!myPayload.success) {
    Router.push('/');
  }
  return { payload: myPayload.payload };
};

export default Edit;
