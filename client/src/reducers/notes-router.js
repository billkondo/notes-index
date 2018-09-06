import {
  ENTER_MENU, 
  EXIT_MENU,
  ENTER_CREATE,
  EXIT_CREATE,
  ENTER_EDIT, 
  EXIT_EDIT, 
  ENTER_VIEW, 
  EXIT_VIEW,
  START_FILTER, 
  END_FILTER
} from '../types/notes-router';

const defaultState = {
  renderMenu: true, 
  renderEdit: false, 
  renderCreate: false,
  renderView: false,
  renderFilter: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ENTER_MENU: 
      return {
        ...state, 
        renderMenu: true
      }

    case EXIT_MENU: 
      return {
        ...state,
        renderMenu: false
      }

    case ENTER_CREATE:
      return {
        ...state,
        renderCreate: true
      }

    case EXIT_CREATE: 
      return {
        ...state, 
        renderCreate: false
      }

    case ENTER_EDIT:
      return {
        ...state, 
        renderEdit: true
      }

    case EXIT_EDIT: 
      return {
        ...state, 
        renderEdit: false
      }

    case ENTER_VIEW:
      return {
        ...state, 
        renderView: true
      }
    
    case EXIT_VIEW: 
      return {
        ...state, 
        renderView: false
      }

    case START_FILTER:
      return {
        ...state, 
        renderFilter: true
      }

    case END_FILTER: 
      return {
        ...state, 
        renderFilter: false
      }
      
    default:
      return state;
  }
}