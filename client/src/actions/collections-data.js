import {
  LOAD_COLLECTIONS,
  SET_ID
} from '../types/collections-data';

export const loadCollections = (collections) => {
  return dispatch => {
    dispatch({
      type: LOAD_COLLECTIONS,
      collections
    });
  }
}

export const setID = (id) => {
  return dispatch => {
    dispatch({
      type: SET_ID, 
      id
    });
  }
}