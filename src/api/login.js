import axios from '.';

export const loginApi = params => axios.post('/api/v1/auth/login', {
  ...params,
});