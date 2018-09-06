import {
  ENTER_MENU,
  EXIT_MENU,
  ENTER_ADD,
  EXIT_ADD
} from '../types/collections-router';

export const enterMenu = () => ({
  type: ENTER_MENU
});

export const exitMenu = () => ({
  type: EXIT_MENU
});

export const enterAdd = () => ({
  type: ENTER_ADD
});

export const exitAdd = () => ({
  type: EXIT_ADD
});