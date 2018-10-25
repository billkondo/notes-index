import { SIGN_IN_USER, SIGN_OUT_USER } from '../types/authentication';

export const setUser = (user) => {
  return dispatch => {
    dispatch({ type: SIGN_IN_USER, user });
  }
}

export const signOutUser = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch({ type: SIGN_OUT_USER });
  }
}