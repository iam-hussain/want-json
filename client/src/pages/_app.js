/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import withRedux from 'next-redux-wrapper';
import NProgress from 'nprogress';
import Router from 'next/router';
import nextCookie from 'next-cookies';

import Store from '../Redux/Store';
import { theme, GlobalStyle } from '../style';
import Loader from '../Components/Basic/Loader';
import Alert from '../Components/Basic/Alert';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/vendor/nprogress.css';


import { loggedUpdate } from '../Redux/Actions/userActions';

function Wrapper({ children, logged }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loggedUpdate(logged));
  }, []);
  return (
    <>
      {children}
    </>
  );
}

function MyApp({
  Component, pageProps, store, logged,
}) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      setLoader(false);
      NProgress.done();
    }, 500);
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

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Wrapper logged={logged}>
          <GlobalStyle />
          <Loader show={loader} />
          <Alert />
          <Component pageProps={pageProps} />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = nextCookie(ctx);
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  // Anything returned here can be accessed by the client
  return { pageProps, logged: !!token };
};

const makeStore = () => Store;
export default withRedux(makeStore)(MyApp);
