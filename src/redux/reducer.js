import {combineReducers} from '@reduxjs/toolkit';
import drink from './drink/slice';

const rootReducer = combineReducers({
  drink,
});

export default rootReducer;
