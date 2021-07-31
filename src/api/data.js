import axios from '.';

export const getFilmsApi = params => axios.get('/film', {
  params: { limit: 12 },
});

export const getFilmApi = params => axios.get(`/film/${params}`);

export const searchFilmApi = params => axios.get(`/film?q=${params}&limit=10&offset=1`);

export const getSessionApi_BaseFilm = params => axios.get(`/session/?filmId=${params}`);

export const getSessionApi_BaseFC = params => axios.get(`/session`, { params });

export const getDetailSessionApi = params => axios.get(`/session/${params}`);

export const bookingApi = params => axios.post(`/booking`, {
  headers: {
    'Authorization': `Bearer ${params.token}`
  },
  data: params.data
});

export const getCategoryApi = params => axios.get('/food-drink');

export const getCinemaApi = params => axios.get(`/cinema`);

export const getActorApi = params => axios.get(`/actor/${params}`);

export const getDirectorApi = params => axios.get(`/director/${params}`);

export const getUserInfoApi = params => axios.get(`/user/profile`,
  params);

export const editUserInfoApi = params => axios.put(`/user/profile`, params.data,
  { headers: params.headers });

export const getUserBookingInfoApi = params => axios.get(`user/profile/booking?fromDate=${params.data.fromDate}&toDate=${params.data.toDate}`,
  { headers: params.headers });
