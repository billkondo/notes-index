import {
  START_MODAL, 
  END_MODAL,
  RESET_MODAL,
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

export const resetModal = () => {
  return dispatch => {
    dispatch({ type: RESET_MODAL });
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