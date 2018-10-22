import React from 'react';

import { 
  START_MODAL, 
  END_MODAL,
  ENTER_SEARCH_MENU, 
  EXIT_SEARCH_MENU,
  RESET_MODAL,
  SEARCH_NOTES_LOAD, 
  SEARCH_NOTES_UNLOAD,
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
  searchRender: false,
  notesLoaded: false,
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

    case SEARCH_NOTES_LOAD: 
      return {
        ...state, 
        notesLoaded: true
      }

    case SEARCH_NOTES_UNLOAD: 
      return {
        ...state, 
        notesLoaded: false
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