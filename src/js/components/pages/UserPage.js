import React, { useState, useEffect, useCallback } from 'react';
import {useDispatch, useMappedState } from "redux-react-hook";
import AddOrEditUserForm from "../AddOrEditUserForm";
import {requestEditUser, requestUserById, setAddOrEditError} from "../../redux/actions/users";
import Spinner from "../common/Spinner";
import {setChangeBalanceModal, setTransactionModal, showModal} from "../../redux/actions/modal";
import TransactionsForm from "../TransactionsForm";

const mapState = ({users}) => ({users});

export default ({match}) => {
  const { users } = useMappedState(mapState);

  const dispatch = useDispatch();
  const requestAction = useCallback((id, userFields) => dispatch(requestEditUser(id, userFields)), []);
  const requestUserAction = useCallback((userId) => dispatch(requestUserById(userId)), []);
  const setChangeBalanceModalAction = useCallback((dataToModal) => dispatch(setChangeBalanceModal(dataToModal)), []);
  const setTransactionModalAction = useCallback((dataToModal) => dispatch(setTransactionModal(dataToModal)), []);
  const showModalAction = useCallback(() => dispatch(showModal()), []);
  const resetErrorAction = useCallback((addOrEditError) => dispatch(setAddOrEditError(addOrEditError)), []);

  useEffect(() => {
    if(!users.selectedUserId || users.selectedUserId !== match.params.id){
      requestUserAction(match.params.id);
    }
  });

  function showChangeBalanceModal(e) {
    e.preventDefault();
    setChangeBalanceModalAction({"user_id": users.selectedUserId});
    setTimeout(() => {
      showModalAction();
    }, 400)
  }

  function showTransactionsModal(id, dateFrom, dateTo){
    setTransactionModalAction({"user_id": id, dateFrom, dateTo});

    setTimeout(() => {
      showModalAction();
    }, 400)
  }

  function resetError() {
    resetErrorAction({isError: false, txt: {}});
  }

  return (
    <div className="task-page page-content">
      <div className="content-container">
        <div className="row">
          <h1 className="col-24">User #{match.params.id}.</h1>
        </div>

        {
          users.selectedUserId && users.selectedUserId === match.params.id ?
            <div>
              <TransactionsForm
                id={users.selectedUserId}
                requestAction={showTransactionsModal}/>

              <div className="balance-block default-form row mb-20">
                <div className="col-24">
                  <span className="bold">Balance:</span> {users.selectedUser["balance"] + " " + (users.selectedUser["wallet_currency"] ? users.selectedUser["wallet_currency"] : "")}
                  <a href={null} onClick={showChangeBalanceModal} className="form-control submit-btn w-auto m-l-10">change</a>
                </div>
              </div>

              <AddOrEditUserForm
                error={users.addOrEditError}
                currentUser={users.selectedUser}
                requestAction={requestAction}
                resetError={resetError}/>
            </div>
            :
            <Spinner/>
        }
      </div>
    </div>
  );
}