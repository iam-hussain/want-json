import React from 'react';
import Link from 'next/link';
import { AuthPage } from '../components/Page';
import LoginForm from '../components/Form/LoginForm';

export default function LoginPage() {
  return (
    <AuthPage>
      <div className="form-box">
        <h2 className="form-box-title">
          Account Login
        </h2>
        <LoginForm />
        {/* <p className="lined-text">Login with your Social Account</p>
              <div className="social-links">
                  <button className="social-link button hover-animate ">
                      <i className="fab fa-github fa-2x"></i>
                  </button>
                  <button className="social-link button hover-animate ">
                      <i className="fab fa-google fa-2x"></i>
                  </button>
                  <button className="social-link button hover-animate ">
                      <i className="fab fa-facebook fa-2x"></i>
                  </button>

              </div> */}
        <div className="form-box-bottom">
          <Link href="/reset_password"><button type="button" className="button form-text">Forgot Password</button></Link>
        </div>
      </div>
    </AuthPage>
  );
}
