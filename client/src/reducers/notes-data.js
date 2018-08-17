import {  
  LOAD_NOTES, 
  DELETE_NOTE, 
  ADD_NOTE
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
        notes:  state.notes.filter(note => note._id !== action._id)
      }

    case ADD_NOTE:
      return {
        ...state, 
        notes: state.notes.concat(action.note)
      }

    default: 
      return state;
  }
}

export default notesDataReducer;