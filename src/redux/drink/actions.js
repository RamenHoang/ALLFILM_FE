import {createAsyncThunk} from '@reduxjs/toolkit';
// import api
import {getCategoryApi} from '../../api/drink';

export const getCategory = createAsyncThunk(
  'drink/getCategory',
  async (payload, thunkAPI) => {
    try {
      const res = await getCategoryApi();
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);