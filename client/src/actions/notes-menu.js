import { 
  ENTER_CREATE_NOTE,
  CLOSE_CREATE_NOTE, 
  NOTES_MENU_LOAD,
  NOTES_MENU_ENTER_VIEW,
  NOTES_MENU_EXIT_VIEW,
  NOTES_MENU_DELETE_NOTE,
  NOTES_MENU_ADD_NOTE,
  NOTES_MENU_ENTER_EDIT,
  NOTES_MENU_EXIT_EDIT
} from '../types/types';

export const enterCreateNote = () => {
  return ({
    type: ENTER_CREATE_NOTE
  });
}

export const closeCreateNote = () => {
  return ({
    type: CLOSE_CREATE_NOTE
  })
}

export const loadMenuNotes = (notes) => {
  return ({
    type: NOTES_MENU_LOAD,
    notes
  })
}

export const enterView = () => {
  return ({
    type: NOTES_MENU_ENTER_VIEW, 
  })
}

export const exitView = () => {
  return ({
    type: NOTES_MENU_EXIT_VIEW
  })
}

export const deleteNote = (_id) => {
  return ({
    type: NOTES_MENU_DELETE_NOTE,
    _id
  })
}

export const addNote = (note) => {
  return ({
    type: NOTES_MENU_ADD_NOTE, 
    note
  })
}

export const enterEdit = () => {
  return ({
    type: NOTES_MENU_ENTER_EDIT
  })
}

export const exitEdit = () => {
  return ({
    type: NOTES_MENU_EXIT_EDIT
  })
}