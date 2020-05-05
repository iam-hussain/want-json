/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { useForm, ErrorMessage } from 'react-hook-form';
import {
  Item, Label, Input, ErrorBlock,
} from '../Basic/Form';
import { PrimaryBtn } from '../Basic/Button/Button';
import {
  requiredInputMsg,
  emailInvalidMsg,
  passwordMinLengthMsg,
  repeatPasswordNotMatch,
} from '../../utils/Message';
import { postMethod } from '../../utils/Axios';

export default function RegisterForm() {
  const [componentLoading, setComponentLoading] = useState(true);
  const {
    register,
    handleSubmit,
    errors,
    formState,
    watch,
    setError,
    reset,
  } = useForm({ mode: 'onChange' });
  const router = useRouter();

  useEffect(() => {
    setComponentLoading(false);
  }, []);

  const onSubmit = async (data) => {
    const responseData = await postMethod('signup', data);
    console.log("======================", responseData);
    if (responseData.success) {
      cookie.set('email_verify', data.email, { expires: 1 });
      reset();
      router.push('/email_verify');
    } else {
      responseData.message.map((m) => {
        setError(m.param, 'invalid', m.msg);
        return true;
      });
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
          Register your Account!
        </PrimaryBtn>
      </Item>
    </form>
  );
}
