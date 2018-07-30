import { 
  ENTER_CREATE_NOTE,
  CLOSE_CREATE_NOTE, 
  NOTES_MENU_LOAD
} from '../types/types';

const defaultState = {
  createNote: false,
  notes: []
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

    default: 
      return state;
  }
}

export default notesMenuReducer;