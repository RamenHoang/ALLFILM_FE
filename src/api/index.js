import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: process.env.REACT_APP_API_REQUEST_TIMEOUT
});

export default axiosInstance;
