import {
  setMediaSize,
  SET_MEDIA_SIZE,
  setMenuState,
  SET_HEADER_MENU_STATE
} from "../../../redux/actions/app";

test("should get user's media queries", () => {
  const mediaSize = setMediaSize("mobile");

  expect(mediaSize).toEqual({
    type: SET_MEDIA_SIZE,
    mediaSize: "mobile",
  });
});

test("should set boolean for menuIsOpen.", () => {
  const setMenuStateAction = setMenuState(false);

  expect(setMenuStateAction).toEqual({
    type: SET_HEADER_MENU_STATE,
    menuIsOpen: false
  })
});