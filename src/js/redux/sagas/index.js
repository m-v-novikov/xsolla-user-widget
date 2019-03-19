import { put, takeLatest, all, select } from 'redux-saga/effects';

import { requestUsersSaga } from "./requestUsers";

export function* watchUsersRequest() {
  yield takeLatest('REQUEST_USERS', requestUsersSaga)
}

export default function* rootSaga() {
  yield all([
    watchUsersRequest(),
  ])
}
