import { ENTER_FILTER_MENU, EXIT_FILTER_MENU } from '../types/filter';

export const enterFilterMenu = filterMode => dispatch => {
  dispatch({
    type: ENTER_FILTER_MENU,
    filterMode
  });
};

export const exitFilterMenu = () => dispatch => {
  dispatch({ type: EXIT_FILTER_MENU });
};
