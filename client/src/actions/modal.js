import { START_MODAL, END_MODAL, RESET_MODAL } from '../types/modal';

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
