import { 
  ENTER_MENU, 
  EXIT_MENU, 
  ENTER_ADD,
  EXIT_ADD
} from '../types/collections-router';

const enterMenu = () => ({ type: ENTER_MENU });
const exitMenu = () => ({ type: EXIT_MENU });

const enterAdd = () => ({ type: ENTER_ADD });
const exitAdd = () => ({ type: EXIT_ADD });

export const transitionMenuToAdd = () => {
  return dispatch => {
    dispatch(exitMenu());
    setTimeout(() => dispatch(enterAdd()), 500);
  }
}

export const transitionAddToMenu = () => {
  return dispatch => {
    dispatch(exitAdd());
    setTimeout(() => dispatch(enterMenu()), 500);
  }
}

