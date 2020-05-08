import React from 'react';
import Link from 'next/link';
import Landing from '../Components/Layout/Landing';
import { H3, P, ASpan } from '../Components/Basic/Text';
import { CustomFormBox, BottomSeparator } from '../Components/Extended/Wrapper';
import RegisterForm from '../Components/Form/Register';

export default function Register() {
  return (
    <Landing>
      <CustomFormBox>
        <H3 align="center" padding="14px 0px">Create your Account!</H3>
        <RegisterForm />
        <BottomSeparator>
          <P align="center" padding="2px" size="0.75rem" font="Rajdhani">
            You&apos;ll receive a verification email in your inbox with a OTP.
            {' '}
            <Link href="/email_verify"><ASpan size="0.75rem" font="Rajdhani">Click here to Email Verify.</ASpan></Link>
            {' '}
            If you have any problems,
            {' '}
            <Link href="/contact_us"><ASpan size="0.75rem" font="Rajdhani">contact us !</ASpan></Link>
          </P>
        </BottomSeparator>
      </CustomFormBox>
    </Landing>
  );
}
