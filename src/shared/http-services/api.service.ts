import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ErrorMessage } from '@/shared/interfaces/error-message';
import Secure from '@/shared/utils/secure-ls';
import Store from '@/stores/index';
import router from '@/routers/index';

export const HandlingError = (error: AxiosError): any => {
  let messageErr: ErrorMessage;
  if (error.response) {
    if (error.response.status === 401) {
      Store.dispatch('AuthModule/saveToken', '', { root: true });
      Secure.remove(`${process.env.VUE_APP_LOCALSTORAGE_NAME}`);
      localStorage.removeItem(`${process.env.VUE_APP_LOCALSTORAGE_NAME}`);
      router.push({ name: 'loginScreen_T-8' });
    }

    if (error.response.status === 404) {
      router.push({ name: 'FourOhFour' });
    }

    messageErr = error.response.data;
  } else {
    messageErr = { messsage: error.message };
  }
  return messageErr;
};

axios.defaults.baseURL = process.env.VUE_APP_API_PATH;
axios.defaults.headers = {
  'Content-Type': 'application/json',
  common: {
    Authorization: 'AUTH_TOKEN_FROM_INSTANCE',
  },
};

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (errors: AxiosError) => {
    return Promise.reject(HandlingError(errors));
  },
);

axios.interceptors.response.use(
  (res: AxiosResponse<any>) => {
    return res.data;
  },
  (errors: AxiosError) => {
    return Promise.reject(HandlingError(errors));
  },
);

const makeRequest = (params: Object = {}): AxiosRequestConfig => {
  return {
    params: params,
  };
};

export default {
  setAuthorizationToken(token: string) {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : 'AUTH_TOKEN_FROM_INSTANCE';
  },

  setAcceptLanguage(lang: string) {
    axios.defaults.headers['Accept-Language'] = lang;
  },

  get(path: string, params = {}): Promise<any> {
    const request = makeRequest(params);
    return axios.get(path, request);
  },
  post(path: string, data = {}, params = {}): Promise<any> {
    const request = makeRequest(params);
    return axios.post(path, data, request);
  },
  put(path: string, data = {}, params = {}): Promise<any> {
    const request = makeRequest(params);
    return axios.put(path, data, request);
  },
  delete(path: string, params = {}): Promise<any> {
    const request = makeRequest(params);
    return axios.delete(path, request);
  },
  instant(config: AxiosRequestConfig = {}): AxiosInstance {
    const instant = axios.create(config);

    instant.interceptors.request.use(
      (config: AxiosRequestConfig) => config,
      (errors: AxiosError) => Promise.reject(HandlingError(errors)),
    );

    instant.interceptors.response.use(
      (res: AxiosResponse<any>) => {
        return res.data;
      },
      (errors: AxiosError) => {
        return Promise.reject(HandlingError(errors));
      },
    );

    return instant;
  },
};
