/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm, ErrorMessage } from 'react-hook-form';
import {
  requiredInputMsg,
  emailInvalidMsg,
} from '../../msg';
import axios from '../../utils/axios';

export default function EmailVerify({ responseError, setEmail }) {
  const [componentLoading, setComponentLoading] = useState(true);
  const {
    register,
    handleSubmit,
    errors,
    watch,
    setError,
    reset,
    formState,
    setValue,
    triggerValidation,
  } = useForm({ mode: 'onChange' });
  const router = useRouter();

  useEffect(() => {
    setComponentLoading(false);
    setValue('email', localStorage.getItem('email_verify'));
    triggerValidation('email');
  }, []);

  const emailWatch = watch('email');
  useEffect(() => {
    setEmail(emailWatch);
  }, [emailWatch]);

  useEffect(() => {
    responseError.map((m) => {
      setError(m.param, 'invalid', m.msg);
      return true;
    });
  }, [responseError]);


  const onSubmit = async (data) => {
    const response = await axios('email_verify', 'post', data);
    if (response.success) {
      localStorage.removeItem('email_verify');
      localStorage.setItem('token', response.payload.token);
      reset();
      router.push('/');
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
            <input
              type="text"
              name="otp"
              ref={register({
                required: requiredInputMsg,
              })}
              required
            />
            <label>Enter Verification OTP</label>
            <span className="error-block">
              <ErrorMessage errors={errors} name="otp" />
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
            disabled={!formState.isValid || formState.isSubmitting || componentLoading}
          >
            Verify
          </button>
        </div>
      </div>
    </form>
  );
}
