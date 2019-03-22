export const showModal = (isOpen = true) => ({type: "SHOW_MODAL", isOpen});
export const hideModal = (isOpen = false, dataToModal = {}) => ({type: "HIDE_MODAL", isOpen, dataToModal});
export const resetModalViewed = (modalViewed = null) => ({type: "RESET_VIEWED_MODAL", modalViewed});
export const setChangeBalanceModal = (dataToModal = {}, modalViewed = "CHANGE_BALANCE") => ({type: "SET_CHANGE_BALANCE_MODAL", dataToModal, modalViewed});
