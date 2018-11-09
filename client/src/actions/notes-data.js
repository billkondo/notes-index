import { LOAD_NOTES, SET_ID } from '../types/notes-data';

export const loadNotes = notes =>
  // Receive an Array of notes

  dispatch => {
    dispatch({
      type: LOAD_NOTES,
      notes
    });
  };

export const setID = id => dispatch => {
  dispatch({
    type: SET_ID,
    id
  });
};
