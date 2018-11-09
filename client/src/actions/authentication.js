import { SIGN_IN_USER, SIGN_OUT_USER } from '../types/authentication';

export const setUser = user => dispatch => {
  dispatch({ type: SIGN_IN_USER, user });
};

export const signOutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  dispatch({ type: SIGN_OUT_USER });
};
