import {
  showModal,
  SHOW_MODAL,
  hideModal,
  HIDE_MODAL,
  resetModalViewed,
  RESET_VIEWED_MODAL,
  setChangeBalanceModal,
  SET_CHANGE_BALANCE_MODAL
} from "../../../redux/actions/modal";

test("should call show modal action.", () => {
  const showModalAction = showModal();

  expect(showModalAction).toEqual({
    type: SHOW_MODAL,
    isOpen: true
  })
});

test("should call hide modal action.", () => {
  const hideModalAction = hideModal();

  expect(hideModalAction).toEqual({
    type: HIDE_MODAL,
    isOpen: false,
    dataToModal: {}
  })
});

test("should call reset viewed modal action.", () => {
  const resetModalViewedAction = resetModalViewed();

  expect(resetModalViewedAction).toEqual({
    type: RESET_VIEWED_MODAL,
    modalViewed: null
  })
});

test("should call set change balance modal action.", () => {
  const setChangeBalanceModalAction = setChangeBalanceModal();

  expect(setChangeBalanceModalAction).toEqual({
    type: SET_CHANGE_BALANCE_MODAL,
    dataToModal: {},
    modalViewed: "CHANGE_BALANCE"
  })
});
