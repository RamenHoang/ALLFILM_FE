import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://salty-dawn-54578.herokuapp.com', // xài thì sửa chỗ ni nữa
  timeout: 30000
})


export default axiosInstance;
