import { RESET_EDIT, NOTE_IS_LOADED, COLLECTION_IS_LOADED } from '../types/edit';

export const resetEdit = () => dispatch => {
  dispatch({ type: RESET_EDIT });
};

export const notesIsLoaded = () => dispatch => {
  dispatch({ type: NOTE_IS_LOADED });
};

export const collectionIsLoaded = () => dispatch => {
  dispatch({ type: COLLECTION_IS_LOADED });
};
