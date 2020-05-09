import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Landing from '../Components/Layout/Landing';
import { H3 } from '../Components/Basic/Text';
import { CustomFormBox, BottomSeparator } from '../Components/Extended/Wrapper';
import { Button } from '../Components/Basic/Button/Button';
import EmailVerifyForm from '../Components/Form/EmailVerify';
import { postMethod } from '../utils/Integration';
import { openAlert } from '../Redux/Actions/commonActions';
import { emailInvalidMsg } from '../utils/Message';

export default function EmailVerify() {
  const [emailInput, setEmailInput] = useState('');
  const [responseError, setResponseError] = useState([]);
  const [resendDisable, setResendDisable] = useState(false);
  const dispatch = useDispatch();

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
      dispatch(
        openAlert({
          title: 'Sent',
          content: `Email resent to ${emailInput} succesfully, please check your mail`,
          buttons: [
            {
              title: 'Close',
              value: 'close',
              action: false,
              data: {},
            },
          ],
        }),
      );
    } else if (responseData.errorType === 'validation') {
      setResponseError(responseData.message);
    } else {
      dispatch(openAlert(responseData.alert));
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
