import { put, call } from 'redux-saga/effects';
import api from "../api/"
import {receiveUsers, setUsersPagination} from "../actions/users";
import {buildPaginationObj} from "../../components/common/ListPaginator";

export function* requestUsersSaga(action) {
  try {
    const data = yield call(api.fetchUsers, action);
    yield put(receiveUsers(data.data));
    const usersPagination = yield buildPaginationObj(data.recordsTotal, action.offset);
    yield put(setUsersPagination(usersPagination));
  }catch (e) {
    console.log(e);
  }
}
