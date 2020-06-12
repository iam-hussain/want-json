/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import { useForm, ErrorMessage } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useAlert } from 'react-alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import {
  Item, Label, Input, ErrorBlock, Form, RadioGroup,
  GroupName, TagGroup, TagItem, TagInputGroup, InputButton, URLShow,
} from '../Basic/Form';
import { PrimaryBtn } from '../Basic/Button/Button';
import {
  requiredInputMsg,
  passwordMinLengthMsg,
} from '../../utils/Message';
import CodeEditor from '../Editor';
import { postMethod, putMethod } from '../../utils/Integration';
import { logEvent } from '../../utils/Analytics';

export default function APIForm({ data, editMode }) {
  const [componentLoading, setComponentLoading] = useState(true);
  const [keyWords, setKeyWords] = useState([]);
  const router = useRouter();
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
  const alert = useAlert();

  const [url, setURL] = useState('');
  const [code, setCode] = useState('');
  const [codeString, setCodeString] = useState('');
  const [codeError, setCodeError] = useState({ status: true, msg: '' });
  const keyWordsInput = watch('keywords');
  const titleWatch = watch('title');

  useEffect(() => {
    if (titleWatch) {
      const urlConvert = titleWatch.toLowerCase().replace(/[^a-z0-9]+/gi, '_');
      setURL(`URL : ${process.env.PAYLOAD_URL}${urlConvert}`);
    } else {
      setURL('');
    }
  }, [titleWatch]);

  const setValues = async () => {
    await setCodeString(JSON.stringify(data.data, null, 4));
    await setCode(data.data);
    await setValue([
      { title: data.title },
      { description: data.description },
      { type: data.type },
      { visibility: data.visibility },
      { hasAuth: data.hasAuth ? 'yes' : 'no' },
    ]);
    await setKeyWords(data.keywords);
    await triggerValidation('title');
    await triggerValidation('description');
    await triggerValidation('type');
    await triggerValidation('visibility');
    await triggerValidation('keywords');
  };

  useEffect(() => {
    if (editMode) {
      setValues();
    }
    setComponentLoading(false);
  }, []);

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

  const apiCall = async (_payloadData) => {
    const token = cookie.get('token');
    if (editMode) {
      const updatedData = await putMethod(`payload/${data.id}`, {
        ..._payloadData, keywords: keyWords, data: code, hasAuth: _payloadData.hasAuth === 'yes',
      }, token);
      return updatedData;
    }
    const createdData = await postMethod('payload', {
      ..._payloadData, keywords: keyWords, data: code, hasAuth: _payloadData.hasAuth === 'yes',
    }, token);
    return createdData;
  };

  const onSubmit = async (payloadData) => {
    const responseData = await apiCall(payloadData);
    if (responseData.success) {
      if (!editMode) {
        setKeyWords([]);
        setCodeString('');
        reset();
        router.push('/dashboard/payload');
      }
      logEvent('Payload', responseData.message);
      alert.success(responseData.message);
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
      alert.error(responseData.message);
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
        <URLShow hasError={errors.title}>{url}</URLShow>
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
        <TagInputGroup hasError={errors.keywords}>
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
          <InputButton tertiary type="button" onClick={() => handleKeyPush()}><FontAwesomeIcon icon={faPlusSquare} /></InputButton>
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
        </TagInputGroup>

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
      <RadioGroup hasError={errors.hasAuth}>
        <GroupName>Header Authentication</GroupName>
        <Item>
          <Input
            type="radio"
            value="yes"
            ref={register({
              required: requiredInputMsg,
            })}
            name="hasAuth"
            required
          />
          <Label>Yes</Label>
        </Item>
        <Item>
          <Input
            type="radio"
            value="no"
            ref={register({
              required: requiredInputMsg,
            })}
            name="hasAuth"
            required
          />
          <Label>No</Label>
        </Item>
        <ErrorBlock>
          <ErrorMessage errors={errors} name="hasAuth" />
        </ErrorBlock>
      </RadioGroup>
      <CodeEditor
        setCode={setCode}
        setCodeError={setCodeError}
        codeError={codeError}
        codeString={codeString}
        setCodeString={setCodeString}
        type={watch('type')}
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
          {`${editMode ? 'Edit Your' : 'Create new'} Payload!`}
        </PrimaryBtn>
      </Item>
    </Form>
  );
}
