import { 
  ENTER_CREATE_NOTE,
  CLOSE_CREATE_NOTE, 
  NOTES_MENU_LOAD,
  NOTES_MENU_ENTER_VIEW,
  NOTES_MENU_EXIT_VIEW,
  NOTES_MENU_DELETE_NOTE
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
    type: NOTES_MENU_ENTER_VIEW, 
  })
}

const exitView = () => {
  return ({
    type: NOTES_MENU_EXIT_VIEW
  })
}

const deleteNote = (_id) => {
  return ({
    type: NOTES_MENU_DELETE_NOTE,
    _id
  })
}

export { 
  enterCreateNote, 
  closeCreateNote,
  loadMenuNotes, 
  enterView, 
  exitView,
  deleteNote
};