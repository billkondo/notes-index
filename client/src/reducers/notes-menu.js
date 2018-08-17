import {  
  NOTES_MENU_LOAD,
  NOTES_MENU_DELETE_NOTE,
  NOTES_MENU_ADD_NOTE
} from '../types/types';

const defaultState = {
  notes: []
}

const notesMenuReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NOTES_MENU_LOAD:
      return {
        ...state,
        notes: action.notes
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

    default: 
      return state;
  }
}

export default notesMenuReducer;