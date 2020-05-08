import cookie from 'js-cookie';
import instance from './Instance';

export const handleData = (data) => {
  let alert = {};
  if (data.success || (!data.success && data.errorType === 'validation')) {
    return { ...data, alert };
  }
  alert = {
    title: 'Oops',
    content: data.message,
    defaultClose: {
      value: 'close',
      action: false,
      data: {},
    },
    buttons: [
      {
        title: 'Close',
        type: 'primary',
        value: 'close',
        icon: 'fas fa-user-check',
        action: false,
        data: {},
      },
    ],
  };
  if (data.errorType === 'email_verify') {
    cookie.set('email_verify', data.payload.email, { expires: 1 });
    const updateData = { value: 'close', action: true, data: { url: '/email_verify', type: 'redirect' } };
    alert.defaultClose = updateData;
    alert.buttons[0] = {
      ...alert.buttons[0], title: 'Verify', ...updateData,
    };
  }
  if (data.errorType === 'token_required') {
    const updateData = { value: 'close', action: true, data: { url: '/login', type: 'redirect' } };
    alert.defaultClose = updateData;
    alert.buttons[0] = {
      ...alert.buttons[0], action: true, data: { url: '/login', type: 'redirect' },
    };
  }
  if (data.errorType === 'token_not_required') {
    const updateData = { value: 'close', action: true, data: { url: '/', type: 'redirect' } };
    alert.defaultClose = updateData;
    alert.buttons[0] = {
      ...alert.buttons[0], action: true, data: { url: '/', type: 'redirect' },
    };
  }
  if (data.errorType === 'token_error' && data.errorType === 'invalid_token') {
    const updateData = { value: 'close', action: true, data: { url: '/login', type: 'redirect' } };
    alert.defaultClose = updateData;
    alert.buttons[0] = {
      ...alert.buttons[0], action: true, data: { url: '/login', type: 'logout' },
    };
  }
  return { ...data, alert };
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

export const deleteMethod = async (URL, body, pushToken = false) => {
  const returnData = await instance.delete(URL, body, { pushToken });
  return handleData(returnData);
};
