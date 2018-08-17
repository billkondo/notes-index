import {
  VIEW_NOTE_LOAD
} from '../types/types';

export const viewNoteLoad = (note) => {
  return ({
    type: VIEW_NOTE_LOAD,
    note
  })
};