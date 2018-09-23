import {
  LOAD_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE
} from '../types/notes-data';

export const addNote = (note) => {
  return dispatch => {
    dispatch({
      type: ADD_NOTE,
      note
    });
  }
}

export const deleteNote = (id) => {
  return dispatch => {
    dispatch({
      type: DELETE_NOTE, 
      id
    });
  }
}

export const updateNote = (id, note) => {
  return dispatch => {
    dispatch({
      type: UPDATE_NOTE, 
      id, 
      note
    })
  }
}

export const loadNotes = (notes) => {
  return dispatch => {
    dispatch({
      type: LOAD_NOTES, 
      notes
    });
  }
}
