import { 
  ENTER_CREATE_NOTE,
  CLOSE_CREATE_NOTE, 
  NOTES_MENU_LOAD,
  NOTE_MENU_ENTER_VIEW,
  NOTE_MENU_EXIT_VIEW
} from '../types/types';

const defaultState = {
  createNote: false,
  notes: [], 
  viewNote: false
}

const notesMenuReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ENTER_CREATE_NOTE:
      return {
        ...state, 
        createNote: true
      }

    case CLOSE_CREATE_NOTE:
      return {
        ...state, 
        createNote: false
      }

    case NOTES_MENU_LOAD:
      return {
        ...state,
        notes: action.notes
      }

    case NOTE_MENU_ENTER_VIEW: 
      return {
        ...state, 
       viewNote: true
      }

    case NOTE_MENU_EXIT_VIEW:
      return {
        ...state, 
        viewNote: false
      }

    default: 
      return state;
  }
}

export default notesMenuReducer;