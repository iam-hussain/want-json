/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';

import withRedux from 'next-redux-wrapper';
import Store from '../redux/store';

import Wrapper from '../components/Middleware/Wrapper';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/vendor/font-awesome.min';
import '../assets/less/nprogress.less';
import '../assets/less/codebox.less';
import '../assets/less/standard.less';
import '../assets/less/common.less';
// Pages
import '../assets/less/authentication.less';
import '../assets/less/dashboard.less';
import '../assets/less/documentation.less';
import '../assets/less/explore.less';
import '../assets/less/home.less';

function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Wrapper>
        <Component pageProps={pageProps} />
      </Wrapper>
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
