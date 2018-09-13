import { SIGN_IN_USER } from '../types/authentication';
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

    default:
      return state;
  }
}