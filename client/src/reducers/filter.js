import { ENTER_FILTER_MENU, EXIT_FILTER_MENU } from '../types/filter';

const defaultState = {
  shouldRenderFilter: false,

  // Which menu should be rendered ?
  // false: Notes
  // true: Collections
  filterMode: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ENTER_FILTER_MENU:
      return {
        ...state,
        shouldRenderFilter: true,
        filterMode: action.filterMode
      };

    case EXIT_FILTER_MENU:
      return {
        ...state,
        shouldRenderFilter: false
      };

    default:
      return state;
  }
};
