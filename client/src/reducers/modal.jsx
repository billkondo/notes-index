import React from 'react';

import {
  START_MODAL,
  END_MODAL,
  RESET_MODAL,
  START_LOADING_MODAL_DATA,
  END_LOADING_MODAL_DATA
} from '../types/modal';

const WarningMessageDefault = () => <div className="modal-text" />;

const exitFunctionDefault = () => {};

const defaultState = {
  modalRender: false,
  redButton: '',
  greenButton: '',
  WarningMessage: WarningMessageDefault,
  exitFunction: exitFunctionDefault,
  isLoading: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case START_MODAL:
      return {
        ...state,
        modalRender: true,
        redButton: action.redButton,
        greenButton: action.greenButton,
        WarningMessage: action.WarningMessage,
        exitFunction: action.exitFunction
      };

    case END_MODAL:
      return {
        ...state,
        modalRender: false
      };

    case RESET_MODAL:
      return defaultState;

    case START_LOADING_MODAL_DATA:
      return {
        ...state,
        isLoading: true
      };

    case END_LOADING_MODAL_DATA:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
