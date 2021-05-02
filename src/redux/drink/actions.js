import {createAsyncThunk} from '@reduxjs/toolkit';
// import api
import {getCategoryApi, getDrinkApi} from '../../api/drink';

export const getCategory = createAsyncThunk(
  'drink/getCategory',
  async (payload, thunkAPI) => {
    try {
      const {data} = await getCategoryApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getDrink = createAsyncThunk(
  'drink/getDrink',
  async (payload, thunkAPI) => {
    try {
      const res = await getDrinkApi(payload); //getDrink có filter
      // console.log(res);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);
