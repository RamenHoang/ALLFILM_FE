import { combineReducers } from '@reduxjs/toolkit';
import token from './token/slice';
import data from './data/slice';

const rootReducer = combineReducers({
  token,
  data
});

export default rootReducer;
