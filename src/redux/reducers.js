import {combineReducers} from '@reduxjs/toolkit';
import drink from './drink/slice';
import token from './token/slice';

const rootReducer = combineReducers({
  drink,
  token
});

export default rootReducer;
