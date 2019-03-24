import {
  SHOW_MODAL,
  HIDE_MODAL,
  RESET_VIEWED_MODAL,
  SET_CHANGE_BALANCE_MODAL,
  SET_TRANSACTION_MODAL
} from "../actions/modal";

export const defStateModal = {
  modalViewed: null,
  isOpen: false,
  dataToModal: {}
};

export default (state = defStateModal, {type, isOpen, modalViewed, dataToModal}) => {

  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        isOpen
      };

    case HIDE_MODAL:
      return {
        ...state,
        isOpen,
        dataToModal
      };

    case RESET_VIEWED_MODAL:
      return {
        ...state,
        modalViewed
      };

    case SET_CHANGE_BALANCE_MODAL:
      return {
        ...state,
        modalViewed,
        dataToModal
      };

    case SET_TRANSACTION_MODAL:
      return {
        ...state,
        modalViewed,
        dataToModal
      };

    default:
      return state;
  }
}