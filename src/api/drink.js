import axios from '.';

export const getCategoryApi = () => axios.get('/food-drink')

// export const getDrinkApi = params => axios.get('/drink', {
//   params, // thường là header, filter hoặc các params muốn post lên
// })