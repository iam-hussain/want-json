import React from 'react';
import Link from 'next/link';
import Landing from '../Components/Layout/Landing';
import { H2 } from '../Components/Basic/Text';
import { CustomFormBox, BottomSeparator } from '../Components/Extended/Wrapper';
import { Button } from '../Components/Basic/Button/Button';
import LoginForm from '../Components/Form/Login';

export default function Login() {
  return (
    <Landing>
      <CustomFormBox>
        <H2 align="center" padding="14px 0px" size="1.65rem">Account Login</H2>
        <LoginForm />
        <BottomSeparator>
          <Link href="/reset_password"><Button padding="2px" size="0.75rem">Forgot Password</Button></Link>
        </BottomSeparator>
      </CustomFormBox>
    </Landing>
  );
}
