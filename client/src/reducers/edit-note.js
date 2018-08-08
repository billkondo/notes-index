import {
  LOAD_NOTE
} from '../types/edit-note';

const defaultState = {
  note: {}
}

const editNoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_NOTE:
      return {
        ...state, 
        note: action.note
      }

    default: 
      return state;
  }
}

export default editNoteReducer;