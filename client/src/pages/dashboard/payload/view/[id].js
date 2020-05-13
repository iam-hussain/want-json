import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Page from '../../../../Components/Layout/Page';
import { SubHeadingComp } from '../../../../Components/Basic/Text';
import { getMethod } from '../../../../utils/Integration';
import ViewPayload from '../../../../Components/Payload';

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
      <SubHeadingComp back="/dashboard/payload" title="View Payload" />
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
