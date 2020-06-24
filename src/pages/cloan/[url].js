import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Dash from '../../components/Layout/Dashboard';
import Payload from '../../components/Form/Payload';
import { SubHeadingComp } from '../../components/Basic/Text';
import { getMethod } from '../../utils/Integration';
import { shouldHaveAuth } from '../../utils/Authentication';
import commonUtil from '../../utils/common';

function Cloan({ payload, cloanURL }) {
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
    <Dash>
      <SubHeadingComp back="/explore" title="Cloan Payload" />
      <Payload data={payload} cloneMode cloanURL={cloanURL} />
    </Dash>
  );
}

Cloan.getInitialProps = async (ctx) => {
  const { url } = ctx.query;
  const token = shouldHaveAuth(ctx);
  const myPayload = await getMethod(`explore/${url}`, token);

  if (!myPayload.success && ctx.res) {
    ctx.res.writeHead(302, { Location: '/explore' });
    ctx.res.end();
    return null;
  }
  if (!myPayload.success) {
    Router.push('/explore');
  }

  return { payload: { ...myPayload.payload, title: `${myPayload.payload.title}_clone_${await commonUtil.randomGenerator(8)}` }, token, cloanURL: url };
};

export default Cloan;
