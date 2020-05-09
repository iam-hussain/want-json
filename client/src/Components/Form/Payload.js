/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useForm, ErrorMessage } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import {
  Item, Label, Input, ErrorBlock, Form, RadioGroup,
  GroupName, TagGroup, TagItem, InputGroup, InputButton,
} from '../Basic/Form';
import { PrimaryBtn } from '../Basic/Button/Button';
import {
  requiredInputMsg,
  passwordMinLengthMsg,
} from '../../utils/Message';
import CodeEditor from '../Editor';
import { postMethod } from '../../utils/Integration';
import { openAlert } from '../../Redux/Actions/commonActions';

export default function APIForm() {
  const [componentLoading, setComponentLoading] = useState(true);
  const [keyWords, setKeyWords] = useState([]);
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
  const dispatch = useDispatch();

  const [code, setCode] = useState('');
  const [codeString, setCodeString] = useState('');
  const [codeError, setCodeError] = useState({ status: true, msg: '' });
  const keyWordsInput = watch('keywords');

  const handleKeyPush = async () => {
    if (keyWordsInput.trim() !== '') {
      await setKeyWords([...new Set([...keyWords, keyWordsInput])]);
      await triggerValidation('keywords');
      setValue('keywords', '');
    }
  };

  const keyPressKeyPush = (e) => {
    if (e.keyCode === 13) {
      handleKeyPush();
    }
  };

  const handleKeyRemove = async (index) => {
    await setKeyWords(keyWords.filter((k, i) => i !== index));
    await triggerValidation('keywords');
  };

  useEffect(() => {
    setComponentLoading(false);
  }, []);

  const onSubmit = async (data) => {
    const token = cookie.get('token');
    const responseData = await postMethod('payload', { ...data, keywords: keyWords, data: code }, token);
    if (responseData.success) {
      setKeyWords([]);
      setCodeString('');
      reset();
      dispatch(
        openAlert({
          title: 'Created',
          content: 'New Payload created successfully',
          buttons: [
            {
              title: 'Close',
              value: 'reset_password',
              type: 'primary',
              action: false,
              data: {},
            },
          ],
        }),
      );
    } else if (responseData.errorType === 'validation') {
      responseData.message.map((m) => {
        if (m.param === 'data') {
          setCodeError({ status: true, msg: m.msg });
        } else {
          setError(m.param, 'invalid', m.msg);
        }
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
        <Label>Payload Title</Label>
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
      <Item>
        <InputGroup hasError={errors.keywords}>
          <Input
            hasError={errors.keywords}
            type="text"
            ref={register({
              validate: () => (keyWords.length > 0 && keyWords.length <= 6) || 'Provide a valid keywords with min 1 and max 6 words',
            })}
            name="keywords"
            required
            onKeyDown={(e) => keyPressKeyPush(e)}
          />
          <Label>Keywords</Label>
          <InputButton type="button" onClick={() => handleKeyPush()}><FontAwesomeIcon icon={faPlusSquare} /></InputButton>
        </InputGroup>
        <TagGroup>
          {keyWords.map((a, i) => (
            <TagItem key={`key_${i}`}>
              {a}
              <span onClick={() => handleKeyRemove(i)}>x</span>
            </TagItem>
          ))}
          <ErrorBlock>
            <ErrorMessage errors={errors} name="keywords" />
          </ErrorBlock>
        </TagGroup>
      </Item>
      <RadioGroup hasError={errors.type}>
        <GroupName>Payload Type</GroupName>
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
      <CodeEditor
        setCode={setCode}
        setCodeError={setCodeError}
        codeError={codeError}
        codeString={codeString}
        setCodeString={setCodeString}
      />
      <Item>
        <PrimaryBtn
          large
          type="submit"
          className="button large primary"
          formNoValidate
          disabled={
            !formState.isValid || formState.isSubmitting
            || componentLoading || codeError.status
          }
        >
          Create new Payload!
        </PrimaryBtn>
      </Item>
    </Form>
  );
}
