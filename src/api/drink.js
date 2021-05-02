import axios from '.';

export const getCategoryApi = () => axios.get('/category')

export const getDrinkApi = params => axios.get('/drink', {
  params, // thường là header, filter hoặc các params muốn post lên
})

// export const getHistoryById = (params, id) => axios.post(`/history/${id}`, { 
//   params,
// })