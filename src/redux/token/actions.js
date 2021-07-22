import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '../../api/login';

export const login = createAsyncThunk(
  'token/login',
  async (payload, thunkAPI) => {
    try {
      const res = await loginApi(payload);
      return {
        token: res.data,
        username: payload.username
      };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
