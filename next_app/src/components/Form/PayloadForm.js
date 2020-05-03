import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm, ErrorMessage } from "react-hook-form";
import { required_input_msg, email_invalid_msg } from "../../msg";
import Editor from "../Editor";
import axios from "../../lib/axios";

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
  } = useForm({ mode: "onChange" });
  const router = useRouter();

  useEffect(() => {
    setComponentLoading(false);
  }, []);

  const onSubmit = async (data) => {
    let response = await axios("email_verify", "post", data);
    if (response.success) {
      localStorage.removeItem("email_verify");
      localStorage.setItem("token", response.payload.token);
      reset();
      router.push("/");
    } else {
      response.message.map((m) => {
        setError(m.param, "invalid", m.msg);
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
            <input type="checkbox" required />
            <label>Private Store</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-item">
          <div className="form-input">
            <input
              type="text"
              value="Istanbul, Adana, Adiyaman, Afyon, Agri, Aksaray, Ankara"
              data-role="tagsinput"
            />
            <label>Tag</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-item">
          <div className="form-input">
            <input
              type="radio"
              name="options"
              id="option1"
              autocomplete="off"
              checked
            />
            <label>Tag</label>
          </div>

          <div className="form-input">
            <input
              type="radio"
              name="options"
              id="option1"
              autocomplete="off"
              checked
            />
            <label>Tag</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-item">
          <div className="form-input">
            <input type="text" id="keywords" name="keywords" required />
            <label>Keywords</label>
          </div>
          <div className="tags-container row">
            <div className="tags-box col-auto">
              <div className="tags">Sweet Street</div>
              <div className="tags-close">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-item">
          <div className="form-input code-input">
            
      <Editor />
          </div>
          </div> </div>
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
