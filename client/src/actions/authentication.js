import { SIGN_IN_USER } from '../types/authentication';

export const signInUser = () => {
  return dispatch => {
    dispatch({ type: SIGN_IN_USER });
  }
}