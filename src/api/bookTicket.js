import axios from '.';

export const bookTicketApi = params => axios.post('/booking', params.data,
{headers: params.headers});