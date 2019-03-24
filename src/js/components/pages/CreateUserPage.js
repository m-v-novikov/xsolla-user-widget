import React, {useCallback} from 'react';
import AddOrEditUserForm from "../AddOrEditUserForm";
import {useDispatch, useMappedState} from "redux-react-hook";
import {requestCreateUser, setAddOrEditError} from "../../redux/actions/users";


const mapState = ({users}) => ({users});

export default (props) => {

  const { users } = useMappedState(mapState);
  const dispatch = useDispatch();
  const requestAction = useCallback((userFields) => dispatch(requestCreateUser(userFields)), []);
  const resetErrorAction = useCallback((addOrEditError) => dispatch(setAddOrEditError(addOrEditError)), []);

  function resetError() {
    resetErrorAction({isError: false, txt: {}})
  }

  return (
    <div className="create-task-page page-content">
      <div className="content-container">
        <div className="row">
          <h1 className="col-24">Create User.</h1>
        </div>

        <AddOrEditUserForm
          error={users.addOrEditError}
          isCreate={true}
          requestAction={requestAction}
          resetError={resetError}
        />
      </div>
    </div>
  );
}