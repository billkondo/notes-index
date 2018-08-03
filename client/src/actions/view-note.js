import {
  VIEW_NOTE_LOAD
} from '../types/types';

const viewNoteLoad = (note) => {
  return ({
    type: VIEW_NOTE_LOAD,
    note
  })
};

export {
  viewNoteLoad
};