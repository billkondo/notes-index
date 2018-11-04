import axios from 'axios';

import {
  RESET_FAVORITE, 
  NOTES_ARE_LOADED, 
  COLLECTIONS_ARE_LOADED
} from '../types/favorite';

import { LOAD_NOTES } from '../types/notes-data';
import { LOAD_COLLECTIONS } from '../types/collections-data';

export const resetFavorite = () => {
  return dispatch => {
    dispatch({ type: RESET_FAVORITE });
  }
}

export const notesAreLoaded = () => {
  return dispatch => {
    dispatch({ type: NOTES_ARE_LOADED });
  }
}

export const collectionsAreLoaded = () => {
  return dispatch => {
    dispatch({ type: COLLECTIONS_ARE_LOADED });
  }
}

export const loadFavoriteNotes = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/notes/favorite')
        .then(res => {
          const notes = res.data.notes;
          
          dispatch({
            type: LOAD_NOTES, 
            notes
          });
          
          dispatch({ type: NOTES_ARE_LOADED });

          resolve(notes);
        })
        .catch(error => reject(error));
    });
  }
}

export const loadFavoriteCollections = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/collections/favorite')
        .then(res => {
          const collections = res.data.collections;
          
          dispatch({
            type: LOAD_COLLECTIONS, 
            collections
          });
          
          dispatch({ type: COLLECTIONS_ARE_LOADED });

          resolve(collections);
        })
        .catch(error => reject(error));
    });
  }
}