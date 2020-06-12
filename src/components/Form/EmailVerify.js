/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useAlert } from 'react-alert';
import { useForm, ErrorMessage } from 'react-hook-form';
import {
  Item, Label, Input, ErrorBlock, Form,
} from '../Basic/Form';
import { PrimaryBtn } from '../Basic/Button/Button';
import {
  requiredInputMsg,
  emailInvalidMsg,
} from '../../utils/Message';
import { postMethod } from '../../utils/Integration';
import { loggedUpdate } from '../../Redux/Actions/userActions';
import { logEvent } from '../../utils/Analytics';

export default function EmailVerifyForm({ responseError, setEmail }) {
  const [componentLoading, setComponentLoading] = useState(true);
  const {
    register,
    handleSubmit,
    errors,
    formState,
    setError,
    reset,
    watch,
    setValue,
    triggerValidation,
  } = useForm({ mode: 'onChange' });
  const router = useRouter();
  const alert = useAlert();
  const dispatch = useDispatch();

  useEffect(() => {
    setComponentLoading(false);
    if (cookie.get('email_verify')) {
      setValue('email', cookie.get('email_verify'));
      triggerValidation('email');
    }
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
    const responseData = await postMethod('email_verify', data);
    if (responseData.success) {
      logEvent('User', responseData.message);
      alert.success(responseData.message);
      cookie.set('token', responseData.payload.token, { expires: 7 });
      cookie.remove('email_verify');
      window.localStorage.setItem('login', Date.now());
      reset();
      dispatch(loggedUpdate(true));
      router.push('/');
    } else if (responseData.errorType === 'validation') {
      responseData.message.map((m) => {
        setError(m.param, 'invalid', m.msg);
        return true;
      });
    } else {
      alert.error(responseData.message);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Item>
        <Input
          hasError={errors.email}
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
        <Label>Your Email</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="email" />
        </ErrorBlock>
      </Item>
      <Item>
        <Input
          hasError={errors.otp}
          type="text"
          name="otp"
          ref={register({
            required: requiredInputMsg,
          })}
          required
        />
        <Label>Enter Verification OTP</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="otp" />
        </ErrorBlock>
      </Item>
      <Item>
        <PrimaryBtn
          large
          type="submit"
          className="button large primary"
          formNoValidate
          disabled={!formState.isValid || formState.isSubmitting || componentLoading}
        >
          Verify your Email!
        </PrimaryBtn>
      </Item>
    </Form>
  );
}
