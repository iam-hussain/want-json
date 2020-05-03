import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import TopNav from './Common/TopNav';
import BottomNav from './Common/BottomNav';
import Footer from './Common/Footer';
import Alert from './Alert';
import Meta from './Common/Meta';

export default function Page({ children }) {
  return (
    <>
      <Meta />
      <Alert />
      <TopNav />
      <div className="wrapper">
        <div className="container">{children}</div>
      </div>
      <BottomNav />
      <Footer />
    </>
  );
}

export function AuthPage({ children }) {
  const router = useRouter();
  return (
    <>
      <div className="landing-decoration" />
      <div className="container authContainer">
        <div className="landing row align-items-center justify-content-center">
          <div className="landing-info col-md">
            <h2 className="landing-info-pretitle">Welcome to</h2>
            <h1 className="landing-info-title brand">
              <Link href="/">
                <span>getJSON</span>
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
                    router.pathname === '/login' ? ' active' : ''
                  }`}
                >
                  Login
                </p>
              </Link>
              <Link href="/register">
                <p
                  className={`tab-switch-button${
                    router.pathname === '/register' ? ' active' : ''
                  }`}
                >
                  Register
                </p>
              </Link>
            </div>
          </div>
          <div className="landing-form col-md ">{children}</div>
        </div>
      </div>
    </>
  );
}
