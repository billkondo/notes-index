import {
  ENTER_MENU,
  EXIT_MENU,
  ENTER_CREATE, 
  EXIT_CREATE,
  ENTER_EDIT,
  EXIT_EDIT,
  ENTER_VIEW, 
  EXIT_VIEW
} from '../types/notes-routes';

export const exitMenu = () => ({
  type: EXIT_MENU
})

export const enterMenu = () => ({
  type: ENTER_MENU
})

export const exitCreate = () => ({
  type: EXIT_CREATE
})

export const enterCreate = () => ({
  type: ENTER_CREATE
})

export const exitEdit = () => ({
  type: EXIT_EDIT
})

export const enterEdit = () => ({
  type: ENTER_EDIT
})

export const exitView = () => ({
  type: EXIT_VIEW
})

export const enterView = () => ({
  type: ENTER_VIEW
})