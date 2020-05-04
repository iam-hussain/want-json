import React, { useEffect } from 'react';
import cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import NProgress from 'nprogress';
import Router from 'next/router';
import { userLogin } from '../redux/actions/userActions';
import { loaderEnd } from '../redux/actions/commonActions';

import Alert from './Alert';
import Loader from './Loader';

export default function Wrapper({ children }) {
  const dispatch = useDispatch();

  const handleUserToken = () => {
    const token = cookie.get('token'); // localStorage.getItem('token');

    if (token) {
      dispatch(
        userLogin({
          token,
        }),
      );
    }
  };
  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      dispatch(loaderEnd());
      NProgress.done();
    }, 500);
    handleUserToken();
  }, []);

  Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };

  Router.onRouteChangeError = () => {
    NProgress.done();
  };

  Router.events.on('routeChangeStart', handleUserToken);

  return (
    <>
      <Loader />
      <Alert />
      {children}
    </>
  );
}
