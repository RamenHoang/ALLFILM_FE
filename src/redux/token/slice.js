import {createSlice} from '@reduxjs/toolkit';
import {login} from './actions';

export const initialState = {
  token: {},
  loading: false
};

export const {reducer, actions} = createSlice({
  name: 'Login',
  initialState,

  reducers: { // để gọi action ko có api
    // setCurrentCategory: (state, {payload}) => {
    //   state.currentCategory = payload;
    // },
  },

  extraReducers: { //gọi action có api
    [login.fulfilled]: (state, {payload}) => {
      state.token = payload;
      console.log(payload);
      state.loading = false;
    },
    [login.pending]: state => {
      state.loading = true;
    },
    [login.rejected]: (state, {payload}) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export default reducer;
