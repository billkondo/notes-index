import axios from 'axios';

import {
  ENTER_SEARCH_MENU,
  EXIT_SEARCH_MENU,
  LOAD_NOTES,
  LOAD_COLLECTIONS,
  START_LOADING_COLLECTIONS,
  START_LOADING_NOTES,
  END_LOADING_NOTES,
  END_LOADING_COLLECTIONS,
  ADD_NOTE,
  REMOVE_NOTE,
  RESET_ALL,
  LOAD_COLLECTIONS_TO_DELETE,
  LOAD_NOTES_TO_DELETE
} from '../types/search-menu';

export const enterSearchMenu = () => dispatch => {
  dispatch({ type: ENTER_SEARCH_MENU });
};

export const exitSearchMenu = () => dispatch => {
  dispatch({ type: EXIT_SEARCH_MENU });
};

export const loadNotes = notes => dispatch => {
  dispatch({
    type: LOAD_NOTES,
    notes
  });
};

export const loadCollections = collections => dispatch => {
  dispatch({
    type: LOAD_COLLECTIONS,
    collections
  });
};

export const startLoadingNotes = () => (dispatch, getState) => {
  dispatch({ type: START_LOADING_NOTES });

  axios
    .get('/api/notes')
    .then(res => {
      const notesData = res.data;
      const notesToDelete = getState().searchMenu.notesToDelete;

      const notes = notesData.filter(note => {
        for (const noteToDelete of notesToDelete) if (note.id === noteToDelete.id) return false;

        return true;
      });

      dispatch({
        type: LOAD_NOTES,
        notes
      });

      dispatch({ type: END_LOADING_NOTES });
    })
    .catch(err => console.log(err));
};

export const startLoadingCollections = () => dispatch => {
  dispatch({ type: START_LOADING_COLLECTIONS });

  axios
    .get('/api/collections')
    .then(res => {
      const collections = res.data;

      dispatch({
        type: LOAD_COLLECTIONS,
        collections
      });

      dispatch({ type: END_LOADING_COLLECTIONS });
    })
    .catch(err => console.log(err));
};

export const endLoadingNotes = () => dispatch => {
  dispatch({ type: END_LOADING_NOTES });
};

export const endLoadingCollections = () => dispatch => {
  dispatch({ type: END_LOADING_COLLECTIONS });
};

export const addNote = note => dispatch => {
  dispatch({
    type: ADD_NOTE,
    note
  });
};

export const removeNote = note => dispatch => {
  dispatch({
    type: REMOVE_NOTE,
    note
  });
};

export const resetSearchMenu = () => dispatch => {
  dispatch({ type: RESET_ALL });
};

export const loadNotesToDelete = notes => dispatch => {
  dispatch({
    type: LOAD_NOTES_TO_DELETE,
    notes
  });
};

export const loadCollectionsToDelete = collections => dispatch => {
  dispatch({
    type: LOAD_COLLECTIONS_TO_DELETE,
    collections
  });
};
