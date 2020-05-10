import React from 'react';
import Link from 'next/link';
import withAuthorization from '../Components/Authorization';
import Landing from '../Components/Layout/Landing';
import { H3 } from '../Components/Basic/Text';
import { CustomFormBox, BottomSeparator } from '../Components/Extended/Wrapper';
import { Button } from '../Components/Basic/Button/Button';
import LoginForm from '../Components/Form/Login';

function Login() {
  return (
    <Landing>
      <CustomFormBox>
        <H3 align="center" padding="14px 0px">Account Login</H3>
        <LoginForm />
        <BottomSeparator>
          <Link href="/reset_password"><Button padding="2px" size="0.75rem">Forgot Password</Button></Link>
        </BottomSeparator>
      </CustomFormBox>
    </Landing>
  );
}

export default withAuthorization(Login, false);
