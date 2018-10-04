import {
  LOAD_NOTES,
  FILTER_ON, 
  FILTER_OFF
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