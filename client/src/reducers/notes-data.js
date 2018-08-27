import {  
  LOAD_NOTES, 
  DELETE_NOTE, 
  ADD_NOTE,
  UPDATE_NOTE
} from '../types/notes-data';

const defaultState = {
  notes: []
}

const notesDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_NOTES:
      return {
        ...state,
        notes: action.notes
      }

    case DELETE_NOTE: 
      return {
        ...state,
        notes:  state.notes.filter(note => note.id !== action.id)
      }

    case ADD_NOTE:
      return {
        ...state, 
        notes: state.notes.concat(action.note)
      }

    case UPDATE_NOTE:
      return {
        ...state, 
        notes: state.notes.map(note => {
          if (note.id === action.id) return action.note;
          return note;
        })
      }

    default: 
      return state;
  }
}

export default notesDataReducer;