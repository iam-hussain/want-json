import React from 'react';
import Link from 'next/link';
import withAuthorization from '../components/Authorization';
import Landing from '../components/Layout/Landing';
import { H3 } from '../components/Basic/Text';
import { CustomFormBox, BottomSeparator } from '../components/Extended/Wrapper';
import { Button } from '../components/Basic/Button/Button';
import LoginForm from '../components/Form/Login';

function Login() {
  return (
    <Landing>
      <CustomFormBox>
        <H3 align="center" padding="14px 0px">Alread a member?</H3>
        <LoginForm />
        <BottomSeparator>
          <Link href="/reset_password"><Button padding="2px" size="0.9rem">Forgotten Password</Button></Link>
        </BottomSeparator>
      </CustomFormBox>
    </Landing>
  );
}

export default withAuthorization(Login, false);
