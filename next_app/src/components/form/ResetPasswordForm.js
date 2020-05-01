import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { useForm, ErrorMessage } from "react-hook-form";
import { openAlert, closeAlert } from "../../redux/actions/alertActions";
import {
  required_input_msg,
  email_invalid_msg,
  password_minLength_msg,
  repeat_password_not_match
} from "../../msg";
import axios from '../../lib/axios';

export default function ResetPassword(props) {
  const [componentLoading, setComponentLoading] = useState(true);
  const alertData = useSelector((state) => state.alert);
  const {
    register,
    handleSubmit,
    errors,
    watch,
    setError,
    reset,
    formState,
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setComponentLoading(false);
  }, []);
  
  let emailWatch = watch("email");
  useEffect(() => {
    props.setEmail(emailWatch);
  }, [emailWatch]);

  useEffect(() => {
    props.responseError.map((m) => {
      setError(m.param, "invalid", m.msg);
    });
  }, [props.responseError]);
  
  useEffect(() => {
    if (alertData.value === "reset_password") {
      dispatch(closeAlert(""));
      router.push("/login");
    }
  }, [alertData.value]);

  const onSubmit = async (data) => {
    let response = await axios('reset_password', 'post', data);
    if(response.success){
    //   localStorage.removeItem('email_verify');
    //   localStorage.setItem('token', response.payload.token);
    //   reset();
    //   router.push('/')
        dispatch(
            openAlert({
            title: "Resetted",
            content: 'Password resetted succesfully, Now please try to login',
            closeValue: 'reset_password',
            buttons: [
                {
                title: "Close",
                value: "reset_password",
                icon: "fas fa-window-close",
                },
            ],
            })
        );
    }else{
      response.message.map((m) => {
        setError(m.param, "invalid", m.msg);
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="form-item">
          <div className={`form-input${errors.email ? ' has-error' : ''}`}>
            <input
              type="text"
              ref={register({
                required: required_input_msg,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: email_invalid_msg,
                },
              })}
              name="email"
              required
              disabled={props.mailSent}
            />
            <label>Registered Email</label>
            <span className="error-block">
              <ErrorMessage errors={errors} name="email" />
            </span>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-item">
          <div className={`form-input${errors.otp ? ' has-error' : ''}`}>
            <input type="text" name="otp" ref={register({
                required: required_input_msg
              })} required />
            <label>Enter Verification OTP</label>
            <span className="error-block">
              <ErrorMessage errors={errors} name="otp" />
            </span>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-item">
          <div className={`form-input${errors.password ? ' has-error' : ''}`}>
            <input
              type="password"
              ref={register({
                required: required_input_msg,
                minLength: {
                  value: 8,
                  message: password_minLength_msg,
                },
              })}
              name="password"
              required
            />
            <label>Password</label>
            <span className="error-block">
              <ErrorMessage errors={errors} name="password" />
            </span>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-item">
          <div className={`form-input${errors.repeat_password ? ' has-error' : ''}`}>
            <input
              type="password"
              ref={register({
                required: required_input_msg,
                validate: (value) =>
                  value === watch("password") || repeat_password_not_match,
              })}
              name="repeat_password"
              required
            />
            <label>Repeat Password</label>
            <span className="error-block">
              <ErrorMessage errors={errors} name="repeat_password" />
            </span>
          </div>
        </div>
      </div>


      <div className="form-row">
        <div className="form-item">
          <button type="submit"
            className="button large primary"
            formNoValidate
            disabled={!formState.isValid || formState.isSubmitting || componentLoading}>Verify</button>
        </div>
      </div>
    </form>
  );
}
