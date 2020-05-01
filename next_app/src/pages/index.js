import React, { Component, Fragment } from 'react'

import Page from "../components/Page";
import Hero from "../components/Home/Hero";
import Dummy from "../components/Home/Dummy";
import Own from "../components/Home/Own";

export default class Index extends Component {
  render() {
    return (
      <Fragment>
        <Page>
          <Hero />
          <Dummy />
          <Own />
        </Page>
      </Fragment>
    )
  }
}
