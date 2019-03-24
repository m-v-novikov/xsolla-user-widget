import {
  RECEIVE_USERS,
  RECEIVE_USER_BY_ID,
  SET_USERS_PAGINATION,
  SET_ADD_OR_EDIT_ERROR,
  SET_CHANGE_BALANCE_ERROR,
  CHANGE_BALANCE_IN_SELECTED_USER, SET_LOADER, SET_USERS_PROPS
} from "../../../redux/actions/users";
import usersReducer, { defState as users } from "../../../redux/reducers/users";
import { usersArrExamples, usersPaginationExample } from "../../../__mocks__/users";

test("should receive users arr and pass it to state, state property.", () => {
  const usersArr = [usersArrExamples[0], usersArrExamples[1], usersArrExamples[2]],
    action = {
      type: RECEIVE_USERS,
      usersArr
    };

  const state = usersReducer(users, action);
  expect(state).toEqual({
    ...users,
    usersArr,
  });
});

test("should receive user, that was get by id, state property.", () => {
  const selectedUser = usersArrExamples[0],
    selectedUserId = selectedUser["user_id"],
    action = {
      type: RECEIVE_USER_BY_ID,
      selectedUserId,
      selectedUser
    };

  const state = usersReducer(users, action);
  expect(state).toEqual({
    ...users,
    selectedUserId,
    selectedUser
  });
});

test("should set pagination, state property.", () => {
  const usersPagination = usersPaginationExample,
    action = {
      type: SET_USERS_PAGINATION,
      usersPagination
    };

  const state = usersReducer(users, action);
  expect(state).toEqual({
    ...users,
    usersPagination
  });
});

test("should set error for the add or edit user form, state property.", () => {
  const addOrEditError = {
      isError: true,
      txt: { "email" : "email is invalid" }
    },
    action = {
      type: SET_ADD_OR_EDIT_ERROR,
      addOrEditError
    };

  const state = usersReducer(users, action);
  expect(state).toEqual({
    ...users,
    addOrEditError
  });
});

test("should set error for the change balance form, state property.", () => {
  const changeBalanceError = {
      isError: true,
      txt: { "amount" : "should be a number" }
    },
    action = {
      type: SET_CHANGE_BALANCE_ERROR,
      changeBalanceError
    };

  const state = usersReducer(users, action);
  expect(state).toEqual({
    ...users,
    changeBalanceError
  });
});

test("should change balance in selected user, state property.", () => {
  const balance = 10,
    selectedUser = Object.assign({}, usersArrExamples[0], {balance}),
    action = {
      type: CHANGE_BALANCE_IN_SELECTED_USER,
      balance
    };

  const state = usersReducer(users, action);
  expect(state.selectedUser.balance).toBe(selectedUser.balance);
});

test("should set loader string, state property.", () => {
  const loader = "loading",
    action = {
      type: SET_LOADER,
      loader
    };

  const state = usersReducer(users, action);
  expect(state).toEqual({
    ...users,
    loader
  });
});

test("should set offset and loader props, state property.", () => {
  const loader = "",
    offset = 0,
    action = {
      type: SET_USERS_PROPS,
      loader,
      offset
    };

  const state = usersReducer(users, action);
  expect(state).toEqual({
    ...users,
    loader,
    offset
  });
});
