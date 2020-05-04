import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Editor from '../Editor';
import axios from '../../utils/axios';

export default function EmailVerify(props) {
  const [componentLoading, setComponentLoading] = useState(true);
  const {
    register,
    handleSubmit,
    errors,
    watch,
    setError,
    reset,
    formState,
    setValue,
    triggerValidation,
  } = useForm({ mode: 'onChange' });
  const router = useRouter();

  useEffect(() => {
    setComponentLoading(false);
  }, []);

  const onSubmit = async (data) => {
    const response = await axios('email_verify', 'post', data);
    if (response.success) {
      localStorage.removeItem('email_verify');
      localStorage.setItem('token', response.payload.token);
      reset();
      router.push('/');
    } else {
      response.message.map((m) => {
        setError(m.param, 'invalid', m.msg);
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="form-item">
          <div className="form-input">
            <input type="text" name="title" required />
            <label>Title</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-item">
          <div className="form-input">
            <input type="text" id="discribe" name="discribe" required />
            <label>Short discribe</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-item">
          <div className="form-input">
            <input type="text" id="keywords" name="keywords" required />
            <label>Keywords</label>
          </div>
          <div className="dashboard-tags-container">
            <div className="tags-box">
              <div className="tags">Sweet Street</div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-item">
          <div className="input-group">
            <span className="input-text">Visibility</span>
            <div className="form-input">
              <input
                type="radio"
                name="visibility"
                autoComplete="off"
                checked
              />
              <label>Public</label>
            </div>

            <div className="form-input">
              <input
                type="radio"
                name="visibility"
                autoComplete="off"
              />
              <label>Private</label>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-item">
          <div className="input-group">
            <span className="input-text">Type</span>
            <div className="form-input">
              <input
                type="radio"
                name="type"
                autoComplete="off"
              />
              <label>Dynamic</label>
            </div>

            <div className="form-input">
              <input
                type="radio"
                name="type"
                autoComplete="off"
              />
              <label>Static</label>
            </div>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-item">
          <div className="form-input code-input">
            <Editor />
          </div>
        </div>
        {' '}
      </div>
      <div className="form-row">
        <div className="form-item">
          <button
            type="submit"
            className="button large primary"
            formNoValidate
            disabled={
              !formState.isValid || formState.isSubmitting || componentLoading
            }
          >
            Verify
          </button>
        </div>
      </div>
    </form>
  );
}
