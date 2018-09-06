import { 
  ENTER_MENU,
  EXIT_MENU,
  ENTER_ADD,
  EXIT_ADD
} from '../types/collections-router';

const defaultState = {
  renderMenu: true, 
  renderAdd: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ENTER_MENU:
      return {
        ...state, 
        renderMenu: true
      }

    case EXIT_MENU:
      return {
        ...state,
        renderMenu: false
      }

    case ENTER_ADD: 
      return {
        ...state,
        renderAdd: true
      }

    case EXIT_ADD:
      return {
        ...state,
        renderAdd: false
      }

    default: 
      return state;
  }
}
