/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-this-in-sfc */
import React, { useEffect } from 'react';

import Router from 'next/router';
import { shouldHaveAuth, shouldNotHaveAuth } from '../utils/Authentication';

export default function withAuthorization(WrappedComponent, mustLogged = true) {
  const OuterComponent = ({ ...props }) => {
    const syncLogout = (event) => {
      if (mustLogged && event.key === 'logout') {
        Router.push('/login');
      }
      if (!mustLogged && event.key === 'login') {
        Router.push('/');
      }
    };
    useEffect(() => {
      window.addEventListener('storage', syncLogout);
      return () => {
        window.removeEventListener('storage', syncLogout);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  OuterComponent.getInitialProps = async (ctx) => {
    if (mustLogged) {
      const token = shouldHaveAuth(ctx);
      return { token };
    }

    const token = shouldNotHaveAuth(ctx);

    const componentProps = WrappedComponent.getInitialProps
            && (await WrappedComponent.getInitialProps(ctx));
    return {
      token,
      ...componentProps,
    };
  };
  return OuterComponent;
}
