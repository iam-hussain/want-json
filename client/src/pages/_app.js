/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import withRedux from 'next-redux-wrapper';
import NProgress from 'nprogress';
import Router from 'next/router';

import Store from '../Redux/Store';
import { theme, GlobalStyle } from '../style';
import Loader from '../Components/Basic/Loader';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/vendor/nprogress.css';

function MyApp({ Component, pageProps, store }) {
  const [loader, setLoader] = useState({ index: '10', opacity: '1' });
  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      setLoader({ index: '-10', opacity: '0' });
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
        <GlobalStyle />
        <Loader index={loader.index} opacity={loader.opacity} />
        <Component pageProps={pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  // Anything returned here can be accessed by the client
  return { pageProps };
};

const makeStore = () => Store;
export default withRedux(makeStore)(MyApp);
