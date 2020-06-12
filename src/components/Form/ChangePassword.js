import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import { useForm, ErrorMessage } from 'react-hook-form';
import { useAlert } from 'react-alert';
import {
  Item, Label, Input, ErrorBlock, Form,
} from '../Basic/Form';
import { PrimaryBtn } from '../Basic/Button/Button';
import {
  requiredInputMsg,
  passwordMinLengthMsg,
  repeatPasswordNotMatch,
} from '../../utils/Message';
import { postMethod } from '../../utils/Integration';
import { logEvent } from '../../utils/Analytics';

export default function ChangePasswordForm() {
  const [componentLoading, setComponentLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState,
    errors,
    setError,
    reset,
    watch,
  } = useForm({ mode: 'onChange' });
  const router = useRouter();
  const alert = useAlert();


  useEffect(() => {
    setComponentLoading(false);
  }, []);

  const onSubmit = async (data) => {
    const token = cookie.get('token');
    const responseData = await postMethod('change_password', data, token);
    if (responseData.success) {
      logEvent('User', responseData.message);
      alert.success(responseData.message);
      reset();
      router.push('/login');
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
    <Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Item>
        <Input
          hasError={errors.current_password}
          type="password"
          ref={register({
            required: requiredInputMsg,
            minLength: {
              value: 8,
              message: passwordMinLengthMsg,
            },
          })}
          name="current_password"
          required
        />
        <Label>Current Password</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="current_password" />
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
          Change your Password!
        </PrimaryBtn>
      </Item>
    </Form>
  );
}
