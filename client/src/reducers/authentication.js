import { SIGN_IN_USER } from '../types/authentication';

const defaultState = {
  user: {},
  isAuthenticated: false
};

const authenticationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state, 
        isAuthenticated: true
      }

    default:
      return state;
  }
}

export default authenticationReducer;