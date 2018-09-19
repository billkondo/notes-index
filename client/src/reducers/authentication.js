import { SIGN_IN_USER, SIGN_OUT_USER } from '../types/authentication';
import isEmpty from 'lodash/isEmpty';

const defaultState = {
  user: {},
  isAuthenticated: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state, 
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }

    case SIGN_OUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      }

    default:
      return state;
  }
}