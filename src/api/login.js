import axios from '.';

export const loginApi = params => axios.post('/api/v1/auth/login', {
  ...params, // thường là header, filter hoặc các params muốn post lên
});
// .then(function (response) {
//     alert(JSON.stringify(response));
//     return response;
//   }).catch((error) => {
//       alert(JSON.stringify(error));
//   })

// export const getHistoryById = (params, id) => axios.post(`/history/${id}`, { 
//   params,
// })