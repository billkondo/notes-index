import {
  START_MODAL, 
  END_MODAL,
  ENTER_SEARCH_MENU, 
  EXIT_SEARCH_MENU,
  RESET_MODAL,
  SEARCH_NOTES_LOAD, 
  SEARCH_NOTES_UNLOAD,
  FILTER_LOAD, 
  FILTER_UNLOAD
} from '../types/modal';

export const startModal = (redButton, greenButton, WarningMessage, exitFunction) => {
  return dispatch => {
    dispatch({
      type: START_MODAL,
      redButton,
      greenButton, 
      WarningMessage,
      exitFunction
    });
  }
}

export const endModal = () => {
  return dispatch => {
    dispatch({ type: END_MODAL });
  }
}

export const enterSearchMenu = () => {
  return dispatch => {
    dispatch({ type: ENTER_SEARCH_MENU });
  }
}

export const exitSearchMenu = () => {
  return dispatch => {
    dispatch({ type: EXIT_SEARCH_MENU });
  }
}

export const resetModal = () => {
  return dispatch => {
    dispatch({ type: RESET_MODAL });
  }
}

export const searchNotesLoad = () => {
  return dispatch => {
    dispatch({ type: SEARCH_NOTES_LOAD });
  }
}

export const searchNotesUnload = () => {
  return dispatch => {
    dispatch({ type: SEARCH_NOTES_UNLOAD });
  }
}

export const filterLoad = (filterType) => {
  return dispatch => {
    dispatch({ type: FILTER_LOAD, filterType });
  }
}

export const filterUnload = () => {
  return dispatch => {
    dispatch({ type: FILTER_UNLOAD });
  }
}