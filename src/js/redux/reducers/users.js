const defState = {
  usersArr: [],
  offset: 0,
  selectedUserId: null,
  selectedUser: {},
  loader: "",
  usersPagination: [],
  addOrEditError: {
    isError: false,
    txt: {}
  },
  changeBalanceError: {
    isError: false,
    txt: {}
  }
};

export default (
  state = defState,
  {
    type,
    usersArr,
    selectedUser,
    balance,
    selectedUserId,
    addOrEditError,
    changeBalanceError,
    usersPagination,
    loader,
    offset,
  }) => {

  switch (type) {
    case "RECEIVE_USERS":
      return {
        ...state,
        usersArr
      };

    case "RECEIVE_USER_BY_ID":
      return {
        ...state,
        selectedUser,
        selectedUserId: selectedUser["user_id"]
      };

    case "SET_USERS_PAGINATION":
      return {
        ...state,
        usersPagination,
      };

    case "SET_ADD_OR_EDIT_ERROR":
      return {
        ...state,
        addOrEditError
      };

    case "SET_CHANGE_BALANCE_ERROR":
      return {
        ...state,
        changeBalanceError
      };

    case "CHANGE_BALANCE_IN_SELECTED_USER":
      return {
        ...state,
        selectedUser: {
          ...state.selectedUser,
          balance
        }
      };

    case "SET_LOADER":
      return {
        ...state,
        loader,
      };

    case "SET_USERS_PROPS":
      return {
        ...state,
        offset,
        loader: ""
      };

    default:
      return state;
  }
}