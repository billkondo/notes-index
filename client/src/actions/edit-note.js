import {
  LOAD_NOTE
} from '../types/edit-note';

export const loadNoteOnEditMode = (note) => {
  return ({
    type: LOAD_NOTE,  
    note
  })
}