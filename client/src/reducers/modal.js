import {
  START_EXIT_MODAL, 
  END_EXIT_MODAL
} from '../types/modal';

const defaultState = {
  exitModalRender: false
}

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case START_EXIT_MODAL:
      return {
        ...state, 
        exitModalRender: true
      }

    case END_EXIT_MODAL: 
      return {
        ...state, 
        exitModalRender: false
      }
    
    default: 
      return state;
  }
}

export default modalReducer;