import { put, takeLatest, all, select } from 'redux-saga/effects';

import { requestUsersSaga, requestUserByIdSaga } from "./requestUsers";
import {changeUserBalanceSaga, createUserSaga, editUserSaga} from "./addOrEditUser";

export function* watchUsersRequest() {
  yield takeLatest('REQUEST_USERS', requestUsersSaga)
}

export function* watchUserByIdRequest() {
  yield takeLatest('REQUEST_USER_BY_ID', requestUserByIdSaga)
}

export function* watchUserEdit() {
  yield takeLatest("REQUEST_EDIT_USER", editUserSaga)
}

export function* watchUserCreate() {
  yield takeLatest("REQUEST_CREATE_USER", createUserSaga)
}

export function* watchChangeUserBalance() {
  yield takeLatest("REQUEST_CHANGE_USER_BALANCE", changeUserBalanceSaga)
}

export default function* rootSaga() {
  yield all([
    watchUsersRequest(),
    watchUserByIdRequest(),
    watchUserEdit(),
    watchUserCreate(),
    watchChangeUserBalance()
  ])
}
