import axios from '.';

export const loginApi = params => axios.post('/auth/login',
  params,
);
