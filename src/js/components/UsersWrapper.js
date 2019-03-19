import React, {useEffect, useCallback} from 'react';
import {useDispatch, useMappedState} from "redux-react-hook";
import UsersList from "./UsersList";
import {requestUsers} from "../redux/actions/users";
import ListPaginator from "./common/ListPaginator";

const mapState = ({users}) => ({users});

export default () => {
  const { users } = useMappedState(mapState);

  const dispatch = useDispatch();
  const requestAction = useCallback((offset) => dispatch(requestUsers(offset)), []);

  useEffect(() => {
    requestAction(0);
  }, []);

  return (
    <div>
      <UsersList { ...users }/>
      <ListPaginator { ...users } requestAction={requestAction}/>
    </div>
  );
}