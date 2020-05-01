import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


export default function FullPage(props) {
  const router = useRouter();
  return (
    <Fragment>
      <div className="landing-decoration"></div>
      <div className="container authContainer">
        <div className="landing row align-items-center justify-content-center">
          <div className="landing-info col-md">
            <h2 className="landing-info-pretitle">Welcome to</h2>
            <h1 className="landing-info-title brand">
              <Link href="/">
                <a>getJSON</a>
              </Link>
            </h1>
            <p className="landing-info-text">
              The next generation social network &amp; community! Connect with
              your friends and play with our quests and badges gamification
              system!
            </p>
            <div className="tab-switch">
              <Link href="/login">
                <p
                  className={`tab-switch-button${
                    router.pathname == "/login" ? " active" : ""
                  }`}
                >
                  Login
                </p>
              </Link>
              <Link href="/register">
                <p
                  className={`tab-switch-button${
                    router.pathname == "/register" ? " active" : ""
                  }`}
                >
                  Register
                </p>
              </Link>
            </div>
          </div>
          <div className="landing-form col-md ">{props.children}</div>
        </div>
      </div>
    </Fragment>
  );
}
