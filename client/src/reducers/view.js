import {
  VIEW_COLLECTION_ENTER,
  VIEW_COLLECTION_EXIT,
  VIEW_NOTE_ENTER,
  VIEW_NOTE_EXIT,
  START_LOADING_COLLECTION,
  START_LOADING_NOTE,
  END_LOADING_COLLECTION,
  END_LOADING_NOTE
} from '../types/view';

const defaultState = {
  viewNote: false,
  noteIsLoading: false,
  viewCollection: false,
  collectionIsLoading: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case VIEW_COLLECTION_ENTER:
      return {
        ...state,
        viewCollection: true
      };

    case VIEW_COLLECTION_EXIT:
      return {
        ...state,
        viewCollection: false
      };

    case VIEW_NOTE_ENTER:
      return {
        ...state,
        viewNote: true
      };

    case VIEW_NOTE_EXIT:
      return {
        ...state,
        viewNote: false
      };

    case START_LOADING_NOTE:
      return {
        ...state,
        noteIsLoading: true
      };

    case END_LOADING_NOTE:
      return {
        ...state,
        noteIsLoading: false
      };

    case START_LOADING_COLLECTION:
      return {
        ...state,
        collectionIsLoading: true
      };

    case END_LOADING_COLLECTION:
      return {
        ...state,
        collectionIsLoading: false
      };

    default:
      return state;
  }
};
