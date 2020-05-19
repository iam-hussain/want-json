import cookie from 'js-cookie';
import instance from './Instance';

export const handleData = (data) => {
  let msg = null;
  if (data.success || (!data.success && data.errorType === 'validation')) {
    return { ...data };
  }
  // eslint-disable-next-line no-console
  console.log(data.message);
  if (data.errorType === 'email_verify') {
    cookie.set('email_verify', data.payload.email, { expires: 1 });
  }
  if (data.errorType === 'token_required' || data.errorType === 'token_error' || data.errorType === 'invalid_token') {
    msg = 'Authorization error, Please try to login again';
  }
  if (data.errorType === 'token_not_required') {
    msg = 'Logged user is not allowed to access this';
  }
  return { ...data, message: msg || data.message || 'Unexpected error from server' };
};

export const getMethod = async (URL, pushToken = false) => {
  const returnData = await instance.get(URL, { pushToken });
  return handleData(returnData);
};

export const postMethod = async (URL, body, pushToken = false) => {
  const returnData = await instance.post(URL, body, { pushToken });
  return handleData(returnData);
};

export const putMethod = async (URL, body, pushToken = false) => {
  const returnData = await instance.put(URL, body, { pushToken });
  return handleData(returnData);
};

export const deleteMethod = async (URL, pushToken = false) => {
  const returnData = await instance.delete(URL, { pushToken });
  return handleData(returnData);
};
