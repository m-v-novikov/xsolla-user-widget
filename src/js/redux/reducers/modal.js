const defStateModal = {
  modalViewed: null,
  isOpen: false,
  dataToModal: {}
};

export default (state = defStateModal, {type, isOpen, modalViewed, dataToModal}) => {

  switch (type) {
    case "SHOW_MODAL":
      return {
        ...state,
        isOpen
      };

    case "HIDE_MODAL":
      return {
        ...state,
        isOpen,
        dataToModal
      };

    case "RESET_VIEWED_MODAL":
      return {
        ...state,
        modalViewed
      };

    case "SET_CHANGE_BALANCE_MODAL":
      return {
        ...state,
        modalViewed,
        dataToModal
      };

    default:
      return state;
  }
}