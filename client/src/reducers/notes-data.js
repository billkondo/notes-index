import {  
  LOAD_NOTES,
  FILTER_ON,
  FILTER_OFF,
  REMOVE_NOTE, 
  ADD_NOTE
} from '../types/notes-data';

const defaultState = {
  notes: [],
  filter: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_NOTES:
      return {
        ...state,
        notes: action.notes
      }

    case FILTER_ON:
      return {
        ...state, 
        filter: true
      }

    case FILTER_OFF:
      return {
        ...state, 
        filter: false
      }

    case REMOVE_NOTE: 
      return {
        ...state, 
        notes: state.notes.filter(note => note.id != action.note.id)
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