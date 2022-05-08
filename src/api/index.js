import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://209.97.168.57:5001/api/v1',
  timeout: 10000
})

export default axiosInstance;
