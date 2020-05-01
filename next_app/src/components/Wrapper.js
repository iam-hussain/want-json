import React, { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/userActions";

import Alert from "./Alert";

export default function Wrapper(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      console.log("bnsndbn==========", token);
      dispatch(
        userLogin({
          token,
          email: "jakirmechon@gmail.com",
          id: "1",
        })
      );
    }
  }, []);

  return (
    <Fragment>
      <Alert />
      {props.children}
    </Fragment>
  );
}
