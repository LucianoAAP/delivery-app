import axios from 'axios';

const API_URL = 'http://localhost:3001/';

const getAuth = () => {
  const auth = JSON.parse(localStorage.getItem('user'));
  return auth.token || {};
};

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = getAuth();
  const axiosConfig = config;
  if (token) {
    axiosConfig.headers.authorization = token;
  }
  return axiosConfig;
});

export default api;
