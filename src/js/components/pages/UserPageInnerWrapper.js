import React, { useState, useEffect, useCallback } from 'react';
import {useDispatch, useMappedState } from "redux-react-hook";
import AddOrEditUserForm from "../AddOrEditUserForm";
import {requestEditUser} from "../../redux/actions/users";
import Spinner from "../common/Spinner";

const mapState = ({users}) => ({users});

export default () => {
  const { users } = useMappedState(mapState);

  const dispatch = useDispatch();
  const requestAction = useCallback((id, userFields) => dispatch(requestEditUser(id, userFields)), []);

  useEffect(() => {
    console.log(users.selectedUser)
  });

  return (
    <div className={"form-wrapper"}>
        {
          !!users.selectedUser["user_id"] ?
            <AddOrEditUserForm error={users.addOrEditError} currentUser={users.selectedUser} requestAction={requestAction}/>
            :
            <Spinner/>
        }
    </div>
  );
}