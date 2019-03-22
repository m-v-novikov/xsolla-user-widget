import React from 'react';

import DynamicImport from "./../libs/DynamicImport";
import {useMappedState} from "redux-react-hook";

const mapState = ({modal}) => ({modal});

export default () => {

  const {modal} = useMappedState(mapState);

  switch (modal.modalViewed) {
    case 'CHANGE_BALANCE':
      return (<DynamicImport isShowLoading={false} path={"common/modals/ChangeBalanceModal"}/>);

    default:
      return null;
  }
}
