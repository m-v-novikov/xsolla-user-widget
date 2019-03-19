const defState = {
  usersArr: [],
  offset: 0,
  loader: "",
  usersPagination: [],
  addOrEditError: {
    isError: false,
    txt: {}
  }
};

export default (
  state = defState,
  {
    type,
    usersArr,
    addOrEditError,
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