import React from 'react';
import Landing from '../Components/Layout/Landing';
import { H2 } from '../Components/Basic/Text';
import { CustomFormBox, BottomSeparator } from '../Components/Extended/Wrapper';
import { Button } from '../Components/Basic/Button/Button';
import PasswordResetForm from '../Components/Form/PasswordReset';

export default function Login() {
  return (
    <Landing>
      <CustomFormBox>
        <H2 align="center" padding="14px 0px" size="1.65rem">Reset Account Password</H2>
        <PasswordResetForm />
        <BottomSeparator>
          <Button padding="2px" size="0.75rem">Resend OTP</Button>
        </BottomSeparator>
      </CustomFormBox>
    </Landing>
  );
}
