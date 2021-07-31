import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  getFilmsApi, getFilmApi, getSessionApi_BaseFilm,
  getDetailSessionApi, bookingApi, getCategoryApi
  , getCinemaApi, getSessionApi_BaseFC, getActorApi, getDirectorApi,
  getUserInfoApi, editUserInfoApi, getUserBookingInfoApi
} from '../../api/data'
import { bookTicketApi, checkoutTicketApi } from '../../api/bookTicket'
import { ratingApi } from '../../api/rating'

export const getFilms = createAsyncThunk(
  'data/getFilms',
  async (payload, thunkAPI) => {
    try {
      const res = await getFilmsApi()
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue()
    }
  }
)

export const getFilm = createAsyncThunk(
  'data/getFilm',
  async (payload, thunkAPI) => {
    try {
      const res = await getFilmApi(payload)
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);


export const getSession = createAsyncThunk(
  'data/getSession',
  async (payload, thunkAPI) => {
    try {
      const res = await getSessionApi_BaseFilm(payload);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);


export const getDetailSession = createAsyncThunk(
  'data/getDetailSession',
  async (payload, thunkAPI) => {
    try {
      const res = await getDetailSessionApi(payload);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const booking = createAsyncThunk(
  'data/booking',
  async (payload, thunkAPI) => {
    try {
      const res = await bookingApi(payload);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getCategory = createAsyncThunk(
  'data/getCategory',
  async (payload, thunkAPI) => {
    try {
      const res = await getCategoryApi(payload);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);


export const bookTicket = createAsyncThunk(
  'data/bookTicket',
  async (payload, thunkAPI) => {
    try {
      const res = await bookTicketApi(payload);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const checkoutTicket = createAsyncThunk(
  'data/checkoutTicket',
  async (payload, thunkAPI) => {
    try {
      const res = await checkoutTicketApi(payload);
      window.location = res.data.data
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getCinema = createAsyncThunk(
  'data/getCinema',
  async (payload, thunkAPI) => {
    try {
      const res = await getCinemaApi();
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getSession_BaseFC = createAsyncThunk(
  'data/getSession_BaseFC',
  async (payload, thunkAPI) => {
    try {
      const res = await getSessionApi_BaseFC(payload);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getActor = createAsyncThunk(
  'data/getActor',
  async (payload, thunkAPI) => {
    try {
      const res = await getActorApi(payload);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getDirector = createAsyncThunk(
  'data/getDirector',
  async (payload, thunkAPI) => {
    try {
      const res = await getDirectorApi(payload);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getUserInfo = createAsyncThunk(
  'data/getUserInfo',
  async (payload, thunkAPI) => {
    try {
      const res = await getUserInfoApi(payload);
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const editUserInfo = createAsyncThunk(
  'data/editUserInfo',
  async (payload, thunkAPI) => {
    try {
      const res = await editUserInfoApi(payload) 
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error) 
    }
  }
) 

export const getUserBookingInfo = createAsyncThunk(
  'data/getUserBookingInfo',
  async (payload, thunkAPI) => {
    try {
      const res = await getUserBookingInfoApi(payload) 
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error) 
    }
  }
) 

export const postRating = createAsyncThunk(
  'data/postRating',
  async (payload, thunkAPI) => {
    try {
      const res = await ratingApi(payload)
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)