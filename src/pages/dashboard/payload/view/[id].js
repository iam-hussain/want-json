import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { shouldHaveAuth } from '../../../../utils/Authentication';
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
  const token = shouldHaveAuth(ctx);

  const myPayload = await getMethod(`payload/${id}`, token);
  if (!myPayload.success && ctx.res) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return null;
  }
  if (!myPayload.success) {
    Router.push('/login');
  }
  return { payload: myPayload.payload };
};

export default Edit;
