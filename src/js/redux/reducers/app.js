import {
  SET_MEDIA_SIZE,
  SET_HEADER_MENU_STATE
} from "../actions/app";

export const defState = {
  mediaSize: "desktop",
  menuIsOpen: false,
};

export default (state = defState, { type, mediaSize, menuIsOpen}) => {

  switch (type) {
    case SET_MEDIA_SIZE:
      return {
        ...state,
        mediaSize
      };

    case SET_HEADER_MENU_STATE:
      return {
        ...state,
        menuIsOpen
      };

    default:
      return state;
  }
}
