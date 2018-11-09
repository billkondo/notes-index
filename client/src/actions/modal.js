import {
  START_MODAL,
  END_MODAL,
  RESET_MODAL,
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

export const resetModal = () => {
  return dispatch => {
    dispatch({ type: RESET_MODAL });
  }
}