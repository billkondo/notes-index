import { ENTER_CREATE_NOTE } from '../types/types';

const defaultState = {
  createNote: false
}

const notesMenuReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ENTER_CREATE_NOTE:
      return {
        ...state, 
        createNote: true
      }

    default: 
      return state;
  }
}

export default notesMenuReducer;