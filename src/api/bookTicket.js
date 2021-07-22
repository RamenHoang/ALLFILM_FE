import axios from '.';

export const bookTicketApi = params => axios.post('/booking', params.data,
    { headers: params.headers });


export const checkoutTicketApi = params => axios.post(`/booking/checkout/${params.id}`, null,
    { headers: params.headers });