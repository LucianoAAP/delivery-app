import axios from 'axios';
import getUserInfo from '../utils/getUserInfo';

const API_URL = 'http://localhost:3001/';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = getUserInfo('token');
  const axiosConfig = config;
  if (token) {
    axiosConfig.headers.authorization = token;
  }
  return axiosConfig;
});

export default api;
