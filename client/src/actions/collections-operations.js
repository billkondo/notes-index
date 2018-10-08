import { 
  WRITE_TITLE,
  ADD_TAG,
  WRITE_TAG,
  WRITE_DESCRIPTION,
  ADD_CHILDREN, 
  REMOVE_CHILDREN,
  RESET_COLLECTION,
  SUBMIT_COLLECTION
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

export const addChildren = (note) => {
  return dispatch => {
    dispatch({
      type: ADD_CHILDREN,
      note
    })
  }
}

export const removeChildren = (note) => {
  return dispatch => {
    dispatch({
      type: REMOVE_CHILDREN, 
      note
    })
  }
}

export const resetCollection = () => {
  return dispatch => {
    dispatch({
      type: RESET_COLLECTION
    })
  }
}

export const submitCollection = () => {
  return (dispatch, getState) => {
    const collection = getState().collectionsOperations;
    console.log(collection);
  }
}