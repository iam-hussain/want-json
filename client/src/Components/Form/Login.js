/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import {
  Item, Label, Input, ErrorBlock,
} from '../Basic/Form';
import { PrimaryBtn } from '../Basic/Button/Button';
import {
  requiredInputMsg,
  emailInvalidMsg,
  passwordMinLengthMsg,
} from '../../utils/Message';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    errors,
    formState,
  } = useForm({ mode: 'onChange' });
  const onSubmit = async (data) => {
    console.log(data, '===============');
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
        <Label>Email</Label>
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
          disabled={!formState.isValid || formState.isSubmitting}
        >
          Login to your Account!
        </PrimaryBtn>
      </Item>
    </form>
  );
}
