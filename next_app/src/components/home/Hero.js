import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <div className="home-intro row align-items-center justify-content-center">
        <div className="col-auto">
          <p className="hero-image"><img src="/img/landing.svg" alt="Hero" /></p>
        </div>
        <div className="col hero-text-group">
          <h1>How can we help you?</h1>
          <p>
            Search or browse in depth articles and videos on everything on Docs Jekyll theme, from basic
            theme
            setup to customisation and development
          </p>
          <div className="intro-group">
            <button className="button primary hover-animate">Fake API</button>
            <button className="button primary hover-animate">Own API</button>
          </div>
        </div>
      </div>
    );
  }
}
