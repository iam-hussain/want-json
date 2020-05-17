import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Dash from '../../../../Components/Layout/Dashboard';
import Payload from '../../../../Components/Form/Payload';
import { SubHeadingComp } from '../../../../Components/Basic/Text';
import { getMethod } from '../../../../utils/Integration';
import { shouldHaveAuth } from '../../../../utils/Authentication';

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
    <Dash>
      <SubHeadingComp back="/dashboard/payload" title="Edit Payload" />
      <Payload data={payload} editMode />
    </Dash>
  );
}

Edit.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const token = shouldHaveAuth(ctx);
  const myPayload = await getMethod(`payload/${id}`, token);
  if (!myPayload.success && ctx.res) {
    ctx.res.writeHead(302, { Location: '/dashboard/payload' });
    ctx.res.end();
    return null;
  }
  if (!myPayload.success) {
    Router.push('/');
  }

  return { payload: myPayload.payload, token };
};

export default Edit;
