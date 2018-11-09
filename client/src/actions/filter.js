import {
  ENTER_FILTER_MENU,
  EXIT_FILTER_MENU
} from '../types/filter';

export const enterFilterMenu = (filterMode) => {
  return dispatch => {
    dispatch({
      type: ENTER_FILTER_MENU,
      filterMode
    });
  }
}

export const exitFilterMenu = () => {
  return dispatch => {
    dispatch({ type: EXIT_FILTER_MENU });
  }
}