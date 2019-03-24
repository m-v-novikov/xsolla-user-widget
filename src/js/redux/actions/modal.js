export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const RESET_VIEWED_MODAL = "RESET_VIEWED_MODAL";
export const SET_CHANGE_BALANCE_MODAL = "SET_CHANGE_BALANCE_MODAL";
export const SET_TRANSACTION_MODAL = "SET_TRANSACTION_MODAL";

export const CHANGE_BALANCE = "CHANGE_BALANCE";
export const TRANSACTION_LIST = "TRANSACTION_LIST";

export const showModal = (isOpen = true) => ({type: SHOW_MODAL, isOpen});
export const hideModal = (isOpen = false, dataToModal = {}) => ({type: HIDE_MODAL, isOpen, dataToModal});
export const resetModalViewed = (modalViewed = null) => ({type: RESET_VIEWED_MODAL, modalViewed});
export const setChangeBalanceModal = (dataToModal = {}, modalViewed = CHANGE_BALANCE) => ({type: SET_CHANGE_BALANCE_MODAL, dataToModal, modalViewed});
export const setTransactionModal = (dataToModal = {}, modalViewed = TRANSACTION_LIST) => ({type: SET_TRANSACTION_MODAL, dataToModal, modalViewed});
