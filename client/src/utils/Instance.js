/* eslint-disable no-prototype-builtins */
/* eslint-disable no-console */
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  // timeout: 1000,
  responseType: 'json',
  headers: { AuthSecet: process.env.AUTH_SECRET },
});


const requestHandler = (request) => {
  if (request.hasOwnProperty('pushToken') && request.pushToken) {
    request.headers.Authorization = `Bearer ${request.pushToken}`;
  }
  return request;
};


const errorHandler = (error) => {
  console.log(error);
  return {
    success: false,
    msg: 'Unexpected error has occurred',
    status: 500,
    errorType: 'server',
    payload: {},
  };
};

instance.interceptors.request.use(
  (config) => requestHandler(config),
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response.data,
  (error) => errorHandler(error),
);


export default instance;
