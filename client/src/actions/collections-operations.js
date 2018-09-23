import { 
  WRITE_TITLE,
  ADD_TAG,
  WRITE_TAG,
  WRITE_DESCRIPTION
} from '../types/collections-operations';

export const writeTitle = (title) => {
  return dispatch => {
    dispatch({
      type: WRITE_TITLE, 
      title
    })
  }
}

export const addTag = (tag) => {
  return dispatch => {
    dispatch({
      type: ADD_TAG, 
      tag
    });
  }
}

export const writeTag = (tag) => {  
  return dispatch => {
    dispatch({
      type: WRITE_TAG,
      tag
    });
  }
}

export const writeDescription = (description) => {
  return dispatch => {
    dispatch({
      type: WRITE_DESCRIPTION, 
      description
    });
  }
}