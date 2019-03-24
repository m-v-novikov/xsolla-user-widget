import { put, call, select } from 'redux-saga/effects';
import api from "../api/"

import {history} from "../../routers/AppRouter";
import {
  changeBalanceInSelectedUser,
  receiveUserById,
  receiveUsers,
  requestUsers,
  setAddOrEditError,
  setChangeBalanceError
} from "../actions/users";
import {hideModal} from "../actions/modal";

export function* editUserSaga(action) {
  try {
    const state = yield select();
    const response = yield call(api.editUser, action);
    const userFields = action.userFields;
    let newUsers;
    if(response.status === "success"){
      yield put(receiveUserById(userFields));
      newUsers = yield state.users.usersArr.map((user) => (Object.assign({}, user, (user["user_id"] === userFields["user_id"] ? userFields : {}))));
      yield put(receiveUsers(newUsers));
      yield history.push("/");
    }else{
      yield put(setAddOrEditError({
        isError: true,
        txt: response["extended_message"]["property_errors"]
      }));
    }
  }catch (e) {
    console.log(e);
  }
}

export function* createUserSaga(action) {
  try {
    const state = yield select();
    const response = yield call(api.addUser, action);
    if(response.status === "success"){
      yield put(requestUsers(state.users.offset));
      yield history.push("/");
    }else{
      yield put(setAddOrEditError({
        isError: true,
        txt: response["extended_message"]["property_errors"]
      }));
    }
  }catch (e) {
    console.log(e);
  }
}

export function* changeUserBalanceSaga(action) {
  try {
    const response = yield call(api.changeUserBalance, action);

    if(response.amount){
      yield put(changeBalanceInSelectedUser(response.amount));
      yield put(hideModal());
      yield put(setChangeBalanceError({isError: false, txt: {}}));
    }else{
      yield put(setChangeBalanceError({
        isError: true,
        txt: response["extended_message"]["property_errors"]
      }));
    }
  }catch (e) {
    console.log(e);
  }
}

export function* transactionsListSaga(action) {
  try {
    console.log(action);
    const url = "/transactions.json?datetime_from=2018-12-28T15%3A00%3A00Z&datetime_to=2018-12-28T15%3A10%3A00Z"; // returns error - no result
    const response = yield call(api.transactionsList, url);
    console.log(response);

  }catch (e) {
    console.log(e)
  }
}

