import { createSlice } from '@reduxjs/toolkit';
import { getCategory } from './actions';

export const initialState = {
  categories: [],
  currentCategory: {},
};

export const { reducer, actions } = createSlice({
  name: 'Drink',
  initialState,

  reducers: {
    setCurrentCategory: (state, { payload }) => {
      state.currentCategory = payload;
    },
  },

  extraReducers: {
    [getCategory.fulfilled]: (state, { payload }) => {
      state.categories = payload.data;
    },
  },
});

export default reducer;
