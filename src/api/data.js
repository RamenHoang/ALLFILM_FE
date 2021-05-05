import axios from '.';

export const getFilmsApi = params => axios.get('/api/v1/film', {
  params: {limit: 9},
});

export const getFilmApi = params => axios.get(`/api/v1/film/${params}`);