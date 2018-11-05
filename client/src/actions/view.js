import axios from 'axios';

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

export const viewCollectionEnter = () => {
  return dispatch => {
    dispatch({ type: VIEW_COLLECTION_ENTER });
  }
}

export const viewCollectionExit = () => {
  return dispatch => {
    dispatch({ type: VIEW_COLLECTION_EXIT });
  }
}

export const viewNoteEnter = () => {
  return dispatch => {
    dispatch({ type: VIEW_NOTE_ENTER });
  }
}

export const viewNoteExit = () => {
  return dispatch => {
    dispatch({ type: VIEW_NOTE_EXIT });
  }
}

export const importNote = (id) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: START_LOADING_NOTE });
  
      axios
        .get(`/api/notes/${id}`)
        .then(res => {
          const note = res.data;
          dispatch({ type: END_LOADING_NOTE });
          resolve(note);
        })  
        .catch(err => reject(err));
    });
  }
}

export const importCollection = (id) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: START_LOADING_COLLECTION });

      axios
        .get(`/api/collections/${id}`)
        .then(res => {
          const collection = res.data;
          dispatch({ type: END_LOADING_COLLECTION });
          resolve(collection);
        })
        .catch(err => reject(err));
    });
  }
}