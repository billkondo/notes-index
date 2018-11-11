import axios from 'axios';

import { RESET_FAVORITE, NOTES_ARE_LOADED, COLLECTIONS_ARE_LOADED } from '../types/favorite';

import { LOAD_NOTES } from '../types/notes-data';
import { LOAD_COLLECTIONS } from '../types/collections-data';

export const resetFavorite = () => dispatch => {
  dispatch({ type: RESET_FAVORITE });
};

export const notesAreLoaded = () => dispatch => {
  dispatch({ type: NOTES_ARE_LOADED });
};

export const collectionsAreLoaded = () => dispatch => {
  dispatch({ type: COLLECTIONS_ARE_LOADED });
};

export const loadFavoriteNotes = () => dispatch =>
  new Promise((resolve, reject) => {
    axios
      .get('/api/notes/favorite')
      .then(res => {
        const { notes } = res.data;

        dispatch({
          type: LOAD_NOTES,
          notes
        });

        dispatch({ type: NOTES_ARE_LOADED });

        resolve(notes);
      })
      .catch(error => reject(error));
  });

export const loadFavoriteCollections = () => dispatch =>
  new Promise((resolve, reject) => {
    axios
      .get('/api/collections/favorite')
      .then(res => {
        const { collections } = res.data;

        dispatch({
          type: LOAD_COLLECTIONS,
          collections
        });

        dispatch({ type: COLLECTIONS_ARE_LOADED });

        resolve(collections);
      })
      .catch(error => reject(error));
  });
