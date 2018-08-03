import { 
  ENTER_CREATE_NOTE,
  CLOSE_CREATE_NOTE, 
  NOTES_MENU_LOAD,
  NOTES_MENU_ENTER_VIEW,
  NOTES_MENU_EXIT_VIEW,
  NOTES_MENU_DELETE_NOTE,
  NOTES_MENU_ADD_NOTE,
  NOTES_MENU_ENTER_EDIT
} from '../types/types';

const defaultState = {
  createNote: false,
  notes: [], 
  viewNote: false,
  editNote: false
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

    case NOTES_MENU_ENTER_VIEW: 
      return {
        ...state, 
       viewNote: true
      }

    case NOTES_MENU_EXIT_VIEW:
      return {
        ...state, 
        viewNote: false
      }

    case NOTES_MENU_DELETE_NOTE: 
      return {
        ...state,
        notes:  state.notes.filter(note => note._id !== action._id)
      }

    case NOTES_MENU_ADD_NOTE:
      return {
        ...state, 
        notes: state.notes.concat(action.note)
      }

    case NOTES_MENU_ENTER_EDIT: 
      return {
        ...state, 
        editNote: true
      }

    default: 
      return state;
  }
}

export default notesMenuReducer;