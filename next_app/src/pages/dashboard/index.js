import React, { Component, Fragment } from "react";

import Page from "../../components/Page";
import DashMenu from "../../components/dashboard/DashMenu";
import Statistics from "../../components/dashboard/Statistics";
export default class Index extends Component {
  render() {
    return (
      <Fragment>
        <Page>
          <div className="row dash-content">
            <DashMenu />
            <div className="col dash-box">
              <Statistics />
            </div>
          </div>
        </Page>
      </Fragment>
    );
  }
}
