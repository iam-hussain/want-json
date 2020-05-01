
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FullPage from '../components/FullPage';
import EmailVerifyForm from '../components/Form/EmailVerifyForm';
import axios from '../lib/axios';
import { openAlert } from "../redux/actions/alertActions";


export default function Page(props) {
  const [emailInput, setEmailInput] = useState('');
  const [responseError, setResponseError] = useState([]);
  const [resendDisable, setResendDisable] = useState(false);
  const dispatch = useDispatch();

  const setEmail = async(val) => {
    setEmailInput(val);
  }

  const onResend =  async () => {
    let response = await axios('send_otp', 'post', {email: emailInput, type: 'email_verify'});
    if(response.success){
        setResendDisable(true);
        localStorage.setItem('email_verify', emailInput);
        dispatch(
            openAlert({
            title: "Resend",
            content: `Email resent to ${emailInput} succesfully, please check your mail`,
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
            <h2 className="form-box-title">Email Verification</h2>
            <EmailVerifyForm setEmail={setEmail} responseError={responseError}/>
            <div className='form-box-bottom'>
                <button className="button form-text" onClick={e => onResend()} disabled={resendDisable}>Resend Email</button>
            </div>
        </div>
    </FullPage>
  );
}
