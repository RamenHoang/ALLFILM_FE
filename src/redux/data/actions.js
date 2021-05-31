import { createAsyncThunk } from '@reduxjs/toolkit';
// import api
import { getFilmsApi, getFilmApi, getSessionApi_BaseFilm, 
  getDetailSessionApi, bookingApi, getCategoryApi
  ,getCinemaApi, getSessionApi_BaseFC, getActorApi, getDirectorApi} from '../../api/data';
import { bookTicketApi, checkoutTicketApi} from '../../api/bookTicket';
import { Alert } from 'antd';
import { HighlightFilled } from '@ant-design/icons';
import { convertLegacyProps } from 'antd/lib/button/button';

export const getFilms = createAsyncThunk(
  'data/getFilms',
  async (payload, thunkAPI) => {
    try {
      const res = await getFilmsApi();
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


export const getSession = createAsyncThunk(
  'data/getSession',
  async (payload, thunkAPI) => {
    try {
      const res = await getSessionApi_BaseFilm(payload);
      return res.data;
    } catch (error) {
      console.log({error});
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
      console.log({error});
      return thunkAPI.rejectWithValue();
    }
  }
);

export const booking = createAsyncThunk(
  'data/booking',
  async (payload, thunkAPI) => {
    try {
      const res = await bookingApi(payload);
      console.log("booking: "+ JSON.stringify(payload) )
      return res.data;
    } catch (error) {
      console.log({error});
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
      console.log({error});
      return thunkAPI.rejectWithValue();
    }
  }
);


export const bookTicket = createAsyncThunk(
  'data/bookTicket',
  async (payload, thunkAPI) => {
    try {
      const res = await bookTicketApi(payload);
      console.log("booking: "+ JSON.stringify(res.data) )
      return res;
    } catch (error) {
      console.log({error});
      return thunkAPI.rejectWithValue();
    }
  }
);



export const checkoutTicket = createAsyncThunk(
  'data/checkoutTicket',
  async (payload, thunkAPI) => {
    try {
      const res = await checkoutTicketApi(payload);
      console.log(JSON.stringify(payload))
      // alert(JSON.stringify(res.data))
      window.location=res.data.data
      return res;
    } catch (error) {
      console.log({error});
      return thunkAPI.rejectWithValue();
    }
  }
);


export const getCinema = createAsyncThunk(
  'data/getCinema',
  async (payload, thunkAPI) => {
    try {
      const res = await getCinemaApi();
      return res.data;
    } catch (error) {
      console.log({error});
      return thunkAPI.rejectWithValue();
    }
  }
);



export const getSession_BaseFC = createAsyncThunk(
  'data/getSession_BaseFC',
  async (payload, thunkAPI) => {
    try {
      const res = await getSessionApi_BaseFC(payload);
      return res.data;
    } catch (error) {
      console.log({error});
      
      console.log("failll")
      return thunkAPI.rejectWithValue();
    }
  }
);


export const getActor = createAsyncThunk(
  'data/getActor',
  async (payload, thunkAPI) => {
    try {
      const res = await getActorApi(payload);
      console.log(JSON.stringify(res.data))
      return res.data;
    } catch (error) {
      console.log({error});
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getDirector = createAsyncThunk(
  'data/getDirector',
  async (payload, thunkAPI) => {
    try {
      const res = await getDirectorApi(payload);
      console.log(JSON.stringify(res.data))
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
