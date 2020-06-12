/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useForm, ErrorMessage } from 'react-hook-form';
import { useAlert } from 'react-alert';
import {
  Item, Label, Input, ErrorBlock, Form,
} from '../Basic/Form';
import { PrimaryBtn } from '../Basic/Button/Button';
import {
  requiredInputMsg,
  emailInvalidMsg,
  passwordMinLengthMsg,
} from '../../utils/Message';
import { postMethod } from '../../utils/Integration';
import { loggedUpdate } from '../../Redux/Actions/userActions';
import { logEvent } from '../../utils/Analytics';

export default function LoginForm() {
  const [componentLoading, setComponentLoading] = useState(true);
  const {
    register,
    handleSubmit,
    errors,
    formState,
    setError,
    reset,
  } = useForm({ mode: 'onChange' });
  const alert = useAlert();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setComponentLoading(false);
  }, []);

  const onSubmit = async (data) => {
    const responseData = await postMethod('signin', data);
    if (responseData.success) {
      logEvent('User', responseData.message);
      alert.success(responseData.message);
      cookie.set('token', responseData.payload.token, { expires: 7 });
      cookie.remove('email_verify');
      window.localStorage.setItem('login', Date.now());
      dispatch(loggedUpdate(true));
      router.push('/');
      reset();
    } else if (responseData.errorType === 'validation') {
      responseData.message.map((m) => {
        setError(m.param, 'invalid', m.msg);
        return true;
      });
    } else if (responseData.errorType === 'email_verify') {
      alert.error(responseData.message);
      cookie.set('email_verify', responseData.payload.email, { expires: 1 });
      router.push('/email_verify');
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
          hasError={errors.password}
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
        <Label>Password</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="password" />
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
          Login to your Account!
        </PrimaryBtn>
      </Item>
    </Form>
  );
}
