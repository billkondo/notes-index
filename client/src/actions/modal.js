import {
  START_MODAL, 
  END_MODAL,
  ENTER_SEARCH_MENU, 
  EXIT_SEARCH_MENU,
  RESET_MODAL
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