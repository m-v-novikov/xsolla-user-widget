import React from 'react';

import DynamicImport from "./../libs/DynamicImport";
import {useMappedState} from "redux-react-hook";
import { CHANGE_BALANCE, TRANSACTION_LIST } from "../../../redux/actions/modal";

const mapState = ({modal}) => ({modal});

export default () => {

  const {modal} = useMappedState(mapState);

  switch (modal.modalViewed) {
    case CHANGE_BALANCE:
      return (<DynamicImport isShowLoading={false} path="common/modals/ChangeBalanceModal"/>);

    case TRANSACTION_LIST:
      return (<DynamicImport isShowLoading={false} path="common/modals/TransactionsList"/>);

    default:
      return null;
  }
}
