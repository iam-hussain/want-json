import React, { Fragment } from "react";

import TopNav from "./Common/TopNav";
import BottomNav from "./Common/BottomNav";
import Footer from "./Common/Footer";
import Alert from "./Alert";
import Meta from './Common/Meta'

export default function Page(props) {
  return (
    <Fragment>
      <Meta />
      <Alert />
      <TopNav />
      <div className="wrapper">
        <div className="container">{props.children}</div>
      </div>
      <BottomNav />
      <Footer />
    </Fragment>
  );
}
