import {combineReducers} from '@reduxjs/toolkit';
import drink from './drink/slice';
import token from './token/slice';
import data from './data/slice';

const rootReducer = combineReducers({
  drink,
  token,
  data
});

export default rootReducer;
