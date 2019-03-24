export const SET_MEDIA_SIZE = "SET_MEDIA_SIZE";
export const SET_HEADER_MENU_STATE = "SET_HEADER_MENU_STATE";

export const setMediaSize = (mediaSize) => ({ type: SET_MEDIA_SIZE, mediaSize });
export const setMenuState = (menuIsOpen) => ({ type: SET_HEADER_MENU_STATE, menuIsOpen });