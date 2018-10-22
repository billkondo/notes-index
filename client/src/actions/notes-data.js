import {
  LOAD_NOTES,
  REMOVE_NOTE,
  ADD_NOTE,
  SET_ID
} from '../types/notes-data';

export const loadNotes = (notes) => {
  // Receive an Array of notes

  return dispatch => {
    dispatch({
      type: LOAD_NOTES, 
      notes
    });
  }
}

export const addNote = (note) => {
  return dispatch => {
    dispatch({
      type: ADD_NOTE, 
      note
    })
  }
}

export const removeNote = (note) => {
  return dispatch => {
    dispatch({
      type: REMOVE_NOTE, 
      note
    })
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