import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Dash from '../../components/Layout/Dashboard';
import { SubHeadingComp } from '../../components/Basic/Text';
import ProfileForm from '../../components/Form/Profile';
import { shouldHaveAuth } from '../../utils/Authentication';
import { getMethod } from '../../utils/Integration';

function Profile({ profileData, token }) {
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
      <SubHeadingComp margin="0px" back="" title="My Profile" />
      <ProfileForm profileData={profileData} token={token} />
    </Dash>
  );
}


Profile.getInitialProps = async (ctx) => {
  const token = shouldHaveAuth(ctx);
  const profileIs = await getMethod('profile', token);

  if (!profileIs.success && ctx.res) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return null;
  }
  if (!profileIs.success) {
    Router.push('/login');
  }
  return { profileData: profileIs.payload, token };
};

export default Profile;
