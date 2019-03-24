import {
  SET_MEDIA_SIZE,
  SET_HEADER_MENU_STATE
} from "../../../redux/actions/app";
import appReducer, { defState as app } from "../../../redux/reducers/app";

test("should set mediaSize, state property.", () => {
  const mediaSize = "mobile",
    action = {
      type: SET_MEDIA_SIZE,
      mediaSize,
    };

  const state = appReducer(app, action);
  expect(state).toEqual({
    ...app,
    mediaSize,
  });
});

test("should set menuIsOpen, state property.", () => {
  const menuIsOpen = true,
    action = {
      type: SET_HEADER_MENU_STATE,
      menuIsOpen
    };

  const state = appReducer(app, action);
  expect(state).toEqual({
    ...app,
    menuIsOpen,
  });
});
