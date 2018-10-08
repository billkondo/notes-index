import {
  LOAD_COLLECTIONS
} from '../types/collections-data';

const defaultState = {
  collections: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_COLLECTIONS:
      return {
        ...state, 
        collections: action.collections
      }

    default:
      return state;
  }
}
