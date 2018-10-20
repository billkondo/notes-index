import {
  LOAD_NOTES,
  FILTER_ON, 
  FILTER_OFF,
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

export const filterOn = () => {
  return dispatch => {
    dispatch({ type: FILTER_ON });
  }
}

export const filterOff = () => {
  return dispatch => {
    dispatch({ type: FILTER_OFF });
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