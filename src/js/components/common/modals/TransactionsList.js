import React, {useState, useEffect, useCallback} from "react";
import ModalWrapper from "./ModalWrapper";
import {useDispatch, useMappedState} from "redux-react-hook";

export default () => {
  return (
    <ModalWrapper
      id="transactions-list"
      title="Transactions List">
      <TransactionsList />
    </ModalWrapper>
  )
}

const mapState = ({modal}) => ({modal});
const TransactionsList = ({closeModal}) => {

  const { modal } = useMappedState(mapState);
  return(
    <div className="modal-sub-content">

      {
        (modal.dataToModal && modal.dataToModal.isTransactionsList) &&
        <ul>
          {
            modal.dataToModal.transactions.map((transaction, i) => {
              return (
                <li key={i}>
                  {transaction.amount}{transaction["digital_operation_type"]}
                </li>
              )
            })
          }
        </ul>
      }

      <a href={null} className="default-btn" onClick={closeModal}>Close</a>
    </div>
  );
};
