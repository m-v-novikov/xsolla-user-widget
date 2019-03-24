export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const REQUEST_USER_BY_ID = "REQUEST_USER_BY_ID";
export const RECEIVE_USER_BY_ID = "RECEIVE_USER_BY_ID";

export const REQUEST_CREATE_USER = "REQUEST_CREATE_USER";
export const REQUEST_EDIT_USER = "REQUEST_EDIT_USER";

export const REQUEST_CHANGE_USER_BALANCE = "REQUEST_CHANGE_USER_BALANCE";
export const CHANGE_BALANCE_IN_SELECTED_USER = "CHANGE_BALANCE_IN_SELECTED_USER";
export const SET_CHANGE_BALANCE_ERROR = "SET_CHANGE_BALANCE_ERROR";
export const SET_ADD_OR_EDIT_ERROR = "SET_ADD_OR_EDIT_ERROR";

export const SET_USERS_PAGINATION = "SET_USERS_PAGINATION";
export const SET_USERS_PROPS = "SET_USERS_PROPS";
export const SET_LOADER = "SET_LOADER";

export const requestUsers = (offset) => ({type: REQUEST_USERS, offset});
export const receiveUsers = (usersArr) => ({type: RECEIVE_USERS, usersArr});

export const requestUserById = (userId) => ({type: REQUEST_USER_BY_ID, userId});
export const receiveUserById = (selectedUser) => ({type: RECEIVE_USER_BY_ID, selectedUser});

export const requestChangeUserBalance = (userFields) => ({type: REQUEST_CHANGE_USER_BALANCE, userFields});
export const changeBalanceInSelectedUser = (balance) => ({type: CHANGE_BALANCE_IN_SELECTED_USER, balance});
export const setChangeBalanceError = (changeBalanceError) => ({type: SET_CHANGE_BALANCE_ERROR, changeBalanceError});
export const setAddOrEditError = (addOrEditError) => ({type: SET_ADD_OR_EDIT_ERROR, addOrEditError});

export const requestCreateUser = (userFields) => ({type: REQUEST_CREATE_USER, userFields});
export const requestEditUser = (userFields) => ({type: REQUEST_EDIT_USER, userFields});

export const setUsersPagination = (usersPagination) => ({type: SET_USERS_PAGINATION, usersPagination});

export const setUsersProps = (offset) => ({type: SET_USERS_PROPS, offset});