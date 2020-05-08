/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useForm, ErrorMessage } from 'react-hook-form';
import {
  Item, Label, Input, ErrorBlock, Form,
} from '../Basic/Form';
import { PrimaryBtn } from '../Basic/Button/Button';
import {
  requiredInputMsg,
  emailInvalidMsg,
  passwordMinLengthMsg,
  repeatPasswordNotMatch,
} from '../../utils/Message';
import { postMethod } from '../../utils/Integration';
import { openAlert } from '../../Redux/Actions/commonActions';

export default function RegisterForm({ responseError, setEmail, mailSent }) {
  const [componentLoading, setComponentLoading] = useState(true);
  const {
    register,
    handleSubmit,
    errors,
    formState,
    watch,
    reset,
    setError,
  } = useForm({ mode: 'onChange' });
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setComponentLoading(false);
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
    const responseData = await postMethod('reset_password', data);
    if (responseData.success) {
      dispatch(
        openAlert({
          title: 'Success',
          content: responseData.message,
          buttons: [
            {
              title: 'Close',
              value: 'reset_password',
              icon: 'fas fa-window-close',
              type: 'primary',
              action: false,
              data: {},
            },
          ],
        }),
      );
      reset();
      router.push('/');
    } else if (responseData.errorType === 'validation') {
      responseData.message.map((m) => {
        setError(m.param, 'invalid', m.msg);
        return true;
      });
    } else {
      dispatch(openAlert(responseData.alert));
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
          disabled={mailSent}
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
        <Label>New Password</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="password" />
        </ErrorBlock>
      </Item>
      <Item>
        <Input
          hasError={errors.repeat_password}
          type="password"
          ref={register({
            required: requiredInputMsg,
            validate: (value) => value === watch('password') || repeatPasswordNotMatch,
          })}
          name="repeat_password"
          required
        />
        <Label>Repeat Password</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="repeat_password" />
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
          Reset your Password!
        </PrimaryBtn>
      </Item>
    </Form>
  );
}
