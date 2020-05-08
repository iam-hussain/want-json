/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useForm, ErrorMessage } from 'react-hook-form';
import {
  Item, Label, Input, ErrorBlock, Form, RadioGroup, GroupName,
} from '../Basic/Form';
import { PrimaryBtn } from '../Basic/Button/Button';
import {
  requiredInputMsg,
  passwordMinLengthMsg,
} from '../../utils/Message';
import CodeEditor from '../Editor';
import { postMethod } from '../../utils/Integration';
import { openAlert } from '../../Redux/Actions/commonActions';
import { loggedUpdate } from '../../Redux/Actions/userActions';

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
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setComponentLoading(false);
  }, []);

  const onSubmit = async (data) => {
    const responseData = await postMethod('signin', data);
    if (responseData.success) {
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
    } else {
      dispatch(openAlert(responseData.alert));
    }
  };
  return (
    <Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Item>
        <Input
          hasError={errors.title}
          type="text"
          ref={register({
            required: requiredInputMsg,
            minLength: {
              value: 4,
              message: passwordMinLengthMsg,
            },
          })}
          name="title"
          required
        />
        <Label>API Title</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="title" />
        </ErrorBlock>
      </Item>
      <Item>
        <Input
          hasError={errors.description}
          type="text"
          ref={register({
            required: requiredInputMsg,
            minLength: {
              value: 10,
              message: passwordMinLengthMsg,
            },
          })}
          name="description"
          required
        />
        <Label>Short description</Label>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="description" />
        </ErrorBlock>
      </Item>
      <RadioGroup hasError={errors.type}>
        <GroupName>API Type</GroupName>
        <Item>
          <Input
            type="radio"
            value="dynamic"
            ref={register({
              required: requiredInputMsg,
            })}
            name="type"
            required
          />
          <Label>Dynamic</Label>
        </Item>
        <Item>
          <Input
            type="radio"
            value="static"
            ref={register({
              required: requiredInputMsg,
            })}
            name="type"
            required
          />
          <Label>Static</Label>
        </Item>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="type" />
        </ErrorBlock>
      </RadioGroup>
      <RadioGroup hasError={errors.visibility}>
        <GroupName>Visibility</GroupName>
        <Item>
          <Input
            type="radio"
            value="public"
            ref={register({
              required: requiredInputMsg,
            })}
            name="visibility"
            required
          />
          <Label>Public</Label>
        </Item>
        <Item>
          <Input
            type="radio"
            value="private"
            ref={register({
              required: requiredInputMsg,
            })}
            name="visibility"
            required
          />
          <Label>Private</Label>
        </Item>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="visibility" />
        </ErrorBlock>
      </RadioGroup>
      <CodeEditor />
      <Item>
        <PrimaryBtn
          large
          type="submit"
          className="button large primary"
          formNoValidate
          disabled={!formState.isValid || formState.isSubmitting || componentLoading}
        >
          Create new API!
        </PrimaryBtn>
      </Item>
    </Form>
  );
}
