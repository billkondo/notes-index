import { 
  WRITE_TITLE,
  WRITE_DESCRIPTION, 
  ADD_COMMENT, 
  WRITE_COMMENT,
  ADD_TAG,
  RESET_NOTE,
  DELETE_COMMENT, 
  DELETE_TAG
} from '../types/create-note';

export const writeTitle = (newTitle) => {
  return ({
    type: WRITE_TITLE, 
    title: newTitle
  });
}

export const writeDescription = (newDescription) => {
  return ({
    type: WRITE_DESCRIPTION, 
    description: newDescription
  });
}

export const addComment = (newComment) => {
  return ({
    type: ADD_COMMENT,
    newComment
  });
}

export const writeComment = (newComment, id) => {
  return ({
    type: WRITE_COMMENT,
    newComment, 
    id
  });
}

export const addTag = (newTag) => {
  return ({
    type: ADD_TAG, 
    newTag
  });
}

export const resetNote = () => {
  return ({
    type: RESET_NOTE
  });
}

export const deleteComment = (index) => {
  return ({
    type: DELETE_COMMENT,
    index
  });
}

export const deleteTag = (index) => {
  return ({
    type: DELETE_TAG,
    index
  });
}

