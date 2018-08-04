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

const enterNewTitle = (newTitle) => {
  return ({
    type: CREATE_NOTE_ENTER_TITLE, 
    title: newTitle
  });
}

const enterNewDescription = (newDescription) => {
  return ({
    type: CREATE_NOTE_ENTER_DESCRIPTION, 
    description: newDescription
  });
}

const addComment = (newComment) => {
  return ({
    type: CREATE_NOTE_ADD_COMMENT,
    newComment
  });
}

const writeComment = (newComment, id) => {
  return ({
    type: CREATE_NOTE_WRITE_COMMENT,
    newComment, 
    id
  });
}

const addNewTag = (newTag) => {
  return ({
    type: CREATE_NOTE_ADD_TAG, 
    newTag
  });
}

const resetNote = () => {
  return ({
    type: CREATE_NOTE_RESET
  });
}

const deleteComment = (index) => {
  return ({
    type: CREATE_NOTE_DELETE_COMMENT,
    index
  });
}

const deleteTag = (index) => {
  return ({
    type: CREATE_NOTE_DELETE_TAG,
    index
  });
}

export {
  enterNewTitle, 
  enterNewDescription,
  addComment,
  writeComment, 
  addNewTag,
  resetNote,
  deleteComment,
  deleteTag
}