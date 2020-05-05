import instance from './Instance';

export const handleData = (data) => {
  let alert = {};
  if (data.success || (!data.success && data.errorType === 'validation')) {
    return { ...data, alert };
  }
  alert = {
    title: 'Oops',
    content: data.msg,
    closeValue: 'close',
    buttons: [
      {
        id: 1,
        title: 'Close',
        type: 'primary',
        value: 'close',
        icon: 'fas fa-user-check',
        action: false,
        data: {},
      },
    ],
  };
  if (data.errorType === 'token_required') {
    alert.buttons[0] = {
      ...alert.buttons[0], action: true, data: { url: '/login', type: 'redirect' },
    };
  }
  if (data.errorType === 'token_not_required') {
    alert.buttons[0] = {
      ...alert.buttons[0], action: true, data: { url: '/', type: 'redirect' },
    };
  }
  if (data.errorType === 'token_error' && data.errorType === 'invalid_token') {
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
