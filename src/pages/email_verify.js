import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import withAuthorization from '../components/Authorization';
import Landing from '../components/Layout/Landing';
import { H3 } from '../components/Basic/Text';
import { CustomFormBox, BottomSeparator } from '../components/Extended/Wrapper';
import { Button } from '../components/Basic/Button/Button';
import EmailVerifyForm from '../components/Form/EmailVerify';
import { postMethod } from '../utils/Integration';
import { emailInvalidMsg } from '../utils/Message';

function EmailVerify() {
  const [emailInput, setEmailInput] = useState('');
  const [responseError, setResponseError] = useState([]);
  const [resendDisable, setResendDisable] = useState(false);
  const alert = useAlert();

  const handleResend = async () => {
    if (!emailInput) {
      setResponseError([{
        param: 'email',
        msg: emailInvalidMsg,
      }]);
      return false;
    }
    const responseData = await postMethod('send_otp', { email: emailInput, type: 'email_verify' });
    if (responseData.success) {
      setResendDisable(true);
      localStorage.setItem('email_verify', emailInput);
      // eslint-disable-next-line no-console
      console.log(responseData.message);
      alert.success(responseData.message);
    } else if (responseData.errorType === 'validation') {
      setResponseError(responseData.message);
    } else {
      alert.error(responseData.message);
    }
    return true;
  };


  return (
    <Landing>
      <CustomFormBox>
        <H3 align="center" padding="14px 0px">Account Email Verification</H3>
        <EmailVerifyForm setEmail={setEmailInput} responseError={responseError} />
        <BottomSeparator>
          <Button padding="2px" size="0.75rem" onClick={() => handleResend()} disabled={resendDisable}>Send OTP</Button>
        </BottomSeparator>
      </CustomFormBox>
    </Landing>
  );
}

export default withAuthorization(EmailVerify, false);
