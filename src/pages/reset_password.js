import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import withAuthorization from '../components/Authorization';
import Landing from '../components/Layout/Landing';
import { H3 } from '../components/Basic/Text';
import { CustomFormBox, BottomSeparator } from '../components/Extended/Wrapper';
import { Button } from '../components/Basic/Button/Button';
import PasswordResetForm from '../components/Form/PasswordReset';
import { postMethod } from '../utils/Integration';
import { emailInvalidMsg } from '../utils/Message';

function ResetPassword() {
  const [emailInput, setEmailInput] = useState('');
  const [responseError, setResponseError] = useState([]);
  const [mailSent, setMailSent] = useState(false);
  const alert = useAlert();

  const handleSendOTP = async () => {
    if (!emailInput) {
      setResponseError([{
        param: 'email',
        msg: emailInvalidMsg,
      }]);
      return false;
    }
    const responseData = await postMethod('send_otp', { email: emailInput, type: 'reset_password' });
    if (responseData.success) {
      setMailSent(true);
      alert.success(responseData.message);
    } else if (responseData.errorType === 'validation') {
      setResponseError(responseData.message);
    } else {
      alert.error(responseData.message);
    }
    return true;
  };

  const handleChangeEmail = () => {
    setMailSent(false);
    alert.info('Now you can change your Email ID');
  };

  return (
    <Landing>
      <CustomFormBox>
        <H3 align="center" padding="14px 0px">Forgotten Password</H3>
        <PasswordResetForm
          setEmail={setEmailInput}
          responseError={responseError}
          mailSent={mailSent}
        />
        <BottomSeparator>
          {mailSent
            ? <Button padding="2px" size="0.9rem" onClick={() => handleChangeEmail()}>Change Email ID</Button>
            : <Button padding="2px" size="0.9rem" onClick={() => handleSendOTP()}>Resend OTP</Button> }
        </BottomSeparator>
      </CustomFormBox>
    </Landing>
  );
}

export default withAuthorization(ResetPassword, false);
