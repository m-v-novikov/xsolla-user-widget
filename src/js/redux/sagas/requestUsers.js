import { put, call } from 'redux-saga/effects';
import api from "../api/"
import {receiveUserById, receiveUsers, setUsersPagination, setUsersProps} from "../actions/users";
import {buildPaginationObj} from "../../components/common/ListPaginator";

export function* requestUsersSaga(action) {
  try {
    const data = yield call(api.fetchUsers, action);
    yield put(receiveUsers(data.data));
    const usersPagination = yield buildPaginationObj(data.recordsTotal, action.offset);
    yield put(setUsersPagination(usersPagination));
    yield put(setUsersProps(action.offset))
  }catch (e) {
    console.log(e);
  }
}

export function* requestUserByIdSaga(action) {
  try {
    const selectedUser = yield call(api.fetchUserById, action.userId);
    yield put(receiveUserById(selectedUser))
  }catch (e) {
    console.log(e)
  }
}
