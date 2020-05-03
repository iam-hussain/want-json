import React, { Component, Fragment } from "react";

import Page from "../../../components/Page";
import DashMenu from "../../../components/dashboard/DashMenu";
import PayloadForm from "../../../components/Form/PayloadForm"
export default class Index extends Component {
  render() {
    return (
      <Fragment>
        <Page>
          <div className="row dash-content">
            <DashMenu />
            <div className="col-md-8 dash-box">
              <div className="dash-box-title">
                <h2>Create Store</h2>
              </div>
                <PayloadForm />
            </div>
          </div>
        </Page>
      </Fragment>
    );
  }
}
