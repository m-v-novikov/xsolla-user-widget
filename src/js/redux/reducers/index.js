import { combineReducers } from 'redux';
import app from './app';
import users from "./users";
import modal from "./modal";

const rootReducer = combineReducers({
  app,
  users,
  modal
});

export default rootReducer;