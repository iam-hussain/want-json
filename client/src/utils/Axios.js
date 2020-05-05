import instance from './Instance';

export const handleData = async (data) => {
  if (data.success || data.errorType === 'validation') {
    return data;
  }
  return data;
};

export const getMethod = async (URL, pushToken = false) => {
  const returnData = await instance.get(URL, { pushToken });
  await handleData(returnData);
  return returnData;
};

export const postMethod = async (URL, body, pushToken = false) => {
  const returnData = await instance.post(URL, body, { pushToken });
  await handleData(returnData);
  return returnData;
};

export const putMethod = async (URL, body, pushToken = false) => {
  const returnData = await instance.put(URL, body, { pushToken });
  await handleData(returnData);
  return returnData;
};

export const deleteMethod = async (URL, body, pushToken = false) => {
  const returnData = await instance.delete(URL, body, { pushToken });
  await handleData(returnData);
  return returnData;
};
