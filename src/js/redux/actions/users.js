export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const REQUEST_CREATE_USER = "REQUEST_CREATE_USER";
export const REQUEST_EDIT_USER = "REQUEST_EDIT_USER";

export const SET_USERS_PAGINATION = "SET_USERS_PAGINATION";

export const requestUsers = (offset) => ({type: REQUEST_USERS, offset});
export const receiveUsers = (usersArr) => ({type: RECEIVE_USERS, usersArr});

export const requestCreateUser = (user) => ({type: REQUEST_CREATE_USER, user});
export const requestEditUser = (id, userFields) => ({type: REQUEST_EDIT_USER, id, userFields});

export const setUsersPagination = (usersPagination) => ({type: SET_USERS_PAGINATION, usersPagination});