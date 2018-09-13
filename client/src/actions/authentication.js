import { SIGN_IN_USER } from '../types/authentication';

export const signInUser = (user) => {
  return dispatch => {
    dispatch({ type: SIGN_IN_USER, user });
  }
}