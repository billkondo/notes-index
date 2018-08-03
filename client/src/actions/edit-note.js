import {
  EDIT_NOTE_LOAD
} from '../types/types';

const editNoteLoad = (note) => {
  return ({
    type: EDIT_NOTE_LOAD, 
    note
  })
}

export {
  editNoteLoad
};