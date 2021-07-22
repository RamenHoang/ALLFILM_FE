import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://allfilm.mediadnnb.codes:5001/api/v1',
  timeout: 10000
})

export default axiosInstance;
