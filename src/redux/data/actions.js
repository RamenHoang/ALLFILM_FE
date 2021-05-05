import { createAsyncThunk } from '@reduxjs/toolkit';
// import api
import { getFilmsApi, getFilmApi } from '../../api/data';

export const getFilms = createAsyncThunk(
  'data/getFilms',
  async (payload, thunkAPI) => {
    try {
      const res = await getFilmsApi();
      console.log("res", res);
      return res.data;
    } catch (error) {
      console.log("error");
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getFilm = createAsyncThunk(
  'data/getFilm',
  async (payload, thunkAPI) => {
    try {
      const res = await getFilmApi(payload);
      return res.data;
    } catch (error) {
      console.log({error});
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
