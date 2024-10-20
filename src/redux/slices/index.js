import { combineReducers } from '@reduxjs/toolkit';
import general from './general.slice';
import auth from './auth.slice';

const rootReducer = combineReducers({
  general,
  auth,
});

export default rootReducer;
