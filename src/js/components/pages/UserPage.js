import React, { useState, useEffect, useCallback } from 'react';
import {useDispatch, useMappedState } from "redux-react-hook";
import AddOrEditUserForm from "../AddOrEditUserForm";
import {requestEditUser} from "../../redux/actions/users";

const mapState = ({users}) => ({users});

export default ({match}) => {
  const { users } = useMappedState(mapState);

  const dispatch = useDispatch();
  const requestAction = useCallback((id, userFields) => dispatch(requestEditUser(id, userFields)), []);

  return (
    <div className={"task-page page-content"}>
      <div className="content-container">
        <div className={"row"}>
          <h1 className={"col-24"}>User #{match.params.id}.</h1>
        </div>

        <AddOrEditUserForm error={users.addOrEditError} requestAction={requestAction}/>
      </div>
    </div>
  );
}