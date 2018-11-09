import { LOAD_NOTES, SET_ID } from '../types/notes-data';

const defaultState = {
  notes: [],
  idToLoad: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_NOTES:
      return {
        ...state,
        notes: action.notes
      };

    case SET_ID:
      return {
        ...state,
        idToLoad: action.id
      };

    default:
      return state;
  }
};
