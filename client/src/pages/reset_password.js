import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Landing from '../Components/Layout/Landing';
import { H3 } from '../Components/Basic/Text';
import { CustomFormBox, BottomSeparator } from '../Components/Extended/Wrapper';
import { Button } from '../Components/Basic/Button/Button';
import PasswordResetForm from '../Components/Form/PasswordReset';
import { postMethod } from '../utils/Integration';
import { openAlert } from '../Redux/Actions/commonActions';
import { emailInvalidMsg } from '../utils/Message';

export default function ResetPassword() {
  const [emailInput, setEmailInput] = useState('');
  const [responseError, setResponseError] = useState([]);
  const [mailSent, setMailSent] = useState(false);
  const dispatch = useDispatch();

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
      dispatch(
        openAlert({
          title: 'Sent',
          content: `Email OTP sent to ${emailInput} succesfully, please check your mail`,
          buttons: [
            {
              title: 'Close',
              value: 'close',
              icon: 'fas fa-window-close',
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
        <H3 align="center" padding="14px 0px">Reset Account Password</H3>
        <PasswordResetForm
          setEmail={setEmailInput}
          responseError={responseError}
          mailSent={mailSent}
        />
        <BottomSeparator>
          {mailSent
            ? <Button padding="2px" size="0.75rem" onClick={() => setMailSent(false)}>Change Email ID</Button>
            : <Button padding="2px" size="0.75rem" onClick={() => handleSendOTP()}>Resend OTP</Button> }
        </BottomSeparator>
      </CustomFormBox>
    </Landing>
  );
}
