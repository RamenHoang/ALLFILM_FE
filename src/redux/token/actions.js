import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '../../api/login';
import { registerApi } from '../../api/register';

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
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  'token/register',
  async (payload, thunkAPI) => {
    try {
      console.log(JSON.stringify(payload))
      const res = await registerApi(payload);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);