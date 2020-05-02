import React, { useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/userActions";
import { loaderEnd } from '../redux/actions/commonActions'
import NProgress from 'nprogress';
import Router from 'next/router'

import Alert from "./Alert";
import Loader from './Loader'

export default function Wrapper(props) {
  const dispatch = useDispatch();

  const handleUserToken = () => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(
        userLogin({
          token
        })
      );
    }
  }
  useEffect(() => {
    setTimeout(() => {
      dispatch(loaderEnd());
    }, 500)
    handleUserToken();
  }, []);
  Router.events.on('routeChangeStart', handleUserToken)
  
  return (
    <Fragment>
      <Loader />
      <Alert />
      {props.children}
    </Fragment>
  );
}
