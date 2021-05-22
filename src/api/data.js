import axios from '.';

export const getFilmsApi = params => axios.get('/film', {
  params: {limit: 9},
});

export const getFilmApi = params => axios.get(`/film/${params}`);

export const getSessionApi_BaseFilm = params => axios.get(`/session/?filmId=${params}`);

export const getSessionApi_BaseFC = params => axios.get(`/session`, {params});


export const getDetailSessionApi = params => axios.get(`/session/${params}`);


export const bookingApi = params => axios.post(`/booking`,{
  headers:{
    'Authorization':`Bearer ${params.token}`
  },
  data: params.data
});

export const getCategoryApi = params => axios.get('/food-drink');


export const getCinemaApi = params => axios.get(`/cinema`);