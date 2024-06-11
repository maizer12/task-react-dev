import axios from 'axios';

export const baseURL = 'https://my-mock-api-roan.vercel.app';

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
