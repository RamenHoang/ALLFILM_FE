import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'https://salty-dawn-54578.herokuapp.com', // xài thì sửa chỗ ni nữa
//   timeout: 30000
// })

const axiosInstance = axios.create({
  baseURL: 'http://allfilm.mediadnnb.codes:5001/api/v1',
  timeout: 10000
})

export default axiosInstance;
