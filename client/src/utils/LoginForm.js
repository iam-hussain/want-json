/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { useForm, ErrorMessage } from 'react-hook-form';
import {
  requiredInputMsg,
  emailInvalidMsg,
  passwordMinLengthMsg,
} from '../../msg';
import axios from '../../utils/axios';
import { openAlert, closeAlert } from '../../redux/actions/alertActions';

export default function LoginForm() {
  const [componentLoading, setComponentLoading] = useState(true);
  const alertData = useSelector((state) => state.alert);
  const {
    register,
    handleSubmit,
    errors,
    setError,
    reset,
    formState,
  } = useForm({ mode: 'onChange' });
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setComponentLoading(false);
  }, []);

  useEffect(() => {
    if (alertData.value === 'email_verify') {
      dispatch(closeAlert(''));
      router.push('/email_verify');
    }
  }, [alertData.value]);

  const onSubmit = async (data) => {
    const response = await axios('signin', 'post', data);
    if (response.success) {
      if (response.payload.token) {
        // localStorage.setItem('token', response.payload.token);
        cookie.set('token', response.payload.token, { expires: 1 });
        reset();
        router.push('/');
      } else {
        localStorage.setItem('email_verify', data.email);
        reset();
        dispatch(
          openAlert({
            title: 'Verify',
            content: 'Your email not yet verified, Please verify your email to login',
            closeValue: 'email_verify',
            buttons: [
              {
                title: 'Verify Now',
                value: 'email_verify',
                icon: 'fas fa-user-check',
              },
            ],
          }),
        );
      }
    } else {
      response.message.map((m) => {
        setError(m.param, 'invalid', m.msg);
        return true;
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
                required: requiredInputMsg,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: emailInvalidMsg,
                },
              })}
              name="email"
              required
            />
            <label>Email</label>
            <span className="error-block">
              <ErrorMessage errors={errors} name="email" />
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
                required: requiredInputMsg,
                minLength: {
                  value: 8,
                  message: passwordMinLengthMsg,
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
          <button
            type="submit"
            className="button large primary"
            formNoValidate
            disabled={
              !formState.isValid || formState.isSubmitting || componentLoading
            }
          >
            Login to your Account!
          </button>
        </div>
      </div>
    </form>
  );
}
