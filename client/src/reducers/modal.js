import React from 'react';

import { 
  START_MODAL, 
  END_MODAL,
  RESET_MODAL,
  FILTER_LOAD, 
  FILTER_UNLOAD
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
  filterRender: false,
  filterType: 0
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

    case FILTER_LOAD:
      return {
        ...state, 
        filterRender: true,
        filterType: action.filterType
      }

    case  FILTER_UNLOAD:  
      return {
        ...state, 
        filterRender: false,
        filterType: 0
      }

    case RESET_MODAL: 
      return defaultState;

    default:
      return state;
  }
}