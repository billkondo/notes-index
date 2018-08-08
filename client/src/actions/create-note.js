import { 
  CREATE_NOTE_ENTER_TITLE, 
  CREATE_NOTE_ENTER_DESCRIPTION,
  CREATE_NOTE_ADD_COMMENT,
  CREATE_NOTE_WRITE_COMMENT,
  CREATE_NOTE_ADD_TAG,
  CREATE_NOTE_RESET,
  CREATE_NOTE_DELETE_COMMENT,
  CREATE_NOTE_DELETE_TAG 
} from '../types/types';

export const enterNewTitle = (newTitle) => {
  return ({
    type: CREATE_NOTE_ENTER_TITLE, 
    title: newTitle
  });
}

export const changeDescription = (newDescription) => {
  return ({
    type: CREATE_NOTE_ENTER_DESCRIPTION, 
    description: newDescription
  });
}

export const addComment = (newComment) => {
  return ({
    type: CREATE_NOTE_ADD_COMMENT,
    newComment
  });
}

export const writeComment = (newComment, id) => {
  return ({
    type: CREATE_NOTE_WRITE_COMMENT,
    newComment, 
    id
  });
}

export const addNewTag = (newTag) => {
  return ({
    type: CREATE_NOTE_ADD_TAG, 
    newTag
  });
}

export const resetNote = () => {
  return ({
    type: CREATE_NOTE_RESET
  });
}

export const deleteComment = (index) => {
  return ({
    type: CREATE_NOTE_DELETE_COMMENT,
    index
  });
}

export const deleteTag = (index) => {
  return ({
    type: CREATE_NOTE_DELETE_TAG,
    index
  });
}