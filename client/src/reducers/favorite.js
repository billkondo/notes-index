import { RESET_FAVORITE, NOTES_ARE_LOADED, COLLECTIONS_ARE_LOADED } from '../types/favorite';

const defaultState = {
  areNotesLoaded: false,
  areCollectionsLoaded: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case NOTES_ARE_LOADED:
      return {
        ...state,
        areNotesLoaded: true
      };

    case COLLECTIONS_ARE_LOADED:
      return {
        ...state,
        areCollectionsLoaded: true
      };

    case RESET_FAVORITE:
      return defaultState;

    default:
      return state;
  }
};
