import React from 'react';
import Link from 'next/link';
import withAuthorization from '../components/Authorization';
import Landing from '../components/Layout/Landing';
import { H3, P, ASpan } from '../components/Basic/Text';
import { CustomFormBox, BottomSeparator } from '../components/Extended/Wrapper';
import RegisterForm from '../components/Form/Register';

function Register() {
  return (
    <Landing>
      <CustomFormBox>
        <H3 align="center" padding="14px 0px">Register with us!</H3>
        <RegisterForm />
        <BottomSeparator>
          <P align="center" padding="2px" size="0.75rem" font="Rajdhani">
            You&apos;ll receive a verification email in your inbox with a OTP.
            {' '}
            <Link href="/email_verify"><ASpan size="0.9rem" font="Rajdhani">Click here to Email Verify.</ASpan></Link>
            {' '}
            If you have any problems,
            {' '}
            <Link href="/contact_us"><ASpan size="0.9rem" font="Rajdhani">Contact us!</ASpan></Link>
            .
          </P>
        </BottomSeparator>
      </CustomFormBox>
    </Landing>
  );
}

export default withAuthorization(Register, false);
