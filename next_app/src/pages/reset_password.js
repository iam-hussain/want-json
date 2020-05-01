import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FullPage from '../components/FullPage';
import ResetPasswordForm from '../components/form/ResetPasswordForm';
import axios from '../lib/axios';
import { openAlert } from "../redux/actions/alertActions";


export default function Page(props) {
  const [emailInput, setEmailInput] = useState('');
  const [responseError, setResponseError] = useState([]);
  const [mailSent, setMailSent] = useState(false);
  const dispatch = useDispatch();

  const setEmail = async(val) => {
    setEmailInput(val);
  }

  const onResend =  async () => {
    let response = await axios('send_otp', 'post', {email: emailInput, type: 'reset_password'});
    if(response.success){
        setMailSent(true);
        dispatch(
            openAlert({
            title: "Sent",
            content: `Email OTP sent to ${emailInput} succesfully, please check your mail`,
            buttons: [
                {
                title: "Close",
                value: "close",
                icon: "fas fa-window-close",
                },
            ],
            })
        );
    }else{
        setResponseError(response.message);
    }
  }

  return (
    <FullPage>
        <div className="form-box">
            <h2 className="form-box-title">Reset Password</h2>
            <ResetPasswordForm setEmail={setEmail} responseError={responseError} mailSent={mailSent} />
            <div className='form-box-bottom'>
              {mailSent ? <button className="button form-text" onClick={e => setMailSent(false)}>Change Email ID</button> : <button className="button form-text" onClick={e => onResend()}>Send OTP</button> }
                
            </div>
        </div>
    </FullPage>
  );
}
