import {
  LOAD_COLLECTIONS
} from '../types/collections-data';

export const loadCollections = (collections) => {
  return dispatch => {
    dispatch({
      type: LOAD_COLLECTIONS,
      collections
    });
  }
}