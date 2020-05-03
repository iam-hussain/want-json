import React from 'react';
import Link from 'next/link';
import { AuthPage } from '../components/Page';
import RegisterFrom from '../components/Form/RegisterForm';

export default function RegisterPage() {
  return (
    <AuthPage>
      <div className="form-box">
        <h2 className="form-box-title">Create your Account!</h2>
        <RegisterFrom />
        <div className="form-box-bottom">
          <p className="form-text">
            You&apos;ll receive a verification email in your inbox with a OTP.
            <Link href="/email_verify"><a>Click here to Email Verify.</a></Link>
            If you have any problems,
            <Link href="/contact_us"><a>contact us !</a></Link>
          </p>
        </div>
      </div>
    </AuthPage>
  );
}
