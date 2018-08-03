import {
  VIEW_NOTE_LOAD
} from '../types/types';

const defaultState = {
  note: {}
}

const editNoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case VIEW_NOTE_LOAD:
      return {
        ...state, 
        note: action.note
      }

    default: 
      return state;
  }
}

export default editNoteReducer;