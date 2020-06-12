import React, { useState, useEffect } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import { useAlert } from 'react-alert';
import {
  Item, Textarea, Label, Input, ErrorBlock, Form,
} from '../Basic/Form';
import { PrimaryBtn } from '../Basic/Button/Button';
import {
  emailInvalidMsg,
  requiredInputMsg,
} from '../../utils/Message';
import { postMethod } from '../../utils/Integration';
import { logEvent } from '../../utils/Analytics';

export default function ContactUsForm() {
  const [componentLoading, setComponentLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState,
    errors,
    setError,
    reset,
  } = useForm({ mode: 'onChange' });
  const alert = useAlert();

  useEffect(() => {
    setComponentLoading(false);
  }, []);

  const onSubmit = async (data) => {
    const responseData = await postMethod('contact_us', data);
    if (responseData.success) {
      logEvent('Contact Us', responseData.message);
      alert.success(responseData.message);
      reset();
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
          hasError={errors.subject}
          type="text"
          ref={register({
            required: requiredInputMsg,
            minLength: {
              value: 10,
              message: 'Provide a valid subject with min 10 letters',
            },
            maxLength: {
              value: 10,
              message: 'Provide a valid subject with max 100 letters',
            },
          })}
          name="subject"
          required
        />
        <Label>Short Subject</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="subject" />
        </ErrorBlock>
      </Item>
      <Item>
        <Textarea
          hasError={errors.message}
          type="text"
          ref={register({
            required: requiredInputMsg,
            minLength: {
              value: 100,
              message: 'Provide a valid message with min 100 letters',
            },
            maxLength: {
              value: 1000,
              message: 'Provide a valid message with min 1000 letters',
            },
          })}
          name="message"
          required
        />
        <Label>What you want tell to us</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="message" />
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
          Submit your Message!
        </PrimaryBtn>
      </Item>
    </Form>
  );
}
