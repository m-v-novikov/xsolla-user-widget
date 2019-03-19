import { combineReducers } from 'redux';
import app from './app';
import users from "./users";

const rootReducer = combineReducers({
  app,
  users
});

export default rootReducer;