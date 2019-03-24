import {
  SHOW_MODAL,
  HIDE_MODAL,
  RESET_VIEWED_MODAL,
  SET_CHANGE_BALANCE_MODAL
} from "../../../redux/actions/modal";
import modalReducer, { defStateModal as modal } from "../../../redux/reducers/modal";

test("should set boolean isOpen to true, state property.", () => {
  const isOpen = true,
    action = {
      type: SHOW_MODAL,
      isOpen
    };

  const state = modalReducer(modal, action);
  expect(state).toEqual({
    ...modal,
    isOpen,
  });
});

test("should set boolean isOpen to false and dataToModal to empty object, state property.", () => {
  const isOpen = false,
    dataToModal = {},
    action = {
      type: HIDE_MODAL,
      isOpen,
      dataToModal
    };

  const state = modalReducer(modal, action);
  expect(state).toEqual({
    ...modal,
    isOpen,
    dataToModal
  });
});

test("should reset modalViewed to null, state property.", () => {
  const modalViewed = null,
    action = {
      type: RESET_VIEWED_MODAL,
      modalViewed
    };

  const state = modalReducer(modal, action);
  expect(state).toEqual({
    ...modal,
    modalViewed
  });
});

test("should set change balance modal, state property.", () => {
  const modalViewed = "CHANGE_BALANCE",
    dataToModal = {},
    action = {
      type: SET_CHANGE_BALANCE_MODAL,
      modalViewed,
      dataToModal
    };

  const state = modalReducer(modal, action);
  expect(state).toEqual({
    ...modal,
    modalViewed,
    dataToModal
  });
});
