import { RESET_FAVORITE, NOTES_ARE_LOADED, COLLECTIONS_ARE_LOADED } from '../types/favorite';

const defaultState = {
  notesLoaded: false,
  collectionsLoaded: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case NOTES_ARE_LOADED:
      return {
        ...state,
        notesLoaded: true
      };

    case COLLECTIONS_ARE_LOADED:
      return {
        ...state,
        collectionsLoaded: true
      };

    case RESET_FAVORITE:
      return defaultState;

    default:
      return state;
  }
};
