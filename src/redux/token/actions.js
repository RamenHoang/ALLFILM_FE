import { createAsyncThunk } from '@reduxjs/toolkit';
// import api
import { loginApi } from '../../api/login';

export const login = createAsyncThunk(
  'token/login',
  async (payload, thunkAPI) => {
    try {
      const res = await loginApi(payload);
      return {token: res.data,
               username: payload.username
                };
    } catch (error) {
      console.log("error");
      return thunkAPI.rejectWithValue();
    }
  }
);


// export const getDrink = createAsyncThunk(
//   'drink/getDrink',
//   async (payload, thunkAPI) => {
//     try {
//       const res = await getDrinkApi(payload); //getDrink có filter
//       // console.log(res);
//       return res;

//     } catch (error) {
//       return thunkAPI.rejectWithValue();
//     }
//   },
// );
