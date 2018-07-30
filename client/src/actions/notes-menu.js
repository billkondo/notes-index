import { 
  ENTER_CREATE_NOTE,
  CLOSE_CREATE_NOTE, 
  NOTES_MENU_LOAD
} from '../types/types';

const enterCreateNote = () => {
  return ({
    type: ENTER_CREATE_NOTE
  });
}

const closeCreateNote = () => {
  return ({
    type: CLOSE_CREATE_NOTE
  })
}

const loadMenuNotes = (notes) => {
  return ({
    type: NOTES_MENU_LOAD,
    notes
  })
}

export { 
  enterCreateNote, 
  closeCreateNote,
  loadMenuNotes
};