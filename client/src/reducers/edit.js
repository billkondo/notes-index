import {
  RESET_EDIT, 
  COLLECTION_IS_LOADED, 
  NOTE_IS_LOADED
} from '../types/edit';

const defaultState = {
  isNoteLoaded: false, 
  isCollectionLoaded: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RESET_EDIT:
      return defaultState;

    case COLLECTION_IS_LOADED:
      return {
        ...state, 
        isCollectionLoaded: true
      }

    case NOTE_IS_LOADED:
      return {
        ...state, 
        isNoteLoaded: true
      }

    default: 
      return state;
  }
}