import axios from 'axios';
const http = axios.create({
  baseURL: 'http://blog.com/api/',
  timeout: 10000
});
http.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  });
http.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default http;