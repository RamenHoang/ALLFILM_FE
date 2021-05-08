import {createSlice} from '@reduxjs/toolkit';
import {getCategory} from './actions';

export const initialState = {
  categories: [],
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
      state.categories = payload.data;
    },
  },
});

export default reducer;
