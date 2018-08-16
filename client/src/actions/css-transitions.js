import {
  ENTER_NOTES_MENU,
  EXIT_NOTES_MENU,
  ENTER_NOTES_CREATE, 
  EXIT_NOTES_CREATE,
  ENTER_NOTES_VIEW, 
  EXIT_NOTES_VIEW,
  ENTER_NOTES_EDIT, 
  EXIT_NOTES_EDIT
} from '../types/css-transitions';

export const enterNotesMenu = () => ({ 
  type: ENTER_NOTES_MENU 
})

export const exitNotesMenu = () => ({
  type: EXIT_NOTES_MENU
}) 

export const enterNotesCreate = () => ({
  type: ENTER_NOTES_CREATE
})

export const exitNotesCreate = () => ({
  type: EXIT_NOTES_CREATE
})

export const enterNotesView = () => ({
  type: ENTER_NOTES_VIEW
})

export const exitNotesView = () => ({
  type: EXIT_NOTES_VIEW
})

export const enterNotesEdit = () => ({
  type: ENTER_NOTES_EDIT
})

export const exitNotesEdit = () => ({
  type: EXIT_NOTES_EDIT
})