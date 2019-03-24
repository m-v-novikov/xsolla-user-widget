import {
  requestUsers,
  REQUEST_USERS,
  receiveUsers,
  RECEIVE_USERS
} from "../../../redux/actions/users";

test("should call request users action.", () => {
  const requestUsersAction = requestUsers(0);

  expect(requestUsersAction).toEqual({
    type: REQUEST_USERS,
    offset: 0
  })
});