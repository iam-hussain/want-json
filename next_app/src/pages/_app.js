import App from 'next/app'
import React, {Fragment } from 'react'


import "../../node_modules/bootstrap/dist/css/bootstrap.css"


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
          <Component {...pageProps} />
      </Fragment>
    )
  }
}