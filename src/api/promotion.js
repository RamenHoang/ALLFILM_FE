import axios from '.';

export const getPromotionsApi = () => axios.get(`/promotion`);

export const getPromotionApi = params => axios.get(`/promotion/${params}`);

export const postPromotionApi = params => axios.post(`/promotion`, params);