import {createSlice} from '@reduxjs/toolkit';
import {getCategory, getDrink} from './actions';

export const initialState = {
  categories: [],
  drinks: [],
  currentCategory: {},
};

export const {reducer, actions} = createSlice({
  name: 'Drink',
  initialState,

  reducers: { // để gọi action ko có api
    setCurrentCategory: (state, {payload}) => {
      state.currentCategory = payload;
    },
  },

  extraReducers: { //gọi action có api
    [getCategory.fulfilled]: (state, {payload}) => {
      state.categories = payload.data.data;
    },
    [getDrink.pending]: state => {
      state.loading = true;
    },
    [getDrink.fulfilled]: (state, {payload}) => {
      state.drinks = payload.data.data;
      state.loading = false;
      console.log(state.drinks);
    },
    [getDrink.rejected]: (state, {payload}) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export default reducer;
