import { 
  ENTER_CREATE_NOTE,
  CLOSE_CREATE_NOTE, 
  NOTES_MENU_LOAD,
  NOTE_MENU_ENTER_VIEW,
  NOTE_MENU_EXIT_VIEW
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

const enterView = () => {
  return ({
    type: NOTE_MENU_ENTER_VIEW, 
  })
}

const exitView = () => {
  return ({
    type: NOTE_MENU_EXIT_VIEW
  })
}

export { 
  enterCreateNote, 
  closeCreateNote,
  loadMenuNotes, 
  enterView, 
  exitView
};