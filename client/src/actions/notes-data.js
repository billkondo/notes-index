import {
  LOAD_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE
} from '../types/notes-data';

export const loadNotes = (notes) => ({
  type: LOAD_NOTES,
  notes
})

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  id
})

export const addNote = (note) => ({
  type: ADD_NOTE,
  note
})

export const updateNote = (id, note) => ({
  type: UPDATE_NOTE, 
  id, 
  note
})
