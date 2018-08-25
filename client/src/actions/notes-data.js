import {
  LOAD_NOTES,
  ADD_NOTE,
  DELETE_NOTE
} from '../types/notes-data';

export const loadNotes = (notes) => ({
  type: LOAD_NOTES,
  notes
})


export const deleteNote = (_id) => ({
  type: DELETE_NOTE,
  _id
})


export const addNote = (note) => ({
  type: ADD_NOTE,
  note
})
