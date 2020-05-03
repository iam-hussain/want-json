import React from "react";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import { userLogin } from "../redux/actions/userActions";

import Wrapper from "../components/Wrapper";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/vendor/font-awesome.min";
import '../assets/less/nprogress.less';
import '../assets/less/codebox.less';
import "../assets/less/standard.less";
import "../assets/less/common.less";
// Pages
import "../assets/less/authentication.less";
import "../assets/less/dashboard.less";
import "../assets/less/documentation.less";
import "../assets/less/explore.less";
import "../assets/less/home.less";

function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  //Anything returned here can be accessed by the client
  return { pageProps: pageProps };
};

const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
