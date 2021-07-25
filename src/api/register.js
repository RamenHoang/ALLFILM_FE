import axios from '.';

export const registerApi = params => axios.post('/auth/register',
  params,
);
