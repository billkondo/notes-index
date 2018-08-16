import {
  ENTER_MENU, 
  EXIT_MENU,
  ENTER_CREATE,
  EXIT_CREATE,
  ENTER_EDIT, 
  EXIT_EDIT, 
  ENTER_VIEW, 
  EXIT_VIEW
} from '../types/notes-routes';

const defaultState = {
  renderMenu: true, 
  renderEdit: false, 
  renderCreate: false,
  renderView: false
};

const notesRoutesReducer = (state = defaultState, action) => {
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
      
    default:
      return state;
  }
}

export default notesRoutesReducer;