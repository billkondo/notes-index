import {
  ENTER_NOTES_MENU,
  EXIT_NOTES_MENU,
  ENTER_NOTES_CREATE,
  EXIT_NOTES_CREATE, 
  ENTER_NOTES_VIEW, 
  EXIT_NOTES_VIEW,
  ENTER_NOTES_EDIT, 
  EXIT_NOTES_EDIT
} from '../types/css-transitions';

const defaultState = {
  notesMenu: true, 
  notesCreate: true,
  notesEdit: true,
  notesView: true
};

const cssTransitionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ENTER_NOTES_MENU:
      return {
        ...state,
        notesMenu: true
      }

    case EXIT_NOTES_MENU:
      return {
        ...state, 
        notesMenu: false
      }

    case ENTER_NOTES_CREATE:
      return {
        ...state, 
        notesCreate: true
      }

    case EXIT_NOTES_CREATE: 
      return {
        ...state, 
        notesCreate: false
      }

    case ENTER_NOTES_VIEW:
      return {
        ...state, 
        notesView: true
      }

    case EXIT_NOTES_VIEW:
      return {
        ...state, 
        notesView: false
      }

    case ENTER_NOTES_EDIT:
      return {
        ...state, 
        notesEdit: true
      }
    
    case EXIT_NOTES_EDIT:
      return {
        ...state, 
        notesEdit: false
      }

    default:
      return state;
  }
}

export default cssTransitionsReducer;