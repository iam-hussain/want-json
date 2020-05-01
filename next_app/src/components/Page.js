import React, { Fragment } from "react";

import TopNav from "./common/TopNav";
import BottomNav from "./common/BottomNav";
import Footer from "./common/Footer";
import Alert from "./Alert";

export default function Page(props) {
  return (
    <Fragment>
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
