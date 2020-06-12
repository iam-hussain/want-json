import React, { useState, useEffect } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import { useAlert } from 'react-alert';
import {
  Item, Label, Input, ErrorBlock, Form,
} from '../Basic/Form';
import { PrimaryBtn } from '../Basic/Button/Button';
import {
  requiredInputMsg,
} from '../../utils/Message';
import { putMethod } from '../../utils/Integration';
import { logEvent } from '../../utils/Analytics';

export default function ChangePasswordForm({ profileData, token }) {
  const [componentLoading, setComponentLoading] = useState(true);
  const {
    register,
    handleSubmit,
    errors,
    setError,
    setValue,
  } = useForm({ mode: 'onChange' });
  const alert = useAlert();

  useEffect(() => {
    setValue([
      { firstName: profileData.firstName },
      { lastName: profileData.lastName },
      { displayName: profileData.displayName },
      { email: profileData.email },
      { url: profileData.url },
    ]);
    setComponentLoading(false);
  }, []);

  const onSubmit = async (data) => {
    const responseData = await putMethod('profile', data, token);
    if (responseData.success) {
      logEvent('User', responseData.message);
      alert.success(responseData.message);
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
          hasError={errors.firstName}
          type="text"
          ref={register({
            required: requiredInputMsg,
            minLength: {
              value: 4,
              message: 'Provide a valid First Name with min 4 letters',
            },
          })}
          name="firstName"
          required
        />
        <Label>Your First Name</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="firstName" />
        </ErrorBlock>
      </Item>
      <Item>
        <Input
          hasError={errors.lastName}
          type="text"
          ref={register({
            required: requiredInputMsg,
            minLength: {
              value: 4,
              message: 'Provide a valid Last Name with min 4 letters',
            },
          })}
          name="lastName"
          required
        />
        <Label>Your Last Name</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="lastName" />
        </ErrorBlock>
      </Item>
      <Item>
        <Input
          hasError={errors.displayName}
          type="text"
          ref={register({
            required: requiredInputMsg,
            minLength: {
              value: 4,
              message: 'Provide a valid Display Name with min 4 letters',
            },
          })}
          name="displayName"
          required
        />
        <Label>Your Display Name</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="displayName" />
        </ErrorBlock>
      </Item>
      <Item>
        <Input
          hasError={errors.email}
          type="text"
          ref={register()}
          name="email"
          required
          disabled
        />
        <Label>Your Email</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="email" />
        </ErrorBlock>
      </Item>
      <Item>
        <Input
          hasError={errors.url}
          type="text"
          ref={register({
            required: requiredInputMsg,
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm,
              message: 'Provide a valid URL',
            },
          })}
          name="url"
          required
        />
        <Label>Your URL</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="url" />
        </ErrorBlock>
      </Item>
      <Item>
        <PrimaryBtn
          large
          type="submit"
          className="button large primary"
          formNoValidate
          disabled={componentLoading}
        >
          Update your Profile!
        </PrimaryBtn>
      </Item>
    </Form>
  );
}
