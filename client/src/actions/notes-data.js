import {  
  LOAD_NOTES, 
  ADD_NOTE, 
  DELETE_NOTE
} from '../types/notes-data';

export const loadNotes = (notes) => {
  return ({
    type: LOAD_NOTES,
    notes
  })
}

export const deleteNote = (_id) => {
  return ({
    type: DELETE_NOTE, 
    _id
  })
}

export const addNote = (note) => {
  return ({
    type: ADD_NOTE, 
    note
  })
}