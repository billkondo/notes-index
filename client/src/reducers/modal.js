import React from 'react';

import { 
  START_MODAL, 
  END_MODAL,
  ENTER_SEARCH_MENU, 
  EXIT_SEARCH_MENU
} from '../types/modal';

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
  exitFunction: exitFunctionDefault,
  searchRender: false
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

    case ENTER_SEARCH_MENU:
      return {
        ...state, 
        searchRender: true
      }

    case EXIT_SEARCH_MENU: 
      return {
        ...state, 
        searchRender: false
      }

    default:
      return state;
  }
}