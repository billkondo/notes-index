import {
  START_MODAL,
  END_MODAL,
  RESET_MODAL,
  START_LOADING_MODAL_DATA,
  END_LOADING_MODAL_DATA
} from '../types/modal';

export const startModal = (redButton, greenButton, WarningMessage, exitFunction) => dispatch => {
  dispatch({
    type: START_MODAL,
    redButton,
    greenButton,
    WarningMessage,
    exitFunction
  });
};

export const endModal = () => dispatch => {
  dispatch({ type: END_MODAL });
};

export const resetModal = () => dispatch => {
  dispatch({ type: RESET_MODAL });
};

export const startLoadingModalData = () => dispatch => {
  dispatch({ type: START_LOADING_MODAL_DATA });
};

export const endLoadingModalData = () => dispatch => {
  dispatch({ type: END_LOADING_MODAL_DATA });
};
