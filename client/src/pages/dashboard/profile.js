import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Dash from '../../Components/Layout/Dashboard';
import { SubHeadingComp } from '../../Components/Basic/Text';
import ProfileForm from '../../Components/Form/Profile';
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
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return null;
  }
  if (!profileIs.success) {
    Router.push('/');
  }
  return { profileData: profileIs.payload, token };
};

export default Profile;
