import {
  START_MODAL, 
  END_MODAL
} from '../types/modal';

export const startModal = (redButton, greenButton, WarningMessage, exitFunction) => ({
  type: START_MODAL,
  redButton,
  greenButton, 
  WarningMessage,
  exitFunction
});

export const endModal = () => ({
  type: END_MODAL
});