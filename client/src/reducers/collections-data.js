import { LOAD_COLLECTIONS, SET_ID } from '../types/collections-data';

const defaultState = {
  collections: [],
  idToLoad: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_COLLECTIONS:
      return {
        ...state,
        collections: action.collections
      };

    case SET_ID:
      return {
        ...state,
        idToLoad: action.id,
        sideToView: false
      };

    default:
      return state;
  }
};
