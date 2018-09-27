import React from 'react';

import { START_MODAL, END_MODAL } from '../types/modal';

const WarningMessageDefault = () => (
  <div className="modal-text">
  </div>
);

const exitFunctionDefault = () => {}

const defaultState = {
  modalRender: false,
  redButton: "",
  greenButton: "",
  WarningMessage: WarningMessageDefault,
  exitFunction: exitFunctionDefault
}

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
      }

    case END_MODAL:
      return {
        ...state, 
        modalRender: false
      }

    default:
      return state;
  }
}